import { requireAuth as clerkRequireAuth } from '@clerk/express'

const clerkMiddlewareInstance = clerkRequireAuth()

export const requireAuth = (req, res, next) => {
  console.log('[auth] requireAuth triggered — method:', req.method, 'path:', req.path)
  console.log('[auth] Authorization header present:', !!req.headers.authorization)
  console.log('[auth] Authorization header prefix:', req.headers.authorization?.substring(0, 20))

  clerkMiddlewareInstance(req, res, (err) => {
    if (err) {
      console.error('[auth] Clerk middleware error:', err.message)
      console.error('[auth] Error name:', err.name)
      console.error('[auth] Error status:', err.status ?? err.statusCode)
      console.error('[auth] Full error:', err)
      return next(err)
    }
    console.log('[auth] Clerk auth passed — userId:', req.auth?.userId ?? 'none')
    next()
  })
}
