import React from 'react';
import { playSelectSound } from '../utils/sound';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'pink' | 'yellow' | 'green' | 'purple' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  className = '',
  onClick,
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-[#00f0ff] text-slate-950 hover:bg-[#33f3ff]',
    pink: 'bg-[#ff007f] text-white hover:bg-[#ff3399] text-shadow',
    yellow: 'bg-[#ffe600] text-slate-950 hover:bg-[#ffeb33]',
    green: 'bg-[#39ff14] text-slate-950 hover:bg-[#60ff42]',
    purple: 'bg-[#9d4edd] text-white hover:bg-[#b165ee]',
    outline: 'bg-[#121226] text-[#00f0ff] border-[#00f0ff] hover:bg-[#00f0ff] hover:text-slate-950',
  };

  const sizeStyles = {
    sm: 'text-[10px] sm:text-xs px-2.5 py-1.5 min-h-[36px]',
    md: 'text-xs sm:text-sm px-4 py-2.5 min-h-[44px]',
    lg: 'text-sm sm:text-base px-6 py-3.5 min-h-[50px]',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 font-pixel tracking-tight uppercase
    border-4 border-black select-none cursor-pointer transition-all duration-75 active:translate-x-0.5 active:translate-y-0.5
    box-shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:box-shadow-[6px_6px_0px_#000]
    focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:ring-offset-2 focus:ring-offset-[#0a0a14]
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playSelectSound();
    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
