// businessContext: 'aviemore-bikes-routes'
import { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal.jsx';
import BackgroundPaths from './BackgroundPaths.jsx';

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
    <section
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10" style={{ zIndex: 2 }}>

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
              <span
                className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Routes Assistant
              </span>
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
            </div>

            <h2
              className="font-display font-black tracking-tighter leading-none mb-5"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                color: 'var(--ca-text)',
              }}
            >
              Not sure where to ride?
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Tell the assistant your experience level and what kind of ride you're after — it'll point you in the right direction.
            </p>
          </div>
        </ScrollReveal>

        {/* Chat widget */}
        <ScrollReveal delay={0.2} direction="up" blur>
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
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
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
