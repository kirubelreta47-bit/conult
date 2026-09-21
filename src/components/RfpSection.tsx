import React, { useState } from 'react';
import { ADDIS_SUBCITIES, PROJECT_TYPOLOGIES, SERVICES_DATA } from '../data';
import { 
  Send, 
  CheckCircle, 
  AlertTriangle, 
  HardHat, 
  MapPin, 
  FileSpreadsheet, 
  Phone, 
  Mail, 
  User, 
  Building,
  Clock,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { RivetCornerCard, StampBadge, HazardBar } from './StructuralMotifs';

interface RfpSectionProps {
  initialService?: string;
  initialTypology?: string;
  initialSubcity?: string;
  initialGfa?: string;
}

export const RfpSection: React.FC<RfpSectionProps> = ({
  initialService,
  initialTypology,
  initialSubcity,
  initialGfa
}) => {
  const [selectedTypology, setSelectedTypology] = useState(initialTypology || PROJECT_TYPOLOGIES[0].name);
  const [selectedSubcity, setSelectedSubcity] = useState(initialSubcity || ADDIS_SUBCITIES[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : [SERVICES_DATA[1].title, SERVICES_DATA[4].title]
  );
  const [gfa, setGfa] = useState(initialGfa || '18,500');
  const [projectStage, setProjectStage] = useState('Pre-Construction / Design Peer Review');
  const [urgentInspection, setUrgentInspection] = useState(false);
  
  // Client Contact State
  const [clientName, setClientName] = useState('');
  const [clientEntity, setClientEntity] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');

  // Form Submission Confirmation
  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketId: string;
    timestamp: string;
    typology: string;
    subcity: string;
    services: string[];
    urgency: boolean;
  } | null>(null);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(selectedServices.filter(s => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Please provide your name and phone number for field engineer dispatch contact.');
      return;
    }

    const ticketNumber = `TIBEB-DISPATCH-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket({
      ticketId: ticketNumber,
      timestamp: new Date().toLocaleTimeString(),
      typology: selectedTypology,
      subcity: selectedSubcity,
      services: selectedServices,
      urgency: urgentInspection
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-[#181a1f] relative border-b border-[#2d333c]" id="dispatch-rfp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ea580c] inline-block clip-corner-tl-br" />
            <span className="font-mono text-xs text-[#ea580c] font-bold tracking-widest uppercase">
              FIELD ACTION // PROJECT ADVISORY REQUEST
            </span>
          </div>

          <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            DISPATCH ADVISORY // <span className="text-[#ea580c]">SUBMIT RFP</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#94a3b8] max-w-3xl leading-relaxed">
            Directly engage our principal engineers. Submit your project parameters below to initiate geotechnical baseline audits, structural peer reviews, quantity surveying, or resident site supervision.
          </p>
        </div>

        {submittedTicket ? (
          /* Submission Success State */
          <RivetCornerCard accentBorder className="bg-[#1c2027] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-[#ea580c]/10 border-2 border-[#ea580c] flex items-center justify-center mx-auto clip-corner-tl-br">
              <CheckCircle className="w-8 h-8 text-[#ea580c]" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#ea580c] font-bold uppercase tracking-widest">
                DISPATCH ORDER CONFIRMED // FIELD SLA ACTIVE
              </span>
              <h3 className="font-condensed text-3xl sm:text-4xl font-black text-white uppercase">
                ADVISORY DOSSIER GENERATED
              </h3>
              <p className="font-mono text-lg text-white font-bold bg-[#14161a] p-3 border border-[#2e3541] inline-block">
                TRACKING ID: <span className="text-[#ea580c]">{submittedTicket.ticketId}</span>
              </p>
            </div>

            <div className="bg-[#131518] p-6 text-left border border-[#2b313d] font-mono text-xs space-y-3">
              <div className="flex justify-between border-b border-[#252a33] pb-2">
                <span className="text-[#8b949e]">PROJECT TYPOLOGY:</span>
                <span className="text-white font-bold">{submittedTicket.typology}</span>
              </div>
              <div className="flex justify-between border-b border-[#252a33] pb-2">
                <span className="text-[#8b949e]">LOCATION CORRIDOR:</span>
                <span className="text-white font-bold">{submittedTicket.subcity}</span>
              </div>
              <div className="flex justify-between border-b border-[#252a33] pb-2">
                <span className="text-[#8b949e]">DISPATCH PRIORITY:</span>
                <span className={`font-bold ${submittedTicket.urgency ? 'text-red-400' : 'text-emerald-400'}`}>
                  {submittedTicket.urgency ? 'URGENT FIELD DISPATCH (<12 HRS)' : 'STANDARD REVIEW (<24 HRS)'}
                </span>
              </div>
              <div>
                <span className="text-[#8b949e] block mb-1">ENGAGED DISCIPLINES:</span>
                <div className="flex flex-wrap gap-1.5">
                  {submittedTicket.services.map((srv, idx) => (
                    <span key={idx} className="bg-[#1e2329] text-[#cbd5e1] px-2 py-0.5 border border-[#373f4e]">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-[#94a3b8]">
              A Senior Resident Engineer from our Kazanchis headquarters is reviewing your parameters. You will receive direct phone contact and preliminary scoping documents within the operational window.
            </p>

            <button
              onClick={() => setSubmittedTicket(null)}
              className="py-3 px-6 bg-[#262c37] hover:bg-[#323a48] text-white font-mono text-xs uppercase font-bold border border-[#3b4454] transition-colors"
            >
              SUBMIT ANOTHER PROJECT REVIEW
            </button>
          </RivetCornerCard>
        ) : (
          /* Main Interactive RFP Form */
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Project Scope & Location Parameters (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <RivetCornerCard className="bg-[#191c22] space-y-5">
                  <div className="border-b border-[#2d333c] pb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#ea580c]" />
                      1. PROJECT SPECIFICATIONS & LOCATION
                    </span>
                    <StampBadge label="STEP 01" variant="neutral" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    {/* Typology */}
                    <div className="space-y-1.5">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        BUILDING / PROJECT TYPE *
                      </label>
                      <select
                        value={selectedTypology}
                        onChange={(e) => setSelectedTypology(e.target.value)}
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      >
                        {PROJECT_TYPOLOGIES.map(t => (
                          <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Sub-City */}
                    <div className="space-y-1.5">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        ADDIS ABABA SECTOR / SUB-CITY *
                      </label>
                      <select
                        value={selectedSubcity}
                        onChange={(e) => setSelectedSubcity(e.target.value)}
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      >
                        {ADDIS_SUBCITIES.map(sc => (
                          <option key={sc} value={sc}>{sc}</option>
                        ))}
                      </select>
                    </div>

                    {/* GFA */}
                    <div className="space-y-1.5">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        ESTIMATED GFA (M²)
                      </label>
                      <input
                        type="text"
                        value={gfa}
                        onChange={(e) => setGfa(e.target.value)}
                        placeholder="e.g. 15,000"
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      />
                    </div>

                    {/* Current Stage */}
                    <div className="space-y-1.5">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        CURRENT PROJECT STAGE *
                      </label>
                      <select
                        value={projectStage}
                        onChange={(e) => setProjectStage(e.target.value)}
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      >
                        <option>Pre-Construction & Feasibility</option>
                        <option>Design Development & Structural Peer Review</option>
                        <option>Tendering & BOQ Finalization</option>
                        <option>Active Groundbreaking / Excavation / Foundation</option>
                        <option>Superstructure & Active Concrete Pours</option>
                        <option>Contractor Dispute / Delay Claim Assessment</option>
                      </select>
                    </div>
                  </div>
                </RivetCornerCard>

                {/* Service Discipline Selection */}
                <RivetCornerCard className="bg-[#191c22] space-y-4">
                  <div className="border-b border-[#2d333c] pb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
                      <HardHat className="w-4 h-4 text-[#ea580c]" />
                      2. REQUIRED ADVISORY DISCIPLINES (SELECT ALL THAT APPLY)
                    </span>
                    <StampBadge label="MULTI-DISCIPLINE" variant="orange" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedServices.includes(srv.title);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleService(srv.title)}
                          className={`p-3 border cursor-pointer transition-colors flex items-start gap-3 ${
                            isSelected
                              ? 'bg-[#222731] border-[#ea580c] text-white'
                              : 'bg-[#131518] border-[#2d333c] text-[#8b949e] hover:border-[#424b58]'
                          }`}
                        >
                          <div className={`w-4 h-4 mt-0.5 border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#ea580c] border-[#ea580c]' : 'border-[#4b5563]'
                          }`}>
                            {isSelected && <span className="text-black font-bold text-xs">✓</span>}
                          </div>
                          <div>
                            <span className="font-bold block text-white">{srv.title}</span>
                            <span className="text-[10px] text-[#8b949e]">{srv.category}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </RivetCornerCard>
              </div>

              {/* Right Column: Contact Details & Urgent Dispatch Trigger (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <RivetCornerCard accentBorder className="bg-[#191c22] space-y-5">
                  <div className="border-b border-[#2d333c] pb-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white uppercase flex items-center gap-2">
                      <User className="w-4 h-4 text-[#ea580c]" />
                      3. CLIENT CONTACT & DISPATCH
                    </span>
                    <StampBadge label="CONFIDENTIAL" variant="neutral" />
                  </div>

                  <div className="space-y-3.5 font-mono text-xs">
                    <div className="space-y-1">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        NAME / PRINCIPAL REPRESENTATIVE *
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Ato Yohannes Kebede"
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        COMPANY / DEVELOPER ENTITY
                      </label>
                      <input
                        type="text"
                        value={clientEntity}
                        onChange={(e) => setClientEntity(e.target.value)}
                        placeholder="e.g. Abyssinia Property Developers PLC"
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[#8b949e] font-bold block uppercase">
                          PHONE / WHATSAPP *
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+251 91 100 0000"
                          className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[#8b949e] font-bold block uppercase">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="yohannes@abyssinia.et"
                          className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[#8b949e] font-bold block uppercase">
                        SITE SPECIFICS / DRAWING LINK / NOTES
                      </label>
                      <textarea
                        rows={3}
                        value={projectNotes}
                        onChange={(e) => setProjectNotes(e.target.value)}
                        placeholder="Detail any known geotechnical anomalies, structural spans, contractor dispute items, or deadline constraints..."
                        className="w-full bg-[#131518] border border-[#323945] p-3 text-white focus:border-[#ea580c] outline-none resize-none"
                      />
                    </div>

                    {/* Urgent Dispatch Toggle */}
                    <div 
                      onClick={() => setUrgentInspection(!urgentInspection)}
                      className={`p-3.5 border cursor-pointer transition-colors flex items-center justify-between ${
                        urgentInspection 
                          ? 'bg-red-500/10 border-red-500 text-white' 
                          : 'bg-[#131518] border-[#313744] text-[#8b949e]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className={`w-4 h-4 ${urgentInspection ? 'text-red-400' : 'text-[#8b949e]'}`} />
                        <div>
                          <span className="font-bold block text-white text-xs uppercase">
                            URGENT FIELD DISPATCH REQUEST
                          </span>
                          <span className="text-[10px] text-[#8b949e]">
                            Requires immediate site inspector deployment within 12 hours.
                          </span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                        urgentInspection ? 'bg-red-500 border-red-500' : 'border-[#4b5563]'
                      }`}>
                        {urgentInspection && <span className="text-white font-bold text-xs">✓</span>}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="btn-submit-rfp"
                      className="w-full py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed text-lg font-black uppercase tracking-widest transition-all clip-corner-tl-br flex items-center justify-center gap-3 shadow-xl shadow-[#ea580c]/20"
                    >
                      <Send className="w-5 h-5" />
                      <span>TRANSMIT DISPATCH RFP TO PRINCIPALS</span>
                    </button>
                    <p className="font-mono text-[10px] text-[#6e7681] text-center mt-2">
                      SLA: Response and NDA delivery within 24 operational hours.
                    </p>
                  </div>
                </RivetCornerCard>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
