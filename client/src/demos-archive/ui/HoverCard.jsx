import { motion } from 'framer-motion';

export default function HoverCard({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: '0 12px 32px rgba(82,183,136,0.25)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
