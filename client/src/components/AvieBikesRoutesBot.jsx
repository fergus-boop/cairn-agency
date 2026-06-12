// businessContext: 'aviemore-bikes-routes'
import { useState } from 'react';
import { Send } from 'lucide-react';


const OPENING_MESSAGE =
  "Hey! I'm the Aviemore Bikes routes assistant 🏔️ Whether you're brand new to mountain biking or an experienced rider looking for something gnarly — I'll help you find the perfect ride. What kind of riding are you after today?";

const EXAMPLE_PROMPTS = [
  'What routes suit a beginner?',
  "I'm an experienced rider, what's gnarly?",
  'Best route for a family with kids?',
  'How long is the Burma Road ride?',
];

export default function AvieBikesRoutesBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMessage = text.trim();
    setInput('');
    setStarted(true);

    const history = started
      ? messages
      : [{ role: 'assistant', content: OPENING_MESSAGE }];

    const updatedMessages = [...history, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
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

  const handleSend = () => sendMessage(input);
  const handlePrompt = (prompt) => sendMessage(prompt);

  return (
    <div
      className="flex flex-col rounded-xl border"
      style={{
        background: 'rgba(6, 13, 8, 0.4)',
        borderColor: 'rgba(61, 158, 110, 0.2)',
        height: '680px',
      }}
    >
      {/* Hero photo */}
      <div className="relative flex-shrink-0 overflow-hidden rounded-t-xl" style={{ height: '180px' }}>
        <img
          src="/images/RouteSelect.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.85)' }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(8,13,10,0.65) 100%)',
          }}
        />
      </div>

      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between border-b flex-shrink-0"
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

      {/* Messages / pre-chat state */}
      <div
        className="flex-1 overflow-y-auto px-6 py-4 flex flex-col"
        style={{ color: 'var(--ca-frost)', scrollbarWidth: 'thin' }}
        data-lenis-prevent
      >
        {!started ? (
          <div className="flex flex-col h-full">
            <div className="flex justify-start mb-6">
              <div
                className="px-4 py-2 rounded-lg leading-relaxed"
                style={{
                  maxWidth: '75%',
                  fontSize: '17px',
                  background: 'rgba(61, 158, 110, 0.1)',
                  color: 'var(--ca-frost)',
                }}
              >
                {OPENING_MESSAGE}
              </div>
            </div>

            <div className="mt-auto">
              <p
                className="font-body text-xs mb-3 tracking-wide uppercase"
                style={{ color: 'var(--ca-muted)' }}
              >
                Try asking…
              </p>
              <div className="flex flex-col gap-2">
                {EXAMPLE_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handlePrompt(prompt)}
                    className="text-left px-4 py-2 rounded-lg border text-sm transition-colors hover:border-opacity-60 hover:bg-opacity-20"
                    style={{
                      border: '1px solid rgba(61, 158, 110, 0.25)',
                      background: 'rgba(61, 158, 110, 0.06)',
                      color: 'var(--ca-frost)',
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 flex flex-col">
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
            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-2 rounded-lg"
                  style={{
                    background: 'rgba(61, 158, 110, 0.1)',
                    color: 'var(--ca-muted)',
                    fontSize: '17px',
                  }}
                >
                  …
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <div
        className="px-6 py-4 border-t flex gap-3 flex-shrink-0"
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
          placeholder="Type your message..."
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
