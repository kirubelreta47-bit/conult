import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Check, 
  Sparkles, 
  Layers, 
  Compass, 
  Building2, 
  HardHat, 
  Eye, 
  Maximize2, 
  X,
  Flame,
  FileCheck2,
  Cpu
} from 'lucide-react';

export type DesignConceptId = 'industrial' | 'blueprint' | 'editorial';

export interface DesignConcept {
  id: DesignConceptId;
  name: string;
  tagline: string;
  badge: string;
  mood: string;
  palette: {
    bg: string;
    card: string;
    border: string;
    accent: string;
    accentSecondary: string;
    accentName: string;
    bgName: string;
  };
  typography: {
    display: string;
    body: string;
    mono: string;
  };
  keyFeatures: string[];
  visualHighlights: string[];
  idealFor: string;
}

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: 'industrial',
    name: 'Concept A: Raw Jobsite Brutalism',
    tagline: 'Rugged site-office toughness, high-torque engineering reality, and field safety aesthetics.',
    badge: 'ACTIVE PREVIEW / DEFAULT',
    mood: 'Heavy Concrete • Safety Orange • Steel Rivets • Site Signage',
    palette: {
      bg: '#15171a',
      card: '#1f2329',
      border: '#333b45',
      accent: '#ea580c',
      accentSecondary: '#f59e0b',
      accentName: 'Safety Orange & Hazard Yellow',
      bgName: 'Concrete Graphite & Steel Charcoal',
    },
    typography: {
      display: 'Barlow Condensed (Heavy Industrial)',
      body: 'Work Sans (Utilitarian Clean)',
      mono: 'JetBrains Mono (Drafting Code)',
    },
    keyFeatures: [
      'Safety hazard diagonal hazard stripes & steel mesh overlays',
      'Structural I-Beam section dividers & rivet-fastened corner stamps',
      'Real-time Addis Ababa field telemetry & live ticket generation badge',
      'Heavy high-contrast condensed headlines for site signage presence',
    ],
    visualHighlights: [
      'Industrial cut-corner cards (clip-path geometry)',
      'Subtle rebar and concrete grain backdrops',
      'Orange & Amber active status indicators',
    ],
    idealFor: 'Developers, General Contractors, and Structural Site Engineers wanting an authentic, rugged field presence.',
  },
  {
    id: 'blueprint',
    name: 'Concept B: Architectural Blueprint Precision',
    tagline: 'High-tech structural BIM schematics, millimeter CAD grids, and Swiss grid minimalism.',
    badge: 'ARCHITECTURAL / HIGH-TECH',
    mood: 'Deep Drafting Navy • Precision Cyan • CAD Vectors • BIM Coordinates',
    palette: {
      bg: '#0a1120',
      card: '#111c30',
      border: '#1e3a5f',
      accent: '#38bdf8',
      accentSecondary: '#818cf8',
      accentName: 'Drafting Cyan & Indigo Glow',
      bgName: 'Deep Drafting Navy & Slate Glass',
    },
    typography: {
      display: 'Space Grotesk / Barlow (Architectural Precision)',
      body: 'Inter / Work Sans (Technical Readability)',
      mono: 'JetBrains Mono (CAD Coordinates)',
    },
    keyFeatures: [
      'Crisp millimeter coordinate drafting grids with crosshair targets',
      'Architectural elevation line drawings & shear wall wireframes',
      'Cyan technical callouts and illuminated status gauges',
      'Minimalist Swiss layout with geometric calculation readouts',
    ],
    visualHighlights: [
      'Blueprint grid pattern with cyan glow accents',
      'Vector elevation lines and precision dimension markers',
      'Polished glass-slate cards with fine 1px cyan borders',
    ],
    idealFor: 'BIM Consultants, High-Rise Structural Designers, and International Joint Ventures.',
  },
  {
    id: 'editorial',
    name: 'Concept C: Volcanic Basalt & Terracotta Editorial',
    tagline: 'Executive consulting refinement rooted in Ethiopian geology, basalt stone, and warm terracotta clay.',
    badge: 'EXECUTIVE / LUXURY CONSULTING',
    mood: 'Obsidian Basalt • Warm Terracotta • Editorial Serif • Minimalist Stone',
    palette: {
      bg: '#121113',
      card: '#1c1a1e',
      border: '#38323c',
      accent: '#f97316',
      accentSecondary: '#d97706',
      accentName: 'Ethiopian Terracotta & Ochre Earth',
      bgName: 'Warm Volcanic Basalt & Rich Charcoal',
    },
    typography: {
      display: 'Barlow Condensed / Syne (Bold Editorial)',
      body: 'Work Sans (Refined Editorial Spacing)',
      mono: 'JetBrains Mono (Specification Monospace)',
    },
    keyFeatures: [
      'Generous negative space with high-contrast editorial hierarchy',
      'Volcanic basalt slate background with warm organic terracotta accents',
      'Oversized typographic numeral counters and clean hairline brass dividers',
      'FIDIC & MoWUD governance framing for institutional investor confidence',
    ],
    visualHighlights: [
      'Warm earth-toned accents reflecting Ethiopian clay geology',
      'Editorial magazine-style layout with large typography steps',
      'Understated luxury borders with zero clutter',
    ],
    idealFor: 'Institutional Investors, Real Estate Funds, Embassies, and Commercial Real Estate Developers.',
  },
];

interface DesignConceptsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeConcept: DesignConceptId;
  onSelectConcept: (conceptId: DesignConceptId) => void;
}

export function DesignConceptsModal({
  isOpen,
  onClose,
  activeConcept,
  onSelectConcept,
}: DesignConceptsModalProps) {
  const [selectedPreview, setSelectedPreview] = useState<DesignConceptId>(activeConcept);

  if (!isOpen) return null;

  const currentConcept = DESIGN_CONCEPTS.find(c => c.id === selectedPreview) || DESIGN_CONCEPTS[0];

  return (
    <AnimatePresence>
      <div 
        id="design-concepts-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-5xl my-auto bg-[#181a1f] border border-[#374151] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2d333b] bg-[#141619]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ea580c]/15 text-[#ea580c] rounded-lg border border-[#ea580c]/30">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold font-condensed tracking-wide text-white uppercase">
                    Tibeb Consult — Design Concept Explorer
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-mono bg-[#23272e] border border-gray-700 text-amber-400 rounded">
                    3 AESTHETIC DIRECTIONS
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Select and preview distinct visual identities and architectural themes for Tibeb Consult.
                </p>
              </div>
            </div>

            <button
              id="close-design-modal"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-[#252a32] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Concept Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {DESIGN_CONCEPTS.map((concept) => {
                const isSelected = selectedPreview === concept.id;
                const isCurrentlyActive = activeConcept === concept.id;

                return (
                  <button
                    key={concept.id}
                    id={`concept-tab-${concept.id}`}
                    onClick={() => setSelectedPreview(concept.id)}
                    className={`relative text-left p-4 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-[#222730] border-[#ea580c] shadow-lg shadow-black/40 ring-1 ring-[#ea580c]'
                        : 'bg-[#1a1d22] border-[#2e343d] hover:border-gray-600 hover:bg-[#1e2228]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded text-gray-300 bg-[#141619] border border-[#2d333b]">
                        {concept.badge}
                      </span>
                      {isCurrentlyActive && (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Live
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white font-condensed tracking-wide uppercase mb-1">
                      {concept.name}
                    </h4>

                    {/* Color Swatch Bar */}
                    <div className="flex items-center gap-1.5 my-2">
                      <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: concept.palette.bg }} title={concept.palette.bgName} />
                      <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: concept.palette.card }} />
                      <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: concept.palette.accent }} title={concept.palette.accentName} />
                      <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: concept.palette.accentSecondary }} />
                      <span className="text-[10px] font-mono text-gray-400 ml-1 truncate">
                        {concept.palette.accentName.split('&')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 line-clamp-2">
                      {concept.mood}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detailed Concept Showcase Breakdown */}
            <div className="border border-[#2d333b] bg-[#141619] rounded-xl p-5 space-y-6">
              {/* Concept Hero Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#23272e]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider">
                      DESIGN SPECIFICATION
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs font-mono text-gray-400">
                      {currentConcept.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-condensed tracking-wide text-white uppercase">
                    {currentConcept.name}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {currentConcept.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    id="apply-concept-button"
                    onClick={() => {
                      onSelectConcept(currentConcept.id);
                      onClose();
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed font-bold text-base uppercase tracking-wider rounded-lg shadow-md hover:shadow-orange-600/30 transition-all cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    Apply {currentConcept.name.split(':')[0]} Theme Live
                  </button>
                </div>
              </div>

              {/* Interactive Visual Mockup Preview Box */}
              <div className="relative rounded-lg overflow-hidden border border-[#333b45] p-6"
                style={{
                  backgroundColor: currentConcept.palette.bg,
                  backgroundImage: currentConcept.id === 'blueprint' 
                    ? 'linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)'
                    : currentConcept.id === 'industrial'
                    ? 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)'
                    : 'none',
                  backgroundSize: currentConcept.id === 'blueprint' ? '24px 24px' : '8px 8px',
                }}
              >
                {/* Mockup Header preview */}
                <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: currentConcept.palette.border }}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentConcept.palette.accent }} />
                    <span className="font-condensed font-bold text-lg uppercase tracking-wider text-white">
                      TIBEB CONSULT <span style={{ color: currentConcept.palette.accent }}>ENGINEERING</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded border" style={{ borderColor: currentConcept.palette.border, color: currentConcept.palette.accentSecondary }}>
                      ETH-MoWUD #041/2018
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded text-white" style={{ backgroundColor: currentConcept.palette.accent }}>
                      REQUEST RFP
                    </span>
                  </div>
                </div>

                {/* Mockup Hero Headline & Card Grid */}
                <div className="py-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border" style={{ borderColor: currentConcept.palette.border, color: currentConcept.palette.accent }}>
                      GEOTECHNICAL & STRUCTURAL CONSULTANCY
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-condensed uppercase tracking-tight text-white mt-2">
                      ENGINEERED FOR ADDIS ABABA CONSTRUCTIBILITY
                    </h2>
                    <p className="text-xs text-gray-300 max-w-xl mt-1">
                      Defending structural integrity and cost envelopes across 2,355m high-altitude black cotton soils and Rift Valley seismic zones.
                    </p>
                  </div>

                  {/* Sample Mockup Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div 
                      className="p-3.5 rounded-lg border space-y-1.5"
                      style={{ 
                        backgroundColor: currentConcept.palette.card, 
                        borderColor: currentConcept.palette.border 
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <Building2 className="w-4 h-4" style={{ color: currentConcept.palette.accent }} />
                        <span className="text-[10px] font-mono text-gray-400">01 / STRUCTURAL</span>
                      </div>
                      <div className="text-xs font-bold text-white font-condensed uppercase">
                        Heavy Foundation Review
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Raft & deep-pile friction validation in expansive volcanic soils.
                      </p>
                    </div>

                    <div 
                      className="p-3.5 rounded-lg border space-y-1.5"
                      style={{ 
                        backgroundColor: currentConcept.palette.card, 
                        borderColor: currentConcept.palette.border 
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <Cpu className="w-4 h-4" style={{ color: currentConcept.palette.accent }} />
                        <span className="text-[10px] font-mono text-gray-400">02 / SURVEYING</span>
                      </div>
                      <div className="text-xs font-bold text-white font-condensed uppercase">
                        Dynamic BOQ Auditing
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Forex rebar hedge matrices & MoWUD price escalation index.
                      </p>
                    </div>

                    <div 
                      className="p-3.5 rounded-lg border space-y-1.5"
                      style={{ 
                        backgroundColor: currentConcept.palette.card, 
                        borderColor: currentConcept.palette.border 
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <FileCheck2 className="w-4 h-4" style={{ color: currentConcept.palette.accent }} />
                        <span className="text-[10px] font-mono text-gray-400">03 / STAGE-GATE</span>
                      </div>
                      <div className="text-xs font-bold text-white font-condensed uppercase">
                        Supervision Hold-Points
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Pre-pour slump checks, rebar cover verification & NDT tests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Palette & Typography */}
                <div className="p-4 bg-[#1a1d22] rounded-lg border border-[#2d333b] space-y-3">
                  <h4 className="text-xs font-mono uppercase text-orange-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Typography & Palette Matrix
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-[#242930]">
                      <span className="text-gray-400">Headline Font:</span>
                      <span className="text-white font-mono">{currentConcept.typography.display}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#242930]">
                      <span className="text-gray-400">Body Typography:</span>
                      <span className="text-white font-mono">{currentConcept.typography.body}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-[#242930]">
                      <span className="text-gray-400">Specification Monospace:</span>
                      <span className="text-white font-mono">{currentConcept.typography.mono}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-gray-400">Color Profile:</span>
                      <span className="text-white font-mono">{currentConcept.palette.accentName}</span>
                    </div>
                  </div>
                </div>

                {/* Key Architectural & UI Highlights */}
                <div className="p-4 bg-[#1a1d22] rounded-lg border border-[#2d333b] space-y-3">
                  <h4 className="text-xs font-mono uppercase text-orange-400 font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Best Suited Architecture
                  </h4>
                  <p className="text-xs text-gray-300">
                    <strong className="text-white">Target Audience:</strong> {currentConcept.idealFor}
                  </p>
                  <ul className="space-y-1.5 text-xs text-gray-400">
                    {currentConcept.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-[#2d333b] bg-[#141619] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-gray-400 font-mono">
              Currently Active: <span className="text-white font-bold uppercase">{DESIGN_CONCEPTS.find(c => c.id === activeConcept)?.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="close-design-modal-btn"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono uppercase text-gray-400 hover:text-white bg-[#1e2228] hover:bg-[#252a32] border border-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                Close Explorer
              </button>
              <button
                id="select-and-apply-btn"
                onClick={() => {
                  onSelectConcept(selectedPreview);
                  onClose();
                }}
                className="flex items-center gap-2 px-5 py-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed font-bold text-sm uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" /> Apply Selected Design
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
