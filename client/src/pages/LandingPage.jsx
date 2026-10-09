import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import AboutFerg from '../components/site/AboutFerg.jsx';
import GapCheck from '../components/site/GapCheck.jsx';
import DemoChat from '../components/site/DemoChat.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import { BOOKING_IS_EMAIL, BOOKING_URL, HERO, PAGE_COPY, DEMOS, OFFERS, STEPS, TRIM } from '../data/site.js';

function SectionIntro({ title, lede }) {
  return <Reveal className="max-w-3xl"><h2 className="h2">{title}</h2>{lede && <p className="mt-5 max-w-prose text-[1.0625rem] leading-relaxed text-ink-soft">{lede}</p>}</Reveal>;
}

function Hero() {
  return (
    <section className="photo-hero">
      <picture className="hero-picture">
        <source type="image/webp" srcSet="/images/loch-morlich-paul-masson.webp" />
        <img src="/images/loch-morlich-paul-masson-1600.jpg" alt="The Cairngorms above frozen Loch Morlich, with two stones resting on the ice" width="1600" height="1200" fetchPriority="high" />
      </picture>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap hero-copy">
        <p className="mb-5 text-sm font-medium text-ink-soft">{HERO.location}</p>
        <h1>{HERO.headline}</h1>
        <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-ink sm:text-lg">{HERO.intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={BOOKING_URL} className="btn-primary">{BOOKING_IS_EMAIL ? 'Ask for a free look' : 'Book a free look'}</a>
          <a href="#gap-check" className="btn-secondary hero-secondary">Find your gap <ArrowDown size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="wrap hero-caption"><span>Loch Morlich, Cairngorms</span><a href={HERO.creditUrl} target="_blank" rel="noopener noreferrer">{HERO.credit}<span className="sr-only"> (opens in a new tab)</span></a></div>
    </section>
  );
}

function GapSection() {
  return (
    <section id="gap-check" className="border-y border-line bg-stone/50">
      <div className="wrap py-20 sm:py-24">
        <SectionIntro
          title={PAGE_COPY.gapTitle}
          lede={PAGE_COPY.gapIntro}
        />
        <Reveal delay={0.05} className="mt-12">
          <GapCheck />
        </Reveal>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="services" className="wrap py-20 sm:py-28">
      <SectionIntro title={PAGE_COPY.offersTitle} />
      <ol className="mt-14">
        {OFFERS.map((o, i) => (
          <Reveal as="li" key={o.id} className="grid gap-5 border-t border-line py-9 lg:grid-cols-12 lg:gap-8">
            <span className="font-display text-sm font-medium text-gold-deep lg:col-span-1">0{i + 1}</span>
            <div className="lg:col-span-4">
              <h3 className="font-display text-[1.35rem] font-medium leading-snug tracking-tight">{o.title}</h3>
              <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-soft">{o.who}</p>
            </div>
            <ul className="space-y-2.5 lg:col-span-5">
              {o.builds.map((b) => (
                <li key={b} className="flex gap-3 text-[0.975rem] leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-ca-accent" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="lg:col-span-2 lg:text-right">
              <Link to={`/services#${o.id}`} className="link inline-flex items-center gap-1 text-[0.95rem]">
                More <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-line bg-paper-bright/50">
      <div className="wrap py-20 sm:py-28">
        <SectionIntro title="Recent work" />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-7">
            <figure className="overflow-hidden rounded-2xl border border-line bg-paper-bright shadow-[0_24px_60px_-28px_rgba(26,23,20,0.35)]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-deep" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-deep" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-deep" />
                <span className="ml-3 truncate rounded-full bg-stone/70 px-3 py-0.5 text-xs text-ink-muted">{TRIM.urlLabel}</span>
              </div>
              <img
                src="/images/work/trimco-home-1440.jpg"
                width="1440"
                height="900"
                loading="lazy"
                alt="The Trim Company website home page: shop front photo, address on Dundas Street and a Book now button"
                className="block w-full"
              />
            </figure>
            <figure className="absolute -bottom-8 right-4 hidden w-[8.5rem] overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-xl sm:block lg:-right-6 lg:w-[9.5rem]">
              <img
                src="/images/work/trimco-home-390.jpg"
                width="390"
                height="844"
                loading="lazy"
                alt="The Trim Company website on a phone"
                className="block w-full rounded-[1rem]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="label">Client · {TRIM.place}</p>
            <h3 className="mt-3 font-display text-[1.75rem] font-medium tracking-tight">{TRIM.name}</h3>
            <p className="mt-4 leading-relaxed text-ink-soft">{TRIM.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {TRIM.built.map((b) => (
                <li key={b} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-[0.975rem]">
              <Star size={17} className="fill-gold text-gold" aria-hidden="true" />
              <span>
                <strong className="font-semibold">{TRIM.rating}</strong> on {TRIM.reviewSource} from {TRIM.reviewCount} reviews
              </span>
            </p>
            <p className="mt-1 text-sm text-ink-muted">Checked {TRIM.reviewCheckedOn}</p>
            {TRIM.testimonial && (
              <blockquote className="mt-7 border-l-2 border-gold pl-5">
                <p className="text-[1.05rem] leading-relaxed">“{TRIM.testimonial.quote}”</p>
                <footer className="mt-2 text-sm text-ink-muted">
                  {TRIM.testimonial.name}, {TRIM.testimonial.role}
                </footer>
              </blockquote>
            )}
            <a href={TRIM.url} target="_blank" rel="noopener noreferrer" className="link mt-7 inline-flex items-center gap-1">
              Visit {TRIM.urlLabel} <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>


      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="wrap py-20 sm:py-28">
      <SectionIntro title={PAGE_COPY.stepsTitle} />
      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
        {STEPS.map((s, i) => (
          <Reveal as="li" delay={i * 0.07} key={s.title} className="relative">
            <span className="relative flex items-center gap-3">
              <span className="font-display text-sm font-medium text-gold-deep">0{i + 1}</span>
            </span>
            <h3 className="h3 mt-5">{s.title}</h3>
            <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-soft">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Demos() {
  return (
    <section id="demos" className="on-ink border-y border-line bg-ca-deep text-ink">
      <div className="wrap py-20 sm:py-28">
        <SectionIntro
          title={PAGE_COPY.demosTitle}
          lede="Both are built from real Highland businesses, with the names taken out. Ask what a customer would. They're demos, so don't plan a real trip around the answers."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {DEMOS.map((d, i) => (
            <Reveal key={d.context} delay={i * 0.08} className="min-w-0">
              <DemoChat {...d} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.975rem] text-ink-muted">
          Want one for your business? It comes as part of{' '}
          <Link to="/services#websites" className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            websites and the systems behind them
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <GapSection />
        <Offers />
        <Work />
        <Steps />
        <AboutFerg home />
        <Demos />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
