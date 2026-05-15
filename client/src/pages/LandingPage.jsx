import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import WhyCairn from '../components/WhyCairn.jsx';
import AboutFerg from '../components/AboutFerg.jsx';
import DualChatDemo from '../components/DualChatDemo.jsx';
import IYEDemo from '../components/IYEDemo.jsx';
import AvieBikesDemo from '../components/AvieBikesDemo.jsx';
import AvieBikesDemos from '../components/AvieBikesDemos.jsx';
import CairngormDemoSection from '../components/CairngormDemoSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import ScrollReveal from '../components/ui/ScrollReveal.jsx';
import BackgroundPaths from '../components/BackgroundPaths.jsx';

function IYEAndAvieBikesSection() {
  return (
    <section
      className="relative py-20 lg:py-28"
      style={{ background: 'var(--ca-black)' }}
    >
      <BackgroundPaths intensity={0.4} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10" style={{ zIndex: 2 }}>

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
              Two assistants — routes advice and full smart booking, all in one conversation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <ScrollReveal delay={0.2} direction="up" blur>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span
                  className="font-display font-black text-sm tracking-tight"
                  style={{ color: 'var(--ca-text)' }}
                >
                  IYE Bike Hire · Rothiemurchus
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
              <IYEDemo />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up" blur>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span
                  className="font-display font-black text-sm tracking-tight"
                  style={{ color: 'var(--ca-text)' }}
                >
                  Aviemore Bikes
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
              <AvieBikesDemo />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-ca-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <WhyCairn />
      <AboutFerg />
      <DualChatDemo />
      <IYEAndAvieBikesSection />
      <AvieBikesDemos />
      <CairngormDemoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
