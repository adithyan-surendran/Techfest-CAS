import React, { useState, useRef } from 'react';
import {
  Clock, MapPin, Sparkles, UserCheck, Radio, Cpu, Wrench, Gamepad2,
  Flame, Code2, Bot, Trophy, Music, HelpCircle, Presentation, Award, Camera,
  CalendarDays
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SCHEDULE_DATA } from '../data/schedule';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress Laser Animation for the Schedule Section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const dayTabs = [
    { day: 1, label: 'DAY 1', date: 'JAN 07', desc: 'Inauguration & Competitions' },
    { day: 2, label: 'DAY 2', date: 'JAN 08', desc: 'Finals, Tournaments & Awards' },
  ];

  const currentSchedule = SCHEDULE_DATA.filter((item) => item.day === activeDay);

  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case 'UserCheck': return <UserCheck className={`${iconClass} text-cyber-cyan`} />;
      case 'Sparkles': return <Sparkles className={`${iconClass} text-amber-300`} />;
      case 'Radio': return <Radio className={`${iconClass} text-emerald-400`} />;
      case 'Cpu': return <Cpu className={`${iconClass} text-cyber-purple`} />;
      case 'Wrench': return <Wrench className={`${iconClass} text-cyber-cyan`} />;
      case 'Gamepad2': return <Gamepad2 className={`${iconClass} text-cyber-pink`} />;
      case 'Flame': return <Flame className={`${iconClass} text-rose-500`} />;
      case 'Code2': return <Code2 className={`${iconClass} text-cyber-cyan`} />;
      case 'Bot': return <Bot className={`${iconClass} text-emerald-400`} />;
      case 'Trophy': return <Trophy className={`${iconClass} text-amber-300`} />;
      case 'Music': return <Music className={`${iconClass} text-cyber-pink`} />;
      case 'HelpCircle': return <HelpCircle className={`${iconClass} text-cyber-purple`} />;
      case 'Presentation': return <Presentation className={`${iconClass} text-cyber-cyan`} />;
      case 'Award': return <Award className={`${iconClass} text-amber-300`} />;
      case 'Camera': return <Camera className={`${iconClass} text-emerald-400`} />;
      default: return <Clock className={`${iconClass} text-cyber-cyan`} />;
    }
  };

  return (
    <section id="schedule" ref={containerRef} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyber-cyan text-xs font-mono mb-4"
          >
            <CalendarDays className="w-3.5 h-3.5 animate-pulse" />
            <span>FESTIVAL ITINERARY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase mb-4"
          >
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyber-pink to-cyber-cyan glow-yellow">TIMELINE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base font-sans"
          >
            Scroll to follow the live event progression across 2 days of high-octane technical events.
          </motion.p>
        </div>

        {/* DAY SELECTOR TABS */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2 rounded-2xl glass-panel border border-slate-700/60 max-w-xl w-full">
            {dayTabs.map((tab) => {
              const isActive = activeDay === tab.day;
              return (
                <button
                  key={tab.day}
                  onClick={() => setActiveDay(tab.day)}
                  className={`relative p-3.5 rounded-xl text-left transition-all duration-300 ${
                    isActive ? 'text-black' : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDayPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-cyan via-[#67e8f9] to-cyber-pink shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between font-cyber font-bold text-xs">
                      <span>{tab.label}</span>
                      <span className={`text-[10px] font-mono ${isActive ? 'text-black font-semibold' : 'text-cyan-400'}`}>
                        {tab.date}
                      </span>
                    </div>
                    <div className={`text-[11px] font-sans mt-0.5 truncate ${isActive ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                      {tab.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SCROLL-ANIMATED TIMELINE */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* STATIC BASE CIRCUIT LINE */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-slate-800" />

          {/* DYNAMIC SCROLL-DRIVEN LASER LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-purple shadow-[0_0_15px_rgba(0,240,255,0.8)] origin-top z-10"
          />

          {/* TIMELINE ITEMS */}
          <div className="space-y-8 sm:space-y-12">
            {currentSchedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 25 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* TIMELINE NODE DOT */}
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full glass-panel bg-[#070e24] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.6)] z-20"
                  >
                    <span className="w-3 h-3 rounded-full bg-cyber-pink animate-pulse" />
                  </motion.div>

                  {/* CONTENT CARD */}
                  <div className="w-full pl-16 md:pl-0 md:w-1/2">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-colors duration-300 ${
                        isEven ? 'md:mr-10' : 'md:ml-10'
                      }`}
                    >
                      {/* CARD TOP META */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700/60 flex items-center justify-center">
                            {renderIcon(item.icon)}
                          </div>
                          <span className="text-xs font-cyber font-bold text-cyber-cyan">
                            {item.time}
                          </span>
                        </div>

                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300">
                          {item.category}
                        </span>
                      </div>

                      {/* TITLE & DESCRIPTION */}
                      <h4 className="font-cyber font-bold text-base text-white mb-2">
                        {item.title}
                      </h4>

                      <p className="text-slate-300 text-xs leading-relaxed mb-4 font-sans">
                        {item.description}
                      </p>

                      {/* VENUE PILL */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                        <MapPin className="w-3.5 h-3.5 text-cyber-pink" />
                        <span>{item.venue}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
