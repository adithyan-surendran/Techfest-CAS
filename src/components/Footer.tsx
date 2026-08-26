import React from 'react';
import { Trophy, Instagram, Linkedin, Youtube, Github, Bot } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/contacts';
import { playSelectSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playSelectSound();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05050e] text-slate-300 relative border-t-4 border-black pt-12 pb-24 md:pb-12 overflow-hidden">
      
      {/* 8-BIT MARIO STYLE BRICK & GRASS PLATFORM GROUND DECORATION */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#39ff14]/30 border-b-2 border-black flex">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="flex-1 h-full border-r border-black bg-[#1a1a36]">
            <div className="w-full h-1 bg-[#39ff14]"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-slate-800">
          
          {/* LEFT: BRANDING */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-[#00f0ff] border-2 border-black flex items-center justify-center shadow-[2px_2px_0_#000]">
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-pixel text-sm sm:text-base text-white tracking-wider">
                TECH FEST <span className="text-[#ff007f]">2026</span>
              </h3>
            </div>
            <p className="font-pixel text-xs text-[#39ff14] tracking-widest mb-4">
              CODE. INNOVATE. ELEVATE.
            </p>
            <p className="font-mono text-xs text-slate-400 max-w-sm leading-relaxed">
              The annual flagship technology festival bringing together brilliant coders, hackers, robotics enthusiasts, and gamers.
            </p>
          </div>

          {/* MIDDLE: QUICK LINKS */}
          <div className="md:col-span-3">
            <h4 className="font-pixel text-xs text-[#00f0ff] uppercase mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-pixel text-[11px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#ff007f] transition-colors text-slate-300 flex items-center gap-1.5"
                  >
                    <span className="text-[#ffe600] text-[9px]">&gt;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: FOLLOW US */}
          <div className="md:col-span-4">
            <h4 className="font-pixel text-xs text-[#ffe600] uppercase mb-4 tracking-wider">
              FOLLOW US
            </h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121226] border-2 border-black text-[#ff007f] hover:bg-[#ff007f] hover:text-white shadow-[2px_2px_0_#000] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121226] border-2 border-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[2px_2px_0_#000] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121226] border-2 border-black text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white shadow-[2px_2px_0_#000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#121226] border-2 border-black text-[#39ff14] hover:bg-[#39ff14] hover:text-black shadow-[2px_2px_0_#000] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Stay connected for real-time leaderboards & announcements.
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <p>© 2026 Tech Fest. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Made with <Bot className="w-4 h-4 text-[#00f0ff]" /> 8-Bit Arcade Passion
          </p>
        </div>

      </div>
    </footer>
  );
};
