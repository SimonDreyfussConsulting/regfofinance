'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
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
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Measure navigation height on mount and resize
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const featuredArticle = getFeaturedArticle();
  const filteredArticles = getArticlesByCategory(activeCategory);

  // Exclude featured article from grid when showing all
  const gridArticles = activeCategory
    ? filteredArticles
    : filteredArticles.filter(a => a.slug !== featuredArticle.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <div ref={navRef}>
        <Navigation />
      </div>
      
      <main>
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Articles
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Real insights on money news that actually affects you.
              Backed by community data, not sponsored content.
            </p>
          </div>
        </section>

        {/* Sticky Category Filter - Responsive */}
        <div 
          className="sticky z-40 bg-white border-b border-gray-200 shadow-sm"
          style={{ top: navHeight }}
        >
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex justify-start sm:justify-center min-w-max sm:min-w-0 py-1">
                <CategoryFilter
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8 sm:py-12">
          {/* Featured Article - Only show when no filter */}
          {!activeCategory && (
            <FeaturedArticle article={featuredArticle} />
          )}

          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {activeCategory ? `${filteredArticles[0]?.categoryLabel || 'Articles'}` : 'Latest Articles'}
            </h2>
            <span className="text-xs sm:text-sm text-gray-500">
              {gridArticles.length} article{gridArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Article Grid */}
          <ArticleGrid articles={gridArticles} />

          {/* Coming Soon Notice */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-full">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                More articles coming soon. We&apos;re analyzing community data to bring you real insights.
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}