import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import cairngormsImg from '../assets/cairngorms.png';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const STATS = [
    { value: 'Websites · Chatbots · Lead Gen · GBP · AI Search', label: 'What we build' },
    { value: '100%', label: 'Built for your business' },
    { value: '£0', label: 'Cost per AI-answered enquiry' },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'var(--ca-black)' }}
    >
      {/* Cairngorms background image with cinematic overlay */}
      <div className="absolute inset-0" aria-hidden="true" style={{ zIndex: 0 }}>
        <img
          src={cairngormsImg}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.9)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(6,13,8,0.3) 0%, rgba(6,13,8,0.58) 45%, rgba(6,13,8,0.94) 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? 'fadeInUp 0.7s ease forwards' : 'none',
            }}
          >
            <div
              className="w-8 h-px"
              style={{ background: 'var(--ca-accent)' }}
            />
            <span
              className="font-display font-bold text-xs tracking-[0.25em] uppercase"
              style={{ color: 'var(--ca-accent)' }}
            >
              CAIRN · AI AGENCY
            </span>
          </div>

          {/* Main headline with subtle radial gradient */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '800px',
              height: '600px',
              top: '100px',
              left: '0',
              background:
                'radial-gradient(ellipse at 20% 50%, rgba(61,158,110,0.05) 0%, transparent 60%)',
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          <h1
            className="font-display font-black leading-[0.92] tracking-tighter mb-6 relative"
            style={{
              fontSize: 'clamp(2.56rem, 8vw, 6.8rem)',
              opacity: visible ? 1 : 0,
              animation: visible ? 'fadeInUp 0.8s 0.12s ease forwards' : 'none',
              zIndex: 1,
            }}
          >
            <span style={{ color: 'var(--ca-text)' }}>YOUR BUSINESS.</span>
            <br />
            <span className="text-gradient-mint">WORKING HARDER.</span>
            <br />
            <span style={{ color: 'var(--ca-text)' }}>WHILE YOU DON'T.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="font-body font-light text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            style={{
              color: 'var(--ca-frost)',
              opacity: visible ? 1 : 0,
              animation: visible ? 'fadeInUp 0.8s 0.26s ease forwards' : 'none',
            }}
          >
            We find what's costing your business leads, time, and money — then we build the fix.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? 'fadeInUp 0.8s 0.4s ease forwards' : 'none',
            }}
          >
            <button
              onClick={() => scrollTo('demo')}
              className="btn-primary"
            >
              <span>See it live.</span>
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="btn-ghost"
            >
              How it works
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-wrap items-center gap-10 mt-10 pt-8 pb-24"
            style={{
              borderTop: '1px solid rgba(61,158,110,0.12)',
              opacity: visible ? 1 : 0,
              animation: visible ? 'fadeIn 1s 0.6s ease forwards' : 'none',
            }}
          >
            {STATS.map(({ value, label }, i) => (
              <div key={label}>
                <div
                  className={`font-display font-black tracking-tight ${i === 0 ? 'text-sm lg:text-base' : 'text-2xl lg:text-3xl'}`}
                  style={{ color: 'var(--ca-accent)' }}
                >
                  {value}
                </div>
                <div
                  className="font-body text-xs tracking-wide mt-1"
                  style={{ color: 'var(--ca-muted)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo('features')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-60"
        style={{ color: 'var(--ca-muted)', zIndex: 10 }}
        aria-label="Scroll to features"
      >
        <span className="font-display font-bold text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{ animation: 'pulseSlow 2s ease-in-out infinite' }}
        />
      </button>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--ca-black) 100%)',
          zIndex: 5,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
