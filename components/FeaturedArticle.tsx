// components/FeaturedArticle.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Article type - matches what's passed from server
export interface FeaturedArticleData {
  slug: string;
  title: string;
  categoryLabel?: string;
  featuredImage?: string;
  communityDataPoints?: number;
  readTime: number;
}

interface FeaturedArticleProps {
  pageCategory: string;
  article: FeaturedArticleData | null;
}

export default function FeaturedArticle({ pageCategory, article }: FeaturedArticleProps) {
  const [imageError, setImageError] = useState(false);

  // Don't render if no article found
  if (!article) return null;

  const articleUrl = `/${pageCategory}/${article.slug}`;
  const imageUrl = article.featuredImage || '/images/placeholder-article.jpg';

  return (
    <section className="w-full py-3 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* COMPACT BANNER - ~70-80px tall */}
        <Link
          href={articleUrl}
          className="group flex items-center gap-4 bg-gradient-to-r from-slate-50 to-blue-50/50 hover:from-slate-100 hover:to-blue-100/50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-200/60 hover:border-teal-300 transition-all duration-200 hover:shadow-md"
        >
          {/* Small Square Image - 56px on mobile, 70px on desktop */}
          <div className="relative w-14 h-14 sm:w-[70px] sm:h-[70px] flex-shrink-0 rounded-lg overflow-hidden">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={article.title}
                fill
                sizes="70px"
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <span className="text-white/90 text-lg font-bold">
                  {article.categoryLabel?.[0] || 'R'}
                </span>
              </div>
            )}
          </div>

          {/* Content - Title + Metadata */}
          <div className="flex-1 min-w-0">
            {/* Label + Category Row */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-xs font-semibold text-teal-600 uppercase tracking-wide">
                Featured
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-[10px] sm:text-xs text-slate-500">
                {article.categoryLabel || pageCategory}
              </span>
            </div>

            {/* Title - Single line, truncated */}
            <h3 className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-teal-700 transition-colors truncate pr-4">
              {article.title}
            </h3>

            {/* Metadata Row */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500 mt-0.5">
              {article.communityDataPoints && (
                <span className="text-teal-600 font-medium">
                  {article.communityDataPoints.toLocaleString()} data points
                </span>
              )}
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">{article.readTime} min read</span>
            </div>
          </div>

          {/* Arrow CTA */}
          <div className="flex-shrink-0 text-teal-500 group-hover:text-teal-600">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}