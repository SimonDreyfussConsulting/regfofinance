interface ArticleSummaryBoxProps {
  excerpt: string;
  readTime: number;
  communityDataPoints?: number;
  date: string;
  category: string;
  categoryLabel: string;
}

export default function ArticleSummaryBox({
  excerpt,
  readTime,
  communityDataPoints,
  date,
  category,
  categoryLabel,
}: ArticleSummaryBoxProps) {
  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-[#F3F4F6] border border-[#6B7280]/20 rounded-lg p-6">
      <h3 className="font-bold text-lg mb-4 text-[#1F2937]">
        Article Summary
      </h3>

      <p className="text-sm text-[#1F2937] mb-6 leading-relaxed">
        {excerpt}
      </p>

      <div className="space-y-3 text-sm text-[#1F2937]">
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Category:</span>
          <span className="font-semibold">{categoryLabel}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Read Time:</span>
          <span className="font-semibold">{readTime} min</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B7280]">Published:</span>
          <span className="font-semibold">{formattedDate}</span>
        </div>
        {communityDataPoints && communityDataPoints > 0 && (
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Data Points:</span>
            <span className="font-semibold text-[#06B6D4]">
              {communityDataPoints.toLocaleString()}+
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#6B7280]/20">
        <p className="text-xs text-[#6B7280] text-center">
          Analysis based on community data and market research
        </p>
      </div>
    </div>
  );
}
