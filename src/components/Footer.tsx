import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenCredentials: () => void;
  onOpenEstimator: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCredentials,
  onOpenEstimator,
  onOpenQuote
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* 3 Main Footer Columns Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-16">
          
          {/* Column 1: Contact Us (Matching Screenshot) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-sans text-gray-900 uppercase tracking-tight">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <p className="font-semibold text-gray-900">+251 11 661 4455 / +251 91 123 7890</p>
              <p className="text-gray-500 hover:text-amber-600 transition-colors">
                info.tibebconsult@gmail.com
              </p>
              <p className="text-gray-500">
                Haile Garment Corridor, WPQM+8H2 <br />
                Addis Ababa, Ethiopia
              </p>
              <p className="text-gray-500 pt-1">
                Open hours: 8:00–18:00 Mon–Fri, 8:30–13:00 Sat
              </p>
            </div>
          </div>

          {/* Column 2: Useful links (2 subcolumns matching screenshot) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-sans text-gray-900 uppercase tracking-tight">
              Useful links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('top')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Home
                </button>
                <button 
                  onClick={() => scrollToSection('about-section')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • About Us
                </button>
                <button 
                  onClick={() => scrollToSection('services-section')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Services
                </button>
                <button 
                  onClick={onOpenEstimator}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Scope Estimator
                </button>
                <button 
                  onClick={() => scrollToSection('location-section')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Location & Map
                </button>
                <button 
                  onClick={() => scrollToSection('projects-section')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Work / Projects
                </button>
              </div>

              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('news-section')}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Blogs & News
                </button>
                <button 
                  onClick={onOpenQuote}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Contact & RFP
                </button>
                <button 
                  onClick={onOpenCredentials}
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • MoWUD License
                </button>
                <a 
                  href="#careers"
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Careers
                </a>
                <a 
                  href="#privacy"
                  className="block hover:text-amber-500 transition-colors text-left"
                >
                  • Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Our Newsletter (Matching Screenshot) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-sans text-gray-900 uppercase tracking-tight">
              Our Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              Subscribe to our engineering bulletin to get structural codes, geotechnical updates, and cost indices directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you for subscribing to Tibeb Technical Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-xs px-3.5 py-2.5 rounded-l focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-500 text-gray-950 text-xs font-bold font-sans uppercase tracking-wider px-5 py-2.5 rounded-r shadow-sm transition-colors cursor-pointer"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}

            {/* Social Icons matching screenshot bottom */}
            <div className="flex items-center gap-4 text-gray-400 pt-2">
              <a href="#social" className="hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#social" className="hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#social" className="hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#social" className="hover:text-amber-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright matching screenshot */}
        <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>Copyright © 2026 Tibeb Consult Engineering & Construction Advisory. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
