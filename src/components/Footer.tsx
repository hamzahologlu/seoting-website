'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Globe,
  ArrowUp,
  Heart
} from 'lucide-react';

const footerSections = [
  {
    title: "Hizmetlerimiz",
    links: [
      { name: "Dijital Pazarlama Stratejisi", href: "/dijital-pazarlama-stratejisi" },
      { name: "SEO & SEM Hizmetleri", href: "/seo-sem-hizmetleri" },
      { name: "Sosyal Medya Yönetimi", href: "/sosyal-medya-yonetimi" },
      { name: "Ürün Fotoğrafçılığı", href: "/urun-fotografciligi" },
      { name: "Video Prodüksiyon", href: "/video-produksiyon" },
      { name: "Marka Danışmanlığı", href: "/marka-danismanligi" }
    ]
  },
  {
    title: "Şirket",
    links: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
      { name: "Google Sıra Bulucu", href: "/google-sira-bulucu" },
      { name: "Anahtar Kelime Analizi", href: "/anahtar-kelime-analizi" },
      { name: "Analiz & Raporlama", href: "/analiz-raporlama" },
      { name: "Görsel Tasarım", href: "/gorsel-tasarim" },
      { name: "İletişim", href: "/iletisim" }
    ]
  },
  {
    title: "Paketlerimiz",
    links: [
      { name: "Startup Paketi", href: "/startup-paketi" },
      { name: "Büyüme Paketi", href: "/buyume-paketi" },
      { name: "Kurumsal Paket", href: "/kurumsal-paket" },
      { name: "İçerik Pazarlama", href: "/icerik-pazarlamasi" },
      { name: "Performans Optimizasyon", href: "/performans-optimizasyonu" },
      { name: "360° Ürün Görselleştirme", href: "/360-urun-gorsellestirme" }
    ]
  }
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "https://instagram.com/seoting", color: "hover:text-pink-400" },
  { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/seoting", color: "hover:text-blue-400" },
  { icon: Twitter, name: "Twitter", url: "https://twitter.com/seoting", color: "hover:text-blue-300" },
  { icon: Globe, name: "Website", url: "https://www.seoting.com", color: "hover:text-green-400" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <a href="/" className="inline-block text-3xl font-black font-display mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <span className="gradient-text">SEOTING</span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              İstanbul merkezli dijital pazarlama ajansı olarak, markanızı 
              dijital dünyada zirveye taşıyoruz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm">Maslak Mah., Büyükdere Cad. No:123, Şişli/İstanbul</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm">+90 (544) 251 90 82</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <span className="text-sm">info@seoting.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-white/5 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-300 transition-all duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dijital Pazarlama İpuçları
            </h3>
            <p className="text-gray-400 mb-6">
              En güncel dijital pazarlama trendleri ve ipuçları için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-lg font-semibold text-white transition-all duration-300"
              >
                Abone Ol
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
            >
              <span>© 2024 SEOTING. Tüm hakları saklıdır.</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                İstanbul'da 
                <Heart size={14} className="mx-1 text-red-400" />
                ile yapıldı
              </span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <motion.a
                href="/hakkimizda"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Gizlilik Politikası
              </motion.a>
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Kullanım Koşulları
              </motion.a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

