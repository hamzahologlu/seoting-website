'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Play, 
  TrendingUp, 
  Users, 
  Award,
  ArrowRight,
  Camera,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "E-Ticaret Devi Dijital Dönüşümü",
    category: "Dijital Pazarlama",
    client: "Fortune 500 Şirketi",
    description: "Türkiye'nin önde gelen e-ticaret platformu için kapsamlı dijital pazarlama stratejisi ve uygulama.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    results: [
      { metric: "ROI Artışı", value: "450%" },
      { metric: "Trafik Artışı", value: "300%" },
      { metric: "Dönüşüm Oranı", value: "85%" }
    ],
    tags: ["SEO", "SEM", "Sosyal Medya", "Analitik"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Lüks Marka Ürün Çekim Kampanyası",
    category: "Ürün Çekimi",
    client: "Lüks Aksesuar Markası",
    description: "Premium mücevher koleksiyonu için 360° ürün çekimi ve interaktif katalog üretimi.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    results: [
      { metric: "Görüntüleme", value: "2.5M+" },
      { metric: "Etkileşim Oranı", value: "12.5%" },
      { metric: "Satış Artışı", value: "200%" }
    ],
    tags: ["Ürün Fotoğrafı", "360° Çekim", "Video", "Retouching"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Teknoloji Startup'ı Marka Lansmanı",
    category: "Dijital Pazarlama",
    client: "Tech Startup",
    description: "Yenilikçi teknoloji startup'ı için sıfırdan marka kimliği ve dijital pazarlama stratejisi.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    results: [
      { metric: "Marka Bilinirliği", value: "0-75%" },
      { metric: "Lead Generation", value: "1000+" },
      { metric: "Yatırım Çekme", value: "$5M" }
    ],
    tags: ["Marka Kimliği", "Content Marketing", "PR", "Influencer"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Restoran Zinciri Görsel İçerik",
    category: "Ürün Çekimi",
    client: "Restoran Zinciri",
    description: "Ulusal restoran zinciri için menü fotoğrafları ve tanıtım videoları üretimi.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    results: [
      { metric: "Sipariş Artışı", value: "180%" },
      { metric: "Sosyal Medya Takipçi", value: "500K+" },
      { metric: "Mağaza Ziyareti", value: "250%" }
    ],
    tags: ["Food Photography", "Video Production", "Social Media"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Fintech Uygulaması Pazarlama",
    category: "Dijital Pazarlama",
    client: "Fintech Şirketi",
    description: "Mobil ödeme uygulaması için kullanıcı kazanım ve retention kampanyaları.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    results: [
      { metric: "Uygulama İndirme", value: "1M+" },
      { metric: "Aktif Kullanıcı", value: "400K" },
      { metric: "Retention Rate", value: "85%" }
    ],
    tags: ["App Marketing", "Performance Marketing", "UX/UI"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Moda Markası Sezon Koleksiyonu",
    category: "Ürün Çekimi",
    client: "Fashion Brand",
    description: "Yeni sezon koleksiyonu için lookbook çekimi ve moda filmi üretimi.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    results: [
      { metric: "Koleksiyon Satışı", value: "95%" },
      { metric: "Marka Değeri Artışı", value: "150%" },
      { metric: "Medya Yansıması", value: "50+" }
    ],
    tags: ["Fashion Photography", "Lookbook", "Video Campaign"],
    color: "from-pink-500 to-rose-500"
  }
];

const categories = ["Tümü", "Dijital Pazarlama", "Ürün Çekimi"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "Tümü" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black font-display mb-6">
            <span className="gradient-text">Portföyümüz</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin önde gelen markalarıyla gerçekleştirdiğimiz başarı hikayeleri. 
            Her proje, dijital dünyada fark yaratmanın kanıtı.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-white/5 rounded-full p-2 backdrop-blur-sm border border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-content')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-content absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center';
                      fallback.innerHTML = `
                        <div class="text-center">
                          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <p class="text-white font-medium">${item.client}</p>
                          <p class="text-gray-300 text-sm">${item.category}</p>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Play size={20} className="text-white" />
                    </button>
                    <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{item.client}</span>
                  <div className="flex items-center text-yellow-400">
                    <Award size={16} className="mr-1" />
                    <span className="text-xs">Ödüllü</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {item.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-500">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action */}
                <button className="flex items-center text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium">
                  Detayları Gör
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: TrendingUp, number: "500+", label: "Tamamlanan Proje", color: "text-blue-400" },
            { icon: Users, number: "50+", label: "Mutlu Müşteri", color: "text-green-400" },
            { icon: Award, number: "25+", label: "Kazanılan Ödül", color: "text-yellow-400" },
            { icon: BarChart3, number: "300%", label: "Ortalama ROI", color: "text-purple-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass rounded-2xl p-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 mb-4">
                <stat.icon size={24} className={stat.color} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bir Sonraki Başarı Hikayesi Sizin Olsun
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Portföyümüzdeki başarı hikayeleri gibi, sizin markanız da dijital dünyada iz bırakmaya hazır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Projenizi Başlatalım
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Tüm Çalışmaları Görün
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
