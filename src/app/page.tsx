'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
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
  MapPin,
  Heart,
  Lightbulb,
  BarChart3,
  Search,
  MessageCircle,
  Video,
  Palette,
  Monitor,
  Gauge,
  Rocket,
  Crown,
  Check,
  BookOpen,
  Eye,
  Calendar
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
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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

const packages = [
  {
    id: "startup",
    name: "Startup Paketi",
    subtitle: "Yeni başlayanlar için",
    price: "25.000₺",
    popular: false,
    color: "from-blue-500 to-indigo-500",
    icon: Rocket,
    description: "Dijital dünyaya adım atan işletmeler için temel dijital pazarlama çözümleri",
    features: [
      "Temel Web Sitesi Tasarımı",
      "Google My Business Optimizasyonu", 
      "Sosyal Medya Hesap Kurulumu",
      "Temel SEO Çalışması",
      "Aylık 10 Sosyal Medya Postu"
    ],
    timeline: "2-3 Hafta",
    href: "/startup-paketi"
  },
  {
    id: "growth",
    name: "Büyüme Paketi",
    subtitle: "Büyüyen işletmeler için",
    price: "45.000₺",
    popular: true,
    color: "from-green-500 to-emerald-500",
    icon: TrendingUp,
    description: "Büyüme hedefindeki işletmeler için kapsamlı dijital pazarlama stratejileri",
    features: [
      "Profesyonel Web Sitesi",
      "Gelişmiş SEO Optimizasyonu",
      "Google Ads Kampanya Yönetimi",
      "Sosyal Medya Pazarlaması",
      "İçerik Pazarlaması"
    ],
    timeline: "3-4 Hafta",
    href: "/buyume-paketi"
  },
  {
    id: "enterprise",
    name: "Kurumsal Paket",
    subtitle: "Büyük işletmeler için",
    price: "60.000₺",
    popular: false,
    color: "from-purple-500 to-pink-500",
    icon: Crown,
    description: "Kurumsal düzeyde kapsamlı dijital transformation çözümleri",
    features: [
      "Kurumsal Web Platformu",
      "360° Dijital Pazarlama",
      "CRM Entegrasyonu",
      "Özel Analiz Dashboard'u",
      "Dedicated Account Manager"
    ],
    timeline: "4-6 Hafta",
    href: "/kurumsal-paket"
  }
];

const featuredBlogPosts = [
  {
    id: 1,
    title: "2024'te E-ticaret Patlaması: 15 Dakikada Milyonluk Satış Sırrı",
    excerpt: "Bir gecede viral olan e-ticaret mağazalarının 7 gizli stratejisi.",
    category: "E-ticaret",
    readTime: "8 dakika",
    publishDate: "15 Aralık 2024",
    views: 12547,
    slug: "eticaret-patlamasi-2024-milyonluk-satis-sirri",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Instagram'da 1 Gecede 50K Takipçi Kazanan Viral Loop Formülü",
    excerpt: "Sosyal medya algoritmasını hackleyen 9 teknik.",
    category: "Sosyal Medya",
    readTime: "6 dakika",
    publishDate: "12 Aralık 2024",
    views: 8923,
    slug: "instagram-viral-loop-formulu-50k-takipci",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "ChatGPT'nin %95'inin Bilmediği 27 Gizli Komut",
    excerpt: "OpenAI belgelerinde yazmayan uzman komutları.",
    category: "AI & Teknoloji",
    readTime: "12 dakika",
    publishDate: "5 Aralık 2024",
    views: 22156,
    slug: "chatgpt-gizli-komutlar-icerik-uretimi",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData type="localbusiness" />
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
            <h1 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Dijital Dünyada Fark Yaratan Ekip</span>
            </h1>
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

      {/* İstanbul Odaklı Bölüm */}
      <section className="py-24 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
              🏆 İstanbul'un #1 Dijital Pazarlama Ajansı
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">İstanbul'da Dijital Pazarlama Lideri</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Başakşehir merkezli SEOTING olarak, İstanbul'un 39 ilçesinde 500+ mutlu müşteriye hizmet veriyoruz. 
              İstanbul'un dinamik pazarında markanızı zirveye taşıyacak uzman ekibimizle tanışın.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">İstanbul'da Neden SEOTING?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Başakşehir Merkez</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        İkitelli Organize Sanayi Bölgesi'nde stratejik konumumuzla İstanbul'un her bölgesine hızlı ulaşım
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-white/10">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">500+ Mutlu Müşteri</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        İstanbul'un farklı bölgelerinden müşterilerimizin %98'i memnuniyet oranı
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-white/10">
                      <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">5 Yıllık Deneyim</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        İstanbul pazarında 5 yıllık deneyimimizle yerel ve ulusal projelerde başarı
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">İstanbul'a Özel Hizmetler</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">39</div>
                    <div className="text-sm text-gray-300">İlçe Kapsamı</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-300">Destek</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-purple-400 mb-1">%300</div>
                    <div className="text-sm text-gray-300">Ortalama ROI</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">1. Sıra</div>
                    <div className="text-sm text-gray-300">Hedef</div>
                  </div>
                </div>

                <motion.a
                  href="/istanbul-dijital-pazarlama"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  İstanbul Hizmetlerimizi Keşfedin
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
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

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-6">
              💼 Paketlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Size Özel Çözümler</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özel olarak tasarlanmış dijital pazarlama paketleri
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.a
                  href={pkg.href}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                  className="block h-full"
                >
                  <div className={`glass rounded-3xl p-8 h-full border ${pkg.popular ? 'border-green-500/30 ring-2 ring-green-500/20' : 'border-white/10'} hover:border-white/20 transition-all duration-500 relative overflow-hidden`}>
                    {pkg.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Popüler
                      </div>
                    )}
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pkg.color} bg-opacity-20 backdrop-blur-sm border border-white/10 mb-6`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">{pkg.subtitle}</p>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                          <span className="text-gray-400 text-sm">/ proje</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {pkg.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Teslim Süresi:</span>
                          <span className="text-white font-medium">{pkg.timeline}</span>
                        </div>
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
            <motion.a
              href="/paketler"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
            >
              <Crown className="w-5 h-5" />
              Tüm Paketleri Karşılaştır
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 text-sm font-medium text-orange-300 backdrop-blur-sm mb-6">
              📝 SEOTING Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Viral İçerikler</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dijital pazarlama dünyasının en güncel trendleri ve tıklanma rekorları kıran stratejiler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredBlogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={`/blog/${post.slug}`}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
                  className="block h-full"
                >
                  <div className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        🔥 Viral
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{(post.views / 1000).toFixed(1)}K</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{post.publishDate}</span>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </motion.article>
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
              href="/blog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Tüm Blog Yazılarını Keşfet
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