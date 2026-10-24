import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export default function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div
      className="min-h-screen"
      style={{ background: 'var(--ca-black)', color: 'var(--ca-frost)' }}
    >
      <div className="max-w-2xl mx-auto px-6 py-16 lg:py-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-12 transition-opacity hover:opacity-70 font-body text-sm"
          style={{ color: 'var(--ca-muted)' }}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="mb-10">
          <span
            className="font-display font-bold text-xs tracking-[0.3em] uppercase"
            style={{ color: 'var(--ca-accent)' }}
          >
            Legal
          </span>
          <h1
            className="font-display font-black tracking-tight mt-3 mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ca-text)' }}
          >
            Privacy Policy
          </h1>
          <p className="font-body text-sm" style={{ color: 'var(--ca-muted)' }}>
            Last updated: 24 October 2026
          </p>
        </div>

        <div className="space-y-10 font-body font-light text-base leading-relaxed" style={{ color: 'var(--ca-frost)' }}>
          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Who we are
            </h2>
            <p>
              This site is operated by <strong>Fergus Masson, trading as Cairn</strong>, a web and AI agency based
              in Scotland. You can contact us at{' '}
              <a
                href="mailto:fergus@cairn.agency"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ca-accent)' }}
              >
                fergus@cairn.agency
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Business prospecting
            </h2>
            <p className="mb-3">
              We research small businesses and holiday lets that may benefit from our websites and
              direct-booking services. We may record a business or property name and location,
              publicly available business contact details, website and listing links, reviews,
              booking options, and short-term-let licence information. We obtain these from public
              business websites and listings and public registers, including council short-term-let
              registers. We use them to assess whether our services are relevant and to make limited
              business contact where permitted.
            </p>
            <p className="mb-3">
              Where this includes personal data, our lawful basis is our legitimate interest in
              finding potential clients and explaining relevant services. We do not take personal
              contact details from council registers or sell personal prospect records. We do not
              send unsolicited marketing emails to sole traders or other individual subscribers.
              If we contact you, we will tell you where we found your details and how to opt out.
            </p>
            <p>
              We delete prospect records after 12 months if there is no reply or interest. If you
              ask us not to contact you, we stop using your details for marketing and keep only the
              minimum needed to honour your request. You can object to direct marketing at any time
              by emailing us at{' '}
              <a
                href="mailto:fergus@cairn.agency"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ca-accent)' }}
              >
                fergus@cairn.agency
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              What data we collect
            </h2>
            <p className="mb-3">
              The live demo chatbots on this site are for illustration only. When you type a
              message into a demo chat widget:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2" style={{ color: 'var(--ca-frost)' }}>
              <li>Your message is sent to our server and forwarded to the Anthropic API to generate a reply.</li>
              <li>We do not store your chat messages beyond what is needed to process the reply.</li>
              <li>Anthropic does not use conversations through the API to train its models. See <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: 'var(--ca-accent)' }}>anthropic.com/privacy</a>.</li>
            </ul>
            <p className="mt-3">
              We do not require you to create an account, and we do not use advertising trackers
              or analytics cookies on this site.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Rate limiting and server logs
            </h2>
            <p>
              To protect against abuse, our server applies rate limiting. As part of this,
              your IP address is temporarily logged by our infrastructure hosted on Railway.
              These logs are retained for a short period for security
              purposes and are not used for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Hosting and infrastructure
            </h2>
            <p>
              This site is hosted on <strong>Railway</strong>, and its DNS is managed through{' '}
              <strong>Namecheap</strong>. These providers may process network-level data
              (including IP addresses) as part of normal infrastructure operation. See their
              respective privacy policies for details.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Your rights (UK GDPR)
            </h2>
            <p className="mb-3">
              If you are based in the UK, you have rights under the UK GDPR, including, where applicable:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>The right to access personal data we hold about you</li>
              <li>The right to have inaccurate data corrected</li>
              <li>The right to erasure ("right to be forgotten")</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-3">
              Contact us to exercise these rights. We will stop using your personal data for direct
              marketing if you object. You also have the right to lodge a complaint with the Information
              Commissioner's Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ca-accent)' }}
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Contact
            </h2>
            <p>
              For any privacy-related queries, email us at{' '}
              <a
                href="mailto:fergus@cairn.agency"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ca-accent)' }}
              >
                fergus@cairn.agency
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
