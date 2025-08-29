import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEOTING - Dijital Pazarlama Ajansı | İstanbul",
  description: "SEOTING, İstanbul merkezli dijital pazarlama ve ürün çekim hizmetleri sunan önde gelen ajansıdır. Türkiye'nin en büyük firmalarına danışmanlık hizmeti veriyoruz.",
  keywords: "dijital pazarlama, ürün çekimi, İstanbul, danışmanlık, SEOTING, pazarlama ajansı",
  authors: [{ name: "SEOTING" }],
  openGraph: {
    title: "SEOTING - Dijital Pazarlama Ajansı",
    description: "İstanbul merkezli dijital pazarlama ve ürün çekim hizmetleri",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

