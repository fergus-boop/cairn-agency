import { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import MessageBubble from './MessageBubble.jsx';
import MessageInput from './MessageInput.jsx';
import TypingIndicator from './TypingIndicator.jsx';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3003';

const handleChipMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty('--gx', `${x}%`);
  e.currentTarget.style.setProperty('--gy', `${y}%`);
};

const handleChipMouseLeave = (e) => {
  e.currentTarget.style.setProperty('--gx', '50%');
  e.currentTarget.style.setProperty('--gy', '50%');
};

export default function EmbeddedChat({
  businessName,
  businessContext,
  accentColor = 'var(--tz-mint)',
  welcomeMessage,
  welcomeSub,
  suggestedPrompts = [],
  headerImage,
  headerImageFallback,
}) {
  const { getToken } = useAuth();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesContainerRef = useRef(null);

  const isEmpty = messages.length === 0 && !isLoading;

  // Scroll to bottom within the widget container only — not the page
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = useCallback(async (content) => {
    const trimmed = content.trim().substring(0, 1000);
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken().catch(() => null);

      const headers = { 'Content-Type': 'application/json' };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ message: trimmed, businessContext }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const isFetchError = err.message.includes('Failed to fetch');
      if (isFetchError) {
        setError('Demo temporarily offline — email fergus@cairn.agency to see it live.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  }, [getToken, isLoading, businessContext]);

  const headingText = welcomeMessage || `${businessName} Assistant`;
  const subText = welcomeSub || `Ask me anything about ${businessName}`;

  return (
    <div
      className="flex flex-col w-full"
      style={{
        height: headerImage ? '680px' : '520px',
        background: 'rgba(8,13,10,0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(82,183,136,0.15)',
        borderRadius: '2px',
      }}
    >
      {/* Image header banner — full atmospheric photo, no logo badge */}
      {headerImage && (
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '180px' }}>
          <img
            src={headerImage}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.85)' }}
            loading="lazy"
            onError={headerImageFallback ? (e) => { e.currentTarget.src = headerImageFallback; } : undefined}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 40%, rgba(8,13,10,0.65) 100%)',
            }}
          />
        </div>
      )}

      {/* Header bar */}
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 py-3"
        style={{
          background: 'rgba(15,30,22,0.6)',
          borderBottom: '1px solid rgba(82,183,136,0.1)',
        }}
      >
        <div className="flex items-center gap-2.5">
          {/* Status dot */}
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: isLoading ? 'var(--tz-frost)' : accentColor,
              animation: isLoading ? 'pulseSlow 1s ease-in-out infinite' : 'none',
            }}
            aria-hidden="true"
          />
          <span
            className="font-display font-black text-sm tracking-tight"
            style={{ color: 'var(--tz-snow)' }}
          >
            {businessName}
          </span>
        </div>

        <span
          className="font-body text-xs"
          style={{ color: 'var(--tz-muted)' }}
        >
          powered by cAirn
        </span>
      </header>

      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{ scrollbarWidth: 'thin' }}
        data-lenis-prevent
      >
        {isEmpty ? (
          /* Empty state */
          <div
            className="flex flex-col items-center text-center py-6"
            style={{ animation: 'fadeIn 0.4s ease forwards' }}
          >
            {/* Icon mark */}
            <div
              className="flex items-center justify-center w-10 h-10 mb-4"
              style={{
                background: 'rgba(82,183,136,0.1)',
                border: '1px solid rgba(82,183,136,0.2)',
              }}
            >
              <span
                className="font-display font-black text-xs"
                style={{ color: accentColor }}
              >
                AI
              </span>
            </div>

            <h3
              className="font-display font-black text-base tracking-tight mb-1"
              style={{ color: 'var(--tz-snow)' }}
            >
              {headingText}
            </h3>
            <p
              className="font-body font-light text-xs mb-5 max-w-[240px]"
              style={{ color: 'var(--tz-muted)' }}
            >
              {subText}
            </p>

            {/* Prompt chips — liquid glass */}
            <div className="flex flex-wrap justify-center gap-1.5 w-full max-w-xs">
              {suggestedPrompts.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  onMouseMove={handleChipMouseMove}
                  onMouseLeave={handleChipMouseLeave}
                  className="liquid-chip flex items-center gap-1 px-3 py-1.5 font-body text-xs transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1"
                  style={{
                    '--gx': '50%',
                    '--gy': '50%',
                    color: 'var(--tz-frost)',
                  }}
                >
                  <span>{prompt}</span>
                  <ArrowUpRight size={10} strokeWidth={2} className="flex-shrink-0 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}
            {isLoading && <TypingIndicator />}
          </div>
        )}

        {/* Error banner */}
        {error && (
          <div
            className="flex items-start gap-2.5 mt-3 p-3"
            style={{
              background: 'rgba(248,113,113,0.08)',
              border: '1px solid rgba(248,113,113,0.25)',
            }}
          >
            <AlertTriangle
              size={14}
              className="flex-shrink-0 mt-0.5"
              style={{ color: '#f87171' }}
            />
            <div>
              <p
                className="font-body text-xs font-medium"
                style={{ color: '#fca5a5' }}
              >
                Something went wrong
              </p>
              <p
                className="font-body text-xs mt-0.5"
                style={{ color: 'rgba(252,165,165,0.7)' }}
              >
                {error}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div
        className="flex-shrink-0 px-3 pb-3 pt-2"
        style={{ borderTop: '1px solid rgba(82,183,136,0.08)' }}
      >
        <MessageInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}
