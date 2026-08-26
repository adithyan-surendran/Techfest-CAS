import React from 'react';
import { Calendar, Clock, Users, ExternalLink, Code2, Cpu, Bot, Gamepad2, HelpCircle, ShieldAlert, Sparkles, Info } from 'lucide-react';
import { Event } from '../types';
import { PixelCard } from './PixelCard';
import { PixelButton } from './PixelButton';
import { PixelBadge } from './PixelBadge';
import { playSelectSound } from '../utils/sound';

interface EventCardProps {
  event: Event;
  onSelect: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  // Map string icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-[#00f0ff]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#ff007f]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#39ff14]" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-[#ffe600]" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-[#9d4edd]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#ff5500]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#00f0ff]" />;
      default: return <Code2 className="w-6 h-6 text-[#00f0ff]" />;
    }
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSelectSound();
    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <PixelCard variant="default" className="flex flex-col justify-between h-full group">
      <div>
        {/* CARD TOP BAR */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="p-2 bg-[#0a0a14] border-2 border-black shadow-[2px_2px_0_#000] group-hover:scale-110 transition-transform">
            {getIcon(event.icon)}
          </div>
          <PixelBadge color="cyan" size="sm">
            {event.category}
          </PixelBadge>
        </div>

        {/* TITLE & DESCRIPTION */}
        <h3 className="text-base sm:text-lg font-pixel uppercase text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
          {event.title}
        </h3>

        <p className="text-slate-300 font-mono text-xs mb-4 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        {/* METADATA PILLS */}
        <div className="space-y-2 mb-6 font-mono text-xs text-slate-300 bg-[#0a0a14]/60 p-3 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-[#ff007f]" /> Date:
            </span>
            <span className="font-semibold text-slate-200">{event.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#00f0ff]" /> Time:
            </span>
            <span className="font-semibold text-slate-200">{event.time}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Users className="w-3.5 h-3.5 text-[#39ff14]" /> Team:
            </span>
            <span className="font-semibold text-slate-200">{event.teamSize}</span>
          </div>
        </div>
      </div>

      {/* CARD BUTTONS */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
        <PixelButton
          variant="pink"
          size="sm"
          onClick={handleRegister}
          className="flex-1"
        >
          REGISTER NOW <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </PixelButton>

        <button
          onClick={() => {
            playSelectSound();
            onSelect(event);
          }}
          className="p-2 bg-[#0a0a14] border-2 border-black text-slate-400 hover:text-[#00f0ff] shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5"
          title="View Event Details"
          aria-label={`View details for ${event.title}`}
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </PixelCard>
  );
};
