import React, { useState } from 'react';
import { Calendar, Users, Sparkles, CheckCircle2, Trophy, Maximize2, X, ExternalLink, QrCode, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { playCyberClick, playStartSound } from '../utils/sound';

export const Registration: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleRegisterClick = () => {
    playStartSound();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#ff007f', '#a855f7', '#39ff14'],
    });
    window.open('https://forms.gle/uTT3CkMsFMK68Pve9', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/30 text-cyber-pink text-xs font-mono mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyber-pink animate-pulse" />
            <span>ENROLLMENT PORTAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase mb-4"
          >
            SECURE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink via-purple-400 to-cyber-cyan glow-pink">ACCESS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base font-sans"
          >
            Register individually or assemble your squad before portals lock. Early registrations receive priority lab access & kits.
          </motion.p>
        </div>

        {/* REGISTRATION MAIN CARD & QR CODE CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* LEFT CARDS: EVENT DETAILS & PERKS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-2xl relative overflow-hidden"
          >
            {/* Top glowing edge line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple" />

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-2">
              <Zap className="w-4 h-4 text-cyber-cyan" />
              <span>REGISTRATION SYSTEM // V8.0</span>
            </div>

            <h3 className="font-cyber font-bold text-2xl sm:text-3xl text-white uppercase mb-3">
              READY TO COMPETE?
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              Choose your events across competitive programming, hackathons, robotics, CTF security, or gaming tournaments. All accredited college students are eligible!
            </p>

            {/* METRICS GRID */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-cyber-pink text-xs font-mono mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>DEADLINE</span>
                </div>
                <div className="text-white font-cyber font-bold text-xs sm:text-sm">August 25, 2026</div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-cyber-cyan text-xs font-mono mb-1">
                  <Users className="w-4 h-4" />
                  <span>ELIGIBILITY</span>
                </div>
                <div className="text-white font-cyber font-bold text-xs sm:text-sm">Undergrad & Postgrad</div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>ENTRY FORMAT</span>
                </div>
                <div className="text-white font-cyber font-bold text-xs sm:text-sm">Solo & Team Entries</div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
                  <Trophy className="w-4 h-4" />
                  <span>REWARDS</span>
                </div>
                <div className="text-white font-cyber font-bold text-xs sm:text-sm">₹50K+ & Certificates</div>
              </div>
            </div>

            {/* PERKS LIST */}
            <div className="space-y-2.5 mb-8 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Official YUGA'26 participant kits & digital badges</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Access to all tech keynotes, gaming expo & masterclasses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Verified participation certificates for all registered attendees</span>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <button
              onClick={handleRegisterClick}
              className="w-full sm:w-auto cyber-btn cyber-btn-cyan text-xs sm:text-sm py-4 px-8 shadow-neon-cyan flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL REGISTRATION FORM</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>

          {/* RIGHT COLUMN: CYBER SCANNER QR CODE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 text-center w-full max-w-sm shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.15)] relative">
              
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-4">
                <QrCode className="w-4 h-4 text-cyber-cyan" />
                <span>MOBILE SCANNER MATRIX</span>
              </div>

              {/* QR CODE CONTAINER WITH HUD RETICLE */}
              <div
                onClick={() => {
                  playCyberClick();
                  setQrModalOpen(true);
                }}
                className="relative bg-white p-4 rounded-2xl border-2 border-cyan-400/80 inline-block shadow-[0_0_25px_rgba(0,240,255,0.3)] cursor-pointer group mb-4 overflow-hidden"
                title="Click to expand QR Code"
              >
                {/* HUD Scan Reticle Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyber-pink z-10" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyber-pink z-10" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyber-pink z-10" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyber-pink z-10" />

                {/* Animated Laser Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent h-6 w-full animate-scanline pointer-events-none z-10" />

                <img
                  src="/registration-qr.png"
                  alt="YUGA'26 Registration QR Code"
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain relative z-0"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                  <Maximize2 className="w-8 h-8 text-cyber-cyan" />
                </div>
              </div>

              <button
                onClick={handleRegisterClick}
                className="w-full cyber-btn cyber-btn-pink text-xs py-3.5 shadow-neon-pink mb-3"
              >
                <span>OPEN FORM LINK</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <p className="text-[11px] font-mono text-slate-400">
                Point your mobile camera or Google Lens at the code to register immediately.
              </p>
            </div>
          </motion.div>

        </div>

      </div>

      {/* QR MODAL */}
      <AnimatePresence>
        {qrModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQrModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass-panel bg-[#070e24] border border-cyan-400/60 p-6 sm:p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl z-10"
            >
              <button
                onClick={() => setQrModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
                aria-label="Close QR Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-cyber font-bold text-base text-white uppercase mb-4 glow-cyan">
                REGISTRATION QR
              </h3>

              <div className="bg-white p-4 rounded-xl border-2 border-cyan-400 inline-block mb-4 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                <img
                  src="/registration-qr.png"
                  alt="YUGA'26 Registration QR Code"
                  className="w-64 h-64 object-contain mx-auto"
                />
              </div>

              <button
                onClick={handleRegisterClick}
                className="w-full cyber-btn cyber-btn-cyan text-xs py-3 mb-2"
              >
                <span>OPEN GOOGLE FORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <p className="text-xs font-mono text-slate-400">
                Scan with any smartphone camera to open registration.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
