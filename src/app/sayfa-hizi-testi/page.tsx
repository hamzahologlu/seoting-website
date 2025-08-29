'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Zap, 
  Globe, 
  Smartphone,
  Monitor,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Loader2,
  Clock,
  Gauge,
  Wifi,
  Download,
  Eye,
  Target,
  BarChart3,
  RefreshCw,
  Info
} from 'lucide-react';

interface PageSpeedResult {
  url: string;
  strategy: 'mobile' | 'desktop';
  performanceScore: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  speedIndex: number;
  suggestions: string[];
  opportunities: Array<{
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    savings: string;
  }>;
  loadingExperience?: {
    overall: string;
    metrics: {
      fcp: { percentile: number; category: string };
      lcp: { percentile: number; category: string };
      fid: { percentile: number; category: string };
      cls: { percentile: number; category: string };
    };
  };
}

interface AnalysisHistory {
  url: string;
  date: string;
  mobileScore: number;
  desktopScore: number;
}

export default function PageSpeedTestPage() {
  const [url, setUrl] = useState('');
  const [strategy, setStrategy] = useState<'mobile' | 'desktop'>('mobile');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<PageSpeedResult | null>(null);
  const [apiStatus, setApiStatus] = useState<'checking' | 'demo' | 'active'>('checking');
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisHistory[]>([]);
  const [currentTest, setCurrentTest] = useState<'mobile' | 'desktop' | 'both'>('both');

  // Check API status on component mount
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch('/api/page-speed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: 'https://google.com', strategy: 'mobile' })
        });
        const data = await response.json();
        
        if (data.apiStatus === 'real' || data.performanceScore !== undefined) {
          setApiStatus('active');
        } else {
          setApiStatus('demo');
        }
      } catch (error) {
        setApiStatus('demo');
      }
    };

    checkApiStatus();
  }, []);

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Validate URL
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch {
      alert('Lütfen geçerli bir URL girin (örn: example.com veya https://example.com)');
      return;
    }

    setIsAnalyzing(true);
    setResults(null);

    try {
      const testUrl = url.startsWith('http') ? url : `https://${url}`;
      
      if (currentTest === 'both') {
        // Test both mobile and desktop
        const [mobileResponse, desktopResponse] = await Promise.all([
          fetch('/api/page-speed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: testUrl, strategy: 'mobile' })
          }),
          fetch('/api/page-speed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: testUrl, strategy: 'desktop' })
          })
        ]);

        const mobileData = await mobileResponse.json();
        const desktopData = await desktopResponse.json();

        // Show mobile results first, but store both for comparison
        setResults(mobileData);
        
        // Add to history
        const historyEntry: AnalysisHistory = {
          url: testUrl,
          date: new Date().toLocaleString('tr-TR'),
          mobileScore: mobileData.performanceScore || 0,
          desktopScore: desktopData.performanceScore || 0
        };
        setAnalysisHistory(prev => [historyEntry, ...prev.slice(0, 4)]);
        
      } else {
        // Test single strategy
        const response = await fetch('/api/page-speed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: testUrl, strategy: currentTest })
        });

        const data = await response.json();
        setResults(data);
      }

    } catch (error) {
      console.error('Analysis error:', error);
      alert('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreCategory = (score: number) => {
    if (score >= 90) return 'Mükemmel';
    if (score >= 50) return 'Orta';
    return 'Zayıf';
  };

  const formatTime = (milliseconds: number) => {
    if (milliseconds < 1000) return `${Math.round(milliseconds)}ms`;
    return `${(milliseconds / 1000).toFixed(1)}s`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm">
                ⚡ Gerçek Verilerle Analiz
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sayfa Hızı Test
              </span>
              <br />
              <span className="text-white">Merkezi</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Web sitenizin performansını analiz edin. Yükleme hızı, Core Web Vitals, ve optimizasyon önerilerini keşfedin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Analysis Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto"
          >
            {/* API Status Badge */}
            <div className="mb-6 flex justify-center">
              {apiStatus === 'checking' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/30 text-sm font-medium text-blue-300 backdrop-blur-sm"
                >
                  <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />
                  API Durumu Kontrol Ediliyor...
                </motion.div>
              )}
              
              {apiStatus === 'active' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm"
                >
                  ✅ Google PageSpeed Insights API Aktif - Gerçek Veriler!
                </motion.div>
              )}
              
              {apiStatus === 'demo' && (
                <motion.div
                  className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 text-sm font-medium text-yellow-300 backdrop-blur-sm"
                >
                  ⚠️ Demo Modu - Gerçek veriler için API anahtarı gerekiyor
                </motion.div>
              )}
            </div>

            <form onSubmit={handleAnalysis} className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">
                    Website URL'si
                  </label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="örnek: google.com veya https://google.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Test Türü
                  </label>
                  <select
                    value={currentTest}
                    onChange={(e) => setCurrentTest(e.target.value as 'mobile' | 'desktop' | 'both')}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  >
                    <option value="both">Mobil + Masaüstü</option>
                    <option value="mobile">Sadece Mobil</option>
                    <option value="desktop">Sadece Masaüstü</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <motion.button
                    type="submit"
                    disabled={isAnalyzing}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analiz Ediliyor...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Hızı Test Et
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-6xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {results.url} Analiz Sonuçları
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  {results.strategy === 'mobile' ? <Smartphone className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
                  <span className="capitalize">{results.strategy === 'mobile' ? 'Mobil' : 'Masaüstü'} Analizi</span>
                </div>
              </div>

              {/* Performance Score */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
                    <div 
                      className={`absolute inset-0 rounded-full border-8 border-transparent ${
                        results.performanceScore >= 90 ? 'border-t-green-400 border-r-green-400' :
                        results.performanceScore >= 50 ? 'border-t-yellow-400 border-r-yellow-400' :
                        'border-t-red-400 border-r-red-400'
                      }`}
                      style={{
                        transform: `rotate(${(results.performanceScore / 100) * 360}deg)`,
                        transition: 'transform 1s ease-in-out'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-3xl font-bold ${getScoreColor(results.performanceScore)}`}>
                        {results.performanceScore}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performans Skoru</h3>
                  <p className={`text-lg font-medium ${getScoreColor(results.performanceScore)}`}>
                    {getScoreCategory(results.performanceScore)}
                  </p>
                </motion.div>
              </div>

              {/* Core Web Vitals */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h4 className="font-semibold text-white">First Contentful Paint</h4>
                  </div>
                  <p className="text-2xl font-bold text-blue-400 mb-1">
                    {formatTime(results.firstContentfulPaint)}
                  </p>
                  <p className="text-sm text-gray-400">İlk içerik görünme süresi</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-6 h-6 text-green-400" />
                    <h4 className="font-semibold text-white">Largest Contentful Paint</h4>
                  </div>
                  <p className="text-2xl font-bold text-green-400 mb-1">
                    {formatTime(results.largestContentfulPaint)}
                  </p>
                  <p className="text-sm text-gray-400">En büyük içerik yüklenme süresi</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-semibold text-white">First Input Delay</h4>
                  </div>
                  <p className="text-2xl font-bold text-yellow-400 mb-1">
                    {formatTime(results.firstInputDelay)}
                  </p>
                  <p className="text-sm text-gray-400">İlk etkileşim gecikmesi</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                    <h4 className="font-semibold text-white">Cumulative Layout Shift</h4>
                  </div>
                  <p className="text-2xl font-bold text-purple-400 mb-1">
                    {results.cumulativeLayoutShift.toFixed(3)}
                  </p>
                  <p className="text-sm text-gray-400">Görsel kararlılık skoru</p>
                </motion.div>
              </div>

              {/* Opportunities */}
              {results.opportunities && results.opportunities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                    Optimizasyon Fırsatları
                  </h3>
                  <div className="space-y-4">
                    {results.opportunities.map((opportunity, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-white">{opportunity.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            opportunity.impact === 'high' ? 'bg-red-500/20 text-red-300' :
                            opportunity.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {opportunity.impact === 'high' ? 'Yüksek Etki' :
                             opportunity.impact === 'medium' ? 'Orta Etki' : 'Düşük Etki'}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">{opportunity.description}</p>
                        {opportunity.savings && (
                          <p className="text-green-400 font-medium">Potansiyel Kazanç: {opportunity.savings}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Suggestions */}
              {results.suggestions && results.suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Info className="w-6 h-6 text-blue-400" />
                    Genel Öneriler
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {results.suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Analysis History */}
      {analysisHistory.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-400" />
                Son Analizler
              </h3>
              <div className="space-y-4">
                {analysisHistory.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-white">{item.url}</p>
                      <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <Smartphone className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-400">Mobil</span>
                        </div>
                        <span className={`font-bold ${getScoreColor(item.mobileScore)}`}>
                          {item.mobileScore}
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 mb-1">
                          <Monitor className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">Masaüstü</span>
                        </div>
                        <span className={`font-bold ${getScoreColor(item.desktopScore)}`}>
                          {item.desktopScore}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Gelişmiş Performans Analizi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Google PageSpeed Insights teknolojisiyle sitenizin performansını detaylı analiz edin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Core Web Vitals",
                description: "LCP, FID, CLS gibi kritik performans metriklerini ölçün"
              },
              {
                icon: Globe,
                title: "Gerçek Kullanıcı Verileri",
                description: "Chrome UX Report'tan gerçek kullanıcı deneyimi verileri"
              },
              {
                icon: TrendingUp,
                title: "Optimizasyon Önerileri",
                description: "Performansı artırmak için somut ve uygulanabilir öneriler"
              },
              {
                icon: Smartphone,
                title: "Mobil & Masaüstü",
                description: "Her iki platform için ayrı ayrı detaylı analiz"
              },
              {
                icon: BarChart3,
                title: "Detaylı Raporlama",
                description: "Kapsamlı performans raporları ve trend analizi"
              },
              {
                icon: Zap,
                title: "Anlık Sonuçlar",
                description: "Google API ile hızlı ve güvenilir test sonuçları"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Web Sitenizin Performansını Artırın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Yavaş yüklenen sayfalar ziyaretçilerinizi kaybetmenize neden olur. Performansınızı optimize edin ve dönüşüm oranlarınızı artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                Performans Danışmanlığı Al
              </motion.a>
              <motion.a
                href="/hizmetlerimiz"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 gap-2 border border-white/20"
              >
                <Eye className="w-5 h-5" />
                Tüm Hizmetleri İncele
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
