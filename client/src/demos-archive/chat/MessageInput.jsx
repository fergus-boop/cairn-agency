import { useState, useRef, useEffect, useCallback } from 'react';
import { Send } from 'lucide-react';

const MAX_LENGTH = 1000;
const CHAR_COUNTER_THRESHOLD = 800;

export default function MessageInput({ onSend, isLoading }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  // Auto-expand textarea up to 4 rows
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const lineHeight = 24;
    const maxHeight = lineHeight * 4 + 24; // 4 rows + padding
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  }, [value]);

  const handleSubmit = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || isLoading || trimmed.length > MAX_LENGTH) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  }, [value, isLoading, onSend]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    const newVal = e.target.value;
    if (newVal.length <= MAX_LENGTH) {
      setValue(newVal);
    }
  };

  const charsLeft = MAX_LENGTH - value.length;
  const showCounter = value.length >= CHAR_COUNTER_THRESHOLD;
  const canSend = value.trim().length > 0 && !isLoading;

  return (
    <div
      className="relative flex items-end gap-3 p-3 transition-all"
      style={{
        background: 'rgba(15,30,22,0.5)',
        border: '1px solid rgba(82,183,136,0.15)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask about lessons, gear, conditions..."
        disabled={isLoading}
        rows={1}
        aria-label="Message input"
        className="
          flex-1 bg-transparent resize-none font-body text-sm leading-6
          placeholder:text-tz-muted outline-none transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          chat-input
        "
        style={{
          color: 'var(--tz-snow)',
          maxHeight: `${24 * 4 + 24}px`,
          overflowY: 'auto',
          paddingTop: '2px',
          paddingBottom: '2px',
        }}
      />

      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Character counter */}
        {showCounter && (
          <span
            className="font-body text-xs transition-colors"
            style={{
              color:
                charsLeft < 50
                  ? '#f87171'
                  : charsLeft < 150
                  ? '#fbbf24'
                  : 'var(--tz-muted)',
            }}
          >
            {charsLeft}
          </span>
        )}

        {/* Send button */}
        <button
          onClick={handleSubmit}
          disabled={!canSend}
          aria-label="Send message"
          className="
            flex items-center justify-center w-9 h-9
            transition-all duration-200
            disabled:opacity-30 disabled:cursor-not-allowed
          "
          style={{
            background: canSend ? 'var(--tz-mint)' : 'rgba(82,183,136,0.2)',
            color: canSend ? 'var(--tz-black)' : 'var(--tz-muted)',
          }}
        >
          <Send size={15} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
