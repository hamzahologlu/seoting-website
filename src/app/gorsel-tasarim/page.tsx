'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Brush, 
  Image, 
  Layout, 
  FileImage, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  Layers,
  Type,
  Monitor,
  Printer
} from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: "Katalog Tasarımı",
    description: "Profesyonel ürün katalogları ve broşür tasarımları"
  },
  {
    icon: Smartphone,
    title: "Sosyal Medya Görselleri",
    description: "Tüm platformlar için optimize edilmiş görsel içerikler"
  },
  {
    icon: Monitor,
    title: "Banner Tasarımı",
    description: "Web ve dijital platformlar için etkili banner tasarımları"
  },
  {
    icon: FileImage,
    title: "Infografik",
    description: "Karmaşık bilgileri görsel hikayeye dönüştürüyoruz"
  },
  {
    icon: Type,
    title: "Logo & Kurumsal Kimlik",
    description: "Markanızı yansıtan benzersiz logo ve kimlik tasarımları"
  },
  {
    icon: Printer,
    title: "Baskı Tasarımları",
    description: "Kartvizit, flyer, poster gibi basılı materyal tasarımları"
  }
];

const benefits = [
  {
    icon: Brush,
    title: "Yaratıcı Tasarım",
    description: "Özgün ve etkileyici tasarım konseptleri"
  },
  {
    icon: Layers,
    title: "Marka Uyumu",
    description: "Markanızın kimliğiyle uyumlu tasarımlar"
  },
  {
    icon: Image,
    title: "Yüksek Kalite",
    description: "Print ve dijital kullanıma uygun çözünürlük"
  },
  {
    icon: Layout,
    title: "Responsive Tasarım",
    description: "Tüm cihazlarda mükemmel görünüm"
  }
];

const designPackages = [
  {
    name: "Temel Tasarım",
    price: "3.000₺",
    period: "/aylık",
    description: "Küçük işletmeler için temel tasarım paketi",
    features: [
      "Aylık 10 sosyal medya görseli",
      "2 banner tasarımı",
      "Temel logo revizyonu",
      "48 saat teslimat",
      "2 revizyon hakkı"
    ],
    popular: false,
    color: "from-pink-500 to-purple-500"
  },
  {
    name: "Profesyonel Tasarım",
    price: "7.500₺",
    period: "/aylık",
    description: "Büyüyen işletmeler için kapsamlı tasarım paketi",
    features: [
      "Temel paketin tüm özellikleri",
      "Aylık 25 sosyal medya görseli",
      "5 banner tasarımı",
      "İnfografik tasarımı",
      "Katalog tasarımı",
      "24 saat teslimat",
      "Sınırsız revizyon"
    ],
    popular: true,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Kurumsal Tasarım",
    price: "15.000₺",
    period: "/aylık",
    description: "Büyük şirketler için premium tasarım hizmeti",
    features: [
      "Profesyonel paketin tüm özellikleri",
      "Sınırsız tasarım desteği",
      "Kurumsal kimlik çalışması",
      "Video motion graphics",
      "Packaging tasarımı",
      "Dedicated tasarımcı",
      "12 saat teslimat",
      "Brand guideline oluşturma"
    ],
    popular: false,
    color: "from-emerald-500 to-green-500"
  }
];

const designTypes = [
  { name: "Logo Tasarımı", description: "Kurumsal kimlik ve marka logoları" },
  { name: "Web Tasarımı", description: "Modern ve kullanıcı dostu arayüzler" },
  { name: "Print Tasarımı", description: "Basılı materyal tasarımları" },
  { name: "Ambalaj Tasarımı", description: "Ürün ambalaj ve etiket tasarımları" },
  { name: "İllüstrasyon", description: "Özel çizim ve illüstrasyon çalışmaları" },
  { name: "Motion Graphics", description: "Animasyonlu grafik tasarımları" }
];

const portfolio = [
  {
    title: "E-ticaret Kampanyası",
    category: "Sosyal Medya",
    description: "Modern ve çekici sosyal medya görselleri"
  },
  {
    title: "Kurumsal Kimlik",
    category: "Branding",
    description: "Tam kurumsal kimlik tasarım paketi"
  },
  {
    title: "Ürün Katalogu",
    category: "Print",
    description: "32 sayfalık profesyonel katalog tasarımı"
  }
];

export default function VisualDesignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 text-sm font-medium text-pink-300 backdrop-blur-sm mb-4">
                  🎨 Görsel Tasarım
                </span>
                <h1 className="text-5xl md:text-6xl font-black font-display mb-6">
                  <span className="gradient-text">Yaratıcı</span><br />
                  <span className="text-white">Tasarım Çözümleri</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Markanızın kimliğini yansıtan özgün tasarımlarla görsel iletişimde fark yaratın. 
                Her projede estetik ve işlevselliği harmanlıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Tasarım Teklifi Al
                  <ArrowRight size={18} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Son Projelerimiz</h3>
                <div className="space-y-4">
                  {portfolio.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{project.title}</h4>
                        <span className="text-xs px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Tasarım</span> <span className="text-white">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dijital ve basılı tüm ihtiyaçlarınız için profesyonel tasarım çözümleri sunuyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl inline-block mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Neden</span> <span className="gradient-text">SEOTING Tasarım?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl inline-block mb-4">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Tasarım</span> <span className="text-white">Paketlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İhtiyacınıza uygun tasarım paketini seçin ve markanızı güçlendirin.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {designPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${pkg.popular ? 'ring-2 ring-pink-500/50' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    En Popüler
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-2">
                    {pkg.price}<span className="text-lg text-gray-400">{pkg.period}</span>
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle2 size={16} className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 bg-gradient-to-r ${pkg.color} rounded-lg font-semibold text-white transition-all duration-300 text-center ${pkg.popular ? 'neon-glow' : ''}`}
                >
                  Paketi Seç
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Types Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-white">Tasarım</span> <span className="gradient-text">Alanlarımız</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-1">{type.name}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                <span className="gradient-text">Tasarım Projenize</span> Başlayalım
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Uzman tasarımcı ekibimizle tanışın ve markanız için yaratıcı çözümler keşfedin.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Tasarım Teklifi Al
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
