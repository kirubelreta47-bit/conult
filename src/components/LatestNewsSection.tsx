import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { NEWS_ARTICLES } from '../data';
import { NewsArticle } from '../types';

interface LatestNewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({ onSelectArticle }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <section id="news-section" className="py-20 sm:py-24 bg-gray-50 text-gray-900 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 tracking-tight">
            Latest News & Insights
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Technical bulletins, Ethiopian building code updates, and geotechnical case studies from our lead engineering partners.
          </p>
        </div>

        {/* 3 News Cards Grid Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {NEWS_ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => onSelectArticle(article as NewsArticle)}
              className="bg-white rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-1"
            >
              <div>
                {/* Yellow "News" tag pill matching screenshot */}
                <span className="inline-block bg-amber-400 text-gray-950 text-[11px] font-bold font-mono px-3 py-1 rounded-full mb-4 shadow-sm">
                  {article.tag}
                </span>

                {/* News Title */}
                <h3 className="text-base sm:text-lg font-bold font-sans text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug mb-3">
                  {article.title}
                </h3>

                {/* News Excerpt */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Date & "— MORE" Action Row matching screenshot */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono text-[11px]">{article.date}</span>
                <span className="font-bold text-gray-800 group-hover:text-amber-600 transition-colors flex items-center gap-1">
                  — MORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots Matching Screenshot */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button 
            onClick={() => setActivePageIndex(0)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activePageIndex === 0 ? 'bg-amber-400 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label="Page 1"
          />
          <button 
            onClick={() => setActivePageIndex(1)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              activePageIndex === 1 ? 'bg-amber-400 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label="Page 2"
          />
        </div>

      </div>
    </section>
  );
};
