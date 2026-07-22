import { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sparkers.games';
  const routes = ['', '/play', '/couples', '/library', '/quizzes', '/encyclopedia', '/blog'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
