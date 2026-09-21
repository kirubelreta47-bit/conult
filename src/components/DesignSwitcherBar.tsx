import React from 'react';
import { Palette, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { DESIGN_CONCEPTS, DesignConceptId } from './DesignConceptsModal';

interface DesignSwitcherBarProps {
  activeConcept: DesignConceptId;
  onSelectConcept: (id: DesignConceptId) => void;
  onOpenModal: () => void;
}

export const DesignSwitcherBar: React.FC<DesignSwitcherBarProps> = ({
  activeConcept,
  onSelectConcept,
  onOpenModal,
}) => {
  return (
    <aside 
      id="design-concept-quick-switcher"
      aria-label="Design Concept Switcher"
      className="sticky top-20 sm:top-24 z-40 bg-[#111317]/95 border-b border-[#2d333c] backdrop-blur-md py-2.5 px-4 sm:px-8 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Label */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="p-1.5 bg-[#ea580c]/20 text-[#ea580c] rounded border border-[#ea580c]/40">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                DESIGN CONCEPTS PREVIEW
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-[#23272e] text-amber-400 border border-amber-500/30 rounded">
                LIVE SWITCHER
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">
              Explore 3 curated visual identities crafted for Tibeb Consult:
            </p>
          </div>
        </div>

        {/* 3 Theme Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {DESIGN_CONCEPTS.map((concept) => {
            const isActive = activeConcept === concept.id;
            return (
              <button
                key={concept.id}
                id={`btn-switch-${concept.id}`}
                onClick={() => onSelectConcept(concept.id)}
                className={`flex-1 sm:flex-initial px-3 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#252b36] border-[#ea580c] text-white shadow-md ring-1 ring-[#ea580c]'
                    : 'bg-[#181a1f] border-[#2e343d] text-gray-400 hover:text-gray-200 hover:bg-[#1e2228]'
                }`}
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full border border-white/20 shrink-0" 
                  style={{ backgroundColor: concept.palette.accent }} 
                />
                <span className="font-bold tracking-tight">
                  {concept.name.split(':')[0]}
                </span>
                {isActive && (
                  <span className="text-[10px] text-[#ea580c] font-black uppercase">
                    [ACTIVE]
                  </span>
                )}
              </button>
            );
          })}

          <button
            id="btn-open-concept-explorer"
            onClick={onOpenModal}
            className="px-3 py-1.5 rounded text-xs font-mono text-amber-300 bg-[#252830] hover:bg-[#303440] border border-amber-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold">Specs & Breakdown</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
