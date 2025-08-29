'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Video, 
  Mic, 
  BookOpen, 
  PenTool, 
  Camera, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Eye,
  Share2
} from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: "Blog Yazıları",
    description: "SEO uyumlu, hedef kitleye hitap eden kaliteli blog içerikleri"
  },
  {
    icon: Video,
    title: "Video İçerikler",
    description: "Eğitici, eğlenceli ve viral potansiyeli yüksek video içerikler"
  },
  {
    icon: Mic,
    title: "Podcast",
    description: "Sektörel konularda uzman röportajları ve tartışma programları"
  },
  {
    icon: BookOpen,
    title: "E-kitap",
    description: "Markanızın uzmanlığını gösteren kapsamlı rehber kitaplar"
  },
  {
    icon: Camera,
    title: "Sosyal Medya İçeriği",
    description: "Platform özelinde optimize edilmiş görsel ve yazılı içerikler"
  },
  {
    icon: FileText,
    title: "İnfografik & Rehberler",
    description: "Karmaşık bilgileri basit ve anlaşılır görsellerle anlatım"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Marka Bilinirliği",
    description: "Değerli içeriklerle marka farkındalığını artırın"
  },
  {
    icon: Users,
    title: "Hedef Kitle Etkileşimi",
    description: "Doğru içeriklerle müşterilerinizle güçlü bağ kurun"
  },
  {
    icon: Eye,
    title: "Uzun Vadeli Görünürlük",
    description: "Kaliteli içerikler uzun süre değer yaratmaya devam eder"
  },
  {
    icon: Share2,
    title: "Viral Potansiyel",
    description: "Paylaşılabilir içeriklerle organik erişimi artırın"
  }
];

const contentPackages = [
  {
    name: "Temel İçerik",
    price: "6.000₺",
    period: "/aylık",
    description: "Küçük işletmeler için temel içerik paketi",
    features: [
      "Aylık 8 blog yazısı",
      "Haftalık sosyal medya içerikleri",
      "SEO optimizasyonu",
      "Temel editörlük",
      "İçerik takvimi"
    ],
    popular: false,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Profesyonel İçerik",
    price: "15.000₺",
    period: "/aylık",
    description: "Büyüyen işletmeler için kapsamlı içerik paketi",
    features: [
      "Temel paketin tüm özellikleri",
      "Aylık 16 blog yazısı",
      "2 video içerik",
      "İnfografik tasarımı",
      "E-mail newsletter",
      "Uzman röportajları",
      "Performans analizi"
    ],
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Kurumsal İçerik",
    price: "30.000₺",
    period: "/aylık",
    description: "Büyük şirketler için premium içerik hizmeti",
    features: [
      "Profesyonel paketin tüm özellikleri",
      "Sınırsız blog yazısı",
      "Haftalık video içerik",
      "Podcast prodüksiyonu",
      "E-kitap yazımı",
      "Webinar organizasyonu",
      "Dedicated content manager",
      "Custom content strategy"
    ],
    popular: false,
    color: "from-purple-500 to-pink-500"
  }
];

const contentTypes = [
  { name: "Blog Yazıları", description: "SEO uyumlu uzun form içerikler" },
  { name: "Social Media Posts", description: "Platform özelinde kısa içerikler" },
  { name: "Video Scripts", description: "Etkili video senaryoları" },
  { name: "Email Newsletters", description: "Düzenli müşteri bültenleri" },
  { name: "Case Studies", description: "Başarı hikayesi anlatımları" },
  { name: "Whitepapers", description: "Teknik ve analitik raporlar" }
];

const process = [
  {
    step: "01",
    title: "Strateji Geliştirme",
    description: "Markanız ve hedef kitleniz için özel içerik stratejisi oluşturuyoruz"
  },
  {
    step: "02", 
    title: "İçerik Üretimi",
    description: "Uzman yazarlar ve tasarımcılarla kaliteli içerikler üretiyoruz"
  },
  {
    step: "03",
    title: "Optimizasyon",
    description: "SEO ve platform özelinde içerikleri optimize ediyoruz"
  },
  {
    step: "04",
    title: "Yayınlama & Takip",
    description: "İçerikleri yayınlayıp performansını sürekli izliyoruz"
  }
];

export default function ContentMarketingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-4">
                  ✍️ İçerik Pazarlaması
                </span>
                <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
                  <span className="gradient-text">Değerli İçeriklerle</span><br />
                  <span className="text-white">Müşteri Kazanın</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Hedef kitlenizi etkileyen, SEO uyumlu ve paylaşılabilir içeriklerle 
                markanızın otoritesini artırın ve uzun vadeli müşteri ilişkileri kurun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  İçerik Stratejisi Al
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
                <h3 className="text-xl font-bold text-white mb-6">İçerik Sürecimiz</h3>
                <div className="space-y-4">
                  {process.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
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
              <span className="gradient-text">İçerik</span> <span className="text-white">Çeşitlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Her platform ve hedef kitle için özelleştirilmiş içerik türleri üretiyoruz.
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
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl inline-block mb-4">
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
              <span className="text-white">İçerik Pazarlamasının</span> <span className="gradient-text">Faydaları</span>
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
                <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl inline-block mb-4">
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
              <span className="gradient-text">İçerik</span> <span className="text-white">Paketlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İhtiyacınıza uygun içerik pazarlama paketini seçin ve büyümeye başlayın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-green-500/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
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

      {/* Content Types Section */}
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
              <span className="text-white">İçerik</span> <span className="gradient-text">Formatlarımız</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">{type.name}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
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
                <span className="gradient-text">İçerik Yolculuğunuza</span> Başlayalım
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Uzman içerik ekibimizle tanışın ve markanız için özel içerik stratejisi oluşturalım.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  İçerik Stratejisi Al
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
