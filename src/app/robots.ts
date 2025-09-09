import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      // Japonya arama motorlarını engelle
      {
        userAgent: 'Yahoo! Slurp',
        disallow: '/',
      },
      {
        userAgent: 'YahooJP',
        disallow: '/',
      },
      {
        userAgent: 'Y!J',
        disallow: '/',
      },
      {
        userAgent: 'goo',
        disallow: '/',
      },
      {
        userAgent: 'gooBot',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-image',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-video',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-news',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-favo',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-cpro',
        disallow: '/',
      },
      {
        userAgent: 'Baiduspider-ads',
        disallow: '/',
      },
    ],
    sitemap: 'https://seoting.com/sitemap.xml',
    host: 'https://seoting.com',
  }
}
