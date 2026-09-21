export interface ServiceItem {
  id: string;
  numberCode: string;
  title: string;
  tagline: string;
  category: string;
  standardCodes: string[];
  description: string;
  fieldDeliverables: string[];
  inspectionPoints: string[];
  localAddisContext: string;
  primaryRiskMitigated: string;
}

export interface ProcessPhase {
  phaseNum: string;
  code: string;
  name: string;
  subtitle: string;
  timeframe: string;
  objective: string;
  gateChecks: {
    item: string;
    requirement: string;
    criticality: 'CRITICAL' | 'HIGH' | 'MANDATORY';
  }[];
  keyDeliverables: string[];
  signOffRole: string;
}

export interface StatMetric {
  id: string;
  targetValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  subtext: string;
  metricCode: string;
  badge: string;
}

export interface AddisProjectTypology {
  id: string;
  name: string;
  subcities: string[];
  avgGfaRange: string;
  primarySoilRisk: string;
  keyCompliance: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'BUILDINGS' | 'COMMERCIAL' | 'RESIDENTIAL' | 'INFRASTRUCTURE' | 'INTERIOR' | 'OFFICE';
  subcategory?: string;
  image: string;
  location: string;
  area: string;
  client: string;
  description: string;
  year: string;
  isFeatured?: boolean;
  featuredTagline?: string;
}

export interface NewsArticle {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating?: number;
}

export interface PartnerLogo {
  id: string;
  name: string;
  category: string;
}

export interface ManifestoPillar {
  id: string;
  index: string;
  title: string;
  technicalSubhead: string;
  body: string;
  specTag: string;
  ebcsRef: string;
}
