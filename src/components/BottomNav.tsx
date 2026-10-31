import React from 'react';
import { Home, Gamepad2, Calendar, UserPlus, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface BottomNavProps {
  activeSection: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection }) => {
  const items = [
    { id: 'home', label: 'Home', href: '#home', icon: Home },
    { id: 'events', label: 'Events', href: '#events', icon: Gamepad2 },
    { id: 'schedule', label: 'Timeline', href: '#schedule', icon: Calendar },
    { id: 'register', label: 'Register', href: '#register', icon: UserPlus },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="glass-panel bg-[#030712]/90 border border-cyan-500/30 rounded-2xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.15)] flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScroll(item.href)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all ${
                isActive ? 'text-cyber-cyan font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeBottomNav"
                  className="absolute inset-0 rounded-xl bg-cyan-500/15 border border-cyan-400/40"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="text-[10px] font-cyber mt-0.5 tracking-tight relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
