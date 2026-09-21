import React, { useState, useRef, useEffect } from 'react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckSquare, 
  Layers, 
  ShieldAlert, 
  MapPin, 
  FileCode, 
  ArrowUpRight,
  ClipboardCheck,
  Maximize2
} from 'lucide-react';
import { RivetCornerCard, StampBadge, HazardBar } from './StructuralMotifs';

interface ServicesHorizontalScrollProps {
  onSelectServiceForRfp: (serviceTitle: string) => void;
}

export const ServicesHorizontalScroll: React.FC<ServicesHorizontalScrollProps> = ({ 
  onSelectServiceForRfp 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    
    // Calculate which card is most visible
    const cardWidth = 380; // approximate width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), SERVICES_DATA.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 400;
    const target = direction === 'left' 
      ? scrollContainerRef.current.scrollLeft - cardWidth 
      : scrollContainerRef.current.scrollLeft + cardWidth;
    
    scrollContainerRef.current.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 400;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#15171a] relative border-b border-[#2d333c] overflow-hidden" id="services">
      {/* Background Rebar Mesh & Grid */}
      <div className="absolute inset-0 bg-steel-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2d333c]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#ea580c] inline-block clip-corner-tl-br" />
              <span className="font-mono text-xs text-[#ea580c] font-bold tracking-widest uppercase">
                DISPATCH CAPABILITY // 6-SERVICE MATRIX
              </span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              ENGINEERING & ADVISORY <span className="text-[#ea580c]">SERVICES</span>
            </h2>
            <p className="font-body text-base text-[#94a3b8] max-w-2xl">
              Six specialized engineering disciplines purpose-built for the geotechnical, structural, and commercial challenges of building in Addis Ababa.
            </p>
          </div>

          {/* Horizontal Scroll Controls & Index Indicator */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-[#94a3b8] bg-[#1e2229] border border-[#2d333c] px-3 py-2 flex items-center gap-2">
              <span className="text-[#ea580c] font-bold">0{activeIndex + 1}</span>
              <span className="text-[#484f58]">/</span>
              <span>0{SERVICES_DATA.length} SERVICES</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTo('left')}
                disabled={!canScrollLeft}
                id="btn-services-prev"
                className={`p-3 bg-[#1e2229] border border-[#373f4d] text-white transition-colors ${
                  canScrollLeft ? 'hover:bg-[#ea580c] hover:border-[#ea580c] cursor-pointer' : 'opacity-40 cursor-not-allowed'
                }`}
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('right')}
                disabled={!canScrollRight}
                id="btn-services-next"
                className={`p-3 bg-[#1e2229] border border-[#373f4d] text-white transition-colors ${
                  canScrollRight ? 'hover:bg-[#ea580c] hover:border-[#ea580c] cursor-pointer' : 'opacity-40 cursor-not-allowed'
                }`}
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Nav Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3 text-xs font-mono">
          {SERVICES_DATA.map((srv, idx) => (
            <button
              key={srv.id}
              onClick={() => scrollToIndex(idx)}
              className={`px-3 py-1.5 whitespace-nowrap transition-colors border ${
                activeIndex === idx
                  ? 'bg-[#ea580c] text-white border-[#ea580c] font-bold'
                  : 'bg-[#1a1d22] text-[#8b949e] border-[#2d333c] hover:text-white hover:border-[#4b5563]'
              }`}
            >
              {srv.numberCode} • {srv.title.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 pt-2 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 snap-start flex flex-col"
          >
            <RivetCornerCard
              id={`service-card-${service.numberCode.toLowerCase()}`}
              accentBorder={activeIndex === index}
              className={`h-full flex flex-col justify-between ${
                activeIndex === index ? 'bg-[#1e2229]' : 'bg-[#181a20]'
              } hover:border-[#ea580c]/60 transition-all duration-300`}
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#2d333c] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-black text-[#ea580c] bg-[#ea580c]/10 px-2 py-0.5 border border-[#ea580c]/30">
                      {service.numberCode}
                    </span>
                    <span className="font-mono text-[10px] text-[#8b949e] uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none">
                    {service.title}
                  </h3>
                  <p className="font-mono text-xs text-[#ea580c] leading-snug font-semibold">
                    {service.tagline}
                  </p>
                </div>

                <p className="font-body text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Standard Codes */}
                <div className="space-y-1.5 pt-2 border-t border-[#262c36]">
                  <span className="font-mono text-[10px] text-[#6e7681] uppercase block">
                    GOVERNING CODE STANDARDS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.standardCodes.map((code) => (
                      <span
                        key={code}
                        className="font-mono text-[10px] bg-[#14161a] text-[#cbd5e1] px-2 py-0.5 border border-[#2d333c]"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Risk Mitigated */}
                <div className="bg-[#14161a] p-3 border-l-2 border-[#ea580c] text-xs font-mono">
                  <span className="text-[#8b949e] block text-[10px] uppercase">PRIMARY FAILURE MODE MITIGATED:</span>
                  <span className="text-[#e2e8f0] font-semibold">{service.primaryRiskMitigated}</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-[#262c36] space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="py-2 px-3 bg-[#242a34] hover:bg-[#2d3542] border border-[#3b4453] text-xs font-condensed font-bold text-white uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>FULL SPECS</span>
                  </button>

                  <button
                    onClick={() => onSelectServiceForRfp(service.title)}
                    className="py-2 px-3 bg-[#ea580c] hover:bg-[#c2410c] text-xs font-condensed font-black text-white uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>RFP SCOPE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-[#6e7681]">
                  <span>RESIDENT ENGINEER SIGN-OFF</span>
                  <span className="text-[#cbd5e1]">CERTIFIED</span>
                </div>
              </div>
            </RivetCornerCard>
          </div>
        ))}
      </div>

      {/* Detail Modal / Drawer for Service Inspection Points & Deliverables */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181b20] border-2 border-[#ea580c] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 clip-corner-tl-br shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#2d333c] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#ea580c] bg-[#ea580c]/10 px-2 py-0.5 border border-[#ea580c]/30">
                    {selectedServiceDetail.numberCode}
                  </span>
                  <StampBadge label={selectedServiceDetail.category} variant="orange" />
                </div>
                <h3 className="font-condensed text-3xl font-black text-white uppercase">
                  {selectedServiceDetail.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="p-2 bg-[#222730] border border-[#3a4350] text-[#cbd5e1] hover:text-white hover:bg-[#ea580c] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2 font-body text-sm text-[#cbd5e1] leading-relaxed">
              <p>{selectedServiceDetail.description}</p>
            </div>

            {/* Addis Local Context */}
            <div className="bg-[#131518] p-4 border-l-3 border-[#f59e0b] space-y-1 font-mono text-xs">
              <div className="flex items-center gap-1.5 text-[#f59e0b] font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>ADDIS ABABA GROUND & REGULATORY CONTEXT:</span>
              </div>
              <p className="text-[#94a3b8]">{selectedServiceDetail.localAddisContext}</p>
            </div>

            {/* Field Deliverables */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4 text-[#ea580c]" />
                <span>FORMAL ENGINEERING DELIVERABLES:</span>
              </h4>
              <ul className="space-y-2 font-mono text-xs text-[#cbd5e1]">
                {selectedServiceDetail.fieldDeliverables.map((item, i) => (
                  <li key={i} className="bg-[#1f232a] p-2.5 border border-[#2b313b] flex items-start gap-2">
                    <span className="text-[#ea580c] font-bold">[{i + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inspection Checklist */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#ea580c]" />
                <span>FIELD INSPECTION CRITICAL AUDIT POINTS:</span>
              </h4>
              <ul className="space-y-2 font-mono text-xs text-[#94a3b8]">
                {selectedServiceDetail.inspectionPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ea580c]">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#2d333c] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="py-2.5 px-4 bg-[#232832] border border-[#37404e] text-xs font-mono text-[#94a3b8] hover:text-white"
              >
                CLOSE SPECIFICATION
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectServiceForRfp(title);
                }}
                className="py-2.5 px-5 bg-[#ea580c] hover:bg-[#c2410c] text-white font-condensed text-sm font-black uppercase tracking-widest flex items-center gap-2"
              >
                <span>REQUEST THIS ADVISORY DISPATCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
