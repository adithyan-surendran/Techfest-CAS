import React from 'react';
import { Home, Gamepad2, Calendar, UserPlus, Mail } from 'lucide-react';
import { playSelectSound } from '../utils/sound';

interface BottomNavProps {
  activeSection: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection }) => {
  const items = [
    { id: 'home', label: 'Home', href: '#home', icon: Home },
    { id: 'events', label: 'Events', href: '#events', icon: Gamepad2 },
    { id: 'schedule', label: 'Schedule', href: '#schedule', icon: Calendar },
    { id: 'register', label: 'Register', href: '#register', icon: UserPlus },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleScroll = (href: string) => {
    playSelectSound();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a14]/95 border-t-4 border-black shadow-[0_-4px_0_#000] px-2 py-1.5 backdrop-blur-md">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.href);
              }}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded min-w-[54px] min-h-[44px] transition-colors ${
                isActive
                  ? 'text-[#00f0ff] font-bold bg-[#121226]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-[#00f0ff] animate-bounce' : ''}`} />
              <span className="text-[9px] font-pixel mt-1 uppercase tracking-tight">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
