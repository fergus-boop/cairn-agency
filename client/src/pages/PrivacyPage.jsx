import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer.jsx';

export default function PrivacyPage() {
  const navigate = useNavigate();

  return (
    <>
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
            Last updated: 10 July 2026
          </p>
        </div>

        <div className="space-y-10 font-body font-light text-base leading-relaxed" style={{ color: 'var(--ca-frost)' }}>
          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Who we are
            </h2>
            <p>
              This site is operated by <strong>Cairn — Fergus Masson AI Automations</strong>, a web and AI agency based
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
              your IP address is temporarily logged by our infrastructure (hosted on Railway,
              DNS via Cloudflare). These logs are retained for a short period for security
              purposes and are not used for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Hosting and infrastructure
            </h2>
            <p>
              This site is hosted on <strong>Railway</strong>. DNS and edge caching are handled
              by <strong>Cloudflare</strong>. Both providers may process network-level data
              (including IP addresses) as part of normal infrastructure operation. See their
              respective privacy policies for details.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Your rights (UK GDPR)
            </h2>
            <p className="mb-3">
              If you are based in the UK or EEA, you have rights under the UK GDPR, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>The right to access personal data we hold about you</li>
              <li>The right to have inaccurate data corrected</li>
              <li>The right to erasure ("right to be forgotten")</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-3">
              Given we collect minimal data, most requests can be addressed simply by
              contacting us. You also have the right to lodge a complaint with the Information
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
