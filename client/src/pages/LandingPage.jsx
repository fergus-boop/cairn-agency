import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import WhyCairn from '../components/WhyCairn.jsx';
import AboutFerg from '../components/AboutFerg.jsx';
import { FreeSkiCard, TreeZoneCard } from '../components/DualChatDemo.jsx';
import IYEDemo from '../components/IYEDemo.jsx';
import AvieBikesDemo from '../components/AvieBikesDemo.jsx';
import AvieBikesRoutesBot from '../components/AvieBikesRoutesBot.jsx';
import CairngormDemo from '../components/CairngormDemo.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import ScrollReveal from '../components/ui/ScrollReveal.jsx';
import BackgroundPaths from '../components/BackgroundPaths.jsx';

function LiveDemosSection() {
  return (
    <section
      id="demo"
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative px-6 lg:px-10" style={{ zIndex: 2 }}>

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
              See it live.
              <br />
              <span className="text-gradient-mint">Real AI. Live.</span>
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-md mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Real AI, trained on real business info. Try asking an actual question.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ScrollReveal delay={0.2} direction="up" blur>
            <FreeSkiCard />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" blur>
            <TreeZoneCard />
          </ScrollReveal>
          <ScrollReveal delay={0.4} direction="up" blur>
            <IYEDemo />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function AvieBikesSection() {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative px-6 lg:px-10" style={{ zIndex: 2 }}>

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: 'var(--ca-accent)', opacity: 0.5 }} />
              <span
                className="font-display font-bold text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Smart Booking Demo
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
              Book smarter.
              <br />
              <span className="text-gradient-mint">Ride better.</span>
            </h2>

            <p
              className="font-body font-light text-base lg:text-lg max-w-md mx-auto"
              style={{ color: 'var(--ca-muted)' }}
            >
              Full smart booking and trail recommendations — powered by real local knowledge.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollReveal delay={0.2} direction="up" blur>
            <AvieBikesDemo />
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="up" blur>
            <AvieBikesRoutesBot />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

function CairngormSection() {
  return (
    <>
      <div style={{ height: '1px', background: 'rgba(61, 158, 110, 0.12)', margin: '0 1.5rem' }} />

      <section
        className="relative py-20 lg:py-28"
        style={{ background: 'var(--ca-black)' }}
      >
        <BackgroundPaths intensity={0.4} />

        <div className="relative px-6 lg:px-10" style={{ zIndex: 2 }}>

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
                A live demo of what an AI assistant could do for Cairngorm Mountain.
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

export default function LandingPage() {
  return (
    <main
      className="bg-ca-black min-h-screen overflow-x-hidden"
      style={{ maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <Navbar />
      <Hero />
      <Features />
      <WhyCairn />
      <AboutFerg />
      <LiveDemosSection />
      <AvieBikesSection />
      <CairngormSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
