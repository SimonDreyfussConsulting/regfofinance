interface ArticleBylineProps {
  author?: string;
  wordCount?: number;
  publishDate?: string;
  updateDate?: string;
}

export default function ArticleByline({
  author = 'RegularFolkFinance Team',
  wordCount = 2800,
  publishDate,
  updateDate,
}: ArticleBylineProps) {
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-[#6B7280] mt-4">
      <span>Written by <span className="font-medium text-[#1F2937]">{author}</span></span>
      <span>•</span>
      <span>{readTime} min read</span>
      {publishDate && (
        <>
          <span>•</span>
          <span>Published {publishDate}</span>
        </>
      )}
      {updateDate && (
        <>
          <span>•</span>
          <span>Updated {updateDate}</span>
        </>
      )}
    </div>
  );
}