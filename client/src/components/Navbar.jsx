import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'How It Works', href: '#features' },
  { label: 'Live Demo', href: '#demo' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && pathname === '/') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(6,13,8,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(61,158,110,0.1)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="transition-opacity hover:opacity-80"
            >
              <img src="/src/assets/cairn-logo.png" alt="CAIRN" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="mint-underline font-body text-sm font-medium tracking-wide transition-colors"
                  style={{ color: 'var(--ca-frost)' }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={(e) => handleNavClick(e, '#demo')}
                className="btn-primary text-xs"
              >
                <span>Enter</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 transition-colors"
              style={{ color: 'var(--ca-frost)' }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(6,13,8,0.96)', backdropFilter: 'blur(24px)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-8 px-6">
          {/* Logo in mobile menu */}
          <img src="/src/assets/cairn-logo.png" alt="CAIRN" className="h-10 w-auto mb-4" />

          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="font-display font-bold text-3xl tracking-tight transition-colors"
              style={{
                color: 'var(--ca-text)',
                animationDelay: `${i * 80}ms`,
              }}
            >
              {label}
            </a>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4 w-full max-w-xs">
            <button
              onClick={(e) => {
                handleNavClick(e, '#demo');
                setMobileOpen(false);
              }}
              className="btn-primary w-full justify-center"
            >
              <span>Enter</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
