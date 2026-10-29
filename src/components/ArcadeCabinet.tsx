import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { isSoundMuted, setSoundMuted, playJumpSound, playCoinSound } from '../utils/sound';

export const ArcadeCabinet: React.FC = () => {
  const [muted, setMuted] = useState(true); // Muted by default for autoplay compliance
  const [score, setScore] = useState(4250);
  const [isJumping, setIsJumping] = useState(false);
  const [showCoinBurst, setShowCoinBurst] = useState(false);
  const [obstaclePos, setObstaclePos] = useState(100); // 100% to 0%
  const [coinPos, setCoinPos] = useState(80); // 100% to 0%

  // Ensure default sound state is set to muted
  useEffect(() => {
    setSoundMuted(true);
  }, []);

  // Autonomous Infinite Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Move obstacle left
      setObstaclePos((prev) => {
        const next = prev - deltaTime * 45; // Speed
        if (next < -10) {
          return 110; // Reset off-screen right
        }
        return next;
      });

      // Move coin left
      setCoinPos((prev) => {
        const next = prev - deltaTime * 45;
        if (next < -10) {
          return 120; // Reset off-screen right
        }
        return next;
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Autonomous Trigger Logic for Jump, Coin Collection, and Score Increment
  useEffect(() => {
    // Auto-Jump when obstacle gets close (between 25% and 40% from left)
    if (obstaclePos > 20 && obstaclePos < 42 && !isJumping) {
      setIsJumping(true);
      if (!muted) playJumpSound();
      setTimeout(() => setIsJumping(false), 600);
    }
  }, [obstaclePos, isJumping, muted]);

  useEffect(() => {
    // Auto-Collect Coin when coin reaches player position (~25% from left)
    if (coinPos > 20 && coinPos < 32 && !showCoinBurst) {
      setShowCoinBurst(true);
      if (!muted) playCoinSound();
      setScore((prev) => prev + 100);
      setTimeout(() => setShowCoinBurst(false), 500);
    }
  }, [coinPos, showCoinBurst, muted]);

  const toggleSound = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    setSoundMuted(nextMuted);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-6">
      
      {/* SECTION HEADER & EXTERNAL AUDIO CONTROL */}
      <div className="text-center mb-6 w-full max-w-xl px-4 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-2xl animate-pulse">🎮</span>
          <h2 className="text-xl sm:text-3xl font-pixel uppercase text-[#00f0ff] glow-cyan">
            YUGA'26 ARCADE
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#ffe600] tracking-wider mb-4">
          &quot;THE MACHINE IS ALWAYS RUNNING...&quot;
        </p>

        {/* EXTERNAL AUDIO BUTTON (Muted by default) */}
        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3 py-1.5 border-2 border-black font-pixel text-[10px] uppercase shadow-[2px_2px_0_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 ${
            muted ? 'bg-[#121226] text-slate-400 border-slate-700' : 'bg-[#39ff14] text-black font-bold'
          }`}
          title={muted ? 'Unmute 8-Bit Audio' : 'Mute 8-Bit Audio'}
          aria-label="Toggle cabinet sound"
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-bounce" />}
          <span>{muted ? 'SOUND: OFF 🔇' : 'SOUND: ON 🔊'}</span>
        </button>
      </div>

      {/* 3D RETRO ARCADE CABINET CONTAINER */}
      <div className="relative w-full max-w-[540px] px-2 sm:px-0 transition-transform duration-300">
        
        {/* CABINET OUTER CHASSIS WINGS (3D Side Panels) */}
        <div className="relative bg-[#0c0c1a] border-4 border-black p-3 sm:p-5 shadow-[12px_12px_0_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.25)] rounded-t-2xl">
          
          {/* NEON SIDE TRIM / ACCENT STRIPS */}
          <div className="absolute top-0 bottom-0 -left-2 w-2 bg-gradient-to-b from-[#00f0ff] via-[#ff007f] to-[#ffe600] rounded-l shadow-[-2px_0_8px_rgba(0,240,255,0.6)]"></div>
          <div className="absolute top-0 bottom-0 -right-2 w-2 bg-gradient-to-b from-[#ff007f] via-[#00f0ff] to-[#39ff14] rounded-r shadow-[2px_0_8px_rgba(255,0,127,0.6)]"></div>

          {/* TOP BACKLIT NEON MARQUEE */}
          <div className="relative bg-[#181832] border-4 border-black p-3 sm:p-4 mb-4 text-center overflow-hidden shadow-[inset_0_0_15px_rgba(0,240,255,0.4)]">
            {/* Top Marquee Screws */}
            <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 border border-black"></span>
            <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 border border-black"></span>
            <span className="absolute bottom-1 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 border border-black"></span>
            <span className="absolute bottom-1 right-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 border border-black"></span>

            <div className="font-pixel text-xs sm:text-base text-white tracking-widest uppercase mb-0.5 glow-cyan">
              YUGA <span className="text-[#ff007f]">'26</span>
            </div>
            <div className="font-pixel text-[10px] sm:text-xs text-[#ffe600] tracking-widest uppercase animate-pulse">
              ★ ARCADE RUNNER ★
            </div>
          </div>

          {/* SPEAKER GRILLES & VENT SLOTS */}
          <div className="flex justify-between items-center px-4 mb-2 opacity-50">
            <div className="flex gap-1">
              <div className="w-1.5 h-3 bg-black"></div>
              <div className="w-1.5 h-3 bg-black"></div>
              <div className="w-1.5 h-3 bg-black"></div>
            </div>
            <span className="text-[9px] font-pixel text-slate-500">STEREO SOUND</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-3 bg-black"></div>
              <div className="w-1.5 h-3 bg-black"></div>
              <div className="w-1.5 h-3 bg-black"></div>
            </div>
          </div>

          {/* CRT SCREEN HOUSING (Recessed Curved Bezel) */}
          <div className="relative bg-[#05050b] border-4 border-black p-3 sm:p-4 rounded-lg shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] overflow-hidden">
            
            {/* CRT BEZEL GLOW & SCANLINES */}
            <div className="absolute inset-0 scanlines opacity-50 z-20 pointer-events-none"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,240,255,0.15)] z-20 pointer-events-none"></div>

            {/* LIVE HUD OVERLAY */}
            <div className="relative z-10 flex justify-between items-center font-pixel text-[10px] sm:text-xs text-[#ffe600] mb-3 pb-1 border-b border-slate-800">
              <div className="flex items-center gap-1">
                <span className="text-slate-400">SCORE:</span>
                <span className="text-white font-bold">{String(score).padStart(6, '0')}</span>
              </div>
              <div className="flex items-center gap-1 text-[#ff007f]">
                <span className="text-slate-400">HI-SCORE:</span>
                <span className="text-[#ff007f] font-bold">012500</span>
              </div>
            </div>

            {/* CANVAS / ANIMATION STAGE */}
            <div className="relative h-44 sm:h-52 bg-gradient-to-b from-[#0a0a1a] via-[#12122b] to-[#0a0a1a] overflow-hidden border-2 border-black">
              
              {/* Background Stars */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-4 left-[20%] w-1 h-1 bg-white animate-ping"></div>
                <div className="absolute top-8 right-[30%] w-1 h-1 bg-[#00f0ff]"></div>
                <div className="absolute top-12 left-[60%] w-1 h-1 bg-[#ff007f]"></div>
              </div>

              {/* AUTONOMOUS COIN WITH +100 BURST */}
              <div
                className="absolute bottom-10 w-6 h-6 bg-[#ffe600] border-2 border-black flex items-center justify-center font-pixel text-[10px] text-black font-bold shadow-[2px_2px_0_#000] animate-bounce"
                style={{ left: `${coinPos}%` }}
              >
                $
              </div>

              {/* +100 Visual Burst Popup */}
              {showCoinBurst && (
                <div className="absolute bottom-20 left-[25%] font-pixel text-xs text-[#ffe600] animate-bounce glow-yellow z-30">
                  +100
                </div>
              )}

              {/* AUTONOMOUS APPROACHING OBSTACLE (Pixel Spikes) */}
              <div
                className="absolute bottom-3 w-5 h-6 bg-[#ff2a2a] border-2 border-black flex items-center justify-center shadow-[2px_2px_0_#000]"
                style={{ left: `${obstaclePos}%` }}
              >
                <div className="w-2 h-3 bg-yellow-300"></div>
              </div>

              {/* AUTONOMOUS PIXEL ROBOT AVATAR */}
              <div
                className={`absolute left-[20%] bottom-3 transition-transform duration-300 ${
                  isJumping ? '-translate-y-16' : 'translate-y-0'
                }`}
              >
                <div className="w-9 h-11 bg-[#ff007f] border-2 border-black relative flex flex-col items-center justify-between p-1 shadow-[2px_2px_0_#000]">
                  <div className="flex gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-[#00f0ff]"></span>
                    <span className="w-1.5 h-1.5 bg-[#00f0ff]"></span>
                  </div>
                  <div className="w-5 h-1 bg-[#ffe600] border border-black mb-0.5"></div>
                </div>
              </div>

              {/* SCROLLING PIXEL TERRAIN GROUND */}
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#39ff14]/30 border-t-2 border-black flex">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="flex-1 h-full border-r border-black bg-[#1f1f3a]">
                    <div className="w-full h-1 bg-[#39ff14]"></div>
                  </div>
                ))}
              </div>

            </div>

            {/* CRT BOTTOM STATUS LINE */}
            <div className="mt-2 text-center text-[9px] font-pixel text-[#39ff14] tracking-wider uppercase opacity-80">
              AUTONOMOUS DEMO MODE • NO GAME OVER
            </div>
          </div>

          {/* SLANTED 3D CONTROL PANEL DECK */}
          <div className="relative bg-[#181832] border-4 border-black p-4 mt-4 shadow-[inset_0_4px_8px_rgba(255,255,255,0.1),0_6px_0_#000] rounded-b-lg">
            
            {/* Control Panel Label */}
            <div className="text-center mb-3">
              <span className="text-[9px] font-pixel text-slate-400 uppercase tracking-widest">
                PLAYER 1 CONTROL DECK
              </span>
            </div>

            <div className="flex items-center justify-between px-2 sm:px-6">
              
              {/* DECORATIVE 3D JOYSTICK */}
              <div className="relative flex flex-col items-center">
                {/* Joystick Ball Top */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#ff007f] to-[#99004d] border-2 border-black shadow-[3px_3px_0_#000] relative z-10">
                  <span className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/40"></span>
                </div>
                {/* Shaft */}
                <div className="w-2 h-5 bg-gradient-to-b from-slate-400 to-slate-700 border-x border-black -mt-1 z-0"></div>
                {/* Base Ring */}
                <div className="w-10 h-3 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] -mt-1"></div>
              </div>

              {/* DECORATIVE START / SELECT BUTTONS */}
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-[#222244] border-2 border-black text-[8px] font-pixel text-slate-400 shadow-[1px_1px_0_#000]">
                  SELECT
                </div>
                <div className="px-2 py-1 bg-[#ff007f]/20 border-2 border-[#ff007f] text-[8px] font-pixel text-[#ff007f] shadow-[1px_1px_0_#000]">
                  START
                </div>
              </div>

              {/* DECORATIVE 3D GLOSSY ARCADE PUSHBUTTONS (🔴 🟡 🔵) */}
              <div className="flex items-center gap-2">
                {/* Red Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#ff2a2a] to-[#990000] border-2 border-black shadow-[2px_2px_0_#000] relative">
                  <span className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/30"></span>
                </div>
                {/* Yellow Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#ffe600] to-[#998a00] border-2 border-black shadow-[2px_2px_0_#000] relative">
                  <span className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/30"></span>
                </div>
                {/* Blue Button */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#008899] border-2 border-black shadow-[2px_2px_0_#000] relative">
                  <span className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-white/30"></span>
                </div>
              </div>

            </div>
          </div>

          {/* LOWER METALLIC COIN DOOR HOUSING */}
          <div className="relative bg-[#101020] border-4 border-black p-3 mt-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Coin Slot */}
              <div className="w-10 h-6 bg-[#05050b] border-2 border-black flex items-center justify-center shadow-[inset_0_0_5px_rgba(0,0,0,1)]">
                <div className="w-1 h-4 bg-[#ffe600] animate-pulse"></div>
              </div>
              <div className="font-pixel text-[9px] text-[#ffe600] tracking-wider uppercase">
                INSERT COIN 🪙 25¢
              </div>
            </div>

            <div className="font-mono text-[10px] text-slate-500">
              SERIAL: YUGA26-8BIT
            </div>
          </div>

        </div>
      </div>

      {/* BELOW MACHINE CAPTION (Static, non-clickable) */}
      <div className="mt-4 text-center font-pixel text-xs text-slate-400 tracking-widest uppercase">
        INSERT COIN TO WATCH
      </div>

    </div>
  );
};
