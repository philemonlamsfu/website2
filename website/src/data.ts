import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    id: 'r1',
    key: 'PK',
    company: 'Connor, Clark & Lunn',
    period: 'May 2026 – Present',
    role: 'Intern, Investment Data Architecture',
    type: 'Internship',
    location: 'Vancouver, Hybrid',
    details: {
      aboutLabel: 'About the Organization',
      about: 'CC&L Financial Group is one of Canada\'s largest privately owned investment management firms, managing over $100B in AuM through diverse, specialized investment teams.',
      roleOverview: 'Contributing to data governance initiatives such as maintaining data lineage, enhancing the enterprise data catalog, and managing data dictionaries across the firm\'s data platforms.',
      tools: 'Microsoft Purview, Solidatus, Excel'
    },
    logo: '/CCL.jpeg'
  },
  {
    id: 'r2',
    key: 'FK',
    company: 'RBC Global Asset Management',
    period: 'Jan 2026 – Apr 2026',
    role: 'Data Analyst Co-op',
    type: 'Co-op',
    location: 'Vancouver, Hybrid',
    details: {
      aboutLabel: 'About the Organization',
      about: 'A global leader in investment management, managing approximately CAD $785 billion (as of Dec 31, 2025) in AuM.',
      roleOverview: 'I monitored and maintained data quality and controlled data changes to ensure product, strategy, and securities data remained complete, accurate, and consistent. I collaborated with data stewards to document and enrich business metadata for data products.',
      tools: 'SQL, Collibra, Eagle, Excel, Tableau'
    },
    logo: '/RBC.jpg'
  },
  {
    id: 'r3',
    key: 'FK',
    company: 'Beedie School of Business',
    period: 'Sep 2025 – Dec 2025',
    role: 'Teaching Assistant',
    type: 'Contract',
    location: 'Burnaby, On-site',
    details: {
      aboutLabel: 'About the Institution',
      about: 'SFU\'s Beedie School of Business is accredited by AACSB and EQUIS, recognized for innovation and social responsibility.',
      roleOverview: 'Ran open lab sessions and graded assignments / midterms for 100+ students in Data Analytics and Visualizations (BUS 336).',
      tools: 'Excel, Tableau'
    },
    logo: '/beedie.png'
  }
];