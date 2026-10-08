import ScrollReveal from './ui/ScrollReveal.jsx';
import BackgroundPaths from './BackgroundPaths.jsx';
import AvieBikesDemo from './AvieBikesDemo.jsx';
import AvieBikesRoutesBot from './AvieBikesRoutesBot.jsx';

export default function AvieBikesDemos() {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative mx-auto px-6 lg:px-10" style={{ zIndex: 2, maxWidth: '1400px' }}>

        {/* Shared section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
              <span
                className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Live Demos
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
              See it in action.
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Two tools, one business — book your bikes or find your perfect route.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column grid — stacks on mobile */}
        <ScrollReveal delay={0.2} direction="up" blur>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              alignItems: 'start',
            }}
            className="demos-grid"
          >
            <AvieBikesDemo />
            <AvieBikesRoutesBot />
          </div>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .demos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
