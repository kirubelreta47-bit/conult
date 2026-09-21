import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreDisciplinesSection } from './components/CoreDisciplinesSection';
import { SplitFeatureBanner } from './components/SplitFeatureBanner';
import { RecentProjectsGrid } from './components/RecentProjectsGrid';
import { StatsCounterBand } from './components/StatsCounterBand';
import { LatestNewsSection } from './components/LatestNewsSection';
import { LocationSection } from './components/LocationSection';
import { HardhatPartnersBanner } from './components/HardhatPartnersBanner';
import { Footer } from './components/Footer';

import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { EstimatorModal } from './components/EstimatorModal';
import { CredentialsModal } from './components/CredentialsModal';

import { ProjectItem, NewsArticle } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [credentialsOpen, setCredentialsOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledTypology, setPrefilledTypology] = useState<string | undefined>(undefined);
  const [prefilledSubcity, setPrefilledSubcity] = useState<string | undefined>(undefined);
  const [prefilledGfa, setPrefilledGfa] = useState<string | undefined>(undefined);

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleApplyEstimatorToQuote = (typology: string, subcity: string, gfa: string) => {
    setPrefilledTypology(typology);
    setPrefilledSubcity(subcity);
    setPrefilledGfa(gfa);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-amber-400 selection:text-gray-950">
      
      {/* 1. Header (Top Mini Bar + Main Navigation + "Get a quote") */}
      <Header
        onOpenQuote={() => {
          setPrefilledService('Structural Design Review & Seismic Audit');
          setQuoteModalOpen(true);
        }}
        onOpenEstimator={() => setEstimatorOpen(true)}
        onOpenCredentials={() => setCredentialsOpen(true)}
      />

      {/* Main Sections Body */}
      <main className="flex-1">
        {/* 2. Hero: "BUILDING WORLD TOGETHER" + 3D Builder Figure & Construction Accessories */}
        <Hero
          onOpenQuote={() => setQuoteModalOpen(true)}
          onOpenEstimator={() => setEstimatorOpen(true)}
        />

        {/* 3. Core Disciplines / 3-Card Services: "Stay motivated to lead your business." */}
        <CoreDisciplinesSection
          onSelectDiscipline={handleOpenQuoteWithService}
        />

        {/* 4. Split Feature Banner: "Don't Wait For anything. Build it right today!" */}
        <SplitFeatureBanner
          onOpenQuote={() => setQuoteModalOpen(true)}
          onOpenEstimator={() => setEstimatorOpen(true)}
        />

        {/* 5. Recent Projects Grid: 6-Card Bento Layout with center golden card + Categories */}
        <RecentProjectsGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />

        {/* 6. Stats Counter Band: 5120 Happy Customers, 4351 Completed Projects, 1200 Engineers, 098 Branches */}
        <StatsCounterBand />

        {/* 7. Latest News: 3 Clean White Cards with yellow tags + "— MORE" */}
        <LatestNewsSection
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* 8. Location & Google Maps Headquarters Section */}
        <LocationSection
          onOpenQuote={() => setQuoteModalOpen(true)}
        />

        {/* 9. Hardhat & Partner Brands Banner with www.tibebconsult.et watermark */}
        <HardhatPartnersBanner />
      </main>

      {/* 10. Clean 3-Column Footer (Contact Us, Useful Links, Newsletter + Socials) */}
      <Footer
        onOpenCredentials={() => setCredentialsOpen(true)}
        onOpenEstimator={() => setEstimatorOpen(true)}
        onOpenQuote={() => setQuoteModalOpen(true)}
      />

      {/* Interactive Modal: Get a Quote / Project RFP Dispatch */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={prefilledService}
        initialTypology={prefilledTypology}
        initialSubcity={prefilledSubcity}
        initialGfa={prefilledGfa}
      />

      {/* Interactive Modal: Project Engineering Dossier Detail */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => {
          setSelectedProject(null);
          setQuoteModalOpen(true);
        }}
      />

      {/* Interactive Modal: News Article Reading Drawer */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenQuote={() => {
          setSelectedArticle(null);
          setQuoteModalOpen(true);
        }}
      />

      {/* Interactive Modal: Scope & Geotechnical Risk Evaluator */}
      <EstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onApplyToRfp={handleApplyEstimatorToQuote}
      />

      {/* Interactive Modal: MoWUD Class-1 Engineering Credentials */}
      <CredentialsModal
        isOpen={credentialsOpen}
        onClose={() => setCredentialsOpen(false)}
      />
    </div>
  );
}
