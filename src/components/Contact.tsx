import React from 'react';
import { Phone, MapPin, ExternalLink, Instagram, User, ShieldCheck, MessageSquare, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { FACULTY_COORDINATORS, STUDENT_COORDINATORS, VENUE_INFO, SOCIAL_LINKS } from '../data/contacts';
import { playCyberClick } from '../utils/sound';

export const Contact: React.FC = () => {
  const handleOpenMap = () => {
    playCyberClick();
    window.open(VENUE_INFO.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyber-cyan text-xs font-mono mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span>COMMUNICATION LINK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-cyber font-black tracking-tight text-white uppercase mb-4"
          >
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyber-cyan to-cyber-pink glow-cyan">TOUCH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base font-sans"
          >
            Connect directly with our faculty mentors, student convenors, or reach our campus coordination desk.
          </motion.p>
        </div>

        {/* 4-COLUMN CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. FACULTY COORDINATORS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-cyan-400/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-cyber-cyan font-cyber font-bold text-xs uppercase tracking-wider mb-5 pb-3 border-b border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyber-cyan" />
                <span>FACULTY MENTORS</span>
              </div>

              <div className="space-y-4">
                {FACULTY_COORDINATORS.map((faculty, idx) => (
                  <div key={idx} className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800">
                    <h4 className="font-cyber font-bold text-xs text-white uppercase mb-0.5">
                      {faculty.name}
                    </h4>
                    <p className="text-[11px] font-mono text-cyan-300 mb-2">
                      {faculty.role}
                    </p>
                    <a
                      href={`tel:${faculty.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyber-cyan transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{faculty.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. STUDENT COORDINATORS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-pink-400/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-cyber-pink font-cyber font-bold text-xs uppercase tracking-wider mb-5 pb-3 border-b border-slate-800">
                <User className="w-4 h-4 text-cyber-pink" />
                <span>STUDENT CONVENORS</span>
              </div>

              <div className="space-y-4">
                {STUDENT_COORDINATORS.map((student, idx) => (
                  <div key={idx} className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800">
                    <div className="flex items-center justify-between mb-0.5">
                      <h4 className="font-cyber font-bold text-xs text-white uppercase">
                        {student.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/50 text-cyber-pink border border-pink-500/30">
                        {student.role}
                      </span>
                    </div>
                    <a
                      href={`tel:${student.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyber-pink transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyber-pink" />
                      <span>{student.phone}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. INSTAGRAM & SOCIAL CHANNELS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-amber-400/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-300 font-cyber font-bold text-xs uppercase tracking-wider mb-5 pb-3 border-b border-slate-800">
                <Instagram className="w-4 h-4 text-amber-300" />
                <span>OFFICIAL CHANNEL</span>
              </div>

              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-4">
                Follow our official festival feed for live story drops, competition problem statements, and behind-the-scenes.
              </p>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/50 group transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">INSTAGRAM</div>
                  <div className="font-cyber font-bold text-xs text-white group-hover:text-cyber-pink transition-colors">
                    @{SOCIAL_LINKS.instagramHandle}
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              ⚡ Direct message for sponsor inquiries.
            </div>
          </motion.div>

          {/* 4. VENUE LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-slate-700/60 hover:border-emerald-400/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-cyber font-bold text-xs uppercase tracking-wider mb-5 pb-3 border-b border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>VENUE INTEL</span>
              </div>

              <h4 className="font-cyber font-bold text-sm text-white mb-2">
                {VENUE_INFO.name}
              </h4>
              <p className="text-slate-300 text-xs font-sans leading-relaxed mb-3">
                {VENUE_INFO.address}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 mb-6 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>{VENUE_INFO.landmark}</span>
              </div>
            </div>

            <button
              onClick={handleOpenMap}
              className="w-full cyber-btn cyber-btn-outline text-xs py-3 flex items-center justify-center gap-2"
            >
              <span>OPEN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
