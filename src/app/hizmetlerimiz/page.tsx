'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Camera, 
  Target, 
  Palette, 
  BarChart3, 
  Video,
  Search,
  MessageCircle,
  Lightbulb,
  Megaphone,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
  Award
} from 'lucide-react';

const mainServices = [
  {
    category: "Dijital Pazarlama",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    description: "Markanızı dijital dünyada zirveye taşıyacak kapsamlı pazarlama çözümleri",
    services: [
      {
        icon: Target,
        title: "Dijital Pazarlama Stratejisi",
        description: "Markanız için özel dijital pazarlama stratejileri oluşturuyoruz.",
        features: ["Hedef Kitle Analizi", "Rakip Analizi", "KPI Belirleme", "Strateji Roadmap"],
        price: "15.000₺'den başlayan fiyatlarla",
        link: "/dijital-pazarlama-stratejisi"
      },
      {
        icon: Search,
        title: "SEO & SEM Hizmetleri",
        description: "Arama motorlarında görünürlüğünüzü maksimum seviyeye çıkarıyoruz.",
        features: ["Teknik SEO", "İçerik SEO", "Google Ads", "Bing Ads"],
        price: "8.000₺'den başlayan fiyatlarla",
        link: "/seo-sem-hizmetleri"
      },
      {
        icon: MessageCircle,
        title: "Sosyal Medya Yönetimi",
        description: "Tüm sosyal medya platformlarında etkili varlık oluşturuyoruz.",
        features: ["İçerik Üretimi", "Community Management", "Influencer İşbirlikleri", "Reklam Yönetimi"],
        price: "12.000₺'den başlayan fiyatlarla",
        link: "/sosyal-medya-yonetimi"
      },
      {
        icon: BarChart3,
        title: "Analiz & Raporlama",
        description: "Detaylı analizlerle performansınızı sürekli optimize ediyoruz.",
        features: ["Google Analytics", "Sosyal Medya Analitiği", "ROI Raporları", "A/B Test Analizleri"],
        price: "5.000₺'den başlayan fiyatlarla",
        link: "/analiz-raporlama"
      }
    ]
  },
  {
    category: "Ürün Çekim Hizmetleri",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    description: "Ürünlerinizi en etkileyici şekilde görselleştiren profesyonel çekim hizmetleri",
    services: [
      {
        icon: Camera,
        title: "Profesyonel Ürün Fotoğrafçılığı",
        description: "Ürünlerinizi en etkileyici açılardan görselleştiriyoruz.",
        features: ["Stüdyo Çekimi", "Lifestyle Çekimi", "Packshot Çekimi", "360° Fotoğraf"],
        price: "2.500₺'den başlayan fiyatlarla",
        link: "/urun-fotografciligi"
      },
      {
        icon: Video,
        title: "Video Prodüksiyon",
        description: "Dinamik ve etkileyici ürün tanıtım videoları üretiyoruz.",
        features: ["Ürün Tanıtım Videoları", "Kurumsal Videolar", "Sosyal Medya Videoları", "Animasyon"],
        price: "8.000₺'den başlayan fiyatlarla",
        link: "/video-produksiyon"
      },
      {
        icon: Palette,
        title: "Görsel Tasarım",
        description: "Markanızın kimliğini yansıtan yaratıcı tasarımlar geliştiriyoruz.",
        features: ["Katalog Tasarımı", "Sosyal Medya Görselleri", "Banner Tasarımı", "Infografik"],
        price: "3.000₺'den başlayan fiyatlarla",
        link: "/gorsel-tasarim"
      },
      {
        icon: Eye,
        title: "360° Ürün Görselleştirme",
        description: "İnteraktif 360 derece ürün deneyimleri oluşturuyoruz.",
        features: ["360° Fotoğraf", "Sanal Tur", "AR Deneyimi", "3D Modelleme"],
        price: "5.000₺'den başlayan fiyatlarla",
        link: "/360-urun-gorsellestirme"
      }
    ]
  }
];

const additionalServices = [
  {
    icon: Lightbulb,
    title: "Marka Danışmanlığı",
    description: "Markanızın dijital dönüşüm yolculuğunda rehberlik ediyoruz.",
    features: ["Marka Kimliği", "Pozisyonlama", "Dijital Strateji", "Rebranding"],
    color: "from-yellow-400 to-orange-500",
    price: "20.000₺'den başlayan fiyatlarla",
    link: "/marka-danismanligi"
  },
  {
    icon: Megaphone,
    title: "İçerik Pazarlaması",
    description: "Hedef kitlenizi etkileyen yaratıcı içerikler üretiyoruz.",
    features: ["Blog Yazıları", "Video İçerikler", "Podcast", "E-kitap"],
    color: "from-green-400 to-emerald-500",
    price: "6.000₺'den başlayan fiyatlarla",
    link: "/icerik-pazarlamasi"
  },
  {
    icon: Zap,
    title: "Performans Optimizasyonu",
    description: "Kampanyalarınızın ROI'sini maksimum seviyeye çıkarıyoruz.",
    features: ["Conversion Optimization", "Landing Page Optimizasyonu", "A/B Testing", "UX İyileştirme"],
    color: "from-indigo-400 to-purple-500",
    price: "10.000₺'den başlayan fiyatlarla",
    link: "/performans-optimizasyonu"
  }
];

const packages = [
  {
    name: "Startup Paketi",
    price: "25.000₺",
    period: "/aylık",
    description: "Yeni kurulan işletmeler için temel dijital pazarlama paketi",
    features: [
      "Temel SEO optimizasyonu",
      "2 sosyal medya platformu yönetimi",
      "Aylık 20 gönderi",
      "Temel analiz raporları",
      "E-posta desteği"
    ],
    popular: false,
    color: "from-blue-500 to-blue-600",
    link: "/startup-paketi"
  },
  {
    name: "Büyüme Paketi",
    price: "45.000₺",
    period: "/aylık",
    description: "Büyüyen işletmeler için kapsamlı dijital pazarlama çözümü",
    features: [
      "Kapsamlı SEO & SEM",
      "4 sosyal medya platformu yönetimi",
      "Aylık 40 gönderi + 10 ürün çekimi",
      "Detaylı analiz raporları",
      "Telefon + e-posta desteği",
      "Aylık strateji toplantısı"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
    link: "/buyume-paketi"
  },
  {
    name: "Kurumsal Paket",
    price: "Özel Fiyat",
    period: "",
    description: "Büyük şirketler için özelleştirilmiş dijital pazarlama çözümü",
    features: [
      "Tam kapsamlı dijital pazarlama",
      "Sınırsız sosyal medya yönetimi",
      "Özel içerik üretimi",
      "Gerçek zamanlı raporlama",
      "7/24 destek",
      "Özel hesap yöneticisi",
      "Özel strateji geliştirme"
    ],
    popular: false,
    color: "from-green-500 to-emerald-500",
    link: "/kurumsal-paket"
  }
];

export default function ServicesPage() {
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
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dijital pazarlama ve görsel içerik üretiminde Türkiye'nin en kapsamlı 
              hizmet portföyü ile markanızı zirveye taşıyoruz.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Tamamlanan Proje" },
              { number: "50+", label: "Mutlu Müşteri" },
              { number: "15+", label: "Uzman Ekip" },
              { number: "300%", label: "Ortalama ROI" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
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

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-6`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{category.category}</h2>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                          <service.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Dahil Olan Hizmetler:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle2 size={14} className="text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-primary-400 font-semibold">{service.price}</span>
                        {service.link ? (
                          <motion.a
                            href={service.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white text-sm font-medium flex items-center"
                          >
                            Detaylar
                            <ArrowRight size={16} className="ml-1" />
                          </motion.a>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white text-sm font-medium flex items-center"
                          >
                            Detaylar
                            <ArrowRight size={16} className="ml-1" />
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ek Uzmanlık Alanlarımız</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <Star size={12} className="text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary-400 font-semibold text-sm">{service.price}</span>
                  {service.link ? (
                    <motion.a
                      href={service.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium"
                    >
                      İncele
                    </motion.a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium"
                    >
                      İncele
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Paket Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyaçlarınıza göre özel olarak hazırlanmış, uygun fiyatlı paket seçeneklerimiz.
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
                className={`glass rounded-3xl p-8 relative ${pkg.popular ? 'border-2 border-gradient' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2 rounded-full">
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
                    <span className="text-gray-400 ml-1">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={pkg.link}
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
                Hangi Hizmete İhtiyacınız Var?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Uzman ekibimizle tanışın ve projeniz için en uygun çözümü birlikte belirleyelim.
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz Danışmanlık Al
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

