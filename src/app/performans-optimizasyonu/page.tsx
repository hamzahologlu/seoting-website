'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  BarChart3, 
  MousePointer, 
  TrendingUp, 
  TestTube, 
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Trophy
} from 'lucide-react';

const features = [
  {
    icon: MousePointer,
    title: "Conversion Optimization",
    description: "Ziyaretçilerin müşteriye dönüş oranını maksimize ediyoruz"
  },
  {
    icon: Target,
    title: "Landing Page Optimizasyonu",
    description: "Yüksek dönüşüm sağlayan etkili açılış sayfaları tasarlıyoruz"
  },
  {
    icon: TestTube,
    title: "A/B Testing",
    description: "Farklı versiyonları test ederek en iyi performansı buluyoruz"
  },
  {
    icon: BarChart3,
    title: "UX İyileştirme",
    description: "Kullanıcı deneyimini analiz ederek sürekli iyileştirme sağlıyoruz"
  },
  {
    icon: TrendingUp,
    title: "Funnel Optimizasyonu",
    description: "Satış hunisindeki tıkanıklıkları tespit edip çözüyoruz"
  },
  {
    icon: Zap,
    title: "Site Hızı Optimizasyonu",
    description: "Sayfa yükleme hızını artırarak kullanıcı deneyimini iyileştiriyoruz"
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "ROI Artışı",
    description: "Optimizasyon ile yatırım getirinizi %200'e kadar artırın"
  },
  {
    icon: Users,
    title: "Kullanıcı Deneyimi",
    description: "İyileştirilmiş UX ile müşteri memnuniyetini artırın"
  },
  {
    icon: Clock,
    title: "Hızlı Sonuçlar",
    description: "Optimizasyon çalışmaları kısa sürede sonuç verir"
  },
  {
    icon: Trophy,
    title: "Rekabet Avantajı",
    description: "Optimize edilmiş performansla rakiplerinizi geride bırakın"
  }
];

const optimizationPackages = [
  {
    name: "Temel Optimizasyon",
    price: "10.000₺",
    period: "/aylık",
    description: "Küçük siteler için temel performans optimizasyonu",
    features: [
      "Site hızı optimizasyonu",
      "Temel A/B testleri",
      "Conversion tracking kurulumu",
      "Aylık performans raporu",
      "UX analizi"
    ],
    popular: false,
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "Gelişmiş Optimizasyon",
    price: "20.000₺",
    period: "/aylık",
    description: "Orta ölçekli siteler için kapsamlı optimizasyon",
    features: [
      "Temel paketin tüm özellikleri",
      "Funnel optimizasyonu",
      "Landing page tasarımı",
      "Heat map analizi",
      "Çoklu A/B testleri",
      "Conversion rate artışı garantisi",
      "Haftalık optimizasyon toplantıları"
    ],
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Enterprise Optimizasyon",
    price: "40.000₺",
    period: "/aylık",
    description: "Büyük siteler için premium optimizasyon hizmeti",
    features: [
      "Gelişmiş paketin tüm özellikleri",
      "Kişiselleştirme motorları",
      "Machine learning optimizasyonu",
      "Multi-variant testler",
      "Advanced segmentation",
      "Custom dashboard",
      "Dedicated optimizasyon uzmanı",
      "24/7 monitoring"
    ],
    popular: false,
    color: "from-emerald-500 to-green-500"
  }
];

const tools = [
  { name: "Google Optimize", description: "A/B test ve personalization" },
  { name: "Hotjar", description: "Heat map ve kullanıcı analizi" },
  { name: "Google Analytics", description: "Conversion tracking" },
  { name: "Unbounce", description: "Landing page optimizasyonu" },
  { name: "Optimizely", description: "Enterprise A/B testing" },
  { name: "VWO", description: "Conversion rate optimization" }
];

const results = [
  {
    metric: "Conversion Rate",
    before: "2.4%",
    after: "5.8%",
    improvement: "+142%",
    color: "text-green-400"
  },
  {
    metric: "Bounce Rate",
    before: "68%",
    after: "41%",
    improvement: "-40%",
    color: "text-blue-400"
  },
  {
    metric: "Page Load Time",
    before: "4.2s",
    after: "1.8s",
    improvement: "-57%",
    color: "text-purple-400"
  },
  {
    metric: "Revenue per Visitor",
    before: "$12.50",
    after: "$31.20",
    improvement: "+150%",
    color: "text-yellow-400"
  }
];

const process = [
  {
    step: "01",
    title: "Analiz & Audit",
    description: "Mevcut performansınızı detaylı olarak analiz ediyoruz"
  },
  {
    step: "02",
    title: "Strateji Geliştirme", 
    description: "Veri tabanlı optimizasyon stratejisi oluşturuyoruz"
  },
  {
    step: "03",
    title: "Test & Uygulama",
    description: "A/B testleri ve iyileştirmeleri uyguluyoruz"
  },
  {
    step: "04",
    title: "Monitoring & İyileştirme",
    description: "Sürekli takip ederek optimizasyonları geliştiriyoruz"
  }
];

export default function PerformanceOptimizationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30 text-sm font-medium text-indigo-300 backdrop-blur-sm mb-4">
                  ⚡ Performans Optimizasyonu
                </span>
                <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
                  <span className="gradient-text">ROI'nizi</span><br />
                  <span className="text-white">Maksimize Edin</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Veri odaklı optimizasyon stratejileri ile sitenizin dönüşüm oranını artırın. 
                Her ziyaretçinizden maksimum değer alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz Analiz Al
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Tipik Sonuçlarımız</h3>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                    >
                      <div>
                        <div className="text-white font-semibold text-sm">{result.metric}</div>
                        <div className="text-gray-400 text-xs">{result.before} → {result.after}</div>
                      </div>
                      <div className={`font-bold ${result.color}`}>
                        {result.improvement}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Optimizasyon</span> <span className="text-white">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Her yönüyle performansınızı artıracak kapsamlı optimizasyon çözümleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl inline-block mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Optimizasyon</span> <span className="gradient-text">Sürecimiz</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Optimizasyonun</span> <span className="gradient-text">Faydaları</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl inline-block mb-4">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Optimizasyon</span> <span className="text-white">Paketlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Performans hedeflerinize uygun optimizasyon paketini seçin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {optimizationPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-indigo-500/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    En Popüler
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-2">
                    {pkg.price}<span className="text-lg text-gray-400">{pkg.period}</span>
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle2 size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 bg-gradient-to-r ${pkg.color} rounded-lg font-semibold text-white transition-all duration-300 text-center ${pkg.popular ? 'neon-glow' : ''}`}
                >
                  Paketi Seç
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Kullandığımız</span> <span className="gradient-text">Araçlar</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                <span className="gradient-text">Performansınızı Artırmaya</span> Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Uzman optimizasyon ekibimizle tanışın ve ROI'nizi maksimum seviyeye çıkarın.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz Analiz Al
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
