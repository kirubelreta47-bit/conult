import React from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  Truck, 
  Drill, 
  Hammer, 
  Ruler, 
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { CORE_DISCIPLINES, CoreDiscipline } from '../data';

interface CoreDisciplinesSectionProps {
  onSelectDiscipline: (serviceTitle: string) => void;
}

export const CoreDisciplinesSection: React.FC<CoreDisciplinesSectionProps> = ({
  onSelectDiscipline
}) => {
  return (
    <section id="services-section" className="py-20 sm:py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header (Matching exact style from screenshot: "Stay motivated to lead your business.") */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 tracking-tight">
            Stay motivated <br className="sm:hidden" />
            <span className="text-amber-500 font-bold">to lead your business.</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Comprehensive geotechnical, structural, and cost engineering services calibrated for high-altitude construction in Addis Ababa.
          </p>
        </div>

        {/* 3-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {CORE_DISCIPLINES.map((discipline, idx) => (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => onSelectDiscipline(discipline.linkService)}
              className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              {/* Minimalist Illustrative Icon Circle */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center relative">
                {/* Background soft circle */}
                <div className="w-16 h-16 rounded-full bg-amber-50 group-hover:bg-amber-100 transition-colors flex items-center justify-center">
                  {discipline.iconType === 'floors' && (
                    <div className="relative">
                      <Building className="w-9 h-9 text-sky-600" />
                      <div className="w-4 h-4 rounded-sm bg-amber-400 absolute -top-1 -right-1 opacity-80" />
                    </div>
                  )}

                  {discipline.iconType === 'rooms' && (
                    <div className="relative">
                      <Truck className="w-9 h-9 text-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-500 absolute top-0 right-0" />
                    </div>
                  )}

                  {discipline.iconType === 'basements' && (
                    <div className="relative">
                      <Drill className="w-9 h-9 text-slate-700" />
                      <div className="w-3 h-3 rounded-full bg-amber-400 absolute -bottom-1 -right-1" />
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-sans text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {discipline.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs mb-5">
                {discipline.description}
              </p>

              {/* Subfeature chips */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {discipline.subfeatures.map((feat, fIdx) => (
                  <span 
                    key={fIdx} 
                    className="text-[11px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Hover action indicator */}
              <div className="mt-4 text-xs font-semibold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <span>View Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
