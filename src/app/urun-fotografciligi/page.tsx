'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Image, 
  Palette, 
  Eye, 
  Lightbulb,
  Award,
  CheckCircle2,
  ArrowRight,
  Settings,
  Zap,
  Target,
  Star,
  Play,
  Download
} from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Stüdyo Çekimi",
    description: "Kontrollü ışık ortamında profesyonel ürün fotoğrafları",
    features: ["White background", "Multiple angles", "Detail shots", "Color variants", "High resolution"]
  },
  {
    icon: Eye,
    title: "Lifestyle Çekim",
    description: "Ürünleri gerçek kullanım ortamlarında görselleştirme",
    features: ["Natural settings", "Model photography", "Ambient lighting", "Storytelling", "Brand integration"]
  },
  {
    icon: Settings,
    title: "360° Fotoğraf",
    description: "İnteraktif 360 derece ürün görselleştirme",
    features: ["360° rotation", "Zoom functionality", "Interactive viewer", "Web integration", "Mobile optimized"]
  },
  {
    icon: Palette,
    title: "Post-Production",
    description: "Profesyonel retouching ve color correction",
    features: ["Color correction", "Background removal", "Shadow enhancement", "Detail enhancement", "Format optimization"]
  }
];

const photography_types = [
  {
    title: "E-ticaret Fotoğrafları",
    description: "Online satış için optimize edilmiş ürün görselleri",
    samples: ["Ana ürün fotoğrafı", "Detay çekimleri", "Kullanım görselleri", "Boyut karşılaştırması"]
  },
  {
    title: "Katalog Fotoğrafları",
    description: "Basılı ve dijital kataloglar için profesyonel görseller",
    samples: ["Yüksek çözünürlük", "Print ready", "Konsistent kalite", "Marka uyumu"]
  },
  {
    title: "Sosyal Medya İçeriği",
    description: "Instagram, Facebook için özel format görseller",
    samples: ["Square format", "Story format", "Reels content", "Carousel posts"]
  },
  {
    title: "Reklam Görselleri",
    description: "Pazarlama kampanyaları için çarpıcı görseller",
    samples: ["Campaign visuals", "Banner designs", "Print advertisements", "Digital ads"]
  }
];

const process = [
  {
    step: "01",
    title: "Planlama",
    description: "Ürün analizi ve çekim planı hazırlama",
    duration: "1 gün"
  },
  {
    step: "02",
    title: "Set Kurulumu",
    description: "Stüdyo düzeni ve ışık ayarları",
    duration: "2 saat"
  },
  {
    step: "03",
    title: "Çekim",
    description: "Profesyonel fotoğraf çekimi",
    duration: "4-8 saat"
  },
  {
    step: "04",
    title: "Seçim",
    description: "En iyi kareler seçimi ve sınıflandırma",
    duration: "1 gün"
  },
  {
    step: "05",
    title: "Retouching",
    description: "Profesyonel post-production işlemleri",
    duration: "2-3 gün"
  },
  {
    step: "06",
    title: "Teslimat",
    description: "Final görsellerin teslimi",
    duration: "1 gün"
  }
];

const packages = [
  {
    name: "Basic Package",
    price: "2.500₺",
    description: "10 ürün için temel çekim paketi",
    features: [
      "10 ürün çekimi",
      "3 açıdan fotoğraf",
      "Temel retouching",
      "Web çözünürlüğü",
      "3 gün teslimat"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Professional Package",
    price: "5.000₺",
    description: "25 ürün + lifestyle çekim",
    features: [
      "25 ürün çekimi",
      "5 açıdan fotoğraf",
      "Lifestyle çekim",
      "Profesyonel retouching",
      "Print + Web çözünürlüğü",
      "360° fotoğraf (5 ürün)",
      "5 gün teslimat"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise Package",
    price: "Özel Fiyat",
    description: "Sınırsız ürün + özel çözümler",
    features: [
      "Sınırsız ürün çekimi",
      "Özel set tasarımı",
      "Model çekimi",
      "Video entegrasyonu",
      "Advanced retouching",
      "Tüm format ve çözünürlükler",
      "Öncelikli teslimat"
    ],
    popular: false,
    color: "from-blue-500 to-purple-500"
  }
];

export default function ProductPhotographyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-sm font-medium text-orange-300 backdrop-blur-sm mb-6">
              📸 Ürün Çekim Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Ürün</span><br />
              <span className="text-white">Fotoğrafçılığı</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ürünlerinizi en etkileyici şekilde görselleştirin. Profesyonel stüdyo çekimi, 
              lifestyle fotoğraflar ve 360° görseller ile satışlarınızı artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Çekim Teklifi Al
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Paketleri İncele
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2000+", label: "Çekilen Ürün", color: "text-orange-400" },
              { number: "50+", label: "Marka", color: "text-red-400" },
              { number: "99%", label: "Müşteri Memnuniyeti", color: "text-purple-400" },
              { number: "24h", label: "Express Teslimat", color: "text-blue-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Çekim Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her türlü ürün için profesyonel fotoğraf çekim hizmetleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <Star size={12} className="text-orange-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Çekim Türlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her ihtiyaca özel ürün fotoğrafçılığı çözümleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {photography_types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.samples.map((sample, sampleIndex) => (
                    <span
                      key={sampleIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs"
                    >
                      {sample}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Çalışma Sürecimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Planlamadan teslimata kadar profesyonel süreç.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <span className="text-orange-400 text-sm">{step.duration}</span>
                  </div>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Çekim Paketleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun ürün fotoğrafçılığı paketlerimiz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass rounded-3xl p-8 relative ${pkg.popular ? 'border-2 border-orange-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-2 rounded-full">
                      <div className="flex items-center text-white text-sm font-semibold">
                        <Award size={16} className="mr-2" />
                        En Popüler
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 bg-gradient-to-r ${pkg.color} rounded-lg font-semibold text-white transition-all duration-300 text-center ${pkg.popular ? 'neon-glow' : ''}`}
                >
                  {pkg.price === "Özel Fiyat" ? "Teklif Al" : "Paketi Seç"}
                </motion.a>
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
                Ürünlerinizi Profesyonel Görsellere Dönüştürün
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Kaliteli ürün fotoğrafları ile satışlarınızı artırın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Çekim Randevusu Al
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
