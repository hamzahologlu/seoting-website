'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Eye, ThumbsUp, Share2, Tag, ArrowLeft, MessageCircle, Link as LinkIcon, Facebook, Twitter, Linkedin, MapPin, TrendingUp, BarChart3, Target, Users, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

const blogPost = {
  id: 7,
  title: "İstanbul Dijital Pazarlama Trendleri 2024: Başakşehir'den Tüm Türkiye'ye",
  excerpt: "İstanbul'un dijital pazarlama dünyasındaki en güncel trendleri, Başakşehir merkezli SEOTING uzmanları analiz ediyor. 2024'te İstanbul işletmelerini bekleyen fırsatlar ve tehditler.",
  category: "İstanbul Dijital Pazarlama",
  readTime: "12 dakika",
  publishDate: "20 Aralık 2024",
  author: "SEOTING İstanbul Ekibi",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
  views: 1847,
  likes: 156,
  tags: ["İstanbul", "dijital pazarlama", "trendler", "2024", "Başakşehir", "SEO", "sosyal medya"],
  content: `
    <div class="prose prose-lg prose-invert max-w-none">
      <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-blue-300 mb-3">🏆 İstanbul'un Dijital Liderliği</h3>
        <p class="text-gray-300">Bu makale, İstanbul'un dijital pazarlama dünyasındaki konumunu ve 2024 trendlerini Başakşehir merkezli SEOTING uzmanları gözüyle analiz ediyor.</p>
      </div>
      
      <p class="lead text-xl text-gray-300 mb-8">İstanbul, Türkiye'nin dijital pazarlama başkenti olarak 2024'te de liderliğini sürdürüyor. Başakşehir'den tüm Türkiye'ye yayılan trendleri keşfedin.</p>
      
      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🌍 İstanbul'un Dijital Pazarlama Haritası</h2>
      <p class="text-gray-300 mb-6">İstanbul, 15 milyon nüfusu ve dinamik ekonomisi ile Türkiye'nin dijital pazarlama merkezi konumunda. Başakşehir'deki İkitelli Organize Sanayi Bölgesi'nden başlayarak, tüm ilçelere yayılan dijital dönüşüm süreci devam ediyor.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
        <h3 class="text-lg font-semibold text-white mb-4">📊 İstanbul Dijital Pazarlama İstatistikleri</h3>
        <ul class="space-y-2 text-gray-300">
          <li>• İstanbul'da 2.3 milyon aktif e-ticaret kullanıcısı</li>
          <li>• Günlük 8.5 milyon sosyal medya etkileşimi</li>
          <li>• Aylık 45 milyon Google araması</li>
          <li>• %67 dijital pazarlama bütçesi artışı</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🚀 2024'ün En Büyük Trendleri</h2>
      
      <h3 class="text-2xl font-bold text-blue-400 mt-8 mb-4">1. Yerel SEO Patlaması</h3>
      <p class="text-gray-300 mb-6">İstanbul'daki işletmeler için yerel SEO artık bir lüks değil, zorunluluk. "Beşiktaş restoran", "Kadıköy kuaför" gibi aramalar %340 arttı.</p>
      
      <div class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 my-8">
        <h4 class="text-lg font-semibold text-green-300 mb-3">💡 SEOTING İpucu</h4>
        <p class="text-gray-300">Başakşehir'deki müşterilerimiz için Google My Business optimizasyonu ile %250 daha fazla yerel müşteri kazandık.</p>
      </div>

      <h3 class="text-2xl font-bold text-purple-400 mt-8 mb-4">2. Video İçerik Dominasyonu</h3>
      <p class="text-gray-300 mb-6">İstanbul'da video içerik tüketimi %180 arttı. TikTok, Instagram Reels ve YouTube Shorts İstanbul gençliğinin favori platformları.</p>

      <h3 class="text-2xl font-bold text-orange-400 mt-8 mb-4">3. AI Destekli Pazarlama</h3>
      <p class="text-gray-300 mb-6">ChatGPT ve diğer AI araçları İstanbul'daki pazarlama ajanslarının vazgeçilmezi haline geldi. İçerik üretimi %400 hızlandı.</p>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏢 İstanbul İlçelerine Özel Stratejiler</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-blue-400 mb-3">Beşiktaş & Şişli</h4>
          <p class="text-gray-300 text-sm mb-3">Lüks markalar ve kurumsal müşteriler</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• LinkedIn odaklı B2B stratejileri</li>
            <li>• Premium içerik üretimi</li>
            <li>• Influencer işbirlikleri</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-green-400 mb-3">Kadıköy & Üsküdar</h4>
          <p class="text-gray-300 text-sm mb-3">Genç nüfus ve yaratıcı sektör</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• TikTok ve Instagram Reels</li>
            <li>• Yaratıcı video içerikler</li>
            <li>• Genç influencer işbirlikleri</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-purple-400 mb-3">Başakşehir & Bahçelievler</h4>
          <p class="text-gray-300 text-sm mb-3">Aile odaklı işletmeler</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• Facebook ve WhatsApp Business</li>
            <li>• Aile içerikli kampanyalar</li>
            <li>• Yerel etkinlik pazarlaması</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-orange-400 mb-3">Beyoğlu & Fatih</h4>
          <p class="text-gray-300 text-sm mb-3">Turizm ve kültür sektörü</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• Instagram Stories ve Highlights</li>
            <li>• Turist odaklı içerikler</li>
            <li>• Çok dilli pazarlama</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">📈 İstanbul'da Başarılı Olmak İçin 5 Altın Kural</h2>
      
      <div class="space-y-6 my-8">
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Yerel SEO'ya Odaklanın</h4>
            <p class="text-gray-300 text-sm">İstanbul'un 39 ilçesinde ayrı ayrı SEO stratejileri geliştirin. Her ilçenin kendine özgü arama alışkanlıkları var.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Mobil Öncelikli Düşünün</h4>
            <p class="text-gray-300 text-sm">İstanbul'da mobil internet kullanımı %85. Tüm pazarlama stratejilerinizi mobil odaklı tasarlayın.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Video İçerik Üretin</h4>
            <p class="text-gray-300 text-sm">İstanbul gençliği video içerik tüketiyor. TikTok, Instagram Reels ve YouTube Shorts'ta aktif olun.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
          <div>
            <h4 class="font-semibold text-white mb-2">AI Araçlarını Kullanın</h4>
            <p class="text-gray-300 text-sm">ChatGPT, Midjourney gibi AI araçları ile içerik üretimini hızlandırın ve maliyetleri düşürün.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Veri Odaklı Kararlar Alın</h4>
            <p class="text-gray-300 text-sm">Google Analytics, Facebook Pixel ve diğer analitik araçlarla sürekli ölçüm yapın ve optimize edin.</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎯 2024 İstanbul Dijital Pazarlama Öngörüleri</h2>
      
      <div class="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-red-300 mb-3">⚠️ Dikkat Edilmesi Gerekenler</h3>
        <ul class="text-gray-300 space-y-2">
          <li>• Google'ın yeni algoritma güncellemeleri yerel SEO'yu etkileyecek</li>
          <li>• TikTok'un e-ticaret entegrasyonu İstanbul'da büyük fırsatlar yaratacak</li>
          <li>• AI içerik üretimi ile organik içerik arasındaki denge kritik olacak</li>
          <li>• Veri gizliliği yasaları pazarlama stratejilerini değiştirecek</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏆 SEOTING'in İstanbul Başarı Hikayeleri</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-green-400 mb-3">Beşiktaş Restoran Zinciri</h4>
          <p class="text-gray-300 text-sm mb-3">Yerel SEO ile %400 müşteri artışı</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• Google My Business optimizasyonu</li>
            <li>• Yerel anahtar kelime stratejisi</li>
            <li>• Müşteri yorumu yönetimi</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-blue-400 mb-3">Kadıköy E-ticaret Mağazası</h4>
          <p class="text-gray-300 text-sm mb-3">Sosyal medya ile 1M+ takipçi</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• TikTok viral kampanyalar</li>
            <li>• Instagram Reels stratejisi</li>
            <li>• Influencer işbirlikleri</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🚀 İstanbul'da Dijital Pazarlama Geleceği</h2>
      <p class="text-gray-300 mb-6">İstanbul, 2024'te de Türkiye'nin dijital pazarlama merkezi olmaya devam edecek. Başakşehir'den başlayarak tüm ilçelere yayılan dijital dönüşüm, yeni fırsatlar ve zorluklar getiriyor.</p>
      
      <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-blue-300 mb-3">💼 SEOTING ile İstanbul'da Başarıya Ulaşın</h3>
        <p class="text-gray-300 mb-4">Başakşehir merkezli SEOTING ekibi olarak, İstanbul'un dinamik pazarında 5 yıllık deneyimimizle markanızı zirveye taşıyoruz.</p>
        <ul class="text-gray-300 space-y-2">
          <li>• 500+ İstanbul müşterisi</li>
          <li>• 39 ilçede hizmet</li>
          <li>• %300 ortalama ROI</li>
          <li>• 24/7 destek</li>
        </ul>
      </div>

      <p class="text-gray-300 mb-8">İstanbul'da dijital pazarlama dünyasında başarılı olmak için doğru stratejiler ve uzman ekiple çalışmak şart. SEOTING olarak, İstanbul'un her bölgesinden müşterilerimize en güncel trendleri uygulayarak ölçülebilir sonuçlar elde ediyoruz.</p>
    </div>
  `
};

export default function IstanbulDigitalMarketingTrendsPage() {
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(blogPost.views);

  useEffect(() => {
    setViews(prevViews => prevViews + 1);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://seoting.com/blog/${blogPost.title.toLowerCase().replace(/\s+/g, '-')}`;
  const shareTitle = blogPost.title;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link kopyalandı!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

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
            className="max-w-4xl mx-auto"
          >
            <motion.a
              href="/blog"
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </motion.a>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6 leading-tight">
                <span className="gradient-text">{blogPost.title}</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {blogPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{views.toLocaleString()} görüntülenme</span>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden mb-8">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      liked 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{liked ? blogPost.likes + 1 : blogPost.likes}</span>
                  </motion.button>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>Yorum Yap</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Paylaş:</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnTwitter}
                    className="p-2 bg-white/10 hover:bg-blue-500/20 rounded-full transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4 text-blue-400" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnFacebook}
                    className="p-2 bg-white/10 hover:bg-blue-600/20 rounded-full transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4 text-blue-500" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-white/10 hover:bg-blue-700/20 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyToClipboard}
                    className="p-2 bg-white/10 hover:bg-gray-500/20 rounded-full transition-colors duration-300"
                  >
                    <LinkIcon className="w-4 h-4 text-gray-400" />
                  </motion.button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">İstanbul'da Dijital Pazarlama Uzmanı Arıyorsunuz?</h3>
                <p className="text-gray-300 mb-6">
                  Başakşehir merkezli SEOTING ekibi olarak, İstanbul'un dinamik pazarında 5 yıllık deneyimimizle 
                  markanızı zirveye taşıyoruz. Ücretsiz danışmanlık için hemen iletişime geçin!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/iletisim"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                  >
                    <MapPin className="w-5 h-5" />
                    Ücretsiz Danışmanlık
                  </motion.a>
                  <motion.a
                    href="tel:+905442519082"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hemen Ara: +90 544 251 90 82
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
