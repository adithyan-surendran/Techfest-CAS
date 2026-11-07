import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Wifi, ShieldCheck, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(35);
  const [statusText, setStatusText] = useState('CONNECTING TO CAS NETWORK...');
  const [isFinishing, setIsFinishing] = useState(false);
  const hasFinishedRef = useRef(false);

  const finishImmediately = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setStatusText('INITIALIZATION COMPLETE // LAUNCHING...');
    setIsFinishing(true);
    setTimeout(() => {
      onComplete();
    }, 150);
  };

  useEffect(() => {
    let mounted = true;
    let targetProgress = 80;
    let currentProgress = 35;

    // Fast, responsive progress ticker (snappy ~400ms transition instead of slow 2-3s delay)
    const ticker = setInterval(() => {
      if (!mounted) return;
      if (currentProgress < targetProgress) {
        currentProgress = Math.min(targetProgress, currentProgress + 10);
        setProgress(currentProgress);
      }

      if (currentProgress >= 100 && !hasFinishedRef.current) {
        hasFinishedRef.current = true;
        clearInterval(ticker);
        setStatusText('INITIALIZATION COMPLETE // LAUNCHING...');
        setIsFinishing(true);
        setTimeout(() => {
          if (mounted) onComplete();
        }, 150);
      }
    }, 28);

    // Promptly step forward
    const t1 = setTimeout(() => {
      if (mounted) {
        targetProgress = 100;
        setStatusText('SYNCHRONIZING GRAPHICS & ASSETS...');
      }
    }, 200);

    // Hard safety timeout: finishes smoothly within 550ms max
    const safetyTimer = setTimeout(() => {
      if (mounted) finishImmediately();
    }, 550);

    return () => {
      mounted = false;
      clearInterval(ticker);
      clearTimeout(t1);
      clearTimeout(safetyTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={finishImmediately}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#02040a] text-slate-100 select-none overflow-hidden p-4 sm:p-6 cursor-pointer"
    >
      {/* RICH ATMOSPHERIC BACKGROUND (ELIMINATES BLANK/EMPTY SPACE) */}
      <div className="absolute inset-0 cyber-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      {/* Vibrant Atmospheric Neon Glow Orbs: mobile-optimized blur */}
      <div className="absolute top-1/4 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-500/10 sm:bg-cyan-500/15 rounded-full blur-[60px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-pink-500/10 sm:bg-pink-500/15 rounded-full blur-[60px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[70px] sm:blur-[150px] pointer-events-none" />

      {/* SUBTLE CORNER ACCENTS FOR BALANCE */}
      <div className="absolute top-6 left-6 pointer-events-none font-mono text-[10px] text-cyan-500/40 tracking-widest hidden sm:flex items-center gap-2">
        <span className="w-2.5 h-2.5 border-t border-l border-cyan-400" />
        <span>CAS_VAZHAKKAD // YUGA-OS</span>
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none font-mono text-[10px] text-pink-500/40 tracking-widest hidden sm:flex items-center gap-2">
        <span>JANUARY 07 – 08, 2027</span>
        <span className="w-2.5 h-2.5 border-b border-r border-pink-400" />
      </div>

      {/* CENTER CYBER TERMINAL WINDOW (GIVES STRUCTURE & PRESENCE) */}
      <div className="relative z-10 w-full max-w-lg glass-panel-cyan rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.18)]">
        
        {/* TERMINAL WINDOW HEADER */}
        <div className="px-5 py-3 border-b border-cyan-500/20 bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            <span className="ml-2 font-mono text-[11px] text-cyan-300/80 tracking-wider hidden sm:inline">
              YUGA_CORE_SYSTEM.EXE
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-wider">ONLINE</span>
          </div>
        </div>

        {/* TERMINAL CONTENT */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          
          {/* HOLOGRAPHIC LOGO & CORE EMBLEM */}
          <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
            {/* Spinning Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
            />
            {/* Counter Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-pink-500/40 border-t-pink-400"
            />
            {/* Center Core */}
            <div className="absolute inset-4 rounded-full bg-cyan-950/70 border border-cyan-400/60 backdrop-blur-md flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,240,255,0.3)]">
              <Bot className="w-8 h-8 text-cyber-cyan animate-pulse drop-shadow-[0_0_12px_rgba(0,240,255,0.9)]" />
            </div>
          </div>

          {/* BRAND TITLE */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyber-cyan text-[11px] font-mono tracking-widest mb-2 shadow-[0_0_12px_rgba(0,240,255,0.15)]">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>COLLEGE OF APPLIED SCIENCE VAZHAKKAD</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
              YUGA<span className="text-cyber-pink glow-pink">'26</span>
            </h1>

            <p className="text-xs font-mono text-cyan-300/80 tracking-widest mt-1 uppercase">
              RETRO ARCADE TECH FESTIVAL
            </p>
          </div>

          {/* PROGRESS METRICS & NEON BAR */}
          <div className="w-full mt-2 flex flex-col items-center">
            
            <div className="flex items-center justify-between w-full px-1 mb-2 font-mono text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>LOADING ASSETS</span>
              </span>
              <span className="font-cyber font-bold text-cyber-cyan tracking-wider text-sm glow-cyan">
                {progress}%
              </span>
            </div>

            {/* Glowing Dual-Tone Progress Bar */}
            <div className="w-full h-3 bg-slate-950 rounded-full border border-cyan-500/30 p-0.5 overflow-hidden shadow-[0_0_15px_rgba(0,240,255,0.2)] relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyber-cyan via-purple-500 to-cyber-pink relative transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white shadow-[0_0_10px_#ffffff] rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Arcade Segment Notch Blocks */}
            <div className="w-full flex justify-between px-1 mt-2">
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((step) => (
                <div
                  key={step}
                  className={`w-1 h-1.5 rounded-xs transition-colors duration-200 ${
                    progress >= step ? 'bg-cyber-cyan shadow-[0_0_6px_#00f0ff]' : 'bg-slate-800'
                  }`}
                />
              ))}
            </div>

            {/* LIVE STAGE STATUS MESSAGE */}
            <div className="w-full mt-4 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 font-mono text-[11px] text-left flex items-center gap-2 text-slate-300">
              <span className="text-cyber-green font-bold">&gt;</span>
              <span className="truncate text-cyan-200">{statusText}</span>
              <span className="inline-block w-1.5 h-3 bg-cyber-cyan animate-pulse ml-auto flex-shrink-0" />
            </div>

            {/* FAST ENTRANCE BUTTON */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                finishImmediately();
              }}
              className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/60 text-cyber-cyan font-mono text-[10px] tracking-wider hover:bg-cyan-500/20 active:scale-95 transition-all"
            >
              <span>TAP TO ENTER</span>
              <span className="font-bold">↵</span>
            </button>

          </div>
        </div>

        {/* TERMINAL FOOTER BAR */}
        <div className="px-5 py-2.5 border-t border-cyan-500/20 bg-slate-950/70 flex items-center justify-between font-mono text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-cyber-green" />
            <span>SECURE HOST</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3 text-cyber-cyan" />
            <span>CONNECTING PROTOCOLS</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 h-2.5">
            <span className="w-0.5 bg-cyber-cyan animate-eq-1" />
            <span className="w-0.5 bg-cyber-pink animate-eq-2" />
            <span className="w-0.5 bg-cyber-cyan animate-eq-3" />
            <span className="w-0.5 bg-purple-400 animate-eq-4" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
