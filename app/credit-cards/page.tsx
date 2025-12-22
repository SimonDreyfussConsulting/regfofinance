// app/credit-cards/page.tsx
// NO 'use client' - this is a Server Component
import { Metadata } from 'next';
import { getLatestArticleByCategory } from '@/lib/articles';
import CreditCardsContent from './CreditCardsContent';
import FeaturedArticle, { FeaturedArticleData } from '@/components/FeaturedArticle';
import LatestNews from '@/components/LatestNews';

export const metadata: Metadata = {
  title: 'Best Credit Cards 2025 | RegularFolkFinance',
  description: 'Compare the best credit cards based on real user experiences from Reddit and finance communities.',
};

export default function CreditCardsPage() {
  // Fetch on server - allowed because this is a Server Component
  const article = getLatestArticleByCategory('credit-cards');

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
      <CreditCardsContent featuredArticle={featuredArticle} />
      <LatestNews category="credit-cards" />
    </>
  );
}
