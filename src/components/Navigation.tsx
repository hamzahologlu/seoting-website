'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown,
  TrendingUp,
  Search,
  MessageCircle,
  Camera,
  Video,
  Palette,
  Eye,
  BarChart3,
  Megaphone,
  Zap,
  Lightbulb,
  Target,
  Globe,
  Monitor
} from 'lucide-react';

const navItems: Array<{ name: string; href: string; hasDropdown?: boolean }> = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetler', href: '/hizmetlerimiz', hasDropdown: true },
  { name: 'Araçlar', href: '/araclar', hasDropdown: true },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'İletişim', href: '/iletisim' },
];

const serviceCategories = [
  {
    title: "Dijital Pazarlama",
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        icon: TrendingUp,
        name: "Dijital Pazarlama Stratejisi",
        description: "Kapsamlı dijital strateji geliştirme",
        href: "/dijital-pazarlama-stratejisi"
      },
      {
        icon: Search,
        name: "SEO & SEM Hizmetleri", 
        description: "Arama motoru optimizasyonu",
        href: "/seo-sem-hizmetleri"
      },
      {
        icon: MessageCircle,
        name: "Sosyal Medya Yönetimi",
        description: "Platform yönetimi ve içerik",
        href: "/sosyal-medya-yonetimi"
      },
      {
        icon: BarChart3,
        name: "Analiz & Raporlama",
        description: "Performans takibi ve analiz",
        href: "/analiz-raporlama"
      }
    ]
  },
  {
    title: "Görsel Hizmetler", 
    color: "from-purple-500 to-pink-500",
    services: [
      {
        icon: Camera,
        name: "Ürün Fotoğrafçılığı",
        description: "Profesyonel ürün çekimleri",
        href: "/urun-fotografciligi"
      },
      {
        icon: Video,
        name: "Video Prodüksiyon",
        description: "Kurumsal ve tanıtım videoları",
        href: "/video-produksiyon"
      },
      {
        icon: Palette,
        name: "Görsel Tasarım",
        description: "Yaratıcı tasarım çözümleri",
        href: "/gorsel-tasarim"
      },
      {
        icon: Eye,
        name: "360° Görselleştirme",
        description: "İnteraktif ürün deneyimi",
        href: "/360-urun-gorsellestirme"
      }
    ]
  },
  {
    title: "Danışmanlık",
    color: "from-emerald-500 to-green-500", 
    services: [
      {
        icon: Lightbulb,
        name: "Marka Danışmanlığı",
        description: "Kurumsal kimlik ve strateji",
        href: "/marka-danismanligi"
      },
      {
        icon: Megaphone,
        name: "İçerik Pazarlaması",
        description: "Blog, video ve podcast üretimi",
        href: "/icerik-pazarlamasi"
      },
      {
        icon: Zap,
        name: "Performans Optimizasyonu",
        description: "ROI artışı ve conversion",
        href: "/performans-optimizasyonu"
      }
    ]
  }
];

const toolCategories = [
  {
    title: "Dijital Araçlar",
    color: "from-blue-500 to-indigo-500",
    tools: [
      {
        icon: Target,
        name: "Google Sıra Bulucu",
        description: "Web sitenizin Google'daki sırasını kontrol edin",
        href: "/google-sira-bulucu"
      },
      {
        icon: Search,
        name: "Anahtar Kelime Analizi",
        description: "Arama hacmi ve rekabet analizi",
        href: "/anahtar-kelime-analizi"
      },
      {
        icon: Monitor,
        name: "Sayfa Hızı Testi",
        description: "Site yükleme hızını test edin",
        href: "/sayfa-hizi-testi"
      }
    ]
  }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileMegaMenu, setShowMobileMegaMenu] = useState(false);
  const [showToolsMegaMenu, setShowToolsMegaMenu] = useState(false);
  const [showMobileToolsMegaMenu, setShowMobileToolsMegaMenu] = useState(false);
  
  // Timer'lar için ref'ler
  const [servicesTimer, setServicesTimer] = useState<NodeJS.Timeout | null>(null);
  const [toolsTimer, setToolsTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (servicesTimer) clearTimeout(servicesTimer);
      if (toolsTimer) clearTimeout(toolsTimer);
    };
  }, [servicesTimer, toolsTimer]);

  // Helper fonksiyonlar
  const handleServicesMouseEnter = () => {
    if (servicesTimer) clearTimeout(servicesTimer);
    setShowMegaMenu(true);
    setShowToolsMegaMenu(false);
  };

  const handleServicesMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowMegaMenu(false);
    }, 200); // 200ms delay
    setServicesTimer(timer);
  };

  const handleMegaMenuMouseEnter = () => {
    if (servicesTimer) clearTimeout(servicesTimer);
  };

  const handleMegaMenuMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowMegaMenu(false);
    }, 200);
    setServicesTimer(timer);
  };

  const handleToolsMouseEnter = () => {
    if (toolsTimer) clearTimeout(toolsTimer);
    setShowToolsMegaMenu(true);
    setShowMegaMenu(false);
  };

  const handleToolsMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowToolsMegaMenu(false);
    }, 200);
    setToolsTimer(timer);
  };

  const handleToolsMegaMenuMouseEnter = () => {
    if (toolsTimer) clearTimeout(toolsTimer);
  };

  const handleToolsMegaMenuMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowToolsMegaMenu(false);
    }, 200);
    setToolsTimer(timer);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // Same page anchor link
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Different page navigation
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black font-display"
          >
            <span className="gradient-text">SEOTING</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <motion.button
                    onMouseEnter={() => {
                      if (item.name === 'Hizmetler') {
                        handleServicesMouseEnter();
                      } else if (item.name === 'Araçlar') {
                        handleToolsMouseEnter();
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Hizmetler') {
                        handleServicesMouseLeave();
                      } else if (item.name === 'Araçlar') {
                        handleToolsMouseLeave();
                      }
                    }}
                    onClick={() => handleNavigation(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-300 ${
                        (item.name === 'Hizmetler' && showMegaMenu) || 
                        (item.name === 'Araçlar' && showToolsMegaMenu) ? 'rotate-180' : ''
                      }`} 
                    />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>+90 (544) 251 90 82</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={16} />
                <span>info@seoting.com</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/iletisim')}
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 text-sm neon-glow"
            >
              Proje Başlat
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Desktop Mega Menu - Services */}
        <motion.div
          initial={false}
          animate={{
            opacity: showMegaMenu ? 1 : 0,
            y: showMegaMenu ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
          className={`absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md border-b border-white/10 z-40 ${
            showMegaMenu ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: showMegaMenu ? 1 : 0, 
                    y: showMegaMenu ? 0 : 20 
                  }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} inline-block`}>
                    <h3 className="text-white font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <motion.a
                        key={service.name}
                        href={service.href}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: showMegaMenu ? 1 : 0, 
                          x: showMegaMenu ? 0 : -10 
                        }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                          <service.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-primary-300 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <motion.a
                href="/hizmetlerimiz"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Tüm Hizmetleri Görüntüle
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Desktop Mega Menu - Tools */}
        <motion.div
          initial={false}
          animate={{
            opacity: showToolsMegaMenu ? 1 : 0,
            y: showToolsMegaMenu ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleToolsMegaMenuMouseEnter}
          onMouseLeave={handleToolsMegaMenuMouseLeave}
          className={`absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md border-b border-white/10 z-40 ${
            showToolsMegaMenu ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {toolCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: showToolsMegaMenu ? 1 : 0, 
                    y: showToolsMegaMenu ? 0 : 20 
                  }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} inline-block`}>
                    <h3 className="text-white font-bold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.a
                        key={tool.name}
                        href={tool.href}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: showToolsMegaMenu ? 1 : 0, 
                          x: showToolsMegaMenu ? 0 : -10 
                        }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                          <tool.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-primary-300 transition-colors">
                            {tool.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{tool.description}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <motion.a
                href="/araclar"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
              >
                Tüm Araçları Görüntüle
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-y-auto max-h-[80vh] bg-black/98 backdrop-blur-lg"
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => {
                        if (item.name === 'Hizmetler') {
                          setShowMobileMegaMenu(!showMobileMegaMenu);
                          setShowMobileToolsMegaMenu(false);
                        } else if (item.name === 'Araçlar') {
                          setShowMobileToolsMegaMenu(!showMobileToolsMegaMenu);
                          setShowMobileMegaMenu(false);
                        }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: isOpen ? 1 : 0, 
                        x: isOpen ? 0 : -20 
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                    >
                      {item.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-300 ${
                          (item.name === 'Hizmetler' && showMobileMegaMenu) || 
                          (item.name === 'Araçlar' && showMobileToolsMegaMenu) ? 'rotate-180' : ''
                        }`} 
                      />
                    </motion.button>
                    
                    {/* Mobile Services Mega Menu */}
                    {item.name === 'Hizmetler' && (
                      <motion.div
                        initial={false}
                        animate={{
                          height: showMobileMegaMenu ? 'auto' : 0,
                          opacity: showMobileMegaMenu ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-y-auto max-h-[50vh] ml-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                      >
                        {serviceCategories.map((category, categoryIndex) => (
                          <div key={category.title} className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded bg-gradient-to-r ${category.color}`}></div>
                              <h4 className="text-white font-semibold text-sm">{category.title}</h4>
                            </div>
                            <div className="ml-5 space-y-2">
                              {category.services.map((service, serviceIndex) => (
                                <motion.a
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setShowMobileMegaMenu(false);
                                  }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ 
                                    opacity: showMobileMegaMenu ? 1 : 0, 
                                    x: showMobileMegaMenu ? 0 : -10 
                                  }}
                                  transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                                  className="flex items-center space-x-2 py-2 text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                  <service.icon size={14} />
                                  <span>{service.name}</span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="pt-3 border-t border-white/10">
                          <motion.a
                            href="/hizmetlerimiz"
                            onClick={() => {
                              setIsOpen(false);
                              setShowMobileMegaMenu(false);
                            }}
                            className="block w-full text-center py-2 px-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white font-semibold text-sm"
                          >
                            Tüm Hizmetler
                          </motion.a>
                        </div>
                      </motion.div>
                    )}

                    {/* Mobile Tools Mega Menu */}
                    {item.name === 'Araçlar' && (
                      <motion.div
                        initial={false}
                        animate={{
                          height: showMobileToolsMegaMenu ? 'auto' : 0,
                          opacity: showMobileToolsMegaMenu ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-y-auto max-h-[50vh] ml-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                      >
                        {toolCategories.map((category, categoryIndex) => (
                          <div key={category.title} className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded bg-gradient-to-r ${category.color}`}></div>
                              <h4 className="text-white font-semibold text-sm">{category.title}</h4>
                            </div>
                            <div className="ml-5 space-y-2">
                              {category.tools.map((tool, toolIndex) => (
                                <motion.a
                                  key={tool.name}
                                  href={tool.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setShowMobileToolsMegaMenu(false);
                                  }}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ 
                                    opacity: showMobileToolsMegaMenu ? 1 : 0, 
                                    x: showMobileToolsMegaMenu ? 0 : -10 
                                  }}
                                  transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                                  className="flex items-center space-x-2 py-2 text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                  <tool.icon size={14} />
                                  <span>{tool.name}</span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="pt-3 border-t border-white/10">
                          <motion.a
                            href="/google-sira-bulucu"
                            onClick={() => {
                              setIsOpen(false);
                              setShowMobileToolsMegaMenu(false);
                            }}
                            className="block w-full text-center py-2 px-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg text-white font-semibold text-sm"
                          >
                            Tüm Araçlar
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isOpen ? 1 : 0, 
                      x: isOpen ? 0 : -20 
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </motion.button>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-white/10">
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+90 (544) 251 90 82</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@seoting.com</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigation('/iletisim')}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300"
              >
                Proje Başlat
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}