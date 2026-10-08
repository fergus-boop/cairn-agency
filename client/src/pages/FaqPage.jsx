import { Plus } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHeader from '../components/site/PageHeader.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import FAQ from '../data/faq.json';
import { EMAIL } from '../data/site.js';

// Rendered from data/faq.json; server/seo.js builds the FAQPage structured data from the same file.
export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader label="FAQ" title="Questions people ask before hiring me">
          <p className="lede mt-6 max-w-prose">
            If yours isn't here, email{' '}
            <a className="link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </PageHeader>

        <section className="wrap pb-24">
          <Reveal className="max-w-3xl border-b border-line">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-t border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h2 className="font-display text-[1.08rem] font-medium leading-snug">{item.q}</h2>
                  <Plus size={20} className="mt-0.5 shrink-0 text-gold-deep transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="max-w-prose pb-7 leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
