import EmbeddedChat from './chat/EmbeddedChat.jsx';
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
            {/* Eyebrow */}
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

            {/* Main heading */}
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

            {/* Sub */}
            <p
              className="font-body font-light text-base lg:text-lg max-w-md mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Real AI, trained on real business info. Try asking an actual question.
            </p>
          </div>
        </ScrollReveal>

        {/* Widget grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Free-Ski Aviemore */}
          <ScrollReveal delay={0.2} direction="up" blur>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span
                  className="font-display font-black text-sm tracking-tight"
                  style={{ color: 'var(--ca-text)' }}
                >
                  Free-Ski Aviemore
                </span>
                <span
                  className="font-display font-bold text-xs tracking-[0.15em] uppercase px-2 py-0.5"
                  style={{
                    background: 'rgba(61,158,110,0.1)',
                    border: '1px solid rgba(61,158,110,0.25)',
                    color: 'var(--ca-accent)',
                  }}
                >
                  Live Demo
                </span>
              </div>

              <EmbeddedChat
                businessName="Free-Ski Aviemore"
                businessContext="freeski"
                welcomeMessage="Free-Ski Aviemore Assistant"
                welcomeSub="Ask about ski lessons, snowboard coaching, bookings, and more."
                suggestedPrompts={FREESKI_PROMPTS}
                headerImage="/src/assets/freeski.jpg"
                headerImageFallback="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </ScrollReveal>

          {/* TreeZone Aviemore */}
          <ScrollReveal delay={0.2} direction="up" blur>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span
                  className="font-display font-black text-sm tracking-tight"
                  style={{ color: 'var(--ca-text)' }}
                >
                  TreeZone Aviemore
                </span>
                <span
                  className="font-display font-bold text-xs tracking-[0.15em] uppercase px-2 py-0.5"
                  style={{
                    background: 'rgba(61,158,110,0.1)',
                    border: '1px solid rgba(61,158,110,0.25)',
                    color: 'var(--ca-accent)',
                  }}
                >
                  Live Demo
                </span>
              </div>

              <EmbeddedChat
                businessName="TreeZone Aviemore"
                businessContext="treezone-aviemore"
                welcomeMessage="TreeZone Aviemore Assistant"
                welcomeSub="Ask about the high ropes course, bookings, ages, and more."
                suggestedPrompts={TREEZONE_PROMPTS}
                headerImage="/src/assets/treezone.jpg"
                headerImageFallback="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
              />
            </div>
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
