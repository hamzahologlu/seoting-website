'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Check, 
  Star, 
  TrendingUp, 
  Zap,
  Crown,
  Rocket,
  Shield,
  Target,
  Users,
  BarChart3,
  Camera,
  Video,
  Globe,
  Search,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Clock
} from 'lucide-react';

const packages = [
  {
    id: "startup",
    name: "Startup Paketi",
    subtitle: "Yeni başlayanlar için",
    price: "25.000₺",
    originalPrice: null,
    popular: false,
    color: "from-blue-500 to-indigo-500",
    icon: Rocket,
    description: "Dijital dünyaya adım atan işletmeler için temel dijital pazarlama çözümleri",
    features: [
      "Temel Web Sitesi Tasarımı",
      "Google My Business Optimizasyonu", 
      "Sosyal Medya Hesap Kurulumu",
      "Temel SEO Çalışması",
      "Aylık 10 Sosyal Medya Postu",
      "Google Analytics Kurulumu",
      "Aylık Performans Raporu",
      "Email ve Telefon Desteği"
    ],
    deliverables: [
      "Modern responsive website",
      "SEO friendly yapı",
      "Sosyal medya stratejisi",
      "Temel içerik takvimi"
    ],
    timeline: "2-3 Hafta",
    support: "Email & Telefon",
    href: "/startup-paketi"
  },
  {
    id: "growth",
    name: "Büyüme Paketi",
    subtitle: "Büyüyen işletmeler için",
    price: "45.000₺",
    originalPrice: null,
    popular: true,
    color: "from-green-500 to-emerald-500",
    icon: TrendingUp,
    description: "Büyüme hedefindeki işletmeler için kapsamlı dijital pazarlama stratejileri",
    features: [
      "Profesyonel Web Sitesi",
      "Gelişmiş SEO Optimizasyonu",
      "Google Ads Kampanya Yönetimi",
      "Sosyal Medya Pazarlaması",
      "Aylık 30 Sosyal Medya Postu",
      "İçerik Pazarlaması",
      "Email Marketing Kampanyaları",
      "Haftalık Performans Raporu",
      "Rekabetçi Analiz",
      "Conversion Rate Optimizasyonu"
    ],
    deliverables: [
      "Gelişmiş e-ticaret sitesi",
      "SEO ve SEM stratejisi",
      "Sosyal medya kampanyaları",
      "Email automation sistemi"
    ],
    timeline: "3-4 Hafta",
    support: "7/24 Öncelikli Destek",
    href: "/buyume-paketi"
  },
  {
    id: "enterprise",
    name: "Kurumsal Paket",
    subtitle: "Büyük işletmeler için",
    price: "60.000₺",
    originalPrice: null,
    popular: false,
    color: "from-purple-500 to-pink-500",
    icon: Crown,
    description: "Kurumsal seviyede tam kapsamlı dijital dönüşüm ve pazarlama çözümleri",
    features: [
      "Kurumsal Web Platformu",
      "360° Dijital Pazarlama Stratejisi",
      "Çoklu Platform Reklam Yönetimi",
      "Marka Yönetimi ve PR",
      "Sınırsız İçerik Üretimi",
      "Profesyonel Ürün Çekimleri",
      "Video Prodüksiyon",
      "Günlük Performans Takibi",
      "Özel Hesap Yöneticisi",
      "Aylık Strateji Toplantıları",
      "Özel Dashboard ve Raporlama",
      "7/24 Premium Destek"
    ],
    deliverables: [
      "Kurumsal web platformu",
      "Marka kimliği tasarımı", 
      "Kapsamlı pazarlama stratejisi",
      "Özel analitik dashboard"
    ],
    timeline: "4-6 Hafta",
    support: "Özel Hesap Yöneticisi",
    href: "/kurumsal-paket"
  }
];

const additionalServices = [
  {
    title: "Ürün Fotoğrafçılığı",
    description: "Profesyonel ürün çekimleri",
    icon: Camera,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Video Prodüksiyon",
    description: "Tanıtım ve kurumsal videolar",
    icon: Video,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Marka Danışmanlığı",
    description: "Kurumsal kimlik ve strateji",
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "E-ticaret Çözümleri",
    description: "Online satış platformları",
    icon: Globe,
    color: "from-teal-500 to-cyan-500"
  }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Güvence",
    description: "Memnuniyet garantisi ve şeffaf süreç"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "5+ yıl deneyimli profesyonel kadro"
  },
  {
    icon: BarChart3,
    title: "Ölçülebilir Sonuçlar",
    description: "Veri odaklı strateji ve raporlama"
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "Zamanında proje teslimi garantisi"
  }
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm">
                💼 Dijital Pazarlama Paketleri
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                İşletmenize Özel
              </span>
              <br />
              <span className="text-white">Pazarlama Çözümleri</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Startup'tan kurumsal seviyeye, işletmenizin büyüklüğüne ve hedeflerine uygun 
              dijital pazarlama paketleri ile markanızı zirveye taşıyın.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">3</div>
                <div className="text-sm text-gray-400">Ana Paket</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">150+</div>
                <div className="text-sm text-gray-400">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">%95</div>
                <div className="text-sm text-gray-400">Memnuniyet</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative group ${pkg.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}
              >
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                  className="h-full"
                >
                  <div className={`glass rounded-3xl p-8 h-full border transition-all duration-500 relative overflow-hidden ${
                    pkg.popular 
                      ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-emerald-500/5' 
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          En Popüler
                        </span>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="relative z-10 text-center mb-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} bg-opacity-20 backdrop-blur-sm border border-white/10 mb-4`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{pkg.subtitle}</p>
                      
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-white">{pkg.price}</div>
                        <p className="text-gray-400 text-sm mt-1">/aylık</p>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">{pkg.description}</p>
                    </div>

                    {/* Features */}
                    <div className="relative z-10 mb-8">
                      <h4 className="font-semibold text-white mb-4">Paket İçeriği:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Package Details */}
                    <div className="relative z-10 mb-8 space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Teslimat Süresi:</span>
                          <span className="text-white text-sm font-medium">{pkg.timeline}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Destek:</span>
                          <span className="text-white text-sm font-medium">{pkg.support}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="relative z-10">
                      <motion.a
                        href={pkg.href}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                        }`}
                      >
                        Detayları İncele
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ek Hizmetler
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Paketlere ek olarak alabileceğiniz özel hizmetler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group-hover:scale-105">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 backdrop-blur-sm border border-white/10 mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Neden SEOTING Paketleri?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5 yıllık tecrübemiz ve kanıtlanmış başarı hikayelerimizle markanızı geleceğe taşıyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <reason.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
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
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-green-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Size Özel Paket Teklifi Alın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              İhtiyaçlarınıza özel hazırlanmış paket teklifimizi almak için bizimle iletişime geçin. 
              Ücretsiz danışmanlık hizmeti ile başlayalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 gap-2"
              >
                <Mail className="w-5 h-5" />
                Ücretsiz Teklif Al
              </motion.a>
              <motion.a
                href="tel:+905442519082"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">24 Saat</div>
                <div className="text-sm text-gray-400">İçinde Dönüş</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">Ücretsiz</div>
                <div className="text-sm text-gray-400">İlk Danışmanlık</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">%100</div>
                <div className="text-sm text-gray-400">Memnuniyet Garantisi</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
