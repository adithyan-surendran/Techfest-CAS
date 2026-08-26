import React, { useState, useRef } from 'react';
import {
  Clock, MapPin, Sparkles, UserCheck, Radio, Cpu, Wrench, Gamepad2,
  Flame, Code2, Bot, Trophy, Music, HelpCircle, Presentation, Award, Camera,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { SCHEDULE_DATA } from '../data/schedule';
import { PixelHeading } from './PixelHeading';
import { PixelBadge } from './PixelBadge';
import { playSelectSound } from '../utils/sound';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const dayTabs = [
    { day: 1, label: 'DAY 1 — AUG 29' },
    { day: 2, label: 'DAY 2 — AUG 30' },
    { day: 3, label: 'DAY 3 — AUG 31' },
  ];

  const currentSchedule = SCHEDULE_DATA.filter((item) => item.day === activeDay);

  const handleScrollLeft = () => {
    playSelectSound();
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    playSelectSound();
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const renderIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 text-[#00f0ff]";
    switch (iconName) {
      case 'UserCheck': return <UserCheck className={iconClass} />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#ffe600]" />;
      case 'Radio': return <Radio className="w-5 h-5 text-[#39ff14]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#ff007f]" />;
      case 'Wrench': return <Wrench className={iconClass} />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-[#ffe600]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#ff5500]" />;
      case 'Code2': return <Code2 className={iconClass} />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#39ff14]" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-[#ffe600]" />;
      case 'Music': return <Music className="w-5 h-5 text-[#ff007f]" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-[#9d4edd]" />;
      case 'Presentation': return <Presentation className={iconClass} />;
      case 'Award': return <Award className="w-5 h-5 text-[#ffe600]" />;
      case 'Camera': return <Camera className="w-5 h-5 text-[#39ff14]" />;
      default: return <Clock className={iconClass} />;
    }
  };

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-[#0a0a14] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <PixelHeading
          title="SCHEDULE TIMELINE"
          subtitle="Plan your itinerary. Track sessions, competitions, and keynotes."
          icon="⏱"
          accentColor="yellow"
        />

        {/* DAY SELECTOR TABS & SLIDE ARROW CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          
          {/* Day Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mx-auto md:mx-0">
            {dayTabs.map((tab) => {
              const isActive = activeDay === tab.day;
              return (
                <button
                  key={tab.day}
                  onClick={() => {
                    playSelectSound();
                    setActiveDay(tab.day);
                  }}
                  className={`font-pixel text-xs sm:text-sm uppercase px-3 sm:px-4 py-2.5 sm:py-3 border-4 border-black transition-all ${
                    isActive
                      ? 'bg-[#ffe600] text-slate-950 shadow-[4px_4px_0_#000] scale-105 font-bold'
                      : 'bg-[#121226] text-slate-300 hover:text-[#ffe600] hover:bg-[#1a1a36]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Slide Arrow Navigation Buttons */}
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <button
              onClick={handleScrollLeft}
              className="p-2.5 bg-[#121226] border-4 border-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              title="Slide Left"
              aria-label="Slide timeline left"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>

            <span className="font-pixel text-[10px] text-[#ffe600] uppercase tracking-wider hidden sm:inline-block">
              SLIDE
            </span>

            <button
              onClick={handleScrollRight}
              className="p-2.5 bg-[#121226] border-4 border-black text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[4px_4px_0_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              title="Slide Right"
              aria-label="Slide timeline right"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* TIMELINE CONTAINER WITH SLIDE ARROWS WRAPPER */}
        <div className="relative group">
          
          {/* Floating Slide Arrow Overlay Buttons */}
          <button
            onClick={handleScrollLeft}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-[#121226] border-4 border-black items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[4px_4px_0_#000] transition-all"
            aria-label="Slide left"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={handleScrollRight}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-[#121226] border-4 border-black items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black shadow-[4px_4px_0_#000] transition-all"
            aria-label="Slide right"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* DESKTOP & TABLET HORIZONTAL STAGE TIMELINE */}
          <div
            ref={timelineRef}
            className="overflow-x-auto pb-6 scrollbar-thin scroll-smooth px-1"
          >
            <div className="relative flex gap-6 min-w-max pt-6 pb-2">
              
              {/* CONNECTING TIMELINE LINE */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#1f1f3a] border-y border-black -translate-y-1/2 z-0"></div>

              {currentSchedule.map((item, index) => (
                <div
                  key={item.id}
                  className="relative z-10 w-72 bg-[#121226] border-4 border-black p-4 shadow-[4px_4px_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  {/* TIME BADGE */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-1.5 font-pixel text-xs text-[#ffe600]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <PixelBadge color={index % 2 === 0 ? 'cyan' : 'pink'} size="sm">
                      {item.category}
                    </PixelBadge>
                  </div>

                  {/* CONTENT */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className="p-2 bg-[#0a0a14] border border-black shrink-0">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="font-pixel text-xs uppercase text-white mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 font-mono text-[11px] line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* VENUE */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                    <MapPin className="w-3 h-3 text-[#39ff14]" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center text-[10px] font-pixel text-slate-400 mt-2">
          ◀ USE ARROWS OR SWIPE TO SLIDE THROUGH SCHEDULE TIMELINE ▶
        </p>

      </div>
    </section>
  );
};
