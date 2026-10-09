import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play, ArrowRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { ABOUT } from '../../data/site.js';

export default function AboutFerg({ home = false }) {
  const reduce = useReducedMotion();
  const [ski, setSki] = useState(false);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const timer = setInterval(() => setSki(value => !value), 3500);
    return () => clearInterval(timer);
  }, [reduce, paused]);
  return (
    <section className="border-t border-line">
      <div className="wrap grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <figure className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden bg-ca-surface">
            <img src="/images/ferg-bike.jpg" alt="Ferg in the air on a BMX at a skatepark" width="640" height="901" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[50%_10%] transition-opacity duration-[800ms]" style={{ opacity: ski ? 0 : 1 }} aria-hidden={ski} />
            <img src="/images/ferg-ski.jpg" alt="Ferg mid-air on skis on a snowy slope" width="519" height="796" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-[800ms]" style={{ opacity: ski ? 1 : 0 }} aria-hidden={!ski} />
            {!reduce && <button type="button" onClick={() => setPaused(value => !value)} className="absolute bottom-3 right-3 flex min-h-11 items-center gap-2 rounded bg-ca-black/85 px-3 text-sm text-ink" aria-label={paused ? 'Play photo slideshow' : 'Pause photo slideshow'}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? 'Play' : 'Pause'}</button>}
          </figure>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <h2 className="h2 max-w-xl">{ABOUT.title}</h2>
          {home && <p className="mt-6 text-lg font-medium">{ABOUT.intro}</p>}
          <p className="lede mt-4 max-w-prose">{ABOUT.description}</p>
          <dl className="mt-9 grid gap-x-6 gap-y-6 border-t border-line pt-7 sm:grid-cols-2">
            {ABOUT.credentials.map(([title, detail]) => <div key={title}><dt className="font-display text-[0.8rem] font-medium text-ca-accent">{title}</dt><dd className="mt-1 text-sm text-ink-muted">{detail}</dd></div>)}
          </dl>
          {home && <Link to="/about" className="link mt-8 inline-flex items-center gap-2">More about me <ArrowRight size={16} aria-hidden="true" /></Link>}
        </Reveal>
      </div>
    </section>
  );
}
