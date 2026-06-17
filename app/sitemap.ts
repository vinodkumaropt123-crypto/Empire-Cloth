import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://empireclothinghub.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/collections',
    '/gallery',
    '/reviews',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/collections' ? 0.9 : 0.7,
  }));
}
