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
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth section tracking using IntersectionObserver (eliminates layout thrashing during iOS scroll)
  useEffect(() => {
    if (isLoading) return;

    const sections = ['home', 'events', 'schedule', 'register', 'contact'];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          }
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      // Throttled RAF fallback for older environments
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollPosition = window.scrollY + 250;
            for (const el of elements) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(el.id);
                break;
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative selection:bg-cyber-cyan selection:text-black overflow-x-hidden">
      {/* INITIAL RETRO CYBER BOOT LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* AMBIENT INTERACTIVE CANVAS & PARTICLES */}
      <CyberBackground />

      {/* TOP SCROLL PROGRESS LASER BEAM */}
      <ScrollProgressBar />

      {/* SCI-FI CRT SCANLINE OVERLAY */}
      <div className="fixed inset-0 scanlines pointer-events-none z-30 opacity-20" />

      {/* TOP FLOATING NAVBAR */}
      <Navbar activeSection={activeSection} hidden={isViewAllOpen || isModalOpen} />

      {/* MAIN CONTENT SECTIONS */}
      <main className="relative z-10">
        <Hero />
        <CyberMarquee />
        <EventGrid
          onViewAllChange={setIsViewAllOpen}
          onModalChange={setIsModalOpen}
        />
        <Schedule />
        <Registration />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CIRCULAR PROGRESS SCROLL-TO-TOP BUTTON */}
      <ScrollToTop hidden={isViewAllOpen || isModalOpen} />

      {/* MOBILE FLOATING GLASS NAVIGATION BAR */}
      <BottomNav
        activeSection={activeSection}
        hidden={isViewAllOpen || isModalOpen}
      />
    </div>
  );
};

export default App;
