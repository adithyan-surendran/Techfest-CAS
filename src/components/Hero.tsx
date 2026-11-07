import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, Zap, Trophy, Users, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FORMATTED_PRIZE_POOL } from '../data/events';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Layered progressive scroll transforms so bottom elements DO NOT fade out prematurely
  const headOpacity = useTransform(scrollY, [150, 480], [1, 0.25]);
  const headY = useTransform(scrollY, [0, 480], [0, 40]);

  const midOpacity = useTransform(scrollY, [320, 680], [1, 0.35]);
  const midY = useTransform(scrollY, [120, 680], [0, 30]);

  const btnOpacity = useTransform(scrollY, [450, 800], [1, 0.4]);

  // Live Countdown to January 7, 2027
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-01-07T09:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(() => {
      if (!document.hidden) updateCountdown();
    }, 1000);

    const handleVisibility = () => {
      if (!document.hidden) updateCountdown();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* TOP HERO LAYER: BADGE, HEADLINE & TAGLINE (Fades gently on deeper scroll) */}
        <motion.div style={{ opacity: headOpacity, y: headY }} className="flex flex-col items-center w-full">
          {/* FLOATING STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-cyan border border-cyan-500/40 text-cyber-cyan text-xs font-mono mb-8 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
            <span className="font-semibold tracking-wider">TECH FEST</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">CAS VAZHAKKAD</span>
          </motion.div>

          {/* MAIN GLOWING HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6 max-w-4xl"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-cyber font-black tracking-tight leading-none uppercase text-white">
              LEVEL UP AT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-[#67e8f9] to-cyber-pink glow-cyan">
                YUGA
              </span>
              <span className="text-cyber-pink glow-pink">'26</span>
            </h1>
          </motion.div>

          {/* TAGLINE & CODE PHRASE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/70 border border-slate-700/60 font-mono text-xs sm:text-sm text-cyan-300 shadow-inner"
          >
            <Terminal className="w-4 h-4 text-cyber-cyan flex-shrink-0" />
            <span className="text-cyber-green font-bold">&gt;</span>
            <span className="tracking-widest font-semibold">CODE. INNOVATE. ELEVATE.</span>
          </motion.div>
        </motion.div>

        {/* MID HERO LAYER: DATE, VENUE & COUNTDOWN (Fades much later) */}
        <motion.div style={{ opacity: midOpacity, y: midY }} className="flex flex-col items-center w-full">
          {/* DATE & VENUE PILLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm font-mono text-slate-300"
          >
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl border border-slate-700/60">
              <Calendar className="w-4 h-4 text-cyber-pink" />
              <span>JANUARY 7 – 8, 2027</span>
            </div>
            <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl border border-slate-700/60">
              <MapPin className="w-4 h-4 text-cyber-cyan" />
              <span>CAS VAZHAKKAD, MALAPPURAM</span>
            </div>
          </motion.div>

          {/* LIVE COUNTDOWN HUD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 w-full max-w-xl"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>MISSION LAUNCH COUNTDOWN</span>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINUTES', value: timeLeft.minutes },
                { label: 'SECONDS', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-3 sm:p-4 text-center border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-400 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="text-2xl sm:text-4xl font-cyber font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400 tracking-wider mt-1">
                    {item.label}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ACTION CTA BUTTONS LAYER */}
        <motion.div
          style={{ opacity: btnOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={() => scrollToSection('#events')}
            className="w-full sm:w-auto cyber-btn cyber-btn-cyan text-sm py-4 px-8 shadow-neon-cyan flex items-center justify-center gap-2"
          >
            <span>EXPLORE EVENTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('#register')}
            className="w-full sm:w-auto cyber-btn cyber-btn-outline text-sm py-4 px-7 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyber-pink" />
            <span>REGISTER TEAM</span>
          </button>
        </motion.div>

        {/* BOTTOM FESTIVAL STATS RIBBON (DOES NOT FADE EARLY! Stays crisp & highlights on scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl"
        >
          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="flex items-center justify-center gap-3 glass-card p-4 rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-all shadow-lg">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyber-cyan border border-cyan-500/20">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-cyber font-bold text-base text-white">{FORMATTED_PRIZE_POOL}</div>
              <div className="text-[11px] font-mono text-slate-400">Total Cash Pool</div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="flex items-center justify-center gap-3 glass-card p-4 rounded-xl border border-slate-800 hover:border-pink-500/50 transition-all shadow-lg">
            <div className="p-2.5 rounded-lg bg-pink-500/10 text-cyber-pink border border-pink-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-cyber font-bold text-base text-white">2 Days</div>
              <div className="text-[11px] font-mono text-slate-400">Tech Sprints</div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="flex items-center justify-center gap-3 glass-card p-4 rounded-xl border border-slate-800 hover:border-purple-400/50 transition-all shadow-lg">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-cyber-purple border border-purple-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-cyber font-bold text-base text-white">1,000+</div>
              <div className="text-[11px] font-mono text-slate-400">Participants</div>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -6, scale: 1.03 }} className="flex items-center justify-center gap-3 glass-card p-4 rounded-xl border border-slate-800 hover:border-emerald-400/50 transition-all shadow-lg">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-cyber font-bold text-base text-white">18 Events</div>
              <div className="text-[11px] font-mono text-slate-400">Competitions & Shows</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
