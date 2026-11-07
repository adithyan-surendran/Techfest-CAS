import React from 'react';
import { Bot, Instagram, ChevronUp, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/contacts';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040a] text-slate-300 border-t border-cyan-500/20 pt-16 pb-24 md:pb-12 overflow-hidden">
      {/* Top Cyber Circuit Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(0,240,255,0.7)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-10 border-b border-slate-800/80">
          
          {/* BRANDING */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyber-cyan" />
              </div>
              <h3 className="font-cyber font-bold text-xl text-white tracking-wider">
                YUGA <span className="text-cyber-pink">'26</span>
              </h3>
            </div>
            
            <p className="font-mono text-xs text-cyber-cyan tracking-widest mb-3 uppercase">
              CODE. INNOVATE. ELEVATE.
            </p>
            
            <p className="text-slate-400 text-xs font-sans max-w-sm leading-relaxed mb-4">
              Tech Fest hosted by College of Applied Science (IHRD), Vazhakkad. Unleashing next-generation technical innovators, hackers, and creators.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              MALAPPURAM, KERALA • JANUARY 7 – 8, 2027
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3">
            <h4 className="font-cyber font-bold text-xs text-cyber-cyan uppercase mb-4 tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-cyber text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-slate-300 hover:text-cyber-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity">►</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT & SOCIAL */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-cyber font-bold text-xs text-amber-300 uppercase mb-4 tracking-wider">
                JOIN THE COMMUNITY
              </h4>
              <p className="text-xs font-sans text-slate-400 mb-4">
                Follow our official social stream for live updates, behind the scenes, and contest announcements.
              </p>
              
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card border border-pink-500/40 text-cyber-pink hover:bg-pink-500/10 hover:border-pink-400 transition-all font-cyber text-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>@{SOCIAL_LINKS.instagramHandle}</span>
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors"
              >
                <ChevronUp className="w-4 h-4 text-cyber-cyan animate-bounce" />
                <span>RETURN TO TOP</span>
              </button>
            </div>
          </div>

        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2027 YUGA'26 CAS Vazhakkad. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted for tech enthusiasts</span>
            <Sparkles className="w-3.5 h-3.5 text-cyber-cyan inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
