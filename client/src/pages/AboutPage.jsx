import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHeader from '../components/site/PageHeader.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import AboutFerg from '../components/site/AboutFerg.jsx';
import { ABOUT, LOCATION, STEPS } from '../data/site.js';

const HOW = [
  { title: 'One person, start to finish', text: 'You talk to the person building it, from the first email to launch and after.' },
  { title: 'Plain English', text: "No jargon. If I can't explain why something helps your business, it doesn't go in." },
  { title: 'Remote by default', text: `I'm in ${LOCATION} and work with businesses in any English-speaking country, by phone, video call and email.` },
  { title: 'Straight about fit', text: "If a new website isn't what you need, I'll say so, and tell you what would help instead." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          label="About"
          title={ABOUT.intro}
          lede="Cairn is me: a one-person web studio in Edinburgh building websites and the systems behind them for small, owner-run businesses."
        />

        <AboutFerg />

        <section className="border-t border-line bg-paper-bright/50">
          <div className="wrap py-20 sm:py-24">
            <Reveal className="max-w-3xl">
              <h2 className="h2">Working with me</h2>
            </Reveal>
            <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {HOW.map((h, i) => (
                <Reveal as="li" delay={i * 0.05} key={h.title} className="border-t border-line pt-6">
                  <h3 className="h3">{h.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{h.text}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-14 max-w-3xl">
              <p className="text-sm font-medium text-ink-muted">How a job runs</p>
              <ol className="mt-4 space-y-3">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4 leading-relaxed">
                    <span className="font-display text-sm font-medium text-gold-deep">0{i + 1}</span>
                    <span>
                      <strong className="font-semibold text-ink">{s.title}.</strong> <span className="text-ink-soft">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
