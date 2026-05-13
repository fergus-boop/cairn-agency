import { Mountain } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

/**
 * Renders a single chat message.
 * Assistant messages render via react-markdown (safe React tree — no dangerouslySetInnerHTML).
 * User messages render as plain text.
 * No rehype-raw or HTML-enabling plugins are used.
 */

const markdownComponents = {
  p: ({ children }) => (
    <p className="font-body text-sm leading-relaxed mb-2 last:mb-0" style={{ color: 'var(--tz-frost)' }}>
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-body font-semibold" style={{ color: 'var(--tz-snow)' }}>
      {children}
    </strong>
  ),
  ul: ({ children }) => (
    <ul className="space-y-1 my-2 pl-0" style={{ listStyle: 'none' }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1 my-2 pl-4" style={{ color: 'var(--tz-frost)' }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 font-body text-sm leading-relaxed" style={{ color: 'var(--tz-frost)' }}>
      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--tz-mint)' }} />
      <span>{children}</span>
    </li>
  ),
  h1: ({ children }) => (
    <h1 className="font-display font-bold text-base tracking-tight mb-2 mt-3" style={{ color: 'var(--tz-snow)' }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display font-bold text-sm tracking-tight mb-1.5 mt-2.5" style={{ color: 'var(--tz-snow)' }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display font-bold text-xs tracking-wide uppercase mb-1 mt-2" style={{ color: 'var(--tz-mint)' }}>
      {children}
    </h3>
  ),
  hr: () => (
    <hr className="my-3" style={{ borderColor: 'rgba(82,183,136,0.15)' }} />
  ),
  code: ({ children }) => (
    <code className="font-body text-xs px-1.5 py-0.5 rounded-sm" style={{ background: 'rgba(82,183,136,0.1)', color: 'var(--tz-mint)' }}>
      {children}
    </code>
  ),
};

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex items-end gap-2.5 mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}
      style={{
        animation: 'fadeInUp 0.35s ease forwards',
      }}
    >
      {/* Assistant avatar */}
      {!isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center mb-0.5"
          style={{
            background: 'rgba(82,183,136,0.12)',
            border: '1px solid rgba(82,183,136,0.25)',
          }}
          aria-hidden="true"
        >
          <Mountain size={13} style={{ color: 'var(--tz-mint)' }} strokeWidth={2} />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`
          relative max-w-[78%] sm:max-w-[68%] px-4 py-3
          font-body text-sm leading-relaxed
        `}
        style={
          isUser
            ? {
                background: 'rgba(82,183,136,0.18)',
                border: '1px solid rgba(82,183,136,0.35)',
                color: 'var(--tz-snow)',
                borderBottomRightRadius: '2px',
              }
            : {
                background: 'rgba(21,43,30,0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(82,183,136,0.1)',
                color: 'var(--tz-frost)',
                borderBottomLeftRadius: '2px',
              }
        }
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words font-body text-sm leading-relaxed" style={{ color: 'var(--tz-snow)' }}>
            {message.content}
          </p>
        ) : (
          <div className="markdown-content">
            <ReactMarkdown components={markdownComponents}>
              {message.content}
            </ReactMarkdown>
          </div>
        )}

        {/* Sender label */}
        <p
          className="font-display font-bold text-xs tracking-wide mt-2 opacity-50"
          style={{
            color: isUser ? 'var(--tz-mint)' : 'var(--tz-muted)',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
          }}
        >
          {isUser ? 'You' : 'Assistant'}
        </p>
      </div>

      {/* User avatar placeholder */}
      {isUser && (
        <div
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center mb-0.5"
          style={{
            background: 'rgba(82,183,136,0.2)',
            border: '1px solid rgba(82,183,136,0.4)',
          }}
          aria-hidden="true"
        >
          <span
            className="font-display font-black text-xs"
            style={{ color: 'var(--tz-mint)' }}
          >
            U
          </span>
        </div>
      )}
    </div>
  );
}
