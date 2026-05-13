import rateLimit from 'express-rate-limit'

/**
 * Rate limiter for /api/chat.
 *
 * 20 requests per 15-minute window per IP.
 * Generous enough for real usage, tight enough to prevent abuse.
 */
export const chatRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: {
    error: 'Too many requests. Please wait before sending more messages.'
  },
  standardHeaders: true,  // Return rate limit info in RateLimit-* headers
  legacyHeaders: false     // Disable X-RateLimit-* headers
})
