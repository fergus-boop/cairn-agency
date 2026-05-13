import { Mountain } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div
      className="flex items-end gap-2.5 mb-3"
      style={{ animation: 'fadeIn 0.3s ease forwards' }}
      aria-live="polite"
      aria-label="cAirn is thinking"
    >
      {/* Avatar */}
      <div
        className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
        style={{
          background: 'rgba(82,183,136,0.12)',
          border: '1px solid rgba(82,183,136,0.25)',
        }}
        aria-hidden="true"
      >
        <Mountain size={13} style={{ color: 'var(--tz-mint)' }} strokeWidth={2} />
      </div>

      {/* Bubble */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{
          background: 'rgba(21,43,30,0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(82,183,136,0.1)',
          borderBottomLeftRadius: '2px',
        }}
      >
        {/* Animated dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'var(--tz-mint)',
                animation: `dotBounce 1.4s ${i * 0.16}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Label */}
        <span
          className="font-display font-bold text-xs tracking-wide"
          style={{ color: 'var(--tz-muted)', fontSize: '0.65rem', letterSpacing: '0.08em' }}
        >
          cAirn is thinking...
        </span>
      </div>
    </div>
  );
}
