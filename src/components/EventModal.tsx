import React, { useEffect } from 'react';
import { X, Calendar, Clock, Users, MapPin, Award, Phone, UserCheck, ExternalLink } from 'lucide-react';
import { Event } from '../types';
import { PixelButton } from './PixelButton';
import { PixelBadge } from './PixelBadge';
import { playSelectSound } from '../utils/sound';

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const handleRegisterClick = () => {
    playSelectSound();
    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#121226] border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0_#000] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            playSelectSound();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 bg-[#0a0a14] border-2 border-black text-slate-300 hover:text-[#ff007f] shadow-[2px_2px_0_#000] active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="mb-6 border-b-2 border-slate-800 pb-4 pr-8">
          <div className="mb-2">
            <PixelBadge color="pink" size="sm">
              {event.category}
            </PixelBadge>
          </div>
          <h2 className="text-xl sm:text-3xl font-pixel uppercase text-[#00f0ff] glow-cyan">
            {event.title}
          </h2>
          {event.tagline && (
            <p className="text-xs sm:text-sm font-mono text-[#ffe600] mt-1">{event.tagline}</p>
          )}
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm font-mono">
          <div className="flex items-center gap-2 bg-[#0a0a14] p-3 border-2 border-black">
            <Calendar className="w-4 h-4 text-[#ff007f]" />
            <div>
              <span className="text-slate-400 block text-[10px]">DATE</span>
              <span className="text-white font-bold">{event.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0a0a14] p-3 border-2 border-black">
            <Clock className="w-4 h-4 text-[#00f0ff]" />
            <div>
              <span className="text-slate-400 block text-[10px]">TIME</span>
              <span className="text-white font-bold">{event.time}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0a0a14] p-3 border-2 border-black">
            <Users className="w-4 h-4 text-[#39ff14]" />
            <div>
              <span className="text-slate-400 block text-[10px]">TEAM SIZE</span>
              <span className="text-white font-bold">{event.teamSize}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0a0a14] p-3 border-2 border-black">
            <MapPin className="w-4 h-4 text-[#ffe600]" />
            <div>
              <span className="text-slate-400 block text-[10px]">VENUE</span>
              <span className="text-white font-bold">{event.venue || 'Main Campus'}</span>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-6 bg-[#0a0a14] p-4 border-2 border-black">
          <h3 className="font-pixel text-xs text-[#00f0ff] uppercase mb-2">ABOUT THE EVENT</h3>
          <p className="text-slate-300 font-mono text-xs leading-relaxed">{event.description}</p>
        </div>

        {/* PRIZES & ELIGIBILITY */}
        {(event.prizes || event.eligibility) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {event.prizes && (
              <div className="bg-[#0a0a14] p-3 border-2 border-[#ffe600]/40">
                <div className="flex items-center gap-1.5 text-[#ffe600] font-pixel text-xs mb-1">
                  <Award className="w-4 h-4" />
                  <span>PRIZES</span>
                </div>
                <p className="text-xs font-mono text-slate-200">{event.prizes}</p>
              </div>
            )}
            {event.eligibility && (
              <div className="bg-[#0a0a14] p-3 border-2 border-[#39ff14]/40">
                <div className="flex items-center gap-1.5 text-[#39ff14] font-pixel text-xs mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>ELIGIBILITY</span>
                </div>
                <p className="text-xs font-mono text-slate-200">{event.eligibility}</p>
              </div>
            )}
          </div>
        )}

        {/* RULES */}
        {event.rules && event.rules.length > 0 && (
          <div className="mb-6 bg-[#0a0a14] p-4 border-2 border-black">
            <h3 className="font-pixel text-xs text-[#ff007f] uppercase mb-3">RULES & GUIDELINES</h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs font-mono text-slate-300">
              {event.rules.map((rule, index) => (
                <li key={index} className="leading-relaxed">{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTACT PERSON */}
        {event.contactPerson && (
          <div className="mb-6 flex items-center justify-between text-xs font-mono bg-[#0a0a14] p-3 border-2 border-black text-slate-300">
            <div>
              <span className="text-slate-500 block text-[10px]">EVENT COORDINATOR</span>
              <span className="text-white font-bold">{event.contactPerson}</span>
            </div>
            {event.contactPhone && (
              <a
                href={`tel:${event.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1 text-[#00f0ff] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{event.contactPhone}</span>
              </a>
            )}
          </div>
        )}

        {/* FOOTER ACTIONS */}
        <div className="pt-4 border-t-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 font-pixel text-xs text-slate-400 hover:text-white"
          >
            [ CLOSE ]
          </button>

          <PixelButton
            variant="pink"
            size="lg"
            onClick={handleRegisterClick}
            className="w-full sm:w-auto"
          >
            REGISTER FOR THIS EVENT <ExternalLink className="w-4 h-4 ml-1" />
          </PixelButton>
        </div>

      </div>
    </div>
  );
};
