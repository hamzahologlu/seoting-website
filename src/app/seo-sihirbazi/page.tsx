'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  Smartphone,
  Monitor,
  Search,
  Eye,
  AlertCircle,
  CheckCircle,
  Loader2,
  Download,
  RefreshCw,
  ArrowRight,
  Star,
  Clock,
  Gauge,
  Users,
  Award,
  Lightbulb
} from 'lucide-react';

interface SEOPerformanceData {
  url: string;
  keywords: {
    keyword: string;
    position: number | null;
    found: boolean;
    trend: 'up' | 'down' | 'stable';
    searchVolume?: number;
  }[];
  performance: {
    mobileScore: number;
    desktopScore: number;
    coreWebVitals: {
      lcp: number;
      fcp: number;
      fid: number;
      cls: number;
    };
    opportunities: string[];
  };
  competitors: {
    url: string;
    avgPosition: number;
    avgSpeed: number;
    strength: 'weak' | 'medium' | 'strong';
  }[];
  overallScore: number;
  recommendations: {
    priority: 'high' | 'medium' | 'low';
    category: 'technical' | 'content' | 'performance';
    title: string;
    description: string;
    impact: string;
  }[];
  lastUpdated: string;
}

export default function SEODashboardPage() {
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SEOPerformanceData | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<SEOPerformanceData[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'keywords' | 'performance' | 'competitors' | 'recommendations'>('overview');

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !keywords.trim()) return;

    setIsAnalyzing(true);
    
    try {
      const keywordList = keywords.split('\n').map(k => k.trim()).filter(k => k);
      const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
      
      // 1. Anahtar kelime sıralama analizi
      const keywordResults = await Promise.all(
        keywordList.map(async (keyword) => {
          const response = await fetch('/api/google-search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              keyword: keyword,
              targetUrl: cleanUrl,
              location: 'tr'
            })
          });
          const data = await response.json();
          return {
            keyword,
            position: data.position,
            found: data.found,
            trend: 'stable' as const // Şimdilik stable, gelecekte trend analizi ekleyebiliriz
          };
        })
      );

      // 2. Sayfa hızı analizi (mobil ve masaüstü)
      const [mobileResponse, desktopResponse] = await Promise.all([
        fetch('/api/page-speed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: cleanUrl, strategy: 'mobile' })
        }),
        fetch('/api/page-speed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: cleanUrl, strategy: 'desktop' })
        })
      ]);

      const mobileData = await mobileResponse.json();
      const desktopData = await desktopResponse.json();

      // 3. Rakip analizi (basit örnek)
      const competitors = [
        {
          url: 'example1.com',
          avgPosition: 2.5,
          avgSpeed: 85,
          strength: 'strong' as const
        },
        {
          url: 'example2.com',
          avgPosition: 4.2,
          avgSpeed: 72,
          strength: 'medium' as const
        }
      ];

      // 4. Genel skor hesaplama
      const avgPosition = keywordResults
        .filter(k => k.found && k.position)
        .reduce((sum, k) => sum + (k.position || 0), 0) / keywordResults.filter(k => k.found).length || 0;
      
      const avgSpeed = (mobileData.performanceScore + desktopData.performanceScore) / 2;
      
      // Basit skor hesaplama (0-100)
      const positionScore = avgPosition > 0 ? Math.max(0, 100 - (avgPosition * 10)) : 0;
      const speedScore = avgSpeed;
      const overallScore = Math.round((positionScore + speedScore) / 2);

      // 5. Öneriler oluşturma
      const recommendations = [];
      
      if (avgPosition > 10) {
        recommendations.push({
          priority: 'high' as const,
          category: 'content' as const,
          title: 'Anahtar Kelime Optimizasyonu',
          description: 'Sıralamanızı iyileştirmek için içerik optimizasyonu yapın',
          impact: 'Yüksek'
        });
      }
      
      if (avgSpeed < 70) {
        recommendations.push({
          priority: 'high' as const,
          category: 'performance' as const,
          title: 'Sayfa Hızı Optimizasyonu',
          description: 'Sayfa yükleme hızınızı artırın',
          impact: 'Yüksek'
        });
      }

      const analysisResult: SEOPerformanceData = {
        url: cleanUrl,
        keywords: keywordResults,
        performance: {
          mobileScore: mobileData.performanceScore,
          desktopScore: desktopData.performanceScore,
          coreWebVitals: {
            lcp: mobileData.largestContentfulPaint,
            fcp: mobileData.firstContentfulPaint,
            fid: mobileData.firstInputDelay,
            cls: mobileData.cumulativeLayoutShift
          },
          opportunities: mobileData.suggestions || []
        },
        competitors,
        overallScore,
        recommendations,
        lastUpdated: new Date().toISOString()
      };

      setResults(analysisResult);
      setAnalysisHistory(prev => [analysisResult, ...prev.slice(0, 4)]);

    } catch (error) {
      console.error('Analiz hatası:', error);
      alert('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
    
    setIsAnalyzing(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreCategory = (score: number) => {
    if (score >= 80) return 'Mükemmel';
    if (score >= 60) return 'İyi';
    if (score >= 40) return 'Orta';
    return 'Zayıf';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
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
                🎩 Sihirli SEO Analizi
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SEO Sihirbazı
              </span>
              <br />
              <span className="text-white">✨</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sihirli dokunuşlarla SEO performansınızı büyüleyin! 
              Sıralama + Hız analizi birleştiren kapsamlı SEO sihirbazı.
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
            <form onSubmit={handleAnalysis} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Website URL'si
                  </label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="örnek: seoting.com veya https://seoting.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <Search className="w-4 h-4 inline mr-2" />
                    Test Türü
                  </label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300">
                    <option value="comprehensive">Kapsamlı Analiz (Sıralama + Hız)</option>
                    <option value="ranking">Sadece Sıralama Analizi</option>
                    <option value="speed">Sadece Hız Analizi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  <Target className="w-4 h-4 inline mr-2" />
                  Anahtar Kelimeler (Her satıra bir kelime)
                </label>
                <textarea
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="dijital pazarlama&#10;SEO hizmetleri&#10;İstanbul dijital ajans&#10;web tasarım"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isAnalyzing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analiz Ediliyor...
                  </>
                ) : (
                  <>
                    <BarChart3 className="w-5 h-5" />
                    Sihirli SEO Analizi Başlat
                  </>
                )}
              </motion.button>
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
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-7xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {results.url} - SEO Performance Analizi
                </h2>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Son Güncelleme: {new Date(results.lastUpdated).toLocaleString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Genel Skor: {results.overallScore}/100</span>
                  </div>
                </div>
              </div>

              {/* Overall Score */}
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
                        results.overallScore >= 80 ? 'border-t-green-400 border-r-green-400' :
                        results.overallScore >= 60 ? 'border-t-yellow-400 border-r-yellow-400' :
                        'border-t-red-400 border-r-red-400'
                      }`}
                      style={{
                        transform: `rotate(${(results.overallScore / 100) * 360}deg)`,
                        transition: 'transform 1s ease-in-out'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-3xl font-bold ${getScoreColor(results.overallScore)}`}>
                        {results.overallScore}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Genel SEO Skoru</h3>
                  <p className={`text-lg font-medium ${getScoreColor(results.overallScore)}`}>
                    {getScoreCategory(results.overallScore)}
                  </p>
                </motion.div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
                {[
                  { id: 'overview', label: 'Genel Bakış', icon: Eye },
                  { id: 'keywords', label: 'Anahtar Kelimeler', icon: Target },
                  { id: 'performance', label: 'Performans', icon: Zap },
                  { id: 'competitors', label: 'Rakipler', icon: Users },
                  { id: 'recommendations', label: 'Öneriler', icon: Lightbulb }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-blue-400" />
                        <h3 className="text-lg font-semibold text-white">Sıralama Performansı</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Ortalama Sıralama:</span>
                          <span className="text-white font-semibold">
                            {results.keywords.filter(k => k.found && k.position).length > 0 
                              ? `#${Math.round(results.keywords.filter(k => k.found && k.position).reduce((sum, k) => sum + (k.position || 0), 0) / results.keywords.filter(k => k.found).length)}`
                              : 'Bulunamadı'
                            }
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Bulunan Kelimeler:</span>
                          <span className="text-green-400 font-semibold">
                            {results.keywords.filter(k => k.found).length}/{results.keywords.length}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6 text-green-400" />
                        <h3 className="text-lg font-semibold text-white">Hız Performansı</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Mobil Skor:</span>
                          <span className={`font-semibold ${getScoreColor(results.performance.mobileScore)}`}>
                            {results.performance.mobileScore}/100
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Masaüstü Skor:</span>
                          <span className={`font-semibold ${getScoreColor(results.performance.desktopScore)}`}>
                            {results.performance.desktopScore}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white">Rakip Analizi</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Analiz Edilen Rakipler:</span>
                          <span className="text-white font-semibold">{results.competitors.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Güçlü Rakipler:</span>
                          <span className="text-red-400 font-semibold">
                            {results.competitors.filter(c => c.strength === 'strong').length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'keywords' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6">Anahtar Kelime Analizi</h3>
                    {results.keywords.map((keyword, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{keyword.keyword}</h4>
                            <div className="flex items-center gap-4">
                              {keyword.found ? (
                                <>
                                  <span className="text-green-400 font-bold">#{keyword.position}</span>
                                  <span className="text-gray-300">Sıralama</span>
                                </>
                              ) : (
                                <span className="text-red-400 font-bold">Bulunamadı</span>
                              )}
                              <span className={`px-2 py-1 rounded text-xs ${
                                keyword.trend === 'up' ? 'bg-green-500/20 text-green-300' :
                                keyword.trend === 'down' ? 'bg-red-500/20 text-red-300' :
                                'bg-gray-500/20 text-gray-300'
                              }`}>
                                {keyword.trend === 'up' ? '↑ Yükseliyor' :
                                 keyword.trend === 'down' ? '↓ Düşüyor' : '→ Sabit'}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            {keyword.found && keyword.position ? (
                              <div className={`text-2xl font-bold ${
                                keyword.position <= 3 ? 'text-green-400' :
                                keyword.position <= 10 ? 'text-yellow-400' :
                                keyword.position <= 20 ? 'text-orange-400' : 'text-red-400'
                              }`}>
                                #{keyword.position}
                              </div>
                            ) : (
                              <div className="text-2xl font-bold text-red-400">-</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Performans Analizi</h3>
                    
                    {/* Speed Scores */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Smartphone className="w-6 h-6 text-blue-400" />
                          <h4 className="text-lg font-semibold text-white">Mobil Performans</h4>
                        </div>
                        <div className="text-center">
                          <div className={`text-4xl font-bold mb-2 ${getScoreColor(results.performance.mobileScore)}`}>
                            {results.performance.mobileScore}
                          </div>
                          <p className="text-gray-300">/ 100</p>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Monitor className="w-6 h-6 text-green-400" />
                          <h4 className="text-lg font-semibold text-white">Masaüstü Performans</h4>
                        </div>
                        <div className="text-center">
                          <div className={`text-4xl font-bold mb-2 ${getScoreColor(results.performance.desktopScore)}`}>
                            {results.performance.desktopScore}
                          </div>
                          <p className="text-gray-300">/ 100</p>
                        </div>
                      </div>
                    </div>

                    {/* Core Web Vitals */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Core Web Vitals</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {(results.performance.coreWebVitals.lcp / 1000).toFixed(1)}s
                          </div>
                          <p className="text-sm text-gray-300">LCP</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {(results.performance.coreWebVitals.fcp / 1000).toFixed(1)}s
                          </div>
                          <p className="text-sm text-gray-300">FCP</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-2xl font-bold text-yellow-400 mb-1">
                            {results.performance.coreWebVitals.fid}ms
                          </div>
                          <p className="text-sm text-gray-300">FID</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {results.performance.coreWebVitals.cls.toFixed(3)}
                          </div>
                          <p className="text-sm text-gray-300">CLS</p>
                        </div>
                      </div>
                    </div>

                    {/* Opportunities */}
                    {results.performance.opportunities.length > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Optimizasyon Fırsatları</h4>
                        <div className="space-y-3">
                          {results.performance.opportunities.map((opportunity, index) => (
                            <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-300">{opportunity}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'competitors' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6">Rakip Analizi</h3>
                    {results.competitors.map((competitor, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{competitor.url}</h4>
                            <div className="flex items-center gap-4">
                              <span className="text-gray-300">Ortalama Sıralama: <span className="text-white font-semibold">#{competitor.avgPosition.toFixed(1)}</span></span>
                              <span className="text-gray-300">Ortalama Hız: <span className="text-white font-semibold">{competitor.avgSpeed}/100</span></span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              competitor.strength === 'strong' ? 'bg-red-500/20 text-red-300' :
                              competitor.strength === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-green-500/20 text-green-300'
                            }`}>
                              {competitor.strength === 'strong' ? 'Güçlü Rakip' :
                               competitor.strength === 'medium' ? 'Orta Rakip' : 'Zayıf Rakip'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'recommendations' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6">Öneriler ve Aksiyon Planı</h3>
                    {results.recommendations.map((rec, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(rec.priority)}`}>
                            {rec.priority === 'high' ? 'Yüksek Öncelik' :
                             rec.priority === 'medium' ? 'Orta Öncelik' : 'Düşük Öncelik'}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-white mb-2">{rec.title}</h4>
                            <p className="text-gray-300 mb-3">{rec.description}</p>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-400">Kategori: {rec.category}</span>
                              <span className="text-sm text-gray-400">Etki: {rec.impact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Raporu İndir
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <RefreshCw className="w-4 h-4" />
                  Analizi Yenile
                </motion.button>
                
                <motion.a
                  href="/iletisim"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                  SEO Danışmanlığı Al
                </motion.a>
              </div>
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
                    className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => setResults(item)}
                  >
                    <div>
                      <p className="font-medium text-white">{item.url}</p>
                      <p className="text-sm text-gray-400">
                        {item.keywords.length} anahtar kelime • {new Date(item.lastUpdated).toLocaleString('tr-TR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getScoreColor(item.overallScore)}`}>
                        {item.overallScore}
                      </div>
                      <p className="text-sm text-gray-400">Genel Skor</p>
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
              Kapsamlı SEO Analizi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sıralama ve performans verilerini birleştiren tek dashboard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Birleşik Analiz",
                description: "Sıralama ve hız verilerini tek yerde analiz edin"
              },
              {
                icon: Target,
                title: "Anahtar Kelime Takibi",
                description: "Tüm anahtar kelimelerinizi tek seferde kontrol edin"
              },
              {
                icon: Zap,
                title: "Performans Metrikleri",
                description: "Core Web Vitals ve hız skorlarını görün"
              },
              {
                icon: Users,
                title: "Rakip Analizi",
                description: "Rakiplerinizin performansını karşılaştırın"
              },
              {
                icon: Lightbulb,
                title: "Akıllı Öneriler",
                description: "AI destekli iyileştirme önerileri alın"
              },
              {
                icon: Download,
                title: "Detaylı Raporlar",
                description: "Analiz sonuçlarınızı PDF olarak indirin"
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
              SEO Performansınızı Artırın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Kapsamlı analiz sonuçlarıyla SEO stratejinizi optimize edin ve rakiplerinizin önüne geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                SEO Danışmanlığı Al
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
