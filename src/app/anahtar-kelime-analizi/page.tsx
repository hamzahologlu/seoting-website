'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  TrendingUp, 
  Target, 
  DollarSign,
  BarChart3,
  Globe,
  Zap,
  Eye,
  Users,
  Calendar,
  Award,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
  Download,
  RefreshCw
} from 'lucide-react';

interface KeywordData {
  keyword: string;
  searchVolume: number;
  competition: 'LOW' | 'MEDIUM' | 'HIGH';
  cpc: number;
  difficulty: number;
  trend: number[];
  relatedKeywords: string[];
  serpFeatures: string[];
}

interface AnalysisResult {
  mainKeyword: KeywordData;
  suggestions: KeywordData[];
  totalKeywords: number;
  avgSearchVolume: number;
  totalOpportunity: number;
}

export default function KeywordAnalysisPage() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('tr');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<string[]>([]);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsAnalyzing(true);
    
    try {
      const response = await fetch('/api/keyword-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: keyword.trim(),
          location: location
        }),
      });

      if (!response.ok) {
        throw new Error('Analiz API isteği başarısız');
      }

      const data = await response.json();
      setResults(data);
      
      // Analiz geçmişine ekle
      if (!analysisHistory.includes(keyword.trim())) {
        setAnalysisHistory(prev => [keyword.trim(), ...prev.slice(0, 4)]);
      }

    } catch (error) {
      console.error('Anahtar kelime analizi hatası:', error);
      // Mock data for demonstration
      setResults(createMockAnalysis(keyword.trim()));
    }

    setIsAnalyzing(false);
  };

  const createMockAnalysis = (searchKeyword: string): AnalysisResult => {
    const baseVolume = Math.floor(Math.random() * 50000) + 1000;
    const competitions = ['LOW', 'MEDIUM', 'HIGH'] as const;
    const competition = competitions[Math.floor(Math.random() * 3)];
    
    return {
      mainKeyword: {
        keyword: searchKeyword,
        searchVolume: baseVolume,
        competition,
        cpc: Math.round((Math.random() * 5 + 0.5) * 100) / 100,
        difficulty: Math.floor(Math.random() * 100),
        trend: Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
        relatedKeywords: [
          `${searchKeyword} hizmetleri`,
          `${searchKeyword} fiyatları`,
          `${searchKeyword} nasıl yapılır`,
          `en iyi ${searchKeyword}`,
          `${searchKeyword} örnekleri`
        ],
        serpFeatures: ['Featured Snippets', 'People Also Ask', 'Local Pack', 'Images']
      },
      suggestions: Array.from({length: 8}, (_, i) => ({
        keyword: `${searchKeyword} ${['stratejisi', 'hizmetleri', 'araçları', 'teknikleri', 'yöntemleri', 'örnekleri', 'fiyatları', 'danışmanı'][i]}`,
        searchVolume: Math.floor(Math.random() * 20000) + 500,
        competition: competitions[Math.floor(Math.random() * 3)],
        cpc: Math.round((Math.random() * 3 + 0.3) * 100) / 100,
        difficulty: Math.floor(Math.random() * 100),
        trend: Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
        relatedKeywords: [],
        serpFeatures: []
      })),
      totalKeywords: 25,
      avgSearchVolume: baseVolume,
      totalOpportunity: Math.floor(baseVolume * 1.5)
    };
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'LOW': return 'text-green-400 bg-green-500/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20';
      case 'HIGH': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCompetitionText = (competition: string) => {
    switch (competition) {
      case 'LOW': return 'Düşük';
      case 'MEDIUM': return 'Orta';
      case 'HIGH': return 'Yüksek';
      default: return 'Bilinmiyor';
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 30) return 'text-green-400';
    if (difficulty < 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-accent-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30 text-sm font-medium text-primary-300 backdrop-blur-sm mb-6">
                ✨ Gerçek Verilerle Analiz
              </span>
              
              <h1 className="text-5xl md:text-7xl font-black font-display mb-6">
                <span className="gradient-text">Anahtar Kelime</span><br />
                <span className="text-white">Analiz Merkezi</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                SEO stratejinizi güçlendirin. Arama hacmi, rekabet analizi, CPC verileri ve 
                trend analizleriyle doğru anahtar kelimeleri keşfedin.
              </p>
            </motion.div>

            {/* Analysis Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            >
              {/* API Status Badge */}
              <div className="mb-6 flex justify-center">
                <motion.a
                  href="/anahtar-kelime-analizi/api-setup"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 text-sm font-medium text-yellow-300 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300"
                >
                  ⚠️ Demo Modu - Gerçek veriler için API kurulumu →
                </motion.a>
              </div>
              <form onSubmit={handleAnalysis} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white mb-2">
                      Anahtar Kelime
                    </label>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="Örnek: dijital pazarlama"
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Ülke/Bölge
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="tr">Türkiye</option>
                      <option value="us">Amerika</option>
                      <option value="uk">İngiltere</option>
                      <option value="de">Almanya</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isAnalyzing || !keyword.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 disabled:from-gray-600 disabled:to-gray-600 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Analiz Ediliyor...</span>
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Analizi Başlat</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Quick Analysis History */}
              {analysisHistory.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-3">Son Analizler:</p>
                  <div className="flex flex-wrap gap-2">
                    {analysisHistory.map((historyKeyword, index) => (
                      <button
                        key={index}
                        onClick={() => setKeyword(historyKeyword)}
                        className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors"
                      >
                        {historyKeyword}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Analysis Results */}
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 space-y-8"
              >
                {/* Main Keyword Stats */}
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    "{results.mainKeyword.keyword}" Analiz Sonuçları
                  </h2>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {results.mainKeyword.searchVolume.toLocaleString()}
                      </h3>
                      <p className="text-gray-400 text-sm">Aylık Arama</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target size={24} className="text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold mb-1 ${getDifficultyColor(results.mainKeyword.difficulty)}`}>
                        {results.mainKeyword.difficulty}/100
                      </h3>
                      <p className="text-gray-400 text-sm">SEO Zorluğu</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <DollarSign size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        ${results.mainKeyword.cpc}
                      </h3>
                      <p className="text-gray-400 text-sm">CPC (USD)</p>
                    </div>

                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${getCompetitionColor(results.mainKeyword.competition)}`}>
                        <BarChart3 size={24} />
                      </div>
                      <h3 className={`text-2xl font-bold mb-1 ${getCompetitionColor(results.mainKeyword.competition).split(' ')[0]}`}>
                        {getCompetitionText(results.mainKeyword.competition)}
                      </h3>
                      <p className="text-gray-400 text-sm">Rekabet</p>
                    </div>
                  </div>
                </div>

                {/* Keyword Suggestions */}
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">İlgili Anahtar Kelimeler</h3>
                  
                  <div className="grid gap-4">
                    {results.suggestions.map((suggestion, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-1">
                              {suggestion.keyword}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-gray-300">
                                <Users size={14} className="inline mr-1" />
                                {suggestion.searchVolume.toLocaleString()}/ay
                              </span>
                              <span className={`px-2 py-1 rounded ${getCompetitionColor(suggestion.competition)}`}>
                                {getCompetitionText(suggestion.competition)}
                              </span>
                              <span className="text-gray-300">
                                <DollarSign size={14} className="inline mr-1" />
                                ${suggestion.cpc}
                              </span>
                              <span className={`${getDifficultyColor(suggestion.difficulty)}`}>
                                Zorluk: {suggestion.difficulty}/100
                              </span>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-primary-600 hover:bg-primary-500 rounded-lg text-white text-sm transition-colors">
                            Analiz Et
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                    <TrendingUp size={32} className="text-primary-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {results.totalKeywords}
                    </h3>
                    <p className="text-gray-400">Toplam Kelime</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                    <Eye size={32} className="text-green-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {results.avgSearchVolume.toLocaleString()}
                    </h3>
                    <p className="text-gray-400">Ortalama Arama</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
                    <Zap size={32} className="text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {results.totalOpportunity.toLocaleString()}
                    </h3>
                    <p className="text-gray-400">Toplam Fırsat</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gelişmiş <span className="gradient-text">Analiz Özellikleri</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Profesyonel SEO stratejileri için ihtiyacınız olan tüm veriler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Rekabet Analizi",
                  description: "Anahtar kelimenizin rekabet seviyesini analiz edin ve fırsatları keşfedin",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: TrendingUp,
                  title: "Trend Takibi",
                  description: "12 aylık trend verilerini izleyin ve dönemsel değişimleri görün",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: DollarSign,
                  title: "CPC Analizi", 
                  description: "Google Ads maliyetlerini öğrenin ve reklam bütçenizi optimize edin",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: Globe,
                  title: "Coğrafi Hedefleme",
                  description: "Farklı ülke ve bölgelerde arama verilerini karşılaştırın",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Search,
                  title: "SERP Analizi",
                  description: "Google arama sonuçlarının özelliklerini ve rekabeti inceleyin",
                  color: "from-pink-500 to-pink-600"
                },
                {
                  icon: Target,
                  title: "Kelime Önerileri",
                  description: "İlgili ve yüksek potansiyelli anahtar kelimeleri keşfedin",
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SEO Stratejinizi <span className="gradient-text">Güçlendirin</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Doğru anahtar kelimelerle organik trafiğinizi artırın ve rakiplerinizin önüne geçin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/seo-sem-hizmetleri"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full font-semibold text-white transition-all duration-300"
              >
                SEO Hizmetleri
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300"
              >
                Ücretsiz Danışmanlık
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
