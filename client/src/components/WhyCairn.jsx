import ScrollReveal from './ui/ScrollReveal.jsx';
import HoverCard from './ui/HoverCard.jsx';

const BENEFITS = [
  {
    title: 'Always On',
    body: 'Handles enquiries while you sleep. No extra staff, no missed leads after hours.',
  },
  {
    title: 'Found Everywhere',
    body: 'On Google. On ChatGPT. On Maps. We make sure your business shows up where people are looking.',
  },
  {
    title: 'Less Admin',
    body: 'Stop answering the same questions twice. Repetitive queries handled automatically so your team can focus.',
  },
  {
    title: 'Built for Local',
    body: "We've worked in these businesses. We know where the gaps are. No bloated agency overhead.",
  },
];

export default function WhyCairn() {
  return (
    <section
      id="why"
      className="relative noise-overlay"
      style={{
        background: 'var(--ca-black)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px',
          height: '500px',
          top: '10%',
          right: '-10%',
          background:
            'radial-gradient(ellipse, rgba(61,158,110,0.07) 0%, transparent 70%)',
          animation: 'glowPulse 6s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* Left — pull quote + editorial copy */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--ca-accent)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Why CAIRN
              </span>
            </div>

            {/* Large pull quote */}
            <blockquote
              className="font-display font-black leading-tight tracking-tight mb-8"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                color: 'var(--ca-text)',
              }}
            >
              "Most agencies sell you a product.
              <br />
              We solve your
              <br />
              <span style={{ color: 'var(--ca-accent)', fontStyle: 'italic', borderBottom: '1px solid rgba(124,92,138,0.4)', paddingBottom: '2px' }}>
                actual problem."
              </span>
            </blockquote>

            <div className="space-y-4 max-w-lg">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--ca-frost)' }}
              >
                We're not a template shop. We're not a chatbot platform. We find
                what's broken in your digital presence and build exactly what fixes
                it. AI, web, automation, local SEO — whatever it takes.
              </p>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--ca-muted)' }}
              >
                We work with tourism operators, hospitality businesses, outdoor
                activity companies, and independent retailers. If you're losing leads
                after hours, getting flooded with the same questions, or know your
                online presence isn't doing you justice — that's exactly where we
                come in.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — benefit panels */}
          <div className="space-y-5">
            {BENEFITS.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={0.1 * i} direction="up">
                <HoverCard>
                  <div
                    className="group p-8 rounded-lg transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
                    style={{
                      background: 'rgba(13, 26, 16, 0.4)',
                      border: '1px solid rgba(61, 158, 110, 0.15)',
                    }}
                  >
                    {/* Hover left border accent */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: 'var(--ca-accent)' }}
                    />

                    {/* Hover lift effect */}
                    <div
                      className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(61,158,110,0.05) 0%, transparent 70%)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div
                        className="font-display font-black text-lg tracking-tight mb-3"
                        style={{ color: 'var(--ca-text)' }}
                      >
                        {title}
                      </div>
                      <div
                        className="font-body text-sm leading-relaxed"
                        style={{ color: 'var(--ca-muted)' }}
                      >
                        {body}
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </ScrollReveal>
            ))}

            {/* Decorative text block */}
            <div
              className="p-8"
              style={{
                border: '1px solid rgba(61,158,110,0.15)',
                background: 'rgba(13,26,16,0.6)',
              }}
            >
              <p
                className="font-display font-bold text-sm tracking-[0.1em] uppercase leading-relaxed"
                style={{ color: 'var(--ca-muted)' }}
              >
                WEBSITES · CHATBOTS · LEAD GEN · GBP · AI SEARCH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
