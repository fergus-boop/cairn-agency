import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ui/ScrollReveal.jsx';

export default function AboutFerg() {
  const [showSecond, setShowSecond] = useState(false);
  const [imgContainerVisible, setImgContainerVisible] = useState(true);
  const img1ErrorRef = useRef(false);
  const img2ErrorRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = () => {
    img1ErrorRef.current = true;
    img2ErrorRef.current = true;
    setImgContainerVisible(false);
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '400px',
          top: '20%',
          left: '-8%',
          background: 'radial-gradient(ellipse, rgba(61,158,110,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — crossfading photo */}
          {imgContainerVisible && (
            <ScrollReveal>
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '4/5', maxWidth: '480px' }}
              >
                {/* Image 1 — bike */}
                <img
                  src="/images/ferg-bike.jpg"
                  alt="Ferg on a mountain bike"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: showSecond ? 0 : 1,
                    transition: 'opacity 0.8s ease',
                  }}
                  onError={handleImageError}
                />
                {/* Image 2 — ski */}
                <img
                  src="/images/ferg-ski.jpg"
                  alt="Ferg skiing"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: showSecond ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                  }}
                  onError={handleImageError}
                />
              </div>
            </ScrollReveal>
          )}

          {/* Right — text content */}
          <ScrollReveal direction="left" delay={0.15}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--ca-accent)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                The builder
              </span>
            </div>

            <h2
              className="font-display font-black leading-tight tracking-tighter mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ca-text)',
              }}
            >
              Built local.
              <br />
              <span style={{ color: 'var(--ca-accent)' }}>Built different.</span>
            </h2>

            <div className="space-y-5 max-w-lg">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{ color: 'var(--ca-frost)' }}
              >
                Local to the mountains we all love, ski instructor, mountain biker, mechanical engineer — years spent in and around the businesses Cairn builds for. I know exactly where the gaps are, and I strive to deliver the best possible outcome for every client.
              </p>
            </div>

            {/* Credentials strip */}
            <div
              className="mt-10 pt-8 flex flex-wrap gap-8"
              style={{ borderTop: '1px solid rgba(61,158,110,0.1)' }}
            >
              <div>
                <div
                  className="font-display font-black text-sm tracking-tight mb-0.5"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  Ski Lover & Instructor
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Free-Ski Aviemore
                </div>
              </div>
              <div>
                <div
                  className="font-display font-black text-sm tracking-tight mb-0.5"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  Mountain Biker
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Highlands & Beyond
                </div>
              </div>
              <div>
                <div
                  className="font-display font-black text-sm tracking-tight mb-0.5"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  Born & Raised
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Aviemore
                </div>
              </div>
              <div>
                <div
                  className="font-display font-black text-sm tracking-tight mb-0.5"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  Mechanical Engineer
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Heriot-Watt University
                </div>
              </div>
              <div>
                <div
                  className="font-display font-black text-sm tracking-tight mb-0.5"
                  style={{ color: 'var(--ca-accent)' }}
                >
                  All-Round Go-Getter
                </div>
                <div
                  className="font-body text-xs"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  Driven to deliver
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
