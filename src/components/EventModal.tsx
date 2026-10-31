import React, { useEffect } from 'react';
import { X, Calendar, Users, MapPin, Trophy, Phone, UserCheck, ExternalLink, CheckCircle2, AlertTriangle, Sparkles, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Event } from '../types';

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
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#ff007f', '#a855f7', '#39ff14'],
    });
    window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl glass-panel bg-[#070e24]/95 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.2)] max-h-[90vh] overflow-y-auto z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6 border-b border-slate-800 pb-5 pr-8">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyber-cyan text-xs font-mono mb-2">
              MISSION BRIEF // {event.category.toUpperCase()}
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-cyber font-bold uppercase text-white glow-cyan">
              {event.title}
            </h2>

            {event.tagline && (
              <p className="text-xs sm:text-sm font-mono text-cyan-300/90 mt-1 italic">
                "{event.tagline}"
              </p>
            )}
          </div>

          {/* Key Event Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-cyber-pink text-xs font-mono mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>DATE</span>
              </div>
              <div className="text-white font-bold text-xs font-mono">{event.date}</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>TEAM</span>
              </div>
              <div className="text-white font-bold text-xs font-mono">{event.teamSize}</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-mono mb-1">
                <Coins className="w-3.5 h-3.5" />
                <span>ENTRY FEE</span>
              </div>
              <div className="text-amber-300 font-bold text-xs font-mono">{event.registrationFee || '₹50 / Head'}</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-cyber-cyan text-xs font-mono mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>VENUE</span>
              </div>
              <div className="text-white font-bold text-xs font-mono truncate">{event.venue || 'Main Stage / Campus'}</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-cyber text-slate-400 uppercase tracking-wider mb-2">
              OVERVIEW
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
              {event.description}
            </p>
          </div>

          {/* Prizes & Deadlines */}
          {(event.prizes || event.deadline) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {event.prizes && (
                <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/5 border border-amber-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-cyber font-bold mb-1">
                    <Trophy className="w-4 h-4" />
                    <span>PRIZE POOL & REWARDS</span>
                  </div>
                  <p className="text-amber-200/90 text-xs font-mono">{event.prizes}</p>
                </div>
              )}

              {event.deadline && (
                <div className="bg-gradient-to-br from-red-500/10 to-rose-600/5 border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-cyber font-bold mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span>REGISTRATION DEADLINE</span>
                  </div>
                  <p className="text-rose-200/90 text-xs font-mono">{event.deadline}</p>
                </div>
              )}
            </div>
          )}

          {/* Rules & Guidelines */}
          {event.rules && event.rules.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-cyber text-slate-400 uppercase tracking-wider mb-3">
                MISSION PROTOCOLS & RULES
              </h4>
              <ul className="space-y-2">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Coordinator Intel */}
          {(event.contactPerson || event.contactPhone) && (
            <div className="mb-6 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-cyber-cyan" />
                <span className="text-slate-400">LEAD:</span>
                <span className="text-white font-medium">{event.contactPerson}</span>
              </div>
              {event.contactPhone && (
                <a
                  href={`tel:${event.contactPhone}`}
                  className="flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{event.contactPhone}</span>
                </a>
              )}
            </div>
          )}

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleRegisterClick}
              className="w-full sm:flex-1 cyber-btn cyber-btn-cyan text-xs py-3.5 shadow-neon-cyan flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL REGISTRATION PORTAL</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 text-xs font-mono text-slate-300 hover:bg-slate-800 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
