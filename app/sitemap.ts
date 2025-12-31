import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Configuration for route priorities and change frequencies
const routeConfig: Record<string, { priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }> = {
  '/': { priority: 1, changeFrequency: 'daily' },
  '/credit-cards': { priority: 0.9, changeFrequency: 'weekly' },
  '/personal-loans': { priority: 0.9, changeFrequency: 'weekly' },
  '/budgeting': { priority: 0.9, changeFrequency: 'weekly' },
  '/banking': { priority: 0.8, changeFrequency: 'weekly' },
  '/retirement': { priority: 0.8, changeFrequency: 'weekly' },
  '/debt': { priority: 0.8, changeFrequency: 'weekly' },
  '/mortgages': { priority: 0.8, changeFrequency: 'weekly' },
  '/articles': { priority: 0.8, changeFrequency: 'weekly' },
  '/methodology': { priority: 0.7, changeFrequency: 'monthly' },
  '/contact': { priority: 0.6, changeFrequency: 'monthly' },
  '/privacy': { priority: 0.5, changeFrequency: 'monthly' },
  '/data-sources': { priority: 0.6, changeFrequency: 'monthly' },
};

// Default config for routes not explicitly defined
const defaultConfig = { priority: 0.8, changeFrequency: 'weekly' as const };

// Article config - slightly higher priority for fresh content
const articleConfig = { priority: 0.85, changeFrequency: 'weekly' as const };

// Get all published articles from content/articles directory
function getPublishedArticles(): { slug: string; date: string }[] {
  const articlesDir = path.join(process.cwd(), 'content/articles');
  const articles: { slug: string; date: string }[] = [];

  try {
    if (!fs.existsSync(articlesDir)) {
      return [];
    }

    const files = fs.readdirSync(articlesDir);

    for (const file of files) {
      if (!file.endsWith('.mdx')) continue;

      const filePath = path.join(articlesDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      // Only include published articles with valid titles
      if (data.isPublished !== false && data.title && data.title.trim() !== '') {
        articles.push({
          slug: file.replace('.mdx', ''),
          date: data.date || new Date().toISOString(),
        });
      }
    }
  } catch (error) {
    console.error('Error reading articles:', error);
  }

  return articles;
}

// Routes to exclude from sitemap (noindex pages, API routes, etc.)
const excludePatterns = [
  '/api',
  '/_',
  '/admin',
  // Add any noindexed placeholder pages here if needed
];

function getRoutes(dir: string, baseRoute: string = ''): string[] {
  const routes: string[] = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const routePath = `${baseRoute}/${item.name}`;
      
      if (item.isDirectory()) {
        // Skip special Next.js directories, dynamic routes, and excluded patterns
        if (item.name.startsWith('_') || item.name.startsWith('.') ||
            item.name.startsWith('[') || // Skip dynamic route folders like [slug]
            item.name === 'api' || item.name === 'components') {
          continue;
        }
        
        // Check if this directory has a page.tsx (making it a route)
        const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) || 
                       fs.existsSync(path.join(fullPath, 'page.ts')) ||
                       fs.existsSync(path.join(fullPath, 'page.js'));
        
        if (hasPage) {
          const cleanRoute = routePath.replace(/\/page\.(tsx|ts|js)$/, '');
          
          // Check if route should be excluded
          const shouldExclude = excludePatterns.some(pattern => cleanRoute.startsWith(pattern));
          
          if (!shouldExclude) {
            routes.push(cleanRoute);
          }
        }
        
        // Recursively scan subdirectories
        routes.push(...getRoutes(fullPath, routePath));
      }
    }
  } catch (error) {
    console.error('Error scanning routes:', error);
  }
  
  return routes;
}

function checkForNoIndex(routePath: string, appDir: string): boolean {
  // Convert route to file path
  const pagePath = path.join(appDir, routePath, 'page.tsx');
  
  try {
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf-8');
      // Check for noindex in metadata
      return content.includes("robots: 'noindex") || 
             content.includes('robots: "noindex') ||
             content.includes("noindex: true") ||
             content.includes('noindex: true');
    }
  } catch {
    // If we can't read the file, include it in sitemap
  }
  
  return false;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://regularfolkfinance.com';
  const currentDate = new Date();

  // Get the app directory path
  const appDir = path.join(process.cwd(), 'app');

  // Auto-discover static routes (excludes dynamic [slug] routes)
  const discoveredRoutes = getRoutes(appDir);

  // Add root route
  const allRoutes = ['/', ...discoveredRoutes];

  // Build sitemap entries for static pages
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of allRoutes) {
    // Skip if page has noindex
    if (route !== '/' && checkForNoIndex(route, appDir)) {
      continue;
    }

    const config = routeConfig[route] || defaultConfig;

    sitemapEntries.push({
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: currentDate,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    });
  }

  // Get all published articles and add them to sitemap
  const articles = getPublishedArticles();

  for (const article of articles) {
    sitemapEntries.push({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: articleConfig.changeFrequency,
      priority: articleConfig.priority,
    });
  }

  // Sort by priority (highest first) for cleaner output
  sitemapEntries.sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return sitemapEntries;
}