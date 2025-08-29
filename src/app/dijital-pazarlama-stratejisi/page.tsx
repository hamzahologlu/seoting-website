'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  BarChart3, 
  Search, 
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Zap,
  Globe,
  Calendar,
  Star
} from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Durum Analizi",
    description: "Mevcut dijital varlığınızı, rakiplerinizi ve hedef kitlenizi detaylı analiz ediyoruz.",
    tasks: ["Mevcut durum analizi", "Rakip analizi", "Hedef kitle araştırması", "SWOT analizi"]
  },
  {
    step: "02", 
    title: "Strateji Geliştirme",
    description: "Analiz sonuçlarına göre özel dijital pazarlama stratejinizi oluşturuyoruz.",
    tasks: ["Hedef belirleme", "KPI tanımlama", "Kanal stratejisi", "Mesaj geliştirme"]
  },
  {
    step: "03",
    title: "Uygulama Planı",
    description: "Stratejinizi hayata geçirmek için detaylı aksiyon planı hazırlıyoruz.",
    tasks: ["Timeline oluşturma", "Kaynak planlaması", "Takım organizasyonu", "Tool seçimi"]
  },
  {
    step: "04",
    title: "İzleme & Optimizasyon",
    description: "Sürekli izleme ve optimizasyon ile en iyi sonuçları alıyoruz.",
    tasks: ["Performance tracking", "A/B testing", "Sürekli optimizasyon", "Raporlama"]
  }
];

const benefits = [
  {
    icon: Target,
    title: "Hedef Odaklı Yaklaşım",
    description: "İş hedeflerinize uygun özelleştirilmiş stratejiler"
  },
  {
    icon: BarChart3,
    title: "Ölçülebilir Sonuçlar",
    description: "Tüm aktivitelerimiz ROI odaklı ve ölçülebilir"
  },
  {
    icon: TrendingUp,
    title: "Sürdürülebilir Büyüme",
    description: "Uzun vadeli ve sürdürülebilir büyüme stratejileri"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "10+ yıl deneyimli dijital pazarlama uzmanları"
  }
];

const caseStudies = [
  {
    client: "E-ticaret Platformu",
    challenge: "Düşük organik trafik ve dönüşüm oranları",
    solution: "360° dijital pazarlama stratejisi",
    results: ["450% ROI artışı", "300% trafik artışı", "85% dönüşüm artışı"],
    duration: "6 ay"
  },
  {
    client: "Teknoloji Startup'ı",
    challenge: "Sıfır marka bilinirliği",
    solution: "Go-to-market dijital stratejisi",
    results: ["0'dan 75% marka bilinirliği", "1000+ qualified lead", "$5M yatırım"],
    duration: "8 ay"
  },
  {
    client: "Fintech Şirketi",
    challenge: "Yüksek customer acquisition cost",
    solution: "Performance odaklı strateji",
    results: ["60% CAC azalması", "400K aktif kullanıcı", "85% retention"],
    duration: "12 ay"
  }
];

const packages = [
  {
    name: "Başlangıç",
    price: "15.000₺",
    duration: "1 Ay",
    description: "Temel dijital pazarlama stratejisi",
    features: [
      "Mevcut durum analizi",
      "Temel strateji belgesi",
      "Kanal önerileri",
      "3 aylık aksiyon planı",
      "1 revizyon hakkı"
    ],
    popular: false
  },
  {
    name: "Profesyonel",
    price: "35.000₺", 
    duration: "2 Ay",
    description: "Kapsamlı dijital pazarlama stratejisi",
    features: [
      "Detaylı analiz raporu",
      "360° dijital strateji",
      "Persona geliştirme",
      "12 aylık roadmap",
      "Uygulama rehberi",
      "Sınırsız revizyon",
      "3 ay danışmanlık"
    ],
    popular: true
  },
  {
    name: "Kurumsal",
    price: "Özel Fiyat",
    duration: "3+ Ay",
    description: "Enterprise seviye strateji geliştirme",
    features: [
      "Tüm Profesyonel özellikler",
      "Özel araştırma",
      "C-level sunumlar",
      "Dedicated account manager",
      "Monthly strategy sessions",
      "24/7 destek",
      "12 ay implementation"
    ],
    popular: false
  }
];

const faqs = [
  {
    question: "Dijital pazarlama stratejisi ne kadar sürede hazırlanır?",
    answer: "Projenin kapsamına göre 1-3 ay arası sürmektedir. Temel strateji 1 ay, kapsamlı strateji 2 ay içinde hazırlanır."
  },
  {
    question: "Strateji belgesi neler içerir?",
    answer: "Durum analizi, hedef kitle personas, kanal stratejileri, content planning, KPI'lar, timeline ve implementation rehberi içerir."
  },
  {
    question: "Stratejinin uygulanması dahil mi?",
    answer: "Strateji geliştirme ile implementation ayrı hizmetlerdir. Ancak paketlerde kısmi implementation desteği bulunur."
  },
  {
    question: "Hangi sektörlerde deneyimlisiniz?",
    answer: "E-ticaret, fintech, SaaS, fashion, food, automotive ve healthcare sektörlerinde geniş deneyimimiz var."
  }
];

export default function DigitalMarketingStrategyPage() {
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              🎯 Dijital Pazarlama Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Dijital Pazarlama</span><br />
              <span className="text-white">Stratejisi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Markanızın dijital dünyada başarılı olması için özel olarak tasarlanmış, 
              veri odaklı ve sonuç garantili dijital pazarlama stratejileri geliştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Ücretsiz Strateji Danışmanlığı
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

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "200+", label: "Strateji Projesi", color: "text-blue-400" },
              { number: "450%", label: "Ortalama ROI", color: "text-green-400" },
              { number: "95%", label: "Müşteri Memnuniyeti", color: "text-purple-400" },
              { number: "6 Ay", label: "Ortalama Süre", color: "text-orange-400" },
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

      {/* Process Section */}
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
              Kanıtlanmış metodolojimizle adım adım başarıya giden yolu planlıyoruz.
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="glass rounded-3xl p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center text-gray-400">
                          <CheckCircle2 size={16} className="text-green-400 mr-2 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Neden SEOTING?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Dijital pazarlama stratejisi geliştirmede fark yaratan yaklaşımımız.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Başarı Hikayeleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stratejilerimizle müşterilerimizin elde ettiği gerçek sonuçlar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{study.client}</h3>
                  <div className="flex items-center text-blue-400">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-xs">{study.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Zorluk:</h4>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Çözüm:</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Sonuçlar:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-green-400 text-sm">
                        <Star size={12} className="mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Strateji Paketleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun dijital pazarlama stratejisi paketlerimiz.
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
                className={`glass rounded-3xl p-8 relative ${pkg.popular ? 'border-2 border-blue-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">{pkg.duration}</span>
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
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold text-white transition-all duration-300 text-center ${pkg.popular ? 'neon-glow' : ''}`}
                >
                  {pkg.price === "Özel Fiyat" ? "Teklif Al" : "Paketi Seç"}
                </motion.a>
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
              Dijital pazarlama stratejisi hakkında merak edilenler.
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
                Dijital Strateji Yolculuğunuzu Başlatalım
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Ücretsiz strateji danışmanlığı ile markanızın dijital potansiyelini keşfedin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz Danışmanlık Al
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
