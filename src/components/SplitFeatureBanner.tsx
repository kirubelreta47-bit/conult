import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Building2, 
  Award,
  Clock,
  Coins
} from 'lucide-react';

interface SplitFeatureBannerProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const SplitFeatureBanner: React.FC<SplitFeatureBannerProps> = ({
  onOpenQuote,
  onOpenEstimator
}) => {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Engineer with Tablet & Hard Hat Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                alt="Tibeb Consult Structural Engineer on Site in Addis Ababa" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Floating Engineer Badge in bottom-left */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-lg border border-amber-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-gray-900 flex items-center justify-center font-bold">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 font-sans">Eng. Dagnachew T. (PE)</div>
                  <div className="text-[11px] text-gray-500 font-mono">Lead Structural Resident Auditor</div>
                </div>
              </div>

              {/* Top Floating Badge ("CLASS 1 CONSULTANCY") */}
              <div className="absolute top-4 right-4 bg-amber-400 text-gray-950 text-xs font-bold font-mono px-3 py-1 rounded shadow-md">
                MoWUD CLASS-1 CERTIFIED
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Golden CTA Button (Matching Screenshot) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-gray-900 leading-tight">
                Don't Wait For anything. <br />
                <span className="text-gray-900">Build it right today!</span>
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-amber-600 mt-1 uppercase tracking-wider font-mono">
                Do creative & resilient engineering for your development
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              We eliminate costly foundation settlement, structural rebar congestion, and speculative contractor claims. Our on-site resident engineers uphold the highest international FIDIC and Ethiopian Building Code standards from ground-breaking to occupancy handover.
            </p>

            {/* Value Props Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900">Zero Structural Failures in 14 Years:</span>
                  <p className="text-xs text-gray-500">Peer-reviewed finite element models and relentless pre-pour slump testing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900">Average 18.4% Capital Saved:</span>
                  <p className="text-xs text-gray-500">Value engineering steel tonnage and auditing contractor interim payment takeoffs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900">Subsurface Geotechnical Defense:</span>
                  <p className="text-xs text-gray-500">Specialized black cotton clay moisture barriers and high-capacity bored friction piles.</p>
                </div>
              </div>
            </div>

            {/* Golden Action Button ("SHOP NOW" / "CONSULT NOW") */}
            <div className="pt-2 flex items-center gap-4">
              <button
                id="banner-quote-btn"
                onClick={onOpenQuote}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                CONSULT NOW
              </button>

              <button
                id="banner-estimator-btn"
                onClick={onOpenEstimator}
                className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-gray-950 hover:bg-gray-100 rounded border border-gray-300 transition-colors cursor-pointer"
              >
                CALCULATE SAVINGS
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
