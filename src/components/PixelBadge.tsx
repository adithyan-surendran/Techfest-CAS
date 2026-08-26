import React from 'react';

interface PixelBadgeProps {
  children: React.ReactNode;
  color?: 'cyan' | 'pink' | 'green' | 'yellow' | 'purple' | 'orange' | 'red';
  size?: 'sm' | 'md';
}

export const PixelBadge: React.FC<PixelBadgeProps> = ({
  children,
  color = 'cyan',
  size = 'md',
}) => {
  const colorMap = {
    cyan: 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]',
    pink: 'bg-[#ff007f]/10 text-[#ff007f] border-[#ff007f]',
    green: 'bg-[#39ff14]/10 text-[#39ff14] border-[#39ff14]',
    yellow: 'bg-[#ffe600]/10 text-[#ffe600] border-[#ffe600]',
    purple: 'bg-[#9d4edd]/10 text-[#9d4edd] border-[#9d4edd]',
    orange: 'bg-[#ff5500]/10 text-[#ff5500] border-[#ff5500]',
    red: 'bg-[#ff2a2a]/10 text-[#ff2a2a] border-[#ff2a2a]',
  };

  const sizeMap = {
    sm: 'text-[9px] px-2 py-0.5 border-2',
    md: 'text-[11px] px-2.5 py-1 border-2',
  };

  return (
    <span className={`inline-flex items-center font-pixel tracking-wider uppercase ${colorMap[color]} ${sizeMap[size]}`}>
      {children}
    </span>
  );
};
