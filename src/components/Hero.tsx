import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { PixelButton } from './PixelButton';
import { PixelBadge } from './PixelBadge';
import { ArcadeCabinet } from './ArcadeCabinet';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden border-b-4 border-black bg-[#0a0a14]">
      {/* BACKGROUND DECORATIONS: NIGHT SKY, STARS, CLOUDS */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050e] via-[#0d0d24] to-[#0a0a14] pointer-events-none"></div>

      {/* PIXEL STARS */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-10 left-[10%] w-1.5 h-1.5 bg-white animate-ping"></div>
        <div className="absolute top-20 left-[25%] w-2 h-2 bg-[#00f0ff] animate-pulse"></div>
        <div className="absolute top-14 right-[15%] w-2 h-2 bg-[#ff007f] animate-pulse"></div>
        <div className="absolute top-36 right-[35%] w-1.5 h-1.5 bg-[#ffe600] animate-ping"></div>
        <div className="absolute top-48 left-[45%] w-2 h-2 bg-white animate-pulse"></div>
      </div>

      {/* PIXEL CLOUDS */}
      <div className="absolute top-12 left-[5%] opacity-20 pointer-events-none animate-float">
        <div className="w-24 h-6 bg-slate-400 border-2 border-black shadow-[4px_4px_0_#000]"></div>
      </div>
      <div className="absolute top-20 right-[10%] opacity-20 pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-32 h-8 bg-slate-400 border-2 border-black shadow-[4px_4px_0_#000]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO MAIN BANNER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-block mb-4">
              <PixelBadge color="yellow" size="md">
                ⚡ LEVEL UP YOUR TECH CAREER
              </PixelBadge>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel uppercase tracking-tight leading-tight text-white mb-4">
              LEVEL UP AT <br />
              <span className="text-[#00f0ff] glow-cyan">TECH FEST</span> <br />
              <span className="text-[#ff007f] glow-pink">2026</span>
            </h1>

            <div className="bg-[#121226] border-2 border-[#39ff14] p-3 inline-block mb-6 shadow-[3px_3px_0_#000]">
              <p className="font-pixel text-xs sm:text-sm text-[#39ff14] tracking-widest">
                &gt; CODE. INNOVATE. ELEVATE.
              </p>
            </div>

            {/* EVENT METADATA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-[#121226] px-3 py-2 border-2 border-black shadow-[2px_2px_0_#000]">
                <Calendar className="w-4 h-4 text-[#ff007f]" />
                <span>August 29 – 31, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-[#121226] px-3 py-2 border-2 border-black shadow-[2px_2px_0_#000]">
                <MapPin className="w-4 h-4 text-[#00f0ff]" />
                <span>College Campus, Your City</span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <PixelButton
                variant="cyan"
                size="lg"
                onClick={() => scrollToSection('#events')}
                className="w-full sm:w-auto"
              >
                🎮 EXPLORE EVENTS
              </PixelButton>
              <PixelButton
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#schedule')}
                className="w-full sm:w-auto"
              >
                ⏱ VIEW SCHEDULE
              </PixelButton>
            </div>
          </div>

          {/* RIGHT VISUAL COLUMN: AUTONOMOUS 3D RETRO ARCADE CABINET */}
          <div className="lg:col-span-6 flex justify-center">
            <ArcadeCabinet />
          </div>

        </div>

      </div>
    </section>
  );
};
