import React, { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Event, EventCategory } from '../types';
import { EVENTS_DATA } from '../data/events';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { PixelHeading } from './PixelHeading';
import { PixelButton } from './PixelButton';
import { playSelectSound } from '../utils/sound';

export const EventGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState<Event | null>(null);
  const [showAll, setShowAll] = useState(false);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const categories: EventCategory[] = ['All', 'Coding', 'Development', 'Robotics', 'Gaming', 'Quiz'];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 6);

  const handleMobileScrollLeft = () => {
    playSelectSound();
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const handleMobileScrollRight = () => {
    playSelectSound();
    if (mobileCarouselRef.current) {
      mobileCarouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#0d0d24] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <PixelHeading
          title="EVENTS / COMPETITIONS"
          subtitle="Choose your quest. Show your skills. Win cash prizes & trophies."
          icon="🎮"
          accentColor="cyan"
        />

        {/* CONTROLS: CATEGORY TABS & SEARCH BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playSelectSound();
                    setSelectedCategory(cat);
                  }}
                  className={`font-pixel text-[10px] sm:text-xs uppercase px-3 py-2 border-2 border-black transition-all ${
                    isActive
                      ? 'bg-[#00f0ff] text-slate-950 shadow-[3px_3px_0_#000] font-bold'
                      : 'bg-[#121226] text-slate-300 hover:text-[#00f0ff] hover:bg-[#1a1a36]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competitions..."
              className="w-full bg-[#121226] border-2 border-black px-3 py-2 pl-9 text-xs font-mono text-white placeholder-slate-500 shadow-[2px_2px_0_#000] focus:outline-none focus:border-[#00f0ff]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* EVENTS DISPLAY */}
        {displayedEvents.length > 0 ? (
          <>
            {/* Desktop & Tablet Grid (hidden on small mobile screens) */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {displayedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onSelect={(ev) => setActiveModalEvent(ev)}
                />
              ))}
            </div>

            {/* Mobile Carousel with SLIDE ARROWS */}
            <div className="sm:hidden mb-8">
              {/* Mobile Slide Arrow Buttons Controls */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-pixel text-[10px] text-[#00f0ff] uppercase tracking-wider">
                  QUEST CAROUSEL
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMobileScrollLeft}
                    className="p-2 bg-[#121226] border-2 border-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    title="Slide Left"
                    aria-label="Slide events left"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[3]" />
                  </button>
                  <button
                    onClick={handleMobileScrollRight}
                    className="p-2 bg-[#121226] border-2 border-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    title="Slide Right"
                    aria-label="Slide events right"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

              {/* Scrollable Container */}
              <div
                ref={mobileCarouselRef}
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth px-1 scrollbar-none"
              >
                {displayedEvents.map((event) => (
                  <div key={event.id} className="min-w-[85vw] snap-center">
                    <EventCard
                      event={event}
                      onSelect={(ev) => setActiveModalEvent(ev)}
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-[10px] font-pixel text-slate-400 mt-2">
                ◀ USE ARROWS OR SWIPE TO SLIDE THROUGH EVENTS ▶
              </p>
            </div>

            {/* VIEW ALL EVENTS BUTTON */}
            {!showAll && filteredEvents.length > 6 && (
              <div className="text-center mt-6">
                <PixelButton
                  variant="yellow"
                  size="md"
                  onClick={() => {
                    playSelectSound();
                    setShowAll(true);
                  }}
                >
                  VIEW ALL EVENTS ({filteredEvents.length}) ↗
                </PixelButton>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-[#121226] border-2 border-black p-8">
            <p className="font-pixel text-sm text-[#ff007f] mb-2">NO QUESTS FOUND</p>
            <p className="text-xs font-mono text-slate-400">
              Try adjusting your category filter or search terms.
            </p>
          </div>
        )}

      </div>

      {/* EVENT MODAL */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
