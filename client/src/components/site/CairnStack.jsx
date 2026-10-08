import { motion, useReducedMotion } from 'framer-motion';
import { stonePath } from './stone.js';

// Hero drawing: a small business's setup as a cairn. The gold capstone (the missing piece) settles last.
const STONES = [
  { cx: 196, cy: 376, a: 150, b: 40, fill: '#1a1714', label: 'Website', ly: 376 },
  { cx: 205, cy: 304, a: 118, b: 35, fill: '#3d3630', label: 'Orders & bookings', ly: 304 },
  { cx: 192, cy: 240, a: 90, b: 31, fill: '#5f574e', label: 'Replies & follow-up', ly: 240 },
];
const CAP = { cx: 200, cy: 184, a: 60, b: 26 };

// compact: stones only, cropped tight, for narrow screens where the labels would be unreadable.
export default function CairnStack({ className = '', compact = false }) {
  const reduce = useReducedMotion();
  const rise = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
        };
  const settle = reduce
    ? {}
    : {
        initial: { opacity: 0, y: -80, rotate: -9 },
        animate: { opacity: 1, y: 0, rotate: 0 },
        transition: { type: 'spring', stiffness: 110, damping: 13, delay: 0.75 },
      };
  const labelIn = (d) =>
    reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: d } };

  return (
    <svg
      viewBox={compact ? '30 140 340 290' : '0 0 560 440'}
      className={className}
      role="img"
      aria-label="A cairn of four stones labelled website, orders and bookings, replies and follow-up, with a gold capstone labelled the missing piece"
    >
      <ellipse cx="198" cy="418" rx="170" ry="9" fill="#1a1714" opacity="0.08" />
      <line x1="20" y1="418" x2="380" y2="418" stroke="#1a1714" strokeOpacity="0.18" strokeWidth="1.5" />

      {STONES.map((s, i) => (
        <motion.g key={s.label} {...rise(i)}>
          <path d={stonePath(s.cx, s.cy, s.a, s.b)} fill={s.fill} />
          <path
            d={`M ${s.cx - s.a * 0.62} ${s.cy - s.b * 0.55} Q ${s.cx - s.a * 0.1} ${s.cy - s.b * 0.98} ${s.cx + s.a * 0.42} ${s.cy - s.b * 0.72}`}
            fill="none"
            stroke="#f2ece1"
            strokeOpacity="0.16"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>
      ))}

      <motion.g {...settle} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <path d={stonePath(CAP.cx, CAP.cy, CAP.a, CAP.b, 0.14)} fill="#b89a4e" />
        <path
          d={`M ${CAP.cx - CAP.a * 0.58} ${CAP.cy - CAP.b * 0.5} Q ${CAP.cx - CAP.a * 0.05} ${CAP.cy - CAP.b * 1.02} ${CAP.cx + CAP.a * 0.4} ${CAP.cy - CAP.b * 0.74}`}
          fill="none"
          stroke="#f8f4ec"
          strokeOpacity="0.45"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.g>

      {!compact && (
      <g fontFamily="Instrument Sans, system-ui, sans-serif" fontSize="17">
        {STONES.map((s, i) => (
          <motion.g key={s.label} {...labelIn(0.35 + i * 0.12)}>
            <line x1={s.cx + s.a + 10} y1={s.ly} x2="392" y2={s.ly} stroke="#1a1714" strokeOpacity="0.28" strokeDasharray="2 4" />
            <text x="402" y={s.ly + 6} fill="#3d3630">
              {s.label}
            </text>
          </motion.g>
        ))}
        <motion.g {...labelIn(1.35)}>
          <line x1={CAP.cx + CAP.a + 10} y1={CAP.cy} x2="392" y2={CAP.cy} stroke="#74591f" strokeOpacity="0.6" strokeDasharray="2 4" />
          <text x="402" y={CAP.cy + 6} fill="#74591f" fontWeight="600">
            The missing piece
          </text>
        </motion.g>
      </g>
      )}
    </svg>
  );
}
