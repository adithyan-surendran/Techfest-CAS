import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  hidden?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, hidden }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 30 : false));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hidden) return null;

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'EVENTS', href: '#events', id: 'events' },
    { name: 'SCHEDULE', href: '#schedule', id: 'schedule' },
    { name: 'REGISTER', href: '#register', id: 'register' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterCTA = () => {
    const regSection = document.querySelector('#register') || document.querySelector('#events');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel bg-[#030712]/85 border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-b border-white/5 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* BRAND LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group relative cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all">
                <Bot className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-cyber font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                  YUGA<span className="text-cyber-pink">'26</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyber-cyan hidden sm:inline-block">
                  CAS VAZHAKKAD
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                JAN 7 – 8, 2027
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-700/40 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative font-cyber text-xs tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive ? 'text-cyber-cyan' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            {/* REGISTER NOW CTA BUTTON */}
            <button
              onClick={handleRegisterCTA}
              className="hidden sm:inline-flex cyber-btn cyber-btn-cyan text-xs py-2 px-4 shadow-neon-cyan"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              REGISTER NOW
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 rounded-lg glass-card border border-slate-700/60 text-slate-200 hover:text-cyber-cyan transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-DOWN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-16 z-30 glass-panel bg-[#030712]/95 border-b border-cyan-500/20 px-6 py-6 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left font-cyber text-sm tracking-wider px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyber-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                        : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-xs text-cyber-cyan">●</span>}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRegisterCTA();
                }}
                className="w-full mt-2 cyber-btn cyber-btn-cyan text-xs py-3.5 shadow-neon-cyan"
              >
                <Sparkles className="w-4 h-4" />
                REGISTER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
