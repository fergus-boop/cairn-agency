import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer.jsx';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="font-body text-sm" style={{ color: 'var(--ca-muted)' }}>
            Last updated: 10 July 2026
          </p>
        </div>

        <div className="space-y-10 font-body font-light text-base leading-relaxed" style={{ color: 'var(--ca-frost)' }}>
          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Demos provided as-is
            </h2>
            <p>
              The AI chatbot demos on this site are provided for illustration purposes only.
              They demonstrate the kind of assistant Cairn can build for a business, but they
              are not a live production service. You must not rely on any information provided
              by a demo assistant for real bookings, pricing, availability, or any other
              business decision. Always contact the relevant business directly.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Acceptable use
            </h2>
            <p className="mb-3">
              By using this site you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Attempt to extract, scrape, or systematically query the demo AI endpoints for any purpose other than genuine personal use</li>
              <li>Use the site in a way that could damage, disable, or impair our infrastructure</li>
              <li>Submit unlawful, abusive, or harmful content through any input field</li>
              <li>Attempt to reverse-engineer or misuse the AI system prompts or backend logic</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Intellectual property
            </h2>
            <p>
              All content on this site — including design, copy, code, and branding — is the
              intellectual property of Cairn — Fergus Masson AI Automations unless otherwise stated. You may not reproduce,
              distribute, or use any part of this site without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Limitation of liability
            </h2>
            <p>
              To the extent permitted by law, Cairn — Fergus Masson AI Automations accepts no liability for loss or damage
              arising from your use of this site or any information provided by a demo
              assistant. The site is provided "as is" without warranty of any kind.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of Scotland. Any disputes arising from
              your use of this site shall be subject to the exclusive jurisdiction of the
              Scottish courts.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-sm tracking-wide uppercase mb-3" style={{ color: 'var(--ca-accent)' }}>
              Contact
            </h2>
            <p>
              Questions about these terms? Email{' '}
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
