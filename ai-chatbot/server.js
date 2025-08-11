// server-rag.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const Redis = require('ioredis');
const OpenAI = require('openai');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const winston = require('winston');
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 5000;

/* -------------------- basic middleware -------------------- */
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: '50kb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 120,
  message: 'Too many requests, please try again later.',
});
app.use('/api/', limiter);

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'chatbot-error.log', level: 'error' }),
  ],
});

/* -------------------- redis client -------------------- */
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD || undefined,
});

/* -------------------- OpenAI client -------------------- */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/* -------------------- helpers -------------------- */
const textSchema = Joi.object({
  message: Joi.string().min(1).max(2000).required(),
});

function chunkText(text, maxTokens = 500) {
  // Simple chunk by characters; you can swap to token-based if needed
  const approxChars = maxTokens * 4; // heuristic
  const chunks = [];
  for (let i = 0; i < text.length; i += approxChars) {
    chunks.push(text.slice(i, i + approxChars));
  }
  return chunks;
}

function jwtAuthMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'Missing Authorization header' });
  const [, token] = auth.split(' ');
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

/* -------------------- Admin: ingest CMS -> Pinecone -------------------- */
/**
 * POST /api/ingest-cms
 * Body: { endpoints: ['/wp-json/wp/v2/posts', ...] } or omitted for default
 * Protected by JWT (admin).
 */
function float32Buffer(arr) {
  return Buffer.from(new Float32Array(arr).buffer);
}

app.post('/api/ingest-cms', jwtAuthMiddleware, async (req, res) => {
  try {
    // Dùng thẳng CMS_API_URL, hoặc từ body.endpoints nếu bạn muốn override
    const endpoints = req.body.endpoints && req.body.endpoints.length > 0 
      ? req.body.endpoints 
      : [process.env.CMS_API_URL];

    for (const url of endpoints) {
      const resp = await axios.get(url);
      const items = Array.isArray(resp.data) ? resp.data : [resp.data];

      for (const item of items) {
        const id = item.id || Math.random().toString(36).slice(2);
        const title = item.title || '';
        const content = item.content || item.body || '';
        const cleanText = (title + '\n' + content).replace(/<[^>]+>/g, '').trim();

        if (!cleanText) continue;

        const chunks = chunkText(cleanText, 500);
        for (let i = 0; i < chunks.length; i++) {
          const chunk = chunks[i];

          const exists = await redis.exists(`cms:${id}::${i}`);
          if (!exists) {
            await redis.hset(`cms:${id}::${i}`, {
              title,
              content: chunk,
              source: url,
            });
          }
        }
      }
    }
    return res.json({ status: 'ok', message: 'Ingested CMS into Redis Vector Search' });
  } catch (err) {
    logger.error('Ingest error', err);
    return res.status(500).json({ error: 'Ingest failed', detail: err.message });
  }
});

/* -------------------- Chat endpoint (RAG + guardrail + cache) -------------------- */
app.post('/api/chatbot', async (req, res) => {
  const { error } = textSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { message, userId } = req.body;
  const replyCacheKey = `reply:${message}`;

  try {
    // 1. Check cache câu trả lời
    const cachedReply = await redis.get(replyCacheKey);
    if (cachedReply) {
      return res.json({ reply: cachedReply, source: 'cache' });
    }

    // 2. BM25 Text Search
    const bm25Results = await redis.call(
      'FT.SEARCH',
      'cms_index',
      message,
      'RETURN', '4', 'title', 'content', 'source', 'vector_score',
      'LIMIT', '0', '3'
    );

    let matches = [];
    if (bm25Results.length > 1) {
      for (let i = 1; i < bm25Results.length; i += 2) {
        const fields = bm25Results[i + 1];
        const data = {};
        for (let j = 0; j < fields.length; j += 2) {
          data[fields[j]] = fields[j + 1];
        }
        matches.push({
          title: data.title,
          content: data.content,
          source: data.source || 'BM25',
          score: null
        });
      }
    }

    // Nếu BM25 có kết quả → feed vào AI luôn
    if (matches.length > 0) {
      return await sendToAI(matches, message, replyCacheKey, res, 'bm25');
    }

    // 3. Nếu không có BM25 → Vector Search
    const embeddingCacheKey = `embedding:${message}`;
    let qEmbedding;
    const cachedEmbedding = await redis.getBuffer(embeddingCacheKey);
    if (cachedEmbedding) {
      const alignedBuf = Buffer.from(cachedEmbedding);
      qEmbedding = new Float32Array(
        alignedBuf.buffer,
        alignedBuf.byteOffset,
        alignedBuf.length / Float32Array.BYTES_PER_ELEMENT
      );
    } else {
      const embResp = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: message,
      });
      qEmbedding = embResp.data[0].embedding;
      await redis.set(
        embeddingCacheKey,
        Buffer.from(new Float32Array(qEmbedding).buffer),
        'EX',
        60 * 60 * 24 * 7
      );
    }

    const topK = 5;
    const results = await redis.call(
      'FT.SEARCH',
      'cms_index',
      `*=>[KNN ${topK} @embedding $vec_param AS vector_score]`,
      'PARAMS', '2',
      'vec_param', Buffer.from(new Float32Array(qEmbedding).buffer),
      'SORTBY', 'vector_score',
      'ASC',
      'RETURN', '4',
      'title', 'content', 'source', 'vector_score',
      'LIMIT', '0', `${topK}`,
      'DIALECT', '2'
    );

    matches = [];
    for (let i = 1; i < results.length; i += 2) {
      const fields = results[i + 1];
      const data = {};
      for (let j = 0; j < fields.length; j += 2) {
        data[fields[j]] = fields[j + 1];
      }
      matches.push({
        title: data.title,
        content: data.content,
        source: data.source,
        score: parseFloat(data.vector_score)
      });
    }

    // Luôn feed vào AI, không check threshold
    return await sendToAI(matches, message, replyCacheKey, res, 'vector-search');

  } catch (err) {
    logger.error('Chat error', err);
    return res.status(500).json({ error: 'Chat failed', detail: err.message });
  }
});

// Hàm gửi dữ liệu vào AI
async function sendToAI(matches, message, replyCacheKey, res, source) {
  const contexts = matches.map(m =>
    `Source: ${m.source}\nTitle: ${m.title}\nText excerpt:\n${m.content}${m.score !== null ? `\nScore: ${m.score}` : ''}`
  ).join('\n---\n');

  const systemPrompt = `
Bạn là trợ lý hỗ trợ Vitales.
- Luôn trả lời dựa trên dữ liệu nguồn được cung cấp; chỉ trả lời khi câu hỏi liên quan đến Vitales.
- Ngôn ngữ trả lời mặc định là ngôn ngữ người hỏi; đổi sang ngôn ngữ khác nếu được yêu cầu.
- Nếu người dùng chào bạn, hãy chào lại và hỏi họ có câu hỏi gì về Vitales không
- Có thể tùy biến câu trả lời nếu vẫn liên quan đến Vitales.
- Nếu câu hỏi hoàn toàn không liên quan, trả lời chính xác theo ngôn ngữ người hỏi:
  "Xin lỗi, nhưng tôi được đào tạo để hỗ trợ các câu hỏi liên quan đến Vitales. Bạn có câu hỏi nào liên quan đến Vitales không?".
`;

  const userPrompt = `Dữ liệu tham khảo:\n${contexts}\n\nHỏi: ${message}`;

  const aiResp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    max_tokens: 800,
  });

  const botReply = aiResp.choices[0]?.message?.content || 'Có lỗi khi tạo phản hồi từ AI.';
  await redis.set(replyCacheKey, botReply, 'EX', 60 * 60 * 2);

  return res.json({ reply: botReply, source });
}

/* -------------------- Feedback endpoint (for RL loop) -------------------- */
const feedbackSchema = Joi.object({
  question: Joi.string().required(),
  answer: Joi.string().required(),
  feedback: Joi.string().valid('up', 'down').required(),
  comment: Joi.string().allow('', null),
  userId: Joi.string().allow(null),
});
app.post('/api/feedback', async (req, res) => {
  const { error } = feedbackSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const entry = {
    ...req.body,
    ts: Date.now(),
  };
  try {
    // store as a Redis list for later batch processing
    await redis.lpush('feedback_queue', JSON.stringify(entry));
    return res.json({ status: 'ok' });
  } catch (err) {
    logger.error('Feedback error', err);
    return res.status(500).json({ error: 'Failed to store feedback' });
  }
});

/* -------------------- Admin generate JWT (for testing only) -------------------- */
app.post('/api/admin/token', (req, res) => {
  // in production protect this route with credentials (or remove). This is just for convenience.
  const adminSecret = process.env.ADMIN_SECRET || 'adminpass';
  const { secret } = req.body || {};
  if (secret !== adminSecret) return res.status(403).json({ error: 'Forbidden' });
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '12h' });
  res.json({ token });
});

/* -------------------- Scheduler: periodic ingest -------------------- */
// runs daily at 02:00 server time (configurable)
cron.schedule(process.env.INGEST_CRON || '0 2 * * *', async () => {
  try {
    logger.info('Running scheduled ingest job...');
    // call internal admin ingest route using JWT (could also call a function)
    // for simplicity, we call the function directly by hitting route handler would need request mocking.
    // Here we'd just call the CMS ingest logic directly - reuse code by extracting to a function in real project.
    // For demo: trigger ingest by calling the endpoint assuming ADMIN_SECRET is set
    const adminSecret = process.env.ADMIN_SECRET || 'adminpass';
    await axios.post(`http://localhost:${port}/api/ingest-cms`, { endpoints: [] }, { headers: { Authorization: `Bearer ${jwt.sign({ role: 'admin'}, process.env.JWT_SECRET, {expiresIn: '5m'})}`, 'Content-Type': 'application/json' }});
    logger.info('Scheduled ingest finished.');
  } catch (err) {
    logger.error('Scheduled ingest failed', err);
  }
});

/* -------------------- start server -------------------- */
app.listen(port, () => {
  logger.info(`RAG chatbot server listening on port ${port}`);
});
