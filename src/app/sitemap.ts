import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://seoting.com'
  
  // Ana sayfalar
  const staticPages = [
    '',
    '/hakkimizda',
    '/hizmetlerimiz',
    '/iletisim',
    '/araclar',
    '/paketler',
    '/blog',
    '/istanbul-dijital-pazarlama'
  ]

  // Hizmet sayfaları
  const servicePages = [
    '/dijital-pazarlama-stratejisi',
    '/seo-sem-hizmetleri',
    '/sosyal-medya-yonetimi',
    '/urun-fotografciligi',
    '/video-produksiyon',
    '/marka-danismanligi',
    '/icerik-pazarlamasi',
    '/analiz-raporlama',
    '/gorsel-tasarim',
    '/performans-optimizasyonu',
    '/360-urun-gorsellestirme'
  ]

  // Paket sayfaları
  const packagePages = [
    '/startup-paketi',
    '/buyume-paketi',
    '/kurumsal-paket'
  ]

  // SEO araç sayfaları
  const toolPages = [
    '/google-sira-bulucu',
    '/anahtar-kelime-analizi',
    '/sayfa-hizi-testi',
    '/seo-sihirbazi',
    '/serp-analiz-araci',
    '/toplu-site-analizi',
    '/anahtar-kelime-izleme',
    '/google-sira-bulucu/api-setup',
    '/anahtar-kelime-analizi/api-setup',
    '/anahtar-kelime-analizi/google-setup'
  ]

  // Blog yazıları
  const blogPosts = [
    { slug: 'eticaret-patlamasi-2024-milyonluk-satis-sirri', date: '2024-12-15' },
    { slug: 'instagram-viral-loop-formulu-50k-takipci', date: '2024-12-12' },
    { slug: 'google-2024-gizli-seo-guncellemesi', date: '2024-12-10' },
    { slug: 'chatgpt-gizli-komutlar-icerik-uretimi', date: '2024-12-05' },
    { slug: 'tiktok-viral-video-ozellikleri-10-milyon-izlenme', date: '2024-12-02' },
    { slug: 'influencer-kazanc-gizli-platformlar', date: '2024-11-28' },
    { slug: 'istanbul-dijital-pazarlama-trendleri-2024', date: '2024-12-20' },
    { slug: 'istanbul-isletmeleri-icin-seo-rehberi', date: '2024-12-22' },
  ];

  const blogPostEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...servicePages, ...packagePages, ...toolPages]

  return [
    ...allPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' as const : page.includes('/araclar') || page.includes('/api-setup') ? 'weekly' as const : 'monthly' as const,
      priority: page === '' ? 1 : 
                staticPages.includes(page) ? 0.9 :
                servicePages.includes(page) ? 0.8 :
                packagePages.includes(page) ? 0.7 : 0.6,
    })),
    ...blogPostEntries,
  ]
}
