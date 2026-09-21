import React from 'react';
import { 
  FileCheck2, 
  ShieldCheck, 
  Award, 
  Building2, 
  Download, 
  Printer, 
  X, 
  CheckCircle2,
  HardHat
} from 'lucide-react';
import { StampBadge, RivetCornerCard } from './StructuralMotifs';

interface CredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CredentialsModal: React.FC<CredentialsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#181b20] border-2 border-[#ea580c] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 clip-corner-tl-br shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2d333c] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-[#ea580c]" />
              <span className="font-mono text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                ENGINEERING CREDENTIALS & REGULATORY ACCREDITATION
              </span>
            </div>
            <h3 className="font-condensed text-3xl font-black text-white uppercase">
              TIBEB CONSULT // CERTIFICATE DOSSIER
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-[#222730] border border-[#3a4350] text-[#cbd5e1] hover:text-white hover:bg-[#ea580c] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Card */}
        <div className="bg-[#131518] border border-[#3b4352] p-6 space-y-5 font-mono text-xs relative">
          <div className="flex items-center justify-between border-b border-[#252a33] pb-3">
            <div>
              <span className="text-[#ea580c] font-bold text-sm block">FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA</span>
              <span className="text-[#8b949e] text-[11px]">MINISTRY OF URBAN DEVELOPMENT & CONSTRUCTION (MoWUD)</span>
            </div>
            <StampBadge label="CLASS 1 PM/CA" variant="orange" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-[#8b949e] text-[10px] uppercase">CONSULTING FIRM REGISTRATION:</span>
              <p className="text-white font-bold">TIBEB CONSTRUCTION & PROJECT ADVISORY PLC</p>
              <p className="text-[#8b949e]">TIN: 0048291038 / VAT Registered</p>
            </div>

            <div className="space-y-1">
              <span className="text-[#8b949e] text-[10px] uppercase">CONSULTANT GRADE & CATEGORY:</span>
              <p className="text-[#f59e0b] font-bold">CATEGORY 1 — CONSTRUCTION MANAGEMENT & SUPERVISION</p>
              <p className="text-[#8b949e]">License Ref: MoWUD/CON/GR-1/8849/12</p>
            </div>
          </div>

          <div className="space-y-2 pt-3 border-t border-[#252a33]">
            <span className="text-[#8b949e] text-[10px] uppercase block">AUTHORIZED ENGINEERING SCOPE:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#cbd5e1]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Unlimited Building Height & Structural Classification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Third-Party Structural Peer Review & Sign-Off</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>FIDIC 1999/2017 & MoWUD Contract Administration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Geotechnical Investigation & Subgrade Certification</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1c2026] p-3 border border-[#2d343f] flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">PROFESSIONAL INDEMNITY COVERAGE:</span>
            </div>
            <span className="text-emerald-400 font-bold">ETB 100,000,000 PER PROJECT</span>
          </div>
        </div>

        {/* Lead Engineer Profiles */}
        <div className="space-y-3">
          <h4 className="font-condensed text-xl font-bold text-white uppercase tracking-tight">
            PRINCIPAL TECHNICAL DIRECTORS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="bg-[#14161a] p-3 border border-[#272c36] space-y-1">
              <span className="text-white font-bold block">Eng. Dawit Alemayehu, PE, M.Sc.</span>
              <span className="text-[#ea580c] text-[10px] block">CHIEF STRUCTURAL ENGINEER (31 YRS EXP)</span>
              <p className="text-[#8b949e] text-[11px]">Former Senior Technical Reviewer, Addis Ababa Construction Bureau. Specialized in tall building seismic lateral systems.</p>
            </div>

            <div className="bg-[#14161a] p-3 border border-[#272c36] space-y-1">
              <span className="text-white font-bold block">Tewodros Bekele, MRICS, PMP</span>
              <span className="text-[#f59e0b] text-[10px] block">HEAD OF COST & QUANTITY SURVEYING (19 YRS EXP)</span>
              <p className="text-[#8b949e] text-[11px]">Chartered Quantity Surveyor. Veteran of large-scale commercial bank headquarters & industrial park procurement.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#2d333c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-[#6e7681]">
            DOCUMENT VERIFICATION ID: TIBEB-CRED-2026-AA
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-none py-2.5 px-4 bg-[#232832] hover:bg-[#2d3440] border border-[#37404e] text-xs font-mono text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT DOSSIER</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none py-2.5 px-5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed text-sm font-black uppercase tracking-wider"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
