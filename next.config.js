/** @type {import('next').NextConfig} */
const nextConfig = {
  /* SEO ve Performance Optimizasyonları */
  
  // Image optimizasyonu
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // cPanel için gerekli
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizasyonları
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Compression
  compress: true,

  // Experimental features for better SEO
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/robots.txt', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=3600',
          },
        ],
      },
    ]
  },

  // Rewrites for clean URLs (SEO friendly)
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },

  // Output config
  // output: 'export', // Static export - gerçek API için kapatıldı
  trailingSlash: true, // cPanel için önerilen
  // distDir: 'out', // Export dizini - gerçek API için kapatıldı

  // Build optimizasyonları
  eslint: {
    ignoreDuringBuilds: true, // Build sırasında ESLint hatalarını yoksay
  },
  typescript: {
    ignoreBuildErrors: true, // Build sırasında TypeScript hatalarını yoksay
  },

  // Bundle analyzer (development için)
  ...(process.env.ANALYZE === 'true' && {
    experimental: {
      bundlePagesRouterDependencies: true,
    }
  }),
};

module.exports = nextConfig;
