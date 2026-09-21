import React, { useState } from 'react';
import { MANIFESTO_PILLARS } from '../data';
import { IBeamDivider, RivetCornerCard, StampBadge } from './StructuralMotifs';
import { AlertCircle, ShieldAlert, Cpu, Wrench, CheckCheck, XCircle } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>(MANIFESTO_PILLARS[0].id);

  return (
    <section className="py-20 sm:py-28 bg-[#181a1f] relative border-b border-[#2d333c]" id="manifesto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ea580c] inline-block clip-corner-tl-br" />
            <span className="font-mono text-xs text-[#ea580c] font-bold tracking-widest uppercase">
              FIELD THESIS // REALITY CHECK
            </span>
          </div>

          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            THE ADDIS CONSTRUCTIBILITY <span className="text-[#ea580c]">THESIS</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#94a3b8] max-w-3xl leading-relaxed">
            Building in Ethiopia's capital is not a theoretical CAD exercise. Between severe volcanic clay shrink-swell, 2,355m high-altitude hydration dynamics, active Rift Valley seismicity, and relentless material price escalation, textbook assumptions will fail your project.
          </p>
        </div>

        {/* 4 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {MANIFESTO_PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`relative cursor-pointer transition-all duration-200 ${
                  isSelected ? 'ring-1 ring-[#ea580c]' : 'hover:border-[#424b58]'
                }`}
              >
                <RivetCornerCard
                  id={`manifesto-card-${pillar.index}`}
                  accentBorder={isSelected}
                  className={`h-full flex flex-col justify-between ${
                    isSelected ? 'bg-[#20242b]' : 'bg-[#191c22]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header with index, tags */}
                    <div className="flex items-center justify-between border-b border-[#2d333c] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-condensed text-2xl font-black text-[#ea580c]">
                          [{pillar.index}]
                        </span>
                        <StampBadge label={pillar.specTag} variant={isSelected ? 'orange' : 'neutral'} />
                      </div>
                      <span className="font-mono text-[11px] text-[#64748b] font-bold">
                        {pillar.ebcsRef}
                      </span>
                    </div>

                    {/* Title & Body */}
                    <div className="space-y-2">
                      <h3 className="font-condensed text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="font-mono text-xs text-[#ea580c] font-bold">
                        {pillar.technicalSubhead}
                      </p>
                      <p className="font-body text-sm sm:text-base text-[#94a3b8] leading-relaxed pt-1">
                        {pillar.body}
                      </p>
                    </div>
                  </div>

                  {/* Footnote status */}
                  <div className="pt-4 mt-4 border-t border-[#272d36] flex items-center justify-between text-[11px] font-mono text-[#6e7681]">
                    <span>ENGINEERING MANDATE: ACTIVE</span>
                    <span className="text-[#cbd5e1] font-bold">ZERO TOLERANCE</span>
                  </div>
                </RivetCornerCard>
              </div>
            );
          })}
        </div>

        <IBeamDivider label="FIELD AUDIT RIGOR COMPARISON" code="AUDIT-STD-01" className="my-8" />

        {/* Structural Comparison: Generic Advisory vs. Tibeb Consult */}
        <div className="bg-[#15171a] border border-[#2e343f] p-6 sm:p-8 relative overflow-hidden clip-corner-tl-br">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4 border-b border-[#2d333c] pb-4">
            <div>
              <span className="font-mono text-xs text-[#ea580c] font-bold uppercase tracking-wider block">
                METHODOLOGY AUDIT // ZERO PLACEHOLDERS
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                GENERIC CONSULTANCY VS. TIBEB FIELD GOVERNANCE
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2.5 h-2.5 bg-[#ea580c]" />
              <span className="text-[#cbd5e1] font-bold">ADDIS FIELD STANDARD</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Generic Office Advisory */}
            <div className="bg-[#1a1c21] p-5 border border-[#2d333c] space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase pb-2 border-b border-[#2a2f38]">
                <XCircle className="w-4 h-4" />
                <span>TYPICAL OFFICE-BOUND CONSULTANCY</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#8b949e]">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Relies purely on generic soil test reports without verifying actual borehole SPT drilling depths on site.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Approves structural models from CAD operators without 3D independent peer calculation or seismic shear wall stress checks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Accepts batch plant concrete delivery slips without independent site slump tests or crushing test cylinders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Certifies contractor interim payment certificates (IPC) based on estimated percentages instead of actual laser surveyed physical quantities.</span>
                </li>
              </ul>
            </div>

            {/* Tibeb Consult Field Oversight */}
            <div className="bg-[#1f232a] p-5 border border-[#ea580c]/60 space-y-4 relative">
              <div className="absolute top-0 right-0 bg-[#ea580c] text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                TIBEB PROTOCOL
              </div>
              <div className="flex items-center gap-2 text-[#ea580c] font-mono text-xs font-bold uppercase pb-2 border-b border-[#3b434e]">
                <CheckCheck className="w-4 h-4 text-[#ea580c]" />
                <span>TIBEB RESIDENT SITE COMMAND</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#cbd5e1]">
                <li className="flex items-start gap-2">
                  <span className="text-[#ea580c] font-bold">✓</span>
                  <span><strong className="text-white">Resident Geotech Auditing:</strong> Physical continuous witnessing of borehole cores and dynamic cone penetrometer tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ea580c] font-bold">✓</span>
                  <span><strong className="text-white">Full FEA Recalculation:</strong> Independent dual-model check (ETABS/SAFE) calibrated to Ethiopian seismic zoning ag = 0.15–0.20g.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ea580c] font-bold">✓</span>
                  <span><strong className="text-white">Boots on the Formwork:</strong> Written pre-pour sign-offs for 100% of rebar splices, spacer covers, and concrete batch water ratios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ea580c] font-bold">✓</span>
                  <span><strong className="text-white">Forensic BOQ Quantity Verification:</strong> Re-measuring every executed cubic meter and ton of steel to eliminate over-billing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
