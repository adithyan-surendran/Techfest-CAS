import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  hidden?: boolean;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ hidden }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let cachedMaxScroll = 0;

    const updateMaxScroll = () => {
      cachedMaxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    updateMaxScroll();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (cachedMaxScroll > 0) {
            const currentProgress = Math.min(100, Math.max(0, (currentY / cachedMaxScroll) * 100));
            setScrollProgress((prev) => (Math.abs(prev - currentProgress) >= 1.5 ? currentProgress : prev));
          }
          setIsVisible((prev) => {
            const shouldBeVisible = currentY > 400;
            return prev !== shouldBeVisible ? shouldBeVisible : prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateMaxScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMaxScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (hidden || !isVisible) return null;

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 group p-2 rounded-full glass-panel border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 focus:outline-none"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* SVG Progress Ring */}
        <svg className="w-10 h-10 -rotate-90 transform" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            className="stroke-slate-800"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            className="stroke-cyber-cyan transition-all duration-150 ease-out"
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <ChevronUp className="w-5 h-5 text-cyber-cyan group-hover:-translate-y-0.5 transition-transform absolute" />
      </div>
    </button>
  );
};
