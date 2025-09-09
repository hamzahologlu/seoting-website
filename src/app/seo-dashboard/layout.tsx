import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Performance Dashboard - Kapsamlı SEO Analizi | SEOTING",
  description: "Sıralama ve hız analizi birleştiren kapsamlı SEO dashboard'u. Anahtar kelime performansınızı ve sayfa hızınızı tek yerde analiz edin. Google API'leri ile gerçek veriler.",
  keywords: [
    "SEO dashboard",
    "SEO analiz aracı",
    "anahtar kelime analizi",
    "sayfa hızı testi",
    "sıralama kontrolü",
    "SEO performans",
    "Google sıralama",
    "Core Web Vitals",
    "rakip analizi",
    "SEO raporu",
    "dijital pazarlama araçları",
    "SEOTING dashboard"
  ],
  openGraph: {
    title: "SEO Performance Dashboard - Kapsamlı SEO Analizi | SEOTING",
    description: "Sıralama ve hız analizi birleştiren kapsamlı SEO dashboard'u. Anahtar kelime performansınızı ve sayfa hızınızı tek yerde analiz edin.",
    url: "https://seoting.com/seo-dashboard",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SEO Performance Dashboard - SEOTING"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Performance Dashboard - Kapsamlı SEO Analizi | SEOTING",
    description: "Sıralama ve hız analizi birleştiren kapsamlı SEO dashboard'u. Anahtar kelime performansınızı ve sayfa hızınızı tek yerde analiz edin.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/seo-dashboard",
  },
};

export default function SEODashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
