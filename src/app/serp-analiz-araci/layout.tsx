import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SERP Analiz Aracı - Google Arama Sonuçları Analizi | SEOTING",
  description: "Google arama sonuçlarının özelliklerini detaylı analiz edin. Featured Snippets, Local Pack, People Also Ask ve daha fazlasını keşfedin. SERP analizi ile rakiplerinizin önüne geçin.",
  keywords: [
    "SERP analizi",
    "Google arama sonuçları",
    "Featured Snippets",
    "Local Pack analizi",
    "People Also Ask",
    "SERP özellikleri",
    "arama sonuçları analizi",
    "Google SERP",
    "SERP araçları",
    "SEO analiz",
    "dijital pazarlama araçları",
    "SEOTING SERP"
  ],
  openGraph: {
    title: "SERP Analiz Aracı - Google Arama Sonuçları Analizi | SEOTING",
    description: "Google arama sonuçlarının özelliklerini detaylı analiz edin. Featured Snippets, Local Pack, People Also Ask ve daha fazlasını keşfedin.",
    url: "https://seoting.com/serp-analiz-araci",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SERP Analiz Aracı - SEOTING"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERP Analiz Aracı - Google Arama Sonuçları Analizi | SEOTING",
    description: "Google arama sonuçlarının özelliklerini detaylı analiz edin. Featured Snippets, Local Pack, People Also Ask ve daha fazlasını keşfedin.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/serp-analiz-araci",
  },
};

export default function SERPAnalysisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
