// lib/articles.ts
import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TocItem {
  id: string;
  title: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  categoryLabel: string;
  image?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageCaption?: string;
  featured?: boolean;
  isPublished: boolean;
  readTime: number;
  communityDataPoints?: number;
  tags?: string[];
  tocItems: TocItem[];
  ctaType?: string;
  content: string;
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  categoryLabel: string;
  image?: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  featuredImageCaption?: string;
  featured?: boolean;
  isPublished: boolean;
  readTime: number;
  communityDataPoints?: number;
  tags?: string[];
  tocItems: TocItem[];
  ctaType?: string;
}

// CATEGORY_COLORS export - REQUIRED by LatestNews.tsx
export const CATEGORY_COLORS: Record<string, string> = {
  budgeting: 'bg-blue-100 text-blue-800',
  'credit-cards': 'bg-purple-100 text-purple-800',
  'personal-loans': 'bg-green-100 text-green-800',
  investing: 'bg-yellow-100 text-yellow-800',
  savings: 'bg-teal-100 text-teal-800',
  news: 'bg-red-100 text-red-800',
  'market-news': 'bg-blue-100 text-blue-800',
  'community-insights': 'bg-purple-100 text-purple-800',
  'money-tips': 'bg-green-100 text-green-800',
  banking: 'bg-indigo-100 text-indigo-800',
  'save-money': 'bg-emerald-100 text-emerald-800',
  'make-money': 'bg-orange-100 text-orange-800',
  debt: 'bg-rose-100 text-rose-800',
  'real-estate': 'bg-cyan-100 text-cyan-800',
};

// Category label mapping
const categoryLabels: Record<string, string> = {
  budgeting: 'Budgeting',
  'credit-cards': 'Credit Cards',
  'personal-loans': 'Personal Loans',
  investing: 'Investing',
  savings: 'Savings',
  news: 'News',
  'market-news': 'Market News',
  'community-insights': 'Community Insights',
  'money-tips': 'Money Tips',
  banking: 'Banking',
  'save-money': 'Save Money',
  'make-money': 'Make Money',
  debt: 'Debt',
  'real-estate': 'Real Estate',
};

function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function extractTocFromContent(content: string): TocItem[] {
  // Match ## headings (H2) in the content
  const headingRegex = /^## (.+)$/gm;
  const tocItems: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1].trim();
    // Generate ID from heading text - lowercase, replace spaces/special chars with hyphens
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    tocItems.push({ id, title });
  }

  return tocItems;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getArticleSlugs(): string[] {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }
    return fs.readdirSync(articlesDirectory).filter((file) => file.endsWith('.mdx'));
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const description = data.description || data.excerpt || '';
    const excerpt = data.excerpt || data.description || '';

    // Extract tocItems from frontmatter or auto-generate from H2 headings
    let tocItems: TocItem[] = [];
    if (data.tocItems && Array.isArray(data.tocItems)) {
      tocItems = data.tocItems;
    } else {
      tocItems = extractTocFromContent(content);
    }

    // Determine ctaType from frontmatter or category
    const ctaType = data.ctaType || data.category || 'generic';

    return {
      slug: realSlug,
      title: data.title || '',
      subtitle: data.subtitle,
      description,
      excerpt,
      author: data.author || 'RegularFolkFinance Team',
      date: data.date || new Date().toISOString(),
      category: data.category || '',
      categoryLabel: getCategoryLabel(data.category || ''),
      image: data.image,
      featuredImage: data.featuredImage || data.image || '/images/articles/placeholder.jpg',
      featuredImageAlt: data.featuredImageAlt || data.title,
      featuredImageCaption: data.featuredImageCaption,
      featured: data.featured || false,
      isPublished: data.isPublished !== false,
      readTime: calculateReadTime(content),
      communityDataPoints: data.communityDataPoints,
      tags: data.tags || [],
      tocItems,
      ctaType,
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

// Helper to check if an article has valid required fields
function isValidArticle(article: ArticleMetadata | null): article is ArticleMetadata {
  if (!article) return false;
  // Must have a title that's not empty
  if (!article.title || article.title.trim() === '') return false;
  // Must be published
  if (!article.isPublished) return false;
  return true;
}

export function getAllArticles(): ArticleMetadata[] {
  try {
    const slugs = getArticleSlugs();
    const articles = slugs
      .map((slug) => {
        const article = getArticleBySlug(slug);
        if (!article) return null;

        // Return metadata only (no content)
        const { content, ...metadata } = article;
        return metadata;
      })
      // Filter out null articles AND articles without valid title
      .filter((article): article is ArticleMetadata => isValidArticle(article))
      // Sort by date (newest first), then by title for same-date articles for consistency
      .sort((a, b) => {
        const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
        if (dateCompare !== 0) return dateCompare;
        // For same date, sort alphabetically by title for consistent ordering
        return a.title.localeCompare(b.title);
      });

    return articles;
  } catch (error) {
    console.error('Error getting all articles:', error);
    return [];
  }
}

export function getArticlesByCategory(category: string): ArticleMetadata[] {
  const articles = getAllArticles();
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedArticle(category?: string): ArticleMetadata | null {
  const articles = category ? getArticlesByCategory(category) : getAllArticles();

  // First, try to find an article explicitly marked as featured
  const explicitlyFeatured = articles.find((article) => article.featured);
  if (explicitlyFeatured) return explicitlyFeatured;

  // Otherwise, prefer the newest article that has a real featured image
  const withImage = articles.find((article) =>
    article.featuredImage &&
    article.featuredImage !== '' &&
    article.featuredImage !== '/images/articles/placeholder.jpg'
  );
  if (withImage) return withImage;

  // Fall back to the newest article (already sorted by date)
  return articles[0] || null;
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): ArticleMetadata[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const articles = getArticlesByCategory(currentArticle.category);
  return articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}

export function getLatestArticles(limit: number = 5, category?: string): ArticleMetadata[] {
  const articles = category ? getArticlesByCategory(category) : getAllArticles();
  return articles.slice(0, limit);
}

// NEW EXPORT - Required by budgeting/page.tsx and LatestNews.tsx
export function getLatestArticleByCategory(category: string): ArticleMetadata | null {
  const articles = getArticlesByCategory(category);
  return articles[0] || null;
}
