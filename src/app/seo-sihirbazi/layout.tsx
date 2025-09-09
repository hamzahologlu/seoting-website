import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Sihirbazı - Sihirli SEO Analizi | SEOTING",
  description: "Sihirli dokunuşlarla SEO performansınızı büyüleyin! Sıralama ve hız analizi birleştiren kapsamlı SEO sihirbazı. Anahtar kelime performansınızı ve sayfa hızınızı tek yerde analiz edin.",
  keywords: [
    "SEO sihirbazı",
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
    title: "SEO Sihirbazı - Sihirli SEO Analizi | SEOTING",
    description: "Sihirli dokunuşlarla SEO performansınızı büyüleyin! Sıralama ve hız analizi birleştiren kapsamlı SEO sihirbazı.",
    url: "https://seoting.com/seo-sihirbazi",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SEO Sihirbazı - SEOTING"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Sihirbazı - Sihirli SEO Analizi | SEOTING",
    description: "Sihirli dokunuşlarla SEO performansınızı büyüleyin! Sıralama ve hız analizi birleştiren kapsamlı SEO sihirbazı.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/seo-sihirbazi",
  },
};

export default function SEODashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
