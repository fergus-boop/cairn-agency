import { motion } from 'framer-motion';

export default function AnimatedText({ children, className = '', delay = 0 }) {
  const words = String(children).split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      style={{ display: 'inline' }}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}
