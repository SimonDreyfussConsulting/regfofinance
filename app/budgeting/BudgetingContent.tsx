// app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import Navigation from '@/components/Navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | RegularFolkFinance`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
            {article.categoryLabel}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="text-xl text-gray-600 mb-6">{article.subtitle}</p>
        )}

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
          {article.communityDataPoints && (
            <>
              <span>•</span>
              <span className="text-teal-600 font-medium">
                {article.communityDataPoints.toLocaleString()} data points analyzed
              </span>
            </>
          )}
        </div>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="relative w-full h-64 sm:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.featuredImageAlt || article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
          {article.content && <MDXRemote source={article.content} />}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/articles/${related.slug}`}
                  className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-medium text-teal-600">
                    {related.categoryLabel}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{related.readTime} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}