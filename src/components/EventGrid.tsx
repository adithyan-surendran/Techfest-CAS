import React, { useState, useRef, useEffect } from 'react';
import {
  Search, Filter, Layers, ChevronLeft, ChevronRight, Maximize2,
  X, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Event, EventCategory } from '../types';
import { EVENTS_DATA } from '../data/events';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';

export const EventGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [activeModalEvent, setActiveModalEvent] = useState<Event | null>(null);
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  // States inside the "View All" over-screen section
  const [modalCategory, setModalCategory] = useState<EventCategory>('All');
  const [modalSearch, setModalSearch] = useState('');

  // Horizontal carousel ref and scroll tracking
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const categories: EventCategory[] = ['All', 'Gaming', 'Technical', 'Cultural', 'Other'];

  // Filtered list for the main sideways scroll carousel
  const carouselEvents = EVENTS_DATA.filter((event) => {
    return selectedCategory === 'All' || event.category === selectedCategory;
  });

  // Filtered list for the "View All" over-screen section
  const modalFilteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCat = modalCategory === 'All' || event.category === modalCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(modalSearch.toLowerCase()) ||
      event.description.toLowerCase().includes(modalSearch.toLowerCase()) ||
      (event.tagline && event.tagline.toLowerCase().includes(modalSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Update carousel scroll buttons and progress indicator
  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      handleCarouselScroll();
      el.addEventListener('scroll', handleCarouselScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleCarouselScroll);
    }
  }, [carouselEvents]);

  // Reset horizontal scroll when category tab changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.78;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Body scroll locking & Escape key handling for the "View All" overscreen
  useEffect(() => {
    if (isViewAllOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && !activeModalEvent) {
          setIsViewAllOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isViewAllOpen, activeModalEvent]);

  return (
    <section id="events" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyber-cyan text-xs font-mono mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>FESTIVAL ARENA • ₹50 ENTRY PER HEAD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase mb-4"
          >
            FLAGSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink glow-cyan">COMPETITIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base font-sans"
          >
            Scroll sideways to browse challenges or expand the full catalog overlay.
          </motion.p>
        </div>

        {/* CONTROLS BAR: CATEGORY TABS, SCROLL ARROWS & VIEW ALL BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel border border-slate-700/60 w-full sm:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative font-cyber text-xs tracking-wider px-3.5 py-2 rounded-xl transition-all duration-200 ${
                    isActive ? 'text-black font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-500 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-black/25 text-black font-bold' : 'bg-slate-800/80 text-slate-400'
                      }`}
                    >
                      {cat === 'All' ? EVENTS_DATA.length : EVENTS_DATA.filter((e) => e.category === cat).length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTION BUTTONS: VIEW ALL & CAROUSEL NAVIGATION ARROWS */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => {
                setModalCategory(selectedCategory);
                setModalSearch('');
                setIsViewAllOpen(true);
              }}
              className="cyber-btn cyber-btn-cyan text-xs py-2.5 px-4 shadow-neon-cyan flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>VIEW ALL ({EVENTS_DATA.length})</span>
            </button>

            {/* LEFT / RIGHT CAROUSEL ARROWS */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous events"
                className={`p-2.5 rounded-xl border glass-panel transition-all duration-200 ${
                  canScrollLeft
                    ? 'border-cyan-500/50 text-cyber-cyan hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'border-slate-800 text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next events"
                className={`p-2.5 rounded-xl border glass-panel transition-all duration-200 ${
                  canScrollRight
                    ? 'border-cyan-500/50 text-cyber-cyan hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'border-slate-800 text-slate-600 cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* SIDEWAYS SCROLLABLE CAROUSEL CONTAINER */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1"
          >
            {carouselEvents.map((event, index) => (
              <div
                key={event.id}
                className="w-[300px] sm:w-[350px] md:w-[370px] flex-shrink-0 snap-start flex flex-col"
              >
                <EventCard
                  event={event}
                  index={index}
                  onSelect={(evt) => setActiveModalEvent(evt)}
                />
              </div>
            ))}

            {/* END-OF-CAROUSEL ACTION CARD */}
            <div className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start flex">
              <button
                onClick={() => {
                  setModalCategory(selectedCategory);
                  setModalSearch('');
                  setIsViewAllOpen(true);
                }}
                className="w-full glass-card rounded-2xl p-8 border-2 border-dashed border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)] flex flex-col items-center justify-center text-center group transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyber-cyan mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <h4 className="font-cyber font-bold text-base text-white group-hover:text-cyber-cyan mb-2">
                  VIEW ALL {EVENTS_DATA.length} EVENTS
                </h4>
                <p className="text-slate-400 text-xs font-sans mb-5 leading-relaxed">
                  Open full-screen catalog with search and all competitions.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyber-cyan group-hover:gap-2.5 transition-all">
                  <span>EXPAND OVERVIEW</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* HORIZONTAL SCROLL PROGRESS BAR & SWIPE HINT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span>← Swipe sideways or use arrows to explore</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-[11px] font-mono text-cyber-cyan">
              Showing {carouselEvents.length} events
            </span>
          </div>

          {/* NEON SCROLL TRACK */}
          <div className="w-48 sm:w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyber-cyan via-[#67e8f9] to-cyber-pink shadow-[0_0_10px_rgba(0,240,255,0.7)] transition-all duration-150"
              style={{ width: `${Math.max(scrollProgress, 12)}%` }}
            />
          </div>
        </div>

      </div>

      {/* OVER-SCREEN SECTION: FULL EVENT CATALOG OVERLAY */}
      <AnimatePresence>
        {isViewAllOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-[#020512]/98 backdrop-blur-2xl text-slate-100 overflow-y-auto">
            
            {/* STICKY TOP HUD BAR */}
            <div className="sticky top-0 z-20 bg-[#030718]/95 border-b border-cyan-500/30 backdrop-blur-xl px-4 sm:px-8 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                
                {/* TITLE & BADGE */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-cyan-500/40 flex items-center justify-center text-cyber-cyan">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-cyber font-bold text-base sm:text-xl text-white tracking-wider">
                        MISSION ARCHIVE // FULL CATALOG
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyber-cyan hidden sm:inline-block">
                        {EVENTS_DATA.length} EVENTS
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-400">
                      ₹50 Entry Per Head on Competitions • CAS Vazhakkad
                    </p>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setIsViewAllOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-pink-500 text-slate-200 hover:text-white transition-all shadow-lg group"
                >
                  <span className="text-xs font-mono hidden sm:inline">RETURN TO SITE</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 hidden sm:inline">
                    ESC
                  </span>
                  <X className="w-4 h-4 text-cyber-pink group-hover:rotate-90 transition-transform" />
                </button>

              </div>

              {/* FILTERS & SEARCH ROW INSIDE OVERLAY */}
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-800/80">
                
                {/* CATEGORY TABS */}
                <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                  {categories.map((cat) => {
                    const isActive = modalCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setModalCategory(cat)}
                        className={`font-cyber text-xs tracking-wider px-3 py-1.5 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-cyber-cyan to-blue-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                            : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-[10px] font-mono ml-1.5 opacity-80">
                          ({cat === 'All' ? EVENTS_DATA.length : EVENTS_DATA.filter((e) => e.category === cat).length})
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* SEARCH INPUT */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search challenges, keywords..."
                    value={modalSearch}
                    onChange={(e) => setModalSearch(e.target.value)}
                    className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-500 transition-colors"
                  />
                  {modalSearch && (
                    <button
                      onClick={() => setModalSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* OVER-SCREEN EVENTS GRID CONTENT */}
            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
              {modalFilteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {modalFilteredEvents.map((event, index) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      index={index}
                      onSelect={(evt) => setActiveModalEvent(evt)}
                    />
                  ))}
                </div>
              ) : (
                <div className="glass-panel rounded-2xl p-16 text-center border border-slate-800 max-w-md mx-auto my-12">
                  <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3 animate-bounce" />
                  <h3 className="font-cyber text-lg text-white mb-1">NO EVENTS FOUND</h3>
                  <p className="text-slate-400 text-xs font-mono mb-4">
                    No competitions match your search query "{modalSearch}".
                  </p>
                  <button
                    onClick={() => {
                      setModalSearch('');
                      setModalCategory('All');
                    }}
                    className="cyber-btn cyber-btn-cyan text-xs py-2 px-4"
                  >
                    RESET FILTERS
                  </button>
                </div>
              )}
            </div>

            {/* BOTTOM STICKY RETURN BAR */}
            <div className="sticky bottom-0 bg-[#030718]/90 border-t border-cyan-500/20 backdrop-blur-md p-4 flex items-center justify-between text-xs font-mono text-slate-400 max-w-7xl mx-auto w-full">
              <span>Showing {modalFilteredEvents.length} of {EVENTS_DATA.length} Events</span>
              <button
                onClick={() => setIsViewAllOpen(false)}
                className="cyber-btn cyber-btn-outline text-xs py-2 px-5 flex items-center gap-2"
              >
                <span>CLOSE & CONTINUE BROWSING</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}
      </AnimatePresence>

      {/* EVENT DETAILS POPUP MODAL */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
