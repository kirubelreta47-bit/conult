import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, HardHat, Building2, ShieldCheck } from 'lucide-react';
import { PARTNER_LOGOS } from '../data';

export const HardhatPartnersBanner: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-white text-gray-900 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        
        {/* Website URL Watermark Matching Screenshot */}
        <div className="mb-4">
          <span className="text-lg sm:text-2xl font-bold font-sans tracking-wide text-amber-500/80 hover:text-amber-500 transition-colors">
            www.tibebconsult.et
          </span>
        </div>

        {/* Scroll To Top Button Circle */}
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-400 text-gray-600 hover:text-gray-950 flex items-center justify-center transition-colors mb-6 shadow-sm cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Central Iconic Yellow Construction Helmet with Soft Shadow (Matching Screenshot) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-48 sm:w-64 h-36 flex items-center justify-center mb-16"
        >
          {/* Ground shadow */}
          <div className="absolute bottom-2 w-48 h-6 bg-black/15 rounded-full blur-md" />

          {/* 3D Rendered Yellow Hard Hat Vector */}
          <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hard Hat Base Dome */}
            <path d="M50 145 C50 65, 250 65, 250 145 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="4" />
            {/* 3D Top Ridge Highlight */}
            <path d="M142 70 C142 65, 158 65, 158 70 L160 145 L140 145 Z" fill="#fef08a" />
            {/* Brim */}
            <path d="M25 145 C25 138, 275 138, 275 145 L265 162 C265 162, 35 162, 35 162 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
            {/* Front Badge */}
            <circle cx="150" cy="115" r="14" fill="#181a1f" stroke="#ca8a04" strokeWidth="2" />
            <path d="M144 115 L148 119 L156 111" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Monochrome Partner / Client Brand Logos Strip Matching Screenshot */}
        <div className="w-full max-w-5xl pt-4 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
            {PARTNER_LOGOS.map((partner) => (
              <div 
                key={partner.id} 
                className="flex flex-col items-center justify-center p-3 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <span className="font-condensed font-bold text-lg tracking-widest uppercase">
                  {partner.name}
                </span>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-tight">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
