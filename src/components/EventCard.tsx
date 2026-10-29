import React from 'react';
import { Calendar, Clock, Users, ArrowUpRight, Code2, Cpu, Bot, Gamepad2, HelpCircle, ShieldAlert, Sparkles, Trophy, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../types';
import { playCyberClick, playCyberHover } from '../utils/sound';

interface EventCardProps {
  event: Event;
  index: number;
  onSelect: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index, onSelect }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyber-cyan" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyber-purple" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-cyber-pink" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      default: return <Sparkles className="w-5 h-5 text-cyber-cyan" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Coding':
        return {
          badge: 'bg-cyan-500/15 text-cyber-cyan border-cyan-500/40',
          glow: 'group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]',
          line: 'from-cyan-400 to-blue-500',
        };
      case 'Development':
        return {
          badge: 'bg-purple-500/15 text-cyber-purple border-purple-500/40',
          glow: 'group-hover:border-purple-400/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
          line: 'from-purple-400 to-indigo-500',
        };
      case 'Robotics':
        return {
          badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40',
          glow: 'group-hover:border-emerald-400/60 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
          line: 'from-emerald-400 to-teal-500',
        };
      case 'Gaming':
        return {
          badge: 'bg-pink-500/15 text-cyber-pink border-pink-500/40',
          glow: 'group-hover:border-pink-400/60 group-hover:shadow-[0_0_25px_rgba(255,0,127,0.25)]',
          line: 'from-pink-400 to-rose-500',
        };
      case 'Quiz':
        return {
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/40',
          glow: 'group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
          line: 'from-amber-400 to-orange-500',
        };
      default:
        return {
          badge: 'bg-cyan-500/15 text-cyber-cyan border-cyan-500/40',
          glow: 'group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.25)]',
          line: 'from-cyan-400 to-blue-500',
        };
    }
  };

  const theme = getCategoryTheme(event.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onMouseEnter={playCyberHover}
      onClick={() => {
        playCyberClick();
        onSelect(event);
      }}
      className={`group relative rounded-2xl glass-card p-6 flex flex-col justify-between cursor-pointer border border-slate-700/50 transition-all duration-300 overflow-hidden ${theme.glow}`}
    >
      {/* Top Accent Gradient Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.line} opacity-70 group-hover:opacity-100 transition-opacity`} />

      <div>
        {/* Top Header: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
            {getIcon(event.icon)}
          </div>
          <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${theme.badge}`}>
            {event.category}
          </span>
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
              <Clock className="w-3.5 h-3.5 text-cyber-cyan" /> Time:
            </span>
            <span className="text-white font-medium">{event.time}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Users className="w-3.5 h-3.5 text-emerald-400" /> Team:
            </span>
            <span className="text-white font-medium">{event.teamSize}</span>
          </div>

          {event.prizes && (
            <div className="flex items-center justify-between pt-1 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Trophy className="w-3.5 h-3.5" /> Rewards:
              </span>
              <span className="text-amber-300 font-semibold truncate max-w-[150px]">
                Cash Prizes
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
        <button
          onClick={(e) => {
            e.stopPropagation();
            playCyberClick();
            onSelect(event);
          }}
          className="text-xs font-cyber text-slate-400 group-hover:text-cyber-cyan flex items-center gap-1.5 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          <span>MISSION INTEL</span>
        </button>

        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            playCyberClick();
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
