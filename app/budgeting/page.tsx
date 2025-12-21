// app/budgeting/page.tsx
// NO 'use client' - this is a Server Component
import { Metadata } from 'next';
import { getLatestArticleByCategory } from '@/lib/articles';
import BudgetingContent from './BudgetingContent';

export const metadata: Metadata = {
  title: 'Best Budgeting Tools 2025 | RegularFolkFinance',
  description: 'Compare the best budgeting apps and tools based on real user experiences from Reddit and finance communities.',
};

export default function BudgetingPage() {
  // Fetch on server - allowed because this is a Server Component
  const featuredArticle = getLatestArticleByCategory('budgeting');

  // Serialize the article data for the client component
  const articleData = featuredArticle
    ? {
        slug: featuredArticle.slug,
        title: featuredArticle.title,
        categoryLabel: featuredArticle.categoryLabel,
        featuredImage: featuredArticle.featuredImage,
        communityDataPoints: featuredArticle.communityDataPoints,
        readTime: featuredArticle.readTime,
      }
    : null;

  return <BudgetingContent featuredArticle={articleData} />;
}