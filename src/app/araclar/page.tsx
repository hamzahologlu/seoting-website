'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Target, 
  Gauge,
  TrendingUp, 
  Globe, 
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Eye,
  Settings,
  Calculator,
  Monitor,
  Activity,
  PieChart,
  FileText,
  Smartphone,
  Share2,
  Mail
} from 'lucide-react';

const toolCategories = [
  {
    title: "SEO Araçları",
    color: "from-green-500 to-teal-500",
    tools: [
      {
        icon: BarChart3,
        name: "SEO Sihirbazı",
        description: "Sihirli dokunuşlarla SEO performansınızı büyüleyin! Sıralama ve hız analizi birleştiren kapsamlı SEO sihirbazı",
        features: ["Sihirli Analiz", "Anahtar Kelime Takibi", "Performans Metrikleri", "Rakip Analizi", "Akıllı Öneriler"],
        href: "/seo-sihirbazi",
        badge: "YENİ!",
        status: "new"
      },
      {
        icon: Target,
        name: "Google Sıra Bulucu",
        description: "Web sitenizin Google arama sonuçlarındaki pozisyonunu gerçek zamanlı kontrol edin",
        features: ["Gerçek Google API", "Mobil & Masaüstü Analiz", "Ülke Bazlı Arama", "Anlık Sonuçlar", "Geçmiş Takibi"],
        href: "/google-sira-bulucu",
        badge: "API Aktif",
        status: "active"
      },
      {
        icon: Search,
        name: "Anahtar Kelime Analizi",
        description: "DataForSEO API ile profesyonel anahtar kelime araştırması ve rekabet analizi yapın",
        features: ["Gerçek Arama Hacmi", "Rekabet Analizi", "CPC Verileri", "Trend Takibi", "İlgili Kelimeler"],
        href: "/anahtar-kelime-analizi",
        badge: "Canlı Veriler",
        status: "active"
      },
      {
        icon: Eye,
        name: "SERP Analiz Aracı",
        description: "Google arama sonuçlarının özelliklerini detaylı analiz edin. Featured Snippets, Local Pack, People Also Ask ve daha fazlasını keşfedin",
        features: ["Featured Snippets", "Local Pack", "People Also Ask", "Görsel Sonuçlar", "Video Sonuçlar"],
        href: "/serp-analiz-araci",
        badge: "YENİ!",
        status: "new"
      },
      {
        icon: TrendingUp,
        name: "Anahtar Kelime İzleme",
        description: "Anahtar kelimelerinizin Google sıralamalarını otomatik takip edin. Sıralama değişimlerini anında bildirim alın ve SEO stratejinizi optimize edin",
        features: ["Otomatik Takip", "Akıllı Bildirimler", "Trend Analizi", "Hedef Belirleme", "Detaylı Raporlar"],
        href: "/anahtar-kelime-izleme",
        badge: "YENİ!",
        status: "new"
      },
      {
        icon: BarChart3,
        name: "SEO Skoru Hesaplama",
        description: "Web sitenizin teknik SEO performansını detaylı olarak analiz edin",
        features: ["Teknik SEO Analizi", "On-Page Optimizasyon", "Meta Tag Kontrolü", "Sayfa Hızı", "Mobil Uyumluluk"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      }
    ]
  },
  {
    title: "Performans Araçları",
    color: "from-blue-500 to-indigo-500",
    tools: [
      {
        icon: Gauge,
        name: "Sayfa Hızı Testi",
        description: "Google PageSpeed Insights ile web sitenizin yükleme performansını analiz edin",
        features: ["Core Web Vitals", "Optimizasyon Önerileri", "Mobil & Masaüstü Test", "Detaylı Rapor", "Gerçek Kullanıcı Verileri"],
        href: "/sayfa-hizi-testi",
        badge: "PageSpeed API",
        status: "active"
      },
      {
        icon: Layers,
        name: "Toplu Site Analizi",
        description: "Birden fazla web sitesini aynı anda analiz edin. Performans, hız ve optimizasyon fırsatlarını toplu olarak değerlendirin",
        features: ["Toplu Analiz", "Site Karşılaştırması", "Core Web Vitals", "Optimizasyon Fırsatları", "Detaylı Raporlar"],
        href: "/toplu-site-analizi",
        badge: "YENİ!",
        status: "new"
      },
      {
        icon: Activity,
        name: "Uptime Monitör",
        description: "Web sitenizin erişilebilirlik durumunu 7/24 izleyin ve kesinti bildirimlerini alın",
        features: ["7/24 İzleme", "Kesinti Bildirimi", "Performans Grafiği", "SSL Kontrolü", "Email Uyarıları"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      },
      {
        icon: Monitor,
        name: "Website Analiz",
        description: "Web sitenizin genel sağlığını kontrol edin ve iyileştirme önerilerini alın",
        features: ["Genel Sağlık Skoru", "Güvenlik Kontrolü", "SEO Uyumluluğu", "Performans Analizi", "Kullanılabilirlik Testi"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      }
    ]
  },
  {
    title: "Pazarlama Araçları",
    color: "from-purple-500 to-pink-500",
    tools: [
      {
        icon: Calculator,
        name: "ROI Hesaplayıcı",
        description: "Dijital pazarlama yatırımlarınızın getiri oranını hesaplayın ve optimize edin",
        features: ["ROI Hesaplama", "Maliyet Analizi", "Kar Marjı", "Yatırım Tavsiyesi", "Grafik Raporlar"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      },
      {
        icon: PieChart,
        name: "Sosyal Medya Analiz",
        description: "Sosyal medya hesaplarınızın performansını analiz edin ve engagement oranlarını takip edin",
        features: ["Engagement Analizi", "Follower Büyümesi", "Post Performansı", "Hashtag Analizi", "Rakip Karşılaştırma"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      },
      {
        icon: Mail,
        name: "Email Kampanya Analiz",
        description: "Email pazarlama kampanyalarınızın başarısını ölçün ve optimize edin",
        features: ["Açılma Oranları", "Tıklama Analizi", "Bounce Rate", "Conversion Tracking", "A/B Test Sonuçları"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      }
    ]
  },
  {
    title: "İçerik Araçları",
    color: "from-orange-500 to-red-500",
    tools: [
      {
        icon: FileText,
        name: "İçerik Analiz",
        description: "Web sitenizin içerik kalitesini analiz edin ve SEO uyumluluğunu kontrol edin",
        features: ["İçerik Kalitesi", "Anahtar Kelime Yoğunluğu", "Okuma Kolaylığı", "Duplicate İçerik", "Meta Açıklamalar"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      },
      {
        icon: Share2,
        name: "Sosyal Paylaşım Takip",
        description: "İçeriklerinizin sosyal medyada ne kadar paylaşıldığını takip edin",
        features: ["Paylaşım Sayıları", "Platform Analizi", "Viral İçerik Tespiti", "Trend Analizi", "Engagement Metrikleri"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      },
      {
        icon: Eye,
        name: "Heatmap Analiz",
        description: "Kullanıcıların web sitenizde nasıl etkileşim kurduğunu görsel olarak analiz edin",
        features: ["Click Heatmap", "Scroll Analizi", "Mouse Movement", "Form Analizi", "Kullanıcı Davranışı"],
        href: "#",
        badge: "Yakında",
        status: "coming-soon"
      }
    ]
  }
];

export default function ToolsPage() {
  const getStatusBadge = (status: string, badge: string) => {
    if (status === 'active') {
      return (
        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
          {badge}
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full border border-yellow-500/30">
          {badge}
        </span>
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm">
                🛠️ Tüm Dijital Araçlar
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Profesyonel SEO
              </span>
              <br />
              <span className="text-white">Araç Merkezi</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Web sitenizin performansını artırmak için gereken tüm profesyonel araçlar bir arada. 
              SEO analizinden performans testlerine, pazarlama metriklerinden içerik optimizasyonuna kadar.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-sm text-gray-400">Aktif Araç</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">9</div>
                <div className="text-sm text-gray-400">Toplam Araç</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">API</div>
                <div className="text-sm text-gray-400">Gerçek Veriler</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">Free</div>
                <div className="text-sm text-gray-400">Ücretsiz</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Categories */}
      {toolCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h2>
              <div className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={toolIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: toolIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ 
                      y: tool.status === 'active' ? -10 : 0, 
                      boxShadow: tool.status === 'active' ? "0 25px 50px rgba(0,0,0,0.3)" : "none" 
                    }}
                    className={`h-full ${tool.status === 'active' ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className={`glass rounded-3xl p-8 h-full border border-white/10 transition-all duration-500 relative overflow-hidden ${
                      tool.status === 'active' ? 'hover:border-white/20' : 'opacity-75'
                    }`}>
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 ${
                        tool.status === 'active' ? 'group-hover:opacity-10' : ''
                      } transition-opacity duration-500`} />
                      
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-20 backdrop-blur-sm border border-white/10`}>
                          <tool.icon className="w-8 h-8 text-white" />
                        </div>
                        {getStatusBadge(tool.status, tool.badge)}
                      </div>

                      <h3 className={`text-2xl font-bold text-white mb-4 transition-all duration-300 ${
                        tool.status === 'active' ? 'group-hover:gradient-text' : ''
                      }`}>
                        {tool.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                              tool.status === 'active' ? 'text-green-400' : 'text-gray-500'
                            }`} />
                            <span className={`text-sm ${
                              tool.status === 'active' ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {tool.status === 'active' ? (
                        <motion.a
                          href={tool.href}
                          className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <span>Şimdi Kullan</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.a>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-500 font-semibold">
                          <Clock className="w-5 h-5" />
                          <span>Yakında Geliyor</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden SEOTING Araçları?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesyonel düzeyde gerçek veriler ve gelişmiş analiz yetenekleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Gerçek API Verileri",
                description: "Google, DataForSEO gibi güvenilir kaynaklardan anlık veriler"
              },
              {
                icon: Globe,
                title: "Kapsamlı Analiz",
                description: "SEO'dan performansa, pazarlamadan içeriğe kadar tüm alanları kapsayan araçlar"
              },
              {
                icon: Settings,
                title: "Kolay Kullanım",
                description: "Teknik bilgi gerektirmeyen, kullanıcı dostu arayüzler"
              },
              {
                icon: BarChart3,
                title: "Detaylı Raporlar",
                description: "Actionable insights ve somut iyileştirme önerileri"
              },
              {
                icon: Smartphone,
                title: "Mobil Uyumlu",
                description: "Tüm cihazlarda sorunsuz çalışan responsive tasarım"
              },
              {
                icon: TrendingUp,
                title: "Sürekli Güncelleme",
                description: "En son algoritma değişikliklerine uygun güncel araçlar"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Araçlarımızla SEO Başarınızı Artırın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Profesyonel SEO araçlarımızla web sitenizin performansını optimize edin, 
              rekabette öne geçin ve organik trafiğinizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/google-sira-bulucu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                Google Sıra Bulucu'yu Dene
              </motion.a>
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 gap-2 border border-white/20"
              >
                <Mail className="w-5 h-5" />
                Özel Araç Talebi
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
