import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz - Dijital Pazarlama & Ürün Çekim Hizmetleri",
  description: "SEOTING'in sunduğu kapsamlı dijital pazarlama hizmetleri: SEO, SEM, sosyal medya yönetimi, ürün fotoğrafçılığı, video prodüksiyon, marka danışmanlığı ve daha fazlası. İstanbul'daki uzman ekibimizle tanışın.",
  keywords: [
    "dijital pazarlama hizmetleri",
    "SEO hizmetleri",
    "Google Ads yönetimi", 
    "sosyal medya yönetimi",
    "ürün fotoğrafçılığı İstanbul",
    "video prodüksiyon",
    "marka danışmanlığı",
    "içerik pazarlama",
    "e-ticaret çözümleri",
    "grafik tasarım hizmetleri"
  ],
  openGraph: {
    title: "SEOTING Hizmetleri - Dijital Pazarlama & Ürün Çekim",
    description: "SEO, SEM, sosyal medya, ürün fotoğrafçılığı, video prodüksiyon ve marka danışmanlığı hizmetleri. İstanbul'daki uzman ekibimizle tanışın.",
    url: "https://seoting.com/hizmetlerimiz",
  },
  alternates: {
    canonical: "https://seoting.com/hizmetlerimiz",
  },
};

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

        link: "/dijital-pazarlama-stratejisi"
      },
      {
        icon: Search,
        title: "SEO & SEM Hizmetleri",
        description: "Arama motorlarında görünürlüğünüzü maksimum seviyeye çıkarıyoruz.",
        features: ["Teknik SEO", "İçerik SEO", "Google Ads", "Bing Ads"],

        link: "/seo-sem-hizmetleri"
      },
      {
        icon: MessageCircle,
        title: "Sosyal Medya Yönetimi",
        description: "Tüm sosyal medya platformlarında etkili varlık oluşturuyoruz.",
        features: ["İçerik Üretimi", "Community Management", "Influencer İşbirlikleri", "Reklam Yönetimi"],
        link: "/sosyal-medya-yonetimi"
      },
      {
        icon: BarChart3,
        title: "Analiz & Raporlama",
        description: "Detaylı analizlerle performansınızı sürekli optimize ediyoruz.",
        features: ["Google Analytics", "Sosyal Medya Analitiği", "ROI Raporları", "A/B Test Analizleri"],
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
        link: "/urun-fotografciligi"
      },
      {
        icon: Video,
        title: "Video Prodüksiyon",
        description: "Dinamik ve etkileyici ürün tanıtım videoları üretiyoruz.",
        features: ["Ürün Tanıtım Videoları", "Kurumsal Videolar", "Sosyal Medya Videoları", "Animasyon"],

        link: "/video-produksiyon"
      },
      {
        icon: Palette,
        title: "Görsel Tasarım",
        description: "Markanızın kimliğini yansıtan yaratıcı tasarımlar geliştiriyoruz.",
        features: ["Katalog Tasarımı", "Sosyal Medya Görselleri", "Banner Tasarımı", "Infografik"],
        link: "/gorsel-tasarim"
      },
      {
        icon: Eye,
        title: "360° Ürün Görselleştirme",
        description: "İnteraktif 360 derece ürün deneyimleri oluşturuyoruz.",
        features: ["360° Fotoğraf", "Sanal Tur", "AR Deneyimi", "3D Modelleme"],
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
    link: "/marka-danismanligi"
  },
  {
    icon: Megaphone,
    title: "İçerik Pazarlaması",
    description: "Hedef kitlenizi etkileyen yaratıcı içerikler üretiyoruz.",
    features: ["Blog Yazıları", "Video İçerikler", "Podcast", "E-kitap"],
    color: "from-green-400 to-emerald-500",
    link: "/icerik-pazarlamasi"
  },
  {
    icon: Zap,
    title: "Performans Optimizasyonu",
    description: "Kampanyalarınızın ROI'sini maksimum seviyeye çıkarıyoruz.",
    features: ["Conversion Optimization", "Landing Page Optimizasyonu", "A/B Testing", "UX İyileştirme"],
    color: "from-indigo-400 to-purple-500",
    link: "/performans-optimizasyonu"
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz Danışmanlık Al
                </motion.a>
                <motion.a
                  href="/paketler"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Paketleri Keşfet
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

