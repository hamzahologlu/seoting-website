'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  ArrowRight,
  Globe,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresimiz",
    details: ["Maslak Mahallesi", "Büyükdere Cad. No:123", "Şişli / İstanbul"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+90 212 123 45 67", "+90 535 123 45 67"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@seoting.com", "proje@seoting.com"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 10:00 - 16:00"],
    color: "from-purple-500 to-purple-600"
  }
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#", color: "from-pink-500 to-purple-500" },
  { icon: Linkedin, name: "LinkedIn", url: "#", color: "from-blue-600 to-blue-700" },
  { icon: Twitter, name: "Twitter", url: "#", color: "from-blue-400 to-blue-500" },
  { icon: Globe, name: "Website", url: "#", color: "from-gray-600 to-gray-700" },
];

const services = [
  "Dijital Pazarlama Stratejisi",
  "SEO & SEM Hizmetleri", 
  "Sosyal Medya Yönetimi",
  "Ürün Fotoğrafçılığı",
  "Video Prodüksiyon",
  "Marka Danışmanlığı",
  "E-ticaret Çözümleri",
  "Diğer"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
            <span className="gradient-text">İletişim</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            İstanbul'un kalbinde, dijital dünyada fark yaratacak projenizi konuşmak için 
            bizimle iletişime geçin. Uzman ekibimiz sizinle en kısa sürede görüşecek.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl mr-4">
                <MessageSquare size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Proje Talebi</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Şirket
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Şirket adınız"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Hizmet seçin</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Bütçe Aralığı
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Bütçe seçin</option>
                    <option value="10k-25k" className="bg-gray-800">10.000₺ - 25.000₺</option>
                    <option value="25k-50k" className="bg-gray-800">25.000₺ - 50.000₺</option>
                    <option value="50k-100k" className="bg-gray-800">50.000₺ - 100.000₺</option>
                    <option value="100k+" className="bg-gray-800">100.000₺+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Proje Detayları *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-lg font-semibold text-white transition-all duration-300 neon-glow flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Teklif Talep Et
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} flex-shrink-0`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={20} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Hızlı İşlemler</h4>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <span className="text-white">Randevu Al</span>
                  <Calendar size={18} className="text-primary-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <span className="text-white">WhatsApp İletişim</span>
                  <MessageSquare size={18} className="text-green-400" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-left"
                >
                  <span className="text-white">Portfolyo İndir</span>
                  <ArrowRight size={18} className="text-purple-400" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              İstanbul'da Bizimle Buluşun
            </h3>
            <p className="text-gray-300">
              Maslak'taki ofisimizde yüz yüze görüşme yapmak için randevu alabilirsiniz.
            </p>
          </div>
          
          {/* Placeholder for map - you can integrate Google Maps or similar */}
          <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary-400 mx-auto mb-4" />
              <p className="text-gray-300">Harita Yükleniyor...</p>
              <p className="text-sm text-gray-400 mt-2">
                Maslak Mahallesi, Büyükdere Cad. No:123, Şişli/İstanbul
              </p>
            </div>
          </div>
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
              Projenizi Konuşmaya Hazır mısınız?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              24 saat içinde size dönüş yapıyor, projenizdeki potansiyeli birlikte keşfediyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Hemen Ara: +90 212 123 45 67
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                E-posta Gönder
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

