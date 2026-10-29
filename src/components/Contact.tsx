import React from 'react';
import { Phone, MapPin, ExternalLink, Instagram, User, ShieldCheck } from 'lucide-react';
import { FACULTY_COORDINATORS, STUDENT_COORDINATORS, VENUE_INFO, SOCIAL_LINKS } from '../data/contacts';
import { PixelHeading } from './PixelHeading';
import { PixelCard } from './PixelCard';
import { PixelButton } from './PixelButton';
import { playSelectSound } from '../utils/sound';

export const Contact: React.FC = () => {
  const handleOpenMap = () => {
    playSelectSound();
    window.open(VENUE_INFO.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0a0a14] border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <PixelHeading
          title="CONTACT US"
          subtitle="Have questions? Reach out to our faculty & student coordination team."
          icon="💬"
          accentColor="green"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* FACULTY COORDINATORS */}
          <PixelCard variant="cyan" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#00f0ff] font-pixel text-xs border-b border-slate-800 pb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>FACULTY COORDINATORS</span>
              </div>

              {FACULTY_COORDINATORS.map((faculty, idx) => (
                <div key={idx} className="mb-4 last:mb-0 bg-[#0a0a14] p-3 border-2 border-black">
                  <h4 className="font-pixel text-xs text-white uppercase mb-1">{faculty.name}</h4>
                  <p className="text-[11px] font-mono text-[#ffe600] mb-2">{faculty.role}</p>

                  <div className="space-y-1.5 font-mono text-xs text-slate-300">
                    <a
                      href={`tel:${faculty.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 hover:text-[#00f0ff] transition-colors py-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#39ff14]" />
                      <span>{faculty.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>

          {/* STUDENT COORDINATORS */}
          <PixelCard variant="pink" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#ff007f] font-pixel text-xs border-b border-slate-800 pb-2">
                <User className="w-4 h-4" />
                <span>STUDENT COORDINATORS</span>
              </div>

              <div className="space-y-4">
                {STUDENT_COORDINATORS.map((student, idx) => (
                  <div key={idx} className="bg-[#0a0a14] p-3 border-2 border-black">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-pixel text-xs text-white uppercase">{student.name}</h4>
                      <span className="text-[9px] font-mono text-[#39ff14]">{student.role}</span>
                    </div>
                    <a
                      href={`tel:${student.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-[#00f0ff] transition-colors mt-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
                      <span>{student.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </PixelCard>

          {/* GET IN TOUCH - INSTAGRAM ONLY */}
          <PixelCard variant="yellow" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#ffe600] font-pixel text-xs border-b border-slate-800 pb-2">
                <Instagram className="w-4 h-4" />
                <span>FOLLOW US</span>
              </div>

              <p className="text-slate-300 font-mono text-xs mb-4">
                Follow our official Instagram page for announcements, event updates, and queries.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#0a0a14] border-2 border-black hover:border-[#ff007f] text-slate-300 hover:text-[#ff007f] shadow-[2px_2px_0_#000] transition-all group"
                >
                  <div className="p-2 bg-[#ff007f]/10 border border-[#ff007f] text-[#ff007f] group-hover:bg-[#ff007f] group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400">INSTAGRAM</span>
                    <span className="font-pixel text-xs text-white group-hover:text-[#ff007f]">@{SOCIAL_LINKS.instagramHandle}</span>
                  </div>
                </a>
              </div>
            </div>
          </PixelCard>

          {/* VENUE LOCATION */}
          <PixelCard variant="green" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#39ff14] font-pixel text-xs border-b border-slate-800 pb-2">
                <MapPin className="w-4 h-4" />
                <span>VENUE</span>
              </div>

              <h4 className="font-pixel text-xs text-white uppercase mb-2">
                {VENUE_INFO.name}
              </h4>
              <p className="text-slate-300 font-mono text-xs mb-3 leading-relaxed">
                {VENUE_INFO.address}
              </p>
              <p className="text-[11px] font-mono text-[#ffe600] mb-6">
                📍 Landmark: {VENUE_INFO.landmark}
              </p>
            </div>

            <PixelButton
              variant="green"
              size="md"
              onClick={handleOpenMap}
              className="w-full"
            >
              [ VIEW LOCATION ] <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </PixelButton>
          </PixelCard>

        </div>

      </div>
    </section>
  );
};
