# Cairn Showcase Site

A live demonstration platform for Cairn — AI chatbot builds for local businesses. The site showcases two real Aviemore business demos: Free-Ski Aviemore (ski hire and instruction) and TreeZone Aviemore (tree-top adventure). Built with React, Express, and the Anthropic API.

## Overview

Cairn builds AI-powered chatbots for local businesses. This showcase site demonstrates the product with two working examples based on real Aviemore businesses. Visitors can interact with either chatbot demo to see how a tailored AI assistant would feel for their own business.

Each demo assistant is backed by Claude (Anthropic), accessed via a secure Express backend. Users authenticate through Clerk before interacting with the chatbots, ensuring that API usage is gated and accountable. The system is designed to be fast, secure, and straightforward to deploy.

## Architecture

The project follows a strict client/server split. The React frontend handles all user interaction and presentation; the Express backend handles all communication with Anthropic and Clerk verification. The Anthropic API key never touches the browser.

In development, Vite proxies `/api` requests from the frontend to the backend, removing the need for CORS configuration during local development.

```
Browser (React) → Vite dev server → Express (Node.js) → Anthropic API
                                          ↑
                                    Clerk JWT verification
```

### Tech Stack

**Frontend (client/)**
- React 18 + Vite
- Tailwind CSS
- Clerk (auth)
- Lucide React (icons)

**Backend (server/)**
- Node.js + Express
- Anthropic API (claude-haiku-4-5-20251001)
- Clerk Express (auth verification)
- express-rate-limit, helmet, cors

## Project Structure

```
treezone/
  client/                 # React frontend
    src/
      components/         # UI components
        chat/             # Chat-specific components
      pages/              # Route-level pages
  server/                 # Express backend
    src/
      routes/             # API routes
      middleware/         # Auth, rate limiting, validation
      utils/              # Sanitization, prompt building
      config/             # Anthropic client config
  .env.example            # Environment variable template
  .gitignore
  README.md
```

## Setup

### Prerequisites
- Node.js 18+
- Anthropic API key (https://console.anthropic.com)
- Clerk account (https://clerk.com)

### 1. Clone and install

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 2. Configure environment variables

```bash
# Server environment
cp .env.example server/.env

# Client environment
cp client/.env.local.example client/.env.local
```

Edit both `.env` files and fill in:
- `ANTHROPIC_API_KEY` — from console.anthropic.com
- `CLERK_SECRET_KEY` — from Clerk dashboard → API Keys
- `CLERK_PUBLISHABLE_KEY` — from Clerk dashboard → API Keys
- `VITE_CLERK_PUBLISHABLE_KEY` — same publishable key, for the frontend

### 3. Run in development

Open two terminals:

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3001

## API Reference

### POST /api/chat

Requires Clerk authentication (Bearer token in Authorization header).

**Request:**
```json
{
  "message": "What gear do you recommend for deep powder?",
  "businessContext": "freeski"
}
```

**Fields:**
- `message` (required) — the user's chat message
- `businessContext` (optional) — controls which business persona the assistant adopts

| Value | Description |
|-------|-------------|
| `"freeski"` | Free-Ski Aviemore — ski hire and instruction |
| `"treezone-aviemore"` | TreeZone Aviemore — tree-top adventure activities |
| `"combined"` | Combined Cairn showcase context |

If `businessContext` is omitted, the backend falls back to its default system prompt.

**Response:**
```json
{ "reply": "For deep powder, you'll want..." }
```

**Rate limit:** 20 requests per 15 minutes per IP

## Security

This project follows strict security standards:

- **No hardcoded secrets** — all sensitive values via environment variables
- **Clerk authentication** — all chat routes require verified JWT
- **Rate limiting** — 20 req/15min on `/api/chat` via express-rate-limit
- **Input validation** — express-validator enforces type, length, and format
- **Input sanitisation** — HTML stripped, null bytes removed, max 1000 chars
- **Prompt injection mitigation** — system prompt is fixed server-side; user content is wrapped in clear delimiters and never interpolated directly
- **Security headers** — helmet applied to all responses
- **CORS** — restricted to configured CLIENT_URL only
- **Safe error responses** — no stack traces or internal details exposed to clients

## Key Implementation Decisions

1. **Anthropic model: `claude-haiku-4-5-20251001`** — chosen for low latency in chat contexts while maintaining quality
2. **Clerk for auth** — avoids building custom auth, handles token verification reliably
3. **Prompt wrapper pattern** — user content wrapped in `[USER MESSAGE START/END]` delimiters to resist injection attacks
4. **Server-side only API calls** — Anthropic API key never touches the frontend
5. **Vite proxy in dev** — frontend proxies `/api` to backend, avoiding CORS complexity in development
6. **businessContext field** — allows a single backend endpoint to serve multiple business personas without separate routes

## Environment Variables Reference

| Variable | Location | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | server/.env | Anthropic API key |
| `CLERK_SECRET_KEY` | server/.env | Clerk backend secret key |
| `CLERK_PUBLISHABLE_KEY` | server/.env | Clerk publishable key |
| `PORT` | server/.env | Server port (default: 3001) |
| `CLIENT_URL` | server/.env | Frontend URL for CORS |
| `NODE_ENV` | server/.env | development / production |
| `VITE_CLERK_PUBLISHABLE_KEY` | client/.env.local | Clerk publishable key (frontend) |
| `VITE_API_URL` | client/.env.local | Backend URL |
