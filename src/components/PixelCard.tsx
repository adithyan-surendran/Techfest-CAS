import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'pink' | 'green' | 'yellow' | 'purple' | 'default';
  className?: string;
  hoverGlow?: boolean;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  variant = 'default',
  className = '',
  hoverGlow = true,
}) => {
  const borderStyles = {
    default: 'border-slate-800 hover:border-[#00f0ff]/50',
    cyan: 'border-[#00f0ff]/40 shadow-[4px_4px_0px_#000,0_0_12px_rgba(0,240,255,0.25)]',
    pink: 'border-[#ff007f]/40 shadow-[4px_4px_0px_#000,0_0_12px_rgba(255,0,127,0.25)]',
    green: 'border-[#39ff14]/40 shadow-[4px_4px_0px_#000,0_0_12px_rgba(57,255,20,0.25)]',
    yellow: 'border-[#ffe600]/40 shadow-[4px_4px_0px_#000,0_0_12px_rgba(255,230,0,0.25)]',
    purple: 'border-[#9d4edd]/40 shadow-[4px_4px_0px_#000,0_0_12px_rgba(157,78,221,0.25)]',
  };

  return (
    <div
      className={`
        relative bg-[#121226]/90 backdrop-blur-sm border-4 border-black p-5 sm:p-6
        box-shadow-[4px_4px_0px_#000] transition-all duration-200
        ${hoverGlow ? 'hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]' : ''}
        ${borderStyles[variant]}
        ${className}
      `}
    >
      {/* Corner Pixel Accent Dots */}
      <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#00f0ff]"></span>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff007f]"></span>
      <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#ffe600]"></span>
      <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#39ff14]"></span>
      
      {children}
    </div>
  );
};
