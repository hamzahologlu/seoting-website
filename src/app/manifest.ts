import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SEOTING - Dijital Pazarlama Ajansı',
    short_name: 'SEOTING',
    description: 'İstanbul merkezli dijital pazarlama ve ürün çekim hizmetleri. SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı ve marka danışmanlığı.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['business', 'marketing', 'photography'],
    lang: 'tr',
    scope: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
    ],
    screenshots: [
      {
        src: '/favicon.svg',
        sizes: '1280x720',
        type: 'image/svg+xml',
        form_factor: 'wide',
        label: 'SEOTING Ana Sayfa',
      },
    ],
  }
}
