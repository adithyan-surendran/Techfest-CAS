import React, { useState } from 'react';
import { Calendar, Users, Sparkles, CheckCircle2, Trophy, Maximize2, X, ExternalLink, QrCode, ShieldCheck, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FORMATTED_PRIZE_POOL } from '../data/events';

export const Registration: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleRegisterClick = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#ff007f', '#a855f7', '#39ff14'],
      });
    } catch {
      // Gracefully handled if blocked by Brave Shields or ad blockers
    }
    window.open('https://forms.gle/uTT3CkMsFMK68Pve9', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-cyber-pink text-xs font-mono mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyber-pink animate-pulse" />
            <span>ENROLLMENT PORTAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-cyber font-black tracking-tight text-white uppercase mb-2"
          >
            SECURE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink via-purple-400 to-cyber-cyan glow-pink">ACCESS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-xs sm:text-sm font-sans"
          >
            Register individually or assemble your squad. Entry fee is ₹50 per head for each competition.
          </motion.p>
        </div>

        {/* REGISTRATION MAIN CARDS (COMPACT EQUAL 2-COLUMN GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT COLUMN: EVENT DETAILS & PERKS */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="h-full glass-panel rounded-2xl p-5 sm:p-6 border border-slate-700/60 shadow-xl relative overflow-hidden hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
          >
            {/* Top glowing edge line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-purple" />

            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-1.5">
                <Zap className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>REGISTRATION SYSTEM // V8.0</span>
              </div>

              <h3 className="font-cyber font-bold text-xl sm:text-2xl text-white uppercase mb-2">
                READY TO COMPETE?
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed mb-3 font-sans">
                Enter your challenges across Technical, Cultural, Gaming, and Other competitions.
              </p>

              {/* COMPACT EVENT SPECIFIC NOTICE */}
              <div className="mb-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-left">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-[11px] font-mono text-amber-200">
                  <strong className="text-amber-400 font-bold uppercase">₹50 / Head per event:</strong> Separate form required for each competition (Pottery workshop: ₹100).
                </span>
              </div>

              {/* ONLINE REGISTRATION DEADLINE & SPOT NOTICE */}
              <div className="mb-4 p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-2.5 text-left">
                <Zap className="w-4 h-4 text-cyber-cyan flex-shrink-0 animate-pulse" />
                <span className="text-[11px] font-mono text-cyan-200">
                  <strong className="text-cyber-cyan font-bold uppercase">Online Reg Ends Jan 6:</strong> Spot registration available on campus thereafter!
                </span>
              </div>

              {/* COMPACT METRICS GRID */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 text-cyber-pink text-[10px] font-mono mb-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>ONLINE DEADLINE</span>
                  </div>
                  <div className="text-white font-cyber font-bold text-xs">Jan 6, 2027</div>
                  <div className="text-[9px] font-mono text-emerald-400 mt-0.5 font-medium">Spot Reg Available</div>
                </div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 text-cyber-cyan text-[10px] font-mono mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>ENTRY FEE</span>
                  </div>
                  <div className="text-white font-cyber font-bold text-xs">₹50 / Head</div>
                </div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-mono mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FORMAT</span>
                  </div>
                  <div className="text-white font-cyber font-bold text-xs">Per Event</div>
                </div>

                <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-2.5">
                  <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-mono mb-0.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>PRIZE POOL</span>
                  </div>
                  <div className="text-white font-cyber font-bold text-xs">{FORMATTED_PRIZE_POOL}</div>
                </div>
              </div>

              {/* COMPACT REQUIREMENTS LIST */}
              <div className="space-y-1.5 mb-4 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Verified certificates for all participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Open to all college students across institutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Spot registration desk active on festival days</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handleRegisterClick}
                className="cyber-btn cyber-btn-cyan text-xs py-2.5 px-4 shadow-neon-cyan flex-1 flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL FORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <a
                href="#events"
                className="cyber-btn cyber-btn-outline text-xs py-2.5 px-4 flex-1 flex items-center justify-center gap-1.5"
              >
                <span>CHOOSE EVENTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CYBER SCANNER QR CODE */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            className="h-full glass-panel rounded-2xl p-5 sm:p-6 border border-cyan-500/30 text-center shadow-xl relative overflow-hidden hover:border-cyan-400/50 transition-all flex flex-col justify-between"
          >
            {/* Top glowing edge line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-pink via-purple-500 to-cyber-cyan" />

            <div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-cyber-cyan uppercase tracking-wider mb-1.5">
                <QrCode className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>MOBILE SCANNER MATRIX</span>
              </div>

              <h3 className="font-cyber font-bold text-xl sm:text-2xl text-white uppercase mb-2">
                INSTANT ENROLLMENT
              </h3>

              <p className="text-slate-300 text-xs leading-relaxed mb-3.5 font-sans">
                Scan the QR code with any camera or UPI app to access the registration form.
              </p>

              {/* COMPACT QR CODE CONTAINER WITH HUD RETICLE */}
              <div
                onClick={() => setQrModalOpen(true)}
                className="relative bg-white p-3 rounded-xl border-2 border-cyan-400/80 inline-block shadow-[0_0_20px_rgba(0,240,255,0.25)] cursor-pointer group mb-3.5 overflow-hidden"
                title="Click to expand QR Code"
              >
                {/* HUD Scan Reticle Corners */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyber-pink z-10" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyber-pink z-10" />
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyber-pink z-10" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyber-pink z-10" />

                {/* Animated Laser Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent h-5 w-full animate-scanline pointer-events-none z-10" />

                <img
                  src={`${import.meta.env.BASE_URL}registration-qr.png`}
                  alt="YUGA'26 Registration QR Code"
                  width="160"
                  height="160"
                  loading="lazy"
                  decoding="async"
                  className="w-36 h-36 sm:w-40 sm:h-40 object-contain relative z-0"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                  <Maximize2 className="w-6 h-6 text-cyber-cyan" />
                </div>
              </div>

              {/* COMPACT 3 QUICK STEPS BADGE */}
              <div className="grid grid-cols-3 gap-1.5 mb-3 text-left font-mono text-[10px] bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="p-1">
                  <span className="text-cyber-cyan font-bold block mb-0.5">01. SCAN</span>
                  <span className="text-slate-400">QR / Form link</span>
                </div>
                <div className="p-1 border-x border-slate-800 px-2">
                  <span className="text-cyber-pink font-bold block mb-0.5">02. FILL</span>
                  <span className="text-slate-400">Enter details</span>
                </div>
                <div className="p-1">
                  <span className="text-emerald-400 font-bold block mb-0.5">03. PAY</span>
                  <span className="text-slate-400">₹50 / head</span>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON & FOOTNOTE */}
            <div className="pt-2">
              <button
                onClick={handleRegisterClick}
                className="w-full cyber-btn cyber-btn-pink text-xs py-2.5 px-4 shadow-neon-pink flex items-center justify-center gap-1.5 mb-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>OPEN REGISTRATION FORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <p className="text-[10px] font-mono text-slate-400">
                Point your mobile camera or Google Lens to register immediately.
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
                  src={`${import.meta.env.BASE_URL}registration-qr.png`}
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
