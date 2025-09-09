import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul İşletmeleri İçin Kapsamlı SEO Rehberi | SEOTING Blog",
  description: "İstanbul'daki işletmenizi Google'da 1. sıraya çıkarmak için gereken tüm SEO tekniklerini öğrenin. Başakşehir'den Beşiktaş'a, Kadıköy'den Şişli'ye tüm İstanbul ilçeleri için özel stratejiler. Yerel SEO, Google My Business, anahtar kelime araştırması.",
  keywords: [
    "İstanbul SEO rehberi",
    "İstanbul işletmeleri SEO",
    "yerel SEO İstanbul",
    "Google My Business İstanbul",
    "İstanbul anahtar kelime araştırması",
    "Başakşehir SEO",
    "Beşiktaş SEO",
    "Kadıköy SEO",
    "Şişli SEO",
    "İstanbul SEO uzmanı",
    "İstanbul SEO ajansı",
    "İstanbul dijital pazarlama SEO"
  ],
  openGraph: {
    title: "İstanbul İşletmeleri İçin Kapsamlı SEO Rehberi | SEOTING Blog",
    description: "İstanbul'daki işletmenizi Google'da 1. sıraya çıkarmak için gereken tüm SEO tekniklerini öğrenin. 39 ilçe için özel stratejiler.",
    url: "https://seoting.com/blog/istanbul-isletmeleri-icin-seo-rehberi",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "İstanbul İşletmeleri İçin SEO Rehberi"
      }
    ],
    publishedTime: "2024-12-22T00:00:00.000Z",
    authors: ["SEOTING SEO Uzmanları"],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul İşletmeleri İçin Kapsamlı SEO Rehberi | SEOTING Blog",
    description: "İstanbul'daki işletmenizi Google'da 1. sıraya çıkarmak için gereken tüm SEO tekniklerini öğrenin.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/blog/istanbul-isletmeleri-icin-seo-rehberi",
  },
};

export default function IstanbulBusinessSEOGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
