/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // cPanel için gerekli
  },
  // output: 'export', // Static export - gerçek API için kapatıldı
  trailingSlash: true, // cPanel için önerilen
  // distDir: 'out', // Export dizini - gerçek API için kapatıldı
  eslint: {
    ignoreDuringBuilds: true, // Build sırasında ESLint hatalarını yoksay
  },
  typescript: {
    ignoreBuildErrors: true, // Build sırasında TypeScript hatalarını yoksay
  },
};

module.exports = nextConfig;
