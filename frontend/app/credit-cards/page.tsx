// app/credit-cards/page.tsx
// NO 'use client' - this is a Server Component
import { Metadata } from 'next';
import { getLatestArticles } from '@/lib/articles';
import CreditCardsContent from './CreditCardsContent';
import { getContentMonthYear } from '@/utils/getContentYear';

export const metadata: Metadata = {
  title: `Best Credit Cards for ${getContentMonthYear()} | RegularFolkFinance`,
  description: 'Compare the best credit cards based on real user experiences from Reddit and finance communities.',
};

export default function CreditCardsPage() {
  // Fetch articles server-side to pass to client component
  const articles = getLatestArticles(3, 'credit-cards').map(article => ({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    categoryLabel: article.categoryLabel,
    date: article.date,
    readTime: article.readTime,
    featuredImage: article.featuredImage,
    featuredImageAlt: article.featuredImageAlt,
    communityDataPoints: article.communityDataPoints,
  }));

  return <CreditCardsContent articles={articles} />;
}
