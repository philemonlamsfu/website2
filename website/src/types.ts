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

export interface Idea {
  id: string;
  key: 'PK' | 'FK';
  title: string;
  date: string;
  category: string;
  status: string;
  topic: string;
  details: {
    description: string;
    thoughts: string;
    relevance: string;
  };
  icon: string;
}
