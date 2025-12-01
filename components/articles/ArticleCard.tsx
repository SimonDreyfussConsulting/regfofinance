import { Article, CATEGORY_COLORS } from '@/lib/articles';
import CommunityPulseBadge from './CommunityPulseBadge';
import ComingSoonOverlay from './ComingSoonOverlay';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
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

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="relative group">
      {/* Card Container - NOT a link, just a div */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {/* Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-300"
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

          {/* Coming Soon Overlay for unpublished articles */}
          {!isPublished && <ComingSoonOverlay />}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Category + Read Time */}
          <div className="flex items-center justify-between mb-3">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${CATEGORY_COLORS[category]}`}>
              {categoryLabel}
            </span>
            <span className="text-xs text-gray-500">{readTime} min read</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-500">{formattedDate}</span>
            {communityDataPoints && (
              <CommunityPulseBadge dataPoints={communityDataPoints} />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
