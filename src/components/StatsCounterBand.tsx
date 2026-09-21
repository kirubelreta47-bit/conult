import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  Heart, 
  Building, 
  Users, 
  Compass, 
  Award,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface StatItem {
  id: string;
  icon: 'heart' | 'building' | 'engineers' | 'branches';
  value: number;
  formatted: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    id: 'stat-clients',
    icon: 'heart',
    value: 5120,
    formatted: '5120',
    label: 'HAPPY CUSTOMERS'
  },
  {
    id: 'stat-projects',
    icon: 'building',
    value: 4351,
    formatted: '4351',
    label: 'COMPLETED PROJECTS'
  },
  {
    id: 'stat-engineers',
    icon: 'engineers',
    value: 1200,
    formatted: '1200',
    label: 'BEST ENGINEERS'
  },
  {
    id: 'stat-branches',
    icon: 'branches',
    value: 98,
    formatted: '098',
    label: 'OUR BRANCHES'
  }
];

export const StatsCounterBand: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-clients': 0,
    'stat-projects': 0,
    'stat-engineers': 0,
    'stat-branches': 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800; // ms
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // easeOutQuad
      const factor = progress * (2 - progress);

      setCounts({
        'stat-clients': Math.floor(5120 * factor),
        'stat-projects': Math.floor(4351 * factor),
        'stat-engineers': Math.floor(1200 * factor),
        'stat-branches': Math.floor(98 * factor),
      });

      if (step >= steps) {
        setCounts({
          'stat-clients': 5120,
          'stat-projects': 4351,
          'stat-engineers': 1200,
          'stat-branches': 98,
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-r from-[#f5a623] via-[#e59b1e] to-[#f39c12] py-16 sm:py-20 text-gray-950 overflow-hidden"
    >
      {/* Background Crane & Scaffolding Silhouette Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" fill="none" stroke="#000">
          <path d="M0 250 L300 50 L600 250 M300 50 L300 250" strokeWidth="2" />
          <path d="M700 280 L900 30 L1400 30 M900 30 L900 280" strokeWidth="2.5" />
          <line x1="1100" y1="30" x2="1100" y2="180" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, idx) => {
            const displayValue = stat.id === 'stat-branches' 
              ? counts[stat.id] < 100 
                ? `0${counts[stat.id]}`.slice(-3) 
                : counts[stat.id]
              : counts[stat.id];

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Rounded dark circular outline icon matching screenshot */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-transparent border-2 border-gray-950/80 flex items-center justify-center mb-4 group-hover:bg-gray-950 group-hover:text-amber-400 transition-all duration-300">
                  {stat.icon === 'heart' && <Heart className="w-6 h-6 stroke-[2] fill-transparent" />}
                  {stat.icon === 'building' && <Building className="w-6 h-6 stroke-[2]" />}
                  {stat.icon === 'engineers' && <Users className="w-6 h-6 stroke-[2]" />}
                  {stat.icon === 'branches' && <Compass className="w-6 h-6 stroke-[2]" />}
                </div>

                {/* Big Bold Numerical Count */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-gray-950 mb-1">
                  {displayValue}
                </div>

                {/* Subtitle Label */}
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-950/80 font-mono">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
