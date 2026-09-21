import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  HardHat, 
  Calculator, 
  ShieldCheck 
} from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
  onOpenCredentials: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenEstimator,
  onOpenCredentials
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Brand Logo (Matching Screenshot: Golden Circle Icon + Bold Title) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <HardHat className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-bold font-condensed tracking-tight text-gray-900 uppercase">
                  Tibeb Consult
                </span>
              </div>
              <span className="block text-[10px] uppercase font-sans tracking-widest text-amber-500 font-semibold -mt-1">
                Construction & Engineering
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-amber-500 transition-colors font-semibold text-gray-900 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects-section')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('news-section')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              News
            </button>
            <button 
              onClick={() => scrollToSection('location-section')}
              className="hover:text-amber-500 transition-colors cursor-pointer"
            >
              Location
            </button>
            <button 
              onClick={onOpenEstimator}
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors cursor-pointer text-gray-600"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-500" />
              <span>Scope Estimator</span>
            </button>
            <button 
              onClick={onOpenCredentials}
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors cursor-pointer text-gray-600"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>MoWUD License</span>
            </button>
          </nav>

          {/* Right Action Button ("Get a quote") */}
          <div className="flex items-center gap-3">
            <button
              id="header-get-quote-btn"
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              Get a quote
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-amber-500 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 shadow-xl space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-800">
            <button 
              onClick={() => scrollToSection('top')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500 font-semibold"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects-section')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500"
            >
              Work (Projects)
            </button>
            <button 
              onClick={() => scrollToSection('news-section')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500"
            >
              News & Insights
            </button>
            <button 
              onClick={() => scrollToSection('location-section')}
              className="text-left py-2 border-b border-gray-100 hover:text-amber-500"
            >
              Location & Site Office
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenEstimator(); }}
              className="text-left py-2 border-b border-gray-100 flex items-center justify-between hover:text-amber-500"
            >
              <span>Scope & Geotechnical Estimator</span>
              <Calculator className="w-4 h-4 text-amber-500" />
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCredentials(); }}
              className="text-left py-2 border-b border-gray-100 flex items-center justify-between hover:text-amber-500"
            >
              <span>MoWUD Class-1 Credentials</span>
              <ShieldCheck className="w-4 h-4 text-amber-500" />
            </button>
          </nav>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
            className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded-md text-center shadow-md"
          >
            Get a quote
          </button>
        </div>
      )}
    </header>
  );
};
