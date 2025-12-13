import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_ARTICLES, getArticleBySlug, getRelatedArticles, CATEGORY_COLORS } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import ArticleCTA from '@/components/ArticleCTA';
import TagPill from '@/components/TagPill';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all placeholder articles
export async function generateStaticParams() {
  return PLACEHOLDER_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | RegularFolkFinance`,
    description: article.excerpt,
    authors: [{ name: article.author || 'RegularFolkFinance Research Team' }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://regularfolkfinance.com/articles/${article.slug}`,
      images: article.featuredImage ? [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt || article.title,
        }
      ] : undefined,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.featuredImage ? [article.featuredImage] : undefined,
    },
    alternates: {
      canonical: `https://regularfolkfinance.com/articles/${article.slug}`,
    },
    robots: {
      index: article.isPublished,
      follow: true,
    },
  };
}

// Extract TOC items from content
function extractTOCItems(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const items: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    items.push({ id, text, level: 2 });
  }

  return items;
}

// Simple markdown to HTML converter for article content
function renderContent(content: string): string {
  return content
    // Headers with IDs
    .replace(/^## (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return `<h2 id="${id}" class="text-3xl font-bold mt-12 mb-6 text-gray-900">${text}</h2>`;
    })
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-8 mb-4 text-gray-900">$1</h3>')
    // Bold text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-teal-500 pl-4 py-2 my-6 bg-gray-50 italic text-gray-700">$1</blockquote>')
    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-6 mb-2">$1</li>')
    // Paragraphs
    .replace(/^(?!<[h|b|l]|$)(.+)$/gm, '<p class="text-gray-700 mb-4 leading-relaxed">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '');
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // All placeholder articles show "Coming Soon" page
  if (!article.isPublished) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h1>

          {/* Article Title Preview */}
          <p className="text-lg text-gray-600 mb-2">
            &ldquo;{article.title}&rdquo;
          </p>

          <p className="text-gray-500 mb-8">
            We&apos;re still analyzing community data for this article. Check back soon!
          </p>

          {/* Back Link */}
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  // Published article - full template
  const tocItems = article.content ? extractTOCItems(article.content) : [];
  const relatedArticles = getRelatedArticles(slug, 3);
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <Navigation />

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.featuredImage,
            "author": {
              "@type": "Organization",
              "name": article.author || "RegularFolkFinance",
              "url": "https://regularfolkfinance.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RegularFolkFinance",
              "logo": {
                "@type": "ImageObject",
                "url": "https://regularfolkfinance.com/logo.png"
              }
            },
            "datePublished": article.publishedAt,
            "dateModified": article.updatedAt || article.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://regularfolkfinance.com/articles/${article.slug}`
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-4 pb-8 md:pb-12">
        <Breadcrumbs />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Category Badge */}
            <span className={`inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold ${CATEGORY_COLORS[article.category]}`}>
              {article.categoryLabel}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              {article.title}
            </h1>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm mb-4">
              <span>By {article.author || 'RegularFolkFinance Research Team'}</span>
              <span className="text-gray-400">|</span>
              <span>{formattedDate}</span>
              <span className="text-gray-400">|</span>
              <span>{article.readTime} min read</span>
              {article.communityDataPoints && (
                <>
                  <span className="text-gray-400">|</span>
                  <span className="text-teal-600 font-medium">
                    {article.communityDataPoints.toLocaleString()} data points analyzed
                  </span>
                </>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <TagPill key={tag} tag={tag} size="sm" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
          {/* Article Content */}
          <article className="max-w-3xl">
            {/* Featured Image */}
            {article.featuredImage && (
              <figure className="mb-8">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt || article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {article.imageAttribution && (
                  <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
                    {article.imageAttribution}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: article.content ? renderContent(article.content) : `<p>${article.excerpt}</p>`
              }}
            />

            {/* Dynamic CTA */}
            {article.tags && (
              <ArticleCTA tags={article.tags} />
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map(related => (
                    <Link
                      key={related.slug}
                      href={`/articles/${related.slug}`}
                      className="group block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${CATEGORY_COLORS[related.category]}`}>
                        {related.categoryLabel}
                      </span>
                      <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <TableOfContents items={tocItems} />
              )}

              {/* Newsletter Signup */}
              <div className="mt-8 bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Stay Updated
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get weekly insights from real community data.
                </p>
                <Link
                  href="/newsletter"
                  className="block w-full bg-teal-600 text-white font-semibold py-3 rounded-lg hover:bg-teal-700 transition-colors text-center"
                >
                  Subscribe Free
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile TOC - Collapsible at bottom for mobile */}
      {tocItems.length > 0 && (
        <MobileTableOfContents items={tocItems} />
      )}
    </>
  );
}

// Mobile Table of Contents Component
function MobileTableOfContents({ items }: { items: { id: string; text: string; level: number }[] }) {
  return (
    <details className="lg:hidden fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 max-w-[calc(100vw-2rem)] z-50">
      <summary className="px-4 py-3 font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Contents
      </summary>
      <nav className="px-4 pb-4 max-h-60 overflow-y-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors border-b border-gray-100 last:border-0"
          >
            {item.text}
          </a>
        ))}
      </nav>
    </details>
  );
}
