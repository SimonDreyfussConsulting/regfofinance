'use client';

// components/CategoryNewsClient.tsx
// Client component version - receives articles as props
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY_COLORS } from '@/lib/article-types';

export interface ArticlePreview {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  date: string;
  readTime: number;
  featuredImage?: string;
  featuredImageAlt?: string;
  communityDataPoints?: number;
}

interface CategoryNewsClientProps {
  articles: ArticlePreview[];
  category: string;
  title?: string;
}

export default function CategoryNewsClient({ articles, category, title = "Latest News & Insights" }: CategoryNewsClientProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
          <Link
            href={`/articles?category=${category}`}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors hidden sm:flex items-center gap-1"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-gray-200 overflow-hidden">
                {article.featuredImage ? (
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt || article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100" />
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category Badge */}
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-800'}`}>
                  {article.categoryLabel}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                {article.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                  {article.communityDataPoints && (
                    <>
                      <span>•</span>
                      <span className="text-cyan-600 font-medium">{article.communityDataPoints.toLocaleString()}+ data points</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href={`/articles?category=${category}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
