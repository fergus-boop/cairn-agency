import { useState } from 'react';
import { Send } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal.jsx';
import BackgroundPaths from './BackgroundPaths.jsx';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3003';

const SYSTEM_PROMPT = `You are the smart booking assistant for Aviemore Bikes, a bike hire shop in Aviemore village in the Cairngorms National Park, Scotland. You help customers book bikes by collecting all the information the shop needs in one smooth conversation.

Bike types and pricing:
- Electric Mountain Bike: hardtail, front suspension, 625WH battery. From £60/half day. Best for Burma Road, Ryvoan Bothy Route, Glenfeshie, forest routes. Riders must be 16+. Low-step hybrid eBike available on request.
- Mountain Bike: non-electric hardtail. From £30/half day. Best for same routes plus Cairngorms Loop. Youth bikes for ages 7-11.
- Gravel Bike (Merida Silex / Trek Checkpoint): from £35/half day. Best for chunky Cairngorms gravel routes.
- IMPORTANT: None of these bikes can be used on the Cairngorm Mountain Bike Park.
- All hire includes helmet, lock, and basic repair kit.
- Guided rides available with qualified British Cycling coaches — arrange by email to info@aviemorebikes.co.uk.

Time slots: 10:30–13:30, 13:30–16:30, full day 10:30–16:30, multi-day.
Shop open Mon–Sat. Walk-ins welcome from 10:30am.
Delivery around Badenoch and Strathspey available at extra cost if booked in advance.

Collect in this order, one or two questions at a time — keep it conversational, not like a form:
1. How many riders?
2. For each rider: name, height, age, experience level (never ridden / beginner / intermediate / experienced)
3. Recommend a bike type based on their answers and ask if they're happy with it
4. Hire date
5. Time slot (offer the options)
6. Intended route — suggest options based on their bike choice
7. Guided ride needed?

Once all info is collected, output a clean booking summary followed by the exact email that would be sent to hire@aviemorebikes.co.uk — formatted and ready to action. End with: "We'll send this to the Aviemore Bikes team — they'll confirm availability within a few hours."

Be friendly, enthusiastic about the trails, and knowledgeable. You're a bike-loving local, not a call centre bot.`;

export default function AvieBikesDemo() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! I'm the Aviemore Bikes booking assistant 🚵 Let's get you sorted. How many riders are in your group?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message to history
    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, messages: updatedMessages, businessContext: 'aviemore-bikes' }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: data.reply },
        ]);
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
      style={{
        background: 'var(--ca-black)',
      }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10" style={{ zIndex: 2 }}>

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
              <span
                className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Smart Booking Demo
              </span>
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
            </div>

            {/* Main heading */}
            <h2
              className="font-display font-black tracking-tighter leading-none mb-5"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                color: 'var(--ca-text)',
              }}
            >
              Book bikes in 2 minutes.
              <br />
              <span className="text-gradient-mint">No back and forth.</span>
            </h2>

            {/* Sub */}
            <p
              className="font-body font-light text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Watch the assistant qualify every rider, recommend the right bike, and produce a complete booking request — automatically.
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
                  Smart Booking Assistant · powered by Cairn
                </span>
              </div>

              {/* Messages */}
              <div
                className="flex-1 px-6 py-4 space-y-4 flex flex-col"
                style={{ color: 'var(--ca-frost)', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg leading-relaxed`}
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
                        // Simple markdown: **text** becomes bold
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
                  style={{
                    color: 'var(--ca-frost)',
                  }}
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
