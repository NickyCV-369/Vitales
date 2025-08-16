const Redis = require("ioredis");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const VECTOR_DIM = 1536;

async function createVectorIndex() {
    try {
        await redis.call(
            "FT.CREATE", "cms_index",
            "ON", "HASH",
            "PREFIX", "1", "cms:",
            "SCHEMA",
            "title", "TEXT",
            "content", "TEXT",
            "embedding", "VECTOR", "FLAT", "6",
            "TYPE", "FLOAT32",
            "DIM", VECTOR_DIM.toString(),
            "DISTANCE_METRIC", "COSINE",
        );
        console.log("✅ Created Redis Vector Index: cms_index");
    } catch (err) {
        if (err.message.includes("Index already exists")) {
            console.log("ℹ️ Index already exists, skipping create.");
        } else {
            console.error("❌ Error creating index:", err);
        }
    }
}

function float32Buffer(arr) {
    return Buffer.from(new Float32Array(arr).buffer);
}

async function updateCMSData() {
    try {
        console.log("📡 Fetching CMS data...");
        const response = await fetch(process.env.CMS_API_URL);
        const cmsData = await response.json();

        if (!Array.isArray(cmsData) || cmsData.length === 0) {
            console.log("⚠️ No CMS data found.");
            return;
        }

        for (const item of cmsData) {
            const text = `${item.title}\n${item.content}`;
            const redisKey = `cms:${item.id}`;  

            const embeddingRes = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: text,
            });

            const vector = embeddingRes.data[0].embedding;

            await redis.hset(redisKey, {
                title: item.title,
                content: item.content,
                embedding: float32Buffer(vector)
            });

            console.log(`Indexed CMS item: ${redisKey}`);
        }

        console.log("Done updating CMS embeddings!");
    } catch (err) {
        console.error("Error updating CMS data:", err);
    } 
}

(async () => {
    await createVectorIndex();
    await updateCMSData();
})();
