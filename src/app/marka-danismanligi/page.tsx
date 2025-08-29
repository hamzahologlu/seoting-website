'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Award,
  CheckCircle2,
  ArrowRight,
  Compass,
  Eye,
  Heart,
  Star,
  Zap,
  Globe,
  Briefcase,
  PieChart
} from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: "Marka Stratejisi",
    description: "Marka konumlandırma ve stratejik yol haritası",
    features: ["Brand positioning", "Market analysis", "Competitive research", "Value proposition", "Brand architecture"]
  },
  {
    icon: Eye,
    title: "Marka Kimliği",
    description: "Görsel kimlik ve marka dili geliştirme",
    features: ["Logo design", "Visual identity", "Brand guidelines", "Typography", "Color palette"]
  },
  {
    icon: Heart,
    title: "Marka Deneyimi",
    description: "Müşteri deneyimi ve touchpoint optimizasyonu",
    features: ["Customer journey", "Touchpoint design", "Experience mapping", "Service design", "Brand activation"]
  },
  {
    icon: TrendingUp,
    title: "Marka Büyütme",
    description: "Marka değeri artırma ve büyüme stratejileri",
    features: ["Brand equity", "Portfolio strategy", "Extension planning", "Digital transformation", "Growth hacking"]
  }
];

const consulting_areas = [
  {
    title: "Marka Stratejisi Geliştirme",
    description: "Sıfırdan marka stratejisi veya mevcut stratejinin geliştirilmesi",
    benefits: ["Güçlü marka konumlandırma", "Rekabetçi avantaj", "Hedef kitle odaklılık", "Uzun vadeli vizyon"]
  },
  {
    title: "Marka Yenileme (Rebranding)",
    description: "Mevcut markanın yeniden yapılandırılması ve canlandırılması",
    benefits: ["Modern görünüm", "Pazar relevansı", "Müşteri algısı iyileştirme", "Büyüme katalizörü"]
  },
  {
    title: "Dijital Marka Dönüşümü",
    description: "Markanın dijital ekosisteme adaptasyonu",
    benefits: ["Digital-first yaklaşım", "Omnichannel deneyim", "Tech-enabled solutions", "Data-driven insights"]
  },
  {
    title: "Marka Portföy Yönetimi",
    description: "Çoklu marka stratejisi ve portföy optimizasyonu",
    benefits: ["Synergy creation", "Resource optimization", "Market coverage", "Risk mitigation"]
  }
];

const process_steps = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "Marka mevcut durumu ve pazar analizi",
    deliverables: ["Brand audit", "Market research", "Competitor analysis", "Stakeholder interviews"],
    duration: "2-3 hafta"
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Marka stratejisi ve konumlandırma geliştirme",
    deliverables: ["Brand strategy", "Positioning statement", "Value proposition", "Brand pillars"],
    duration: "2-3 hafta"
  },
  {
    step: "03",
    title: "Identity Creation",
    description: "Görsel kimlik ve marka dili oluşturma",
    deliverables: ["Visual identity", "Brand guidelines", "Asset library", "Brand voice"],
    duration: "3-4 hafta"
  },
  {
    step: "04",
    title: "Implementation Planning",
    description: "Uygulama planı ve roadmap hazırlama",
    deliverables: ["Implementation plan", "Timeline", "Budget allocation", "Success metrics"],
    duration: "1-2 hafta"
  },
  {
    step: "05",
    title: "Launch & Activation",
    description: "Marka lansmanı ve aktivasyon stratejisi",
    deliverables: ["Launch strategy", "Campaign planning", "Stakeholder training", "Go-to-market"],
    duration: "2-4 hafta"
  }
];

const case_studies = [
  {
    client: "Tech Startup",
    challenge: "Sıfırdan marka oluşturma",
    solution: "End-to-end brand development",
    results: ["50M$ valuation", "Market leader position", "95% brand recognition"],
    duration: "3 ay",
    industry: "Technology"
  },
  {
    client: "Traditional Retailer",
    challenge: "Digital transformation",
    solution: "Complete rebrand + digital strategy",
    results: ["200% online sales", "40% younger audience", "Award-winning design"],
    duration: "6 ay",
    industry: "Retail"
  },
  {
    client: "B2B Manufacturing",
    challenge: "International expansion",
    solution: "Global brand strategy",
    results: ["5 new markets", "300% lead generation", "Industry recognition"],
    duration: "4 ay",
    industry: "Manufacturing"
  }
];


const expertise_areas = [
  "B2B Brand Strategy",
  "Consumer Brands",
  "Digital-First Brands",
  "Sustainable Branding",
  "International Expansion",
  "Brand Portfolio Management",
  "Startup Branding",
  "Corporate Rebranding"
];

export default function BrandConsultingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full border border-indigo-500/30 text-sm font-medium text-indigo-300 backdrop-blur-sm mb-6">
              💡 Marka Danışmanlık Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Marka</span><br />
              <span className="text-white">Danışmanlığı</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Güçlü markalar yaratın. Stratejik marka danışmanlığı ile işletmenizin 
              pazar değerini artırın ve rekabetçi avantaj kazanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Marka Danışmanlığı Al
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Paketleri İncele
              </motion.a>
            </div>
          </motion.div>

          {/* Brand Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Marka Projesi", color: "text-indigo-400" },
              { number: "500%", label: "Ortalama Değer Artışı", color: "text-cyan-400" },
              { number: "25+", label: "Sektör Deneyimi", color: "text-purple-400" },
              { number: "98%", label: "Müşteri Memnuniyeti", color: "text-blue-400" },
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

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Danışmanlık Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stratejiden uygulama, kimlik tasarımından deneyim optimizasyonuna kapsamlı marka danışmanlığı.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <Lightbulb size={12} className="text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Danışmanlık Alanlarımız</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her işletme büyüklüğü ve sektöre özel marka danışmanlığı çözümleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {consulting_areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{area.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle2 size={14} className="text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Danışmanlık Sürecimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sistematik yaklaşımla marka dönüşümünüzü yönetiyoruz.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process_steps.map((step, index) => (
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
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="text-indigo-400 text-sm">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm text-gray-400">
                          <Star size={12} className="text-cyan-400 mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Uzmanlık Alanlarımız</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Çeşitli sektör ve marka türlerinde derin deneyim.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise_areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <Briefcase size={20} className="text-indigo-400 mx-auto mb-2" />
                <div className="text-white text-sm font-medium">{area}</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Marka Başarı Hikayeleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Danışmanlık projelerimizle elde edilen başarılı marka dönüşümleri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {case_studies.map((study, index) => (
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
                  <div className="flex flex-col items-end text-xs">
                    <span className="text-indigo-400">{study.duration}</span>
                    <span className="text-gray-500">{study.industry}</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-300 font-medium">Zorluk:</span>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-300 font-medium">Çözüm:</span>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-300 font-medium">Sonuçlar:</span>
                    <ul className="space-y-1 mt-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-green-400">
                          <TrendingUp size={12} className="mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Markanızın Gerçek Potansiyelini Ortaya Çıkarın
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Stratejik marka danışmanlığı ile işletmenizin değerini katlanır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Marka Danışmanlığı Al
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
