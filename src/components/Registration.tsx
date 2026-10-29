import React, { useState } from 'react';
import { Calendar, Users, Sparkles, CheckCircle2, Trophy, Maximize2, X, ExternalLink } from 'lucide-react';
import { PixelHeading } from './PixelHeading';
import { PixelButton } from './PixelButton';
import { PixelCard } from './PixelCard';
import { playSelectSound } from '../utils/sound';

export const Registration: React.FC = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const handleRegisterClick = () => {
    playSelectSound();
    window.open('https://forms.gle/uTT3CkMsFMK68Pve9', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-[#0d0d24] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <PixelHeading
          title="REGISTRATION HUB"
          subtitle="Secure your slot for YUGA'26 before registration closes!"
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
                  <span>Official YUGA'26 Swag Kit & Digital Badges</span>
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
                className="relative bg-white p-3 border-4 border-black inline-block shadow-[4px_4px_0_#000] cursor-pointer group mb-3"
                title="Click to view enlarged QR Code"
              >
                <img
                  src="/registration-qr.png"
                  alt="YUGA'26 Registration QR Code"
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Maximize2 className="w-8 h-8 text-[#00f0ff]" />
                </div>
              </div>

              {/* DIRECT REGISTRATION BUTTON UNDER QR */}
              <div className="w-full mt-3 mb-3">
                <PixelButton
                  variant="yellow"
                  size="sm"
                  asLink={true}
                  href="https://forms.gle/uTT3CkMsFMK68Pve9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  ⚡ OPEN GOOGLE FORM <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </PixelButton>
              </div>

              <p className="text-[11px] font-mono text-slate-400">
                Scan with camera or click the button above to register.
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
              aria-label="Close QR Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-pixel text-sm text-[#00f0ff] uppercase mb-4">REGISTRATION QR CODE</h3>
            <div className="bg-white p-4 border-4 border-black inline-block mb-4">
              <img
                src="/registration-qr.png"
                alt="YUGA'26 Registration QR Code"
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>
            <a
              href="https://forms.gle/uTT3CkMsFMK68Pve9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#00f0ff] text-black font-pixel text-xs border-2 border-black shadow-[2px_2px_0_#000] hover:bg-[#39ff14] mb-3 transition-colors"
            >
              <span>OPEN GOOGLE FORM</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs font-mono text-slate-300">
              Scan with any mobile camera or Google Lens to register.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
