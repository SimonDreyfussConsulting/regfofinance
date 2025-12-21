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

export default function ArticlesPage() {
  // Fetch data on the server
  const allArticles = getAllArticles().filter(a => a.isPublished);
  const featuredArticle = getFeaturedArticle();

  // Serialize for client
  const serializedArticles = allArticles.map(a => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    categoryLabel: a.categoryLabel,
    featuredImage: a.featuredImage,
    readTime: a.readTime,
    communityDataPoints: a.communityDataPoints,
    publishedAt: a.publishedAt,
  }));

  const serializedFeatured = featuredArticle
    ? {
        slug: featuredArticle.slug,
        title: featuredArticle.title,
        excerpt: featuredArticle.excerpt,
        category: featuredArticle.category,
        categoryLabel: featuredArticle.categoryLabel,
        featuredImage: featuredArticle.featuredImage,
        readTime: featuredArticle.readTime,
        communityDataPoints: featuredArticle.communityDataPoints,
        publishedAt: featuredArticle.publishedAt,
      }
    : null;

  return (
    <ArticlesPageClient
      articles={serializedArticles}
      featuredArticle={serializedFeatured}
      categoryColors={CATEGORY_COLORS}
    />
  );
}