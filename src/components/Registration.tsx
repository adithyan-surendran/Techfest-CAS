import React, { useState } from 'react';
import { Calendar, Users, QrCode, Sparkles, CheckCircle2, Trophy, Maximize2, X } from 'lucide-react';
import { PixelHeading } from './PixelHeading';
import { PixelButton } from './PixelButton';
import { PixelCard } from './PixelCard';
import { playSelectSound } from '../utils/sound';

export const Registration: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleRegisterClick = () => {
    playSelectSound();
    const eventsEl = document.querySelector('#events');
    if (eventsEl) {
      eventsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-[#0d0d24] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <PixelHeading
          title="REGISTRATION HUB"
          subtitle="Secure your slot for TECH FEST 2026 before registration closes!"
          icon="⭐"
          accentColor="pink"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CARDS: EVENT DETAILS & PERKS */}
          <div className="lg:col-span-7 space-y-6">
            <PixelCard variant="pink">
              <h3 className="font-pixel text-lg sm:text-2xl text-white uppercase mb-2">
                READY TO JOIN?
              </h3>
              <p className="text-slate-300 font-mono text-xs sm:text-sm leading-relaxed mb-6">
                Register individually or assemble your squad. Choose from 7+ exciting coding, hackathon, robotics, and esports tournaments!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs mb-6">
                <div className="bg-[#0a0a14] p-3 border-2 border-black flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#ff007f] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">DEADLINE</span>
                    <span className="text-white font-bold">August 25, 2026</span>
                  </div>
                </div>

                <div className="bg-[#0a0a14] p-3 border-2 border-black flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#00f0ff] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">ELIGIBILITY</span>
                    <span className="text-white font-bold">All Students</span>
                  </div>
                </div>

                <div className="bg-[#0a0a14] p-3 border-2 border-black flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#39ff14] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">REGISTRATION TYPE</span>
                    <span className="text-white font-bold">Individual & Team</span>
                  </div>
                </div>

                <div className="bg-[#0a0a14] p-3 border-2 border-black flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-[#ffe600] shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">REWARDS</span>
                    <span className="text-white font-bold">Prizes & Certificates</span>
                  </div>
                </div>
              </div>

              {/* PERKS LIST */}
              <div className="space-y-2 mb-6 text-xs font-mono text-slate-300 bg-[#0a0a14]/60 p-4 border border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#39ff14]" />
                  <span>Official Tech Fest Swag Kit & Digital Badges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#39ff14]" />
                  <span>Access to all technical keynotes & workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#39ff14]" />
                  <span>Individual Google Form link per competition</span>
                </div>
              </div>

              <PixelButton
                variant="cyan"
                size="lg"
                onClick={handleRegisterClick}
                className="w-full sm:w-auto"
              >
                🎮 REGISTER FOR AN EVENT
              </PixelButton>
            </PixelCard>
          </div>

          {/* RIGHT COLUMN: PIXEL QR CODE & SCANNER CONTAINER */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="bg-[#121226] border-4 border-black p-6 shadow-[6px_6px_0_#000] text-center w-full max-w-sm">
              <span className="font-pixel text-xs text-[#ffe600] block mb-3 uppercase tracking-wider">
                SCAN TO REGISTER ON MOBILE
              </span>

              {/* RETRO PIXEL QR CODE DISPLAY */}
              <div
                onClick={() => {
                  playSelectSound();
                  setQrModalOpen(true);
                }}
                className="relative bg-white p-4 border-4 border-black inline-block shadow-[4px_4px_0_#000] cursor-pointer group mb-4"
                title="Click to view enlarged QR Code"
              >
                {/* SVG Pixel QR Code Graphic */}
                <svg className="w-44 h-44 sm:w-48 sm:h-48" viewBox="0 0 100 100" fill="none">
                  {/* Outer corner finders */}
                  <rect x="5" y="5" width="25" height="25" fill="black" />
                  <rect x="9" y="9" width="17" height="17" fill="white" />
                  <rect x="13" y="13" width="9" height="9" fill="black" />

                  <rect x="70" y="5" width="25" height="25" fill="black" />
                  <rect x="74" y="9" width="17" height="17" fill="white" />
                  <rect x="78" y="13" width="9" height="9" fill="black" />

                  <rect x="5" y="70" width="25" height="25" fill="black" />
                  <rect x="9" y="74" width="17" height="17" fill="white" />
                  <rect x="13" y="78" width="9" height="9" fill="black" />

                  {/* Pixel dots matrix */}
                  <rect x="35" y="10" width="6" height="6" fill="black" />
                  <rect x="45" y="10" width="6" height="6" fill="#ff007f" />
                  <rect x="55" y="10" width="6" height="6" fill="black" />
                  
                  <rect x="35" y="20" width="6" height="6" fill="black" />
                  <rect x="55" y="20" width="6" height="6" fill="#00f0ff" />
                  
                  <rect x="10" y="35" width="6" height="6" fill="black" />
                  <rect x="25" y="35" width="6" height="6" fill="black" />
                  <rect x="40" y="35" width="6" height="6" fill="black" />
                  <rect x="60" y="35" width="6" height="6" fill="black" />
                  <rect x="80" y="35" width="6" height="6" fill="black" />

                  <rect x="40" y="45" width="20" height="20" fill="#0a0a14" />
                  <circle cx="50" cy="55" r="5" fill="#00f0ff" />

                  <rect x="10" y="55" width="6" height="6" fill="black" />
                  <rect x="25" y="55" width="6" height="6" fill="#ff007f" />
                  <rect x="65" y="55" width="6" height="6" fill="black" />
                  <rect x="85" y="55" width="6" height="6" fill="black" />

                  <rect x="35" y="75" width="6" height="6" fill="black" />
                  <rect x="45" y="75" width="6" height="6" fill="black" />
                  <rect x="65" y="75" width="6" height="6" fill="black" />
                  <rect x="80" y="75" width="6" height="6" fill="black" />
                </svg>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-8 h-8 text-[#00f0ff]" />
                </div>
              </div>

              <p className="text-[11px] font-mono text-slate-400">
                Direct link to event catalog & Google Forms portal.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* QR MODAL */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121226] border-4 border-black p-6 max-w-sm w-full text-center relative shadow-[8px_8px_0_#000]">
            <button
              onClick={() => setQrModalOpen(false)}
              className="absolute top-2 right-2 p-1 bg-[#0a0a14] border border-black text-slate-300 hover:text-[#ff007f]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-pixel text-sm text-[#00f0ff] uppercase mb-4">REGISTRATION QR CODE</h3>
            <div className="bg-white p-4 border-4 border-black inline-block mb-4">
              <svg className="w-64 h-64" viewBox="0 0 100 100" fill="none">
                <rect x="5" y="5" width="25" height="25" fill="black" />
                <rect x="9" y="9" width="17" height="17" fill="white" />
                <rect x="13" y="13" width="9" height="9" fill="black" />

                <rect x="70" y="5" width="25" height="25" fill="black" />
                <rect x="74" y="9" width="17" height="17" fill="white" />
                <rect x="78" y="13" width="9" height="9" fill="black" />

                <rect x="5" y="70" width="25" height="25" fill="black" />
                <rect x="9" y="74" width="17" height="17" fill="white" />
                <rect x="13" y="78" width="9" height="9" fill="black" />

                <rect x="35" y="10" width="6" height="6" fill="black" />
                <rect x="45" y="10" width="6" height="6" fill="#ff007f" />
                <rect x="55" y="10" width="6" height="6" fill="black" />

                <rect x="40" y="45" width="20" height="20" fill="#0a0a14" />
                <circle cx="50" cy="55" r="5" fill="#00f0ff" />
              </svg>
            </div>
            <p className="text-xs font-mono text-slate-300">
              Scan using any mobile camera or Google Lens to open the portal.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
