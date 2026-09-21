import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Share2, BookOpen, HardHat } from 'lucide-react';
import { NewsArticle } from '../types';

interface ArticleDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenQuote
}) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div 
        id="article-detail-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl my-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 text-gray-900"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950">
            <div className="flex items-center gap-2">
              <span className="bg-gray-950 text-amber-400 text-xs font-mono font-bold px-2.5 py-0.5 rounded">
                TECHNICAL DISPATCH
              </span>
              <span className="text-xs font-mono text-gray-900">{article.date}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-950 hover:bg-black/10 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-gray-900 leading-tight mb-3">
                {article.title}
              </h3>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 font-mono pb-4 border-b border-gray-100">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-gray-700">{article.author || 'Tibeb Engineering Desk'}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {article.content ? (
                article.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p>{article.excerpt}</p>
              )}
            </div>

            {/* Engineering Callout */}
            <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r text-xs text-amber-950">
              <span className="font-bold block mb-1">Standard Reference:</span>
              <span>Compliant with Ethiopian Building Code Standard (EBCS-EN) and Ministry of Urban Development & Construction (MoWUD) standards.</span>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded text-xs font-bold uppercase"
              >
                Back to Articles
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold text-xs uppercase tracking-wider rounded shadow cursor-pointer"
              >
                Discuss with Engineer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
