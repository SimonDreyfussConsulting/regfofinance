export type ArticleCategory =
  | 'market-news'
  | 'credit-cards'
  | 'personal-loans'
  | 'community-insights'
  | 'money-tips'
  | 'budgeting';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  publishedAt: string;
  readTime: number;
  featuredImage?: string;
  communityDataPoints?: number; // For Community Pulse badge
  isPublished: boolean; // false = shows Coming Soon overlay
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'market-news': 'Market News',
  'credit-cards': 'Credit Cards',
  'personal-loans': 'Personal Loans',
  'community-insights': 'Community Insights',
  'money-tips': 'Money Tips',
  'budgeting': 'Budgeting',
};

export const CATEGORY_COLORS: Record<ArticleCategory, string> = {
  'market-news': 'bg-blue-100 text-blue-800',
  'credit-cards': 'bg-teal-100 text-teal-800',
  'personal-loans': 'bg-orange-100 text-orange-800',
  'community-insights': 'bg-purple-100 text-purple-800',
  'money-tips': 'bg-green-100 text-green-800',
  'budgeting': 'bg-cyan-100 text-cyan-800',
};

// Placeholder articles - ALL have isPublished: false
// These will show "Coming Soon" overlay, not link anywhere
export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    slug: 'mint-shutdown-best-alternatives-2025',
    title: 'Mint Is Gone: The Best Alternatives According to Reddit',
    excerpt: 'We analyzed 500+ Reddit discussions from r/personalfinance, r/ynab, and r/budget to find what real budgeters recommend after Mint\'s shutdown.',
    category: 'budgeting',
    categoryLabel: 'Budgeting',
    publishedAt: '2025-12-10',
    readTime: 8,
    communityDataPoints: 500,
    featuredImage: '/images/articles/mint-alternatives-featured.jpg',
    isPublished: false,
  },
  {
    slug: 'fed-rate-decision-reddit-reaction',
    title: 'Fed Holds Rates: What Reddit\'s r/personalfinance Is Saying',
    excerpt: 'We analyzed 2,400 comments from the past week to see how real people are reacting to the Fed\'s latest decision and what it means for your money.',
    category: 'market-news',
    categoryLabel: 'Market News',
    publishedAt: '2025-12-01',
    readTime: 6,
    communityDataPoints: 2400,
    isPublished: false,
  },
  {
    slug: 'chase-sapphire-vs-reserve-2025',
    title: 'Chase Sapphire Preferred vs Reserve: 2025 Community Verdict',
    excerpt: 'After analyzing 5,200+ Reddit discussions, here\'s which Sapphire card real travelers actually recommend based on spending habits.',
    category: 'credit-cards',
    categoryLabel: 'Credit Cards',
    publishedAt: '2025-11-28',
    readTime: 8,
    communityDataPoints: 5200,
    featuredImage: '/images/articles/chase-sapphire-comparison.jpg',
    isPublished: false,
  },
  {
    slug: 'best-personal-loans-holiday-debt',
    title: 'Best Personal Loans for Holiday Debt - Real Borrower Experiences',
    excerpt: 'The holidays are over, the bills are in. Here\'s what borrowers who consolidated holiday debt say about their lender experiences.',
    category: 'personal-loans',
    categoryLabel: 'Personal Loans',
    publishedAt: '2025-11-25',
    readTime: 7,
    communityDataPoints: 890,
    featuredImage: '/images/articles/personal-loans-holiday-debt.jpg',
    isPublished: false,
  },
  {
    slug: 'how-redditors-paid-off-student-loans',
    title: 'How 10,000 Redditors Paid Off Their Student Loans',
    excerpt: 'We analyzed a decade of r/studentloans success stories to find the strategies that actually worked for real borrowers.',
    category: 'community-insights',
    categoryLabel: 'Community Insights',
    publishedAt: '2025-11-22',
    readTime: 12,
    communityDataPoints: 10000,
    isPublished: false,
  },
  {
    slug: 'five-money-moves-january-2025',
    title: '5 Money Moves for January 2025',
    excerpt: 'New year, new financial habits. These are the five things the personal finance community recommends doing this month.',
    category: 'money-tips',
    categoryLabel: 'Money Tips',
    publishedAt: '2025-11-20',
    readTime: 5,
    isPublished: false,
  },
  {
    slug: 'credit-card-late-fee-cap-explained',
    title: 'Credit Card Late Fees Capped at $8: What This Means for You',
    excerpt: 'The CFPB\'s new rule takes effect soon. Here\'s how it impacts your cards and what Reddit users are saying about it.',
    category: 'market-news',
    categoryLabel: 'Market News',
    publishedAt: '2025-11-18',
    readTime: 4,
    communityDataPoints: 1500,
    isPublished: false,
  },
];

export function getArticlesByCategory(category?: ArticleCategory): Article[] {
  if (!category) return PLACEHOLDER_ARTICLES;
  return PLACEHOLDER_ARTICLES.filter(article => article.category === category);
}

export function getFeaturedArticle(): Article {
  return PLACEHOLDER_ARTICLES[0]; // First article is featured
}

export function getRecentArticles(count: number = 6): Article[] {
  return PLACEHOLDER_ARTICLES.slice(0, count);
}

export function getLatestArticleByCategory(categorySlug: string): Article | null {
  // Map URL slugs to ArticleCategory values
  const categoryMap: Record<string, ArticleCategory> = {
    'budgeting': 'budgeting',
    'personal-loans': 'personal-loans',
    'credit-cards': 'credit-cards',
    'banking': 'market-news', // fallback
    'mortgages': 'market-news', // fallback
    'retirement': 'money-tips', // fallback
    'debt': 'personal-loans', // fallback
  };

  const articleCategory = categoryMap[categorySlug];
  if (!articleCategory) return null;

  const filtered = PLACEHOLDER_ARTICLES
    .filter(article => article.category === articleCategory)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return filtered[0] || null;
}
