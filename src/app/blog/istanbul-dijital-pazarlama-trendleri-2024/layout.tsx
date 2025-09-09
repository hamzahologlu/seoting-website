import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Dijital Pazarlama Trendleri 2024 | SEOTING Blog",
  description: "İstanbul'un dijital pazarlama dünyasındaki en güncel trendleri, Başakşehir merkezli SEOTING uzmanları analiz ediyor. 2024'te İstanbul işletmelerini bekleyen fırsatlar ve tehditler. Yerel SEO, video içerik, AI pazarlama trendleri.",
  keywords: [
    "İstanbul dijital pazarlama trendleri",
    "2024 dijital pazarlama",
    "İstanbul SEO trendleri",
    "Başakşehir dijital pazarlama",
    "İstanbul sosyal medya trendleri",
    "yerel SEO İstanbul",
    "İstanbul pazarlama ajansı",
    "dijital pazarlama İstanbul",
    "İstanbul e-ticaret trendleri",
    "AI pazarlama İstanbul",
    "video pazarlama İstanbul",
    "İstanbul dijital dönüşüm"
  ],
  openGraph: {
    title: "İstanbul Dijital Pazarlama Trendleri 2024 | SEOTING Blog",
    description: "İstanbul'un dijital pazarlama dünyasındaki en güncel trendleri, Başakşehir merkezli SEOTING uzmanları analiz ediyor. 2024'te İstanbul işletmelerini bekleyen fırsatlar ve tehditler.",
    url: "https://seoting.com/blog/istanbul-dijital-pazarlama-trendleri-2024",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "İstanbul Dijital Pazarlama Trendleri 2024"
      }
    ],
    publishedTime: "2024-12-20T00:00:00.000Z",
    authors: ["SEOTING İstanbul Ekibi"],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Dijital Pazarlama Trendleri 2024 | SEOTING Blog",
    description: "İstanbul'un dijital pazarlama dünyasındaki en güncel trendleri, Başakşehir merkezli SEOTING uzmanları analiz ediyor.",
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/blog/istanbul-dijital-pazarlama-trendleri-2024",
  },
};

export default function IstanbulDigitalMarketingTrendsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
