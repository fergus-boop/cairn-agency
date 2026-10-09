import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CairnMark from './site/CairnMark.jsx';
import { BOOKING_IS_EMAIL, BOOKING_URL } from '../data/site.js';

const CTA = BOOKING_IS_EMAIL ? 'Ask for a free look' : 'Book a free look';

const LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/#work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-md px-3.5 py-2 text-[0.95rem] font-medium transition-colors ${
      isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled || open ? 'border-b border-line bg-paper/95 backdrop-blur' : location.pathname === '/' ? 'border-b border-transparent bg-transparent' : 'border-b border-transparent bg-paper'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="Cairn home" className="shrink-0">
          <CairnMark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} className="rounded-md px-3.5 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink">
                {l.label}
              </Link>
            ) : (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a href={BOOKING_URL} className="btn-primary hidden !min-h-[2.6rem] !px-5 !py-2 sm:inline-flex">
            {CTA}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink hover:bg-ink/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-col py-3">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-line py-3.5 font-display text-lg font-medium text-ink last:border-0">
                {l.label}
              </Link>
            ))}
            <a href={BOOKING_URL} className="btn-primary mb-2 mt-4 w-full">
              {CTA}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
