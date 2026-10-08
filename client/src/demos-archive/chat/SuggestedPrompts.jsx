import { Mountain, ArrowUpRight } from 'lucide-react';

const DEFAULT_PROMPTS = [
  'How old do you need to be for TreeZone?',
  'Tell me about Free-Ski lessons',
  'Can I book TreeZone for a birthday party?',
  'What ski level do I need for Free-Ski?',
  'How long does TreeZone take?',
  'How do I book with Free-Ski?',
];

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty('--gx', `${x}%`);
  e.currentTarget.style.setProperty('--gy', `${y}%`);
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.setProperty('--gx', '50%');
  e.currentTarget.style.setProperty('--gy', '50%');
};

export default function SuggestedPrompts({ onSelectPrompt, businessName }) {
  const prompts = DEFAULT_PROMPTS;

  const heading = businessName
    ? `Hi, I'm the ${businessName} assistant.`
    : "Hi, I'm the cAirn assistant.";

  const subLine = businessName
    ? `Ask me anything about ${businessName} — I'll get you a straight answer.`
    : 'Ask me about TreeZone Aviemore or Free-Ski Aviemore — I\'ll get you a straight answer.';

  return (
    <div
      className="flex flex-col items-center text-center py-8 sm:py-12"
      style={{ animation: 'fadeIn 0.5s ease forwards' }}
    >
      {/* Logo mark */}
      <div
        className="flex items-center justify-center w-14 h-14 mb-6"
        style={{
          background: 'rgba(82,183,136,0.1)',
          border: '1px solid rgba(82,183,136,0.2)',
        }}
      >
        <Mountain size={24} style={{ color: 'var(--tz-mint)' }} strokeWidth={1.5} />
      </div>

      {/* Welcome heading */}
      <h2
        className="font-display font-black text-xl sm:text-2xl tracking-tight mb-2"
        style={{ color: 'var(--tz-snow)' }}
      >
        {heading}
      </h2>

      {/* Sub-line */}
      <p
        className="font-body font-light text-base mb-10 max-w-sm"
        style={{ color: 'var(--tz-muted)' }}
      >
        {subLine}
      </p>

      {/* Prompt chips — liquid glass */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xl">
        {prompts.map((prompt) => (
          <button
            type="button"
            key={prompt}
            onClick={() => onSelectPrompt(prompt)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="liquid-chip flex items-center gap-1.5 px-4 py-2.5 font-body text-sm transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1"
            style={{
              '--gx': '50%',
              '--gy': '50%',
              color: 'var(--tz-frost)',
            }}
          >
            <span>{prompt}</span>
            <ArrowUpRight size={12} strokeWidth={2} className="flex-shrink-0 opacity-50" />
          </button>
        ))}
      </div>

      {/* Footer hint */}
      <p
        className="font-body text-xs mt-10"
        style={{ color: 'rgba(107,138,118,0.45)' }}
      >
        Shift+Enter for a new line · Enter to send
      </p>
    </div>
  );
}
