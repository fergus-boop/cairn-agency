import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHeader from '../components/site/PageHeader.jsx';
import ContactCta from '../components/site/ContactCta.jsx';
import Reveal from '../components/site/Reveal.jsx';
import CairnStack from '../components/site/CairnStack.jsx';
import { LOCATION, STEPS } from '../data/site.js';

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
          title="I'm Fergus Masson. Most people call me Ferg."
          lede="Cairn is me: a one-person web studio in Edinburgh building websites and the systems behind them for small, owner-run businesses."
        />

        <section className="wrap grid gap-12 pb-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="grid grid-cols-2 gap-4 lg:col-span-5">
            <img
              src="/images/ferg-ski.jpg"
              width="519"
              height="796"
              alt="Ferg mid-air on skis on a snowy slope"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <img
              src="/images/ferg-bike.jpg"
              width="640"
              height="901"
              alt="Ferg in the air on a BMX at a skatepark at dusk"
              className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover"
            />
          </Reveal>

          <Reveal delay={0.08} className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft lg:col-span-7">
            <p className="text-ink">
              I'm a ski instructor, a mountain biker and a mechanical engineer, and I've spent years in and around the kind
              of businesses Cairn builds for: hire shops, ski schools and activity operators.
            </p>
            <p>
              That's where Cairn started. It has since built for a barbershop, a watch dealer and a family sawmill, and now
              offers direct booking for holiday lets too. The trades are different, but the problem often isn't: there's one
              place where customers drop off, and that's what I look for first.
            </p>
            <p>
              I build the whole thing myself, from the website to the ordering, booking or admin page behind it, and I look
              after it once it's live.
            </p>

            <div className="!mt-12 grid items-center gap-6 rounded-3xl bg-stone/60 p-6 sm:grid-cols-[9rem_1fr] sm:p-8">
              <CairnStack compact className="mx-auto w-32 sm:w-full" />
              <div>
                <h2 className="font-display text-[1.2rem] font-medium text-ink">Why “Cairn”</h2>
                <p className="mt-2 text-[0.975rem]">
                  A cairn is a stack of stones that marks the way on a hill. When one is missing, people walk past the turn.
                  Most small businesses have a missing stone somewhere between someone finding them and someone paying them.
                  Finding it is step one.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-t border-line bg-paper-bright/50">
          <div className="wrap py-20 sm:py-24">
            <Reveal className="max-w-3xl">
              <p className="label">How I work</p>
              <h2 className="h2 mt-4">What working with me looks like</h2>
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">How a job runs</p>
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
