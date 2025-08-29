'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Key, 
  Search, 
  Settings, 
  CheckCircle,
  ExternalLink,
  Copy,
  ArrowLeft,
  Globe,
  Code,
  Shield
} from 'lucide-react';
import { useState } from 'react';

export default function APISetupPage() {
  const [copied, setCopied] = useState<string>('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.a
              href="/google-sira-bulucu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Sıra Bulucu'ya Dön
            </motion.a>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30 text-blue-300 mb-6">
                <Settings size={16} className="mr-2" />
                API Kurulum Rehberi
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black font-display mb-6 leading-tight">
                <span className="gradient-text">Google API</span>
                <br />
                <span className="text-white">Kurulumu</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Gerçek Google arama verilerini almak için Google Custom Search API'yi 
                nasıl kuracağınızı öğrenin
              </p>
            </div>

            {/* Setup Steps */}
            <div className="space-y-8">
              
              {/* Step 1: Get API Key */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-white">Google API Anahtarı Alın</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Google Custom Search JSON API kullanmak için önce bir API anahtarı almanız gerekiyor.
                  </p>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Key size={16} className="mr-2" />
                      Adımlar:
                    </h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                      <li>Google Cloud Console'a gidin</li>
                      <li>Yeni bir proje oluşturun veya mevcut projeyi seçin</li>
                      <li>Custom Search JSON API'yi etkinleştirin</li>
                      <li>Kimlik bilgileri bölümünden API anahtarı oluşturun</li>
                    </ol>
                  </div>

                  <motion.a
                    href="https://developers.google.com/custom-search/v1/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Google API Dokümantasyonu
                  </motion.a>
                </div>
              </motion.div>

              {/* Step 2: Create Search Engine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-white">Özel Arama Motoru Oluşturun</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Google Custom Search Engine (CSE) oluşturarak arama kapsamınızı belirleyin.
                  </p>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Search size={16} className="mr-2" />
                      Yapılandırma:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Site to search:</strong> Tüm web'i aramak için "*" kullanın</li>
                      <li><strong>Language:</strong> Turkish (tr) seçin</li>
                      <li><strong>Search engine name:</strong> "Web Search" gibi bir isim verin</li>
                      <li><strong>SafeSearch:</strong> Moderate olarak ayarlayın</li>
                    </ul>
                  </div>

                  <motion.a
                    href="https://cse.google.com/cse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <Globe size={16} className="mr-2" />
                    Custom Search Engine Oluştur
                  </motion.a>
                </div>
              </motion.div>

              {/* Step 3: Configure Environment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-white">Environment Variables Ekleyin</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Aldığınız API anahtarı ve Search Engine ID'yi proje dosyalarınıza ekleyin.
                  </p>
                  
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold flex items-center">
                        <Code size={16} className="mr-2" />
                        .env.local dosyası:
                      </h4>
                      <motion.button
                        onClick={() => copyToClipboard(`GOOGLE_CUSTOM_SEARCH_API_KEY=your_api_key_here
GOOGLE_CUSTOM_SEARCH_ENGINE_ID=your_search_engine_id_here`, 'env')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors"
                      >
                        {copied === 'env' ? <CheckCircle size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
                        {copied === 'env' ? 'Kopyalandı!' : 'Kopyala'}
                      </motion.button>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
{`GOOGLE_CUSTOM_SEARCH_API_KEY=your_api_key_here
GOOGLE_CUSTOM_SEARCH_ENGINE_ID=your_search_engine_id_here`}
                    </pre>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-start">
                      <Shield size={16} className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-1">Güvenlik Notu</h4>
                        <p className="text-yellow-300 text-sm">
                          API anahtarlarınızı asla public repository'lerde paylaşmayın. 
                          .env.local dosyası otomatik olarak .gitignore'da bulunur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Testing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-white">Test ve Doğrulama</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Kurulumunuzu test edin ve gerçek Google verilerinin geldiğinden emin olun.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">✅ API Çalışıyor</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Gerçek Google sonuçları gelir</li>
                        <li>• Sonuçlarda "mockData" etiketi yoktur</li>
                        <li>• Güncel ve doğru veriler görürsünüz</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">⚠️ Mock Veri</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• API anahtarları eksik</li>
                        <li>• Örnek veriler gösterilir</li>
                        <li>• Yine de gerçekçi sonuçlar üretir</li>
                      </ul>
                    </div>
                  </div>

                  <motion.a
                    href="/google-sira-bulucu"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <Search size={16} className="mr-2" />
                    Şimdi Test Et
                  </motion.a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
