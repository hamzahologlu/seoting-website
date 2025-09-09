'use client';

import { useState, useEffect } from 'react';
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
  Users,
  Image,
  Video,
  MessageCircle,
  ShoppingCart,
  BookOpen,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  Info,
  Zap,
  Award,
  Lightbulb
} from 'lucide-react';

interface SERPFeature {
  type: string;
  title: string;
  description: string;
  position: number;
  url?: string;
  snippet?: string;
  image?: string;
  rating?: number;
  reviews?: number;
  price?: string;
  date?: string;
}

interface SERPAnalysisResult {
  keyword: string;
  location: string;
  totalResults: number;
  features: {
    featuredSnippets: SERPFeature[];
    peopleAlsoAsk: SERPFeature[];
    localPack: SERPFeature[];
    images: SERPFeature[];
    videos: SERPFeature[];
    shopping: SERPFeature[];
    knowledgePanel: SERPFeature[];
    topStories: SERPFeature[];
    relatedSearches: string[];
  };
  organicResults: SERPFeature[];
  paidResults: SERPFeature[];
  analysis: {
    competitionLevel: 'LOW' | 'MEDIUM' | 'HIGH';
    featureDensity: number;
    opportunityScore: number;
    recommendations: string[];
  };
  lastUpdated: string;
}

export default function SERPAnalysisPage() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('tr');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SERPAnalysisResult | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<SERPAnalysisResult[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'organic' | 'paid' | 'analysis'>('overview');

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsAnalyzing(true);
    
    try {
      // Google Search API ile SERP analizi
      const response = await fetch('/api/google-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          keyword: keyword.trim(),
          targetUrl: 'example.com', // SERP analizi için
          location: location
        })
      });

      const data = await response.json();
      
      // SERP özelliklerini analiz et
      const serpFeatures = analyzeSERPFeatures(data.searchResults, keyword.trim());
      
      const analysisResult: SERPAnalysisResult = {
        keyword: keyword.trim(),
        location: location,
        totalResults: data.searchResults.length,
        features: serpFeatures,
        organicResults: data.searchResults.slice(0, 10),
        paidResults: [], // Şimdilik boş
        analysis: {
          competitionLevel: calculateCompetitionLevel(serpFeatures),
          featureDensity: calculateFeatureDensity(serpFeatures),
          opportunityScore: calculateOpportunityScore(serpFeatures),
          recommendations: generateRecommendations(serpFeatures)
        },
        lastUpdated: new Date().toISOString()
      };

      setResults(analysisResult);
      setAnalysisHistory(prev => [analysisResult, ...prev.slice(0, 4)]);

    } catch (error) {
      console.error('SERP analiz hatası:', error);
      alert('Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
    
    setIsAnalyzing(false);
  };

  const analyzeSERPFeatures = (searchResults: any[], keyword: string) => {
    const features = {
      featuredSnippets: [] as SERPFeature[],
      peopleAlsoAsk: [] as SERPFeature[],
      localPack: [] as SERPFeature[],
      images: [] as SERPFeature[],
      videos: [] as SERPFeature[],
      shopping: [] as SERPFeature[],
      knowledgePanel: [] as SERPFeature[],
      topStories: [] as SERPFeature[],
      relatedSearches: [] as string[]
    };

    // Mock SERP özellikleri oluştur
    if (keyword.toLowerCase().includes('nedir') || keyword.toLowerCase().includes('nasıl')) {
      features.featuredSnippets.push({
        type: 'featured-snippet',
        title: `${keyword} Hakkında Detaylı Bilgi`,
        description: `${keyword} konusunda kapsamlı açıklama ve örnekler. Bu konuda uzman görüşler ve pratik bilgiler.`,
        position: 0,
        url: 'https://example.com/featured-snippet'
      });
    }

    if (keyword.toLowerCase().includes('istanbul') || keyword.toLowerCase().includes('ankara')) {
      features.localPack.push({
        type: 'local-pack',
        title: `${keyword} Hizmetleri - İstanbul`,
        description: 'Yerel işletmeler ve hizmet sağlayıcıları',
        position: 0,
        url: 'https://maps.google.com',
        rating: 4.5,
        reviews: 127
      });
    }

    // People Also Ask
    features.peopleAlsoAsk = [
      {
        type: 'people-also-ask',
        title: `${keyword} nasıl yapılır?`,
        description: 'Adım adım rehber ve ipuçları',
        position: 0
      },
      {
        type: 'people-also-ask',
        title: `${keyword} fiyatları nedir?`,
        description: 'Güncel fiyat bilgileri ve karşılaştırma',
        position: 1
      },
      {
        type: 'people-also-ask',
        title: `En iyi ${keyword} hangisi?`,
        description: 'Uzman önerileri ve değerlendirmeler',
        position: 2
      }
    ];

    // Related searches
    features.relatedSearches = [
      `${keyword} 2024`,
      `${keyword} fiyat`,
      `${keyword} nasıl`,
      `${keyword} örnekleri`,
      `${keyword} rehberi`
    ];

    return features;
  };

  const calculateCompetitionLevel = (features: any): 'LOW' | 'MEDIUM' | 'HIGH' => {
    const featureCount = Object.values(features).reduce((total: number, feature: any) => {
      return total + (Array.isArray(feature) ? feature.length : 0);
    }, 0);
    
    if (featureCount > 15) return 'HIGH';
    if (featureCount > 8) return 'MEDIUM';
    return 'LOW';
  };

  const calculateFeatureDensity = (features: any): number => {
    const totalFeatures = Object.values(features).reduce((total: number, feature: any) => {
      return total + (Array.isArray(feature) ? feature.length : 0);
    }, 0);
    
    return Math.min(100, (totalFeatures / 20) * 100);
  };

  const calculateOpportunityScore = (features: any): number => {
    let score = 50; // Base score
    
    // Featured snippets varsa fırsat
    if (features.featuredSnippets.length > 0) score += 20;
    
    // Local pack varsa fırsat
    if (features.localPack.length > 0) score += 15;
    
    // People also ask varsa fırsat
    if (features.peopleAlsoAsk.length > 0) score += 10;
    
    // Images yoksa fırsat
    if (features.images.length === 0) score += 15;
    
    // Videos yoksa fırsat
    if (features.videos.length === 0) score += 10;
    
    return Math.min(100, score);
  };

  const generateRecommendations = (features: any): string[] => {
    const recommendations = [];
    
    if (features.featuredSnippets.length === 0) {
      recommendations.push('Featured Snippet için optimize edilmiş içerik oluşturun');
    }
    
    if (features.localPack.length === 0 && (keyword.toLowerCase().includes('istanbul') || keyword.toLowerCase().includes('ankara'))) {
      recommendations.push('Google My Business profilinizi optimize edin');
    }
    
    if (features.images.length === 0) {
      recommendations.push('Görsel içerik stratejisi geliştirin');
    }
    
    if (features.videos.length === 0) {
      recommendations.push('Video içerik üretimi planlayın');
    }
    
    if (features.peopleAlsoAsk.length > 0) {
      recommendations.push('People Also Ask sorularına yanıt veren içerik oluşturun');
    }
    
    return recommendations;
  };

  const getCompetitionColor = (level: string) => {
    switch (level) {
      case 'LOW': return 'text-green-400 bg-green-500/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20';
      case 'HIGH': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getFeatureIcon = (type: string) => {
    switch (type) {
      case 'featured-snippet': return BookOpen;
      case 'people-also-ask': return MessageCircle;
      case 'local-pack': return MapPin;
      case 'images': return Image;
      case 'videos': return Video;
      case 'shopping': return ShoppingCart;
      case 'knowledge-panel': return Info;
      case 'top-stories': return Calendar;
      default: return Search;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 text-sm font-medium text-green-300 backdrop-blur-sm">
                🔍 SERP Analiz Aracı
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                SERP Analiz
              </span>
              <br />
              <span className="text-white">Merkezi</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Google arama sonuçlarının özelliklerini analiz edin. Featured Snippets, Local Pack, 
              People Also Ask ve daha fazlasını keşfedin.
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
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">
                    <Search className="w-4 h-4 inline mr-2" />
                    Anahtar Kelime
                  </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="örnek: dijital pazarlama İstanbul"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Ülke/Bölge
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300"
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
                disabled={isAnalyzing}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    SERP Analiz Ediliyor...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    SERP Analizi Başlat
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
                  "{results.keyword}" SERP Analizi
                </h2>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Son Güncelleme: {new Date(results.lastUpdated).toLocaleString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Konum: {results.location.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              {/* Analysis Summary */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{results.totalResults}</h3>
                  <p className="text-gray-400 text-sm">Toplam Sonuç</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {results.analysis.featureDensity.toFixed(0)}%
                  </h3>
                  <p className="text-gray-400 text-sm">Özellik Yoğunluğu</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {results.analysis.opportunityScore.toFixed(0)}%
                  </h3>
                  <p className="text-gray-400 text-sm">Fırsat Skoru</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    results.analysis.competitionLevel === 'LOW' ? 'bg-green-500' :
                    results.analysis.competitionLevel === 'MEDIUM' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {results.analysis.competitionLevel}
                  </h3>
                  <p className="text-gray-400 text-sm">Rekabet Seviyesi</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
                {[
                  { id: 'overview', label: 'Genel Bakış', icon: Eye },
                  { id: 'features', label: 'SERP Özellikleri', icon: Star },
                  { id: 'organic', label: 'Organik Sonuçlar', icon: Search },
                  { id: 'paid', label: 'Reklamlar', icon: TrendingUp },
                  { id: 'analysis', label: 'Analiz & Öneriler', icon: Lightbulb }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-green-600 text-white'
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
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">SERP Özellikleri Özeti</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Object.entries(results.features).map(([key, value]) => {
                        if (key === 'relatedSearches') return null;
                        const features = value as SERPFeature[];
                        if (features.length === 0) return null;
                        
                        return (
                          <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <Search className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                                <p className="text-gray-400 text-sm">{features.length} öğe</p>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              {features.slice(0, 2).map((feature, index) => (
                                <div key={index} className="text-sm text-gray-300 truncate">
                                  {feature.title}
                                </div>
                              ))}
                              {features.length > 2 && (
                                <div className="text-sm text-gray-400">
                                  +{features.length - 2} daha...
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Detaylı SERP Özellikleri</h3>
                    
                    {Object.entries(results.features).map(([key, value]) => {
                      if (key === 'relatedSearches') return null;
                      const features = value as SERPFeature[];
                      if (features.length === 0) return null;
                      
                      return (
                        <div key={key} className="bg-white/5 rounded-xl p-6 border border-white/10">
                          <h4 className="text-xl font-semibold text-white mb-4 capitalize flex items-center gap-2">
                            <Search className="w-5 h-5" />
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                            <span className="text-sm text-gray-400">({features.length} öğe)</span>
                          </h4>
                          
                          <div className="space-y-4">
                            {features.map((feature, index) => (
                              <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/5">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h5 className="font-medium text-white mb-2">{feature.title}</h5>
                                    {feature.description && (
                                      <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                                    )}
                                    {feature.url && (
                                      <p className="text-blue-400 text-sm">{feature.url}</p>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    {feature.rating && (
                                      <div className="flex items-center gap-1 mb-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-white text-sm">{feature.rating}</span>
                                      </div>
                                    )}
                                    {feature.reviews && (
                                      <p className="text-gray-400 text-xs">{feature.reviews} değerlendirme</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === 'organic' && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6">Organik Arama Sonuçları</h3>
                    
                    {results.organicResults.map((result, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-2">{result.title}</h4>
                            <p className="text-blue-400 text-sm mb-2">{result.url}</p>
                            {result.snippet && (
                              <p className="text-gray-300 text-sm">{result.snippet}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'paid' && (
                  <div className="text-center py-12">
                    <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Reklam Analizi</h3>
                    <p className="text-gray-400">Bu özellik yakında eklenecek</p>
                  </div>
                )}

                {activeTab === 'analysis' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Analiz ve Öneriler</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" />
                          SERP Analizi
                        </h4>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Rekabet Seviyesi:</span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCompetitionColor(results.analysis.competitionLevel)}`}>
                              {results.analysis.competitionLevel}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Özellik Yoğunluğu:</span>
                            <span className="text-white font-semibold">
                              {results.analysis.featureDensity.toFixed(0)}%
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">Fırsat Skoru:</span>
                            <span className="text-green-400 font-semibold">
                              {results.analysis.opportunityScore.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5" />
                          Öneriler
                        </h4>
                        
                        <div className="space-y-3">
                          {results.analysis.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-300 text-sm">{recommendation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300"
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
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300"
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
                      <p className="font-medium text-white">{item.keyword}</p>
                      <p className="text-sm text-gray-400">
                        {item.totalResults} sonuç • {new Date(item.lastUpdated).toLocaleString('tr-TR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">
                        {item.analysis.opportunityScore.toFixed(0)}%
                      </div>
                      <p className="text-sm text-gray-400">Fırsat Skoru</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Gelişmiş SERP Analizi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Google arama sonuçlarının tüm özelliklerini detaylı analiz edin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Featured Snippets",
                description: "Sıfır pozisyon için optimize edilmiş içerik stratejileri"
              },
              {
                icon: MapPin,
                title: "Local Pack",
                description: "Yerel arama sonuçlarında görünürlük analizi"
              },
              {
                icon: MessageCircle,
                title: "People Also Ask",
                description: "Kullanıcı sorularına yanıt veren içerik fırsatları"
              },
              {
                icon: Image,
                title: "Görsel Sonuçlar",
                description: "Görsel arama optimizasyonu için fırsat analizi"
              },
              {
                icon: Video,
                title: "Video Sonuçlar",
                description: "Video içerik stratejisi için SERP analizi"
              },
              {
                icon: ShoppingCart,
                title: "Shopping Sonuçları",
                description: "E-ticaret için ürün görünürlüğü analizi"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
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
            className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-12 border border-green-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              SERP'te Öne Çıkın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Detaylı SERP analizi ile rakiplerinizin önüne geçin ve arama sonuçlarında daha görünür olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                SERP Optimizasyonu Al
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
