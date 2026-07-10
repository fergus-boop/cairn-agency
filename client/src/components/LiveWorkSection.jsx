import ScrollReveal from './ui/ScrollReveal.jsx';

function TestimonialSlot({ quote, attribution }) {
  if (!quote) return null;
  return (
    <blockquote
      className="mt-6 pt-6"
      style={{ borderTop: '1px solid rgba(184,154,78,0.15)' }}
    >
      <p
        className="font-body font-light text-sm leading-relaxed italic"
        style={{ color: 'var(--ca-frost)' }}
      >
        "{quote}"
      </p>
      {attribution && (
        <footer
          className="font-display font-bold text-xs tracking-wide mt-2"
          style={{ color: '#b89a4e' }}
        >
          — {attribution}
        </footer>
      )}
    </blockquote>
  );
}

export default function LiveWorkSection() {
  return (
    <section
      className="relative py-14 lg:py-20"
      style={{ background: 'var(--ca-black)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: '#b89a4e' }} />
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: '#b89a4e' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: '#b89a4e' }}
                />
              </span>
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: '#b89a4e' }}
              >
                Live Work
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              background: '#0a1209',
              borderColor: 'rgba(184,154,78,0.2)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: '#111517' }}
            >
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#28c840' }} />
              <div
                className="flex-1 ml-3 rounded flex items-center px-3"
                style={{ background: '#1a1a1a', height: '22px' }}
              >
                <span
                  className="font-body"
                  style={{ color: '#555', fontSize: '10px' }}
                >
                  thetrimcompany.co.uk
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative w-full overflow-hidden" style={{ maxHeight: '400px' }}>
              <img
                src="/images/trimco-hero.jpg"
                alt="The Trim Company website — Edinburgh barbers"
                className="w-full object-cover object-top"
                style={{ display: 'block' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #0a1209)' }}
                aria-hidden="true"
              />
            </div>

            {/* Card body */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 p-8 lg:p-10 items-start">
              <div>
                <h2
                  className="font-display font-black tracking-tight mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ca-text)' }}
                >
                  The Trim Company, Edinburgh
                </h2>
                <p
                  className="font-body font-light text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Design, build, online shop, AI concierge, per-barber booking links. Shipped July 2026.
                </p>

                {/* Stat chips */}
                <div className="flex flex-wrap gap-3">
                  {['230★ reviews integrated', '10-product shop', 'AI trained on the full catalogue'].map((chip) => (
                    <div
                      key={chip}
                      className="flex items-center px-3 py-1.5 rounded-full"
                      style={{
                        border: '1px solid rgba(184,154,78,0.25)',
                        background: 'rgba(184,154,78,0.07)',
                      }}
                    >
                      <span
                        className="font-display font-bold text-xs tracking-wide"
                        style={{ color: '#b89a4e' }}
                      >
                        {chip}
                      </span>
                    </div>
                  ))}
                </div>

                <TestimonialSlot quote="" attribution="" />
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 lg:pt-1">
                <a
                  href="https://thetrimcompany.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap"
                  style={{ textDecoration: 'none' }}
                >
                  Visit live site ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
