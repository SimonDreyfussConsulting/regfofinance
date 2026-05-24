// components/FeaturedArticle.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Export this type so other components can use it
export interface FeaturedArticleData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  publishedAt: string;
  readTime: number;
  featuredImage?: string;
  featuredImageAlt?: string;
  isPublished: boolean;
  communityDataPoints?: number;
}

// Category colors mapping
const CATEGORY_COLORS: Record<string, string> = {
  budgeting: 'bg-teal-100 text-teal-800',
  'credit-cards': 'bg-blue-100 text-blue-800',
  'personal-loans': 'bg-purple-100 text-purple-800',
  banking: 'bg-green-100 text-green-800',
  'save-money': 'bg-yellow-100 text-yellow-800',
  'make-money': 'bg-orange-100 text-orange-800',
  debt: 'bg-red-100 text-red-800',
};

interface FeaturedArticleProps {
  pageCategory: string;
  article: FeaturedArticleData | null;
}

export default function FeaturedArticle({ pageCategory, article }: FeaturedArticleProps) {
  const [imageError, setImageError] = useState(false);

  // Don't render if no article
  if (!article) return null;

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const categoryColor = CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-800';

  // If not published, show non-clickable version with overlay
  if (!article.isPublished) {
    return (
      <div className="relative mb-8 sm:mb-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-48 sm:h-64 md:h-full min-h-[200px] bg-gray-200">
            {article.featuredImage && !imageError ? (
              <Image
                src={article.featuredImage}
                alt={article.featuredImageAlt || article.title}
                fill
                className="object-cover opacity-60"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100" />
            )}
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-semibold text-gray-700">
                Coming Soon
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColor}`}>
              {article.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mb-3">
              {article.title}
            </h2>
            <p className="text-gray-400 mb-4 line-clamp-2 sm:line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Published article - CLICKABLE
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block relative mb-8 sm:mb-12 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-48 sm:h-64 md:h-full min-h-[200px] bg-gray-200">
          {article.featuredImage && !imageError ? (
            <Image
              src={article.featuredImage}
              alt={article.featuredImageAlt || article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100" />
          )}
          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        </div>
        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColor}`}>
            {article.categoryLabel}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2 sm:line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
            {article.communityDataPoints && (
              <>
                <span>•</span>
                <span className="text-teal-600 font-medium">
                  {article.communityDataPoints.toLocaleString()} data points
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}