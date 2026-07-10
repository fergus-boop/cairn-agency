import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import LiveWorkSection from '../components/LiveWorkSection.jsx';
import Features from '../components/Features.jsx';
import AboutFerg from '../components/AboutFerg.jsx';
import { FreeSkiCard } from '../components/DualChatDemo.jsx';
import AvieBikesRoutesBot from '../components/AvieBikesRoutesBot.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import ScrollReveal from '../components/ui/ScrollReveal.jsx';
import BackgroundPaths from '../components/BackgroundPaths.jsx';

function TrimCoCard() {
  return (
    <div
      className="flex flex-col rounded-xl border"
      style={{
        background: 'rgba(6, 13, 8, 0.4)',
        borderColor: 'rgba(184, 154, 78, 0.25)',
        height: '680px',
      }}
    >
      {/* Hero photo */}
      <div className="relative flex-shrink-0 overflow-hidden rounded-t-xl" style={{ height: '180px' }}>
        <img
          src="/images/trimco-hero.jpg"
          alt="The Trim Company website"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.7) contrast(1.05)' }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(8,13,10,0.65) 100%)' }}
        />
      </div>

      {/* Header bar */}
      <div
        className="px-6 py-4 flex items-center justify-between border-b flex-shrink-0"
        style={{
          background: 'rgba(6, 13, 8, 0.6)',
          borderColor: 'rgba(184, 154, 78, 0.15)',
        }}
      >
        <span
          className="font-display font-black text-sm tracking-tight"
          style={{ color: 'var(--ca-text)' }}
        >
          The Trim Company · Edinburgh
        </span>
        <span
          className="font-body text-xs flex items-center gap-1.5"
          style={{ color: '#b89a4e' }}
        >
          <span
            className="relative flex h-2 w-2"
            aria-hidden="true"
          >
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: '#b89a4e' }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: '#b89a4e' }}
            />
          </span>
          LIVE
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 py-6">
        <p
          className="font-body font-light text-sm leading-relaxed"
          style={{ color: 'var(--ca-frost)' }}
        >
          Edinburgh's premium barbershop. Full site, online shop, AI concierge, and per-barber booking links — designed, built, and shipped.
        </p>

        <div className="flex flex-col gap-2 mt-5">
          {['230★ reviews integrated', '10-product shop', 'AI trained on the full catalogue'].map((chip) => (
            <div
              key={chip}
              style={{
                border: '1px solid rgba(184,154,78,0.2)',
                background: 'rgba(184,154,78,0.06)',
                padding: '6px 12px',
                borderRadius: '6px',
              }}
            >
              <span className="font-body text-xs" style={{ color: '#b89a4e' }}>{chip}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <a
            href="https://thetrimcompany.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
            style={{ textDecoration: 'none' }}
          >
            Try it on a real business →
          </a>
        </div>
      </div>
    </div>
  );
}

function LiveDemosSection() {
  return (
    <section
      id="demo"
      className="relative py-14 lg:py-20"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative px-6 lg:px-10" style={{ zIndex: 2 }}>
        <ScrollReveal>
          <div className="text-center mb-12">
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
              See it live.
              <br />
              <span className="text-gradient-mint">Real AI. Real businesses.</span>
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-md mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Trained on real business info. Ask an actual question — then try the live site.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal delay={0.2} direction="up" blur>
            <FreeSkiCard />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" blur>
            <AvieBikesRoutesBot />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" blur>
            <TrimCoCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main
      className="bg-ca-black min-h-screen overflow-x-hidden"
      style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Navbar />
      <Hero />
      <LiveWorkSection />
      <Features />
      <LiveDemosSection />
      <AboutFerg />
      <ContactSection />
      <Footer />
    </main>
  );
}
