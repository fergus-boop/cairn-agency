import { motion } from 'framer-motion';

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-380 + i * 5 * position} ${-189 + i * 33}C${-380 + i * 5 * position} ${
      -189 + i * 33
    } ${-312 + i * 5 * position} ${216 - i * 28} ${152 + i * 5 * position} ${
      343 - i * 11
    }C${616 + i * 5 * position} ${470 + i * 6} ${
      684 + i * 5 * position
    } ${875 + i * 14} ${684 + i * 5 * position} ${875 + i * 14}`,
    color: `rgba(82,183,136,${0.03 + i * 0.003})`,
    width: 0.4 + i * 0.03,
    duration: 18 + Math.random() * 14,
    delay: i * -1.2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background terrain paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.4 + path.id * 0.01}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: path.delay,
              opacity: {
                duration: path.duration,
                times: [0, 0.1, 0.8, 1],
                ease: 'easeInOut',
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({ className = '', intensity = 1 }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      <FloatingPaths position={intensity} />
      <FloatingPaths position={-intensity} />
    </div>
  );
}
