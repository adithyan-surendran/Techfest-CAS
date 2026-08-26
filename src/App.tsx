import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventGrid } from './components/EventGrid';
import { Schedule } from './components/Schedule';
import { Registration } from './components/Registration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'events', 'schedule', 'register', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-slate-100 font-mono relative selection:bg-[#ff007f] selection:text-white">
      {/* CRT SCANLINE OVERLAY EFFECT */}
      <div className="fixed inset-0 scanlines pointer-events-none z-30 opacity-40"></div>

      {/* TOP NAVBAR */}
      <Navbar activeSection={activeSection} />

      {/* MAIN CONTENT SECTIONS */}
      <main>
        <Hero />
        <EventGrid />
        <Schedule />
        <Registration />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR */}
      <BottomNav activeSection={activeSection} />
    </div>
  );
};

export default App;
