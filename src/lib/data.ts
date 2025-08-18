export type Project = {
  id: string;
  title: string;
  client: string;
  year: number;
  discipline: string;
  sector: string;
  imageUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kinetic Identity',
    client: 'Tech Innovate',
    year: 2023,
    discipline: 'Brand Identity',
    sector: 'Technology',
    imageUrl: '/images/kinetic-identity.png',
    featured: true,
  },
  {
    id: '2',
    title: 'Artisan Cafe Packaging',
    client: 'The Daily Grind',
    year: 2023,
    discipline: 'Packaging',
    sector: 'Food & Beverage',
    imageUrl: '/images/Portfolio Prateeq_page-0002.jpg',
  },
  {
    id: '3',
    title: 'City Museum Exhibition',
    client: 'Metropolis Arts',
    year: 2022,
    discipline: 'Exhibition',
    sector: 'Arts & Culture',
    imageUrl: '/images/Portfolio Prateeq_page-0021.jpg',
    featured: true,
  },
  {
    id: '4',
    title: 'Future of Mobility',
    client: 'AutoDrive Inc.',
    year: 2024,
    discipline: 'Web & Digital',
    sector: 'Automotive',
    imageUrl: '/images/future-of-mobility.png',
  },
  {
    id: '5',
    title: 'The Modernist',
    client: 'Phaidon Press',
    year: 2021,
    discipline: 'Books',
    sector: 'Publishing',
    imageUrl: '/images/the-modernist.png',
    featured: true,
  },
  {
    id: '6',
    title: 'Sustainable Futures',
    client: 'GreenEnergy Co.',
    year: 2023,
    discipline: 'Brand Identity',
    sector: 'Energy',
    imageUrl: '/images/sustainable-futures.png',
  },
  {
    id: '7',
    title: 'SoundWave Festival',
    client: 'Echo Events',
    year: 2024,
    discipline: 'Brand Identity',
    sector: 'Entertainment',
    imageUrl: '/images/soundwave-festival.png',
    featured: true,
  },
  {
    id: '8',
    title: 'Urban Living',
    client: 'Habitat Real Estate',
    year: 2022,
    discipline: 'Web & Digital',
    sector: 'Real Estate',
    imageUrl: '/images/urban-living.png',
  },
  {
    id: '9',
    title: 'The Minimalist Wardrobe',
    client: 'Style Theory',
    year: 2023,
    discipline: 'Packaging',
    sector: 'Fashion',
    imageUrl: '/images/the-minimalist-wardrobe.png',
    featured: true,
  },
];

export const disciplines = [
  'Brand Identity',
  'Web & Digital',
  'Packaging',
  'Books',
  'Exhibition',
];

export const sectors = [
  'Technology',
  'Arts & Culture',
  'Food & Beverage',
  'Publishing',
  'Automotive',
  'Energy',
  'Entertainment',
  'Real Estate',
  'Fashion',
];

export const contactInfo = [
  {
    city: 'Delhi',
    address: '301-A, World Trade Tower, Adjacent to Hotel Intercontinental Grand, Barakhamba Lane, Connaught Place, New Delhi, Delhi, India - 110001.',
    email: 'prateeqkumar@gmail.com',
  },
];
