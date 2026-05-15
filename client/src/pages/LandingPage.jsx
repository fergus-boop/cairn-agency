import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import WhyCairn from '../components/WhyCairn.jsx';
import AboutFerg from '../components/AboutFerg.jsx';
import DualChatDemo from '../components/DualChatDemo.jsx';
import AvieBikesDemos from '../components/AvieBikesDemos.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

export default function LandingPage() {
  return (
    <main className="bg-ca-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <WhyCairn />
      <AboutFerg />
      <DualChatDemo />
      <AvieBikesDemos />
      <ContactSection />
      <Footer />
    </main>
  );
}
