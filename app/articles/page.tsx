'use client';

import { useState } from 'react';
import {
  ArticleCategory,
  getArticlesByCategory,
  getFeaturedArticle,
} from '@/lib/articles';
import {
  FeaturedArticle,
  CategoryFilter,
  ArticleGrid
} from '@/components/articles';

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | undefined>();

  const featuredArticle = getFeaturedArticle();
  const filteredArticles = getArticlesByCategory(activeCategory);

  // Exclude featured article from grid when showing all
  const gridArticles = activeCategory
    ? filteredArticles
    : filteredArticles.filter(a => a.slug !== featuredArticle.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Real insights on money news that actually affects you.
            Backed by community data, not sponsored content.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Featured Article - Only show when no filter */}
        {!activeCategory && (
          <FeaturedArticle article={featuredArticle} />
        )}

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeCategory ? `${filteredArticles[0]?.categoryLabel || 'Articles'}` : 'Latest Articles'}
          </h2>
          <span className="text-sm text-gray-500">
            {gridArticles.length} article{gridArticles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Article Grid */}
        <ArticleGrid articles={gridArticles} />

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              More articles coming soon. We're analyzing community data to bring you real insights.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
