import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://regularfolkfinance.com';
  const currentDate = new Date();

  const routes = [
    { url: '', changeFrequency: 'daily' as const, priority: 1 },
    { url: '/credit-cards', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/personal-loans', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/reverse-mortgages', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/sofi-review', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/marcus-review', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/lightstream-review', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/upstart-review', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/avant-review', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/best-bad-credit', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/best-good-credit', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/best-fair-credit', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/best-quick-approval', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/personal-loans/best-debt-consolidation', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/privacy', changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/methodology', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/data-sources', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/blog/chase-sapphire-preferred', changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
