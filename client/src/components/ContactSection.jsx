import { Send, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal.jsx';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 noise-overlay"
      style={{ background: 'var(--ca-surface)' }}
    >
      {/* Top gradient bleed from surface to transparent */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, var(--ca-surface) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          top: '30%',
          right: '0%',
          background:
            'radial-gradient(ellipse, rgba(61,158,110,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA copy */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--ca-accent)' }} />
              <span
                className="font-display font-bold text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--ca-accent)' }}
              >
                Get in touch
              </span>
            </div>

            <h2
              className="font-display font-black leading-tight tracking-tighter mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--ca-text)',
              }}
            >
              Got a business?
              <br />
              <span style={{ color: 'var(--ca-accent)' }}>Let's find your gap.</span>
            </h2>

            <p
              className="font-body font-light text-base leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--ca-frost)' }}
            >
              Websites, AI chatbots, lead gen, Google Business optimisation, AI
              search visibility — or just a conversation about what your business
              actually needs.
            </p>

            {/* Direct email CTA */}
            <a
              href="mailto:fergus@cairn.agency"
              className="btn-ghost inline-flex mb-8"
            >
              <span>fergus@cairn.agency</span>
              <ArrowUpRight size={14} />
            </a>
          </ScrollReveal>

          {/* Right — enquiry form */}
          <ScrollReveal delay={0.15} direction="up">
            <div className="glass-panel p-8">
              <h3
                className="font-display font-bold text-sm tracking-[0.1em] uppercase mb-8"
                style={{ color: 'var(--ca-frost)' }}
              >
                Send an enquiry
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    className="block font-display font-bold text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--ca-muted)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 font-body text-sm bg-transparent outline-none transition-all"
                    style={{
                      border: '1px solid rgba(61,158,110,0.2)',
                      color: 'var(--ca-text)',
                      caretColor: 'var(--ca-accent)',
                      '--tw-placeholder-color': 'var(--ca-muted)',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.5)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.2)')
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block font-display font-bold text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--ca-muted)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 font-body text-sm bg-transparent outline-none transition-all"
                    style={{
                      border: '1px solid rgba(61,158,110,0.2)',
                      color: 'var(--ca-text)',
                      caretColor: 'var(--ca-accent)',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.5)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.2)')
                    }
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="block font-display font-bold text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--ca-muted)' }}
                  >
                    Subject
                  </label>
                  <select
                    className="w-full px-4 py-3 font-body text-sm outline-none appearance-none cursor-pointer transition-all"
                    style={{
                      border: '1px solid rgba(61,158,110,0.2)',
                      color: 'var(--ca-text)',
                      background: 'rgba(13,26,16,0.8)',
                      caretColor: 'var(--ca-accent)',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.5)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.2)')
                    }
                  >
                    <option value="" style={{ background: '#0d1a10' }}>
                      Select topic
                    </option>
                    <option value="website" style={{ background: '#0d1a10' }}>
                      Website build
                    </option>
                    <option value="chatbot" style={{ background: '#0d1a10' }}>
                      AI chatbot
                    </option>
                    <option value="seo" style={{ background: '#0d1a10' }}>
                      Google Business / SEO
                    </option>
                    <option value="leadgen" style={{ background: '#0d1a10' }}>
                      Lead gen / automation
                    </option>
                    <option value="general" style={{ background: '#0d1a10' }}>
                      General enquiry
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block font-display font-bold text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: 'var(--ca-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 font-body text-sm bg-transparent outline-none resize-none transition-all"
                    style={{
                      border: '1px solid rgba(61,158,110,0.2)',
                      color: 'var(--ca-text)',
                      caretColor: 'var(--ca-accent)',
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.5)')
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = 'rgba(61,158,110,0.2)')
                    }
                  />
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="btn-primary w-full justify-center"
                >
                  <span>Send message</span>
                  <Send size={14} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
