import { Link } from 'react-router-dom';
import CairnMark from './site/CairnMark.jsx';
import { EMAIL, LOCATION, OWNER } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="on-ink bg-ink text-paper/80">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <CairnMark tone="paper" />
          <p className="mt-5 max-w-sm text-[0.975rem] leading-relaxed text-paper/70">
            Websites and the systems behind them, for small owner-run businesses.
          </p>
          <address className="mt-6 not-italic text-[0.975rem] leading-relaxed">
            <span className="block text-paper">Cairn, {OWNER}</span>
            <span className="block">{LOCATION}</span>
            <a href={`mailto:${EMAIL}`} className="mt-1 inline-block text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
              {EMAIL}
            </a>
          </address>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-[0.975rem] md:col-span-7 md:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">Cairn</p>
            <ul className="space-y-2">
              <li><Link className="hover:text-paper" to="/services">Services</Link></li>
              <li><Link className="hover:text-paper" to="/#work">Work</Link></li>
              <li><Link className="hover:text-paper" to="/about">About</Link></li>
              <li><Link className="hover:text-paper" to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">Try it</p>
            <ul className="space-y-2">
              <li><Link className="hover:text-paper" to="/#gap-check">Gap check</Link></li>
              <li><Link className="hover:text-paper" to="/#demos">Assistant demos</Link></li>
              <li><Link className="hover:text-paper" to="/chat">Ask about Cairn</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold">Legal</p>
            <ul className="space-y-2">
              <li><Link className="hover:text-paper" to="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-paper" to="/terms">Terms</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-paper/10">
        <p className="wrap py-6 text-sm text-paper/55">© {new Date().getFullYear()} Cairn. Built in Edinburgh.</p>
      </div>
    </footer>
  );
}
