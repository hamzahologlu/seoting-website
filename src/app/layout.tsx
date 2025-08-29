import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEOTING - Dijital Pazarlama Ajansı | İstanbul",
  description: "SEOTING, İstanbul merkezli dijital pazarlama ve ürün çekim hizmetleri sunan önde gelen ajansıdır. Türkiye'nin en büyük firmalarına danışmanlık hizmeti veriyoruz.",
  keywords: "dijital pazarlama, ürün çekimi, İstanbul, danışmanlık, SEOTING, pazarlama ajansı",
  authors: [{ name: "SEOTING" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "SEOTING - Dijital Pazarlama Ajansı",
    description: "İstanbul merkezli dijital pazarlama ve ürün çekim hizmetleri",
    type: "website",
    locale: "tr_TR",
    images: [{ url: '/favicon.svg', width: 1200, height: 630 }]
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

