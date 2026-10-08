import ScrollReveal from './ui/ScrollReveal.jsx';
import BackgroundPaths from './BackgroundPaths.jsx';
import CairngormDemo from './CairngormDemo.jsx';

export default function CairngormDemoSection() {
  return (
    <>
      {/* Section divider */}
      <div
        className="mx-auto"
        style={{
          maxWidth: '1400px',
          padding: '0 1.5rem',
        }}
      >
        <div style={{ height: '1px', background: 'rgba(61, 158, 110, 0.12)' }} />
      </div>

      <section
        className="relative py-20 lg:py-28"
        style={{ background: 'var(--ca-black)' }}
      >
        <BackgroundPaths intensity={0.4} />

        <div className="relative mx-auto px-6 lg:px-10" style={{ zIndex: 2, maxWidth: '1400px' }}>

          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
                <span
                  className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  Cairngorm Mountain Demo
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
                Your mountain. Every question answered.
              </h2>

              <p
                className="font-body font-light text-base lg:text-lg max-w-2xl mx-auto"
                style={{ color: 'var(--ca-muted)' }}
              >
                A live demo of what an AI assistant could do for Cairngorm Mountain — trained on real operational knowledge, ready for any visitor question.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up" blur>
            <div className="mx-auto" style={{ maxWidth: '900px' }}>
              <CairngormDemo />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
