// lib/articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
  content: string;
}

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  featured?: boolean;
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

    return {
      slug: realSlug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || '',
      image: data.image || '',
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