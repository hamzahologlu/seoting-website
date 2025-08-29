'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Award,
  Zap,
  Globe,
  Camera,
  Video,
  MessageCircle,
  Search,
  Star,
  Crown,
  Phone,
  Mail
} from 'lucide-react';

const packageFeatures = [
  {
    icon: Search,
    title: "Kapsamlı SEO & SEM",
    description: "Organik ve ücretli aramalar için tam optimizasyon",
    details: ["Advanced SEO", "Google Ads yönetimi", "Bing Ads", "Local SEO", "E-ticaret SEO"]
  },
  {
    icon: MessageCircle,
    title: "4 Sosyal Medya Platformu",
    description: "Instagram, Facebook, LinkedIn ve Twitter profesyonel yönetimi",
    details: ["İçerik stratejisi", "Community management", "Influencer campaigns", "Paid social ads"]
  },
  {
    icon: Camera,
    title: "Aylık 40 Gönderi + 10 Ürün Çekimi",
    description: "Yüksek kaliteli içerik üretimi ve görsel çözümler",
    details: ["Profesyonel fotoğraf", "Video içerik", "Grafik tasarım", "Product photography"]
  },
  {
    icon: BarChart3,
    title: "Detaylı Analiz Raporları",
    description: "Haftalık performans takibi ve optimizasyon önerileri",
    details: ["Advanced analytics", "Conversion tracking", "ROI analysis", "Competitor monitoring"]
  },
  {
    icon: Users,
    title: "Telefon + E-posta Desteği",
    description: "Öncelikli destek ve danışmanlık hizmeti",
    details: ["24 saat yanıt", "Telefon danışmanlık", "Acil müdahale", "Strateji toplantıları"]
  },
  {
    icon: TrendingUp,
    title: "Aylık Strateji Toplantısı",
    description: "Performans değerlendirme ve gelecek planlaması",
    details: ["Performance review", "Strategy optimization", "Goal setting", "Market analysis"]
  }
];

const advancedFeatures = [
  {
    icon: Target,
    title: "A/B Testing & Optimizasyon",
    description: "Sürekli test ve optimizasyon ile maksimum verimlilik"
  },
  {
    icon: Globe,
    title: "Multi-Channel Marketing",
    description: "Tüm dijital kanalları koordineli yönetim"
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Reels, Stories, YouTube içerik üretimi"
  },
  {
    icon: Award,
    title: "Brand Reputation Management",
    description: "Marka itibarı yönetimi ve kriz iletişimi"
  }
];

const results = [
  {
    metric: "Ortalama Traffic Artışı",
    value: "300%",
    period: "6 ayda",
    color: "text-blue-400"
  },
  {
    metric: "Lead Generation",
    value: "250%",
    period: "3 ayda",
    color: "text-green-400"
  },
  {
    metric: "ROI İyileştirmesi",
    value: "400%",
    period: "12 ayda",
    color: "text-purple-400"
  },
  {
    metric: "Brand Awareness",
    value: "500%",
    period: "6 ayda",
    color: "text-orange-400"
  }
];

const caseStudies = [
  {
    company: "E-ticaret Platformu",
    industry: "Online Retail",
    challenge: "Düşük conversion rate ve yüksek CAC",
    solution: "Multi-channel optimization + advanced targeting",
    results: [
      "450% ROI artışı",
      "65% conversion rate iyileştirmesi",
      "40% customer acquisition cost azalması"
    ],
    quote: "Büyüme paketi sayesinde şirketimiz bir sonraki seviyeye çıktı.",
    timeline: "6 ay"
  },
  {
    company: "SaaS Startup",
    industry: "Software",
    challenge: "B2B lead generation sorunu",
    solution: "LinkedIn + Google Ads + Content Marketing",
    results: [
      "1000+ qualified leads",
      "300% MRR artışı",
      "Market leader pozisyonu"
    ],
    quote: "Beklenenden çok daha hızlı büyüme elde ettik.",
    timeline: "8 ay"
  },
  {
    company: "Manufacturing Company",
    industry: "B2B Manufacturing",
    challenge: "Uluslararası pazar penetrasyonu",
    solution: "International SEO + Multi-language campaigns",
    results: [
      "15 yeni ülkede varlık",
      "500% export artışı",
      "Global brand recognition"
    ],
    quote: "Uluslararası pazarlarda güçlü bir marka haline geldik.",
    timeline: "12 ay"
  }
];

const comparisonTable = [
  {
    feature: "Sosyal Medya Platformu",
    startup: "2 Platform",
    growth: "4 Platform",
    enterprise: "Sınırsız"
  },
  {
    feature: "Aylık Gönderi",
    startup: "20 Gönderi",
    growth: "40 Gönderi",
    enterprise: "Sınırsız"
  },
  {
    feature: "Ürün Çekimi",
    startup: "Dahil Değil",
    growth: "10 Ürün/Ay",
    enterprise: "Sınırsız"
  },
  {
    feature: "Google Ads Yönetimi",
    startup: "Dahil Değil",
    growth: "✓ Dahil",
    enterprise: "✓ Advanced"
  },
  {
    feature: "Telefon Desteği",
    startup: "Dahil Değil",
    growth: "✓ Dahil",
    enterprise: "✓ 24/7"
  },
  {
    feature: "Strateji Toplantısı",
    startup: "Aylık (Online)",
    growth: "Aylık (Hibrit)",
    enterprise: "Haftalık"
  }
];

const faqs = [
  {
    question: "Büyüme paketi startup paketinden nasıl farklı?",
    answer: "Büyüme paketi daha kapsamlı hizmetler içerir: 4 sosyal medya platformu, Google Ads yönetimi, ürün çekimi, telefon desteği ve advanced analytics. Büyüyen işletmeler için tasarlanmıştır."
  },
  {
    question: "Google Ads bütçesi pakete dahil mi?",
    answer: "Hayır, Google Ads reklam bütçesi ayrıdır. Biz kampanya kurulumu, optimizasyonu ve yönetimi yapıyoruz. Reklam bütçesini siz belirler ve direkt Google'a ödersiniz."
  },
  {
    question: "Ürün çekimi nasıl yapılıyor?",
    answer: "Ürünlerinizi stüdyomuzda veya lokasyonunuzda çekiyoruz. Aylık 10 ürün çekimi dahildir, fazlası için ek ücret alınır."
  },
  {
    question: "Minimum sözleşme süresi var mı?",
    answer: "Evet, büyüme paketi için 6 aylık minimum sözleşme süresi bulunmaktadır. Bu süre sonunda istediğiniz zaman çıkabilirsiniz."
  }
];

export default function BuyumePaketiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm mb-6">
              <Crown size={16} className="mr-2" />
              En Popüler Paket
            </div>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Büyüme</span><br />
              <span className="text-white">Paketi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Büyüyen işletmeler için tasarlanmış kapsamlı dijital pazarlama çözümü. 
              Tüm kanalları optimize edin, rekabette öne geçin.
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="inline-flex items-baseline">
                <span className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  45.000₺
                </span>
                <span className="text-gray-400 ml-2 text-xl">/aylık</span>
              </div>
              <div className="text-gray-400 mt-2">6 aylık minimum süre</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Paketi Seç
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Detayları İncele
              </motion.a>
            </div>
          </motion.div>

          {/* Results Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className={`text-3xl font-bold mb-1 ${result.color}`}>
                  {result.value}
                </div>
                <div className="text-white text-sm font-medium mb-1">
                  {result.metric}
                </div>
                <div className="text-gray-400 text-xs">
                  {result.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Kapsamlı Dijital Çözümler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Büyüme paketi ile işletmenizin tüm dijital ihtiyaçlarını karşılıyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-purple-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">İleri Seviye Özellikler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Büyüme paketinin size sunduğu rekabetçi avantajlar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Paket Karşılaştırması</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Büyüme paketinin diğer paketlerle karşılaştırması.
            </p>
          </motion.div>

          <div className="glass rounded-3xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 text-white font-semibold">Özellik</th>
                  <th className="text-center py-4 text-gray-400">Startup</th>
                  <th className="text-center py-4 text-purple-400 font-semibold">Büyüme ⭐</th>
                  <th className="text-center py-4 text-gray-400">Kurumsal</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className="border-b border-gray-700/50">
                    <td className="py-4 text-gray-300">{row.feature}</td>
                    <td className="py-4 text-center text-gray-400 text-sm">{row.startup}</td>
                    <td className="py-4 text-center text-purple-400 font-semibold">{row.growth}</td>
                    <td className="py-4 text-center text-gray-400 text-sm">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Büyüme Paketi Başarı Hikayeleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bu paketle büyüyen müşterilerimizin gerçek sonuçları.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                      <span className="ml-3 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {study.industry}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Zorluk:</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Çözüm:</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Sonuçlar:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-green-400">
                          <Star size={16} className="mr-3 flex-shrink-0" />
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-sm text-gray-400">
                      Süre: {study.timeline}
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <blockquote className="text-xl italic text-gray-300 mb-4">
                      "{study.quote}"
                    </blockquote>
                    <div className="text-purple-400 font-semibold">
                      - {study.company} CEO
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Büyüme paketi hakkında merak edilenler.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <CheckCircle2 size={20} className="text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                İşletmenizi Bir Sonraki Seviyeye Taşıyın
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Büyüme paketi ile rekabette öne geçin ve sürdürülebilir büyüme elde edin.
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                    45.000₺
                  </div>
                  <div className="text-gray-400">aylık / 6 ay minimum</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Büyüme Paketini Seç
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
                <motion.a
                  href="/hizmetlerimiz"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Diğer Paketleri Karşılaştır
                </motion.a>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +90 (544) 251 90 82
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@seoting.com
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
