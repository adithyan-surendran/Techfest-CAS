import React from 'react';
import {
  Calendar, Users, ArrowUpRight, Trophy, Info, Coins, MapPin, Sparkles,
  Crosshair, Swords, Cpu, Binary, Palette, Search, HelpCircle, Bug, Music,
  Flame, Compass, Gauge, Mic, Film, PartyPopper, Rocket, Laptop
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

const supportsHover = typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : false;

export const EventCard: React.FC<EventCardProps> = ({ event, index, onSelect }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!supportsHover || !isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const getIcon = (iconName: string) => {
    const cls = 'w-5 h-5';
    switch (iconName) {
      case 'Crosshair': return <Crosshair className={`${cls} text-cyber-pink`} />;
      case 'Trophy': return <Trophy className={`${cls} text-amber-400`} />;
      case 'Swords': return <Swords className={`${cls} text-cyber-cyan`} />;
      case 'Cpu': return <Cpu className={`${cls} text-cyber-cyan`} />;
      case 'Binary': return <Binary className={`${cls} text-cyber-cyan`} />;
      case 'Palette': return <Palette className={`${cls} text-purple-400`} />;
      case 'Search': return <Search className={`${cls} text-cyber-cyan`} />;
      case 'HelpCircle': return <HelpCircle className={`${cls} text-amber-400`} />;
      case 'Bug': return <Bug className={`${cls} text-rose-400`} />;
      case 'Music': return <Music className={`${cls} text-pink-400`} />;
      case 'Flame': return <Flame className={`${cls} text-orange-400`} />;
      case 'Compass': return <Compass className={`${cls} text-emerald-400`} />;
      case 'Gauge': return <Gauge className={`${cls} text-red-400`} />;
      case 'Mic': return <Mic className={`${cls} text-purple-400`} />;
      case 'Film': return <Film className={`${cls} text-amber-400`} />;
      case 'PartyPopper': return <PartyPopper className={`${cls} text-cyber-pink`} />;
      case 'Rocket': return <Rocket className={`${cls} text-cyber-cyan`} />;
      default: return <Sparkles className={`${cls} text-cyber-cyan`} />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Gaming':
        return {
          badge: 'bg-pink-500/15 text-cyber-pink border-pink-500/40',
          glow: 'group-hover:border-pink-400/60 group-hover:shadow-[0_0_25px_rgba(255,0,127,0.25)]',
          line: 'from-pink-400 to-rose-500',
        };
      case 'Technical':
        return {
          badge: 'bg-cyan-500/15 text-cyber-cyan border-cyan-500/40',
          glow: 'group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]',
          line: 'from-cyan-400 to-blue-500',
        };
      case 'Workshop':
        return {
          badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
          glow: 'group-hover:border-emerald-400/60 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.25)]',
          line: 'from-emerald-400 to-teal-500',
        };
      case 'Cultural':
        return {
          badge: 'bg-purple-500/15 text-cyber-purple border-purple-500/40',
          glow: 'group-hover:border-purple-400/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
          line: 'from-purple-400 to-pink-500',
        };
      case 'Other':
      default:
        return {
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
          glow: 'group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
          line: 'from-amber-400 to-emerald-500',
        };
    }
  };

  const theme = getCategoryTheme(event.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}
      whileHover={supportsHover ? { y: -6, scale: 1.01 } : undefined}
      onMouseMove={supportsHover ? handleMouseMove : undefined}
      onMouseEnter={supportsHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={supportsHover ? () => setIsHovered(false) : undefined}
      onClick={() => onSelect(event)}
      className={`group relative rounded-2xl glass-card p-6 flex flex-col justify-between cursor-pointer border border-slate-700/50 transition-colors duration-200 overflow-hidden h-full transform-gpu ${theme.glow}`}
    >
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.line} opacity-70 group-hover:opacity-100 transition-opacity`} />

      {/* Dynamic Cursor Spotlight Aura */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.12), transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10">
        {/* Top Header: Icon & Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
            {getIcon(event.icon)}
          </div>
          <div className="flex items-center gap-2">
            {event.prizes && (
              <span className="text-[10px] font-cyber font-bold tracking-tight px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                🏆 {event.prizes}
              </span>
            )}
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badge}`}>
              {event.category}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-cyber font-bold text-lg text-white mb-1.5 group-hover:text-cyber-cyan transition-colors">
          {event.title}
        </h3>

        {event.tagline && (
          <p className="text-xs font-mono text-cyan-300/80 mb-3 italic">
            "{event.tagline}"
          </p>
        )}

        <p className="text-slate-300 text-xs font-sans line-clamp-2 leading-relaxed mb-5">
          {event.description}
        </p>

        {/* Info Grid */}
        <div className="space-y-2 mb-6 bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 text-xs font-mono text-slate-300">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-cyber-pink" /> Date:
            </span>
            <span className="text-white font-medium">{event.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Users className="w-3.5 h-3.5 text-emerald-400" /> Team:
            </span>
            <span className="text-white font-medium">{event.teamSize}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Coins className="w-3.5 h-3.5 text-amber-400" /> Fee:
            </span>
            <span className="text-amber-300 font-semibold">{event.registrationFee || '₹50 / Head'}</span>
          </div>

          {event.slots && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Gauge className="w-3.5 h-3.5 text-purple-400" /> Slots:
              </span>
              <span className="text-purple-300 font-semibold">{event.slots}</span>
            </div>
          )}

          {event.venue && (
            <div className="flex items-center justify-between pt-1 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyber-cyan" /> Venue:
              </span>
              <span className="text-slate-200 font-medium truncate max-w-[140px]">{event.venue}</span>
            </div>
          )}

          {event.bringLaptop && (
            <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Laptop className="w-3.5 h-3.5 text-cyber-cyan" /> Device:
              </span>
              <span className="text-cyan-300 font-medium truncate">Try to bring laptop</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(event);
          }}
          className="text-xs font-cyber text-slate-400 group-hover:text-cyber-cyan flex items-center gap-1.5 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          <span>MISSION INTEL</span>
        </button>

        <a
          href={event.registrationUrl || 'https://forms.gle/uTT3CkMsFMK68Pve9'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-cyber font-bold bg-cyan-500/15 text-cyber-cyan border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all"
        >
          <span>ENROLL</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};