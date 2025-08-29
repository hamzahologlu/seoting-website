'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Camera, 
  Target,
  Users,
  Award,
  Globe,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  Clock,
  Heart,
  Lightbulb,
  BarChart3,
  Search,
  MessageCircle,
  Video,
  Palette,
  Monitor,
  Gauge
} from 'lucide-react';

const quickServices = [
  {
    icon: TrendingUp,
    title: "Dijital Pazarlama Stratejisi",
    description: "Veri odaklı dijital pazarlama stratejileri ile markanızı büyütün",
    features: ["Strateji Geliştirme", "Pazar Analizi", "ROI Optimizasyonu", "KPI Tracking"],
    color: "from-blue-500 to-purple-500",
    href: "/dijital-pazarlama-stratejisi"
  },
  {
    icon: TrendingUp,
    title: "SEO & SEM Hizmetleri",
    description: "Google'da üst sıralarda görünün, organik ve ücretli trafik artırın",
    features: ["Teknik SEO", "Google Ads", "Local SEO", "Analytics"],
    color: "from-green-500 to-blue-500",
    href: "/seo-sem-hizmetleri"
  },
  {
    icon: Camera,
    title: "Ürün Fotoğrafçılığı",
    description: "Profesyonel ürün çekimleri ile satışlarınızı artırın",
    features: ["Stüdyo Çekim", "Lifestyle Çekim", "360° Çekim", "Retuş"],
    color: "from-purple-500 to-pink-500",
    href: "/urun-fotografciligi"
  },
  {
    icon: Target,
    title: "Marka Danışmanlığı",
    description: "Güçlü marka kimliği oluşturun ve pazarda fark yaratın",
    features: ["Marka Stratejisi", "Logo Tasarım", "Kurumsal Kimlik", "Marka Rehberi"],
    color: "from-orange-500 to-red-500",
    href: "/marka-danismanligi"
  }
];

const stats = [
  { icon: Users, number: "150+", label: "Mutlu Müşteri", color: "text-blue-400" },
  { icon: Award, number: "500+", label: "Tamamlanan Proje", color: "text-green-400" },
  { icon: Globe, number: "50+", label: "Aktif Website", color: "text-purple-400" },
  { icon: TrendingUp, number: "%95", label: "Müşteri Memnuniyeti", color: "text-pink-400" }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "5 yıllık tecrübemizle güvenilir ve kaliteli hizmet sunuyoruz."
  },
  {
    icon: Heart,
    title: "Müşteri Odaklı",
    description: "Her projeyi müşteri memnuniyetini ön planda tutarak gerçekleştiriyoruz."
  },
  {
    icon: Lightbulb,
    title: "Yaratıcı Çözümler",
    description: "İnovatif ve yaratıcı yaklaşımlarla markanızı öne çıkarıyoruz."
  },
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Projelerimizi zamanında ve kaliteli şekilde teslim ediyoruz."
  }
];

const testimonials = [
  {
    name: "Mehmet Yılmaz",
    company: "TechStart A.Ş.",
    comment: "SEOTING ile çalışmak harika bir deneyimdi. SEO çalışmaları sayesinde organic trafiğimiz %300 arttı.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ayşe Kaya",
    company: "BeautyWorld",
    comment: "Ürün çekimleri mükemmeldi. E-ticaret satışlarımız çekimlerden sonra ikiye katlandı.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Can Demir",
    company: "İnnovateTech",
    comment: "Dijital pazarlama stratejileri sayesinde yeni müşteriler kazanmaya başladık. Teşekkürler SEOTING!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }
];

const industries = [
  { icon: Target, name: "E-ticaret", description: "Online satış platformları" },
  { icon: Heart, name: "Sağlık", description: "Medikal ve wellness" },
  { icon: Lightbulb, name: "Teknoloji", description: "Yazılım ve donanım" },
  { icon: Camera, name: "Moda", description: "Giyim ve aksesuar" },
  { icon: Globe, name: "Turizm", description: "Otel ve seyahat" },
  { icon: Users, name: "Eğitim", description: "Kurumsal eğitim" }
];

const allServices = [
  { icon: MessageCircle, name: "Sosyal Medya", description: "Platform yönetimi ve içerik" },
  { icon: BarChart3, name: "Analiz & Raporlama", description: "Performans takibi ve analiz" },
  { icon: Video, name: "Video Prodüksiyon", description: "Kurumsal ve tanıtım videoları" },
  { icon: Palette, name: "Grafik Tasarım", description: "Yaratıcı tasarım çözümleri" },
  { icon: Target, name: "Strateji", description: "Dijital pazarlama planlaması" },
  { icon: Globe, name: "Web Tasarım", description: "Modern ve responsive siteler" }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              🚀 Hakkımızda
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Dijital Dünyada Fark Yaratan Ekip</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              İstanbul merkezli SEOTING olarak, 2019'dan beri dijital pazarlama ve görsel çözümler alanında 
              Türkiye'nin önde gelen firmalarına hizmet veriyoruz. Yaratıcılık ve teknoloji expertise'imizi 
              birleştirerek markanızı dijital dünyada zirveye taşıyoruz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "5+", label: "Yıl Tecrübe" },
                    { number: "150+", label: "Mutlu Müşteri" },
                    { number: "500+", label: "Proje" },
                    { number: "%95", label: "Memnuniyet" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Dijital Expertise", desc: "En güncel dijital pazarlama stratejileri" },
                    { title: "Yaratıcı Tasarım", desc: "Görsel mükemmellik ve estetik anlayış" },
                    { title: "Veri Odaklı", desc: "Measurable sonuçlar ve ROI optimizasyonu" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative glass rounded-3xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Neden SEOTING?</h3>
                  <div className="space-y-6">
                    {whyChooseUs.map((reason, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                          <reason.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{reason.title}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-6">
              ⭐ Ana Hizmetler
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Dijital Başarınız İçin</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Markanızı dijital dünyada öne çıkaracak kapsamlı hizmet portföyümüz
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={service.href}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                  className="block h-full"
                >
                  <div className="glass rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 backdrop-blur-sm border border-white/10 mb-6`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Detayları İncele</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center glass rounded-2xl p-6 border border-white/10"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm mb-6">
              💬 Müşteri Yorumları
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Müşterilerimiz Ne Diyor?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
                    }}
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-sm font-medium text-orange-300 backdrop-blur-sm mb-6">
              🏭 Sektörler
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Hizmet Verdiğimiz Sektörler</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Farklı sektörlerden müşterilerimize özel çözümler sunuyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group hover:scale-105"
              >
                <industry.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Digital Services */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-sm font-medium text-cyan-300 backdrop-blur-sm mb-6">
              🌟 Tüm Hizmetler
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Dijital Dünyada Tek Durak</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İhtiyacınız olan tüm dijital pazarlama hizmetleri tek çatı altında
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
              >
                <service.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="/hizmetlerimiz"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
            >
              <Globe className="w-5 h-5" />
              Tüm Hizmetleri Keşfet
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section id="tools" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              🛠️ Ücretsiz Dijital Araçlar
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Profesyonel SEO Araçları</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Web sitenizin performansını analiz edin, anahtar kelime araştırması yapın ve Google sıralama durumunuzu takip edin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Google Sıra Bulucu",
                description: "Web sitenizin Google'daki sırasını gerçek zamanlı kontrol edin",
                features: ["Gerçek Google API", "Mobil & Masaüstü", "Ülke Bazlı Analiz", "Anlık Sonuçlar"],
                color: "from-green-500 to-teal-500",
                href: "/google-sira-bulucu",
                badge: "API Aktif"
              },
              {
                icon: Search,
                title: "Anahtar Kelime Analizi",
                description: "DataForSEO ile profesyonel anahtar kelime araştırması yapın",
                features: ["Arama Hacmi", "Rekabet Analizi", "CPC Verileri", "Trend Takibi"],
                color: "from-blue-500 to-indigo-500", 
                href: "/anahtar-kelime-analizi",
                badge: "Canlı Veriler"
              },
              {
                icon: Gauge,
                title: "Sayfa Hızı Testi",
                description: "Google PageSpeed Insights ile performans analizi yapın",
                features: ["Core Web Vitals", "Optimizasyon Önerileri", "Mobil & Masaüstü", "Detaylı Rapor"],
                color: "from-purple-500 to-pink-500",
                href: "/sayfa-hizi-testi", 
                badge: "PageSpeed API"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={tool.href}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                  className="block h-full"
                >
                  <div className="glass rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} bg-opacity-20 backdrop-blur-sm border border-white/10`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {tool.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {tool.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>Şimdi Test Et</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="/araclar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
            >
              <Monitor className="w-5 h-5" />
              Tüm Araçları Keşfet
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                <span className="gradient-text">Projenizi Başlatalım</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Dijital dünyada fark yaratacak projenizi hayata geçirmek için 
                İstanbul'daki uzman ekibimizle tanışın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Proje Başlat
                  <ArrowRight className="ml-2" size={20} />
                </motion.a>
                
                <motion.a
                  href="/hakkimizda"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Ekibimizi Tanıyın
                </motion.a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text mb-1">24 Saat</div>
                  <div className="text-gray-400 text-sm">İçinde Dönüş</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text mb-1">Ücretsiz</div>
                  <div className="text-gray-400 text-sm">İlk Danışmanlık</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold gradient-text mb-1">%100</div>
                  <div className="text-gray-400 text-sm">Memnuniyet Garantisi</div>
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