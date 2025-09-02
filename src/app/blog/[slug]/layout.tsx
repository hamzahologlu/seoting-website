import type { Metadata } from "next";

const blogPosts = {
  "eticaret-patlamasi-2024-milyonluk-satis-sirri": {
    title: "2024'te Türkiye'de E-ticaret Patlaması: 15 Dakikada Milyonluk Satış Sırrı",
    description: "Bir gecede viral olan e-ticaret mağazalarının kullandığı 7 gizli strateji. Bu yazıda açıkladığımız yöntemlerle 30 günde satışlarınızı %400 artırabilirsiniz.",
    keywords: ["e-ticaret", "satış stratejileri", "online mağaza", "digital marketing", "viral pazarlama", "e-commerce", "satış artırma", "online satış"],
  },
  "instagram-viral-loop-formulu-50k-takipci": {
    title: "Instagram'da 1 Gecede 50K Takipçi Kazanan Viral Loop Formülü",
    description: "Sosyal medya algoritmasını hackleyen 9 teknik. Bu formülü uygulayan markalar organik olarak günde 10K+ takipçi kazanıyor.",
    keywords: ["instagram", "viral loop", "takipçi kazanma", "sosyal medya", "algorithm", "instagram büyüme", "viral olmak", "social media"],
  },
  "google-2024-gizli-seo-guncellemesi": {
    title: "Google'ın 2024 Gizli SEO Güncellemesi: %90 Site Trafiğini Kaybettiren Değişiklik",
    description: "Arama dev Google'ın kimsenin fark etmediği algoritma değişikliği. Siteler bir gecede trafiklerinin %90'ını kaybetti. İşte koruyucu stratejiler.",
    keywords: ["google seo", "algoritma güncellemesi", "site trafiği", "seo stratejileri", "google update", "arama motoru optimizasyonu", "seo 2024"],
  },
  "chatgpt-gizli-komutlar-icerik-uretimi": {
    title: "ChatGPT ile İçerik Üretenlerin %95'inin Bilmediği 27 Gizli Komut",
    description: "OpenAI'ın resmi belgelerinde bile yazmayan, sadece uzmanların bildiği ChatGPT komutları. Bu prompt'ları kullanarak rekabet avantajı kazanın.",
    keywords: ["chatgpt", "ai komutlar", "içerik üretimi", "yapay zeka", "prompts", "openai", "ai writing", "content creation"],
  },
  "tiktok-viral-video-ozellikleri-10-milyon-izlenme": {
    title: "TikTok'ta 24 Saatte 10 Milyon İzlenme Alan Videolarının Ortak 8 Özelliği",
    description: "Viral TikTok videolarını analiz ettik. 10 milyon+ izlenme alan tüm videolarda bulunan 8 ortak özellik. Artık sizin de viral olma sıranız!",
    keywords: ["tiktok", "viral video", "izlenme", "video pazarlama", "tiktok algoritması", "viral olmak", "sosyal medya", "content marketing"],
  },
  "influencer-kazanc-gizli-platformlar": {
    title: "Influencer'ların Gizlediği Gerçek: Günlük 100K₺ Kazanç İçin Kullandıkları 12 Platform",
    description: "Büyük influencer'ların Instagram dışında kullandığı gizli para kazanma platformları. Bu listeleri ilk kez paylaşıyoruz.",
    keywords: ["influencer marketing", "para kazanma", "creator economy", "sosyal medya kazancı", "influencer gelir", "digital marketing", "online kazanç"],
  },
};

interface BlogLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı - SEOTING",
      description: "Aradığınız blog yazısı bulunamadı. SEOTING blog sayfasından diğer viral içerikleri keşfedin.",
    };
  }

  return {
    title: `${post.title} | SEOTING Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://seoting.com/blog/${params.slug}`,
      siteName: "SEOTING",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://seoting.com/blog/${params.slug}`,
    },
  };
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return <>{children}</>;
}
