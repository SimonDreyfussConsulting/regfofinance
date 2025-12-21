// lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  categoryLabel: string;
  readTime: number;
  communityDataPoints?: number;
  featuredImage?: string;
  featuredImageAlt?: string;
  tags?: string[];
  featured?: boolean;
  content: string;
}

export interface ArticleMetadata extends Omit<Article, 'content'> {}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

// Category label mapping
const categoryLabels: Record<string, string> = {
  budgeting: 'Budgeting',
  'credit-cards': 'Credit Cards',
  'personal-loans': 'Personal Loans',
  investing: 'Investing',
  savings: 'Savings',
  news: 'News',
};

function getCategoryLabel(category: string): string {
  return categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getArticleSlugs(): string[] {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }
    return fs
      .readdirSync(articlesDirectory)
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const realSlug = slug.replace(/\.(mdx|md)$/, '');
    
    // Try .mdx first, then .md
    let fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(articlesDirectory, `${realSlug}.md`);
    }

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const category = data.category || 'news';

    return {
      slug: realSlug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      excerpt: data.excerpt || data.description || '',
      author: data.author || 'RegularFolkFinance Team',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      category,
      categoryLabel: getCategoryLabel(category),
      readTime: data.readTime || calculateReadTime(content),
      communityDataPoints: data.communityDataPoints || undefined,
      featuredImage: data.featuredImage || data.image || undefined,
      featuredImageAlt: data.featuredImageAlt || data.title || '',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): ArticleMetadata[] {
  try {
    const slugs = getArticleSlugs();
    const articles = slugs
      .map((slug) => {
        const article = getArticleBySlug(slug);
        if (!article) return null;

        // Return metadata only (no content)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { content, ...metadata } = article;
        return metadata;
      })
      .filter((article): article is ArticleMetadata => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
  return articles.find((article) => article.featured) || articles[0] || null;
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): ArticleMetadata[] {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];

  const allArticles = getAllArticles();
  
  // Filter out current article and prioritize same category
  const related = allArticles
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === currentArticle.category ? 1 : 0;
      const bMatch = b.category === currentArticle.category ? 1 : 0;
      if (bMatch !== aMatch) return bMatch - aMatch;
      
      // Then sort by date
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);

  return related;
}

export function getLatestArticles(limit: number = 5, category?: string): ArticleMetadata[] {
  const articles = category ? getArticlesByCategory(category) : getAllArticles();
  return articles.slice(0, limit);
}