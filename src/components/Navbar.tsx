import React, { useState, useEffect } from 'react';
import { Bot, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { isSoundMuted, setSoundMuted, playSelectSound, playStartSound } from '../utils/sound';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'EVENTS', href: '#events', id: 'events' },
    { name: 'SCHEDULE', href: '#schedule', id: 'schedule' },
    { name: 'REGISTER', href: '#register', id: 'register' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const toggleSound = () => {
    const nextState = !muted;
    setMuted(nextState);
    setSoundMuted(nextState);
    if (!nextState) playSelectSound();
  };

  const handleNavClick = (href: string) => {
    playSelectSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePressStart = () => {
    playStartSound();
    const regSection = document.querySelector('#register') || document.querySelector('#events');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-4 border-black ${
          scrolled ? 'bg-[#0a0a14]/95 backdrop-blur-md shadow-[0_4px_0_#000]' : 'bg-[#0a0a14]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#00f0ff] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] group-hover:scale-105 transition-transform">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-pixel text-xs sm:text-sm tracking-wider text-white group-hover:text-[#00f0ff] transition-colors">
                TECH FEST <span className="text-[#ff007f]">2026</span>
              </span>
              <span className="text-[9px] font-mono text-[#39ff14] tracking-widest hidden sm:inline-block">
                SYS.ONLINE v8.0
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
                  className={`font-pixel text-xs tracking-wider transition-all relative py-1 ${
                    isActive
                      ? 'text-[#00f0ff] glow-cyan border-b-2 border-[#00f0ff]'
                      : 'text-slate-300 hover:text-[#ff007f]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTION CONTROLS */}
          <div className="flex items-center gap-3">
            {/* Audio Synth Toggle */}
            <button
              onClick={toggleSound}
              title={muted ? 'Unmute Arcade Audio' : 'Mute Arcade Audio'}
              className="p-2 bg-[#121226] border-2 border-black text-[#ffe600] hover:text-[#00f0ff] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-transform"
              aria-label="Toggle retro audio synth"
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
            </button>

            {/* Desktop PRESS START button */}
            <div className="hidden sm:block">
              <PixelButton variant="pink" size="sm" onClick={handlePressStart}>
                PRESS START 🎮
              </PixelButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playSelectSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 bg-[#121226] border-2 border-black text-[#00f0ff] hover:text-white shadow-[2px_2px_0px_#000]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE RETRO FULLSCREEN/DROPDOWN OVERLAY MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#0a0a14]/98 backdrop-blur-lg md:hidden border-b-4 border-[#00f0ff] flex flex-col p-6 animate-in slide-in-from-top duration-200">
          <div className="flex-1 flex flex-col justify-center gap-6 text-center">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-pixel text-base sm:text-lg tracking-widest text-slate-100 hover:text-[#00f0ff] py-2 border-b border-slate-800/80 active:text-[#ff007f]"
              >
                <span className="text-[#ffe600] text-xs mr-2">0{idx + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-8 text-center pb-6">
            <PixelButton variant="pink" size="lg" className="w-full" onClick={handlePressStart}>
              PRESS START 🎮
            </PixelButton>
          </div>
        </div>
      )}
    </>
  );
};
