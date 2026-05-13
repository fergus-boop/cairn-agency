const MAX_INPUT_LENGTH = 1000

/**
 * Sanitizes user input before it enters the prompt pipeline.
 * - Trims leading/trailing whitespace
 * - Removes null bytes (common in injection attempts)
 * - Strips HTML tags to prevent markup injection
 * - Enforces hard character limit
 *
 * @param {string} input - Raw user-supplied string
 * @returns {string} Cleaned, safe string
 * @throws {Error} If input exceeds MAX_INPUT_LENGTH after cleaning
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string.')
  }

  // Trim whitespace
  let cleaned = input.trim()

  // Remove null bytes
  cleaned = cleaned.replace(/\0/g, '')

  // Strip HTML tags
  cleaned = cleaned.replace(/<[^>]*>/g, '')

  // Enforce length limit after all cleaning
  if (cleaned.length > MAX_INPUT_LENGTH) {
    throw new Error(`Input exceeds maximum length of ${MAX_INPUT_LENGTH} characters.`)
  }

  return cleaned
}
