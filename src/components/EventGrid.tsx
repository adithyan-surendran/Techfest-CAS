import React, { useState } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event, EventCategory } from '../types';
import { EVENTS_DATA } from '../data/events';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { playCyberClick } from '../utils/sound';

export const EventGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalEvent, setActiveModalEvent] = useState<Event | null>(null);

  const categories: EventCategory[] = ['All', 'Coding', 'Development', 'Robotics', 'Gaming', 'Quiz'];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.tagline && event.tagline.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyber-cyan text-xs font-mono mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>FESTIVAL ARENA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase mb-4"
          >
            FLAGSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink glow-cyan">COMPETITIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base font-sans"
          >
            Choose your challenge arena. Demonstrate technical mastery. Compete for trophies, cash prizes, and industry recognition.
          </motion.p>
        </div>

        {/* CONTROLS: CATEGORY TABS & SEARCH */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* CATEGORY TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-panel border border-slate-700/60 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playCyberClick();
                    setSelectedCategory(cat);
                  }}
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
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border border-slate-700/60 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-500 transition-colors"
            />
          </div>

        </div>

        {/* EVENTS GRID */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onSelect={(evt) => setActiveModalEvent(evt)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel rounded-2xl p-12 text-center border border-slate-800">
            <Filter className="w-10 h-10 text-slate-500 mx-auto mb-3 animate-bounce" />
            <h3 className="font-cyber text-lg text-white mb-1">NO EVENTS FOUND</h3>
            <p className="text-slate-400 text-xs font-mono">
              Try adjusting your filter or search keywords.
            </p>
          </div>
        )}

      </div>

      {/* EVENT DETAILS POPUP MODAL */}
      <EventModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
