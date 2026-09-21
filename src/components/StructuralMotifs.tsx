import React from 'react';

export const IBeamDivider: React.FC<{
  label?: string;
  code?: string;
  className?: string;
}> = ({ label, code, className = '' }) => {
  return (
    <div className={`relative w-full py-6 flex items-center justify-center ${className}`} id={`ibeam-${code || 'divider'}`}>
      {/* Top Flange */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-3 h-[2px] bg-[#323842] flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#15171a] border border-[#ea580c]/60 shadow-sm" />
        <div className="w-2 h-2 rounded-full bg-[#15171a] border border-[#ea580c]/60 shadow-sm" />
      </div>

      {/* Main Center Web */}
      <div className="relative z-10 flex items-center gap-3 px-4 py-1.5 bg-[#1a1d22] border border-[#3b434e] shadow-md clip-corner-tl-br">
        {/* Rivet Details */}
        <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
        
        {code && (
          <span className="font-mono text-[11px] tracking-wider text-[#ea580c] font-bold">
            [{code}]
          </span>
        )}
        
        {label && (
          <span className="font-condensed text-xs uppercase tracking-widest text-[#94a3b8] font-bold">
            {label}
          </span>
        )}

        <div className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
      </div>

      {/* Bottom Flange */}
      <div className="absolute inset-x-0 top-1/2 translate-y-3 h-[2px] bg-[#323842] flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#15171a] border border-[#ea580c]/60 shadow-sm" />
        <div className="w-2 h-2 rounded-full bg-[#15171a] border border-[#ea580c]/60 shadow-sm" />
      </div>
    </div>
  );
};

export const HazardBar: React.FC<{
  className?: string;
  variant?: 'orange' | 'yellow';
  height?: string;
}> = ({ className = '', variant = 'orange', height = 'h-2.5' }) => {
  return (
    <div 
      className={`w-full ${height} ${variant === 'orange' ? 'hazard-stripe-orange' : 'hazard-stripe-yellow'} border-y border-black/40 ${className}`} 
    />
  );
};

export const RivetCornerCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  accentBorder?: boolean;
}> = ({ children, className = '', id, accentBorder = false }) => {
  return (
    <div 
      id={id}
      className={`relative bg-[#1d2026] border ${accentBorder ? 'border-[#ea580c]/50' : 'border-[#2d333c]'} p-5 sm:p-6 transition-colors duration-200 ${className}`}
    >
      {/* Corner Rivet Details */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#3d4552] border border-[#525d6e]" />
      <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#3d4552] border border-[#525d6e]" />
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#3d4552] border border-[#525d6e]" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#3d4552] border border-[#525d6e]" />

      {children}
    </div>
  );
};

export const StampBadge: React.FC<{
  label: string;
  variant?: 'orange' | 'yellow' | 'neutral' | 'red';
  className?: string;
}> = ({ label, variant = 'orange', className = '' }) => {
  const styles = {
    orange: 'bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]/40',
    yellow: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/40',
    neutral: 'bg-[#282d36] text-[#94a3b8] border-[#3e4654]',
    red: 'bg-red-500/10 text-red-400 border-red-500/40'
  };

  return (
    <span 
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider border ${styles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-sm bg-current" />
      {label}
    </span>
  );
};
