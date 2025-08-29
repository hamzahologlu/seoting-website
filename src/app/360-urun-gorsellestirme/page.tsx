'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Eye, 
  RotateCcw, 
  Camera, 
  Monitor, 
  Smartphone, 
  VolumeX, 
  ArrowRight,
  CheckCircle2,
  MousePointer,
  Box,
  Zap,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: RotateCcw,
    title: "360° Fotoğraf",
    description: "Ürününüzü her açıdan görüntüleyen interaktif fotoğraf çekimleri"
  },
  {
    icon: Eye,
    title: "Sanal Tur",
    description: "Mekanlarınızı sanal ortamda gezme imkanı sunan immersive deneyimler"
  },
  {
    icon: MousePointer,
    title: "AR Deneyimi",
    description: "Artırılmış gerçeklik ile ürünleri gerçek ortamda görüntüleme"
  },
  {
    icon: Box,
    title: "3D Modelleme",
    description: "Photorealistic 3D modeller ve animasyonlar"
  },
  {
    icon: Monitor,
    title: "Web Entegrasyonu",
    description: "Tüm web sitelerine kolay entegrasyon imkanı"
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    description: "Tüm cihazlarda mükemmel performans"
  }
];

const benefits = [
  {
    icon: Eye,
    title: "Görsel Deneyim",
    description: "Müşterilerinize benzersiz interaktif deneyim sunun"
  },
  {
    icon: Zap,
    title: "Dönüşüm Artışı",
    description: "360° görüntüleme %40'a kadar dönüşüm artırır"
  },
  {
    icon: Globe,
    title: "Global Erişim",
    description: "Dünyanın her yerinden ürününüze erişim"
  },
  {
    icon: Monitor,
    title: "Teknoloji Liderliği",
    description: "Sektörünüzde teknoloji lideri olarak öne çıkın"
  }
];

const packages = [
  {
    name: "Temel 360°",
    price: "5.000₺",
    period: "/proje",
    description: "Küçük ürünler için temel 360° paket",
    features: [
      "24 nokta 360° çekim",
      "HD kalite görüntü",
      "Web viewer dahil",
      "Temel düzenleme",
      "5 gün teslimat"
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Profesyonel 360°",
    price: "12.000₺",
    period: "/proje",
    description: "Orta ölçekli projeler için gelişmiş paket",
    features: [
      "36 nokta 360° çekim",
      "4K kalite görüntü",
      "İnteraktif hotspotlar",
      "Zoom özelliği",
      "Mobil optimizasyon",
      "API entegrasyonu",
      "3 gün teslimat"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Premium AR",
    price: "25.000₺",
    period: "/proje",
    description: "AR özellikli premium deneyim paketi",
    features: [
      "48 nokta 360° çekim",
      "8K kalite görüntü",
      "AR viewer dahil",
      "3D model oluşturma",
      "Animasyon desteği",
      "Custom branding",
      "Analytics dashboard",
      "24 saat teslimat"
    ],
    popular: false,
    color: "from-emerald-500 to-green-500"
  }
];

const useCases = [
  { name: "E-ticaret", description: "Online mağazalarda ürün deneyimi" },
  { name: "Gayrimenkul", description: "Sanal ev ve ofis turları" },
  { name: "Otomotiv", description: "Araç içi ve dışı görüntüleme" },
  { name: "Mobilya", description: "Ev dekorasyonu ve mobilya sergileme" },
  { name: "Sanat Eserleri", description: "Müze ve galeri koleksiyonları" },
  { name: "Endüstriyel", description: "Makine ve ekipman tanıtımları" }
];

const stats = [
  { number: "40%", label: "Dönüşüm Artışı", description: "360° görüntüleme ile" },
  { number: "85%", label: "Kullanıcı Memnuniyeti", description: "İnteraktif deneyim ile" },
  { number: "60%", label: "Daha Az İade", description: "Detaylı ürün incelemesi ile" },
  { number: "2.5x", label: "Daha Uzun Kalış", description: "Sitede geçirilen süre" }
];

export default function Product360Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-sm font-medium text-cyan-300 backdrop-blur-sm mb-4">
                  🔄 360° Görselleştirme
                </span>
                <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
                  <span className="gradient-text">İnteraktif</span><br />
                  <span className="text-white">Ürün Deneyimi</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Ürünlerinizi 360° açıdan görüntüleyebilen, AR destekli interaktif deneyimlerle 
                müşterilerinize benzersiz bir alışveriş deneyimi sunun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Demo Talep Et
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
                <h3 className="text-xl font-bold text-white mb-6">Performans İstatistikleri</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 bg-white/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                      <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                      <div className="text-gray-400 text-xs">{stat.description}</div>
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
              <span className="gradient-text">360°</span> <span className="text-white">Teknolojilerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En gelişmiş 360° görüntüleme ve AR teknolojileri ile ürünlerinizi yaşatın.
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
                <div className="p-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl inline-block mb-4">
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
              <span className="text-white">360°'nin</span> <span className="gradient-text">Avantajları</span>
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
                <div className="p-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl inline-block mb-4">
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
              <span className="gradient-text">360°</span> <span className="text-white">Paketlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Projenize uygun 360° görselleştirme paketini seçin.
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
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-cyan-500/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
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

      {/* Use Cases Section */}
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
              <span className="text-white">Kullanım</span> <span className="gradient-text">Alanları</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">{useCase.name}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
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
                <span className="gradient-text">360° Deneyimini</span> Yaşamaya Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ürününüz için özel 360° görselleştirme çözümü almak için bizimle iletişime geçin.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Demo Talep Et
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
