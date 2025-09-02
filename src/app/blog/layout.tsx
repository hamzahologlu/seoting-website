import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Viral Dijital Pazarlama İçerikleri",
  description: "SEOTING Blog'da dijital pazarlama dünyasının en güncel trendleri, viral stratejiler ve tıklanma rekorları kıran içerikler. SEO, sosyal medya, e-ticaret ve AI konularında uzman yazıları.",
  keywords: [
    "dijital pazarlama blog",
    "viral içerik stratejileri",
    "SEO blog yazıları",
    "sosyal medya trendleri",
    "e-ticaret stratejileri",
    "AI pazarlama",
    "influencer marketing",
    "içerik pazarlama blog",
    "marketing blog türkiye",
    "SEOTING blog"
  ],
  openGraph: {
    title: "SEOTING Blog - Viral Dijital Pazarlama İçerikleri",
    description: "Dijital pazarlama dünyasının en güncel trendleri, viral stratejiler ve tıklanma rekorları kıran içerikler. Rekabette öne geçin!",
    url: "https://seoting.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://seoting.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
