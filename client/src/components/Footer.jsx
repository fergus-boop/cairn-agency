import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  Services: [
    { label: 'Websites', href: '#features' },
    { label: 'AI Chatbots', href: '#features' },
    { label: 'Live Demos', href: '#demo' },
  ],
  Company: [
    { label: 'About CAIRN', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 noise-overlay"
      style={{
        background:
          'linear-gradient(180deg, var(--ca-black) 0%, var(--ca-surface) 100%)',
        borderTop: '1px solid rgba(61,158,110,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/images/cairn-logo.png" alt="CAIRN" className="h-8 w-auto" />
            </div>
            <p
              className="font-body font-light text-sm leading-relaxed"
              style={{ color: 'var(--ca-muted)' }}
            >
              Websites. Chatbots. Lead gen. Built for local business.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-12">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h4
                  className="font-display font-bold text-xs tracking-[0.2em] uppercase mb-5"
                  style={{ color: 'var(--ca-frost)' }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      {href.startsWith('/') ? (
                        <Link
                          to={href}
                          className="font-body text-sm transition-colors hover:text-ca-accent"
                          style={{ color: 'var(--ca-muted)' }}
                        >
                          {label}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="font-body text-sm transition-colors hover:text-ca-accent"
                          style={{ color: 'var(--ca-muted)' }}
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'rgba(61,158,110,0.08)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-body text-xs"
            style={{ color: 'var(--ca-muted)' }}
          >
            Built by Cairn © 2026
          </p>
          <p
            className="font-display font-bold text-xs tracking-[0.15em] uppercase"
            style={{ color: 'var(--ca-muted)', opacity: 0.5 }}
          >
            Built in the Cairngorms.
          </p>
        </div>
      </div>
    </footer>
  );
}
