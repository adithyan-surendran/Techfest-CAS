import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-900/60 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple shadow-[0_0_12px_rgba(0,240,255,0.8)] origin-left relative"
        style={{ scaleX }}
      >
        {/* Leading Laser Spark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#00f0ff,0_0_20px_#00f0ff] translate-x-1/2" />
      </motion.div>
    </div>
  );
};
