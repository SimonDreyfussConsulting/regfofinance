// app/articles/ArticlesPageClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

type ArticleCategory =
  | 'credit-cards'
  | 'personal-loans'
  | 'budgeting'
  | 'banking'
  | 'save-money'
  | 'make-money'
  | 'debt'
  | 'news'
  | 'market-news'
  | 'community-insights'
  | 'money-tips';

interface ArticlePreview {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  featuredImage?: string;
  readTime: number;
  communityDataPoints?: number;
  publishedAt: string;
  isPublished?: boolean;
}

interface ArticlesPageClientProps {
  articles: ArticlePreview[];
  featuredArticle: ArticlePreview | null;
  categoryColors: Record<string, string>;
}

const CATEGORY_OPTIONS: { value: ArticleCategory | undefined; label: string }[] = [
  { value: undefined, label: 'All' },
  { value: 'credit-cards', label: 'Credit Cards' },
  { value: 'personal-loans', label: 'Personal Loans' },
  { value: 'budgeting', label: 'Budgeting' },
  { value: 'banking', label: 'Banking' },
  { value: 'save-money', label: 'Save Money' },
  { value: 'make-money', label: 'Make Money' },
  { value: 'debt', label: 'Debt' },
  { value: 'news', label: 'News' },
];

export default function ArticlesPageClient({
  articles,
  featuredArticle,
  categoryColors,
}: ArticlesPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | undefined>();

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  // Exclude featured article from grid when showing all
  const gridArticles = activeCategory
    ? filteredArticles
    : filteredArticles.filter((a) => a.slug !== featuredArticle?.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Articles
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Real insights on money news that actually affects you. Backed by community data, not
              sponsored content.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex justify-start sm:justify-center min-w-max sm:min-w-0 py-3 gap-2">
                {CATEGORY_OPTIONS.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setActiveCategory(option.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === option.value
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8 sm:py-12">
          {/* Featured Article - Only show when no filter */}
          {!activeCategory && featuredArticle && (
            <Link
              href={`/articles/${featuredArticle.slug}`}
              className="group block mb-8 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                {featuredArticle.featuredImage && (
                  <div className="md:w-1/2 relative h-48 md:h-auto">
                    <Image
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-2">
                    Featured
                  </span>
                  <span
                    className={`inline-block self-start px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                      categoryColors[featuredArticle.category]
                    }`}
                  >
                    {featuredArticle.categoryLabel}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    {featuredArticle.communityDataPoints && (
                      <span className="text-teal-600 font-medium">
                        {featuredArticle.communityDataPoints.toLocaleString()} data points
                      </span>
                    )}
                    <span>{featuredArticle.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {activeCategory
                ? `${filteredArticles[0]?.categoryLabel || 'Articles'}`
                : 'Latest Articles'}
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">
              {gridArticles.length} article{gridArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {article.featuredImage && (
                  <div className="relative h-40">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                      categoryColors[article.category]
                    }`}
                  >
                    {article.categoryLabel}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {article.communityDataPoints && (
                      <span className="text-teal-600 font-medium">
                        {article.communityDataPoints.toLocaleString()} data points
                      </span>
                    )}
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-full">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                More articles coming soon. We&apos;re analyzing community data to bring you real
                insights.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}