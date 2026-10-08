import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Home, Star, Trees, Watch } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import CairnStack from '../components/site/CairnStack.jsx';
import GapCheck from '../components/site/GapCheck.jsx';
import DemoChat from '../components/site/DemoChat.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import { stonePath } from '../components/site/stone.js';
import { BOOKING_IS_EMAIL, BOOKING_URL, CASE_STUDIES, DEMOS, OFFERS, STEPS, TRIM } from '../data/site.js';

const CASE_ICONS = { watch: Watch, trees: Trees, home: Home };

function StoneBullet({ className = '' }) {
  return (
    <svg viewBox="0 0 20 12" className={`h-3 w-5 shrink-0 ${className}`} aria-hidden="true">
      <path d={stonePath(10, 6, 8.5, 4.4)} fill="currentColor" />
    </svg>
  );
}

function SectionIntro({ label, title, lede, tone = 'paper' }) {
  const dark = tone === 'ink';
  return (
    <Reveal className="max-w-3xl">
      <p className={dark ? 'text-xs font-semibold uppercase tracking-[0.14em] text-gold' : 'label'}>{label}</p>
      <h2 className={`h2 mt-4 ${dark ? '!text-paper' : ''}`}>{title}</h2>
      {lede && <p className={`mt-5 max-w-prose text-[1.0625rem] leading-relaxed ${dark ? 'text-paper/70' : 'text-ink-soft'}`}>{lede}</p>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="wrap grid items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-6 lg:pb-24 lg:pt-16">
      <Reveal className="lg:col-span-7">
        <p className="label">One-person web studio, Edinburgh</p>
        <h1 className="h1 mt-5">Websites that take the order, the booking and the enquiry.</h1>
        <p className="lede mt-6 max-w-prose">
          I'm Ferg. I build websites for small, owner-run businesses, along with the parts behind them: online ordering,
          bookings, stock you update yourself, direct booking for holiday lets, and replies that go out while you're busy.
          It starts with a free look at what you've got now.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={BOOKING_URL} className="btn-primary">
            {BOOKING_IS_EMAIL ? 'Ask for a free look' : 'Book a free look'}
          </a>
          <a href="#gap-check" className="btn-secondary">
            Find your gap <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
      <div className="lg:col-span-5">
        <CairnStack className="mx-auto hidden w-full max-w-[34rem] sm:block" />
        <CairnStack compact className="mx-auto w-full max-w-[15rem] sm:hidden" />
      </div>
    </section>
  );
}

function GapSection() {
  return (
    <section id="gap-check" className="border-y border-line bg-stone/50">
      <div className="wrap py-20 sm:py-24">
        <SectionIntro
          label="Gap check"
          title="Where are customers slipping through?"
          lede="Tick whatever sounds like your business. You'll see what usually fixes it, and you can send the list straight to me."
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
      <SectionIntro label="What I build" title="Three things, usually in some combination." />
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
                  <StoneBullet className="mt-[0.45rem] text-gold" />
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
        <SectionIntro label="Work" title="Recent work" />

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

        <div className="mt-24">
          <Reveal className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h3 className="font-display text-[1.2rem] font-medium">Other work, without names</h3>
            <p className="text-[0.95rem] text-ink-muted">Happy to talk any of it through on a call.</p>
          </Reveal>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {CASE_STUDIES.map((c, i) => {
              const Icon = CASE_ICONS[c.icon];
              return (
                <Reveal as="li" delay={i * 0.06} key={c.title} className="flex flex-col rounded-3xl bg-stone/70 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs font-semibold text-ink-soft">{c.kind}</span>
                  </div>
                  <h4 className="mt-6 font-display text-[1.05rem] font-medium">{c.title}</h4>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{c.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="wrap py-20 sm:py-28">
      <SectionIntro label="How a job runs" title="From a free look to looking after it." />
      <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
        <span aria-hidden="true" className="absolute left-0 right-0 top-[0.7rem] hidden border-t border-dashed border-ink/25 md:block" />
        {STEPS.map((s, i) => (
          <Reveal as="li" delay={i * 0.07} key={s.title} className="relative">
            <span className="relative flex items-center gap-3">
              <StoneBullet className={`!h-6 !w-10 ${i === 0 ? 'text-gold' : 'text-ink'}`} />
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

function AboutTeaser() {
  return (
    <section className="border-t border-line">
      <div className="wrap grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <img
            src="/images/ferg-bike1.jpg"
            width="934"
            height="622"
            loading="lazy"
            alt="Ferg riding a mountain bike down a forest trail"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="label">Who you'd be working with</p>
          <h2 className="h2 mt-4">Fergus Masson. Ferg.</h2>
          <p className="lede mt-6 max-w-prose">
            Ski instructor, mountain biker and mechanical engineer, with years spent in and around the kind of businesses
            Cairn builds for. I start from how your business actually runs, not from a template.
          </p>
          <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
            Cairn is just me, so the person you talk to is the person building it. I'm based in Edinburgh and work with
            businesses in any English-speaking country.
          </p>
          <Link to="/about" className="link mt-7 inline-flex items-center gap-1">
            More about me <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Demos() {
  return (
    <section id="demos" className="on-ink bg-ink text-paper">
      <div className="wrap py-20 sm:py-28">
        <SectionIntro
          tone="ink"
          label="Try it"
          title="Ask one of the assistants something."
          lede="Both are built from real Highland businesses, with the names taken out. Ask what a customer would. They're demos, so don't plan a real trip around the answers."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {DEMOS.map((d, i) => (
            <Reveal key={d.context} delay={i * 0.08} className="min-w-0">
              <DemoChat {...d} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[0.975rem] text-paper/65">
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
        <AboutTeaser />
        <Demos />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
