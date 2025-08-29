'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Crown,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Clock,
  Headphones,
  Calendar,
  Settings,
  Star,
  TrendingUp,
  Phone,
  Mail,
  Building
} from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: Globe,
    title: "Tam Kapsamlı Dijital Pazarlama",
    description: "Tüm dijital kanalların koordineli yönetimi",
    details: ["Multi-channel strategy", "Global campaigns", "International SEO", "Cross-platform analytics"]
  },
  {
    icon: Users,
    title: "Sınırsız Sosyal Medya Yönetimi",
    description: "Tüm platformlarda sınırsız içerik ve yönetim",
    details: ["All social platforms", "Unlimited content", "Advanced automation", "Crisis management"]
  },
  {
    icon: Target,
    title: "Özel İçerik Üretimi",
    description: "Markanıza özel sınırsız içerik üretimi",
    details: ["Unlimited photoshoots", "Video production", "3D content", "Interactive media"]
  },
  {
    icon: BarChart3,
    title: "Gerçek Zamanlı Raporlama",
    description: "Real-time dashboard ve advanced analytics",
    details: ["Real-time monitoring", "Custom dashboards", "Predictive analytics", "AI insights"]
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Dedicated team ve 7/24 teknik destek",
    details: ["Dedicated account manager", "24/7 technical support", "Emergency response", "Direct hotline"]
  },
  {
    icon: Settings,
    title: "Özel Strateji Geliştirme",
    description: "C-level stratejik danışmanlık ve planlama",
    details: ["Executive consulting", "Custom solutions", "Market analysis", "Innovation advisory"]
  }
];

const exclusiveServices = [
  {
    icon: Crown,
    title: "Executive Reporting",
    description: "C-level'a özel detaylı raporlama ve sunum"
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Marka koruma ve reputation management"
  },
  {
    icon: Zap,
    title: "Innovation Lab",
    description: "Yeni teknolojiler ve trend analizi"
  },
  {
    icon: Building,
    title: "Corporate Training",
    description: "Ekip eğitimi ve internal capability building"
  }
];

const enterpriseMetrics = [
  {
    metric: "Fortune 500 Müşteri",
    value: "25+",
    description: "Büyük şirket deneyimi",
    color: "text-blue-400"
  },
  {
    metric: "Ortalama ROI",
    value: "800%",
    description: "12 aylık periyotta",
    color: "text-green-400"
  },
  {
    metric: "Global Reach",
    value: "50+",
    description: "Ülkede operasyon",
    color: "text-purple-400"
  },
  {
    metric: "Uptime Guarantee",
    value: "99.9%",
    description: "Hizmet sürekliliği",
    color: "text-orange-400"
  }
];

const serviceLevel = [
  {
    title: "Dedicated Account Management",
    features: [
      "Senior account manager atanması",
      "Haftalık strategy meetings",
      "Quarterly business reviews",
      "Direct C-level access"
    ]
  },
  {
    title: "Premium Support Services",
    features: [
      "7/24 teknik destek",
      "1 saat emergency response",
      "Dedicated support hotline",
      "On-site consultation"
    ]
  },
  {
    title: "Advanced Analytics & Insights",
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom KPI tracking",
      "Competitive intelligence"
    ]
  },
  {
    title: "Innovation & Future Planning",
    features: [
      "Emerging tech assessment",
      "Market trend analysis",
      "Innovation roadmap",
      "Digital transformation advisory"
    ]
  }
];

const caseStudies = [
  {
    company: "Global Technology Corporation",
    industry: "Technology",
    size: "50,000+ employees",
    challenge: "Global brand consistency across 30+ markets",
    solution: "Unified global digital strategy with local adaptations",
    results: [
      "Global brand consistency achieved",
      "30% increase in brand recognition",
      "50% improvement in lead quality",
      "200% ROI on digital investments"
    ],
    timeline: "18 months",
    testimonial: "SEOTING transformed our global digital presence and delivered exceptional results across all markets."
  },
  {
    company: "International Financial Services",
    industry: "Financial Services",
    size: "10,000+ employees",
    challenge: "Complex compliance requirements across multiple jurisdictions",
    solution: "Compliance-first digital marketing approach with custom solutions",
    results: [
      "100% regulatory compliance maintained",
      "300% increase in qualified leads",
      "40% reduction in customer acquisition cost",
      "Enhanced brand trust and reputation"
    ],
    timeline: "12 months",
    testimonial: "Their expertise in navigating complex compliance while driving growth is unmatched."
  },
  {
    company: "Manufacturing Conglomerate",
    industry: "Manufacturing",
    size: "25,000+ employees",
    challenge: "Digital transformation of traditional B2B sales processes",
    solution: "Complete digital ecosystem redesign with automation",
    results: [
      "Digital transformation completed",
      "500% increase in online inquiries",
      "60% shorter sales cycles",
      "Global market expansion achieved"
    ],
    timeline: "24 months",
    testimonial: "SEOTING didn't just provide services, they became our digital transformation partner."
  }
];

const investmentBreakdown = [
  {
    component: "Strategic Consulting",
    value: "50.000₺",
    description: "C-level advisory ve strategic planning"
  },
  {
    component: "Full-Scale Execution",
    value: "75.000₺",
    description: "Tüm kanal execution ve management"
  },
  {
    component: "Advanced Technology",
    value: "25.000₺",
    description: "Premium tools ve technology stack"
  },
  {
    component: "Dedicated Team",
    value: "40.000₺",
    description: "Senior experts ve account management"
  },
  {
    component: "Premium Support",
    value: "20.000₺",
    description: "7/24 support ve emergency response"
  }
];

const faqs = [
  {
    question: "Kurumsal paket hangi büyüklükteki şirketler için uygun?",
    answer: "Genellikle 100+ çalışanlı, yıllık cirosu 50M₺+ olan ve uluslararası operasyonları bulunan şirketler için tasarlanmıştır. Ancak her şirketin ihtiyaçları farklı olduğu için özel değerlendirme yapıyoruz."
  },
  {
    question: "Minimum sözleşme süresi nedir?",
    answer: "Kurumsal paket için minimum 12 aylık sözleşme süremiz bulunmaktadır. Bu süre, büyük çaplı dijital dönüşüm projelerinin başarıyla tamamlanması için gereklidir."
  },
  {
    question: "Uluslararası operasyonları nasıl yönetiyorsunuz?",
    answer: "Global network ortaklarımız ve 15+ dilde hizmet verebilme kapasitemiz ile uluslararası projelerinizi yerel expertise ile yönetiyoruz."
  },
  {
    question: "Compliance ve güvenlik nasıl sağlanıyor?",
    answer: "GDPR, SOX, ISO27001 ve sektörel compliance gerekliliklerini tam olarak karşılıyoruz. Tüm süreçlerimiz audit edilebilir ve documented'tır."
  }
];

export default function KurumsalPaketPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 text-sm font-medium text-emerald-300 backdrop-blur-sm mb-6">
              <Crown size={16} className="mr-2" />
              Enterprise Level Solutions
            </div>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Kurumsal</span><br />
              <span className="text-white">Paket</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Büyük şirketler için tasarlanmış enterprise seviye dijital çözümler. 
              Sınırsız imkanlar, dedicated team, premium support.
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="inline-flex items-baseline">
                <span className="text-6xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Özel Fiyat
                </span>
              </div>
              <div className="text-gray-400 mt-2">İhtiyaçlarınıza göre özel fiyatlandırma</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Özel Teklif Al
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Özellikler
              </motion.a>
            </div>
          </motion.div>

          {/* Enterprise Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {enterpriseMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className={`text-3xl font-bold mb-1 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-white text-sm font-medium mb-1">
                  {metric.metric}
                </div>
                <div className="text-gray-400 text-xs">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Seviye Hizmetler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kurumsal ihtiyaçlarınıza özel tasarlanmış sınırsız dijital çözümler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-emerald-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Özel Kurumsal Hizmetler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sadece kurumsal paket müşterilerimize özel premium hizmetler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exclusiveServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Agreement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Level Agreement</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kurumsal paket ile garantili hizmet seviyeleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceLevel.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{level.title}</h3>
                <ul className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle2 size={16} className="text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Yatırım Değer Analizi</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kurumsal paketin size sağladığı değerin detayları.
            </p>
          </motion.div>

          <div className="glass rounded-3xl p-8">
            <div className="space-y-6">
              {investmentBreakdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.component}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-400">{item.value}</div>
                    <div className="text-gray-400 text-xs">değer/ay</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="border-t border-gray-600 mt-8 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">Toplam Değer</h3>
                  <p className="text-gray-400">Ayrı ayrı alırsanız aylık</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-emerald-400">210.000₺</div>
                  <div className="text-gray-400">+ setup fees</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-block px-6 py-3 bg-emerald-500/20 rounded-full">
                  <span className="text-emerald-300 font-semibold">
                    Kurumsal paket ile özel fiyatlandırma ve ek avantajlar
                  </span>
                </div>
              </div>
            </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Kurumsal Başarı Hikayeleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fortune 500 şirketleriyle gerçekleştirdiğimiz transformasyon projeleri.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Building size={24} className="text-emerald-400 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{study.industry}</span>
                          <span>•</span>
                          <span>{study.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Challenge:</h4>
                      <p className="text-gray-400 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Solution:</h4>
                      <p className="text-gray-400 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="text-sm text-emerald-400">
                      Timeline: {study.timeline}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results:</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <Star size={16} className="text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="lg:text-right h-full flex flex-col justify-center">
                      <blockquote className="text-lg italic text-gray-300 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-emerald-400 font-semibold">
                        - Executive Team
                      </div>
                    </div>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Kurumsal Paket S.S.S.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise çözümlerimiz hakkında merak edilenler.
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
                  <CheckCircle2 size={20} className="text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
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
                Enterprise Dijital Dönüşümünüzü Başlatalım
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Kurumsal paket ile şirketinizi dijital lidere dönüştürün.
              </p>
              
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                    Özel Fiyatlandırma
                  </div>
                  <div className="text-gray-400">İhtiyaçlarınıza göre özel teklif</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Özel Teklif Talep Et
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
                <motion.a
                  href="/hizmetlerimiz"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Paket Karşılaştırması
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
