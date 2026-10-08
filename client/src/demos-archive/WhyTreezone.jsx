import ScrollReveal from './ui/ScrollReveal.jsx';
import HoverCard from './ui/HoverCard.jsx';

const BENEFITS = [
  {
    title: 'Always On',
    body: 'Your business answers enquiries at 2am, on Sunday, during peak season. No extra staff.',
  },
  {
    title: 'More Leads',
    body: 'Automated follow-ups, optimised profiles, and smarter websites that turn browsers into bookings.',
  },
  {
    title: 'Less Admin',
    body: 'Repetitive questions handled automatically. Your team focuses on the work only they can do.',
  },
  {
    title: 'Built for Local',
    body: 'We understand seasonal businesses, tight budgets, and the Highlands. No bloated agency overhead.',
  },
];

export default function WhyTreezone() {
  return (
    <section
      id="why"
      className="relative noise-overlay"
      style={{
        background: 'linear-gradient(145deg, #eef7f1 0%, #f0f7f3 60%, #f4faf6 100%)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Ambient mint glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '500px',
          top: '10%',
          right: '-10%',
          background:
            'radial-gradient(ellipse, rgba(82,183,136,0.07) 0%, transparent 70%)',
          animation: 'glowPulse 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — pull quote + editorial copy */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--tz-mint)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--tz-mint)' }}
              >
                Why CAIRN
              </span>
            </div>

            {/* Large pull quote */}
            <blockquote
              className="font-display font-black leading-tight tracking-tight mb-8"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: 'var(--tz-black)',
              }}
            >
              "Most agencies sell you a product.
              <br />
              We solve your
              <br />
              <span style={{ color: 'var(--tz-mint)', fontStyle: 'italic' }}>
                actual problem."
              </span>
            </blockquote>

            <div className="space-y-4 max-w-lg">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: '#374151' }}
              >
                We're not a template shop. We're not a chatbot platform. We're a
                small team that embeds into your business, finds what's broken, and
                builds exactly what fixes it. AI, web, automation, local SEO —
                whatever it takes.
              </p>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--tz-muted)' }}
              >
                We work with tourism operators, hospitality businesses, outdoor
                activity companies, and independent retailers. If you're getting
                flooded with the same questions, losing leads after hours, or just
                know your online presence isn't doing you justice — that's exactly
                where we come in.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — benefit panels */}
          <div className="space-y-6">
            {BENEFITS.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={0.1 * i} direction="up">
                <HoverCard>
                  <div
                    className="glass-panel p-8"
                  >
                    <div
                      className="font-display font-black text-lg tracking-tight mb-3"
                      style={{ color: 'var(--tz-black)' }}
                    >
                      {title}
                    </div>
                    <div
                      className="font-body text-sm leading-relaxed"
                      style={{ color: '#374151' }}
                    >
                      {body}
                    </div>
                  </div>
                </HoverCard>
              </ScrollReveal>
            ))}

            {/* Decorative text block */}
            <div
              className="p-8"
              style={{
                border: '1px solid rgba(82,183,136,0.15)',
                background: 'rgba(8,13,10,0.4)',
              }}
            >
              <p
                className="font-display font-bold text-sm tracking-[0.1em] uppercase leading-relaxed"
                style={{ color: 'var(--tz-muted)' }}
              >
                LOCAL BUSINESS. · MORE REVENUE. · LESS ADMIN. · ALWAYS ON.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
