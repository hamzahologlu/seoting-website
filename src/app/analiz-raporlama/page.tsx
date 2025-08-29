'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Users, 
  Eye, 
  ArrowRight,
  CheckCircle2,
  PieChart,
  Activity,
  AlertCircle,
  LineChart
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Google Analytics Kurulumu",
    description: "Detaylı veri toplama ve analiz için profesyonel GA4 kurulumu"
  },
  {
    icon: PieChart,
    title: "Sosyal Medya Analitiği",
    description: "Tüm platformlardaki performansınızı tek ekrandan takip edin"
  },
  {
    icon: TrendingUp,
    title: "ROI Raporları",
    description: "Yatırımınızın geri dönüşünü detaylı olarak analiz ediyoruz"
  },
  {
    icon: LineChart,
    title: "A/B Test Analizleri",
    description: "Farklı varyasyonları test ederek en iyi performansı buluyoruz"
  },
  {
    icon: Activity,
    title: "Conversion Tracking",
    description: "Hedeflerinize ulaşan kullanıcı davranışlarını izliyoruz"
  },
  {
    icon: Eye,
    title: "Heat Map Analizi",
    description: "Kullanıcıların site üzerindeki davranışlarını görselleştiriyoruz"
  }
];

const benefits = [
  {
    icon: Target,
    title: "Veri Odaklı Kararlar",
    description: "Gerçek verilerle desteklenen stratejik kararlar alın"
  },
  {
    icon: TrendingUp,
    title: "Sürekli İyileştirme",
    description: "Performansınızı sürekli takip ederek optimizasyon yapın"
  },
  {
    icon: Users,
    title: "Hedef Kitle Anlayışı",
    description: "Müşterilerinizi daha iyi tanıyın ve etkili stratejiler geliştirin"
  },
  {
    icon: AlertCircle,
    title: "Risk Yönetimi",
    description: "Potansiyel sorunları önceden tespit ederek önlem alın"
  }
];

const analyticsPackages = [
  {
    name: "Temel Analiz",
    price: "5.000₺",
    period: "/aylık",
    description: "Küçük işletmeler için temel analiz paketi",
    features: [
      "Google Analytics kurulumu",
      "Aylık performans raporu",
      "Temel KPI takibi",
      "E-posta desteği",
      "Basit dashboard kurulumu"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Gelişmiş Analiz",
    price: "12.000₺",
    period: "/aylık",
    description: "Orta ölçekli işletmeler için kapsamlı analiz",
    features: [
      "Temel paketin tüm özellikleri",
      "Haftalık detaylı raporlar",
      "A/B test kurulumu ve analizi",
      "Conversion tracking",
      "Heat map analizi",
      "Telefon desteği",
      "Özel dashboard tasarımı"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Kurumsal Analiz",
    price: "25.000₺",
    period: "/aylık",
    description: "Büyük şirketler için enterprise seviye analiz",
    features: [
      "Gelişmiş paketin tüm özellikleri",
      "Günlük performans raporları",
      "Özel KPI tanımlama",
      "Multi-channel attribution",
      "Predictive analytics",
      "7/24 destek",
      "Dedicated analiz uzmanı",
      "Custom integrations"
    ],
    popular: false,
    color: "from-green-500 to-emerald-500"
  }
];

const tools = [
  { name: "Google Analytics 4", description: "Web trafiği analizi" },
  { name: "Google Tag Manager", description: "Takip kodu yönetimi" },
  { name: "Facebook Analytics", description: "Sosyal medya analitiği" },
  { name: "Hotjar", description: "Kullanıcı davranış analizi" },
  { name: "Google Data Studio", description: "Veri görselleştirme" },
  { name: "SEMrush", description: "SEO performans analizi" }
];

export default function AnalyticsReportingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm mb-4">
                  📊 Analiz & Raporlama
                </span>
                <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
                  <span className="gradient-text">Veri Odaklı</span><br />
                  <span className="text-white">Büyüme Stratejileri</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Detaylı analizler ve kapsamlı raporlarla dijital performansınızı sürekli optimize edin. 
                Verilerinizi anlamlı içgörülere dönüştürüyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Performans Özeti</h3>
                  <span className="text-green-400 text-sm">↗ +24% bu ay</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Toplam Ziyaret", value: "127.5K", change: "+18%" },
                    { label: "Conversion Rate", value: "3.47%", change: "+12%" },
                    { label: "Ortalama Oturum", value: "4:32", change: "+8%" },
                    { label: "ROI", value: "426%", change: "+31%" }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">{metric.label}</span>
                      <div className="text-right">
                        <div className="text-white font-semibold">{metric.value}</div>
                        <div className="text-green-400 text-sm">{metric.change}</div>
                      </div>
                    </div>
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
              <span className="gradient-text">Analiz</span> <span className="text-white">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dijital performansınızı her açıdan analiz ederek büyüme fırsatlarını keşfediyoruz.
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
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl inline-block mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-white">Neden</span> <span className="gradient-text">Analiz?</span>
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
                <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl inline-block mb-4">
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
              <span className="gradient-text">Analiz</span> <span className="text-white">Paketlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İhtiyacınıza uygun analiz paketini seçin ve büyüme yolculuğunuza başlayın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {analyticsPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-purple-500/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                <span className="gradient-text">Analiz Raporu</span> Almaya Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Uzman ekibimizle tanışın ve dijital performansınızı analiz etmek için ücretsiz danışmanlık alın.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
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
