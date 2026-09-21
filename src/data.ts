import { ServiceItem, ProcessPhase, StatMetric, ManifestoPillar } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'feasibility-due-diligence',
    numberCode: 'SRV-01',
    title: 'Feasibility & Geotechnical Due Diligence',
    tagline: 'Subsurface risk triage, zoning yield modeling, and structural constructibility audits prior to capital commitment.',
    category: 'PRE-CONSTRUCTION & ADVISORY',
    standardCodes: ['EBCS-EN 1997-1 (Geotechnical)', 'Addis Structural Plan 2017-2027', 'ERA Geotech Manual'],
    description: 'We subject site acquisitions to rigorous engineering scrutiny before excavation begins. From testing expansive black cotton clay profiles across Addis Ababa to mapping volcanic faulting, we ensure your building foundation is engineered for actual geological load.',
    fieldDeliverables: [
      'Comprehensive Geotechnical Borehole & SPT Verification Report',
      'Zoning, FAR, and Building Height Restriction Clearance Audit',
      'Structural Constructibility & Foundation Optimization Study',
      'Preliminary Capex & Foreign Exchange Sensitivity Model'
    ],
    inspectionPoints: [
      'Standard Penetration Test (SPT) blow-count calibration',
      'Groundwater table seasonal fluctuation analysis',
      'Slope stability & retaining earth pressure verification',
      'Adjacent structure underpinning risk evaluation'
    ],
    localAddisContext: 'Crucial for sites in Gotera, Bole Bulbula, Lideta, and Lebu where heavy plastic clays induce differential settlement up to 180mm if unaddressed.',
    primaryRiskMitigated: 'Catastrophic foundation settlement & unbudgeted basement shoring cost overruns.'
  },
  {
    id: 'structural-design-review',
    numberCode: 'SRV-02',
    title: 'Structural Design Review & Seismic Audit',
    tagline: 'Independent third-party peer review of reinforced concrete, post-tensioned slabs, and structural steel frames.',
    category: 'ENGINEERING PEER REVIEW',
    standardCodes: ['EBCS-EN 1992 (Concrete)', 'EBCS-EN 1998 (Seismic)', 'ACI 318-19 Peer Review'],
    description: 'We dissect engineer-of-record design calculations, finite element structural models (ETABS/SAFE), and reinforcement detailing. We identify over-designed elements for value engineering and under-designed load paths for immediate structural reinforcement.',
    fieldDeliverables: [
      'Independent 3D Finite Element Structural Model Cross-Check',
      'Seismic Lateral Force Resisting System (LFRS) Audit Report',
      'Rebar Detailing & Shear Wall Congestion Mitigation Review',
      'Value Engineering Memo (Typical 8–14% Steel Tonnage Optimization)'
    ],
    inspectionPoints: [
      'High seismic zone ductile detailing (Addis Ababa Zone 4 / Rift Valley)',
      'Punching shear capacity at flat plate column interfaces',
      'Second-order P-Delta effects in high-rise dual core systems',
      'Deflection and long-term creep in post-tensioned / transfer beams'
    ],
    localAddisContext: 'Calibrated specifically for Ethiopia’s revised seismic acceleration coefficients (ag = 0.15g) and local C25/30 to C40/50 ready-mix availability.',
    primaryRiskMitigated: 'Seismic drift vulnerabilities, progressive collapse hazards, and structural steel over-expenditure.'
  },
  {
    id: 'cost-quantity-surveying',
    numberCode: 'SRV-03',
    title: 'Cost Engineering & Quantity Surveying',
    tagline: 'Bulletproof Bill of Quantities (BOQ), material take-offs, FX escalation hedging, and interim payment validation.',
    category: 'COMMERCIAL & COST CONTROL',
    standardCodes: ['CESMM4 / NRM2', 'MoWUD Standard Method of Measurement', 'PPA 2011 Guidelines'],
    description: 'Unchecked contractor claims and ambiguous BOQ line items drain construction budgets. We establish unassailable cost baselines, re-measure executed field quantities against actual site as-builts, and verify every Birr billed.',
    fieldDeliverables: [
      'Definitive Itemized Bill of Quantities (Pre-Tender & Post-Tender)',
      'FX Sensitivity & Local/Imported Material Inflation Models (Cement, Rebar, MEP)',
      'Monthly Interim Payment Certificate (IPC) Quantitative Field Audits',
      'Final Account Negotiation & Reconciliation Binder'
    ],
    inspectionPoints: [
      'Physical laser scanning & geometric cross-section check vs BOQ',
      'Batch-ticket vs pour-volume reconciliation for ready-mix concrete',
      'Rebar scrap/lap factor auditing (capping waste below 4.5%)',
      'Contractor variation justification & unit-rate breakdown audit'
    ],
    localAddisContext: 'Directly addresses currency flotation adjustments, customs import tariff changes on electro-mechanical equipment, and regional cement quotas.',
    primaryRiskMitigated: 'Phantom quantity billing, speculative contractor variations, and runaway capital creep.'
  },
  {
    id: 'project-management',
    numberCode: 'SRV-04',
    title: 'Project Management & CPM Scheduling',
    tagline: 'Owner’s engineering representative driving schedule adherence, procurement logistics, and subcontractor coordination.',
    category: 'SITE COMMAND & GOVERNANCE',
    standardCodes: ['PMBOK 7th Ed.', 'FIDIC Project Governance', 'ISO 21500'],
    description: 'We do not manage from air-conditioned offices. Our resident project managers operate with boots on the ground, enforcing the Critical Path Method (CPM), coordinating supply chains, and holding general contractors to contractual milestones.',
    fieldDeliverables: [
      'Baseline CPM Schedule (Primavera P6 / MS Project) with Earned Value (EVM)',
      'Weekly 4D Construction Milestone & Critical Path Hazard Warnings',
      'Procurement Tracking Matrix for Long-Lead Imported Materials',
      'Subcontractor QA/QC Interface & Daily Progress Ledger'
    ],
    inspectionPoints: [
      'Daily site manpower, equipment uptime, and weather downtime tracking',
      'Critical path task float monitoring and early delay mitigation',
      'RFI (Request for Information) turnaround tracking (<48 hr standard)',
      'Structural curing period vs formwork stripping cycle enforcement'
    ],
    localAddisContext: 'Engineered around Addis Ababa wet season (Kiremt July–Sept) logistics constraints, power outages, and municipal water supply contingency.',
    primaryRiskMitigated: 'Uncoordinated subcontractor handover delays, milestone defaults, and prolonged idle crane charges.'
  },
  {
    id: 'site-supervision-qa-qc',
    numberCode: 'SRV-05',
    title: 'Resident Site Supervision & QA/QC',
    tagline: 'Relentless on-site testing, concrete cylinder crushing, rebar yield testing, and non-destructive structural inspection.',
    category: 'FIELD TESTING & INTEGRITY',
    standardCodes: ['EBCS 2:1995 / ES EN 206', 'ASTM C39 / ISO 1920 (Concrete)', 'AWS D1.1 (Structural Welding)'],
    description: 'A design is only as good as the rebar placed in the formwork before the pour. Our resident inspectors witness every batch plant slump, pull test every weld, crush every concrete test cylinder, and reject non-compliant aggregates on the spot.',
    fieldDeliverables: [
      'Daily Structural Inspection & Concrete Pour Sign-Off Cards',
      '7-Day & 28-Day Concrete Compressive Strength Statistical Analysis',
      'Rebar Tensile Yield & Bend Laboratory Test Verification Certificates',
      'Non-Destructive Testing (Schmidt Hammer & Ultrasonic Pulse Velocity) Reports'
    ],
    inspectionPoints: [
      'Rebar cover spacer placement, tie-wire integrity, and splice lap lengths',
      'Slump flow, water-cement ratio, and temperature at ready-mix discharge',
      'Vibration compaction to prevent honeycombing in dense shear walls',
      'Post-pour wet burlap / curing compound application compliance'
    ],
    localAddisContext: 'Compensates for rapid temperature swings between Addis daytime sun and cold nighttime temperatures at 2,355m altitude affecting concrete curing.',
    primaryRiskMitigated: 'Structural honeycomb voids, substandard rebar yield strength, and premature structural cracking.'
  },
  {
    id: 'contract-claims-advisory',
    numberCode: 'SRV-06',
    title: 'FIDIC Contracts & Claims Advisory',
    tagline: 'Uncompromising contract administration, delay analysis, EoT evaluation, and dispute avoidance for building owners.',
    category: 'LEGAL & CONTRACTUAL RESILIENCE',
    standardCodes: ['FIDIC Red/Yellow/Silver Books (1999 & 2017)', 'MoWUD Standard Conditions', 'PPA Public Contracts'],
    description: 'When disputes arise over Extension of Time (EoT), unforeseen ground conditions, or price adjustment formulas, we protect the project sponsor. We arm clients with time-impact forensic analyses and contractual firepower that stands up in arbitration.',
    fieldDeliverables: [
      'Comprehensive Contractor EoT Claim Forensic Evaluation Reports',
      'Time Impact Analysis (TIA) & As-Built vs. As-Planned Delay Matrix',
      'FIDIC Sub-Clause 20.1 / 8.4 Compliance & Notice Admissibility Audits',
      'Dispute Avoidance & Amicable Settlement Defense Briefs'
    ],
    inspectionPoints: [
      'Concurrent delay causation vs contractor-attributable float erosion',
      'Proof of actual financial loss and resource idling documentation',
      'Price escalation formula parameter and Ethiopian Central Stat data validity',
      'Formal contractual notification timeline compliance'
    ],
    localAddisContext: 'Specialized in bridging international FIDIC standard clauses with Ethiopian Ministry of Urban Development (MoWUD) and Federal High Court precedents.',
    primaryRiskMitigated: 'Unjustified contractor delay penalties, inflated EoT overhead payouts, and protracted litigation.'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phaseNum: '01',
    code: 'PHASE-ASSESS',
    name: 'ASSESS',
    subtitle: 'Diagnostic Forensic Baseline & Subsurface Validation',
    timeframe: 'WEEKS 1 – 3',
    objective: 'Subject the proposed design, geotechnical conditions, and commercial contracts to brutal forensic scrutiny to identify hidden project failure modes.',
    gateChecks: [
      { item: 'Geotechnical Soil Profile & Borehole Core Rig Verification', requirement: 'SPT blow counts verified across 100% of building footprint', criticality: 'MANDATORY' },
      { item: 'Structural Design Model (ETABS/SAFE) Independent Peer Recalculation', requirement: 'Zero unauthorized stress exceedances under EBCS-EN seismic loads', criticality: 'CRITICAL' },
      { item: 'BOQ Itemized Rate Reconciliation & Arithmetic Takeoff Audit', requirement: 'Cross-verification against architectural & structural working drawings', criticality: 'MANDATORY' },
      { item: 'Contractual Ambiguity & Risk Allocation Matrix (FIDIC/MoWUD)', requirement: 'Identification of unilateral contractor claim exposure clauses', criticality: 'HIGH' }
    ],
    keyDeliverables: [
      'Field Audit Baseline Memorandum (FABM)',
      'Subsurface & Foundation Risk Matrix',
      'Design Optimization & Value Engineering Register',
      'Procurement & Contractor Pre-qualification Dossier'
    ],
    signOffRole: 'Lead Principal Structural Engineer (PE / P.Eng Ethiopia License)'
  },
  {
    phaseNum: '02',
    code: 'PHASE-PLAN',
    name: 'PLAN',
    subtitle: 'Cost Locking, CPM Execution Framework & Quality Protocols',
    timeframe: 'WEEKS 4 – 6',
    objective: 'Translate forensic findings into an ironclad execution protocol. Lock down supplier pricing, align critical path milestones, and establish unshakeable site inspection gates.',
    gateChecks: [
      { item: 'Lock-in Approved Bill of Quantities (BOQ) with Definitive Unit Rates', requirement: 'No open-ended provisional sums without engineering caps', criticality: 'MANDATORY' },
      { item: 'Establish 4D Primavera P6 Critical Path Baseline with Weather Buffer', requirement: 'Incorporation of Addis Ababa 90-day Kiremt rain contingency', criticality: 'HIGH' },
      { item: 'Laboratory Testing & Concrete Ready-Mix Plant Audits', requirement: 'Inspection of aggregate source, water pH, and admixture certifications', criticality: 'CRITICAL' },
      { item: 'RFI & Submittal Turnaround Protocol with 48-Hour SLA', requirement: 'Standardized digital log to prevent contractor delay claim generation', criticality: 'MANDATORY' }
    ],
    keyDeliverables: [
      'Master Project Execution Plan (PEP)',
      'Site Specific QA/QC Manual & Inspection Test Plan (ITP)',
      'Foreign Currency (FX) & Local Material Procurement Milestone Chart',
      'Approved Contractor Baseline Schedule & Cashflow Curve'
    ],
    signOffRole: 'Chief Resident Engineer & Lead Cost Consultant (QS)'
  },
  {
    phaseNum: '03',
    code: 'PHASE-DELIVER',
    name: 'DELIVER',
    subtitle: 'Boots-on-the-Ground Site Command & Uncompromising Closeout',
    timeframe: 'CONSTRUCTION TO COMMISSIONING',
    objective: 'Enforce continuous site surveillance, witness all structural concrete pours, audit monthly contractor invoices, and steer the building to zero-defect handover.',
    gateChecks: [
      { item: 'Mandatory Pre-Pour Reinforcement & Formwork Written Sign-Off', requirement: '100% inspection of cover, ties, bar diameter, and cleanliness before pump start', criticality: 'CRITICAL' },
      { item: 'Rigorous 7-Day & 28-Day Concrete Cube Compressive Crushing Tests', requirement: 'Statistical verification exceeding characteristic fck target strength', criticality: 'CRITICAL' },
      { item: 'Interim Payment Certificate (IPC) Joint Site Quantity Measurement', requirement: 'Zero payment for defective or uninspected work packages', criticality: 'MANDATORY' },
      { item: 'MEP Pressure Testing, Fire-Life Safety, & Commissioning Sign-Off', requirement: 'Full hydraulic and electrical load verification prior to occupancy', criticality: 'MANDATORY' }
    ],
    keyDeliverables: [
      'Monthly Executive Engineering & Financial Progress Ledger',
      'Structural As-Built Validation & Testing Certificates Binder',
      'Final Account Agreement & Contractor Claims Settlement Dossier',
      'Occupancy Certificate Compliance Dossier for City Administration'
    ],
    signOffRole: 'Project Director & Client Technical Representative'
  }
];

export const STATS_DATA: StatMetric[] = [
  {
    id: 'stat-portfolio',
    targetValue: 4.8,
    prefix: 'ETB ',
    suffix: 'B+',
    decimals: 1,
    label: 'Capital Portfolio Under Advisory',
    subtext: 'High-rise commercial, industrial parks, and mixed-use developments audited across Addis Ababa and special industrial corridors.',
    metricCode: 'METRIC-CAP-01',
    badge: 'AUDITED ASSETS'
  },
  {
    id: 'stat-audits',
    targetValue: 260,
    prefix: '',
    suffix: '+',
    decimals: 0,
    label: 'Field Inspections & Structural Audits',
    subtext: 'Rigorous on-site engineering evaluations, concrete batch verifications, and geotechnical peer reviews executed.',
    metricCode: 'METRIC-QC-02',
    badge: 'FIELD REVIEWS'
  },
  {
    id: 'stat-failures',
    targetValue: 0,
    prefix: '',
    suffix: ' ZERO',
    decimals: 0,
    label: 'Structural Failures in 14 Years',
    subtext: 'Flawless safety record on all structures engineered, peer-reviewed, or supervised under Tibeb oversight.',
    metricCode: 'METRIC-SAFE-03',
    badge: '100% INTEGRITY'
  },
  {
    id: 'stat-cost-recovered',
    targetValue: 18.4,
    prefix: '',
    suffix: '%',
    decimals: 1,
    label: 'Avg. Capital Saved via Value Engineering',
    subtext: 'Steel optimization, unnecessary foundation over-design trimming, and aggressive contractor variation auditing.',
    metricCode: 'METRIC-VAL-04',
    badge: 'CAPITAL RECOVERY'
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    id: 'pillar-soil',
    index: '01',
    title: 'THE GROUND IN ADDIS ABABA DOES NOT FORGIVE AMATEURS.',
    technicalSubhead: 'EXPANSIVE CLAYS, VOLCANIC ASH, AND 200MM SWELL PRESSURES.',
    body: 'Addis Ababa sits on a geological tapestry ranging from basalt bedrock in Yeka to treacherous, deep expansive black cotton clays in Gotera and Bole. A generic template foundation will crack in two dry-wet cycles. We enforce continuous geotechnical borehole audits and pile integrity testing before a single cubic meter of mud is moved.',
    specTag: 'GEOTECH RIGOR',
    ebcsRef: 'EBCS-EN 1997-1'
  },
  {
    id: 'pillar-altitude',
    index: '02',
    title: 'HIGH-ALTITUDE CONCRETE IS NOT A THEORETICAL EQUATION.',
    technicalSubhead: '2,355M ELEVATION, LOW RELATIVE HUMIDITY, AND RAPID HYDRATION LOSS.',
    body: 'At 2,355 meters above sea level, intense UV exposure and rapid atmospheric moisture loss will destroy unmonitored concrete within four hours of placement. We station our inspectors at the batch plant and the pump discharge to enforce exact water-cement ratios, slump tolerances, and mandatory wet burlap curing regimens.',
    specTag: 'MIX VERIFICATION',
    ebcsRef: 'ES EN 206-1'
  },
  {
    id: 'pillar-seismic',
    index: '03',
    title: 'RIFT VALLEY SEISMICITY DEMANDS UNCOMPROMISING DUCTILITY.',
    technicalSubhead: 'ZONE 4 SEISMIC PROXIMITY AND SHEAR WALL CONGESTION MANAGEMENT.',
    body: 'The Main Ethiopian Rift is an active tectonic boundary. Inadequate seismic hook detailing or improper lap splices turn high-rise buildings into fatal liabilities. Our structural reviews stress-test lateral resisting systems under updated dynamic acceleration models, eliminating shear vulnerabilities.',
    specTag: 'SEISMIC DUCTILITY',
    ebcsRef: 'EBCS-EN 1998'
  },
  {
    id: 'pillar-commercial',
    index: '04',
    title: 'COSTS ARE WON IN THE BILL OF QUANTITIES, NOT IN COURT.',
    technicalSubhead: 'FX VOLATILITY, IMPORT ESCALATIONS, AND CONTRACTOR CLAIMS DEFENSE.',
    body: 'Unscrupulous contractors exploit poorly drafted BOQ line items and ambiguous FIDIC provisions to generate multimillion-Birr variation claims. We protect project owners through unassailable quantity takeoffs, forensic delay analysis, and transparent material escalation benchmarks.',
    specTag: 'FIDIC DEFENSE',
    ebcsRef: 'FIDIC 1999 / MoWUD'
  }
];

export const ADDIS_SUBCITIES = [
  'Bole (Commercial / High-Rise)',
  'Kirkos (Kazanchis / Financial District)',
  'Yeka (Residential / Institutional)',
  'Nifas Silk-Lafto (Gotera / Mixed-Use)',
  'Lideta (Urban Renewal Corridor)',
  'Arada (Piazza / Heritage Zone)',
  'Akaki Kality (Industrial / Warehousing)',
  'Kolfe Keranio (Commercial / Logistics)',
  'Gullele (Topographic Slopes)',
  'Addis Ketema (Mercato / Dense Commercial)',
  'Oromia Special Zone (Dukem / Sebeta / Burayu)'
];

export const PROJECT_TYPOLOGIES = [
  { id: 'high-rise', name: 'High-Rise Commercial / Office Tower (>12 Stories)', typicalGfa: '15,000 – 45,000 m²' },
  { id: 'mixed-use', name: 'Mixed-Use Residential & Retail Plaza', typicalGfa: '8,000 – 30,000 m²' },
  { id: 'industrial', name: 'Industrial Park / Logistics Warehouse / Factory', typicalGfa: '10,000 – 80,000 m²' },
  { id: 'hospitality', name: 'Hotel / Hospitality & Conference Complex', typicalGfa: '6,000 – 25,000 m²' },
  { id: 'institutional', name: 'Hospital / Healthcare or University Campus', typicalGfa: '12,000 – 50,000 m²' },
  { id: 'infrastructure', name: 'Civil Works / Substation / Structural Earthworks', typicalGfa: 'Specialized Scope' }
];

export interface CoreDiscipline {
  id: string;
  title: string;
  iconType: 'floors' | 'rooms' | 'basements';
  description: string;
  subfeatures: string[];
  linkService: string;
}

export const CORE_DISCIPLINES: CoreDiscipline[] = [
  {
    id: 'floors-roofs',
    title: 'Floors & Roofs',
    iconType: 'floors',
    description: 'Post-tensioned slab analysis, transfer beam deflection control, and high-rise lateral shear wall design compliant with EBCS-EN seismic standards.',
    subfeatures: ['Post-tensioned Slabs', 'Deflection Limits', 'Seismic Core Detailing'],
    linkService: 'Structural Design Review & Seismic Audit'
  },
  {
    id: 'rooms-halls',
    title: 'Rooms & Halls',
    iconType: 'rooms',
    description: 'Full-cycle Project Management, Primavera P6 CPM baseline scheduling, BOQ validation, and contractor price escalation reconciliation.',
    subfeatures: ['Earned Value Management', 'BOQ Quantity Control', 'FIDIC Claims Defense'],
    linkService: 'Project Management & CPM Scheduling'
  },
  {
    id: 'basements-foundations',
    title: 'Basements & Piles',
    iconType: 'basements',
    description: 'Deep excavation shoring, contiguous bored piling, raft foundations, and black cotton clay soil stabilization across treacherous Addis sub-cities.',
    subfeatures: ['Deep Shoring & Anchors', 'Black Cotton Soil Triage', 'Pile Integrity Testing'],
    linkService: 'Feasibility & Geotechnical Due Diligence'
  }
];

export const PROJECTS_DATA = [
  {
    id: 'proj-1',
    title: 'Kazanchis Financial Tower',
    category: 'BUILDINGS',
    subcategory: 'Commercial, Structural Audit',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=800&auto=format&fit=crop',
    location: 'Kazanchis, Kirkos Sub-City, Addis Ababa',
    area: '34,500 m²',
    client: 'National Commercial Development Consortium',
    year: '2025',
    isFeatured: true,
    featuredTagline: 'Structural Audit & Value Engineering',
    description: '28-story dual core commercial banking headquarters. Executed independent peer review of ETABS model, optimized foundation raft thickness saving 120 tons of high-yield rebar.'
  },
  {
    id: 'proj-2',
    title: 'Sarbet Commercial Plaza & Terraces',
    category: 'COMMERCIAL',
    subcategory: 'Retail & Office Complex',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    location: 'Sarbet, Kirkos / Old Airport',
    area: '18,200 m²',
    client: 'Zemen Real Estate & Capital Group',
    year: '2024',
    isFeatured: false,
    description: 'Multi-level mixed-use plaza with post-tensioned spans and expansive basement retail parking. Full CPM schedule management and monthly IPC quantity verification.'
  },
  {
    id: 'proj-3',
    title: 'Bole Bulbula Residential Heights',
    category: 'RESIDENTIAL',
    subcategory: 'Luxury High-Density Living',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
    location: 'Bole Bulbula Sector 4',
    area: '22,400 m²',
    client: 'Addis Skyline Developments',
    year: '2024',
    isFeatured: false,
    description: 'Deep foundation pile inspection and geotechnical black cotton clay stabilization for twin 16-story luxury towers. Zero differential settlement recorded.'
  },
  {
    id: 'proj-4',
    title: 'Gotera Intermodal Logistics Depot',
    category: 'INFRASTRUCTURE',
    subcategory: 'Industrial Logistics & Heavy Pavements',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    location: 'Gotera, Nifas Silk-Lafto',
    area: '48,000 m²',
    client: 'East Africa Freight & Logistics Terminal',
    year: '2025',
    isFeatured: false,
    description: 'Heavy structural steel portal frame design review, concrete slab wear testing, and high-capacity stormwater retaining culverts.'
  },
  {
    id: 'proj-5',
    title: 'Piazza Heritage Creative Center',
    category: 'INTERIOR',
    subcategory: 'Adaptive Reuse & Modern Stairwell',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    location: 'Piazza, Arada Sub-City',
    area: '6,800 m²',
    client: 'Addis Urban Regeneration Project',
    year: '2023',
    isFeatured: false,
    description: 'Structural retrofitting of historical masonry walls with modern cantilevered steel staircases and glazed curtain walls.'
  },
  {
    id: 'proj-6',
    title: 'Meskel Square Financial Annex',
    category: 'OFFICE',
    subcategory: 'Executive Headquarters & Facades',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
    location: 'Meskel Square / Legehar',
    area: '14,000 m²',
    client: 'Horizon Capital Partners',
    year: '2024',
    isFeatured: false,
    description: 'High-performance solar facade structural engineering, energy modeling, and owner representative site supervision.'
  }
];

export const NEWS_ARTICLES = [
  {
    id: 'news-1',
    tag: 'News',
    title: 'Four critical steps to mitigate black cotton clay settlement in Addis Ababa',
    excerpt: 'Deep expansive clays across Gotera and Bole present severe swell-shrink cycles. Here is how deep contiguous piling and moisture barrier curtains protect your foundation.',
    date: 'Feb 22, 2026',
    readTime: '4 min read',
    author: 'Eng. Solomon Worku, Lead Geotechnical',
    content: [
      'Addis Ababa sits on varied geology where volcanic ash layers interface with heavy plastic clay soils. When moisture fluctuates between the dry Bega and rainy Kiremt seasons, swell pressures exceed 220 kPa.',
      '1. Enforce minimum 4-borehole geotechnical investigations extending to non-expansive stratum or basalt rock.',
      '2. Utilize perimeter moisture aprons and deep sub-base replacement with granular crushed rock.',
      '3. Design structurally suspended ground slabs isolated from ground heave with compressible void formers.',
      '4. Continuous pile integrity testing (PIT) on all cast-in-place concrete friction piles before cap placement.'
    ]
  },
  {
    id: 'news-2',
    tag: 'News',
    title: 'High-altitude concrete hydration at 2,355m: Controlling slump loss and thermal cracking',
    excerpt: 'Rapid moisture evaporation and extreme diurnal temperature swings demand customized admixtures and mandatory wet curing protocols on high-rise pours.',
    date: 'Feb 25, 2026',
    readTime: '6 min read',
    author: 'Dr. Hanna Gebre, Senior Materials Specialist',
    content: [
      'At 2,355 meters elevation, the atmospheric pressure and low ambient humidity cause fresh concrete to lose placement workability within 35 minutes of transit from batching plants.',
      'Our resident site inspectors monitor slump retention at discharge, verify water-reducing superplasticizer dosages, and enforce 14-day continuous wet burlap or curing compound application.',
      'Statistical 7-day and 28-day cylinder compressive testing confirms that controlled curing achieves 18% higher characteristic strength compared to uncontrolled air-dried samples.'
    ]
  },
  {
    id: 'news-3',
    tag: 'News',
    title: 'Navigating FIDIC 1999 vs MoWUD contracts amid foreign exchange rate shifts',
    excerpt: 'How building owners can audit material price fluctuation formulas and enforce strict notice timelines to prevent multimillion-Birr contractor claims.',
    date: 'Feb 27, 2026',
    readTime: '5 min read',
    author: 'Ato Kirubel Desta, Lead QS & Claims Counsel',
    content: [
      'Recent macroeconomic adjustments have caused fluctuations in imported rebar, electro-mechanical gear, and structural steel costs.',
      'Under FIDIC Sub-Clause 13.8 and MoWUD standard conditions, price escalation must follow verified indices published by the Central Statistical Agency rather than speculative market quotes.',
      'We establish auditable takeoff baselines and manage monthly interim payment certificates with physical laser measurement to ensure owners only pay for verified in-place work.'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'test-1',
    name: 'Nathanael Hailemariam',
    role: 'Managing Director',
    company: 'Zemen Real Estate Development',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
    quote: 'Tibeb Consult’s independent structural review saved our Kazanchis project over 14 million ETB in rebar redundancy while eliminating two critical shear drift flaws. Their on-site supervision gave our investment board complete peace of mind.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Biruk Tadesse',
    role: 'Chief Executive Officer',
    company: 'East Africa Infrastructure Partners',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
    quote: 'In 14 years of commercial development in Addis Ababa, I have never seen a consultancy enforce CPM milestones and contractor BOQ audits with such rigor. They are indispensable for any high-value development in Ethiopia.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Sara Mengistu',
    role: 'Head of Capital Projects',
    company: 'Horizon Tower Holdings',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop',
    quote: 'Their geotechnical expertise in managing expansive soils and Rift Valley seismic compliance is unmatched. When contractors submitted inflated variation claims, Tibeb’s claims audit protected our budget completely.',
    rating: 5
  }
];

export const PARTNER_LOGOS = [
  { id: 'p-1', name: 'DIMASI', category: 'General Contracting' },
  { id: 'p-2', name: 'MILK CONCRETE', category: 'Ready-Mix Supplies' },
  { id: 'p-3', name: 'APEX REBAR', category: 'High-Yield Steel' },
  { id: 'p-4', name: 'GOLDEN BEAM', category: 'Structural Steel' },
  { id: 'p-5', name: 'MENDOCINO', category: 'Geotech Testing Labs' },
  { id: 'p-6', name: 'HORIZON', category: 'Capital Investment' }
];
