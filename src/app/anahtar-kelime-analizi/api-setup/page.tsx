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
  Target
} from 'lucide-react';
import { useState } from 'react';

export default function KeywordAPISetupPage() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const apiProviders = [
    {
      name: "DataForSEO",
      logo: "🔍",
      difficulty: "Kolay",
      cost: "$0.25/sorgu",
      freeTier: "100 ücretsiz sorgu",
      realData: true,
      features: [
        "Google Ads arama hacmi verileri",
        "Rekabet seviyesi analizi",
        "CPC (maliyet per tıklama) verileri",
        "SERP features analizi",
        "Anahtar kelime önerileri",
        "15+ ülke desteği"
      ],
      setupSteps: [
        "DataForSEO.com'da hesap oluşturun",
        "Email ve şifrenizi onaylayın", 
        "API credentials'ınızı alın",
        "Environment variables'a ekleyin"
      ],
      envVars: [
        "DATAFORSEO_EMAIL=your-email@domain.com",
        "DATAFORSEO_PASSWORD=your-password"
      ]
    },
    {
      name: "Google Keyword Planner",
      logo: "🟢", 
      difficulty: "Orta",
      cost: "Ücretsiz*",
      freeTier: "Google Ads hesabı gerekli",
      realData: true,
      features: [
        "Resmi Google arama verileri",
        "Aylık arama hacmi",
        "Rekabet seviyesi",
        "Önerilen teklif miktarları",
        "Demografik veriler",
        "Coğrafi hedefleme"
      ],
      setupSteps: [
        "Google Ads hesabı oluşturun",
        "Developer token alın",
        "OAuth2 credentials setup",
        "API anahtarını environment'a ekleyin"
      ],
      envVars: [
        "GOOGLE_KEYWORD_PLANNER_KEY=your-api-key",
        "GOOGLE_ADS_DEVELOPER_TOKEN=your-dev-token"
      ]
    },
    {
      name: "SEMrush API",
      logo: "🟠",
      difficulty: "Zor",
      cost: "$200+/ay",
      freeTier: "10 sorgu/gün",
      realData: true,
      features: [
        "25+ milyar kelime veritabanı",
        "Organik ve reklam verileri",
        "Rakip analizi",
        "Trend verileri",
        "Kelime zorluğu metrikleri",
        "140+ ülke desteği"
      ],
      setupSteps: [
        "SEMrush Pro+ hesabı gerekli",
        "API access talebinde bulunun",
        "API key alın",
        "Rate limits'i kontrol edin"
      ],
      envVars: [
        "SEMRUSH_API_KEY=your-api-key"
      ]
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
                  href="/anahtar-kelime-analizi"
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-4"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Anahtar Kelime Analizine Dön
                </motion.a>
                
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30 text-sm font-medium text-primary-300 backdrop-blur-sm mb-6">
                  🔑 API Kurulum Rehberi
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black font-display mb-6">
                <span className="gradient-text">Gerçek Veri</span><br />
                <span className="text-white">API Kurulumu</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Anahtar kelime analizinde gerçek Google verileri kullanmak için 
                API sağlayıcılarından birini seçin ve kurulum yapın.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Providers */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {apiProviders.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Provider Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{provider.logo}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {provider.name}
                          </h3>
                          <div className="flex items-center space-x-3 text-sm">
                            <span className={`px-2 py-1 rounded ${
                              provider.difficulty === 'Kolay' ? 'bg-green-500/20 text-green-400' :
                              provider.difficulty === 'Orta' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {provider.difficulty}
                            </span>
                            <span className="text-gray-400">{provider.cost}</span>
                            {provider.freeTier && (
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                                {provider.freeTier}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {provider.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start space-x-2">
                            <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                          href={
                            provider.name === 'DataForSEO' ? 'https://dataforseo.com' :
                            provider.name === 'Google Keyword Planner' ? '/anahtar-kelime-analizi/google-setup' :
                            'https://semrush.com'
                          }
                          target={provider.name === 'Google Keyword Planner' ? '_self' : '_blank'}
                          rel={provider.name === 'Google Keyword Planner' ? '' : 'noopener noreferrer'}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>{provider.name === 'Google Keyword Planner' ? 'Kurulum Rehberi' : 'Hesap Oluştur'}</span>
                          {provider.name === 'Google Keyword Planner' ? <Target size={16} /> : <ExternalLink size={16} />}
                        </motion.a>
                      </div>
                    </div>

                    {/* Setup Steps */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4">Kurulum Adımları:</h4>
                      
                      <div className="space-y-4 mb-6">
                        {provider.setupSteps.map((step, sIndex) => (
                          <div key={sIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                              {sIndex + 1}
                            </div>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-4">Environment Variables:</h4>
                      
                      <div className="bg-black/50 rounded-xl p-4 border border-white/10">
                        <div className="space-y-2">
                          {provider.envVars.map((envVar, eIndex) => (
                            <div key={eIndex} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                              <code className="text-green-400 font-mono text-sm">{envVar}</code>
                              <button
                                onClick={() => copyToClipboard(envVar, `${provider.name}-${eIndex}`)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                              >
                                {copiedText === `${provider.name}-${eIndex}` ? (
                                  <CheckCircle size={16} className="text-green-400" />
                                ) : (
                                  <Copy size={16} className="text-gray-400" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                            <div className="text-yellow-300 text-sm">
                              <strong>Önemli:</strong> Bu değişkenleri <code className="bg-black/30 px-1 rounded">.env.local</code> dosyasına ekleyin ve asla GitHub'a commit etmeyin.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                API Karşılaştırması
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-white font-semibold">Özellik</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">DataForSEO</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">Google KP</th>
                      <th className="text-center py-4 px-4 text-white font-semibold">SEMrush</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Kurulum Zorluğu</td>
                      <td className="py-4 px-4 text-center">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm">Kolay</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm">Orta</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-sm">Zor</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Ücretsiz Kullanım</td>
                      <td className="py-4 px-4 text-center">100 sorgu</td>
                      <td className="py-4 px-4 text-center">Sınırsız*</td>
                      <td className="py-4 px-4 text-center">10 sorgu/gün</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Aylık Maliyet</td>
                      <td className="py-4 px-4 text-center">$25+</td>
                      <td className="py-4 px-4 text-center">$0</td>
                      <td className="py-4 px-4 text-center">$200+</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">Veri Kalitesi</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl p-8 border border-primary-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  💡 Önerimiz: DataForSEO ile Başlayın
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Kolay kurulum, makul fiyat ve yüksek kaliteli verilerle DataForSEO, 
                  anahtar kelime analizi için ideal başlangıç noktasıdır.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://dataforseo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300"
                  >
                    DataForSEO'ya Git
                    <ExternalLink size={20} className="ml-2" />
                  </motion.a>
                  
                  <motion.a
                    href="/anahtar-kelime-analizi"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                  >
                    Demo'yu Dene
                    <Target size={20} className="ml-2" />
                  </motion.a>
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
