'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Award, 
  TrendingUp, 
  Building2, 
  Globe,
  Star,
  CheckCircle2,
  Clock,
  Target,
  Heart,
  Lightbulb,
  Zap,
  Shield,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';

const stats = [
  { icon: Users, number: "50+", label: "Uzman Ekip Üyesi", color: "text-blue-400" },
  { icon: Building2, number: "200+", label: "Kurumsal Müşteri", color: "text-purple-400" },
  { icon: Award, number: "25+", label: "Sektör Ödülü", color: "text-green-400" },
  { icon: Globe, number: "15+", label: "Ülkede Hizmet", color: "text-yellow-400" },
  { icon: Clock, number: "5+", label: "Yıl Deneyim", color: "text-red-400" },
  { icon: TrendingUp, number: "300%", label: "Ortalama ROI", color: "text-cyan-400" },
];

const achievements = [
  "Türkiye'nin en büyük e-ticaret platformlarına danışmanlık",
  "Fortune 500 şirketleri ile uzun soluklu işbirlikleri",
  "Yıllık %300+ ROI artışı sağlayan kampanyalar",
  "Sektör öncüsü yaratıcı çözümler",
  "24/7 müşteri destek hizmeti",
  "ISO 27001 bilgi güvenliği sertifikası",
  "Google Partner ve Facebook Business Partner sertifikaları",
  "Türkiye'nin en prestijli pazarlama ödüllerinin sahibi"
];

const teamMembers = [
  {
    name: "Dijital Strateji Uzmanları",
    description: "10+ yıl deneyimli dijital pazarlama profesyonelleri",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    count: "15 Uzman",
    specialties: ["SEO/SEM", "Data Analytics", "Marketing Automation", "Growth Hacking"]
  },
  {
    name: "Yaratıcı Ekip",
    description: "Ödüllü tasarımcılar ve içerik üreticileri",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    count: "12 Tasarımcı",
    specialties: ["Grafik Tasarım", "Video Prodüksiyon", "Copywriting", "Brand Identity"]
  },
  {
    name: "Teknik Ekip",
    description: "Full-stack geliştiriciler ve SEO uzmanları",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
    count: "8 Geliştirici",
    specialties: ["Web Development", "Mobile Apps", "E-commerce", "Technical SEO"]
  },
  {
    name: "Fotoğraf & Video Ekibi",
    description: "Profesyonel fotoğrafçılar ve video prodüksiyon uzmanları",
    icon: Star,
    color: "from-orange-500 to-red-500",
    count: "10 Sanatçı",
    specialties: ["Product Photography", "Commercial Video", "Drone Çekimi", "Post-Production"]
  }
];

const values = [
  {
    icon: Target,
    title: "Hedef Odaklılık",
    description: "Her projeyi müşterilerimizin hedeflerine odaklanarak sonuç alıcı şekilde yürütüyoruz."
  },
  {
    icon: Lightbulb,
    title: "Yaratıcılık",
    description: "Sıradanlığı reddediyor, her projede yaratıcı ve özgün çözümler üretiyoruz."
  },
  {
    icon: Shield,
    title: "Güvenilirlik",
    description: "Müşterilerimizin bize duyduğu güven en değerli varlığımız. Her zaman sözümüzün arkasındayız."
  },
  {
    icon: Zap,
    title: "Hızlı Çözüm",
    description: "Değişen dijital dünyada hızlı hareket ediyor, çevik yaklaşımlarla sonuç alıyoruz."
  }
];

const timeline = [
  {
    year: "2019",
    title: "SEOTING Kuruluşu",
    description: "İstanbul'da küçük bir ekiple dijital pazarlama yolculuğumuz başladı."
  },
  {
    year: "2020",
    title: "İlk Büyük Projeler",
    description: "Türkiye'nin önde gelen e-ticaret platformları ile çalışmaya başladık."
  },
  {
    year: "2021",
    title: "Ekip Genişlemesi",
    description: "Ürün çekim hizmetlerini ekleyerek tam kapsamlı ajans haline geldik."
  },
  {
    year: "2022",
    title: "Uluslararası Projeler",
    description: "Avrupa ve Orta Doğu pazarlarında projeler yürütmeye başladık."
  },
  {
    year: "2023",
    title: "Sektör Liderliği",
    description: "Türkiye'nin en prestijli dijital pazarlama ödüllerini kazandık."
  },
  {
    year: "2024",
    title: "Yeni Teknolojiler",
    description: "AI destekli pazarlama çözümleri ve AR/VR projeleri geliştirmeye başladık."
  }
];

const clients = [
  { name: "E-ticaret Devi", sector: "E-commerce", project: "Tam kapsamlı dijital dönüşüm" },
  { name: "Lüks Moda Markası", sector: "Fashion", project: "Marka kimliği ve görsel içerik" },
  { name: "Teknoloji Startup'ı", sector: "Technology", project: "Go-to-market stratejisi" },
  { name: "Restoran Zinciri", sector: "F&B", project: "Dijital pazarlama ve ürün çekimi" },
  { name: "Fintech Şirketi", sector: "Finance", project: "Kullanıcı kazanım kampanyaları" },
  { name: "Otomotiv Markası", sector: "Automotive", project: "Sosyal medya ve influencer marketing" }
];

export default function AboutPage() {
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
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">Hakkımızda</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              İstanbul merkezli SEOTING olarak, dijital dünyada iz bırakan projeler üretiyoruz. 
              Türkiye'nin en büyük firmalarına güven veren deneyimimizle, markanızı geleceğe taşıyoruz.
            </p>
          </motion.div>

          {/* Istanbul Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-4">
                  <MapPin size={32} className="text-white" />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-2">İstanbul'dan Dünya'ya</h2>
                  <p className="text-gray-300">
                    Türkiye'nin kalbi İstanbul'da, kültürler arası köprü kuran bir bakış açısıyla 
                    hem yerel hem de global pazarlara hitap eden projeler üretiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 mb-4">
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Heart className="text-red-400 mr-3" size={32} />
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  SEOTING, 2019 yılında İstanbul'da dijital pazarlama dünyasında fark yaratma 
                  vizyonuyla kuruldu. Kurucu ekibimiz, geleneksel pazarlama yaklaşımlarını 
                  dijital çağın gereklilikleriyle harmanlama konusunda uzman profesyonellerden oluşuyordu.
                </p>
                <p>
                  İlk günden beri, sadece hizmet sunmakla kalmayıp, müşterilerimizle uzun vadeli 
                  ortaklıklar kurma prensibiyle hareket ediyoruz. Her proje bizim için yeni bir 
                  öğrenme fırsatı ve başarı hikayesi.
                </p>
                <p>
                  Bugün, 50+ uzman ekip üyemizle Türkiye'nin önde gelen şirketlerine danışmanlık 
                  hizmeti veriyor, onların dijital dönüşüm yolculuklarında rehber oluyoruz.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Target className="text-blue-400 mr-3" size={32} />
                Misyon & Vizyon
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary-300 mb-3">Misyonumuz</h3>
                  <p className="text-gray-300">
                    Markaları dijital dünyada güçlü birer oyuncuya dönüştürmek, yaratıcı çözümler 
                    ve teknolojik yeniliklerle onların hedeflerine ulaşmalarını sağlamak.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-300 mb-3">Vizyonumuz</h3>
                  <p className="text-gray-300">
                    Türkiye'de dijital pazarlama ve görsel içerik üretiminde öncü konumda olmak, 
                    uluslararası projelerde Türk yaratıcılığını dünyaya taşımak.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Değerlerimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen ve her projede rehberimiz olan temel değerlerimiz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Uzman Ekibimiz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Alanında uzman, yaratıcı ve tutkulu profesyonellerden oluşan ekibimizle 
              her projeye özel çözümler üretiyoruz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${member.color} flex-shrink-0`}>
                    <member.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <span className="text-sm text-primary-400 font-medium">{member.count}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Yolculuğumuz</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              2019'dan bugüne kadarki gelişimimiz ve önemli kilometre taşlarımız.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass rounded-2xl p-6">
                      <div className="text-primary-400 font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-black"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Başarılarımız</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sektörde öncülüğümüzü kanıtlayan başarılarımız ve elde ettiğimiz sertifikasyonlar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 glass rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Examples */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Güven Veren Müşteriler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Farklı sektörlerden önde gelen markalarla gerçekleştirdiğimiz başarılı projeler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                  <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs">
                    {client.sector}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{client.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
                Ekibimizle Tanışmak İster misiniz?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                İstanbul ofisimizde yüz yüze buluşalım ve projenizi birlikte planlayalım.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  Randevu Al
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Hemen Arayın
                </motion.button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +90 (544) 251 90 82
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@seoting.com
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Maslak, İstanbul
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

