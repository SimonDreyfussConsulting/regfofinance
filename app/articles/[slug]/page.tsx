import { Metadata } from 'next';
import Link from 'next/link';
import { PLACEHOLDER_ARTICLES } from '@/lib/articles';
import { notFound } from 'next/navigation';

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
  const article = PLACEHOLDER_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    robots: {
      index: false, // noindex until published
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = PLACEHOLDER_ARTICLES.find(a => a.slug === slug);

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
            We're still analyzing community data for this article. Check back soon!
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

  // Published article template (for future use)
  return (
    <main className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>
        {/* Full article content will go here when published */}
        <p className="text-gray-600">{article.excerpt}</p>
      </article>
    </main>
  );
}
