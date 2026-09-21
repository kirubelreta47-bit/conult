import React, { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '../data';
import { StatMetric } from '../types';
import { RivetCornerCard, StampBadge, HazardBar } from './StructuralMotifs';
import { HardHat, Activity, ShieldCheck, Gauge } from 'lucide-react';

const AnimatedCounter: React.FC<{
  targetValue: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}> = ({ targetValue, decimals = 0, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easedProgress * targetValue;
      
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, targetValue]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const StatsBand: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#15171a] relative border-b border-[#2d333c]" id="stats">
      <HazardBar variant="orange" height="h-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#2d333c]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#ea580c] inline-block clip-corner-tl-br" />
              <span className="font-mono text-xs text-[#ea580c] font-bold tracking-widest uppercase">
                AUDITED INTEGRITY // FIELD METRICS
              </span>
            </div>
            <h2 className="font-condensed text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              PROVEN RESULTS ON <span className="text-[#ea580c]">ETHIOPIAN SOIL</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8] bg-[#1a1d22] border border-[#2e3540] px-3.5 py-2">
            <Activity className="w-4 h-4 text-[#ea580c]" />
            <span>METRICS INDEPENDENTLY AUDITED (2012–2026)</span>
          </div>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS_DATA.map((stat) => (
            <RivetCornerCard
              key={stat.id}
              id={`stat-metric-${stat.id}`}
              className="bg-[#1b1f25] flex flex-col justify-between space-y-4 hover:border-[#ea580c]/50 transition-colors"
            >
              <div className="space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-[#282e37] pb-2">
                  <span className="font-mono text-[10px] text-[#8b949e]">
                    {stat.metricCode}
                  </span>
                  <StampBadge label={stat.badge} variant={stat.id === 'stat-failures' ? 'orange' : 'neutral'} />
                </div>

                {/* Big Number Counter */}
                <div className="font-condensed text-4xl sm:text-5xl xl:text-6xl font-black text-white uppercase tracking-tight">
                  <AnimatedCounter
                    targetValue={stat.targetValue}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <h3 className="font-condensed text-lg sm:text-xl font-black text-[#ea580c] uppercase leading-tight">
                  {stat.label}
                </h3>
              </div>

              {/* Subtext */}
              <p className="font-mono text-xs text-[#8b949e] border-t border-[#282e37] pt-3 leading-relaxed">
                {stat.subtext}
              </p>
            </RivetCornerCard>
          ))}
        </div>

        {/* Live Jobsite Telemetry Log Ticker */}
        <div className="bg-[#111316] border border-[#2a2f38] p-4 sm:p-5 clip-corner-tl-br">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#ea580c] font-bold uppercase shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea580c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ea580c]"></span>
              </span>
              <span>LIVE FIELD DISPATCH LOG:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full text-[#94a3b8]">
              <div className="bg-[#181b20] p-2.5 border border-[#272c36] flex items-center gap-2">
                <span className="text-[#ea580c] font-bold">▶ BOLE:</span>
                <span className="truncate">24m High-Rise Mat Foundation Rebar Cleared</span>
              </div>
              <div className="bg-[#181b20] p-2.5 border border-[#272c36] flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold">▶ GOTERA:</span>
                <span className="truncate">Black Cotton Subgrade Replacement Verified</span>
              </div>
              <div className="bg-[#181b20] p-2.5 border border-[#272c36] flex items-center gap-2">
                <span className="text-emerald-400 font-bold">▶ KAZANCHIS:</span>
                <span className="truncate">FIDIC EoT Contractor Claim Defense Finalized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
