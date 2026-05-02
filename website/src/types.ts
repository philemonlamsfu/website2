export interface Experience {
  id: string;
  key: 'PK' | 'FK';
  company: string;
  period: string;
  role: string;
  type: string;
  location: string;
  details: {
    aboutLabel: string;
    about: string;
    roleOverview: string;
    tools: string;
  };
  logo: string;
}