// components/LatestNews.tsx
import Link from 'next/link';
import { getLatestArticleByCategory, CATEGORY_COLORS } from '@/lib/articles';

interface LatestNewsProps {
  category: string;
}

export default function LatestNews({ category }: LatestNewsProps) {
  const article = getLatestArticleByCategory(category);

  if (!article) return null;

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-900">Latest News</h2>
        </div>

        {/* Article Card */}
        <Link href={`/articles/${article.slug}`} className="block">
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                {/* Category Badge */}
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-3 ${CATEGORY_COLORS[article.category] || 'bg-gray-100 text-gray-800'}`}>
                  {article.categoryLabel}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt - Now uses correct field */}
                {article.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                )}

                {/* Meta - Now uses correct field names */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                  {article.communityDataPoints && (
                    <>
                      <span>•</span>
                      <span className="text-cyan-600 font-medium">{article.communityDataPoints.toLocaleString()} discussions analyzed</span>
                    </>
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* View All Link */}
        <div className="mt-4 text-center">
          <Link
            href={`/articles?category=${article.category}`}
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
