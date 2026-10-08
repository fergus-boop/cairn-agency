import { Mail } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { BOOKING_IS_EMAIL, BOOKING_URL, EMAIL } from '../../data/site.js';

export default function ContactCta({ title = "Tell me what's not working." }) {
  return (
    <section id="contact" className="border-t border-line bg-stone/60">
      <div className="wrap grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 className="h2">{title}</h2>
          <p className="lede mt-5 max-w-prose">
            A couple of lines about your business is plenty. I read and answer every email myself, and the first look costs
            nothing.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <a href={BOOKING_URL} className="btn-primary">
            <Mail size={18} aria-hidden="true" /> {BOOKING_IS_EMAIL ? 'Email for a free look' : 'Book a free look'}
          </a>
          {!BOOKING_IS_EMAIL && (
            <a href={`mailto:${EMAIL}`} className="btn-secondary">
              {EMAIL}
            </a>
          )}
        </Reveal>
      </div>
      {BOOKING_IS_EMAIL && (
        <p className="wrap -mt-12 pb-16 text-[0.975rem] text-ink-soft sm:-mt-14">
          Or write straight to{' '}
          <a className="link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      )}
    </section>
  );
}
