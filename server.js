import express from 'express'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import jwt from 'jsonwebtoken'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ── Config ──────────────────────────────────────────────
const PORT = process.env.PORT || 3000
const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const DATA_PATH = process.env.DATA_PATH || path.join(__dirname, 'data', 'messages.json')

// ── JSON File Database ──────────────────────────────────
const dataDir = path.dirname(DATA_PATH)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

function loadMessages() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
    }
  } catch { /* ignore parse errors, start fresh */ }
  return []
}

function saveMessages(messages) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(messages, null, 2))
}

let messages = loadMessages()
let nextId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1

// ── Express ─────────────────────────────────────────────
const app = express()
app.use(express.json())

// ── Auth middleware ──────────────────────────────────────
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  try {
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

// ── API Routes ──────────────────────────────────────────

// Contact form submission (public)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  if (email.length > 320 || name.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'Input too long' })
  }
  try {
    const newMessage = {
      id: nextId++,
      name,
      email,
      message,
      read: 0,
      created_at: new Date().toISOString(),
    }
    messages.push(newMessage)
    saveMessages(messages)
    res.json({ success: true, id: newMessage.id })
  } catch (err) {
    console.error('Save error:', err)
    res.status(500).json({ error: 'Failed to save message' })
  }
})

// Admin login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '24h' })
    res.json({ token })
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
})

// Get all messages (admin)
app.get('/api/admin/messages', authMiddleware, (req, res) => {
  const sorted = [...messages].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  const unreadCount = messages.filter(m => m.read === 0).length
  res.json({ messages: sorted, unreadCount })
})

// Mark message as read (admin)
app.patch('/api/admin/messages/:id/read', authMiddleware, (req, res) => {
  const id = parseInt(req.params.id)
  const msg = messages.find(m => m.id === id)
  if (msg) {
    msg.read = 1
    saveMessages(messages)
  }
  res.json({ success: true })
})

// Delete message (admin)
app.delete('/api/admin/messages/:id', authMiddleware, (req, res) => {
  const id = parseInt(req.params.id)
  messages = messages.filter(m => m.id !== id)
  saveMessages(messages)
  res.json({ success: true })
})

// Get message stats (admin)
app.get('/api/admin/stats', authMiddleware, (req, res) => {
  const total = messages.length
  const unread = messages.filter(m => m.read === 0).length
  const todayStr = new Date().toISOString().slice(0, 10)
  const today = messages.filter(m => m.created_at.slice(0, 10) === todayStr).length
  res.json({ total, unread, today })
})

// ── Serve React app ─────────────────────────────────────
const distPath = path.join(__dirname, 'dist')
app.use(express.static(distPath))

// SPA fallback — serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

// ── Start ───────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
