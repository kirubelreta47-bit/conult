import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Eye, MapPin, Building2, Calendar } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

interface RecentProjectsGridProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

type FilterCategory = 'ALL' | 'BUILDINGS' | 'COMMERCIAL' | 'RESIDENTIAL' | 'INFRASTRUCTURE' | 'INTERIOR' | 'OFFICE';

export const RecentProjectsGrid: React.FC<RecentProjectsGridProps> = ({
  onSelectProject,
  onOpenQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [showAll, setShowAll] = useState(false);

  const categories: FilterCategory[] = [
    'ALL',
    'BUILDINGS',
    'COMMERCIAL',
    'RESIDENTIAL',
    'INFRASTRUCTURE',
    'INTERIOR',
    'OFFICE'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects-section" className="py-20 sm:py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 tracking-tight">
            Recent Projects
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Selected geotechnical reviews, structural peer calculations, and on-site engineering supervisions across Addis Ababa.
          </p>
        </div>

        {/* Filter Navigation Tabs matching screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-gray-950 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6-Card Bento/Masonry Grid Matching Screenshot */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project, idx) => {
              // Center card is featured with golden yellow background (idx === 1 when ALL is selected)
              const isCenterGoldenCard = (activeCategory === 'ALL' && idx === 1) || project.isFeatured;

              if (isCenterGoldenCard) {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => onSelectProject(project as ProjectItem)}
                    className="relative bg-amber-400 rounded-xl p-8 sm:p-10 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer min-h-[340px] group overflow-hidden"
                  >
                    {/* Background subtle geometry */}
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-amber-300/60 pointer-events-none" />
                    
                    {/* Plus Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-amber-500/80 group-hover:bg-gray-950 group-hover:text-amber-400 text-gray-950 flex items-center justify-center mb-5 transition-colors shadow-inner">
                      <Plus className="w-6 h-6 stroke-[2.5]" />
                    </div>

                    {/* Featured Project Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-950 uppercase tracking-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Subtitle / Category */}
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide uppercase font-mono">
                      {project.subcategory || project.category}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-gray-950 bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-sm transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Engineering Dossier</span>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject(project as ProjectItem)}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col min-h-[340px]"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-white/95 text-gray-900 text-[10px] font-bold font-mono px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
                      {project.category}
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {project.year}
                    </div>

                    {/* Quick view overlay icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-amber-400 text-gray-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info Footer */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                      <span className="flex items-center gap-1 truncate max-w-[170px]">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span className="truncate">{project.location.split(',')[0]}</span>
                      </span>
                      <span className="font-semibold text-gray-700">{project.area}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Golden "ALL PROJECTS" Button Matching Screenshot */}
        <div className="mt-12 text-center">
          <button
            id="btn-all-projects-toggle"
            onClick={() => {
              if (showAll) {
                setShowAll(false);
              } else {
                setShowAll(true);
                setActiveCategory('ALL');
              }
            }}
            className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded-md shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
          >
            {showAll ? 'SHOW LESS PROJECTS' : 'ALL PROJECTS'}
          </button>
        </div>

      </div>
    </section>
  );
};
