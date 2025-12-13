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
  updatedAt?: string;
  readTime: number;
  featuredImage?: string;
  featuredImageAlt?: string;
  imageAttribution?: string;
  communityDataPoints?: number;
  isPublished: boolean;
  isFeatured?: boolean;
  tags?: string[];
  author?: string;
  content?: string;
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

// Sample published article content for testing
const SAMPLE_ARTICLE_CONTENT = `
## The Current Rate Environment

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

## What Reddit Users Are Saying

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.

> "I've been shopping around and the rates are definitely higher than last year, but I found a decent offer through my credit union." - r/personalfinance user

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Your Options Right Now

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.

### Credit Unions

Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.

### Online Lenders

Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.

### Traditional Banks

Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.

## How to Improve Your Chances

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.

1. **Check your credit score** - Lorem ipsum dolor sit amet
2. **Compare multiple lenders** - Consectetur adipiscing elit
3. **Consider a co-signer** - Sed do eiusmod tempor
4. **Look at credit unions** - Ut labore et dolore magna

## The Bottom Line

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`;

// Articles array - Scout will add new articles here
export const PLACEHOLDER_ARTICLES: Article[] = [
  // ✅ PUBLISHED & FEATURED - This is our test article
  {
    slug: 'personal-loan-rates-december-2024',
    title: 'Personal Loan Rates Hit New Highs: What Borrowers Need to Know',
    excerpt: 'Interest rates continue climbing. Here\'s how real borrowers are adapting and what options remain for those seeking personal loans.',
    category: 'personal-loans',
    categoryLabel: 'Personal Loans',
    publishedAt: '2024-12-13',
    updatedAt: '2024-12-13',
    readTime: 6,
    communityDataPoints: 1200,
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1440&h=810&fit=crop&q=80',
    featuredImageAlt: 'Financial planning documents and calculator on desk',
    imageAttribution: 'Photo by Towfiqu barbhuiya on Unsplash',
    isPublished: true,   // ✅ PUBLISHED
    isFeatured: true,    // ✅ FEATURED
    tags: ['personal-loans', 'interest-rates', 'market-news'],
    author: 'RegularFolkFinance Research Team',
    content: SAMPLE_ARTICLE_CONTENT,
  },
  // Coming Soon placeholders below
  {
    slug: 'mint-shutdown-best-alternatives-2025',
    title: 'Mint Is Gone: The Best Alternatives According to Reddit',
    excerpt: 'We analyzed 500+ Reddit discussions from r/personalfinance, r/ynab, and r/budget to find what real budgeters recommend after Mint\'s shutdown.',
    category: 'budgeting',
    categoryLabel: 'Budgeting',
    publishedAt: '2025-12-10',
    readTime: 8,
    communityDataPoints: 500,
    isPublished: false,
    isFeatured: false,
    tags: ['budgeting', 'money-tips'],
    author: 'RegularFolkFinance Research Team',
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
    isFeatured: false,
    tags: ['market-news', 'interest-rates'],
    author: 'RegularFolkFinance Research Team',
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
    isPublished: false,
    isFeatured: false,
    tags: ['credit-cards', 'community-insights'],
    author: 'RegularFolkFinance Research Team',
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
    isPublished: false,
    isFeatured: false,
    tags: ['personal-loans', 'debt'],
    author: 'RegularFolkFinance Research Team',
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
    isFeatured: false,
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
    isFeatured: false,
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
    isFeatured: false,
  },
];

// Get all published articles
export function getPublishedArticles(): Article[] {
  return PLACEHOLDER_ARTICLES.filter(article => article.isPublished);
}

// Get articles by category
export function getArticlesByCategory(category?: ArticleCategory): Article[] {
  if (!category) return PLACEHOLDER_ARTICLES;
  return PLACEHOLDER_ARTICLES.filter(article => article.category === category);
}

// Get featured article (first published + featured)
export function getFeaturedArticle(): Article | null {
  return PLACEHOLDER_ARTICLES.find(article => article.isPublished && article.isFeatured) || null;
}

// Get recent articles
export function getRecentArticles(count: number = 6): Article[] {
  return PLACEHOLDER_ARTICLES.slice(0, count);
}

// Get latest published article by category
export function getLatestArticleByCategory(categorySlug: string): Article | null {
  const categoryMap: Record<string, ArticleCategory> = {
    'budgeting': 'budgeting',
    'personal-loans': 'personal-loans',
    'credit-cards': 'credit-cards',
    'banking': 'market-news',
    'mortgages': 'market-news',
    'retirement': 'money-tips',
    'debt': 'personal-loans',
  };

  const articleCategory = categoryMap[categorySlug];
  if (!articleCategory) return null;

  const filtered = PLACEHOLDER_ARTICLES
    .filter(article => article.category === articleCategory && article.isPublished)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return filtered[0] || null;
}

// Get article by slug
export function getArticleBySlug(slug: string): Article | null {
  return PLACEHOLDER_ARTICLES.find(article => article.slug === slug) || null;
}

// Get articles by tag
export function getArticlesByTag(tag: string): Article[] {
  return PLACEHOLDER_ARTICLES
    .filter(article => article.tags?.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// Get related articles
export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const related = PLACEHOLDER_ARTICLES
    .filter(article => {
      if (article.slug === currentSlug) return false;
      const hasMatchingTag = currentArticle.tags?.some(tag => article.tags?.includes(tag));
      const sameCategory = article.category === currentArticle.category;
      return hasMatchingTag || sameCategory;
    })
    .sort((a, b) => {
      const aMatchingTags = currentArticle.tags?.filter(tag => a.tags?.includes(tag)).length || 0;
      const bMatchingTags = currentArticle.tags?.filter(tag => b.tags?.includes(tag)).length || 0;
      return bMatchingTags - aMatchingTags;
    });

  return related.slice(0, limit);
}

// Get all unique tags
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  PLACEHOLDER_ARTICLES.forEach(article => {
    article.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}