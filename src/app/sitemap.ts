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
    '/paketler'
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
    '/google-sira-bulucu/api-setup',
    '/anahtar-kelime-analizi/api-setup',
    '/anahtar-kelime-analizi/google-setup'
  ]

  const allPages = [...staticPages, ...servicePages, ...packagePages, ...toolPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : page.includes('/araclar') || page.includes('/api-setup') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 
              staticPages.includes(page) ? 0.9 :
              servicePages.includes(page) ? 0.8 :
              packagePages.includes(page) ? 0.7 : 0.6,
  }))
}
