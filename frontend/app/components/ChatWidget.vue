<template>
  <div>
    <button
      @click="onFloatingClick"
      class="btn btn-success rounded-circle shadow position-fixed d-flex align-items-center justify-content-center"
      :class="{'isOpen': isOpen}"
      :style="floatingStyle"
      aria-label="Open chat"
    >
      <i class="bi bi-chat-dots-fill fs-4 text-white"></i>
      <span v-if="totalUnread > 0" class="badge bg-danger position-absolute" style="top:-6px; right:-6px; font-size:0.65rem;">
        {{ totalUnread }}
      </span>
    </button>

    <div v-if="isOpen" :class="['position-fixed', 'shadow-lg', 'd-flex', 'flex-column', containerClass]" :style="containerStyle">
      <!-- Header Content -->
      <div class="d-flex align-items-center justify-content-between p-3" :style="headerBg">
        <div class="d-flex align-items-center gap-2">
          <button v-if="isChatScreen" class="btn btn-link text-white p-0 me-2" @click="goToWelcome" :aria-label="'Back'">
            <i class="bi bi-chevron-left fs-4"></i>
          </button>
          <div class="fw-bold text-white" style="font-size:1.05rem;">{{ headerTitle }}</div>
        </div>
        <button class="btn btn-light d-sm-none" @click="closeAll" aria-label="Close chat">&times;</button>
      </div>

      <div class="flex-grow-1 overflow-auto" style="min-height:0;">
        <div v-if="screen === 'welcome'" class="p-4 text-center h-100 d-flex flex-column">
          <img :src="logo" alt="logo" class="mx-auto mb-3" style="width:70px; height:70px; object-fit:contain" />
          <h2 class="text-success fw-bold mb-2">Welcome to Vitales</h2>
          <p class="text-secondary mb-4">We're here to help 24/7.</p>

          <button @click="startNewConversation" class="btn btn-white text-start shadow-sm border rounded-3 w-100 mb-3 p-3 d-flex justify-content-between align-items-center">
            <div>
              <div class="fw-bold">New Conversation</div>
              <small class="text-muted">We typically reply in a few minutes</small>
            </div>
            <i class="bi bi-send text-success fs-4"></i>
          </button>

          <div class="card rounded-3 p-3 mb-3">
            <div class="fw-bold mb-2">Help Center</div>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-search"></i></span>
              <input v-model="kbQuery" @keyup.enter="searchKB" class="form-control" placeholder="Search for answers" />
            </div>
          </div>

          <div class="mt-auto"></div>
        </div>

        <div v-else-if="screen === 'history'" class="p-3">
          <h6 class="mb-3">Recent Conversations</h6>
          <div v-if="conversations.length === 0" class="text-muted">No conversations yet.</div>
          <div v-for="c in conversationsSorted" :key="c.id" class="card mb-2" :class="{'border-2 border-success': c.unreadCount > 0}">
            <div class="card-body p-2 d-flex justify-content-between align-items-center" style="cursor:pointer" @click="openConversation(c.id)">
              <div>
                <div class="fw-bold">{{ c.title || 'Conversation' }}</div>
                <small class="text-muted">{{ c.lastSnippet }}</small>
              </div>
              <div class="text-end">
                <small class="text-muted d-block">{{ timeAgo(c.lastUpdated) }}</small>
                <span v-if="c.unreadCount > 0" class="badge bg-danger">{{ c.unreadCount }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="screen === 'chat'" class="p-3 d-flex flex-column" style="min-height:0;">
          <div ref="chatScroll" class="flex-grow-1 overflow-auto mb-2" style="min-height:0;">
            <div v-if="currentConversation && currentConversation.messages.length === 0" class="text-muted">No messages yet.</div>

            <div v-for="(m, idx) in currentConversation.messages" :key="m.id || idx" class="d-flex mb-2" :class="m.sender === 'user' ? 'justify-content-end' : ''">
              <div v-if="m.sender === 'bot'" class="d-flex align-items-start gap-2">
                <img :src="botAvatar" alt="Bot Avatar" class="rounded-circle" style="width:45px;height:45px; object-fit:cover;" />
                <div class="card p-2 bg-light" style="max-width:75%;"> 
                  <div v-html="m.text"></div> 
                </div>
              </div>
              <div v-else class="card p-2 text-white bg-success" style="max-width:75%;"> <div v-html="m.text"></div> </div>
            </div>
          </div>

          <div class="mb-2 d-flex flex-wrap gap-2" v-if="currentConversation.messages.filter(m => m.sender === 'user').length === 0">
            <button v-for="(q,i) in quickReplies" :key="i" class="btn btn-outline-success btn-sm" @click="sendQuick(q)">{{ q }}</button>
          </div>
        </div>
      </div>

      <div class="p-2 border-top bg-white">
        <div v-if="screen === 'welcome'" class="d-flex align-items-center justify-content-between">
          <div class="d-flex gap-3 align-items-center w-100">
            <button class="btn btn-link text-success p-0 w-50" @click="goHome">
              <i class="bi bi-house-fill fs-4"></i>
            </button>
            <button class="btn btn-link text-secondary p-0 w-50" @click="showHistory">
              <i class="bi bi-chat-left-text fs-4"></i>
            </button>
          </div>
        </div>

        <div v-else-if="screen === 'chat'" class="d-flex gap-2">
          <textarea
            v-model="messageInput"
            @input="adjustHeight"
            @keyup.enter="sendMessage"
            class="form-control custom-textarea"
            placeholder="Type and press [enter]..."
            maxlength="2000"
          ></textarea>
          <button class="send-button" @click="sendMessage">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.8488 8.75775L2.13886 0.606538C1.99515 0.536437 1.83735 0.5 1.67744 0.5C1.0962 0.5 0.625 0.9712 0.625 1.55244V1.58282C0.625 1.72404 0.642316 1.86474 0.676568 2.00174L2.27945 8.41324C2.32323 8.58839 2.4713 8.71776 2.65069 8.73771L9.69586 9.52051C9.94018 9.54763 10.125 9.75412 10.125 10C10.125 10.2459 9.94018 10.4524 9.69586 10.4795L2.65069 11.2623C2.4713 11.2822 2.32323 11.4116 2.27945 11.5868L0.676568 17.9982C0.642316 18.1353 0.625 18.276 0.625 18.4172V18.4476C0.625 19.0288 1.0962 19.5 1.67744 19.5C1.83735 19.5 1.99515 19.4636 2.13886 19.3934L18.8488 11.2423C19.3237 11.0106 19.625 10.5285 19.625 10C19.625 9.47154 19.3237 8.98937 18.8488 8.75775Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div v-else-if="screen === 'history'" class="d-flex justify-content-center">
          <span class="text-muted small">Select a conversation to open</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch, nextTick } from 'vue'
import logo from '@/assets/images/Vitales_photos/Vitales_logo.png'
import botAvatar from '@/assets/images/Vitales_photos/bot-avatar.png'
import axios from 'axios'

const isOpen = ref(false)
const screen = ref('welcome')
const conversations = ref([])
const currentConversationId = ref(null)
const messageInput = ref('')
const kbQuery = ref('')
const quickReplies = ref([
  'What is Vitales?',
  'Why should I choose Vitales?',
])
const chatScroll = ref(null)

const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth < 576
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 576
  })
  loadConversations()
})

const STORAGE_KEY = 'vitales_chat_conversations_v1'

function loadConversations() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    try {
      conversations.value = JSON.parse(raw)
    } catch (e) {
      conversations.value = []
    }
  } else {
    conversations.value = []
  }
}

function saveConversations() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations.value))
}

const containerClass = computed(() => isMobile.value ? 'w-100 h-100 top-0 start-0' : 'rounded-3')
const floatingStyle = computed(() => isMobile.value
  ? 'width:64px;height:64px;bottom:20px;right:20px;z-index:1060;'
  : 'width:56px;height:56px;bottom:20px;right:20px;z-index:1060;'
)

const containerStyle = computed(() => isMobile.value
  ? 'z-index:1050; height:100vh; width:100vw; top:0; left:0;'
  : 'bottom:80px; right:20px; width:420px; height:640px; z-index:1050;'
)

const headerBg = computed(() => ({
  background: 'linear-gradient(113deg, #01D46D 24.15%, #02C49B 84.38%, #008D73 152.29%)'
}))

const headerTitle = computed(() => {
  if (screen.value === 'welcome') return 'Welcome'
  if (screen.value === 'history') return 'Conversations'
  if (screen.value === 'chat') {
    const c = conversations.value.find(x => x.id === currentConversationId.value)
    return c ? (c.title || 'Vitales') : 'Vitales'
  }
  return 'Vitales'
})

const totalUnread = computed(() => conversations.value.reduce((s, c) => s + (c.unreadCount || 0), 0))

const conversationsSorted = computed(() => {
  return [...conversations.value].sort((a,b) => (b.lastUpdated || 0) - (a.lastUpdated || 0))
})

function timeAgo(ts) {
  if (!ts) return ''
  const diff = Date.now() - ts
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return m + 'm'
  const h = Math.floor(m / 60)
  if (h < 24) return h + 'h'
  const d = Math.floor(h / 24)
  return d + 'd'
}

function onFloatingClick() {
  if (isMobile.value) {
    isOpen.value = !isOpen.value
    if (isOpen.value) screen.value = 'welcome'
  } else {
    if (isOpen.value) {
      closeAll()
      return
    }
    const unreadConv = conversations.value.find(c => (c.unreadCount && c.unreadCount > 0))
    if (unreadConv) {
      openConversation(unreadConv.id)
      isOpen.value = true
      return
    }
    isOpen.value = true
    screen.value = 'welcome'
  }
}

function closeAll() {
  isOpen.value = false
  screen.value = 'welcome'
  currentConversationId.value = null
}

function showHistory() {
  screen.value = 'history'
}

function goHome() {
  screen.value = 'welcome'
}

function startNewConversation() {
  const id = Date.now().toString()
  const conv = {
    id,
    title: 'Vitales',
    messages: [
      { id: Date.now() + '-bot', sender: 'bot', text: "Hi! Ask me anything about Vitales!", ts: Date.now() }
    ],
    lastUpdated: Date.now(),
    lastSnippet: "Hi!",
    unreadCount: 0
  }
  conversations.value.push(conv)
  saveConversations()
  openConversation(id)
}

function openConversation(id) {
  const conv = conversations.value.find(c => c.id === id)
  if (!conv) return
  currentConversationId.value = id
  conv.unreadCount = 0
  conv.lastUpdated = Date.now()
  conv.lastSnippet = conv.messages[conv.messages.length - 1].text
  saveConversations()
  screen.value = 'chat'
  
  const el = chatScroll.value;
  if (el) {
    el.scrollTop = el.scrollHeight;
  }
}

const currentConversation = computed(() => conversations.value.find(c => c.id === currentConversationId.value) || { messages: [] })

function sendMessage() {
  if (!messageInput.value.trim()) return;

  const userMessage = messageInput.value.trim();
  const conversation = currentConversation.value;

  conversation.messages.push({ sender: 'user', text: userMessage });

  messageInput.value = '';

  axios.post('http://127.0.0.1:8000/api/chatbot', { message: userMessage })
    .then(response => {
      const botReply = response.data.reply;
      conversation.messages.push({ sender: 'bot', text: botReply });

      scrollToBottom();
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
}

function sendQuick(text) {
  if (!currentConversationId.value) return
  messageInput.value = text
  sendMessage()
}

function goToWelcome() {
  screen.value = 'welcome'
  currentConversationId.value = null
}

function searchKB() {
  alert('Search: ' + kbQuery.value)
  kbQuery.value = ''
}

function scrollToBottom() {
  nextTick(() => {
    const el = chatScroll.value;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  });
}

watch(() => currentConversation.value.messages.length, () => {
  scrollToBottom(); 
}, { immediate: true });

const adjustHeight = (event) => {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`; 
}
</script>

<style scoped>
.position-fixed.rounded-3 {
  background-color: #ffffff;
  border-radius: 25px !important;
}

.card.p-2 {
  border-radius: 10px;
}

.card.p-2.bg-light {
  background-color: #f8f9fa;
}

.card.p-2.bg-success {
  background-color: #28a745;
}

.bg-white {
  background-color: #ffffff;
}

.flex-grow-1 {
  background-color: #ffffff;
  border-radius: 25px !important;
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
}

@media (max-width: 576px) {
  .isOpen {
    display: none !important;
  }
}

.custom-textarea {
  border: none;
  outline: none;
  height: 40px; /* Chiều cao mặc định là 1 dòng */
  max-height: 200px; /* Giới hạn chiều cao tối đa */
  resize: none; /* Không cho phép thay đổi kích thước */
  padding: 10px; /* Khoảng cách giữa nội dung và biên */
  border-radius: 5px;
  overflow-y: auto;
}

.custom-textarea:focus {
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.2); 
}

.custom-input {
  border: none; 
  outline: none; 
}

.icon-button,
.send-button {
  border: none;
  background-image: linear-gradient(41.22deg, #003fb8 -.84%, #00ffb3 100.62%) !important;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
}

.send-button svg {
  width: 20px;
  height: 20px;
}

/* Giới hạn độ rộng tin nhắn bot */
.card.p-2.bg-light {
  max-width: 75%;  /* Giới hạn độ rộng của tin nhắn bot */
  word-wrap: break-word; /* Ngắt từ nếu cần thiết */
  white-space: pre-wrap; /* Ngắt dòng tự động nếu cần */
  margin-bottom: 10px; /* Khoảng cách giữa các tin nhắn */
  word-break: break-word;  /* Ngắt từ nếu từ quá dài */
}

/* Điều chỉnh cho màn hình nhỏ */
@media (max-width: 576px) {
  .card.p-2.bg-light {
    max-width: 90%;  /* Giảm độ rộng tin nhắn cho màn hình nhỏ */
  }
}

/* Điều chỉnh cho màn hình trung bình */
@media (min-width: 577px) {
  .card.p-2.bg-light {
    max-width: 80%;  /* Giới hạn độ rộng tin nhắn cho màn hình trung bình */
  }
}

/* Điều chỉnh cho màn hình lớn */
@media (min-width: 992px) {
  .card.p-2.bg-light {
    max-width: 70%;  /* Giới hạn độ rộng tin nhắn cho màn hình lớn */
  }
}

.flex-grow-1::-webkit-scrollbar {
  width: 6px; /* Kích thước thanh cuộn dọc */
}

/* Thay đổi phần thân của thanh cuộn */
.flex-grow-1::-webkit-scrollbar-thumb {
  background-color: #28a745; /* Màu xanh */
  border-radius: 10px; /* Cạnh dẹp */
}

/* Thay đổi phần nền của thanh cuộn */
.flex-grow-1::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của thanh cuộn */
  border-radius: 10px;
}
</style>
