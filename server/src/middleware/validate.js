import { body, validationResult } from 'express-validator'
import { sanitizeInput } from '../utils/sanitize.js'

const VALID_BUSINESS_CONTEXTS = ['freeski', 'treezone-aviemore', 'combined', 'aviemore-bikes']

/**
 * Validation rules for the chat endpoint.
 * Checks message field exists, is a non-empty string, and is within length limits.
 * Optionally validates businessContext against a strict allowlist.
 */
const chatValidationRules = [
  body('message')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('Message is required.')
    .isString()
    .withMessage('Message must be a string.')
    .trim()
    .notEmpty()
    .withMessage('Message cannot be empty.')
    .isLength({ max: 1000 })
    .withMessage('Message cannot exceed 1000 characters.'),

  body('businessContext')
    .optional()
    .isIn(VALID_BUSINESS_CONTEXTS)
    .withMessage('Invalid business context.')
]

/**
 * validateChatInput middleware.
 *
 * 1. Runs express-validator rules against req.body.message and req.body.businessContext
 * 2. Returns 400 with structured error details if validation fails
 * 3. On success, sanitizes the message and attaches it to req.sanitizedMessage
 *    so the route handler never touches raw user input directly
 * 4. Attaches req.businessContext from the validated (allowlisted) field,
 *    defaulting to 'combined' if not provided
 */
async function validateChatInput(req, res, next) {
  // Run all validation rules
  await Promise.all(chatValidationRules.map(rule => rule.run(req)))

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Invalid input.',
      details: errors.array().map(e => ({ field: e.path, message: e.msg }))
    })
  }

  // Sanitize after validation passes — this is the only value route handlers use
  try {
    req.sanitizedMessage = sanitizeInput(req.body.message)
  } catch (sanitizeError) {
    return res.status(400).json({ error: sanitizeError.message })
  }

  // businessContext is validated against the allowlist above — safe to attach
  // Default to 'combined' if not present
  req.businessContext = VALID_BUSINESS_CONTEXTS.includes(req.body.businessContext)
    ? req.body.businessContext
    : 'combined'

  next()
}

export { validateChatInput }
