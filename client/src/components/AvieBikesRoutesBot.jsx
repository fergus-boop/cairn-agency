// businessContext: 'aviemore-bikes-routes'
import { useState } from 'react';
import { Send } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3003';

export default function AvieBikesRoutesBot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hey! I'm the Aviemore Bikes routes assistant 🏔️ Whether you're brand new to mountain biking or an experienced rider looking for something gnarly — I'll help you find the perfect ride. What kind of riding are you after today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');

    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          messages: updatedMessages,
          businessContext: 'aviemore-bikes-routes',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Oops, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col rounded-xl border"
      style={{
        background: 'rgba(6, 13, 8, 0.4)',
        borderColor: 'rgba(61, 158, 110, 0.2)',
        height: '650px',
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between border-b"
        style={{
          background: 'rgba(6, 13, 8, 0.6)',
          borderColor: 'rgba(61, 158, 110, 0.15)',
        }}
      >
        <span
          className="font-display font-black text-sm tracking-tight"
          style={{ color: 'var(--ca-text)' }}
        >
          Aviemore Bikes
        </span>
        <span
          className="font-body text-xs tracking-wide"
          style={{ color: 'var(--ca-muted)' }}
        >
          Routes Assistant · powered by Cairn
        </span>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-6 py-4 space-y-4 flex flex-col"
        style={{ color: 'var(--ca-frost)', scrollbarWidth: 'thin' }}
        data-lenis-prevent
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className="px-4 py-2 rounded-lg leading-relaxed"
              style={{
                maxWidth: msg.role === 'user' ? '60%' : '75%',
                minHeight: '1.5em',
                fontSize: '17px',
                background:
                  msg.role === 'user'
                    ? 'rgba(61, 158, 110, 0.2)'
                    : 'rgba(61, 158, 110, 0.1)',
                color: 'var(--ca-frost)',
              }}
            >
              {msg.content.split('\n').map((line, i) => {
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                  <div key={i}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j}>{part}</strong>
                      ) : (
                        <span key={j}>{part}</span>
                      ),
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="px-6 py-4 border-t flex gap-3"
        style={{
          background: 'rgba(6, 13, 8, 0.6)',
          borderColor: 'rgba(61, 158, 110, 0.15)',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your response..."
          disabled={loading}
          className="flex-1 bg-transparent outline-none"
          style={{ color: 'var(--ca-frost)' }}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="transition-opacity hover:opacity-60 disabled:opacity-40"
          style={{ color: 'var(--ca-accent)' }}
          aria-label="Send"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
