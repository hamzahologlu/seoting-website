import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Dijital Pazarlama & Ürün Çekim Hizmetleri",
  description: "SEOTING'in sunduğu kapsamlı dijital pazarlama hizmetleri: SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı, video prodüksiyon, marka danışmanlığı ve daha fazlası. İstanbul'daki uzman ekibimizle tanışın.",
  keywords: [
    "dijital pazarlama hizmetleri",
    "SEO hizmetleri",
    "Google Ads yönetimi", 
    "sosyal medya yönetimi",
    "ürün fotoğrafçılığı İstanbul",
    "video prodüksiyon",
    "marka danışmanlığı",
    "içerik pazarlama",
    "e-ticaret çözümleri",
    "grafik tasarım hizmetleri"
  ],
  openGraph: {
    title: "SEOTING Hizmetleri - Dijital Pazarlama & Ürün Çekim",
    description: "SEO, SEM, sosyal medya, ürün fotoğrafçılığı, video prodüksiyon ve marka danışmanlığı hizmetleri. İstanbul'daki uzman ekibimizle tanışın.",
    url: "https://seoting.com/hizmetlerimiz",
  },
  alternates: {
    canonical: "https://seoting.com/hizmetlerimiz",
  },
};

export default function HizmetlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
