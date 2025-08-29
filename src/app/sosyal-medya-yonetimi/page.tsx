'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Heart,
  Award,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Camera,
  Video,
  Target,
  Zap
} from 'lucide-react';

const platforms = [
  {
    icon: Instagram,
    name: "Instagram",
    description: "Görsel içerik ve story stratejileri",
    features: ["Feed planning", "Story campaigns", "Reels production", "IGTV content", "Shopping integration"],
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Facebook,
    name: "Facebook",
    description: "Topluluk yönetimi ve reklam kampanyaları",
    features: ["Page management", "Community building", "Facebook Ads", "Event promotion", "Messenger automation"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    description: "B2B odaklı profesyonel içerik stratejisi",
    features: ["Company page", "Thought leadership", "LinkedIn Ads", "Employee advocacy", "Lead generation"],
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Twitter,
    name: "Twitter",
    description: "Güncel içerik ve trending topics",
    features: ["Real-time engagement", "Trend monitoring", "Twitter Ads", "Crisis management", "Influencer outreach"],
    color: "from-blue-400 to-blue-500"
  }
];

const services = [
  {
    icon: Camera,
    title: "İçerik Üretimi",
    description: "Markanıza özel görsel ve video içerikler",
    features: ["Fotoğraf çekimi", "Video prodüksiyon", "Grafik tasarım", "Animation", "UGC campaigns"]
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Topluluk yönetimi ve müşteri iletişimi",
    features: ["24/7 monitoring", "Customer service", "Engagement strategy", "Crisis management", "Brand reputation"]
  },
  {
    icon: Target,
    title: "Sosyal Medya Reklamları",
    description: "Hedef kitle odaklı reklam kampanyaları",
    features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads", "Remarketing campaigns"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detaylı performans analizi ve raporlama",
    features: ["Performance tracking", "Audience insights", "Competitor analysis", "ROI calculation", "Monthly reports"]
  }
];

const contentTypes = [
  "Product showcases",
  "Behind-the-scenes",
  "User-generated content",
  "Educational posts",
  "Promotional campaigns",
  "Live streams",
  "Stories & Reels",
  "Infographics",
  "Video tutorials",
  "Customer testimonials"
];

const caseStudies = [
  {
    client: "Fashion E-commerce",
    platform: "Instagram",
    challenge: "Düşük engagement ve follower sayısı",
    solution: "UGC campaign ve influencer işbirlikleri",
    results: ["500K+ followers", "15% engagement rate", "300% satış artışı"],
    duration: "6 ay"
  },
  {
    client: "SaaS Startup",
    platform: "LinkedIn",
    challenge: "B2B lead generation",
    solution: "Thought leadership ve targeted ads",
    results: ["10K qualified leads", "250% website traffic", "50% conversion rate"],
    duration: "4 ay"
  },
  {
    client: "Restaurant Chain",
    platform: "Facebook",
    challenge: "Local visibility ve foot traffic",
    solution: "Location-based campaigns",
    results: ["2M local reach", "40% reservations", "85% review rating"],
    duration: "3 ay"
  }
];


export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 text-sm font-medium text-pink-300 backdrop-blur-sm mb-6">
              📱 Sosyal Medya Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Sosyal Medya</span><br />
              <span className="text-white">Yönetimi</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Sosyal medyada güçlü bir varlık oluşturun. Profesyonel içerik üretimi, 
              topluluk yönetimi ve etkili reklam kampanyalarıyla markanızı büyütün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Sosyal Medya Danışmanlığı
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

          {/* Platform Icons */}
          <div className="flex justify-center space-x-8 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`p-4 rounded-2xl bg-gradient-to-r ${platform.color} cursor-pointer`}
              >
                <platform.icon size={32} className="text-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Yönettiğimiz Platformlar</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her platform için özel strateji ve içerik yaklaşımı geliştiriyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${platform.color} mr-4`}>
                    <platform.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                    <p className="text-gray-400">{platform.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle2 size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-4xl font-bold text-white mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sosyal medya stratejisinden içerik üretimine, topluluk yönetiminden reklamlara kadar.
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
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <Heart size={12} className="text-pink-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">İçerik Türlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her platforma uygun, markanızı öne çıkaracak çeşitli içerik türleri üretiyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-sm text-gray-300">{type}</div>
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
              Sosyal medya stratejilerimizle müşterilerimizin elde ettiği sonuçlar.
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
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">
                    {study.platform}
                  </span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-gray-300 font-medium">Zorluk:</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-medium">Çözüm:</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-300 font-medium">Sonuçlar:</h4>
                    <ul className="space-y-1">
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
                Sosyal Medyada Fark Yaratmaya Başlayın
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Profesyonel sosyal medya yönetimi ile markanızı güçlendirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Sosyal Medya Danışmanlığı Al
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
