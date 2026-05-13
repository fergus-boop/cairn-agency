import { Search, Wrench, Zap } from 'lucide-react';
import BackgroundPaths from './BackgroundPaths.jsx';
import ScrollReveal from './ui/ScrollReveal.jsx';
import AnimatedText from './ui/AnimatedText.jsx';
import HoverCard from './ui/HoverCard.jsx';

const FEATURES = [
  {
    number: '01',
    icon: Search,
    title: 'We audit your digital presence',
    description:
      "Website. Google Business Profile. AI search visibility. Missed enquiries. We find where you're losing leads before a single thing gets built.",
    tag: 'AUDIT',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We build what you actually need',
    description:
      'Not a template. A custom fix for your specific problem — AI assistant, smarter website, automated follow-ups, optimised profiles. Whatever moves the needle.',
    tag: 'BUILD',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Your business runs better',
    description:
      'More leads. Less admin. Open 24/7. You get your time back, your business grows, and we stay on retainer to keep it that way.',
    tag: 'RESULTS',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative pt-10 pb-16 lg:pt-12 lg:pb-20 noise-overlay"
      style={{ background: 'var(--ca-surface)' }}
    >
      <BackgroundPaths intensity={0.6} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10" style={{ zIndex: 3 }}>
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--ca-accent)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                How It Works
              </span>
            </div>
            <h2
              className="font-display font-black leading-tight tracking-tighter max-w-lg"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ca-text)',
              }}
            >
              <AnimatedText>We find it. We fix it. You grow.</AnimatedText>
            </h2>
          </div>
        </ScrollReveal>

        {/* Editorial feature list */}
        <div className="space-y-0">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.number} delay={0.1 * i}>
                <HoverCard>
                  <div
                    className="group relative grid grid-cols-1 lg:grid-cols-[5rem_1fr_auto] gap-6 lg:gap-8 items-start py-10 lg:py-12 border-t transition-all duration-300"
                    style={{
                      borderColor: 'rgba(61,158,110,0.15)',
                      paddingLeft: '2rem',
                      paddingRight: '2rem',
                    }}
                  >
                    {/* Hover accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: 'var(--ca-accent)' }}
                    />

                    {/* Number — bold accent styling */}
                    <div
                      className="font-display font-black text-2xl lg:text-3xl tracking-tighter select-none relative"
                      style={{ color: 'var(--ca-accent)', opacity: 1 }}
                    >
                      <span style={{ fontSize: '0.65em', verticalAlign: 'super' }}>Step</span>
                      <br />
                      {feature.number}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon
                          size={18}
                          style={{ color: 'var(--ca-accent)', opacity: 1, marginTop: '2px', flexShrink: 0 }}
                          strokeWidth={1.5}
                        />
                        <h3
                          className="font-display font-bold text-lg lg:text-xl tracking-tight leading-tight"
                          style={{ color: 'var(--ca-text)' }}
                        >
                          {feature.title}
                        </h3>
                      </div>
                      <p
                        className="font-body font-light text-sm lg:text-base leading-relaxed max-w-2xl"
                        style={{ color: 'var(--ca-muted)' }}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Tag */}
                    <div
                      className="hidden lg:flex items-center justify-center lg:justify-end self-start"
                      style={{
                        border: '1px solid rgba(61,158,110,0.25)',
                        padding: '0.4rem 0.95rem',
                        background: 'rgba(61, 158, 110, 0.08)',
                        borderRadius: '0.375rem',
                      }}
                    >
                      <span
                        className="font-display font-bold text-xs tracking-[0.15em] uppercase"
                        style={{ color: 'var(--ca-accent)' }}
                      >
                        {feature.tag}
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </ScrollReveal>
            );
          })}

          {/* Final border */}
          <div
            className="border-t"
            style={{ borderColor: 'rgba(61,158,110,0.15)' }}
          />
        </div>
      </div>

    </section>
  );
}
