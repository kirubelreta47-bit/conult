import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Wrench, 
  Hammer, 
  Ruler, 
  Building2, 
  Layers, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenEstimator }) => {
  return (
    <section 
      id="top"
      className="relative bg-gradient-to-br from-[#f6ad28] via-[#e59819] to-[#d9870d] text-gray-950 overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* Background Crane & Scaffolding Line Art Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" fill="none" stroke="currentColor">
          {/* Construction Cranes */}
          <path d="M150 600 L150 120 L350 40 L1100 40 M350 40 L350 120 L150 120" strokeWidth="3" stroke="#000" />
          <path d="M350 40 L500 120 M500 40 L650 120 M650 40 L800 120 M800 40 L950 120 M950 40 L1100 120" strokeWidth="1.5" stroke="#000" />
          <line x1="850" y1="40" x2="850" y2="280" stroke="#000" strokeWidth="2" strokeDasharray="4 4" />
          <rect x="835" y="280" width="30" height="40" fill="#000" opacity="0.3" />
          
          {/* Secondary Crane Right */}
          <path d="M1250 600 L1250 180 L1420 100 L950 100" strokeWidth="2.5" stroke="#000" />
          <path d="M1250 180 L1150 100 M1150 180 L1050 100" strokeWidth="1.5" stroke="#000" />
          
          {/* Scaffolding grid patterns */}
          <g stroke="#000" strokeWidth="1" opacity="0.4">
            <line x1="50" y1="400" x2="50" y2="600" />
            <line x1="100" y1="400" x2="100" y2="600" />
            <line x1="50" y1="450" x2="100" y2="450" />
            <line x1="50" y1="520" x2="100" y2="520" />
            <line x1="50" y1="400" x2="100" y2="450" />
            <line x1="100" y1="400" x2="50" y2="450" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Top Subtitle Pill */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-900 font-mono">
                WE ARE STARTUP BUSINESS
              </span>
            </div>

            {/* Big Bold Headline matching screenshot */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-condensed tracking-tight uppercase leading-[1.05] text-gray-950">
              BUILDING WORLD <br />
              <span className="text-gray-950">TOGETHER</span>
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-gray-900/90 max-w-xl font-normal leading-relaxed">
              Engineering high-rise resilience, structural integrity, and cost certainty across Addis Ababa’s complex geological landscape. From geotechnical borehole validations to full-cycle FIDIC supervision.
            </p>

            {/* Primary Action Button ("PURCHASE THEME" / "REQUEST CONSULTATION" in Dark Charcoal) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-primary-cta"
                onClick={onOpenQuote}
                className="px-7 py-3.5 bg-[#181a1f] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                REQUEST CONSULTATION
              </button>

              <button
                id="hero-estimator-cta"
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-white/80 hover:bg-white text-gray-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                EVALUATE SITE RISK
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-gray-950/15">
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold font-condensed text-gray-950">14+ YRS</div>
                <div className="text-[11px] text-gray-900/80 font-medium">Addis Experience</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold font-condensed text-gray-950">CLASS 1</div>
                <div className="text-[11px] text-gray-900/80 font-medium">MoWUD Certified</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold font-condensed text-gray-950">ZERO</div>
                <div className="text-[11px] text-gray-900/80 font-medium">Structural Failures</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual: 3D Construction Builder Character & Gear Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square flex items-center justify-center">
              
              {/* Decorative dynamic background glow & rings */}
              <div className="absolute w-72 h-72 rounded-full bg-amber-300/40 blur-2xl animate-pulse" />
              
              {/* Construction 3D Builder Illustration Vector Canvas */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <svg className="w-full h-full max-w-[420px] drop-shadow-2xl" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle ground shadow */}
                  <ellipse cx="250" cy="460" rx="160" ry="24" fill="#000" opacity="0.25" filter="blur(8px)" />

                  {/* Character Body (Safety overall & gear) */}
                  <g id="builder-character">
                    {/* Legs & Industrial Work Boots */}
                    <path d="M190 340 L175 440 L215 450 L225 350 Z" fill="#3a4149" stroke="#1f2429" strokeWidth="4" />
                    <path d="M310 340 L325 440 L285 450 L275 350 Z" fill="#3a4149" stroke="#1f2429" strokeWidth="4" />
                    {/* Boot soles */}
                    <rect x="160" y="435" width="60" height="22" rx="6" fill="#181a1f" />
                    <rect x="280" y="435" width="60" height="22" rx="6" fill="#181a1f" />

                    {/* Torso & High-Vis Safety Vest */}
                    <path d="M180 220 L320 220 L335 345 L165 345 Z" fill="#2d3748" />
                    {/* High-vis Yellow & Orange Vest */}
                    <path d="M175 220 L230 220 L220 345 L165 345 Z" fill="#facc15" />
                    <path d="M325 220 L270 220 L280 345 L335 345 Z" fill="#facc15" />
                    {/* Reflective silver stripes */}
                    <rect x="172" y="260" width="156" height="18" fill="#e2e8f0" stroke="#cbd5e1" />
                    <rect x="170" y="300" width="160" height="18" fill="#e2e8f0" stroke="#cbd5e1" />

                    {/* Leather Heavy-Duty Tool Belt */}
                    <rect x="155" y="335" width="190" height="26" rx="4" fill="#854d0e" stroke="#713f12" strokeWidth="3" />
                    <rect x="235" y="331" width="30" height="34" rx="4" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                    {/* Tool Pouches */}
                    <rect x="160" y="360" width="45" height="50" rx="4" fill="#92400e" stroke="#78350f" strokeWidth="2" />
                    <rect x="295" y="360" width="45" height="50" rx="4" fill="#92400e" stroke="#78350f" strokeWidth="2" />

                    {/* Floating Tools in belt */}
                    {/* Hammer */}
                    <g transform="translate(140, 310) rotate(-25)">
                      <rect x="0" y="20" width="12" height="75" rx="3" fill="#d97706" stroke="#78350f" strokeWidth="2" />
                      <path d="M-12 5 L24 5 L28 20 L-16 20 Z" fill="#64748b" stroke="#334155" strokeWidth="3" />
                      <path d="M-16 10 L-26 18 L-22 22 L-12 18 Z" fill="#64748b" />
                    </g>
                    {/* Screwdriver & Pliers */}
                    <g transform="translate(340, 310) rotate(20)">
                      <rect x="0" y="25" width="10" height="60" rx="2" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                      <rect x="3" y="0" width="4" height="25" fill="#94a3b8" />
                      <polygon points="1,0 9,0 5,-6" fill="#64748b" />
                    </g>
                    {/* Blueprint roll */}
                    <g transform="translate(310, 360) rotate(45)">
                      <rect x="0" y="0" width="22" height="70" rx="11" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                      <ellipse cx="11" cy="5" rx="8" ry="4" fill="#bae6fd" />
                    </g>

                    {/* Head, Face, Safety Glasses */}
                    <circle cx="250" cy="170" r="45" fill="#fbcfe8" />
                    {/* Chin & Neck */}
                    <rect x="235" y="200" width="30" height="25" fill="#f472b6" opacity="0.4" />
                    {/* Safety Glasses */}
                    <rect x="215" y="155" width="30" height="18" rx="4" fill="#38bdf8" opacity="0.8" stroke="#0369a1" strokeWidth="2" />
                    <rect x="255" y="155" width="30" height="18" rx="4" fill="#38bdf8" opacity="0.8" stroke="#0369a1" strokeWidth="2" />
                    <line x1="245" y1="164" x2="255" y2="164" stroke="#0369a1" strokeWidth="3" />

                    {/* Iconic Bright Yellow Construction Helmet with 3D Gloss */}
                    <g id="hard-hat-3d">
                      {/* Helmet dome */}
                      <path d="M190 150 C190 85, 310 85, 310 150 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="4" />
                      {/* 3D Highlight ridge */}
                      <path d="M242 90 C242 85, 258 85, 258 90 L260 148 L240 148 Z" fill="#fef08a" />
                      {/* Helmet brim */}
                      <path d="M170 148 C170 142, 330 142, 330 148 L320 162 C320 162, 180 162, 180 162 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="3" />
                      {/* Chin strap */}
                      <path d="M195 155 Q250 215 305 155" stroke="#713f12" strokeWidth="3" fill="none" />
                    </g>

                    {/* Floating Construction Accessories / Icons around builder */}
                    {/* Floating Digital Tablet with Blueprint */}
                    <g transform="translate(100, 180) rotate(-12)">
                      <rect x="0" y="0" width="70" height="90" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
                      <rect x="6" y="8" width="58" height="74" rx="2" fill="#0284c7" />
                      {/* Blueprint grid lines on tablet */}
                      <line x1="12" y1="20" x2="58" y2="20" stroke="#bae6fd" strokeWidth="2" />
                      <line x1="12" y1="35" x2="45" y2="35" stroke="#bae6fd" strokeWidth="1.5" />
                      <line x1="12" y1="50" x2="54" y2="50" stroke="#bae6fd" strokeWidth="1.5" />
                      <circle cx="50" cy="65" r="5" fill="#38bdf8" />
                    </g>

                    {/* Floating Calipers / Tape Measure */}
                    <g transform="translate(360, 190) rotate(15)">
                      <rect x="0" y="0" width="45" height="45" rx="10" fill="#f59e0b" stroke="#b45309" strokeWidth="3" />
                      <circle cx="22" cy="22" r="12" fill="#1e293b" />
                      <rect x="42" y="18" width="22" height="8" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Floating Badge on Visual ("100% QUALITY ASSURED") */}
              <div className="absolute -bottom-2 -left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-amber-200 px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-sans text-gray-900 uppercase">Certified Quality</div>
                  <div className="text-[11px] text-gray-600 font-mono">EBCS & FIDIC Compliant</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom wave / separator */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-white" />
    </section>
  );
};
