// app/budgeting/page.tsx
// NO 'use client' - this is a Server Component
import { Metadata } from 'next';
import { getLatestArticleByCategory } from '@/lib/articles';
import BudgetingContent from './BudgetingContent';
import { FeaturedArticleData } from '@/components/FeaturedArticle';
import LatestNews from '@/components/LatestNews';

export const metadata: Metadata = {
  title: 'Best Budgeting Tools 2026 | RegularFolkFinance',
  description: 'Compare the best budgeting apps and tools based on real user experiences from Reddit and finance communities.',
};

export default function BudgetingPage() {
  // Fetch on server - allowed because this is a Server Component
  const article = getLatestArticleByCategory('budgeting');

  // Transform to FeaturedArticleData format
  const featuredArticle: FeaturedArticleData | null = article
    ? {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        category: article.category,
        categoryLabel: article.categoryLabel,
        publishedAt: article.date,
        readTime: article.readTime,
        featuredImage: article.featuredImage,
        featuredImageAlt: article.featuredImageAlt,
        isPublished: true,
        communityDataPoints: article.communityDataPoints,
      }
    : null;

  return (
    <>
      <BudgetingContent featuredArticle={featuredArticle} />
      <LatestNews category="budgeting" />
    </>
  );
}
