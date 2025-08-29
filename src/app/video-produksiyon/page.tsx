'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Video, 
  Camera, 
  Film, 
  Play, 
  Music,
  Award,
  CheckCircle2,
  ArrowRight,
  Settings,
  Zap,
  Target,
  Star,
  Clock,
  Download,
  Eye,
  Mic
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: "Ürün Tanıtım Videoları",
    description: "Ürünlerinizi en etkileyici şekilde tanıtan videolar",
    features: ["Product showcase", "Feature highlights", "Usage demonstrations", "Brand storytelling", "Call-to-action"]
  },
  {
    icon: Film,
    title: "Kurumsal Videolar",
    description: "Şirket tanıtımı ve kurumsal kimlik videoları",
    features: ["Company overview", "Team introductions", "Office tours", "Mission & vision", "Corporate culture"]
  },
  {
    icon: Camera,
    title: "Sosyal Medya Videoları",
    description: "Instagram, TikTok, YouTube için özel formatlar",
    features: ["Short-form content", "Vertical videos", "Stories content", "Reels & TikToks", "YouTube videos"]
  },
  {
    icon: Play,
    title: "Animasyon & Motion Graphics",
    description: "2D/3D animasyon ve motion graphics çözümleri",
    features: ["2D animations", "3D modeling", "Motion graphics", "Logo animations", "Explainer videos"]
  }
];

const video_types = [
  {
    title: "E-ticaret Videoları",
    description: "Online satış için optimize edilmiş ürün videoları",
    examples: ["Ürün detay videoları", "Unboxing videos", "Kullanım kılavuzları", "Karşılaştırma videoları"],
    duration: "30-90 saniye"
  },
  {
    title: "Sosyal Medya İçeriği",
    description: "Platform özel video içerikleri",
    examples: ["Instagram Reels", "TikTok videos", "YouTube Shorts", "Facebook videos"],
    duration: "15-60 saniye"
  },
  {
    title: "Reklam Videoları",
    description: "Pazarlama kampanyaları için etkili videolar",
    examples: ["TV commercials", "Digital ads", "Pre-roll ads", "Social media ads"],
    duration: "15-30 saniye"
  },
  {
    title: "Kurumsal Videolar",
    description: "Şirket ve marka tanıtım videoları",
    examples: ["Company profile", "Team videos", "Office tours", "Event coverage"],
    duration: "2-5 dakika"
  }
];

const production_process = [
  {
    step: "01",
    title: "Pre-Production",
    description: "Konsept geliştirme, senaryo yazımı ve planlama",
    tasks: ["Briefing", "Scriptwriting", "Storyboard", "Location scouting", "Casting"]
  },
  {
    step: "02",
    title: "Production",
    description: "Profesyonel ekipmanlarla video çekimi",
    tasks: ["Camera setup", "Lighting design", "Sound recording", "Direction", "Multiple takes"]
  },
  {
    step: "03",
    title: "Post-Production",
    description: "Montaj, color grading ve ses tasarımı",
    tasks: ["Video editing", "Color correction", "Sound design", "Visual effects", "Final delivery"]
  }
];

const equipment = [
  "4K Cinema Cameras",
  "Professional Lighting",
  "Stabilization Systems",
  "Drone Technology",
  "Audio Recording",
  "Green Screen Setup"
];

const packages = [
  {
    name: "Basic Video Package",
    price: "8.000₺",
    description: "Basit ürün tanıtım videosu",
    features: [
      "1 adet 30-60 sn video",
      "Stüdyo çekimi",
      "Temel montaj",
      "Background music",
      "HD kalite",
      "5 gün teslimat"
    ],
    popular: false,
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Professional Package",
    price: "18.000₺",
    description: "Kapsamlı video prodüksiyon",
    features: [
      "3 adet farklı uzunlukta video",
      "Location + studio çekim",
      "Profesyonel montaj",
      "Color grading",
      "Sound design",
      "4K kalite",
      "Sosyal medya formatları",
      "10 gün teslimat"
    ],
    popular: true,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Enterprise Package",
    price: "Özel Fiyat",
    description: "Sınırsız video içerik üretimi",
    features: [
      "Sınırsız video üretimi",
      "Özel konsept geliştirme",
      "Drone çekimi",
      "Animasyon entegrasyonu",
      "Professional actors",
      "Tüm formatlar",
      "Öncelikli teslimat",
      "Dedicated team"
    ],
    popular: false,
    color: "from-orange-500 to-red-500"
  }
];

const case_studies = [
  {
    client: "Tech Startup",
    project: "Product Launch Video",
    challenge: "Kompleks ürünü basit şekilde anlatmak",
    solution: "Animasyon destekli açıklayıcı video",
    results: ["2M+ views", "50% conversion", "Product launch success"],
    duration: "2 hafta"
  },
  {
    client: "Fashion Brand",
    project: "Seasonal Campaign",
    challenge: "Genç hedef kitleye ulaşmak",
    solution: "TikTok ve Instagram Reels serisi",
    results: ["5M+ reach", "200K engagements", "30% sales increase"],
    duration: "1 hafta"
  },
  {
    client: "Restaurant Chain",
    project: "Food Showcase",
    challenge: "Appetite appeal yaratmak",
    solution: "High-speed food videography",
    results: ["1M+ social views", "25% order increase", "Viral content"],
    duration: "3 gün"
  }
];

export default function VideoProductionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-sm font-medium text-cyan-300 backdrop-blur-sm mb-6">
              🎬 Video Prodüksiyon Hizmeti
            </span>
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Video</span><br />
              <span className="text-white">Prodüksiyon</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Markanızın hikayesini en etkili şekilde anlatan videolar üretiyoruz. 
              Ürün tanıtımından kurumsal videolara, sosyal medya içeriklerinden reklamlara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Video Projesi Başlat
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

          {/* Video Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Üretilen Video", color: "text-cyan-400" },
              { number: "100M+", label: "Toplam İzlenme", color: "text-purple-400" },
              { number: "95%", label: "Müşteri Memnuniyeti", color: "text-pink-400" },
              { number: "4K", label: "Ultra HD Kalite", color: "text-orange-400" },
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
            <h2 className="text-4xl font-bold text-white mb-4">Video Hizmetlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her ihtiyaca özel profesyonel video prodüksiyon çözümleri.
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
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-600 mb-4">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                      <Play size={12} className="text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Video Türlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Her platform ve ihtiyaç için özel video formatları.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {video_types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{type.title}</h3>
                  <div className="flex items-center text-cyan-400 text-sm">
                    <Clock size={16} className="mr-1" />
                    {type.duration}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-gray-300 text-sm">
                      <Film size={14} className="text-purple-400 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Prodüksiyon Sürecimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Konseptten teslimata kadar profesyonel video üretim süreci.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {production_process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle2 size={14} className="text-cyan-400 mr-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Profesyonel Ekipmanlarımız</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              En son teknoloji ekipmanlarla kaliteli video üretimi.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <Settings size={24} className="text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-medium">{item}</div>
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
              Video projelerimizle müşterilerimizin elde ettiği sonuçlar.
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
                  <span className="text-cyan-400 text-xs">{study.duration}</span>
                </div>
                
                <h4 className="text-purple-300 font-medium mb-2">{study.project}</h4>
                
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
                          <Star size={12} className="mr-2 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Video Prodüksiyon Paketleri</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun video üretim paketlerimiz.
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
                className={`glass rounded-3xl p-8 relative ${pkg.popular ? 'border-2 border-cyan-500' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-2 rounded-full">
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
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle2 size={16} className="text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 bg-gradient-to-r ${pkg.color} rounded-lg font-semibold text-white transition-all duration-300 text-center ${pkg.popular ? 'neon-glow' : ''}`}
                >
                  {pkg.price === "Özel Fiyat" ? "Teklif Al" : "Paketi Seç"}
                </motion.a>
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
                Markanızın Hikayesini Videoya Dönüştürün
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Profesyonel video prodüksiyon ile hedef kitlenizle duygusal bağ kurun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Video Projesi Başlat
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
