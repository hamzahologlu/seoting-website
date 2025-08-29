'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Camera, 
  Target, 
  Palette, 
  BarChart3, 
  Video,
  Search,
  MessageCircle,
  Lightbulb,
  Megaphone,
  Eye,
  Zap
} from 'lucide-react';

const services = [
  {
    category: "Dijital Pazarlama",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        icon: Target,
        title: "Strateji Geliştirme",
        description: "Markanız için özel dijital pazarlama stratejileri oluşturuyoruz."
      },
      {
        icon: Search,
        title: "SEO & SEM",
        description: "Arama motorlarında görünürlüğünüzü maksimum seviyeye çıkarıyoruz."
      },
      {
        icon: MessageCircle,
        title: "Sosyal Medya Yönetimi",
        description: "Tüm sosyal medya platformlarında etkili varlık oluşturuyoruz."
      },
      {
        icon: BarChart3,
        title: "Analiz & Raporlama",
        description: "Detaylı analizlerle performansınızı sürekli optimize ediyoruz."
      }
    ]
  },
  {
    category: "Ürün Çekim Hizmetleri",
    icon: Camera,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        icon: Camera,
        title: "Profesyonel Ürün Fotoğrafçılığı",
        description: "Ürünlerinizi en etkileyici açılardan görselleştiriyoruz."
      },
      {
        icon: Video,
        title: "Ürün Videografi",
        description: "Dinamik ve etkileyici ürün tanıtım videoları üretiyoruz."
      },
      {
        icon: Palette,
        title: "Görsel Tasarım",
        description: "Markanızın kimliğini yansıtan yaratıcı tasarımlar geliştiriyoruz."
      },
      {
        icon: Eye,
        title: "360° Ürün Görselleştirme",
        description: "İnteraktif 360 derece ürün deneyimleri oluşturuyoruz."
      }
    ]
  }
];

const additionalServices = [
  {
    icon: Lightbulb,
    title: "Marka Danışmanlığı",
    description: "Markanızın dijital dönüşüm yolculuğunda rehberlik ediyoruz.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Megaphone,
    title: "İçerik Pazarlaması",
    description: "Hedef kitlenizi etkileyen yaratıcı içerikler üretiyoruz.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Performans Optimizasyonu",
    description: "Kampanyalarınızın ROI'sini maksimum seviyeye çıkarıyoruz.",
    color: "from-indigo-400 to-purple-500"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="grid gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (serviceIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                      <service.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ek Uzmanlık Alanlarımız</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dijital dünyada başarılı olmak için ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Uzman ekibimizle tanışın ve markanızın dijital dönüşümünü başlatalım.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
            >
              Ücretsiz Danışmanlık Al
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

