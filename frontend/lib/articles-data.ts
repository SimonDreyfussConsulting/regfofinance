// lib/articles-data.ts
// This file contains ONLY types and static data - NO fs imports
// Safe to import from both server and client components

export type ArticleCategory =
  | 'credit-cards'
  | 'personal-loans'
  | 'budgeting'
  | 'banking'
  | 'save-money'
  | 'make-money'
  | 'debt'
  | 'news';

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content?: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  category: ArticleCategory;
  categoryLabel: string;
  tags?: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  imageAttribution?: string;
  readTime: number;
  communityDataPoints?: number;
  isPublished: boolean;
  isFeatured?: boolean;
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'credit-cards': 'Credit Cards',
  'personal-loans': 'Personal Loans',
  'budgeting': 'Budgeting',
  'banking': 'Banking',
  'save-money': 'Save Money',
  'make-money': 'Make Money',
  'debt': 'Debt',
  'news': 'News',
};

export const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  'credit-cards': 'bg-blue-100 text-blue-800',
  'personal-loans': 'bg-green-100 text-green-800',
  'budgeting': 'bg-purple-100 text-purple-800',
  'banking': 'bg-yellow-100 text-yellow-800',
  'save-money': 'bg-teal-100 text-teal-800',
  'make-money': 'bg-orange-100 text-orange-800',
  'debt': 'bg-red-100 text-red-800',
  'news': 'bg-gray-100 text-gray-800',
};

// Placeholder articles for categories without MDX content yet
export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    slug: 'best-balance-transfer-cards-2026',
    title: 'Best Balance Transfer Cards for 2026',
    excerpt: 'Analysis of 3,200+ Reddit discussions reveals which balance transfer cards actually help people pay down debt faster.',
    author: 'RegularFolkFinance Research Team',
    publishedAt: '2025-01-15',
    category: 'credit-cards',
    categoryLabel: 'Credit Cards',
    tags: ['balance-transfer', 'debt-payoff', 'credit-cards'],
    readTime: 8,
    communityDataPoints: 3200,
    isPublished: false,
  },
  {
    slug: 'emergency-fund-guide',
    title: 'How Much Emergency Fund Do You Really Need?',
    excerpt: 'We analyzed what 5,000+ Redditors actually saved and what worked for different income levels.',
    author: 'RegularFolkFinance Research Team',
    publishedAt: '2025-01-10',
    category: 'save-money',
    categoryLabel: 'Save Money',
    tags: ['emergency-fund', 'savings', 'financial-security'],
    readTime: 10,
    communityDataPoints: 5000,
    isPublished: false,
  },
  {
    slug: 'side-hustles-that-actually-work',
    title: 'Side Hustles That Actually Work in 2026',
    excerpt: 'Real income reports from 2,500+ Reddit users on what side gigs are worth your time.',
    author: 'RegularFolkFinance Research Team',
    publishedAt: '2025-01-05',
    category: 'make-money',
    categoryLabel: 'Make Money',
    tags: ['side-hustle', 'extra-income', 'gig-economy'],
    readTime: 12,
    communityDataPoints: 2500,
    isPublished: false,
  },
];