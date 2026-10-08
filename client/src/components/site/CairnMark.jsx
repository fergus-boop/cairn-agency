import { stonePath } from './stone.js';

// Three stacked stones, gold capstone. Used in the nav, footer and favicon.
export default function CairnMark({ size = 26, tone = 'ink', withWord = true, className = '' }) {
  const stone = tone === 'paper' ? '#f2ece1' : '#1a1714';
  const word = tone === 'paper' ? 'text-paper' : 'text-ink';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <path d={stonePath(20, 32, 16, 5.2)} fill={stone} />
        <path d={stonePath(20.8, 22.4, 11.5, 4.6)} fill={stone} opacity="0.82" />
        <path d={stonePath(19.6, 13.6, 7.4, 4)} fill="#b89a4e" />
      </svg>
      {withWord && (
        <span className={`font-display text-[0.95rem] font-semibold tracking-[0.16em] ${word}`}>CAIRN</span>
      )}
    </span>
  );
}
