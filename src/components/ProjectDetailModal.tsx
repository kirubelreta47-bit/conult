import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Building2, Calendar, HardHat, CheckCircle2, Ruler, ShieldAlert } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenQuote
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        id="project-detail-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl my-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 text-gray-900"
        >
          {/* Top Banner Image with Title */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-amber-400 text-gray-950 font-bold font-mono text-xs px-3 py-1 rounded shadow">
                {project.category}
              </span>
              <span className="bg-black/60 backdrop-blur-sm text-white font-mono text-xs px-2.5 py-1 rounded">
                COMPLETED {project.year}
              </span>
            </div>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold font-sans uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-300 font-mono flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{project.location}</span>
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Engineering Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs">
              <div>
                <span className="text-gray-400 font-mono block">BUILT AREA</span>
                <span className="font-bold text-gray-900 text-sm">{project.area}</span>
              </div>
              <div>
                <span className="text-gray-400 font-mono block">CLIENT</span>
                <span className="font-bold text-gray-900 text-sm truncate block">{project.client}</span>
              </div>
              <div>
                <span className="text-gray-400 font-mono block">SCOPE</span>
                <span className="font-bold text-amber-600 text-sm">{project.subcategory || 'Structural Peer Review'}</span>
              </div>
              <div>
                <span className="text-gray-400 font-mono block">VERIFICATION</span>
                <span className="font-bold text-emerald-600 text-sm">EBCS-EN 1998</span>
              </div>
            </div>

            {/* Executive Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono mb-2">
                Executive Engineering Summary
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 font-mono">
                Key Structural & Geotechnical Interventions
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Seismic ductility reinforcement detailing compliant with Ethiopian Building Code Zone-3 parameters.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Geotechnical finite-element soil-structure interaction model preventing high-rise differential settlement.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Laser-audited BOQ line items and FIDIC variation defenses saving the project client millions in unwarranted claims.</span>
                </div>
              </div>
            </div>

            {/* Footer Action Row */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded text-xs font-bold uppercase"
              >
                Close Dossier
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer"
              >
                Request Similar Project Scope
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
