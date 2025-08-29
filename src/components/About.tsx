'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Award, 
  TrendingUp, 
  Building2, 
  Globe,
  Star,
  CheckCircle2
} from 'lucide-react';

const stats = [
  { icon: Users, number: "50+", label: "Uzman Ekip Üyesi", color: "text-blue-400" },
  { icon: Building2, number: "200+", label: "Kurumsal Müşteri", color: "text-purple-400" },
  { icon: Award, number: "15+", label: "Sektör Ödülü", color: "text-green-400" },
  { icon: Globe, number: "25+", label: "Ülkede Hizmet", color: "text-yellow-400" },
];

const achievements = [
  "Türkiye'nin en büyük e-ticaret platformlarına danışmanlık",
  "Fortune 500 şirketleri ile uzun soluklu işbirlikleri",
  "Yıllık %300+ ROI artışı sağlayan kampanyalar",
  "Sektör öncüsü yaratıcı çözümler",
  "24/7 müşteri destek hizmeti",
  "ISO 27001 bilgi güvenliği sertifikası"
];

const teamMembers = [
  {
    name: "Dijital Strateji Uzmanları",
    description: "10+ yıl deneyimli dijital pazarlama profesyonelleri",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Yaratıcı Ekip",
    description: "Ödüllü tasarımcılar ve içerik üreticileri",
    icon: Star,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Teknik Ekip",
    description: "Full-stack geliştiriciler ve SEO uzmanları",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500"
  }
];

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
            <span className="gradient-text">Hakkımızda</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            İstanbul merkezli SEOTING olarak, dijital dünyada iz bırakan projeler üretiyoruz. 
            Türkiye'nin en büyük firmalarına güven veren deneyimimizle, markanızı geleceğe taşıyoruz.
          </p>
        </motion.div>

        {/* Istanbul Location Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-4">
                <MapPin size={32} className="text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">İstanbul'dan Dünya'ya</h3>
                <p className="text-gray-300">
                  Türkiye'nin kalbi İstanbul'da, kültürler arası köprü kuran bir bakış açısıyla 
                  hem yerel hem de global pazarlara hitap eden projeler üretiyoruz.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 mb-4`}>
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
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Hikayemiz</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                SEOTING, dijital pazarlama dünyasında fark yaratma vizyonuyla kuruldu. 
                İstanbul'un dinamik iş hayatından ilham alarak, geleneksel pazarlama 
                yaklaşımlarını dijital çağın gereklilikleriyle harmanlıyoruz.
              </p>
              <p>
                Kuruluşumuzdan bu yana, Türkiye'nin önde gelen şirketlerine danışmanlık 
                hizmeti vererek, onların dijital dönüşüm yolculuklarında rehber olduk. 
                Her proje bizim için yeni bir başarı hikayesi.
              </p>
              <p>
                Sadece hizmet sunmuyoruz, uzun vadeli ortaklıklar kuruyoruz. Müşterilerimizin 
                başarısı bizim başarımız, onların büyümesi bizim motivasyonumuz.
              </p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Başarılarımız</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Uzman Ekibimiz</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alanında uzman, yaratıcı ve tutkulu profesyonellerden oluşan ekibimizle 
            her projeye özel çözümler üretiyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${member.color} mb-4`}>
                <member.icon size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{member.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

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
              Başarı Hikayenizi Birlikte Yazalım
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              İstanbul'un enerjisiyle, global vizyonumuzla markanızı zirveye taşımaya hazırız.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
            >
              Ekibimizle Tanışın
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

