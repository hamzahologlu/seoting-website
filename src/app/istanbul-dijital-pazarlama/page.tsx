'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle2,
  Star,
  ArrowRight,
  Building2,
  Target,
  Zap,
  Globe,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

const istanbulServices = [
  {
    icon: TrendingUp,
    title: "İstanbul SEO Hizmetleri",
    description: "İstanbul'da arama motorlarında 1. sırada çıkın",
    features: ["Yerel SEO", "Teknik SEO", "İçerik SEO", "Link Building"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Google Ads İstanbul",
    description: "İstanbul hedefli Google Ads kampanyaları",
    features: ["Yerel Reklamlar", "Konum Hedefleme", "ROI Optimizasyonu", "A/B Test"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Sosyal Medya İstanbul",
    description: "İstanbul'un sosyal medya trendlerini yakalayın",
    features: ["Instagram Yönetimi", "Facebook Kampanyaları", "LinkedIn Stratejisi", "TikTok İçerikleri"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Building2,
    title: "Kurumsal Dijital Pazarlama",
    description: "İstanbul'daki büyük firmalar için özel çözümler",
    features: ["B2B Stratejileri", "Kurumsal Kimlik", "Dijital Dönüşüm", "E-ticaret Çözümleri"],
    color: "from-orange-500 to-red-500"
  }
];

const istanbulDistricts = [
  "Beşiktaş", "Şişli", "Kadıköy", "Beyoğlu", "Üsküdar", "Fatih",
  "Bakırköy", "Maltepe", "Pendik", "Kartal", "Başakşehir", "Bahçelievler",
  "Güngören", "Zeytinburnu", "Esenler", "Bayrampaşa", "Sultangazi", "Gaziosmanpaşa"
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "İstanbul Ticaret A.Ş.",
    location: "Beşiktaş",
    text: "SEOTING sayesinde İstanbul'da dijital pazarlamada zirveye çıktık. Satışlarımız %300 arttı!",
    rating: 5
  },
  {
    name: "Ayşe Demir",
    company: "Kadıköy Moda",
    location: "Kadıköy", 
    text: "Yerel SEO çalışmaları ile Kadıköy'de 1. sıraya çıktık. Müşteri sayımız 5 kat arttı.",
    rating: 5
  },
  {
    name: "Mehmet Kaya",
    company: "Şişli Teknoloji",
    location: "Şişli",
    text: "İstanbul'daki en profesyonel dijital pazarlama ajansı. Kesinlikle tavsiye ederim.",
    rating: 5
  }
];

export default function IstanbulDigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
              🏆 İstanbul'un #1 Dijital Pazarlama Ajansı
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">İstanbul Dijital Pazarlama</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              İstanbul'un en büyük firmalarına hizmet veren, <span className="text-blue-400 font-semibold">Başakşehir merkezli</span> 
              dijital pazarlama uzmanları ile markanızı İstanbul'da zirveye taşıyoruz.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Başakşehir Merkez</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">500+ Mutlu Müşteri</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">5 Yıllık Deneyim</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* İstanbul Hizmetleri */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">İstanbul'a Özel Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İstanbul'un dinamik pazarında başarılı olmak için özel olarak tasarlanmış dijital pazarlama çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {istanbulServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 backdrop-blur-sm border border-white/10 mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İstanbul İlçeleri */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">İstanbul'un Her İlçesinde Hizmet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İstanbul'un 39 ilçesinde yerel SEO ve dijital pazarlama hizmetleri sunuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {istanbulDistricts.map((district, index) => (
              <motion.div
                key={district}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {district}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
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
              <span className="gradient-text">İstanbul'dan Müşteri Yorumları</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İstanbul'un farklı bölgelerinden müşterilerimizin deneyimleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-3xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        <p className="text-blue-400 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                <span className="gradient-text">İstanbul'da Zirveye Çıkmaya Hazır mısınız?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                İstanbul'un en büyük dijital pazarlama ajansı ile markanızı zirveye taşıyın. 
                Ücretsiz danışmanlık için hemen iletişime geçin!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Ücretsiz Danışmanlık
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="tel:+905442519082"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Hemen Ara: +90 544 251 90 82
                </motion.a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Ücretsiz SEO Analizi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>24 Saat İçinde Yanıt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>İstanbul Merkezli Hizmet</span>
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
