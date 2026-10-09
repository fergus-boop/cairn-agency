import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHeader from '../components/site/PageHeader.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import { OFFERS, PAGE_COPY, STEPS } from '../data/site.js';

const EXAMPLES = {
  websites: [
    { text: 'The Trim Company: website, online shop, booking assistant', to: '/#work' },
  ],
  'holiday-lets': [],
  automations: [],
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          label="Services"
          title="What I build"
          lede={PAGE_COPY.servicesIntro}
        >
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
            {OFFERS.map((o) => (
              <a key={o.id} href={`#${o.id}`} className="rounded-md border border-ink/15 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink">
                {o.title}
              </a>
            ))}
          </nav>
        </PageHeader>

        {OFFERS.map((o, i) => (
          <section key={o.id} id={o.id} className={`border-t border-line ${i % 2 === 1 ? 'bg-stone/50' : ''}`}>
            <div className="wrap grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-5">
                <span className="font-display text-sm font-medium text-gold-deep">0{i + 1}</span>
                <h2 className="h2 mt-3">{o.title}</h2>
                <p className="lede mt-5">{o.short}</p>
                <p className="mt-6 text-sm font-medium text-ink-muted">Who it's for</p>
                <p className="mt-2 leading-relaxed">{o.who}</p>
              </Reveal>
              <Reveal delay={0.08} className="lg:col-span-7">
                <div className="rounded-3xl border border-line bg-paper-bright p-6 sm:p-8">
                  <p className="text-sm font-medium text-ink-muted">What gets built</p>
                  <ul className="mt-4 space-y-3">
                    {o.builds.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed">
                        <Check size={18} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-sm font-medium text-ink-muted">What you end up with</p>
                  <p className="mt-2 leading-relaxed text-ink-soft">{o.outcome}</p>
                  {EXAMPLES[o.id].length > 0 && (
                    <>
                      <p className="mt-7 text-sm font-medium text-ink-muted">Recent work</p>
                      <ul className="mt-2 space-y-1.5">
                        {EXAMPLES[o.id].map((e) => (
                          <li key={e.text}>
                            <Link to={e.to} className="link text-[0.975rem] font-medium">
                              {e.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        <section className="border-t border-line">
          <div className="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
            <Reveal>
              <p className="label">Before anything is built</p>
              <h2 className="h2 mt-4">The free look</h2>
              <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">{STEPS[0].text}</p>
              <Link to="/#gap-check" className="link mt-6 inline-flex items-center gap-1">
                Try the gap check first <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="label">After it goes live</p>
              <h2 className="h2 mt-4">Looking after it</h2>
              <p className="mt-5 max-w-prose leading-relaxed text-ink-soft">
                {STEPS[3].text} Bigger changes are quoted separately, so you always know what something costs before it
                happens.
              </p>
            </Reveal>
          </div>
        </section>

        <ContactCta title="Not sure which of these you need?" />
      </main>
      <Footer />
    </>
  );
}
