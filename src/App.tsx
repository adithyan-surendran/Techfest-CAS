import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CyberMarquee } from './components/CyberMarquee';
import { EventGrid } from './components/EventGrid';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { CyberBackground } from './components/CyberBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Prevent background scrolling while initial loading screen is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'events', 'schedule', 'register', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative selection:bg-cyber-cyan selection:text-black">
      {/* INITIAL RETRO CYBER BOOT LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* AMBIENT INTERACTIVE CANVAS & PARTICLES */}
      <CyberBackground />

      {/* TOP SCROLL PROGRESS LASER BEAM */}
      <ScrollProgressBar />

      {/* SCI-FI CRT SCANLINE OVERLAY */}
      <div className="fixed inset-0 scanlines pointer-events-none z-30 opacity-20" />

      {/* TOP FLOATING NAVBAR */}
      <Navbar activeSection={activeSection} />

      {/* MAIN CONTENT SECTIONS */}
      <main className="relative z-10">
        <Hero />
        <CyberMarquee />
        <EventGrid />
        <Schedule />
        <Registration />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CIRCULAR PROGRESS SCROLL-TO-TOP BUTTON */}
      <ScrollToTop />

      {/* MOBILE FLOATING GLASS NAVIGATION BAR */}
      <BottomNav activeSection={activeSection} />
    </div>
  );
};

export default App;
