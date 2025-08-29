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
  Quote,
  Play,
  Zap,
  Shield,
  Clock,
  Heart,
  Lightbulb,
  BarChart3,
  Search,
  MessageCircle,
  Video,
  Palette
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
    description: "Ürünlerinizi en etkileyici şekilde görselleştirin",
    features: ["Stüdyo Çekim", "Lifestyle Fotoğraf", "360° Görüntü", "Post-Production"],
    color: "from-orange-500 to-red-500",
    href: "/urun-fotografciligi"
  }
];

const stats = [
  { icon: TrendingUp, number: "500+", label: "Başarılı Proje", color: "text-blue-400" },
  { icon: Users, number: "50+", label: "Mutlu Müşteri", color: "text-green-400" },
  { icon: Award, number: "25+", label: "Kazanılan Ödül", color: "text-yellow-400" },
  { icon: Globe, number: "15+", label: "Ülkede Hizmet", color: "text-purple-400" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Güven ve Güvenilirlik",
    description: "2019'dan beri 50+ şirketin güvendiği dijital partner'ı"
  },
  {
    icon: Zap,
    title: "Hızlı Sonuçlar",
    description: "İlk 3 ayda görünür sonuçlar, 6 ayda hedeflenen ROI"
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description: "7/24 destek, dedicated hesap yöneticisi"
  },
  {
    icon: Lightbulb,
    title: "İnovatif Çözümler",
    description: "En son teknolojiler ve yaratıcı stratejiler"
  }
];

const testimonials = [
  {
    quote: "SEOTING ile çalışmaya başladıktan sonra online satışlarımız 3 kat arttı. Profesyonel yaklaşımları ve sonuç odaklı çalışmaları bizi çok etkiledi.",
    author: "Ahmet Yılmaz",
    position: "CEO",
    company: "TechStart Yazılım",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5
  },
  {
    quote: "Dijital pazarlama konusunda sıfırdan başladık. SEOTING ekibi bizi adım adım yönlendirdi ve harika sonuçlar aldık. Artık sektörümüzde lider durumdayız.",
    author: "Zeynep Kaya",
    position: "Pazarlama Müdürü", 
    company: "EcoLife Kozmetik",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5
  },
  {
    quote: "Uluslararası pazarlara açılım sürecimizde SEOTING'in desteği çok değerliydi. Global SEO stratejileri sayesinde 15 ülkede satış yapıyoruz.",
    author: "Mehmet Öz",
    position: "İhracat Müdürü",
    company: "GlobalTrade Ltd.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
    rating: 5
  }
];



const industries = [
  { name: "E-ticaret", count: "150+", icon: "🛒" },
  { name: "SaaS & Teknoloji", count: "80+", icon: "💻" },
  { name: "Sağlık & Wellness", count: "45+", icon: "🏥" },
  { name: "Eğitim", count: "35+", icon: "🎓" },
  { name: "Fintech", count: "25+", icon: "💳" },
  { name: "Gayrimenkul", count: "40+", icon: "🏢" },
  { name: "Turizm", count: "30+", icon: "✈️" },
  { name: "Fashion & Moda", count: "55+", icon: "👗" }
];

const allServices = [
  { icon: Search, name: "SEO & SEM", description: "Arama motoru optimizasyonu" },
  { icon: MessageCircle, name: "Sosyal Medya", description: "Platform yönetimi ve içerik" },
  { icon: Camera, name: "Ürün Çekimi", description: "Profesyonel fotoğrafçılık" },
  { icon: Video, name: "Video Prodüksiyon", description: "Kurumsal ve tanıtım videoları" },
  { icon: Palette, name: "Grafik Tasarım", description: "Yaratıcı tasarım çözümleri" },
  { icon: BarChart3, name: "Analytics", description: "Veri analizi ve raporlama" },
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-4">
                  🏢 SEOTING Hakkında
                </span>
                <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                  <span className="gradient-text">Dijital Dünyada</span><br />
                  <span className="text-white">Fark Yaratıyoruz</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
                <p>
                  <strong className="text-white">2019 yılında kurulan SEOTING</strong>, İstanbul merkezli 
                  dijital pazarlama ajansı olarak Türkiye'nin önde gelen şirketlerine 
                  danışmanlık hizmeti vermektedir.
                </p>
                <p>
                  <span className="text-primary-400 font-semibold">50+ uzman ekibimiz</span> ile 
                  dijital pazarlama ve ürün çekim hizmetlerinde sektör öncüsüyüz. 
                  Fortune 500 şirketlerinden startup'lara kadar geniş bir müşteri portföyüne sahibiz.
                </p>
                <p>
                  Her proje bizim için <span className="text-accent-400 font-semibold">yeni bir başarı hikayesi</span>. 
                  Müşterilerimizin hedeflerine ulaşması için yaratıcı çözümler ve 
                  teknolojik yenilikler sunuyoruz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/hakkimizda"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Daha Fazla Bilgi
                  <ArrowRight className="ml-2" size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Stats & Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Key Stats */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Başarılarımız</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "500+", label: "Başarılı Proje", color: "text-blue-400" },
                    { number: "50+", label: "Mutlu Müşteri", color: "text-green-400" },
                    { number: "5+", label: "Yıl Deneyim", color: "text-purple-400" },
                    { number: "300%", label: "Ortalama ROI", color: "text-orange-400" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: "Hedef Odaklı Yaklaşım",
                    description: "Her projeyi müşterinin hedeflerine odaklanarak yürütüyoruz."
                  },
                  {
                    icon: Users,
                    title: "Uzman Ekip",
                    description: "Alanında deneyimli 50+ profesyonelden oluşan güçlü ekip."
                  },
                  {
                    icon: Award,
                    title: "Sektör Öncüsü",
                    description: "Türkiye'nin en prestijli pazarlama ödüllerinin sahibi."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 glass rounded-2xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex-shrink-0">
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black font-display mb-6">
              <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dijital pazarlama ve görsel içerik üretiminde Türkiye'nin en kapsamlı 
              hizmet portföyü ile markanızı zirveye taşıyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={service.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-lg font-semibold text-white transition-all duration-300"
                >
                  Detayları Gör
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 mb-4">
                  <stat.icon size={24} className={stat.color} />
                </div>
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

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm mb-6">
              💎 Neden SEOTING?
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Fark Yaratan</span><br />
              <span className="text-white">Yaklaşımımız</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              5 yıllık deneyimimiz ve kanıtlanmış metodolojimizle işletmenizi dijital lidere dönüştürüyoruz.
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
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                  <reason.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 text-sm font-medium text-yellow-300 backdrop-blur-sm mb-6">
              💬 Müşteri Görüşleri
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Müşterilerimiz</span><br />
              <span className="text-white">Ne Diyor?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="24" fill="#374151"/>
                          <circle cx="24" cy="20" r="6" fill="#9CA3AF"/>
                          <path d="M8 38c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#9CA3AF"/>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    <div className="text-yellow-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Hizmet Verdiğimiz</span><br />
              <span className="text-white">Sektörler</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Farklı sektörlerden 500+ projeyle edindiğimiz deneyim.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{industry.name}</div>
                <div className="text-primary-400 text-xs">{industry.count} proje</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Tüm Dijital</span><br />
              <span className="text-white">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A'dan Z'ye dijital pazarlama ve içerik üretimi çözümleri.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 mb-3">
                  <service.icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{service.name}</h3>
                <p className="text-gray-400 text-xs">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="/hizmetlerimiz"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
            >
              Tüm Hizmetleri Keşfet
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </div>
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
