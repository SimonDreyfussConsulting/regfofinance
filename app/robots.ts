import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Get all article slugs from the content/articles directory
function getArticleSlugs(): string[] {
  const articlesDir = path.join(process.cwd(), 'content/articles');

  try {
    if (!fs.existsSync(articlesDir)) {
      return [];
    }

    const files = fs.readdirSync(articlesDir);
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace('.mdx', ''));
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

// Get all routes from the app directory (similar to sitemap.ts logic)
function getAppRoutes(dir: string, baseRoute: string = ''): string[] {
  const routes: string[] = [];

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const routePath = `${baseRoute}/${item.name}`;

      if (item.isDirectory()) {
        // Skip special directories
        if (item.name.startsWith('_') || item.name.startsWith('.') ||
            item.name === 'api' || item.name === 'components' ||
            item.name.startsWith('[')) { // Skip dynamic route folders like [slug]
          continue;
        }

        // Check if this directory has a page file
        const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) ||
                       fs.existsSync(path.join(fullPath, 'page.ts')) ||
                       fs.existsSync(path.join(fullPath, 'page.js'));

        if (hasPage) {
          routes.push(routePath);
        }

        // Recursively scan subdirectories
        routes.push(...getAppRoutes(fullPath, routePath));
      }
    }
  } catch (error) {
    console.error('Error scanning routes:', error);
  }

  return routes;
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://regularfolkfinance.com';

  // Get all article slugs
  const articleSlugs = getArticleSlugs();

  // Get all app routes
  const appDir = path.join(process.cwd(), 'app');
  const appRoutes = getAppRoutes(appDir);

  // Build allow rules for all content
  const allowRules: string[] = [
    '/', // Homepage
    ...appRoutes, // All app routes (category pages, etc.)
    '/articles', // Articles index
    ...articleSlugs.map(slug => `/articles/${slug}`), // All individual articles
  ];

  // Remove duplicates and sort
  const uniqueAllowRules = [...new Set(allowRules)].sort();

  return {
    rules: [
      {
        userAgent: '*',
        allow: uniqueAllowRules,
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/archive/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
