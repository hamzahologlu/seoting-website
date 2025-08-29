'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Key, 
  Shield, 
  CheckCircle,
  ExternalLink,
  Copy,
  ArrowLeft,
  AlertTriangle,
  Lock,
  CreditCard,
  Zap,
  TrendingUp,
  Database,
  Clock,
  Target,
  Globe,
  Settings,
  Download,
  Eye,
  PlayCircle
} from 'lucide-react';
import { useState } from 'react';

export default function GoogleKeywordPlannerSetupPage() {
  const [copiedText, setCopiedText] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const setupSteps = [
    {
      title: "Google Ads Hesabı Oluşturun",
      description: "Keyword Planner'a erişim için Google Ads hesabı gerekli",
      duration: "5 dakika",
      details: [
        "Google Ads'e gidin ve 'Şimdi Başlayın' tıklayın",
        "İş hedeflerinizi seçin (herhangi birini seçebilirsiniz)",
        "Reklam kampanyası oluşturmayı geçin (sonra iptal edebilirsiniz)",
        "Ödeme bilgilerini girin (ücret kesilmez)",
        "Hesabınızı doğrulayın"
      ],
      warning: "Kredi kartı bilgisi gerekli ama ücret kesilmez. Sadece hesap doğrulaması için.",
      actionUrl: "https://ads.google.com",
      actionText: "Google Ads'e Git"
    },
    {
      title: "Google Cloud Console Projesİ",
      description: "API kullanımı için Google Cloud projesi oluşturun",
      duration: "3 dakika", 
      details: [
        "Google Cloud Console'a gidin",
        "Yeni proje oluşturun: 'SEOTING Keyword Analysis'",
        "Proje ID'sini kopyalayın (sonra lazım olacak)",
        "Billing hesabı bağlayın (ücretsiz tier kullanacağız)",
        "Projeyi aktifleştirin"
      ],
      warning: "Billing gerekli ama Google $300 ücretsiz kredi veriyor. Keyword Planner ücretsiz.",
      actionUrl: "https://console.cloud.google.com",
      actionText: "Cloud Console'a Git"
    },
    {
      title: "Google Ads API'sını Aktifleştirin",
      description: "Keyword Planner verilerine programatik erişim",
      duration: "2 dakika",
      details: [
        "Cloud Console'da APIs & Services → Library",
        "'Google Ads API' arayın ve aktifleştirin",
        "Credential oluşturun: APIs & Services → Credentials",
        "'OAuth 2.0 Client ID' seçin",
        "Application type: 'Web application' seçin"
      ],
      warning: "OAuth 2.0 seçin, API key değil. Keyword Planner OAuth gerektirir.",
      actionUrl: "https://console.cloud.google.com/apis/library",
      actionText: "API Library'e Git"
    },
    {
      title: "Developer Token Alın",
      description: "Google Ads hesabınızdan özel token alın",
      duration: "2 dakika",
      details: [
        "Google Ads hesabına gidin",
        "Tools & Settings → Setup → API Center",
        "'Create Token' tıklayın",
        "Token'ı kopyalayın ve saklayın",
        "Token test modunda başlar (yeterli bizim için)"
      ],
      warning: "Token ilk başta 'Test' modunda. Production için Google'a başvuru gerekir.",
      actionUrl: "https://ads.google.com",
      actionText: "Google Ads'e Git"
    },
    {
      title: "Environment Variables Kurulumu",
      description: "API anahtarlarını projeye ekleyin",
      duration: "1 dakika",
      details: [
        ".env.local dosyasını açın",
        "Aşağıdaki değişkenleri ekleyin",
        "Değerleri kendi bilgilerinizle değiştirin",
        "Dosyayı kaydedin",
        "Sunucuyu yeniden başlatın"
      ],
      warning: "Bu bilgileri asla GitHub'a commit etmeyin!",
      actionUrl: "",
      actionText: "Kopyala ve Yapıştır"
    }
  ];

  const envVariables = [
    {
      key: "GOOGLE_ADS_CLIENT_ID",
      value: "your-client-id.googleusercontent.com",
      description: "OAuth 2.0 Client ID"
    },
    {
      key: "GOOGLE_ADS_CLIENT_SECRET", 
      value: "your-client-secret",
      description: "OAuth 2.0 Client Secret"
    },
    {
      key: "GOOGLE_ADS_REFRESH_TOKEN",
      value: "your-refresh-token",
      description: "OAuth 2.0 Refresh Token"
    },
    {
      key: "GOOGLE_ADS_DEVELOPER_TOKEN",
      value: "your-developer-token",
      description: "Google Ads Developer Token"
    },
    {
      key: "GOOGLE_ADS_CUSTOMER_ID",
      value: "123-456-7890",
      description: "Google Ads Müşteri ID (tire olmadan)"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <motion.a
                  href="/anahtar-kelime-analizi/api-setup"
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-4"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  API Setup'a Dön
                </motion.a>
                
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm mb-6">
                  🟢 Google Keyword Planner Kurulumu
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black font-display mb-6">
                <span className="gradient-text">Google'ın Resmi</span><br />
                <span className="text-white">Keyword Planner API</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Google'ın resmi ve ücretsiz anahtar kelime verileri. Milyarlarca gerçek 
                arama sorgusu ve CPC bilgilerine tam erişim.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Globe, title: "Resmi Google Verisi", desc: "Direkt Google'dan" },
                { icon: Zap, title: "Ücretsiz", desc: "$0 maliyet" },
                { icon: TrendingUp, title: "Güncel Veriler", desc: "Anlık güncellemeler" },
                { icon: Shield, title: "Güvenilir", desc: "%100 doğru veriler" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Adım Adım Kurulum Rehberi
              </h2>
              <p className="text-gray-300">
                Toplam süre: ~15 dakika • Zorluk: Orta
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {setupSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      index + 1 <= currentStep
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / setupSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-md rounded-3xl p-8 border transition-all duration-300 ${
                    index + 1 === currentStep
                      ? 'border-green-500/50 bg-green-500/5'
                      : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      index + 1 <= currentStep
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          <Clock size={14} className="inline mr-1" />
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-6">{step.description}</p>

                      <div className="space-y-3 mb-6">
                        {step.details.map((detail, dIndex) => (
                          <div key={dIndex} className="flex items-start space-x-3">
                            <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {step.warning && (
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-6">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                            <p className="text-yellow-300 text-sm">{step.warning}</p>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-4">
                        {step.actionUrl && (
                          <motion.a
                            href={step.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 rounded-xl font-semibold text-white transition-all duration-300 flex items-center space-x-2"
                          >
                            <span>{step.actionText}</span>
                            <ExternalLink size={16} />
                          </motion.a>
                        )}

                        <button
                          onClick={() => setCurrentStep(Math.min(currentStep + 1, setupSteps.length))}
                          className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-xl font-semibold text-white transition-all duration-300"
                        >
                          Tamamlandı
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Environment Variables */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="mr-3" />
                Environment Variables (.env.local)
              </h3>

              <div className="bg-black/50 rounded-xl p-6 border border-white/10">
                <div className="space-y-4">
                  {envVariables.map((envVar, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white">{envVar.description}</h4>
                          <code className="text-green-400 font-mono text-sm">
                            {envVar.key}={envVar.value}
                          </code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(`${envVar.key}=${envVar.value}`, envVar.key)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-4"
                        >
                          {copiedText === envVar.key ? (
                            <CheckCircle size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Lock size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="text-red-300 text-sm">
                      <strong>Güvenlik:</strong> Bu değişkenleri .env.local dosyasına ekleyin ve asla GitHub'a commit etmeyin. 
                      .gitignore dosyası zaten .env.local'i hariç tutuyor.
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => copyToClipboard(
                      envVariables.map(v => `${v.key}=${v.value}`).join('\n'),
                      'all-vars'
                    )}
                    className="w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {copiedText === 'all-vars' ? (
                      <>
                        <CheckCircle size={16} />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Tüm Variables'ı Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Testing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl p-8 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🎉 Kurulum Tamamlandı!
                </h3>
                <p className="text-gray-300 mb-6">
                  Artık Google'ın resmi anahtar kelime verilerini kullanabilirsiniz. 
                  Aracı test etmek için aşağıdaki butona tıklayın.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/anahtar-kelime-analizi"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 rounded-full font-semibold text-white transition-all duration-300"
                  >
                    <PlayCircle size={20} className="mr-2" />
                    Aracı Test Et
                  </motion.a>
                  
                  <motion.a
                    href="/iletisim"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                  >
                    Teknik Destek
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Troubleshooting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                🔧 Sorun Giderme
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    "Developer token in test mode" hatası
                  </h4>
                  <p className="text-gray-300 mb-2">
                    Bu normal! Test modunda sınırlı veriye erişim var ama bizim için yeterli.
                  </p>
                  <p className="text-sm text-gray-400">
                    Production modu için Google'a başvuru gerekir (~2 hafta).
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    "Authentication failed" hatası
                  </h4>
                  <p className="text-gray-300 mb-2">
                    OAuth token'ın süresi dolmuş. Refresh token ile yeni token alın.
                  </p>
                  <p className="text-sm text-gray-400">
                    Otomatik token yenileme sistemi aktif.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    "Quota exceeded" hatası
                  </h4>
                  <p className="text-gray-300 mb-2">
                    Günlük API limiti dolmuş. 24 saat bekleyin veya billing aktifleştirin.
                  </p>
                  <p className="text-sm text-gray-400">
                    Google $300 ücretsiz kredi veriyor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
