// app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import Navigation from '@/components/Navigation';
import TableOfContents from '@/components/TableOfContents';
import ArticleByline from '@/components/ArticleByLine';
import Breadcrumbs from '@/components/Breadcrumbs';
import ArticleSummaryBox from '@/components/ArticleSummaryBox';
import ArticleCTA from '@/components/ArticleCTA';
import Author from '@/components/Author';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY_COLORS } from '@/lib/article-types';

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
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://regularfolkfinance.com/articles/${slug}`,
      images: article.featuredImage ? [
        {
          url: article.featuredImage.startsWith('http')
            ? article.featuredImage
            : `https://regularfolkfinance.com${article.featuredImage}`,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt || article.title,
        }
      ] : [],
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.featuredImage ? [
        article.featuredImage.startsWith('http')
          ? article.featuredImage
          : `https://regularfolkfinance.com${article.featuredImage}`
      ] : [],
    },
  };
}

// Format date for display
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// Convert tocItems format to TableOfContents format
function convertTocItems(items: { id: string; title: string }[]) {
  return items.map(item => ({
    id: item.id,
    text: item.title,
    level: 2,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);
  const tocItems = convertTocItems(article.tocItems);
  const categoryColor = CATEGORY_COLORS[article.category] || 'bg-teal-100 text-teal-800';

  // Calculate word count from content for byline
  const wordCount = article.content.split(/\s+/).length;

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#06B6D4]/10 to-[#3B82F6]/10 pt-4 pb-12 md:pb-16">
        <Breadcrumbs />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className={`inline-block mb-4 px-3 py-1 ${categoryColor} rounded-full text-sm font-semibold uppercase`}>
              {article.categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1F2937]">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-lg md:text-xl text-[#6B7280] italic mb-4">
                {article.subtitle}
              </p>
            )}
            <ArticleByline
              author={article.author}
              wordCount={wordCount}
              publishDate={formatDate(article.date)}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8 xl:gap-12">

          {/* Left Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {tocItems.length > 0 && (
                <TableOfContents items={tocItems} />
              )}
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-3xl mx-auto w-full">
            {/* Featured Image */}
            {article.featuredImage && (
              <figure className="mb-8">
                <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt || article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {article.featuredImageCaption && (
                  <figcaption className="text-sm text-[#6B7280] mt-2 text-center italic">
                    {article.featuredImageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Mobile Table of Contents */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-8 p-4 bg-[#F3F4F6] rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-[#1F2937]">In This Article</h3>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-[#6B7280] hover:text-[#06B6D4] transition-colors"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-[#1F2937]
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#1F2937] prose-p:leading-relaxed prose-p:text-[17px]
              prose-a:text-[#06B6D4] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1F2937]
              prose-blockquote:border-l-4 prose-blockquote:border-[#3B82F6]
              prose-blockquote:bg-[#EFF6FF] prose-blockquote:p-6 prose-blockquote:rounded-r
              prose-blockquote:not-italic prose-blockquote:text-[#1F2937]
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-gradient-to-r prose-th:from-[#EFF6FF] prose-th:to-[#CCFBF1]
              prose-th:border prose-th:border-[#6B7280]/30 prose-th:px-4 prose-th:py-3 prose-th:text-left
              prose-td:border prose-td:border-[#6B7280]/30 prose-td:px-4 prose-td:py-3
              prose-tr:even:bg-[#F3F4F6]
              prose-ul:space-y-2 prose-li:text-[#1F2937]
              prose-img:rounded-lg"
              style={{ lineHeight: '1.8' }}
            >
              {article.content && (
                <MDXRemote
                  source={article.content}
                  options={{
                    mdxOptions: {
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              )}
            </div>

            {/* Article CTA */}
            <div className="mt-12">
              <ArticleCTA tags={article.tags || []} />
            </div>

            {/* Author Section */}
            <div className="mt-12 pt-8 border-t border-[#6B7280]/20">
              <h3 className="text-lg font-bold text-[#1F2937] mb-4">About the Author</h3>
              <Author
                name={article.author}
                date={formatDate(article.date)}
              />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-[#6B7280]/20">
                <h3 className="text-sm font-semibold text-[#6B7280] mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F3F4F6] text-[#6B7280] text-sm rounded-full hover:bg-[#E5E7EB] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right Sidebar - Summary Box */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <ArticleSummaryBox
                excerpt={article.excerpt}
                readTime={article.readTime}
                communityDataPoints={article.communityDataPoints}
                date={article.date}
                category={article.category}
                categoryLabel={article.categoryLabel}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Want More Data-Driven Insights?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our community-powered analysis on personal finance topics
          </p>
          <Link
            href="/articles"
            className="inline-block px-8 py-4 bg-white text-[#06B6D4] hover:bg-gray-100 font-semibold rounded-lg transition text-lg"
          >
            Explore All Articles
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-[#F3F4F6] py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => {
                const relatedCategoryColor = CATEGORY_COLORS[related.category] || 'bg-teal-100 text-teal-800';
                return (
                  <Link
                    key={related.slug}
                    href={`/articles/${related.slug}`}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                  >
                    {related.featuredImage && (
                      <div className="relative h-40 w-full">
                        <Image
                          src={related.featuredImage}
                          alt={related.featuredImageAlt || related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <span className={`inline-block text-xs font-medium ${relatedCategoryColor} px-2 py-0.5 rounded-full`}>
                        {related.categoryLabel}
                      </span>
                      <h3 className="font-semibold text-[#1F2937] mt-2 line-clamp-2 group-hover:text-[#06B6D4] transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] mt-2">{related.readTime} min read</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
