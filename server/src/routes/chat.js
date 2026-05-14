import { Router } from 'express'
import anthropic from '../config/anthropic.js'
import { chatRateLimit } from '../middleware/rateLimit.js'
import { validateChatInput } from '../middleware/validate.js'
import { buildChatMessages } from '../utils/promptBuilder.js'

const router = Router()

/**
 * POST /api/chat
 *
 * Public endpoint — no auth required (embedded widget used by unauthenticated visitors).
 * clerkMiddleware() is registered globally in index.js so req.auth is available
 * if a token is present, but the route does not require it.
 *
 * Middleware chain (order is intentional):
 *   1. chatRateLimit     — cap request volume per IP
 *   2. validateChatInput — validate + sanitize; attaches req.sanitizedMessage
 *                          and req.businessContext (validated against allowlist)
 */
router.options('/', (req, res) => { res.set('Access-Control-Allow-Origin', req.headers.origin || '*'); res.set('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); res.set('Access-Control-Allow-Credentials', 'true'); res.sendStatus(204); })
router.post('/', chatRateLimit, validateChatInput, async (req, res) => {
  console.log('[chat] Handler reached — sanitizedMessage length:', req.sanitizedMessage?.length)
  const { sanitizedMessage, sanitizedMessages, businessContext } = req

  try {
    const { system, messages } = buildChatMessages(sanitizedMessage, businessContext, sanitizedMessages)
    console.log('[chat] Calling Anthropic API — businessContext:', businessContext)

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system,
      messages
    })

    const replyText = response.content[0]?.text

    if (!replyText) {
      console.error('[treezone-api] Anthropic returned empty content block.')
      return res.status(502).json({ error: 'No response received. Please try again.' })
    }

    return res.json({ reply: replyText })
  } catch (err) {
    console.error('[chat] Error name:', err.name)
    console.error('[chat] Error message:', err.message)
    console.error('[chat] Error status:', err.status ?? err.statusCode)
    console.error('[chat] Error stack:', err.stack)

    // Surface a safe status code where possible
    const status = err.status ?? err.statusCode ?? 500
    const clientStatus = status >= 400 && status < 600 ? status : 500

    return res.status(clientStatus).json({
      error: 'Unable to process your message right now. Please try again shortly.'
    })
  }
})

export default router
