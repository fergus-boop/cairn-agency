import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain, AlertTriangle } from 'lucide-react';
import MessageBubble from './MessageBubble.jsx';
import MessageInput from './MessageInput.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import SuggestedPrompts from './SuggestedPrompts.jsx';

export default function ChatShell({ messages, onSendMessage, isLoading, error, businessName, businessContext }) {
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Scroll to bottom when messages change or loading state changes
  useEffect(() => {
    const el = messagesEndRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const isEmpty = messages.length === 0 && !isLoading;

  const displayName = businessName || 'cAirn';

  return (
    <div
      className="flex flex-col h-screen"
      style={{ background: 'var(--tz-black)' }}
    >
      {/* Top bar */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-5 lg:px-8 py-4"
        style={{
          background: 'rgba(8,13,10,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(82,183,136,0.1)',
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-body text-sm transition-colors hover:text-tz-mint"
          style={{ color: 'var(--tz-muted)' }}
          aria-label="Back to home"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">Back</span>
        </Link>

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 flex items-center justify-center flex-shrink-0"
            style={{
              background: 'rgba(82,183,136,0.12)',
              border: '1px solid rgba(82,183,136,0.25)',
            }}
          >
            <Mountain size={13} style={{ color: 'var(--tz-mint)' }} strokeWidth={2} />
          </div>
          <span
            className="font-display font-black text-sm tracking-tight"
            style={{ color: 'var(--tz-snow)' }}
          >
            {displayName}
          </span>
          <span
            className="hidden sm:block font-body text-xs ml-1"
            style={{ color: 'var(--tz-muted)' }}
          >
            assistant
          </span>
        </div>

        {/* Status dot */}
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: isLoading ? 'var(--tz-frost)' : 'var(--tz-mint)',
              animation: isLoading ? 'pulseSlow 1s ease-in-out infinite' : 'none',
            }}
          />
          <span
            className="font-body text-xs hidden sm:inline"
            style={{ color: 'var(--tz-muted)' }}
          >
            {isLoading ? 'Thinking...' : 'Online'}
          </span>
        </div>
      </header>

      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="max-w-3xl mx-auto">
          {isEmpty ? (
            <SuggestedPrompts onSelectPrompt={onSendMessage} businessName={businessName} />
          ) : (
            <div className="space-y-2">
              {messages.map((message, index) => (
                <MessageBubble key={index} message={message} />
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}

          {/* Error state */}
          {error && (
            <div
              className="flex items-start gap-3 mt-4 p-4"
              style={{
                background: 'rgba(248,113,113,0.08)',
                border: '1px solid rgba(248,113,113,0.25)',
              }}
            >
              <AlertTriangle
                size={16}
                className="flex-shrink-0 mt-0.5"
                style={{ color: '#f87171' }}
              />
              <div>
                <p
                  className="font-body text-sm font-medium"
                  style={{ color: '#fca5a5' }}
                >
                  Something went wrong
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: 'rgba(252,165,165,0.7)' }}
                >
                  {error}
                </p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div
        className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-4"
        style={{
          background: 'rgba(8,13,10,0.9)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(82,183,136,0.08)',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <MessageInput
            onSend={onSendMessage}
            isLoading={isLoading}
          />
          <p
            className="text-center font-body text-xs mt-3"
            style={{ color: 'rgba(107,138,118,0.5)' }}
          >
            cAirn AI can make mistakes. Verify important details directly with the business.
          </p>
        </div>
      </div>
    </div>
  );
}
