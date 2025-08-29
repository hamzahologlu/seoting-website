'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  Eye,
  MousePointer,
  Clock,
  Shield
} from 'lucide-react';

const seoServices = [
  {
    icon: Search,
    title: "Teknik SEO",
    description: "Website altyapısını arama motorları için optimize ediyoruz",
    features: ["Site hızı optimizasyonu", "Mobile-first indexing", "Schema markup", "XML sitemap", "Robots.txt optimizasyonu"]
  },
  {
    icon: TrendingUp,
    title: "İçerik SEO",
    description: "Hedef anahtar kelimeler için optimize içerik stratejisi",
    features: ["Keyword research", "Content optimization", "On-page SEO", "Internal linking", "Meta optimization"]
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Yerel aramalar için Google My Business optimizasyonu",
    features: ["Google My Business", "Local citations", "Review management", "Local keyword targeting", "NAP consistency"]
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Detaylı analiz ve performans takibi",
    features: ["Google Analytics", "Search Console", "Rank tracking", "Competitor analysis", "Monthly reports"]
  }
];

const semServices = [
  {
    icon: MousePointer,
    title: "Google Ads",
    description: "Google'da hedef kitlenize ulaşın",
    features: ["Search campaigns", "Display advertising", "Shopping ads", "YouTube ads", "Performance Max"]
  },
  {
    icon: Target,
    title: "Remarketing",
    description: "Websiteni ziyaret eden kullanıcıları geri kazanın",
    features: ["Display remarketing", "Search remarketing", "Video remarketing", "Dynamic remarketing", "Custom audiences"]
  },
  {
    icon: Eye,
    title: "Social Media Ads",
    description: "Facebook, Instagram ve LinkedIn reklamları",
    features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads", "TikTok Ads"]
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description: "Dönüşüm oranlarınızı artırın",
    features: ["Landing page optimization", "A/B testing", "Funnel analysis", "CRO strategy", "UX improvements"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "SEO Audit",
    description: "Mevcut website durumunu detaylı analiz ediyoruz",
    duration: "1 hafta"
  },
  {
    step: "02", 
    title: "Keyword Research",
    description: "Hedef anahtar kelimeleri belirliyoruz",
    duration: "1 hafta"
  },
  {
    step: "03",
    title: "Teknik Optimizasyon",
    description: "Website'in teknik SEO'sunu geliştiriyoruz",
    duration: "2-4 hafta"
  },
  {
    step: "04",
    title: "İçerik Optimizasyonu",
    description: "Mevcut ve yeni içerikleri optimize ediyoruz",
    duration: "Sürekli"
  },
  {
    step: "05",
    title: "Link Building",
    description: "Kaliteli backlink'ler kazanıyoruz",
    duration: "Sürekli"
  },
  {
    step: "06",
    title: "Monitoring & Reporting",
    description: "Performansı izliyor ve raporluyoruz",
    duration: "Aylık"
  }
];

const results = [
  {
    metric: "Organik Trafik",
    before: "10K/ay",
    after: "45K/ay",
    improvement: "+350%",
    color: "text-green-400"
  },
  {
    metric: "Anahtar Kelime",
    before: "50 rank",
    after: "350 rank",
    improvement: "+600%",
    color: "text-blue-400"
  },
  {
    metric: "Dönüşüm Oranı",
    before: "1.2%",
    after: "3.8%",
    improvement: "+217%",
    color: "text-purple-400"
  },
  {
    metric: "ROAS",
    before: "2.1x",
    after: "5.8x",
    improvement: "+176%",
    color: "text-orange-400"
  }
];



const faqs = [
  {
    question: "SEO sonuçları ne kadar sürede görülür?",
    answer: "İlk sonuçlar 3-6 ay içinde görülmeye başlar. Tam potansiyele ulaşmak genellikle 6-12 ay sürer."
  },
  {
    question: "Google Ads bütçesi nasıl belirlenir?",
    answer: "Sektör, rekabet, hedef kelimeler ve beklenen sonuçlara göre özel bütçe önerisi hazırlarız."
  },
  {
    question: "SEO garantisi veriliyor mu?",
    answer: "Belirli anahtar kelimeler için sıralama garantisi vermiyoruz ancak genel performans artışı garantisi veriyoruz."
  },
  {
    question: "Hangi raporlar sağlanır?",
    answer: "Aylık trafik, sıralama, dönüşüm, Google Ads performans ve ROI raporları sağlıyoruz."
  }
];

export default function SEOSEMPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-6">
              🔍 Arama Motoru Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">SEO & SEM</span><br />
              <span className="text-white">Hizmetleri</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Google'da üst sıralarda görünün. Organik SEO ve Google Ads ile 
              hedef kitlenize ulaşın, trafiğinizi ve satışlarınızı artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Ücretsiz SEO Analizi
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

          {/* Results Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-2xl p-6"
              >
                <div className="text-sm text-gray-400 mb-1">{result.metric}</div>
                <div className={`text-2xl font-bold mb-1 ${result.color}`}>
                  {result.improvement}
                </div>
                <div className="text-xs text-gray-500">
                  {result.before} → {result.after}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">SEO Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Arama motorlarında organik olarak üst sıralarda yer almanız için kapsamlı SEO hizmetleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEM Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">SEM & PPC Hizmetleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Google Ads ve sosyal medya reklamları ile hemen görünür olun ve hedef kitlenize ulaşın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {semServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <CheckCircle2 size={12} className="text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">SEO Sürecimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kanıtlanmış metodolojimiz ile adım adım SEO başarısına ulaşın.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass rounded-2xl p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="flex items-center text-green-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-black"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              SEO ve SEM hizmetleri hakkında merak edilenler.
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
                  <CheckCircle2 size={20} className="text-green-400 mr-3 flex-shrink-0 mt-0.5" />
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
                Google'da Görünür Olmaya Başlayın
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Ücretsiz SEO analizi ile web sitenizin potansiyelini keşfedin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Ücretsiz SEO Analizi Al
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
