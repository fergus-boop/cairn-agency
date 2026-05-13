import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mountain } from 'lucide-react';

const MOCK_MESSAGES = [
  {
    role: 'user',
    content: "What's the best powder ski setup for someone coming from park?",
  },
  {
    role: 'assistant',
    content:
      "Good transition. You'll want to go wider — 108–118mm underfoot — and softer flex than park skis. Rocker profile matters: 20–30% tip rocker keeps you surfing instead of submarining. Directional twin works well if you still want switch landings in the trees. K2 Mindbender or Blizzard Rustler are solid starting points.",
  },
  {
    role: 'user',
    content: 'What about bindings? Do I need to change those too?',
  },
  {
    role: 'assistant',
    content:
      'Depends on your current setup. If you have tech bindings for touring, keep them — just verify DIN range covers your weight/ability. For resort-only, a solid alpine binding at DIN 8–12 is fine. Avoid demo bindings on powder days — the longer lever arm at toe creates more pre-release risk.',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function AssistantSection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40"
      style={{
        background:
          'linear-gradient(180deg, var(--tz-black) 0%, var(--tz-forest) 50%, var(--tz-black) 100%)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          top: '20%',
          left: '-5%',
          background:
            'radial-gradient(ellipse, rgba(82,183,136,0.06) 0%, transparent 70%)',
          animation: 'glowPulse 7s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — mock chat */}
          <div
            className="order-2 lg:order-1"
            style={{
              opacity: inView ? 1 : 0,
              animation: inView ? 'fadeInUp 0.8s ease forwards' : 'none',
            }}
          >
            {/* Chat window */}
            <div
              className="glass-panel overflow-hidden"
              style={{ maxWidth: '520px' }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{
                  borderBottom: '1px solid rgba(82,183,136,0.12)',
                  background: 'rgba(8,13,10,0.5)',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 flex items-center justify-center"
                    style={{
                      background: 'rgba(82,183,136,0.15)',
                      border: '1px solid rgba(82,183,136,0.3)',
                    }}
                  >
                    <Mountain size={14} style={{ color: 'var(--tz-mint)' }} strokeWidth={2} />
                  </div>
                  <span
                    className="font-display font-bold text-xs tracking-wide"
                    style={{ color: 'var(--tz-snow)' }}
                  >
                    treezone assistant
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {['#f87171', '#fbbf24', '#4ade80'].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full opacity-60"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4">
                {MOCK_MESSAGES.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2.5`}
                    style={{
                      opacity: inView ? 1 : 0,
                      animation: inView
                        ? `fadeInUp 0.5s ${300 + i * 150}ms ease forwards`
                        : 'none',
                    }}
                  >
                    {msg.role === 'assistant' && (
                      <div
                        className="flex-shrink-0 w-6 h-6 mt-1 flex items-center justify-center"
                        style={{
                          background: 'rgba(82,183,136,0.12)',
                          border: '1px solid rgba(82,183,136,0.25)',
                        }}
                      >
                        <span
                          className="font-display font-black text-xs"
                          style={{ color: 'var(--tz-mint)' }}
                        >
                          T
                        </span>
                      </div>
                    )}
                    <div
                      className="max-w-[85%] px-4 py-3 font-body text-xs leading-relaxed"
                      style={
                        msg.role === 'user'
                          ? {
                              background: 'rgba(82,183,136,0.2)',
                              border: '1px solid rgba(82,183,136,0.3)',
                              color: 'var(--tz-snow)',
                            }
                          : {
                              background: 'rgba(21,43,30,0.8)',
                              border: '1px solid rgba(82,183,136,0.1)',
                              color: 'var(--tz-frost)',
                            }
                      }
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Typing indicator (static decorative) */}
                <div className="flex justify-start gap-2.5">
                  <div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    style={{
                      background: 'rgba(82,183,136,0.12)',
                      border: '1px solid rgba(82,183,136,0.25)',
                    }}
                  >
                    <span
                      className="font-display font-black text-xs"
                      style={{ color: 'var(--tz-mint)' }}
                    >
                      T
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 px-4 py-3"
                    style={{
                      background: 'rgba(21,43,30,0.8)',
                      border: '1px solid rgba(82,183,136,0.1)',
                    }}
                  >
                    {[0, 1, 2].map((d) => (
                      <div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: 'var(--tz-mint)',
                          animation: `dotBounce 1.4s ${d * 0.16}s ease-in-out infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — copy */}
          <div
            className="order-1 lg:order-2"
            style={{
              opacity: inView ? 1 : 0,
              animation: inView ? 'fadeInUp 0.8s 0.15s ease forwards' : 'none',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--tz-mint)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--tz-mint)' }}
              >
                The assistant
              </span>
            </div>

            <h2
              className="font-display font-black leading-tight tracking-tighter mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'var(--tz-snow)',
              }}
            >
              Expert advice.
              <br />
              <span style={{ color: 'var(--tz-mint)' }}>Zero noise.</span>
            </h2>

            <div className="space-y-4 mb-10">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--tz-frost)' }}
              >
                The treezone AI is alpine-native. It doesn't hedge. It doesn't
                pad. It gives you the answer a knowledgeable ski guide would —
                concise, technically grounded, and honest about trade-offs.
              </p>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--tz-muted)' }}
              >
                Ask about setups, conditions, runs, lessons, or booking.
                Get a direct response every time.
              </p>
            </div>

            {/* Personality traits */}
            <div
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {[
                { label: 'Expert', desc: 'Technical depth' },
                { label: 'Direct', desc: 'No filler' },
                { label: 'Alpine-native', desc: 'Mountain-first' },
                { label: 'Honest', desc: 'Unsponsored' },
              ].map(({ label, desc }) => (
                <div
                  key={label}
                  className="p-4"
                  style={{
                    background: 'rgba(15,30,22,0.6)',
                    border: '1px solid rgba(82,183,136,0.12)',
                  }}
                >
                  <div
                    className="font-display font-bold text-sm tracking-tight mb-0.5"
                    style={{ color: 'var(--tz-mint)' }}
                  >
                    {label}
                  </div>
                  <div
                    className="font-body text-xs"
                    style={{ color: 'var(--tz-muted)' }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/chat" className="btn-primary inline-flex">
              <span>Start chatting</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
