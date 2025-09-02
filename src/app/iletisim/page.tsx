'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
  Twitter,
  CheckCircle2,
  Users,
  Award,
  Star,
  Headphones,
  Zap,
  Shield,
  Loader2,
  AlertCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresimiz",
    details: ["İkitelli Organize Sanayi Bölgesi", "Giyim Sanatkarları Sitesi", "2.Ada A Blok No:109", "Başakşehir / İstanbul", "Türkiye"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+90 (544) 251 90 82", "WhatsApp: +90 (544) 251 90 82"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "E-posta",
    details: ["info@seoting.com", "proje@seoting.com", "destek@seoting.com"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    details: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 10:00 - 16:00", "Pazar: Kapalı"],
    color: "from-purple-500 to-purple-600"
  }
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "#", color: "from-pink-500 to-purple-500", username: "@seoting_digital" },
  { icon: Linkedin, name: "LinkedIn", url: "#", color: "from-blue-600 to-blue-700", username: "SEOTING Digital" },
  { icon: Twitter, name: "Twitter", url: "#", color: "from-blue-400 to-blue-500", username: "@seoting" },
  { icon: Globe, name: "Website", url: "#", color: "from-gray-600 to-gray-700", username: "seoting.com" },
];

const services = [
  "Dijital Pazarlama Stratejisi",
  "SEO & SEM Hizmetleri", 
  "Sosyal Medya Yönetimi",
  "Ürün Fotoğrafçılığı",
  "Video Prodüksiyon",
  "Marka Danışmanlığı",
  "E-ticaret Çözümleri",
  "İçerik Pazarlaması",
  "Influencer Marketing",
  "Performance Marketing",
  "Diğer"
];

const faqs = [
  {
    question: "Projemiz ne kadar sürede tamamlanır?",
    answer: "Proje süresi, kapsamına göre değişir. Basit projeler 2-4 hafta, kapsamlı projeler 2-6 ay sürebilir. İlk görüşmede detaylı zaman planı sunuyoruz."
  },
  {
    question: "Hangi bütçe aralığında çalışıyorsunuz?",
    answer: "10.000₺'den başlayan projelerimiz var. Bütçenizi öğrendikten sonra size en uygun çözümü öneriyoruz. Ücretsiz danışmanlıkta detayları konuşabiliriz."
  },
  {
    question: "Sadece İstanbul'da mı hizmet veriyorsunuz?",
    answer: "Hayır, Türkiye genelinde ve yurtdışında da hizmet veriyoruz. Online toplantılar ve dijital iş süreçlerimizle mesafe hiç sorun değil."
  },
  {
    question: "Proje sonrası destek hizmeti var mı?",
    answer: "Evet, tüm projelerimiz için 3 ay ücretsiz destek veriyoruz. Sonrasında aylık destek paketlerimiz mevcuttur."
  }
];

const whyChooseUs = [
  {
    icon: Users,
    title: "50+ Uzman Ekip",
    description: "Alanında uzman profesyonellerden oluşan güçlü ekibimiz"
  },
  {
    icon: Award,
    title: "25+ Sektör Ödülü",
    description: "Türkiye'nin en prestijli pazarlama ödüllerinin sahibiyiz"
  },
  {
    icon: Star,
    title: "%100 Müşteri Memnuniyeti",
    description: "5 yıldır hiç şikayetsiz, her müşterimiz referansımız"
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    description: "Her zaman yanınızdayız, anında destek alabilirsiniz"
  },
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Zamanında teslimat garantisi, süreçlerimiz şeffaf"
  },
  {
    icon: Shield,
    title: "Gizlilik Garantisi",
    description: "Projeleriniz ve verileriniz %100 güvende"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Hizmet seçin',
    budget: 'Bütçe seçin',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Production'da Formspree kullan, development'da kendi API'mizi kullan
      const isProduction = process.env.NODE_ENV === 'production';
      const endpoint = isProduction 
        ? 'https://formspree.io/f/xdkoqpyg' // Formspree endpoint (geçici, değiştirilebilir)
        : '/api/send-email'; // Local API endpoint

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Hizmet seçin',
          budget: 'Bütçe seçin',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage('Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan telefon ile iletişime geçin.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Bağlantı hatası. Lütfen doğrudan telefon ile iletişime geçin: +90 (544) 251 90 82');
    }

    setIsSubmitting(false);

    // Clear status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setStatusMessage('');
    }, 5000);
  };

  const [activeTab, setActiveTab] = useState('form');

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-black font-display mb-6">
              <span className="gradient-text">İletişim</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              İstanbul'un kalbinde, dijital dünyada fark yaratacak projenizi konuşmak için 
              bizimle iletişime geçin. Uzman ekibimiz sizinle en kısa sürede görüşecek.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center glass rounded-xl p-4"
            >
              <div className="text-2xl font-bold gradient-text">24 Saat</div>
              <div className="text-xs text-gray-400">İçinde Dönüş</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center glass rounded-xl p-4"
            >
              <div className="text-2xl font-bold gradient-text">Ücretsiz</div>
              <div className="text-xs text-gray-400">Danışmanlık</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center glass rounded-xl p-4"
            >
              <div className="text-2xl font-bold gradient-text">7/24</div>
              <div className="text-xs text-gray-400">Destek</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-2 bg-white/5 rounded-full p-2 backdrop-blur-sm border border-white/10">
              {[
                { id: 'form', label: 'Proje Formu', icon: MessageSquare },
                { id: 'contact', label: 'İletişim Bilgileri', icon: Phone },
                { id: 'faq', label: 'Sık Sorulan Sorular', icon: ArrowRight }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon size={18} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Tab */}
          {activeTab === 'form' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2 glass rounded-3xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl mr-4">
                      <MessageSquare size={24} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Proje Talebi</h2>
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
                          <option value="100k-250k" className="bg-gray-800">100.000₺ - 250.000₺</option>
                          <option value="250k+" className="bg-gray-800">250.000₺+</option>
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

                    {/* Status Message */}
                    {submitStatus !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg flex items-center ${
                          submitStatus === 'success' 
                            ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                            : 'bg-red-500/20 border border-red-500/30 text-red-300'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle2 size={20} className="mr-2 flex-shrink-0" />
                        ) : (
                          <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                        )}
                        <span>{statusMessage}</span>
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-lg font-semibold text-white transition-all duration-300 neon-glow flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="mr-2 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Teklif Talep Et
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Neden SEOTING?</h3>
                    <div className="space-y-4">
                      {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="p-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg flex-shrink-0">
                            <item.icon size={16} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                            <p className="text-xs text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Info Tab */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} flex-shrink-0`}>
                          <info.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-400 text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass rounded-2xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h3>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center justify-between p-3 bg-gradient-to-r ${social.color} rounded-lg hover:shadow-lg transition-all duration-300`}
                        >
                          <div className="flex items-center">
                            <social.icon size={20} className="text-white mr-3" />
                            <span className="text-white font-medium">{social.name}</span>
                          </div>
                          <span className="text-white/70 text-sm">{social.username}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                      <CheckCircle2 size={20} className="text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed ml-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
                  Hemen Ara: +90 (544) 251 90 82
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('form')}
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  Online Form Doldur
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}