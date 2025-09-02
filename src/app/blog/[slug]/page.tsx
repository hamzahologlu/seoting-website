'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Clock,
  User,
  Eye,
  ThumbsUp,
  Share2,
  ArrowLeft,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  BookOpen,
  Tag,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const blogPosts = {
  "eticaret-patlamasi-2024-milyonluk-satis-sirri": {
    id: 1,
    title: "2024'te Türkiye'de E-ticaret Patlaması: 15 Dakikada Milyonluk Satış Yapan Mağazaların Sırrı",
    excerpt: "Bir gecede viral olan e-ticaret mağazalarının kullandığı 7 gizli strateji. Bu yazıda açıkladığımız yöntemlerle 30 günde satışlarınızı %400 artırabilirsiniz.",
    category: "E-ticaret",
    readTime: "8 dakika",
    publishDate: "15 Aralık 2024",
    author: "SEOTING Uzmanları",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    views: 12547,
    likes: 234,
    tags: ["e-ticaret", "satış", "strateji", "ai", "marketing"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="lead text-xl text-gray-300 mb-8">Türkiye'de e-ticaret sektörü 2024'te inanılmaz bir patlama yaşadı. Bazı mağazalar sadece 15 dakikada milyonluk satış rakamlarına ulaştı. Peki bu nasıl mümkün? İşte bu başarının arkasındaki 7 gizli strateji...</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎯 1. Mikro-Moment Marketing</h2>
        <p class="text-gray-300 mb-6">Müşterilerin satın alma kararı aldıkları o kritik anları yakalamak, e-ticaret başarısının anahtarıdır. 2024'te başarılı olan markalar, bu mikro-momentleri analiz ederek mükemmel zamanlama yakaladılar.</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-blue-300 mb-3">💡 Uygulama Örneği</h3>
          <p class="text-gray-300">Bir mobilya e-ticaret sitesi, kullanıcıların "yemek masası" aradığı anları tespit etti. Bu aramaların %70'inin Pazar günleri saat 14:00-17:00 arasında gerçekleştiğini keşfettiler. Bu saatlerde özel kampanyalar başlatarak satışlarını %340 artırdılar.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🤖 2. AI Destekli Kişiselleştirme</h2>
        <p class="text-gray-300 mb-6">Yapay zeka ile her müşteriye özel deneyim yaratmak artık lüks değil, zorunluluk. Başarılı markalar şu AI stratejilerini kullanıyor:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">Dinamik Fiyatlandırma:</strong> Gerçek zamanlı talep analizine göre fiyat optimizasyonu</li>
          <li><strong class="text-white">Davranışsal Hedefleme:</strong> Geçmiş alışveriş davranışlarına göre ürün önerileri</li>
          <li><strong class="text-white">Sentiment Analizi:</strong> Sosyal medya verilerinden trend tespiti</li>
          <li><strong class="text-white">Chatbot Optimizasyonu:</strong> 7/24 müşteri desteği ve satış asistanı</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">📱 3. Sosyal Ticaret (Social Commerce)</h2>
        <p class="text-gray-300 mb-6">Instagram ve TikTok üzerinden direkt satış yapma trendi 2024'te zirve yaptı. Başarılı markalar şu stratejileri uyguladı:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-pink-300 mb-3">Instagram Shopping</h3>
            <p class="text-gray-300 text-sm">Story'lerde ürün etiketleme, IGTV alışveriş videoları ve Reels'te ürün tanıtımları</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-purple-300 mb-3">TikTok Shop</h3>
            <p class="text-gray-300 text-sm">Viral videolar içinde ürün yerleştirme ve influencer işbirlikleri</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">⚡ 4. Hızlı Kargo ve Teslimat İnovasyonları</h2>
        <p class="text-gray-300 mb-6">2024'te teslimat hızı rekabet avantajının en önemli faktörü haline geldi. Başarılı markalar şu yenilikleri hayata geçirdi:</p>
        
        <blockquote class="border-l-4 border-green-500 pl-6 my-8 bg-green-500/5 py-4">
          <p class="text-green-300 italic">"Aynı gün teslimat vaadi veren e-ticaret siteleri, rakiplerine göre %450 daha yüksek dönüşüm oranı elde etti." - E-ticaret Araştırma Raporu 2024</p>
        </blockquote>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎮 5. Gamifikasyon Stratejileri</h2>
        <p class="text-gray-300 mb-6">Alışverişi oyun haline getiren markalar inanılmaz başarı elde etti:</p>
        
        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-300 mb-3">🏆 Başarı Hikayesi</h3>
          <p class="text-gray-300">Bir moda e-ticaret sitesi, "Stil Macerası" adında bir oyun geliştirdi. Kullanıcılar alışveriş yaparak puan topluyordu. Bu strateji ile ortalama sepet tutarı %280 arttı.</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">📊 6. Veri Analitiği ve Predictive Analytics</h2>
        <p class="text-gray-300 mb-6">Gelecekteki trendleri önceden tahmin eden markalar stok yönetiminde ve pazarlama kampanyalarında büyük avantaj elde ettiler.</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🛡️ 7. Güven ve Güvenlik Optimizasyonu</h2>
        <p class="text-gray-300 mb-6">2024'te siber güvenlik endişeleri arttıkça, güven unsurları satışın belirleyici faktörü oldu:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>SSL sertifikası ve güvenli ödeme sistemleri</li>
          <li>Müşteri yorumları ve puanlamaların şeffaf gösterimi</li>
          <li>İade ve değişim politikalarının net belirtilmesi</li>
          <li>Canlı müşteri desteği ve iletişim kanallarının açık olması</li>
        </ul>
        
        <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 my-12 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">🚀 Hemen Başlayın!</h3>
          <p class="text-gray-300 mb-6">Bu 7 stratejiyi hemen e-ticaret sitenizde uygulamaya başlayın. İlk 30 günde %100+ satış artışı görmek mümkün!</p>
          <a href="/iletisim" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-full font-semibold text-white transition-all duration-300">
            Ücretsiz E-ticaret Analizi
            <TrendingUp className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div class="border-t border-white/10 pt-8 mt-12">
          <h3 class="text-xl font-semibold text-white mb-4">📈 Sonuç</h3>
          <p class="text-gray-300">2024'te e-ticaret dünyasında başarılı olmak için teknoloji, strateji ve müşteri deneyimini mükemmel bir şekilde harmanlayan bir yaklaşım gerekiyor. Bu 7 stratejiyi doğru şekilde uygulayan markalar, rekabette öne geçerek olağanüstü büyüme oranları elde ediyorlar.</p>
        </div>
      </div>
    `
  },
  "instagram-viral-loop-formulu-50k-takipci": {
    id: 2,
    title: "Instagram'da 1 Gecede 50K Takipçi Kazanan Markaların Uyguladığı 'Viral Loop' Formülü",
    excerpt: "Sosyal medya algoritmasını hackleyen 9 teknik. Bu formülü uygulayan markalar organik olarak günde 10K+ takipçi kazanıyor.",
    category: "Sosyal Medya",
    readTime: "6 dakika",
    publishDate: "12 Aralık 2024",
    author: "Sosyal Medya Ekibi",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=600&fit=crop",
    views: 8923,
    likes: 456,
    tags: ["instagram", "viral", "sosyal medya", "takipçi", "algoritma"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="lead text-xl text-gray-300 mb-8">2024'ün en büyük sosyal medya keşfi: Viral Loop Formülü. Bu yazıda size Instagram algoritmasını nasıl hackleyeceğinizi ve 1 gecede 50K+ takipçi kazanmanın sırlarını açıklayacağım.</p>
        
        <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-red-300 mb-3">🚨 Uyarı: Bu Bilgiler Çok Değerli!</h3>
          <p class="text-gray-300">Bu makaleyi okuduktan sonra Instagram'da rakiplerinizden çok daha hızlı büyüyeceksiniz. Hazır mısınız?</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔥 Viral Loop Nedir?</h2>
        <p class="text-gray-300 mb-6">Viral Loop, kullanıcılarınızın içeriğinizi paylaşmaya mecbur kaldığı psikolojik döngüdür. 2024'te keşfedilen bu formül, Instagram algoritmasının en derin katmanlarına ulaşarak organik reach'i maksimize eder.</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">📱 1. Bait & Switch Tekniği</h2>
        <p class="text-gray-300 mb-6">İlk 3 saniyede izleyiciyi yakalamanın en etkili yolu:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-blue-300 mb-3">❌ Yanlış Yaklaşım</h3>
            <p class="text-gray-300 text-sm">"Merhaba, bugün size marketing ipuçları vereceğim..."</p>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-green-300 mb-3">✅ Doğru Yaklaşım</h3>
            <p class="text-gray-300 text-sm">"Bu 1 hatayı yapmayın, 50K₺ kaybettim!"</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎯 2. FOMO Trigger Points</h2>
        <p class="text-gray-300 mb-6">Korku psikolojisini kullanarak viral etki yaratın:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">Scarcity (Kıtlık):</strong> "Sadece 24 saat kaldı!"</li>
          <li><strong class="text-white">Social Proof:</strong> "10.000 kişi bunu beğendi"</li>
          <li><strong class="text-white">Authority:</strong> "Google eski çalışanından öğrendim"</li>
          <li><strong class="text-white">Urgency:</strong> "Hemen yapmazsanız geç kalırsınız"</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">💎 3. Value Bomb Stratejisi</h2>
        <p class="text-gray-300 mb-6">İzleyicilerinize o kadar değerli bilgi verin ki, paylaşmadan edemedikleri:</p>
        
        <blockquote class="border-l-4 border-purple-500 pl-6 my-8 bg-purple-500/5 py-4">
          <p class="text-purple-300 italic">"Bir post'ta normalde 10 post'ta vereceğiniz bilgiyi verin. İnsanlar bunu screenshot alıp story'de paylaşacak." - Viral Marketing Uzmanı</p>
        </blockquote>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎬 4. Story-First Yaklaşımı</h2>
        <p class="text-gray-300 mb-6">Her contentte bir hikaye anlatın. Instagram algoritması hikaye formatındaki içerikleri daha çok sevir:</p>
        
        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-300 mb-3">🏆 Viral Hikaye Formülü</h3>
          <p class="text-gray-300"><strong>1. Setup:</strong> "2 ay önce işsizdim..."<br/>
          <strong>2. Conflict:</strong> "Sonra bu hatayı yaptım..."<br/>
          <strong>3. Resolution:</strong> "Bu stratejiyi keşfettim ve hayatım değişti!"</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">⏰ 5. Timing Optimizasyonu</h2>
        <p class="text-gray-300 mb-6">2024'te keşfedilen gizli saatler:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-8">
          <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-4 text-center">
            <h3 class="text-lg font-semibold text-red-300 mb-2">🔥 Prime Time</h3>
            <p class="text-gray-300 text-sm">19:00-21:00<br/>En yüksek engagement</p>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <h3 class="text-lg font-semibold text-green-300 mb-2">💡 Discovery</h3>
            <p class="text-gray-300 text-sm">14:00-16:00<br/>Yeni takipçi kazanımı</p>
          </div>
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
            <h3 class="text-lg font-semibold text-blue-300 mb-2">⚡ Boost</h3>
            <p class="text-gray-300 text-sm">22:00-23:00<br/>Viral potansiyel</p>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎭 6. Persona Switching</h2>
        <p class="text-gray-300 mb-6">Farklı personalarla farklı kitlelere ulaşın:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">Expert Persona:</strong> Profesyonel bilgi paylaşımı</li>
          <li><strong class="text-white">Friend Persona:</strong> Samimi ve kişisel içerikler</li>
          <li><strong class="text-white">Mentor Persona:</strong> Motivasyonel ve ilham verici</li>
          <li><strong class="text-white">Comedian Persona:</strong> Eğlenceli ve viral içerikler</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔄 7. Engagement Loop Sistemi</h2>
        <p class="text-gray-300 mb-6">Her post'ta izleyicilerinizi bir sonraki adıma yönlendirin:</p>
        
        <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-purple-300 mb-3">🔗 Loop Örneği</h3>
          <p class="text-gray-300">"Bu post'u beğendiyseniz, story'mde daha detaylı anlatıyorum → Story'de 'DM' yazanlar için özel PDF → DM'de YouTube kanalımın linkini gönderin"</p>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">📊 8. Micro-Influencer Ağı</h2>
        <p class="text-gray-300 mb-6">5K-50K takipçili hesaplarla işbirliği yapın. Mega influencer'lardan daha etkili!</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎯 9. Algorithm Hacking</h2>
        <p class="text-gray-300 mb-6">Instagram algoritmasının 2024 güncellemelerine göre optimize edilmiş taktikler:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>İlk 1 saatte maksimum engagement alın</li>
          <li>Video içeriklere ağırlık verin (%80 video, %20 fotoğraf)</li>
          <li>Reels'te trending sesler kullanın</li>
          <li>Story'lerde interaktif öğeler ekleyin</li>
          <li>Carousel post'larla dwell time'ı artırın</li>
        </ul>
        
        <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8 my-12 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">🚀 30 Günlük Challenge</h3>
          <p class="text-gray-300 mb-6">Bu 9 tekniği 30 gün boyunca uygulayın. Takipçi sayınız minimum %300 artacak!</p>
          <a href="/iletisim" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 rounded-full font-semibold text-white transition-all duration-300">
            Sosyal Medya Stratejisi Al
            <TrendingUp className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div class="border-t border-white/10 pt-8 mt-12">
          <h3 class="text-xl font-semibold text-white mb-4">✨ Bonus İpucu</h3>
          <p class="text-gray-300">Viral Loop Formülünü uyguladığınız ilk hafta, organik reach'inizin %500+ artığını göreceksiniz. Sabırlı olun ve tutarlı kalın!</p>
        </div>
      </div>
    `
  },
  "chatgpt-gizli-komutlar-icerik-uretimi": {
    id: 4,
    title: "ChatGPT ile İçerik Üretenlerin %95'inin Bilmediği 27 Gizli Komut",
    excerpt: "OpenAI'ın resmi belgelerinde bile yazmayan, sadece uzmanların bildiği ChatGPT komutları. Bu prompt'ları kullanarak rekabet avantajı kazanın.",
    category: "AI & Teknoloji",
    readTime: "12 dakika",
    publishDate: "5 Aralık 2024",
    author: "AI Uzmanları",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    views: 22156,
    likes: 1247,
    tags: ["chatgpt", "ai", "içerik", "prompts", "teknoloji"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-green-300 mb-3">🎯 Bu Makale Kimin İçin?</h3>
          <p class="text-gray-300">İçerik üreticileri, copywriter'lar, bloggerlar ve ChatGPT'yi profesyonel olarak kullanan herkes için hazırlandı. Bu komutlar sizin işinizi 10x hızlandıracak!</p>
        </div>
        
        <p class="lead text-xl text-gray-300 mb-8">ChatGPT'nin gizli kalmış 27 komutu ile içerik üretim sürecinizi devrim niteliğinde değiştirin. Bu komutlar OpenAI'ın resmi belgelerinde bile yazmıyor!</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🚀 Deep Research Mode</h2>
        <div class="bg-black/50 rounded-xl p-4 mb-6 border border-gray-700">
          <code class="text-green-400">/research [konu] --depth=expert --sources=academic</code>
        </div>
        <p class="text-gray-300 mb-6">Bu komut ChatGPT'yi akademik araştırma moduna sokar. Normal prompt'lardan %300 daha detaylı sonuçlar alırsınız.</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎭 Persona Creation Engine</h2>
        <div class="bg-black/50 rounded-xl p-4 mb-6 border border-gray-700">
          <code class="text-green-400">/persona create --role="[meslek]" --experience="[yıl]" --style="[yazım_tarzı]"</code>
        </div>
        <p class="text-gray-300 mb-6">Örnekler:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><code class="text-blue-400">/persona create --role="SEO Uzmanı" --experience="10 yıl" --style="gündelik"</code></li>
          <li><code class="text-blue-400">/persona create --role="Copywriter" --experience="5 yıl" --style="ikna_edici"</code></li>
        </ul>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔥 Viral Content Generator</h2>
        <div class="bg-black/50 rounded-xl p-4 mb-6 border border-gray-700">
          <code class="text-green-400">/viral --platform="[platform]" --trend="[trend]" --hook="emotional"</code>
        </div>
        <p class="text-gray-300 mb-6">Bu komut sosyal medya platformlarına özel viral içerik üretir. %85 daha yüksek engagement alırsınız.</p>
      </div>
    `
  },
  "tiktok-viral-video-ozellikleri-10-milyon-izlenme": {
    id: 5,
    title: "TikTok'ta 24 Saatte 10 Milyon İzlenme Alan Videolarının Ortak 8 Özelliği",
    excerpt: "Viral TikTok videolarını analiz ettik. 10 milyon+ izlenme alan tüm videolarda bulunan 8 ortak özellik. Artık sizin de viral olma sıranız!",
    category: "İçerik Pazarlama",
    readTime: "7 dakika",
    publishDate: "2 Aralık 2024",
    author: "Video Uzmanları",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&h=600&fit=crop",
    views: 18903,
    likes: 892,
    tags: ["tiktok", "viral", "video", "izlenme", "algoritma"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="lead text-xl text-gray-300 mb-8">24 saatte 10 milyon izlenme almak imkansız mı? Hayır! 1000+ viral TikTok videosunu analiz ettik ve şaşırtıcı sonuçlar çıktı. İşte viral videolarının sırrı...</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">⚡ Özellik #1: İlk 3 Saniye Kuralı</h2>
        <p class="text-gray-300 mb-6">Viral videolar izleyiciyi ilk 3 saniyede yakalıyor. Bu sürede şunlardan birini yapmalısınız:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>Şok edici bir soru sorun</li>
          <li>Beklenmedik bir hareket yapın</li>
          <li>Güçlü bir iddia ortaya koyun</li>
          <li>Görsel bir tezat yaratın</li>
        </ul>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎵 Özellik #2: Trending Audio Magic</h2>
        <p class="text-gray-300 mb-6">%95'i trending audiolları kullanıyor. Ancak sadece kullanmak yetmiyor - timing kritik!</p>
      </div>
    `
  },
  "influencer-kazanc-gizli-platformlar": {
    id: 6,
    title: "Influencer'ların Gizlediği Gerçek: Günlük 100K₺ Kazanç İçin Kullandıkları 12 Platform",
    excerpt: "Büyük influencer'ların Instagram dışında kullandığı gizli para kazanma platformları. Bu listeleri ilk kez paylaşıyoruz.",
    category: "Influencer Marketing",
    readTime: "9 dakika",
    publishDate: "28 Kasım 2024",
    author: "Influencer Uzmanları",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    views: 31247,
    likes: 1856,
    tags: ["influencer", "kazanç", "platform", "creator", "marketing"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <div class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-yellow-300 mb-3">💰 Gerçek Kazanç Verileri</h3>
          <p class="text-gray-300">Bu makalede paylaştığımız tüm platformlar gerçek kazanç verileriyle destekleniyor. Screenshot'lar ve ödeme kanıtları mevcut!</p>
        </div>
        
        <p class="lead text-xl text-gray-300 mb-8">Türkiye'nin en büyük influencer'ları günlük 100K₺+ kazanıyor. Instagram sadece görünen kısmı - asıl para bu gizli platformlarda...</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏆 Platform #1: Creator Economy Networks</h2>
        <p class="text-gray-300 mb-6">Sadece seçkin creator'lara açık özel networkler. Başvuru için minimum 100K takipçi gerekiyor.</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">💎 Platform #2: Brand Partnership Pools</h2>
        <p class="text-gray-300 mb-6">Markalar ve influencer'ların buluştuğu kapalı havuz sistemi. Ortalama işbirliği ücreti: 25-150K₺</p>
      </div>
    `
  },
  "google-2024-gizli-seo-guncellemesi": {
    id: 3,
    title: "Google'ın 2024 Gizli SEO Güncellemesi: %90 Site Trafiğini Kaybettiren Değişiklik",
    excerpt: "Arama dev Google'ın kimsenin fark etmediği algoritma değişikliği. Siteler bir gecede trafiklerinin %90'ını kaybetti. İşte koruyucu stratejiler.",
    category: "SEO",
    readTime: "10 dakika",
    publishDate: "8 Aralık 2024",
    author: "SEO Ekibi",
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=1200&h=600&fit=crop",
    views: 15634,
    likes: 789,
    tags: ["seo", "google", "algoritma", "trafik", "güncelleme"],
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <div class="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 my-8">
          <h3 class="text-xl font-semibold text-red-300 mb-3">🚨 ACİL UYARI!</h3>
          <p class="text-gray-300">Google'ın Kasım 2024'te yaptığı gizli güncelleme milyonlarca web sitesini etkiledi. Bu makaleyi okumadan önce sitenizin trafik istatistiklerini kontrol edin!</p>
        </div>
        
        <p class="lead text-xl text-gray-300 mb-8">Google'ın Kasım 2024'te sessizce yaptığı algoritma güncellemesi SEO dünyasını sarstı. Binlerce site trafiklerinin büyük bölümünü kaybetti. Bu gizli güncellemenin detaylarını ve korunma yollarını açıklıyoruz.</p>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔍 Güncellemenin Detayları</h2>
        <p class="text-gray-300 mb-6">Helpful Content Update 3.0 olarak adlandırılan bu güncelleme, Google'ın yapay zeka destekli algoritmasının en kapsamlı revizyonu oldu. İşte ana değişiklikler:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-red-300 mb-3">❌ Cezalandırılan Siteler</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>• AI ile üretilmiş düşük kalite içerik</li>
              <li>• Keyword stuffing yapan sayfalar</li>
              <li>• Duplicate content sorunu olan siteler</li>
              <li>• Kullanıcı deneyimi kötü olan sayfalar</li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-green-300 mb-3">✅ Ödüllendirilen Siteler</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>• E-A-T puanı yüksek içerikler</li>
              <li>• Orijinal araştırma ve veriler</li>
              <li>• Kullanıcı sorularını çözen sayfalar</li>
              <li>• Fast loading ve mobile-friendly</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">📊 Etkilenen Sektörler</h2>
        <p class="text-gray-300 mb-6">Güncelleme tüm sektörleri etkilemedi. İşte en çok zarar gören alanlar:</p>
        
        <div class="space-y-4 my-8">
          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-4">
            <div class="flex justify-between items-center">
              <span class="text-white font-semibold">Affiliate Marketing Siteleri</span>
              <span class="text-red-400 font-bold">-85% trafik</span>
            </div>
          </div>
          <div class="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-4">
            <div class="flex justify-between items-center">
              <span class="text-white font-semibold">Listicle ve "En İyi" Siteleri</span>
              <span class="text-orange-400 font-bold">-70% trafik</span>
            </div>
          </div>
          <div class="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-500/20 rounded-xl p-4">
            <div class="flex justify-between items-center">
              <span class="text-white font-semibold">AI İçerik Çiftlikleri</span>
              <span class="text-yellow-400 font-bold">-95% trafik</span>
            </div>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">🛡️ Korunma Stratejileri</h2>
        <p class="text-gray-300 mb-6">Bu güncellemeden etkilenmemek için hemen uygulamanız gereken 8 kritik strateji:</p>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">1. E-A-T Optimizasyonu</h3>
        <p class="text-gray-300 mb-4">Expertise, Authoritativeness, Trustworthiness - Google'ın en önemsediği faktörler:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">Author Bio:</strong> Her makalede uzman yazar bilgisi ekleyin</li>
          <li><strong class="text-white">Kaynak Belirtme:</strong> İstatistikleri güvenilir kaynaklardan alın</li>
          <li><strong class="text-white">SSL ve Güvenlik:</strong> Site güvenliğini maksimize edin</li>
          <li><strong class="text-white">About Us:</strong> Şirket ve uzman bilgilerini detaylandırın</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">2. Content Quality Revolution</h3>
        <p class="text-gray-300 mb-4">2024'te içerik kalitesi her şeyden önemli hale geldi:</p>
        
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 my-8">
          <h4 class="text-lg font-semibold text-blue-300 mb-3">💡 Kaliteli İçerik Formülü</h4>
          <p class="text-gray-300"><strong>Araştırma (40%)</strong> + <strong>Orijinal Veri (30%)</strong> + <strong>Uzman Görüşü (20%)</strong> + <strong>Kullanıcı Deneyimi (10%)</strong> = Viral İçerik</p>
        </div>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">3. Technical SEO 2.0</h3>
        <p class="text-gray-300 mb-4">Teknik SEO artık sadece hız değil, kullanıcı deneyimi odaklı:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="space-y-3">
            <h4 class="text-lg font-semibold text-white">Core Web Vitals 2024</h4>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>• LCP: &lt;1.2 saniye</li>
              <li>• FID: &lt;50 milisaniye</li>
              <li>• CLS: &lt;0.05</li>
              <li>• INP: &lt;100 milisaniye (YENİ!)</li>
            </ul>
          </div>
          <div class="space-y-3">
            <h4 class="text-lg font-semibold text-white">UX Metrics</h4>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>• Bounce Rate: &lt;%40</li>
              <li>• Dwell Time: &gt;2 dakika</li>
              <li>• Page Views/Session: &gt;3</li>
              <li>• Mobile Usability: 100/100</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">4. AI-Proof Content Strategy</h3>
        <p class="text-gray-300 mb-4">AI dedektörlerine yakalanmayan içerik üretme teknikleri:</p>
        
        <blockquote class="border-l-4 border-green-500 pl-6 my-8 bg-green-500/5 py-4">
          <p class="text-green-300 italic">"Google artık AI ile yazılmış içerikleri %95 doğrulukla tespit edebiliyor. Sadece insan dokunuşu olan içerikler öne çıkıyor." - Google AI Araştırmacısı</p>
        </blockquote>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">5. Schema Markup Evolution</h3>
        <p class="text-gray-300 mb-4">2024'te Google'ın öncelik verdiği yeni schema türleri:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">HowTo Schema:</strong> Adım adım rehberler için</li>
          <li><strong class="text-white">FAQ Schema:</strong> Sık sorulan sorular</li>
          <li><strong class="text-white">Review Schema:</strong> Müşteri yorumları</li>
          <li><strong class="text-white">Event Schema:</strong> Etkinlik ve webinarlar</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">6. User Intent Revolution</h3>
        <p class="text-gray-300 mb-4">Google artık kullanıcı niyetini daha derinlemesine analiz ediyor:</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
            <h4 class="text-lg font-semibold text-blue-300 mb-2">🔍 Informational</h4>
            <p class="text-gray-300 text-sm">Kapsamlı rehberler<br/>ve eğitici içerikler</p>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 text-center">
            <h4 class="text-lg font-semibold text-green-300 mb-2">🎯 Transactional</h4>
            <p class="text-gray-300 text-sm">Satın alma odaklı<br/>landing sayfalar</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
            <h4 class="text-lg font-semibold text-purple-300 mb-2">📍 Local</h4>
            <p class="text-gray-300 text-sm">Yerel arama<br/>optimizasyonu</p>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">7. Link Building 3.0</h3>
        <p class="text-gray-300 mb-4">Eski link building teknikleri artık işe yaramıyor. Yeni yaklaşım:</p>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><strong class="text-white">Digital PR:</strong> Medya ilişkileri ve haber değeri olan içerikler</li>
          <li><strong class="text-white">Resource Page Outreach:</strong> Kaynak sayfalarına dahil olma</li>
          <li><strong class="text-white">Broken Link Building:</strong> Kırık linkleri tespit etme</li>
          <li><strong class="text-white">Unlinked Mentions:</strong> Marka bahislerini linke çevirme</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-white mt-8 mb-4">8. Analytics ve Monitoring</h3>
        <p class="text-gray-300 mb-4">Güncellemeyi takip etmek için izlemeniz gereken metrикler:</p>
        
        <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 my-8">
          <h4 class="text-lg font-semibold text-yellow-300 mb-3">📊 Kritik KPI'lar</h4>
          <div class="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
            <div>
              <p><strong>Traffic Metrics:</strong></p>
              <ul class="list-disc list-inside ml-4">
                <li>Organic traffic trends</li>
                <li>Ranking positions</li>
                <li>Click-through rates</li>
              </ul>
            </div>
            <div>
              <p><strong>Quality Metrics:</strong></p>
              <ul class="list-disc list-inside ml-4">
                <li>User engagement signals</li>
                <li>Page experience scores</li>
                <li>Content quality metrics</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8 my-12 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">🚨 Acil Eylem Planı</h3>
          <p class="text-gray-300 mb-6">Siteniz güncellemedan etkilenmişse, bu 7 günlük recovery planını hemen uygulayın!</p>
          <a href="/iletisim" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300">
            Acil SEO Analizi
            <TrendingUp className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div class="border-t border-white/10 pt-8 mt-12">
          <h3 class="text-xl font-semibold text-white mb-4">🔮 Gelecek Öngörüleri</h3>
          <p class="text-gray-300">Google'ın 2025 roadmap'ine göre, AI entegrasyonu daha da derinleşecek. Şimdiden hazırlık yapan siteler büyük avantaj elde edecek. Bu güncelleme sadece başlangıç - asıl değişim henüz gelecek!</p>
        </div>
      </div>
    `
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog yazısı bulunamadı</h1>
          <a href="/blog" className="text-primary-400 hover:text-primary-300">Blog sayfasına dön</a>
        </div>
        <Footer />
      </main>
    );
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

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
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-sm text-gray-400 mb-8"
          >
            <a href="/" className="hover:text-white transition-colors">Ana Sayfa</a>
            <ChevronRight size={16} />
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <ChevronRight size={16} />
            <span className="text-gray-300">{post.category}</span>
          </motion.nav>

          {/* Back Button */}
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Blog'a Geri Dön
          </motion.a>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  post.category === 'E-ticaret' ? 'bg-blue-500/20 text-blue-300' :
                  post.category === 'Sosyal Medya' ? 'bg-pink-500/20 text-pink-300' :
                  post.category === 'SEO' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {post.category}
                </span>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  🔥 Viral
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6 leading-tight">
                <span className="gradient-text">{post.title}</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>

            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{post.views.toLocaleString()} görüntüleme</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden mb-12"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:flex-1">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Tag size={20} />
                    Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="sticky top-32 space-y-6"
                >
                  {/* Social Actions */}
                  <div className="glass rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Bu yazıyı beğendin mi?</h3>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLike}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                          liked 
                            ? 'bg-red-500 text-white' 
                            : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <ThumbsUp size={16} />
                        <span>{liked ? post.likes + 1 : post.likes}</span>
                      </motion.button>
                      
                      <div className="text-sm text-gray-400">
                        <Eye size={16} className="inline mr-1" />
                        {post.views.toLocaleString()}
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-3">Paylaş</h4>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('twitter')}
                        className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors"
                      >
                        <Twitter size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('facebook')}
                        className="p-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors"
                      >
                        <Facebook size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('linkedin')}
                        className="p-2 bg-blue-700/20 border border-blue-700/30 rounded-lg text-blue-500 hover:bg-blue-700/30 transition-colors"
                      >
                        <Linkedin size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare('copy')}
                        className="p-2 bg-gray-500/20 border border-gray-500/30 rounded-lg text-gray-300 hover:bg-gray-500/30 transition-colors"
                      >
                        <Copy size={16} />
                      </motion.button>
                    </div>
                    
                    {copied && (
                      <p className="text-green-400 text-sm mt-2">Link kopyalandı! 📋</p>
                    )}
                  </div>

                  {/* Table of Contents */}
                  <div className="glass rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} />
                      İçindekiler
                    </h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#" className="block text-gray-300 hover:text-white transition-colors py-1">
                        1. Mikro-Moment Marketing
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white transition-colors py-1">
                        2. AI Destekli Kişiselleştirme
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white transition-colors py-1">
                        3. Sosyal Ticaret Stratejileri
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white transition-colors py-1">
                        4. Hızlı Teslimat İnovasyonları
                      </a>
                    </nav>
                  </div>

                  {/* CTA */}
                  <div className="glass rounded-2xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3">🚀 Hemen Başlayın!</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Bu stratejileri sitenizde uygulamak için uzman desteği alın.
                    </p>
                    <motion.a
                      href="/iletisim"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 rounded-full font-semibold text-white transition-all duration-300"
                    >
                      Ücretsiz Konsültasyon
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
