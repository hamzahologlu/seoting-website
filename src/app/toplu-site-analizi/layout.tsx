import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toplu Site Analizi - Birden Fazla Siteyi Aynı Anda Analiz Edin | SEOTING",
  description: "Birden fazla web sitesini aynı anda analiz edin. Performans, hız ve optimizasyon fırsatlarını toplu olarak değerlendirin. Core Web Vitals ve detaylı performans metrikleri.",
  keywords: [
    "toplu site analizi",
    "bulk site analysis",
    "çoklu site analizi",
    "site performans analizi",
    "Core Web Vitals",
    "sayfa hızı testi",
    "toplu optimizasyon",
    "site karşılaştırması",
    "performans metrikleri",
    "SEO araçları",
    "dijital pazarlama araçları",
    "SEOTING toplu analiz"
  ],
  openGraph: {
    title: "Toplu Site Analizi - Birden Fazla Siteyi Aynı Anda Analiz Edin | SEOTING",
    description: "Birden fazla web sitesini aynı anda analiz edin. Performans, hız ve optimizasyon fırsatlarını toplu olarak değerlendirin.",
    url: "https://seoting.com/toplu-site-analizi",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Toplu Site Analizi - SEOTING"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toplu Site Analizi - Birden Fazla Siteyi Aynı Anda Analiz Edin | SEOTING",
    description: "Birden fazla web sitesini aynı anda analiz edin. Performans, hız ve optimizasyon fırsatlarını toplu olarak değerlendirin.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/toplu-site-analizi",
  },
};

export default function BulkSiteAnalysisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
