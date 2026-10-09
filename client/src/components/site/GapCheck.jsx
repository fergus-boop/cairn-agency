import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Mail, ArrowRight } from 'lucide-react';
import { BOOKING_IS_EMAIL, BOOKING_URL, EMAIL, FIXES, GAP_ITEMS, OFFERS, PAGE_COPY } from '../../data/site.js';

const offerTitle = (id) => OFFERS.find((o) => o.id === id)?.title ?? '';

// Visitor ticks what happens in their business, sees what usually fixes it, and can email the list.
export default function GapCheck() {
  const [ticked, setTicked] = useState(() => new Set());
  const [description, setDescription] = useState('');
  const hasDetails = ticked.size > 0 || description.trim().length > 0;
  const reduce = useReducedMotion();

  const toggle = (id) =>
    setTicked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const chosen = GAP_ITEMS.filter((g) => ticked.has(g.id));
  const fixIds = useMemo(() => [...new Set(chosen.flatMap((g) => g.fixes))], [chosen]);

  const mailto = useMemo(() => {
    const body = [
      'Hi Ferg,',
      '',
      ...(chosen.length ? ['These sound like my business:', ...chosen.map((g) => `- ${g.label}`), ''] : []),
      ...(description.trim() ? ['In my own words:', description.trim(), ''] : []),
      '',
      'Business name:',
      'Website or social page (if any):',
      '',
      'Thanks',
    ].join('\n');
    return `mailto:${EMAIL}?subject=${encodeURIComponent('Free look: my business')}&body=${encodeURIComponent(body)}`;
  }, [chosen, description]);

  const itemMotion = reduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.25 } };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <fieldset className="lg:col-span-7">
        <legend className="sr-only">Tick anything that happens in your business</legend>
        <ul className="grid gap-3 sm:grid-cols-2">
          {GAP_ITEMS.map((g) => {
            const on = ticked.has(g.id);
            return (
              <li key={g.id}>
                <label
                  className={`flex h-full cursor-pointer items-start gap-3.5 rounded-md border p-4 transition-colors ${
                    on ? 'border-ink bg-paper-bright' : 'border-line bg-paper-bright/60 hover:border-ink/40'
                  }`}
                >
                  <input type="checkbox" className="peer sr-only" checked={on} onChange={() => toggle(g.id)} />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold-deep ${
                      on ? 'border-ca-accent bg-ca-accent text-ca-black' : 'border-ink/35 bg-paper'
                    }`}
                  >
                    {on && <Check size={14} strokeWidth={3} />}
                  </span>
                  <span className="text-[0.975rem] leading-snug text-ink">{g.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <label htmlFor="gap-description" className="mt-7 block font-medium text-ink">{PAGE_COPY.gapLabel}</label>
        <textarea id="gap-description" rows={4} maxLength={2000} value={description} onChange={e => setDescription(e.target.value)} className="mt-3 block w-full resize-y rounded-md border border-ink/35 bg-paper p-4 text-base text-ink focus:border-ca-accent" aria-describedby="gap-privacy" />
        <p id="gap-privacy" className="mt-2 text-sm text-ink-muted">Nothing is sent until you choose to email it.</p>
      </fieldset>

      <div className="lg:col-span-5">
        <div className="on-ink rounded-lg border border-ca-green bg-ca-deep p-6 text-ink sm:p-8 lg:sticky lg:top-28" aria-live="polite">
          <p className="text-lg font-medium text-ca-accent">What usually fixes it</p>
          {fixIds.length === 0 ? (
            <p className="mt-4 text-ink/75">{description.trim() ? PAGE_COPY.gapTextOnly : 'Tick anything that sounds familiar and the fixes show up here.'}</p>
          ) : (
            <ul className="mt-5 space-y-5">
              <AnimatePresence initial={false}>
                {fixIds.map((id) => (
                  <motion.li key={id} layout={!reduce} {...itemMotion}>
                    <p className="font-display text-[1.02rem] font-medium text-ink">{FIXES[id].title}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/75">{FIXES[id].line}</p>
                    <Link
                      to={`/services#${FIXES[id].offer}`}
                      className="mt-1.5 inline-flex items-center gap-1 text-sm text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                    >
                      {offerTitle(FIXES[id].offer)} <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}

          <div className="mt-7 flex flex-col gap-3 border-t border-ink/10 pt-6">
            {hasDetails ? (
              <>
                <a href={mailto} className="btn-gold w-full">
                  <Mail size={18} aria-hidden="true" /> {PAGE_COPY.gapEmail}
                </a>
                {!BOOKING_IS_EMAIL && (
                  <a href={BOOKING_URL} className="btn w-full border border-ink/25 text-ink hover:border-ink">
                    Book a free look
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => { setTicked(new Set()); setDescription(''); }}
                  className="self-start text-sm text-ink/60 underline underline-offset-4 hover:text-ink"
                >
                  Clear
                </button>
              </>
            ) : (
              <p className="text-sm text-ink/60">Nothing is sent anywhere until you choose to email it.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
