'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Target, 
  TrendingUp, 
  Globe, 
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Eye,
  Star,
  ArrowRight,
  Loader2,
  MapPin,
  Settings
} from 'lucide-react';

interface RankResult {
  keyword: string;
  url: string;
  position: number | null;
  found: boolean;
  searchResults: Array<{
    title: string;
    url: string;
    position: number;
    description: string;
  }>;
}

export default function GoogleRankCheckerPage() {
  const [keyword, setKeyword] = useState('');
  const [url, setUrl] = useState('');
  const [location, setLocation] = useState('tr');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RankResult | null>(null);
  const [searchHistory, setSearchHistory] = useState<RankResult[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || !url.trim()) return;

    setIsLoading(true);
    
    try {
      // Gerçek Google Search API çağrısı
      const response = await fetch('/api/google-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
          targetUrl: url.trim(),
          location: location
        }),
      });

      if (!response.ok) {
        throw new Error('Search API request failed');
      }

      const data = await response.json();
      
      // API response'u RankResult formatına çevir
      const searchResults = data.searchResults.map((item: any) => ({
        title: item.title,
        url: item.link,
        position: item.position,
        description: item.snippet
      }));

      const results: RankResult = {
        keyword: data.keyword,
        url: data.targetUrl,
        position: data.position,
        found: data.found,
        searchResults: searchResults
      };

      // Mock data indicator for UI
      (results as any).isMockData = data.mockData;

      setResults(results);
      setSearchHistory(prev => [results, ...prev.slice(0, 4)]);
      
    } catch (error) {
      console.error('Search error:', error);
      
      // Hata durumunda fallback mesajı
      setResults({
        keyword: keyword.trim(),
        url: url.trim(),
        position: null,
        found: false,
        searchResults: [{
          title: "Arama Hatası",
          url: "javascript:void(0)",
          position: 1,
          description: "Arama yapılırken bir hata oluştu. API anahtarlarınızı kontrol edin."
        }]
      });
    }
    
    setIsLoading(false);
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-500/30 text-blue-300 mb-6">
              <Search size={16} className="mr-2" />
              Ücretsiz SEO Aracı
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-display mb-6 leading-tight">
              <span className="gradient-text">Google</span>
              <br />
              <span className="text-white">Sıra Bulucu</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Web sitenizin Google arama sonuçlarında hangi sırada yer aldığını 
              <span className="text-blue-400 font-semibold"> anında öğrenin</span> ve 
              <span className="text-green-400 font-semibold"> SEO performansınızı takip edin</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 text-green-300 text-sm">
                <CheckCircle size={16} className="mr-2" />
                ✅ Gerçek Google API Aktif - Canlı Veriler Geliyor!
              </div>
              
              <motion.a
                href="/google-sira-bulucu/api-setup"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm hover:bg-purple-500/30 transition-colors"
              >
                <Settings size={16} className="mr-2" />
                API Yapılandırma
              </motion.a>
            </div>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-3xl p-8 mb-12">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Target size={16} className="inline mr-2" />
                      Arama Kelimesi
                    </label>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="Örn: bilgi güvenliği tehditleri"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Globe size={16} className="inline mr-2" />
                      Web Site URL
                    </label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://kalibre.com.tr"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      Ülke/Bölge
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="tr">Türkiye</option>
                      <option value="us">Amerika Birleşik Devletleri</option>
                      <option value="uk">Birleşik Krallık</option>
                      <option value="de">Almanya</option>
                      <option value="fr">Fransa</option>
                    </select>
                  </div>
                  
                  <div className="flex items-end">
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 rounded-xl font-semibold text-white transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Aranıyor...
                        </>
                      ) : (
                        <>
                          <Search size={20} className="mr-2" />
                          Sıra Kontrolü Yap
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <motion.button
                  type="button"
                  onClick={() => {
                    setKeyword('bilgi güvenliği tehditleri');
                    setUrl('https://kalibre.com.tr');
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white text-sm transition-colors"
                >
                  📋 Örnek ile Test Et (Kalibre.com.tr)
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="glass rounded-3xl p-8">
                              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Sonuçlar</h2>
                <div className="flex items-center space-x-4">
                  {(results as any).isMockData && (
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30 text-yellow-300 text-xs">
                      <AlertCircle size={12} className="mr-1" />
                      Örnek Veri
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock size={16} className="mr-1" />
                    {new Date().toLocaleTimeString('tr-TR')}
                  </div>
                </div>
              </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white">Arama Kelimesi</h3>
                      <Target size={20} className="text-blue-400" />
                    </div>
                    <p className="text-2xl font-bold gradient-text">{results.keyword}</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white">Sıralama</h3>
                      {results.found ? (
                        <CheckCircle size={20} className="text-green-400" />
                      ) : (
                        <AlertCircle size={20} className="text-red-400" />
                      )}
                    </div>
                    {results.found ? (
                      <p className="text-2xl font-bold text-green-400">#{results.position}</p>
                    ) : (
                      <p className="text-2xl font-bold text-red-400">Bulunamadı</p>
                    )}
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white">Durum</h3>
                      <BarChart3 size={20} className="text-yellow-400" />
                    </div>
                    <p className="text-lg font-semibold text-yellow-400">
                      {results.found && results.position 
                        ? results.position <= 3 ? 'Mükemmel 🏆' :
                          results.position <= 10 ? 'Çok İyi 🎯' :
                          results.position <= 20 ? 'İyi 👍' :
                          results.position <= 50 ? 'Orta 📈' : 'Geliştirilmeli 🔧'
                        : 'Bulunamadı ❌'
                      }
                    </p>
                  </div>
                </div>

                {results.found && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Arama Sonuçları</h3>
                    {results.searchResults.slice(0, 5).map((result, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border transition-colors ${
                          result.url === results.url 
                            ? 'bg-green-500/10 border-green-500/30' 
                            : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-bold mr-3">
                                #{result.position}
                              </span>
                              <h4 className="font-semibold text-white truncate">{result.title}</h4>
                              {result.url === results.url && (
                                <Star size={16} className="text-green-400 ml-2" />
                              )}
                            </div>
                            <p className="text-blue-400 text-sm mb-2">{result.url}</p>
                            <p className="text-gray-400 text-sm">{result.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Search History */}
          {searchHistory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Son Aramalar</h2>
                <div className="space-y-4">
                  {searchHistory.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <p className="font-semibold text-white">{search.keyword}</p>
                        <p className="text-sm text-gray-400">{search.url}</p>
                      </div>
                      <div className="text-right">
                        {search.found ? (
                          <p className="text-green-400 font-bold">#{search.position}</p>
                        ) : (
                          <p className="text-red-400 font-bold">Bulunamadı</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="gradient-text">Neden SEOTING</span>
              <br />
              <span className="text-white">Sıra Bulucu?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesyonel SEO analiz araçlarımızla web sitenizin performansını takip edin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Anlık Sonuçlar",
                description: "Google'da gerçek zamanlı sıralama kontrolü yapın"
              },
              {
                icon: Globe,
                title: "Çoklu Ülke Desteği",
                description: "Farklı ülkeler için sıralama kontrolü yapabilirsiniz"
              },
              {
                icon: Eye,
                title: "Detaylı Analiz",
                description: "Rakip analizi ve gelişim önerileri alın"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-display mb-6">
                <span className="gradient-text">SEO Performansınızı</span>
                <br />
                <span className="text-white">İyileştirin</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Profesyonel SEO hizmetlerimizle Google'da üst sıralara çıkın
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 rounded-full font-semibold text-white transition-all duration-300 neon-glow"
                >
                  SEO Danışmanlığı Al
                  <ArrowRight className="ml-2" size={20} />
                </motion.a>
                
                <motion.a
                  href="/seo-sem-hizmetleri"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
                >
                  SEO Hizmetleri
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
