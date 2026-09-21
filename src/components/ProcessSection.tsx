import React, { useState } from 'react';
import { PROCESS_PHASES } from '../data';
import { ProcessPhase } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertOctagon, 
  FileCheck, 
  Lock, 
  ShieldCheck, 
  Clock, 
  UserCheck 
} from 'lucide-react';
import { RivetCornerCard, StampBadge, IBeamDivider } from './StructuralMotifs';

export const ProcessSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase: ProcessPhase = PROCESS_PHASES[activePhaseIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#181a1f] relative border-b border-[#2d333c]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ea580c] inline-block clip-corner-tl-br" />
            <span className="font-mono text-xs text-[#ea580c] font-bold tracking-widest uppercase">
              METHODOLOGY // 3-PHASE GATEWAY PROTOCOL
            </span>
          </div>

          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            THE TIBEB STAGE-GATE <span className="text-[#ea580c]">FRAMEWORK</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#94a3b8] max-w-3xl leading-relaxed">
            Construction failure occurs when unverified assumptions roll forward into execution. Our 3-Phase protocol establishes unforgiving engineering hold points where work cannot proceed without certified technical sign-offs.
          </p>
        </div>

        {/* 3-Phase Interactive Progress Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PROCESS_PHASES.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            const isCompleted = activePhaseIndex > idx;
            return (
              <button
                key={phase.code}
                onClick={() => setActivePhaseIndex(idx)}
                className={`text-left p-5 sm:p-6 border transition-all duration-200 relative clip-corner-tl-br ${
                  isActive
                    ? 'bg-[#222730] border-[#ea580c] shadow-lg shadow-[#ea580c]/10'
                    : 'bg-[#15171a] border-[#2c333f] hover:border-[#434d5d]'
                }`}
              >
                {/* Top Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`font-condensed text-2xl font-black ${isActive ? 'text-[#ea580c]' : 'text-[#64748b]'}`}>
                      PHASE {phase.phaseNum}
                    </span>
                    <span className="font-mono text-[10px] text-[#8b949e]">[{phase.timeframe}]</span>
                  </div>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse" />
                  ) : isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-[#484f58]" />
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {phase.name}
                  </h3>
                  <p className="font-mono text-xs text-[#94a3b8] line-clamp-1">
                    {phase.subtitle}
                  </p>
                </div>

                {/* Progress Underline */}
                <div className="mt-4 w-full h-1 bg-[#101215] overflow-hidden">
                  <div
                    className={`h-full ${
                      isActive ? 'bg-[#ea580c] w-full' : isCompleted ? 'bg-emerald-500 w-full' : 'w-0'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Deep Inspection Panel */}
        <RivetCornerCard id="process-deep-panel" accentBorder className="bg-[#1b1f26]">
          <div className="space-y-6">
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#2d333c] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#ea580c] bg-[#ea580c]/10 px-2.5 py-0.5 border border-[#ea580c]/30">
                    STAGE {currentPhase.phaseNum} OF 03
                  </span>
                  <StampBadge label={currentPhase.timeframe} variant="yellow" />
                </div>
                <h3 className="font-condensed text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  {currentPhase.name}: {currentPhase.subtitle}
                </h3>
              </div>

              <div className="bg-[#14161a] p-3 border border-[#2c333f] flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-[#ea580c]" />
                <div className="font-mono text-xs">
                  <span className="text-[#8b949e] block text-[10px] uppercase">MANDATORY STAGE SIGNOFF:</span>
                  <span className="text-white font-bold">{currentPhase.signOffRole}</span>
                </div>
              </div>
            </div>

            {/* Objective statement */}
            <div className="bg-[#131519] p-4 border-l-4 border-[#ea580c] font-body text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              <strong className="text-white uppercase font-mono text-xs block mb-1">STAGE OBJECTIVE & QUALITY MANDATE:</strong>
              {currentPhase.objective}
            </div>

            {/* Grid of Gatekeeper Audit Checks & Deliverables */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Gatekeeper Criteria (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center justify-between border-b border-[#2d333c] pb-2">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertOctagon className="w-4 h-4 text-[#ea580c]" />
                    <span>MANDATORY GATEWAY CRITERIA (HOLD POINTS)</span>
                  </h4>
                  <span className="font-mono text-[10px] text-[#8b949e]">ALL CHECKS ENFORCED</span>
                </div>

                <div className="space-y-2.5">
                  {currentPhase.gateChecks.map((gate, i) => (
                    <div key={i} className="bg-[#14171c] p-3.5 border border-[#2b313d] space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                          <span className="text-[#ea580c]">[{i + 1}]</span>
                          {gate.item}
                        </span>
                        <span className={`font-mono text-[10px] px-2 py-0.5 font-bold uppercase shrink-0 ${
                          gate.criticality === 'CRITICAL'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                            : gate.criticality === 'MANDATORY'
                            ? 'bg-[#ea580c]/10 text-[#ea580c] border border-[#ea580c]/30'
                            : 'bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30'
                        }`}>
                          {gate.criticality}
                        </span>
                      </div>
                      <p className="font-mono text-xs text-[#8b949e] pl-5">
                        → {gate.requirement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Deliverables (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between border-b border-[#2d333c] pb-2">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#f59e0b]" />
                    <span>CERTIFIED DELIVERABLES</span>
                  </h4>
                  <span className="font-mono text-[10px] text-[#8b949e]">ENGINEERING DOSSIER</span>
                </div>

                <div className="space-y-2">
                  {currentPhase.keyDeliverables.map((doc, i) => (
                    <div key={i} className="bg-[#14171c] p-3 border border-[#2b313d] flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#20252e] border border-[#3b4352] flex items-center justify-center font-mono text-xs text-[#ea580c] font-bold">
                        D{i + 1}
                      </div>
                      <span className="font-mono text-xs text-[#cbd5e1] font-semibold">{doc}</span>
                    </div>
                  ))}
                </div>

                {/* Stage Navigation */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    disabled={activePhaseIndex === 0}
                    onClick={() => setActivePhaseIndex(Math.max(0, activePhaseIndex - 1))}
                    className={`py-2 px-3 bg-[#1e2229] border border-[#323945] text-xs font-mono uppercase ${
                      activePhaseIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#ea580c] text-white cursor-pointer'
                    }`}
                  >
                    ← PREVIOUS PHASE
                  </button>

                  <button
                    disabled={activePhaseIndex === PROCESS_PHASES.length - 1}
                    onClick={() => setActivePhaseIndex(Math.min(PROCESS_PHASES.length - 1, activePhaseIndex + 1))}
                    className={`py-2 px-3 bg-[#ea580c] border border-[#ea580c] text-xs font-mono font-bold uppercase text-white ${
                      activePhaseIndex === PROCESS_PHASES.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#c2410c] cursor-pointer'
                    }`}
                  >
                    NEXT STAGE →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RivetCornerCard>
      </div>
    </section>
  );
};
