import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anahtar Kelime İzleme - Otomatik Sıralama Takibi | SEOTING",
  description: "Anahtar kelimelerinizin Google sıralamalarını otomatik takip edin. Sıralama değişimlerini anında bildirim alın ve SEO stratejinizi optimize edin. Detaylı raporlar ve trend analizi.",
  keywords: [
    "anahtar kelime izleme",
    "keyword tracking",
    "sıralama takibi",
    "Google sıralama",
    "SEO izleme",
    "anahtar kelime analizi",
    "sıralama değişimi",
    "SEO bildirimleri",
    "keyword monitoring",
    "sıralama raporu",
    "SEO araçları",
    "dijital pazarlama araçları",
    "SEOTING izleme"
  ],
  openGraph: {
    title: "Anahtar Kelime İzleme - Otomatik Sıralama Takibi | SEOTING",
    description: "Anahtar kelimelerinizin Google sıralamalarını otomatik takip edin. Sıralama değişimlerini anında bildirim alın ve SEO stratejinizi optimize edin.",
    url: "https://seoting.com/anahtar-kelime-izleme",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Anahtar Kelime İzleme - SEOTING"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anahtar Kelime İzleme - Otomatik Sıralama Takibi | SEOTING",
    description: "Anahtar kelimelerinizin Google sıralamalarını otomatik takip edin. Sıralama değişimlerini anında bildirim alın ve SEO stratejinizi optimize edin.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    creator: "@seoting",
  },
  alternates: {
    canonical: "https://seoting.com/anahtar-kelime-izleme",
  },
};

export default function KeywordTrackingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
