'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Eye,
  ThumbsUp,
  Share2,
  Tag,
  BookOpen,
  Star,
  Target,
  Zap
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "2024'te Türkiye'de E-ticaret Patlaması: 15 Dakikada Milyonluk Satış Yapan Mağazaların Sırrı",
    slug: "eticaret-patlamasi-2024-milyonluk-satis-sirri",
    excerpt: "Bir gecede viral olan e-ticaret mağazalarının kullandığı 7 gizli strateji. Bu yazıda açıkladığımız yöntemlerle 30 günde satışlarınızı %400 artırabilirsiniz.",
    content: `
    <p>Türkiye'de e-ticaret sektörü 2024'te inanılmaz bir patlama yaşadı. Bazı mağazalar sadece 15 dakikada milyonluk satış rakamlarına ulaştı. Peki bu nasıl mümkün?</p>
    
    <h2>1. Mikro-Moment Marketing</h2>
    <p>Müşterilerin satın alma kararı aldıkları o kritik anları yakalamak...</p>
    
    <h2>2. AI Destekli Kişiselleştirme</h2>
    <p>Yapay zeka ile her müşteriye özel deneyim yaratmak...</p>
    `,
    category: "E-ticaret",
    readTime: "8 dakika",
    publishDate: "15 Aralık 2024",
    author: "SEOTING Uzmanları",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    views: 12547,
    likes: 234,
    featured: true,
    tags: ["e-ticaret", "satış", "strateji", "ai", "marketing"]
  },
  {
    id: 2,
    title: "Instagram'da 1 Gecede 50K Takipçi Kazanan Markaların Uyguladığı 'Viral Loop' Formülü",
    slug: "instagram-viral-loop-formulu-50k-takipci",
    excerpt: "Sosyal medya algoritmasını hackleyen 9 teknik. Bu formülü uygulayan markalar organik olarak günde 10K+ takipçi kazanıyor.",
    content: `
    <p>2024'ün en büyük sosyal medya keşfi: Viral Loop Formülü. Bu yazıda size adım adım nasıl uygulayacağınızı göstereceğim.</p>
    
    <h2>Viral Loop Nedir?</h2>
    <p>Kullanıcılarınızın içeriğinizi paylaşmaya mecbur kaldığı psikolojik döngü...</p>
    `,
    category: "Sosyal Medya",
    readTime: "6 dakika",
    publishDate: "12 Aralık 2024",
    author: "Sosyal Medya Ekibi",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=400&fit=crop",
    views: 8923,
    likes: 456,
    featured: true,
    tags: ["instagram", "viral", "sosyal medya", "takipçi", "algoritma"]
  },
  {
    id: 3,
    title: "Google'ın 2024 Gizli SEO Güncellemesi: %90 Site Trafiğini Kaybettiren Değişiklik",
    slug: "google-2024-gizli-seo-guncellemesi",
    excerpt: "Arama dev Google'ın kimsenin fark etmediği algoritma değişikliği. Siteler bir gecede trafiklerinin %90'ını kaybetti. İşte koruyucu stratejiler.",
    content: `
    <p>Google'ın Kasım 2024'te sessizce yaptığı algoritma güncellemesi SEO dünyasını sarstı. Binlerce site trafiklerinin büyük bölümünü kaybetti.</p>
    
    <h2>Güncellemenin Detayları</h2>
    <p>Helpful Content Update 3.0 olarak adlandırılan bu güncelleme...</p>
    `,
    category: "SEO",
    readTime: "10 dakika",
    publishDate: "8 Aralık 2024",
    author: "SEO Ekibi",
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=800&h=400&fit=crop",
    views: 15634,
    likes: 789,
    featured: false,
    tags: ["seo", "google", "algoritma", "trafik", "güncelleme"]
  },
  {
    id: 4,
    title: "ChatGPT ile İçerik Üretenlerin %95'inin Bilmediği 27 Gizli Komut",
    slug: "chatgpt-gizli-komutlar-icerik-uretimi",
    excerpt: "OpenAI'ın resmi belgelerinde bile yazmayan, sadece uzmanların bildiği ChatGPT komutları. Bu prompt'ları kullanarak rekabet avantajı kazanın.",
    content: `
    <p>ChatGPT'nin gizli kalmış 27 komutu ile içerik üretim sürecinizi devrim niteliğinde değiştirin.</p>
    
    <h2>Gizli Komut #1: Deep Research Mode</h2>
    <p>/research [konu] --depth=expert --sources=academic</p>
    `,
    category: "AI & Teknoloji",
    readTime: "12 dakika",
    publishDate: "5 Aralık 2024",
    author: "AI Uzmanları",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    views: 22156,
    likes: 1247,
    featured: true,
    tags: ["chatgpt", "ai", "içerik", "prompts", "teknoloji"]
  },
  {
    id: 5,
    title: "TikTok'ta 24 Saatte 10 Milyon İzlenme Alan Videolarının Ortak 8 Özelliği",
    slug: "tiktok-viral-video-ozellikleri-10-milyon-izlenme",
    excerpt: "Viral TikTok videolarını analiz ettik. 10 milyon+ izlenme alan tüm videolarda bulunan 8 ortak özellik. Artık sizin de viral olma sıranız!",
    content: `
    <p>24 saatte 10 milyon izlenme almak imkansız mı? Hayır! İşte viral TikTok videolarının sırrı.</p>
    
    <h2>Özellik #1: İlk 3 Saniye Kuralı</h2>
    <p>Viral videolar izleyiciyi ilk 3 saniyede yakalıyor...</p>
    `,
    category: "İçerik Pazarlama",
    readTime: "7 dakika",
    publishDate: "2 Aralık 2024",
    author: "Video Uzmanları",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
    views: 18903,
    likes: 892,
    featured: false,
    tags: ["tiktok", "viral", "video", "izlenme", "algoritma"]
  },
  {
    id: 6,
    title: "Influencer'ların Gizlediği Gerçek: Günlük 100K₺ Kazanç İçin Kullandıkları 12 Platform",
    slug: "influencer-kazanc-gizli-platformlar",
    excerpt: "Büyük influencer'ların Instagram dışında kullandığı gizli para kazanma platformları. Bu listeleri ilk kez paylaşıyoruz.",
    content: `
    <p>Türkiye'nin en büyük influencer'ları günlük 100K₺+ kazanıyor. İşte kullandıkları gizli platformlar...</p>
    
    <h2>Platform #1: Creator Economy Networks</h2>
    <p>Sadece seçkin creator'lara açık özel networkler...</p>
    `,
    category: "Influencer Marketing",
    readTime: "9 dakika",
    publishDate: "28 Kasım 2024",
    author: "Influencer Uzmanları",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    views: 31247,
    likes: 1856,
    featured: true,
    tags: ["influencer", "kazanç", "platform", "creator", "marketing"]
  }
];

const categories = ["Tümü", "E-ticaret", "SEO", "Sosyal Medya", "AI & Teknoloji", "İçerik Pazarlama", "Influencer Marketing"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  
  const filteredPosts = selectedCategory === "Tümü" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              📝 SEOTING Blog
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Viral İçerikler</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dijital pazarlama dünyasının en güncel trendleri, viral stratejiler ve 
              tıklanma rekorları kıran içerikler burada. Rekabette öne geçin!
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <Star className="w-8 h-8 text-yellow-400" />
              Öne Çıkan Yazılar
            </h2>
            <p className="text-gray-300">En çok okunan ve viral olan blog yazıları</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredPosts.filter(post => post.featured).slice(0, 4).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ y: -10 }}
                  className="block glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      🔥 Viral
                    </div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp size={14} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User size={14} />
                        <span>{post.author}</span>
                        <span>•</span>
                        <Calendar size={14} />
                        <span>{post.publishDate}</span>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" />
              Tüm Blog Yazıları
            </h2>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ y: -5 }}
                  className="block glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {post.category}
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-lg text-xs">
                        ⭐ Öne Çıkan
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span>{(post.views / 1000).toFixed(1)}K</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.publishDate}</span>
                      <ArrowRight className="w-4 h-4 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.a>
              </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bu kategoride henüz yazı yok</h3>
              <p className="text-gray-400 mb-6">
                {selectedCategory} kategorisinde henüz blog yazısı bulunmuyor. Diğer kategorileri keşfedin!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory("Tümü")}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-full font-semibold text-white transition-all duration-300"
              >
                Tüm Yazıları Gör
              </motion.button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
