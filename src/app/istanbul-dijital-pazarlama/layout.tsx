import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İstanbul Dijital Pazarlama Ajansı | SEOTING - #1 Dijital Pazarlama Hizmetleri",
  description: "İstanbul'un en büyük dijital pazarlama ajansı SEOTING. Başakşehir merkezli, İstanbul'un 39 ilçesinde SEO, Google Ads, sosyal medya yönetimi ve dijital pazarlama hizmetleri. 500+ mutlu müşteri, 5 yıllık deneyim.",
  keywords: [
    "İstanbul dijital pazarlama",
    "dijital pazarlama ajansı İstanbul",
    "İstanbul SEO hizmetleri",
    "Google Ads İstanbul",
    "sosyal medya yönetimi İstanbul",
    "Başakşehir dijital pazarlama",
    "İstanbul pazarlama ajansı",
    "dijital ajans İstanbul",
    "İstanbul SEO uzmanı",
    "dijital pazarlama danışmanı İstanbul",
    "İstanbul web tasarım ajansı",
    "yerel SEO İstanbul",
    "İstanbul dijital pazarlama hizmetleri",
    "SEOTING İstanbul",
    "İstanbul dijital ajans",
    "pazarlama ajansı İstanbul",
    "İstanbul dijital pazarlama uzmanı",
    "dijital pazarlama firması İstanbul",
    "İstanbul online pazarlama",
    "İstanbul dijital reklam"
  ],
  openGraph: {
    title: "İstanbul Dijital Pazarlama Ajansı | SEOTING - #1 Dijital Pazarlama Hizmetleri",
    description: "İstanbul'un en büyük dijital pazarlama ajansı. Başakşehir merkezli, 500+ mutlu müşteri, 5 yıllık deneyim. SEO, Google Ads, sosyal medya yönetimi.",
    url: "https://seoting.com/istanbul-dijital-pazarlama",
    type: "website",
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'SEOTING İstanbul Dijital Pazarlama Ajansı'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "İstanbul Dijital Pazarlama Ajansı | SEOTING",
    description: "İstanbul'un #1 dijital pazarlama ajansı. Başakşehir merkezli, 500+ mutlu müşteri, 5 yıllık deneyim.",
    images: ['/favicon.svg'],
  },
  alternates: {
    canonical: "https://seoting.com/istanbul-dijital-pazarlama",
  },
};

export default function IstanbulDigitalMarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
