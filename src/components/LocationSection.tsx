import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ExternalLink, 
  Navigation, 
  Phone, 
  Mail, 
  Clock, 
  Copy, 
  Check, 
  HardHat
} from 'lucide-react';

interface LocationSectionProps {
  onOpenQuote: () => void;
  googleMapsUrl?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  onOpenQuote,
  googleMapsUrl = "https://www.google.com/maps/dir/9.0016017,38.8100846/Haile+Garment+-+CDC,+WPQM%2B8H2,+Addis+Ababa/@8.9667587,38.7300237,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x164b817d4823f5a1:0x258c702776808447!2m2!1d38.7355523!2d8.9377004"
}) => {
  const [copied, setCopied] = useState(false);

  const fullAddress = "Tibeb Consult, Haile Garment - CDC, WPQM+8H2, Addis Ababa, Ethiopia";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location-section" className="py-20 sm:py-24 bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Headquarters & Field Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 tracking-tight">
            Our Location & Site Office
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Visit our resident engineering and project advisory office in Addis Ababa or navigate directly with Google Maps.
          </p>
        </div>

        {/* Main Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative min-h-[380px] sm:min-h-[440px] flex flex-col bg-gray-100"
          >
            {/* Google Maps Embed iframe focused on Haile Garment coordinates */}
            <iframe
              title="Tibeb Consult Location on Google Maps"
              src="https://maps.google.com/maps?q=8.9377004,38.7355523&hl=en&z=15&output=embed"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Quick Action Overlay on top-right of the Map */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-950/90 hover:bg-black text-amber-400 text-xs font-bold font-sans rounded-lg shadow-xl backdrop-blur-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Bottom Map Info Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-amber-200 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center shrink-0">
                <HardHat className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-gray-900 block font-sans">Tibeb Consult Office</span>
                <span className="text-[11px] text-gray-500 font-mono">Haile Garment Corridor • Addis Ababa (WPQM+8H2)</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Office Details, Navigation & Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6 text-left">
              
              {/* Address Block */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono block mb-1">
                  Physical Address
                </span>
                <h3 className="text-xl font-bold font-sans text-gray-900">
                  Tibeb Consult Site & Office
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  Haile Garment Area, WPQM+8H2 <br />
                  Addis Ababa, Ethiopia
                </p>

                {/* Copy Address Button & Directions Button */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-md border border-gray-200 shadow-sm transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-gray-500" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs font-bold rounded-md shadow-sm transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Office Hours & Visiting Protocol */}
              <div className="pt-4 border-t border-gray-200 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Consultancy Operating Hours:</span>
                    <span className="text-gray-600 text-xs">
                      Monday – Friday: 8:00 AM – 6:00 PM <br />
                      Saturday: 8:30 AM – 1:00 PM (Site Audits & Materials Testing)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Direct Resident Desk:</span>
                    <span className="text-gray-600 text-xs font-mono">
                      +251 11 661 4455 / +251 91 123 7890
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-amber-100 text-amber-700 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Official Engineering Dispatch:</span>
                    <span className="text-gray-600 text-xs font-mono">
                      info.tibebconsult@gmail.com
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-gray-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md text-center shadow-md transition-all cursor-pointer font-sans"
              >
                Book In-Person Consultation
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-4 bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs font-bold uppercase tracking-wider rounded-md text-center shadow-sm transition-all cursor-pointer font-sans flex items-center justify-center gap-1.5"
              >
                <span>Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
