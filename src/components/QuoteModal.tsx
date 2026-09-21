import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  MapPin, 
  Calendar, 
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { ADDIS_SUBCITIES, PROJECT_TYPOLOGIES } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialTypology?: string;
  initialSubcity?: string;
  initialGfa?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Structural Design Review & Seismic Audit',
  initialTypology = 'High-Rise Commercial / Office Tower (>12 Stories)',
  initialSubcity = 'Bole (Commercial / High-Rise)',
  initialGfa = '25,000'
}) => {
  const [formData, setFormData] = useState({
    projectName: '',
    clientName: '',
    email: '',
    phone: '',
    subcity: initialSubcity,
    typology: initialTypology,
    service: initialService,
    estimatedGfa: initialGfa,
    urgency: 'Standard (Site Kickoff < 30 Days)',
    notes: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `TC-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <AnimatePresence>
      <div 
        id="quote-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl my-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 text-gray-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-950 text-amber-400 rounded-full">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-tight">
                  Request a Quote & Project Advisory
                </h3>
                <p className="text-xs text-gray-900 font-medium">
                  Direct dispatch to Tibeb Consult resident engineering team
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-950 hover:bg-black/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {submittedTicket ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Quote Request Dispatched!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Your project dossier has been assigned to a Class-1 Resident Structural Engineer. A preliminary scope proposal will be delivered within 24 hours.
                </p>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg max-w-sm mx-auto font-mono text-xs text-left space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ticket ID:</span>
                    <span className="font-bold text-amber-600">{submittedTicket}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Service:</span>
                    <span className="text-gray-800 truncate max-w-[180px]">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="text-gray-800">{formData.subcity.split('(')[0]}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded shadow-sm"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Project Name / Working Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kazanchis Tower Phase II"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Client / Developer Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Horizon Real Estate Plc"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+251 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Addis Ababa Sub-City *
                    </label>
                    <select
                      value={formData.subcity}
                      onChange={(e) => setFormData({ ...formData, subcity: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    >
                      {ADDIS_SUBCITIES.map((sub, idx) => (
                        <option key={idx} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Building Typology *
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    >
                      {PROJECT_TYPOLOGIES.map((typ) => (
                        <option key={typ.id} value={typ.name}>{typ.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Primary Service Requested *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="Structural Design Review & Seismic Audit">Structural Design Review & Seismic Audit</option>
                      <option value="Feasibility & Geotechnical Due Diligence">Feasibility & Geotechnical Due Diligence</option>
                      <option value="Cost Engineering & Quantity Surveying (BOQ)">Cost Engineering & Quantity Surveying (BOQ)</option>
                      <option value="Project Management & CPM Scheduling">Project Management & CPM Scheduling</option>
                      <option value="Resident Site Supervision & QA/QC">Resident Site Supervision & QA/QC</option>
                      <option value="FIDIC Contracts & Claims Advisory">FIDIC Contracts & Claims Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Gross Floor Area (GFA m²)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 24,000"
                      value={formData.estimatedGfa}
                      onChange={(e) => setFormData({ ...formData, estimatedGfa: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Special Geotechnical or Contractual Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific site challenges (e.g., adjacent deep excavations, high groundwater table, black cotton clay, contractor variation claim defense)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded text-gray-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>MoWUD Class 1 Certified Confidential Review</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded shadow-md transition-all cursor-pointer font-sans"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
