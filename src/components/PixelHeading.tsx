import React from 'react';

interface PixelHeadingProps {
  title: string;
  subtitle?: string;
  icon?: string;
  accentColor?: 'cyan' | 'pink' | 'green' | 'yellow';
  id?: string;
}

export const PixelHeading: React.FC<PixelHeadingProps> = ({
  title,
  subtitle,
  icon,
  accentColor = 'cyan',
  id,
}) => {
  const accentStyles = {
    cyan: 'text-[#00f0ff] glow-cyan',
    pink: 'text-[#ff007f] glow-pink',
    green: 'text-[#39ff14]',
    yellow: 'text-[#ffe600] glow-yellow',
  };

  return (
    <div id={id} className="text-center mb-10 sm:mb-14 scroll-mt-24">
      <div className="inline-flex items-center justify-center gap-3 mb-3">
        {icon && <span className="text-2xl sm:text-4xl animate-pulse">{icon}</span>}
        <h2 className={`text-xl sm:text-3xl md:text-4xl font-pixel uppercase ${accentStyles[accentColor]}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-400 font-mono text-xs sm:text-base max-w-xl mx-auto tracking-wide">
          {subtitle}
        </p>
      )}
      <div className="w-24 sm:w-32 h-1.5 bg-[#00f0ff] mx-auto mt-4 border border-black shadow-[2px_2px_0px_#000] relative">
        <span className="absolute -left-1 -top-1 w-3 h-3 bg.ff007f"></span>
        <span className="absolute -right-1 -top-1 w-3 h-3 bg-[#ffe600]"></span>
      </div>
    </div>
  );
};
