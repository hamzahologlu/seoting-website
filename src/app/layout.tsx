import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: "SEOTING - Dijital Pazarlama Ajansı | İstanbul",
    template: "%s | SEOTING"
  },
  description: "İstanbul merkezli SEOTING, dijital pazarlama ve ürün çekim hizmetleri sunan önde gelen ajansıdır. SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı ve marka danışmanlığı ile Türkiye'nin en büyük firmalarına hizmet veriyoruz.",
  keywords: [
    "dijital pazarlama ajansı",
    "SEO hizmetleri İstanbul", 
    "Google Ads yönetimi",
    "sosyal medya yönetimi",
    "ürün fotoğrafçılığı",
    "marka danışmanlığı",
    "e-ticaret çözümleri",
    "video prodüksiyon",
    "içerik pazarlama",
    "performans pazarlama",
    "SEOTING",
    "İstanbul pazarlama ajansı"
  ],
  authors: [{ name: "SEOTING Dijital Pazarlama" }],
  creator: "SEOTING",
  publisher: "SEOTING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://seoting.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
    },
  },
  openGraph: {
    title: "SEOTING - İstanbul'un Önde Gelen Dijital Pazarlama Ajansı",
    description: "SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı ve marka danışmanlığı hizmetleri. 5+ yıl deneyim, 150+ mutlu müşteri. Projenizi başlatın!",
    type: "website",
    locale: "tr_TR",
    url: "https://seoting.com",
    siteName: "SEOTING",
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'SEOTING Dijital Pazarlama Ajansı Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEOTING - İstanbul'un Önde Gelen Dijital Pazarlama Ajansı",
    description: "SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı ve marka danışmanlığı hizmetleri. 5+ yıl deneyim, 150+ mutlu müşteri.",
    creator: '@seoting',
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <StructuredData type="organization" />
      </head>
      <body className="antialiased">
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}
        <Analytics />
      </body>
    </html>
  );
}

