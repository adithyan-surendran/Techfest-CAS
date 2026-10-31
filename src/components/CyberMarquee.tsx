import React from 'react';
import { Sparkles, Trophy, Zap, Gamepad2, Code2, Music, Flame, Rocket /*, Car */ } from 'lucide-react';

export const CyberMarquee: React.FC = () => {
  const marqueeItems = [
    { text: '₹33,000+ CASH REWARDS', icon: Trophy, color: 'text-amber-400' },
    { text: 'ENTRY FEE: ₹50 / HEAD', icon: Zap, color: 'text-cyber-cyan' },
    { text: 'TECH PROJECT EXPO', icon: Rocket, color: 'text-cyan-400' },
    { text: 'BGMI • PES • MINI MILITIA', icon: Gamepad2, color: 'text-cyber-pink' },
    { text: '24-HOUR HACKATHON', icon: Code2, color: 'text-emerald-400' },
    { text: 'FASHION SHOW & LIVE BANDS', icon: Music, color: 'text-purple-400' },
    // NOTE: Auto Show is currently not planned. Preserved below to re-enable later if needed:
    // { text: 'EXOTIC AUTO SHOW & PROSHOW', icon: Car, color: 'text-amber-300' },
    { text: 'FLAGSHIP PROSHOW & LIVE NIGHT', icon: Music, color: 'text-amber-300' },
    { text: 'JANUARY 7 & 8, 2027', icon: Flame, color: 'text-rose-400' },
    { text: 'CAS VAZHAKKAD (IHRD)', icon: Sparkles, color: 'text-cyber-cyan' },
  ];

  return (
    <div className="relative w-full overflow-hidden py-3.5 bg-gradient-to-r from-cyan-950/60 via-slate-900/90 to-purple-950/60 border-y border-cyan-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,240,255,0.1)]">
      {/* Laser accent edges */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

      {/* Infinite Scrolling Ticker Track */}
      <div className="flex w-max animate-marquee space-x-8 select-none">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2.5 font-cyber text-xs uppercase tracking-wider text-slate-200">
              <Icon className={`w-3.5 h-3.5 ${item.color} animate-pulse`} />
              <span>{item.text}</span>
              <span className="text-slate-600 font-mono">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};