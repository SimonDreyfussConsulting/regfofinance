// app/articles/page.tsx
// NO 'use client' - this is a Server Component
import { Metadata } from 'next';
import {
  getAllArticles,
  getFeaturedArticle,
  CATEGORY_COLORS,
} from '@/lib/articles';
import ArticlesPageClient from './ArticlesPageClient';

export const metadata: Metadata = {
  title: 'Articles | RegularFolkFinance',
  description: 'Real insights on money news that actually affects you. Backed by community data, not sponsored content.',
};

// Placeholder articles - shown when no real articles exist
// These have isPublished: false so they show "Coming Soon" overlay
type ArticleCategory = 'credit-cards' | 'personal-loans' | 'budgeting' | 'banking' | 'save-money' | 'make-money' | 'debt' | 'news' | 'market-news' | 'community-insights' | 'money-tips';

interface PlaceholderArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  publishedAt: string;
  readTime: number;
  featuredImage?: string;
  communityDataPoints?: number;
  isPublished: boolean;
}

const PLACEHOLDER_ARTICLES: PlaceholderArticle[] = [
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

export default function ArticlesPage() {
  // Fetch real articles from the server
  const realArticles = getAllArticles();
  const realFeaturedArticle = getFeaturedArticle();

  // Use real articles if available, otherwise use placeholders
  const hasRealArticles = realArticles.length > 0;

  // Serialize for client
  const serializedArticles = hasRealArticles
    ? realArticles.map(a => ({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        category: a.category as ArticleCategory,
        categoryLabel: a.categoryLabel,
        featuredImage: a.featuredImage,
        readTime: a.readTime,
        communityDataPoints: a.communityDataPoints,
        publishedAt: a.date,
        isPublished: a.isPublished,
      }))
    : PLACEHOLDER_ARTICLES;

  const serializedFeatured = hasRealArticles && realFeaturedArticle
    ? {
        slug: realFeaturedArticle.slug,
        title: realFeaturedArticle.title,
        excerpt: realFeaturedArticle.excerpt,
        category: realFeaturedArticle.category as ArticleCategory,
        categoryLabel: realFeaturedArticle.categoryLabel,
        featuredImage: realFeaturedArticle.featuredImage,
        readTime: realFeaturedArticle.readTime,
        communityDataPoints: realFeaturedArticle.communityDataPoints,
        publishedAt: realFeaturedArticle.date,
        isPublished: realFeaturedArticle.isPublished,
      }
    : PLACEHOLDER_ARTICLES[0];

  return (
    <ArticlesPageClient
      articles={serializedArticles}
      featuredArticle={serializedFeatured}
      categoryColors={CATEGORY_COLORS}
    />
  );
}
