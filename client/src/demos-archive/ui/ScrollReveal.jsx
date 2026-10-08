import { motion } from 'framer-motion';

const directionMap = {
  up:    { y: 32, x: 0 },
  left:  { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function ScrollReveal({ children, direction = 'up', delay = 0, blur = false, className = '' }) {
  const { x, y } = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, filter: blur ? 'blur(8px)' : 'none' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
