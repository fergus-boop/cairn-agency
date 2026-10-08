import { useState } from 'react';
import { Send } from 'lucide-react';
import BackgroundPaths from './BackgroundPaths.jsx';
import ScrollReveal from './ui/ScrollReveal.jsx';


const FREESKI_PROMPTS = [
  'Tell me about Free-Ski lessons',
  'What ski level do I need for Free-Ski?',
  'How do I book with Free-Ski?',
  'What age can kids start?',
];

const TREEZONE_PROMPTS = [
  'How old do you need to be for TreeZone?',
  'How long does TreeZone take?',
  'Can I book TreeZone for a birthday party?',
  'What courses are available?',
];

const FREESKI_OPENING =
  "Hi! I'm the Free-Ski Aviemore assistant 🎿 We offer ski and snowboard lessons for all levels on the slopes of the Cairngorms. I can help with lesson bookings, ability levels, group sessions, and more. What would you like to know?";

const TREEZONE_OPENING =
  "Hi! I'm the TreeZone Aviemore assistant 🌲 We run high ropes courses and aerial adventures for all ages right in the heart of the Cairngorms. I can help with bookings, age requirements, course options, and group events. What can I help with?";

function ChatCard({ businessName, businessContext, openingMessage, examplePrompts, heroImage, heroFallback, poweredLabel }) {
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
      : [{ role: 'assistant', content: openingMessage }];

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
          businessContext,
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
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.85)' }}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = heroFallback; }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(8,13,10,0.65) 100%)',
          }}
        />
      </div>

      {/* Header bar */}
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
          {businessName}
        </span>
        <span
          className="font-body text-xs tracking-wide"
          style={{ color: 'var(--ca-muted)' }}
        >
          {poweredLabel || 'powered by Cairn'}
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
            {/* Opening message */}
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
                {openingMessage}
              </div>
            </div>

            {/* Example prompts */}
            <div className="mt-auto">
              <p
                className="font-body text-xs mb-3 tracking-wide uppercase"
                style={{ color: 'var(--ca-muted)' }}
              >
                Try asking…
              </p>
              <div className="flex flex-col gap-2">
                {examplePrompts.map((prompt) => (
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

export function FreeSkiCard() {
  return (
    <ChatCard
      businessName="Free-Ski Aviemore"
      businessContext="freeski"
      openingMessage={FREESKI_OPENING}
      examplePrompts={FREESKI_PROMPTS}
      heroImage="/images/freeski.jpg"
      heroFallback="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
    />
  );
}

export function TreeZoneCard() {
  return (
    <ChatCard
      businessName="TreeZone Aviemore"
      businessContext="treezone-aviemore"
      openingMessage={TREEZONE_OPENING}
      examplePrompts={TREEZONE_PROMPTS}
      heroImage="/images/treezone.jpg"
      heroFallback="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    />
  );
}

export default function DualChatDemo() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="demo"
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
              <span
                className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Live Demo
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
              See it live.
              <br />
              <span className="text-gradient-mint">Real AI. Live.</span>
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-md mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Real AI, trained on real business info. Try asking an actual question.
            </p>
          </div>
        </ScrollReveal>

        {/* Widget grid — three equal-height cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Free-Ski Aviemore */}
          <ScrollReveal delay={0.1} direction="up" blur>
            <ChatCard
              businessName="Free-Ski Aviemore"
              businessContext="freeski"
              openingMessage={FREESKI_OPENING}
              examplePrompts={FREESKI_PROMPTS}
              heroImage="/images/freeski.jpg"
              heroFallback="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
            />
          </ScrollReveal>

          {/* IYE Bike Hire */}
          <ScrollReveal delay={0.2} direction="up" blur>
            <IYEInlineCard />
          </ScrollReveal>

          {/* TreeZone Aviemore */}
          <ScrollReveal delay={0.3} direction="up" blur>
            <ChatCard
              businessName="TreeZone Aviemore"
              businessContext="treezone-aviemore"
              openingMessage={TREEZONE_OPENING}
              examplePrompts={TREEZONE_PROMPTS}
              heroImage="/images/treezone.jpg"
              heroFallback="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
            />
          </ScrollReveal>
        </div>

        {/* CTA strip below widgets */}
        <div
          className="mt-14 pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          style={{ borderTop: '1px solid rgba(61,158,110,0.08)' }}
        >
          <p
            className="font-body font-light text-base"
            style={{ color: 'var(--ca-frost)' }}
          >
            Want something like this for your business?
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="font-display font-bold text-sm tracking-wide transition-colors hover:opacity-80 flex items-center gap-1"
            style={{ color: 'var(--ca-accent)' }}
          >
            Get in touch →
          </button>
        </div>

      </div>
    </section>
  );
}

/* IYE card inlined here so the triple row stays self-contained */
const IYE_PROMPTS = [
  'I want to book bikes for a family of 4',
  'What routes suit a beginner?',
  'How much does e-bike hire cost?',
  'Where exactly are you located?',
];

const IYE_OPENING =
  "Hi! I'm the IYE bike hire assistant 🚵 Based at Rothiemurchus, right in the heart of the Cairngorms. I can help you plan a route, work out which bikes you need, or put together a complete booking request. What can I help you with?";

function IYEInlineCard() {
  return (
    <ChatCard
      businessName="IYE Bike Hire · Rothiemurchus"
      businessContext="iye-aviemore"
      openingMessage={IYE_OPENING}
      examplePrompts={IYE_PROMPTS}
      heroImage="/images/RouteSelect.jpg"
      heroFallback="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
    />
  );
}
