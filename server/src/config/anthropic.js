import Anthropic from '@anthropic-ai/sdk'

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('[treezone-api] FATAL: ANTHROPIC_API_KEY is not set. Exiting.')
  process.exit(1)
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export default anthropic
