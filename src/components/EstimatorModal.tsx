import React, { useState } from 'react';
import { ADDIS_SUBCITIES, PROJECT_TYPOLOGIES, SERVICES_DATA } from '../data';
import { Scale, ShieldAlert, CheckCircle2, ArrowRight, X, HardHat, FileText } from 'lucide-react';
import { StampBadge } from './StructuralMotifs';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToRfp: (typology: string, subcity: string, gfa: string) => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({
  isOpen,
  onClose,
  onApplyToRfp
}) => {
  const [selectedTypology, setSelectedTypology] = useState(PROJECT_TYPOLOGIES[0].id);
  const [selectedSubcity, setSelectedSubcity] = useState(ADDIS_SUBCITIES[0]);
  const [gfa, setGfa] = useState('22,000');
  const [estimatedFloors, setEstimatedFloors] = useState(16);

  if (!isOpen) return null;

  const currentTypology = PROJECT_TYPOLOGIES.find(t => t.id === selectedTypology) || PROJECT_TYPOLOGIES[0];

  // Derive geotechnical & engineering risk factors based on selected sub-city
  const isGoteraOrLideta = selectedSubcity.includes('Gotera') || selectedSubcity.includes('Lideta') || selectedSubcity.includes('Nifas Silk');
  const isYekaOrEntoto = selectedSubcity.includes('Yeka') || selectedSubcity.includes('Gullele');
  const isBole = selectedSubcity.includes('Bole');
  const isAkaki = selectedSubcity.includes('Akaki') || selectedSubcity.includes('Oromia');

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#181b20] border-2 border-[#ea580c] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 clip-corner-tl-br shadow-2xl relative">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2d333c] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#ea580c]" />
              <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                TECHNICAL SCOPE & RISK MATRIX EVALUATOR
              </span>
            </div>
            <h3 className="font-condensed text-3xl font-black text-white uppercase">
              ADDIS ABABA PROJECT SCOPE AUDIT
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#222730] border border-[#3a4350] text-[#cbd5e1] hover:text-white hover:bg-[#ea580c] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="space-y-1.5">
            <label className="text-[#8b949e] font-bold block uppercase">
              1. PROJECT TYPOLOGY:
            </label>
            <select
              value={selectedTypology}
              onChange={(e) => setSelectedTypology(e.target.value)}
              className="w-full bg-[#131518] border border-[#323945] p-2.5 text-white focus:border-[#ea580c] outline-none"
            >
              {PROJECT_TYPOLOGIES.map(t => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[#8b949e] font-bold block uppercase">
              2. ADDIS ABABA SUB-CITY / CORRIDOR:
            </label>
            <select
              value={selectedSubcity}
              onChange={(e) => setSelectedSubcity(e.target.value)}
              className="w-full bg-[#131518] border border-[#323945] p-2.5 text-white focus:border-[#ea580c] outline-none"
            >
              {ADDIS_SUBCITIES.map(sc => (
                <option key={sc} value={sc}>{sc}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[#8b949e] font-bold block uppercase">
              3. ESTIMATED GROSS FLOOR AREA (GFA m²):
            </label>
            <input
              type="text"
              value={gfa}
              onChange={(e) => setGfa(e.target.value)}
              placeholder="e.g. 25,000"
              className="w-full bg-[#131518] border border-[#323945] p-2.5 text-white focus:border-[#ea580c] outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[#8b949e] font-bold block uppercase">
              4. BUILDING HEIGHT / STORIES:
            </label>
            <input
              type="number"
              value={estimatedFloors}
              onChange={(e) => setEstimatedFloors(Number(e.target.value))}
              min={1}
              max={60}
              className="w-full bg-[#131518] border border-[#323945] p-2.5 text-white focus:border-[#ea580c] outline-none"
            />
          </div>
        </div>

        {/* Calculated Engineering Risk Analysis Output */}
        <div className="bg-[#131518] border border-[#2e3540] p-5 space-y-4 clip-corner-tl-br">
          <div className="flex items-center justify-between border-b border-[#252a33] pb-3">
            <span className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#ea580c]" />
              ENGINEERING RISK DIAGNOSIS FOR SELECTED PARAMETERS
            </span>
            <StampBadge 
              label={isGoteraOrLideta ? 'HIGH GEOTECH RISK' : 'ZONE 4 SEISMIC MANDATE'} 
              variant={isGoteraOrLideta ? 'red' : 'yellow'} 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-1 bg-[#1a1d22] p-3 border border-[#282d36]">
              <span className="text-[#8b949e] block text-[10px] uppercase">SOIL PROFILE DIAGNOSTIC:</span>
              <p className="text-white font-semibold">
                {isGoteraOrLideta
                  ? 'Expansive Black Cotton Clay (High Swell Pressure > 180 kPa). Deep piles or soil replacement required.'
                  : isYekaOrEntoto
                  ? 'Volcanic Ignimbrite/Basalt Rock Slope. Slope stability & retaining excavation critical.'
                  : isAkaki
                  ? 'Alluvial Silt / Industrial High Load subgrade. Heavy slab settlement monitoring required.'
                  : 'Variable Residual Silt/Clay over Tuff. Geotechnical SPT borehole validation mandatory.'}
              </p>
            </div>

            <div className="space-y-1 bg-[#1a1d22] p-3 border border-[#282d36]">
              <span className="text-[#8b949e] block text-[10px] uppercase">SEISMIC & LATERAL RESISTANCE:</span>
              <p className="text-white font-semibold">
                {estimatedFloors > 10
                  ? `Dual Shear Wall Core system mandatory under EBCS-EN 1998 (H = ${estimatedFloors * 3.5}m, ag = 0.15g).`
                  : 'Moment Resisting Ductile Frame with standard seismic hook confinement detailing.'}
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#252a33]">
            <span className="font-mono text-xs font-bold text-[#ea580c] uppercase block">
              RECOMMENDED TIBEB ADVISORY PACKAGE:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px]">
              <div className="bg-[#1f2329] p-2 border border-[#323945] text-[#cbd5e1] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Geotechnical SPT Audit</span>
              </div>
              <div className="bg-[#1f2329] p-2 border border-[#323945] text-[#cbd5e1] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Structural Peer Review</span>
              </div>
              <div className="bg-[#1f2329] p-2 border border-[#323945] text-[#cbd5e1] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Full Resident Supervision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-2.5 px-4 bg-[#232832] border border-[#37404e] text-xs font-mono text-[#94a3b8] hover:text-white"
          >
            CLOSE EVALUATOR
          </button>
          
          <button
            onClick={() => {
              onApplyToRfp(currentTypology.name, selectedSubcity, gfa);
              onClose();
            }}
            className="w-full sm:w-auto py-3 px-6 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed text-base font-black uppercase tracking-widest flex items-center justify-center gap-2 clip-corner-tl-br"
          >
            <span>TRANSFER PARAMETERS TO RFP DISPATCH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
