import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import chatRouter from './src/routes/chat.js'

const app = express()
const PORT = process.env.PORT || 3003

const corsOptions = {
  origin: process.env.CLIENT_URL
    ? [process.env.CLIENT_URL]
    : ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}

app.use((req, res, next) => {
  console.log(`[debug] ${req.method} ${req.path} from origin: ${req.headers.origin}`);
  next();
})

console.log('[debug] CORS origins:', JSON.stringify(corsOptions.origin))

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use(helmet())
app.use(clerkMiddleware())
app.use(express.json({ limit: '10kb' }))

app.use('/api/chat', chatRouter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'treezone-api' })
})

app.use((err, req, res, next) => {
  console.error('[treezone-api] Unhandled error:', err.stack)
  res.status(err.status || 500).json({ error: 'Something went wrong. Please try again.' })
})

app.listen(PORT, () => {
  console.log(`treezone server running on port ${PORT}`)
  console.log('[startup] ANTHROPIC_API_KEY set:', !!process.env.ANTHROPIC_API_KEY)
  console.log('[startup] CLERK_SECRET_KEY set:', !!process.env.CLERK_SECRET_KEY)
  console.log('[startup] CLERK_PUBLISHABLE_KEY set:', !!process.env.CLERK_PUBLISHABLE_KEY)
  console.log('[startup] NODE_ENV:', process.env.NODE_ENV)
})
