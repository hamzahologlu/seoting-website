'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Award,
  Clock,
  Shield,
  Lightbulb,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const packageFeatures = [
  {
    icon: TrendingUp,
    title: "Temel SEO Optimizasyonu",
    description: "Web sitenizin arama motorlarında görünür olması için temel SEO çalışmaları",
    details: ["Keyword research", "On-page optimization", "Meta tags düzenleme", "Site hızı optimizasyonu"]
  },
  {
    icon: Users,
    title: "2 Sosyal Medya Platformu",
    description: "Instagram ve Facebook hesaplarınızın profesyonel yönetimi",
    details: ["İçerik planlaması", "Günlük paylaşım", "Takipçi etkileşimi", "Hashtag stratejisi"]
  },
  {
    icon: BarChart3,
    title: "Aylık 20 Gönderi",
    description: "Markanıza özel hazırlanmış kaliteli sosyal medya içerikleri",
    details: ["Grafik tasarım", "Metin yazımı", "Posting zamanlaması", "İçerik çeşitliliği"]
  },
  {
    icon: Target,
    title: "Temel Analiz Raporları",
    description: "Performansınızı takip edebileceğiniz aylık raporlar",
    details: ["Traffic analizi", "Social media insights", "Engagement raporları", "ROI hesaplaması"]
  },
  {
    icon: Mail,
    title: "E-posta Desteği",
    description: "Tüm sorularınız için e-posta üzerinden profesyonel destek",
    details: ["48 saat yanıt garantisi", "Uzman danışmanlık", "Strateji önerileri", "Teknik destek"]
  }
];

const whatYouGet = [
  "Profesyonel sosyal medya hesap kurulumu",
  "Marka kimliği doğrultusunda içerik stratejisi",
  "Haftalık içerik takvimi",
  "Temel Google Analytics kurulumu",
  "Sosyal medya pixel kurulumu",
  "İlk 3 ay stratejik danışmanlık",
  "Aylık performans toplantısı (online)",
  "Acil durum müdahale desteği"
];

const idealFor = [
  {
    title: "Yeni Kurulan İşletmeler",
    description: "Dijital varlığını oluşturmaya başlayan startup'lar",
    icon: Zap
  },
  {
    title: "Küçük ve Orta Ölçekli İşletmeler",
    description: "Sınırlı bütçeyle maksimum etki yaratmak isteyen KOBİ'ler",
    icon: Target
  },
  {
    title: "E-ticaret Girişimleri",
    description: "Online satış yapmaya başlayan e-ticaret siteleri",
    icon: TrendingUp
  },
  {
    title: "Freelancer ve Profesyoneller",
    description: "Kişisel markalarını güçlendirmek isteyen uzmanlar",
    icon: Users
  }
];

const successStories = [
  {
    company: "Tech Startup",
    industry: "SaaS",
    results: [
      "3 ayda 500+ organik follower",
      "150% web sitesi trafiği artışı",
      "10+ nitelikli lead/ay"
    ],
    quote: "Startup paketimiz sayesinde pazara giriş sürecimiz çok daha hızlı oldu."
  },
  {
    company: "Butik Café",
    industry: "F&B",
    results: [
      "300+ yeni müşteri",
      "25% online sipariş artışı",
      "Local SEO'da 1. sıra"
    ],
    quote: "Sosyal medya varlığımız sayesinde müşteri sayımız ikiye katlandı."
  },
  {
    company: "Consulting Firması",
    industry: "Danışmanlık",
    results: [
      "Sektör lideri pozisyonu",
      "50+ B2B müşteri",
      "200% brand awareness artışı"
    ],
    quote: "Profesyonel görünümümüz sayesinde büyük şirketlerle çalışmaya başladık."
  }
];

const timeline = [
  {
    week: "1. Hafta",
    title: "Kurulum ve Strateji",
    tasks: ["Hesap analizleri", "Competitor research", "İçerik stratejisi", "Takvim hazırlığı"]
  },
  {
    week: "2-4. Hafta",
    title: "İçerik Üretimi",
    tasks: ["İlk gönderi serisi", "SEO optimizasyonu", "Analytics kurulumu", "Performance tracking"]
  },
  {
    week: "2. Ay",
    title: "Optimizasyon",
    tasks: ["A/B testing", "İçerik optimizasyonu", "Engagement artırma", "Trend takibi"]
  },
  {
    week: "3. Ay",
    title: "Büyüme",
    tasks: ["Strateji geliştirme", "Yeni kanallar", "Performance analizi", "Gelecek planlaması"]
  }
];

const faqs = [
  {
    question: "Startup paketi hangi sektörler için uygun?",
    answer: "Başta teknoloji, e-ticaret, danışmanlık olmak üzere tüm sektörlerdeki yeni işletmeler için uygundur. Özellikle dijital varlık oluşturmaya yeni başlayan şirketler için idealdir."
  },
  {
    question: "3 ay sonra ne olur, devam etmek zorunda mıyım?",
    answer: "Hayır, zorunluluk yoktur. 3 ay sonunda istediğiniz zaman sözleşmenizi sonlandırabilir veya başka bir pakete geçiş yapabilirsiniz."
  },
  {
    question: "İçerikleri biz de onaylıyor muyuz?",
    answer: "Evet, tüm içerikler yayınlanmadan önce onayınıza sunulur. İstediğiniz değişiklikleri yaparak onaylayabilirsiniz."
  },
  {
    question: "Ek hizmet talep edebilir miyiz?",
    answer: "Evet, paket dışında ek hizmet talep edebilirsiniz. Bu durumda ayrı fiyatlandırma yapılır ve size bildirilir."
  }
];

export default function StartupPaketiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              🚀 Dijital Başlangıç Paketi
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Startup</span><br />
              <span className="text-white">Paketi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Yeni kurulan işletmeler için özel tasarlanmış, bütçe dostu dijital pazarlama çözümü. 
              İlk adımınızı güvenle atın.
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="inline-flex items-baseline">
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  25.000₺
                </span>
                <span className="text-gray-400 ml-2 text-xl">/aylık</span>
              </div>
              <div className="text-gray-400 mt-2">3 aylık minimum süre</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Hemen Başla
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Detayları İncele
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "25K₺", label: "Aylık Sabit Fiyat", color: "text-blue-400" },
              { number: "3 Ay", label: "Minimum Süre", color: "text-cyan-400" },
              { number: "2", label: "Sosyal Medya Platformu", color: "text-green-400" },
              { number: "20", label: "Aylık Gönderi", color: "text-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>
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

      {/* Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Pakette Neler Var?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dijital varlığınızı oluşturmak için ihtiyacınız olan her şey tek pakette.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-blue-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Paketinizle Birlikte 
                <span className="gradient-text"> Ücretsiz</span> Alacaklarınız
              </h2>
              <p className="text-gray-400 mb-8">
                Startup paketi ile sadece temel hizmetleri değil, işinizi büyütecek 
                birçok ek değeri de ücretsiz olarak alıyorsunuz.
              </p>
              
              <div className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle2 size={20} className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">💎 Değer Hesabı</h3>
                <p className="text-gray-400">Bu hizmetleri ayrı ayrı alırsanız:</p>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { service: "SEO Optimizasyonu", price: "8.000₺" },
                  { service: "Sosyal Medya Yönetimi", price: "12.000₺" },
                  { service: "İçerik Üretimi", price: "6.000₺" },
                  { service: "Analytics & Raporlama", price: "3.000₺" },
                  { service: "Strateji Danışmanlığı", price: "5.000₺" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{item.service}</span>
                    <span className="text-white font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Toplam Değer:</span>
                  <span className="text-gray-400 line-through">34.000₺</span>
                </div>
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-white">Startup Paketi:</span>
                  <span className="text-green-400">25.000₺</span>
                </div>
              </div>

              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                  9.000₺ Tasarruf!
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Bu Paket Kimlere Uygun?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Startup paketi özellikle bu tür işletmeler için tasarlanmıştır.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {idealFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-4">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">3 Aylık Süreç Nasıl İşliyor?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Adım adım dijital varlığınızı oluşturma süreci.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{phase.week}</h3>
                    <p className="text-blue-400 text-sm">{phase.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle2 size={12} className="text-green-400 mr-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Startup Paketi Başarı Hikayeleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bu paketle başarıya ulaşan müşterilerimizin gerçek sonuçları.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{story.company}</h3>
                  <span className="text-blue-400 text-sm">{story.industry}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Sonuçlar:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-green-400">
                        <Star size={12} className="mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="text-gray-400 text-sm italic">
                  "{story.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Startup paketi hakkında merak edilenler.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <CheckCircle2 size={20} className="text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed ml-8">
                  {faq.answer}
                </p>
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
                Dijital Yolculuğunuzu Başlatın
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Startup paketi ile işletmenizin dijital temellerini güçlü bir şekilde atın.
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                    25.000₺
                  </div>
                  <div className="text-gray-400">aylık / 3 ay minimum</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Hemen Başlayalım
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
                <motion.a
                  href="/hizmetlerimiz"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Diğer Paketleri İncele
                </motion.a>
              </div>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +90 (544) 251 90 82
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@seoting.com
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
