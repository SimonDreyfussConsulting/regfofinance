import { Article, CATEGORY_COLORS } from '@/lib/articles';
import CommunityPulseBadge from './CommunityPulseBadge';
import ComingSoonOverlay from './ComingSoonOverlay';

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const {
    title,
    excerpt,
    category,
    categoryLabel,
    publishedAt,
    readTime,
    communityDataPoints,
    isPublished
  } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="relative mb-12">
      {/* Card Container - NOT a link */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-video md:aspect-auto md:h-full bg-gradient-to-br from-blue-50 to-teal-50 relative min-h-[250px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-20 h-20 text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>

            {!isPublished && <ComingSoonOverlay />}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            {/* Featured Badge + Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-full uppercase tracking-wide">
                Featured
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${CATEGORY_COLORS[category]}`}>
                {categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 mb-6 text-lg">
              {excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{readTime} min read</span>
              {communityDataPoints && (
                <>
                  <span>•</span>
                  <CommunityPulseBadge dataPoints={communityDataPoints} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
