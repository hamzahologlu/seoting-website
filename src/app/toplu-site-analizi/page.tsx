'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Globe, 
  Zap, 
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Eye,
  Star,
  ArrowRight,
  Loader2,
  Plus,
  Trash2,
  Download,
  RefreshCw,
  Info,
  Target,
  TrendingUp,
  Activity,
  Layers,
  Monitor,
  Smartphone,
  Wifi,
  AlertTriangle,
  CheckSquare,
  XCircle,
  FileText,
  Settings,
  Play,
  Pause,
  Square
} from 'lucide-react';

interface SiteAnalysisResult {
  url: string;
  status: 'pending' | 'analyzing' | 'completed' | 'error';
  performance: {
    score: number;
    fcp: number;
    lcp: number;
    cls: number;
    si: number;
    tti: number;
    tbt: number;
  };
  opportunities: Array<{
    title: string;
    description: string;
    impact: 'LOW' | 'MEDIUM' | 'HIGH';
    savings: string;
  }>;
  diagnostics: Array<{
    title: string;
    description: string;
    score: number;
  }>;
  lastAnalyzed?: string;
  error?: string;
}

interface BulkAnalysisResult {
  id: string;
  name: string;
  urls: string[];
  results: SiteAnalysisResult[];
  createdAt: string;
  completedAt?: string;
  status: 'pending' | 'analyzing' | 'completed' | 'error';
  summary: {
    totalSites: number;
    completedSites: number;
    averageScore: number;
    totalOpportunities: number;
    criticalIssues: number;
  };
}

export default function BulkSiteAnalysisPage() {
  const [urls, setUrls] = useState<string[]>(['']);
  const [analysisName, setAnalysisName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentAnalysis, setCurrentAnalysis] = useState<BulkAnalysisResult | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<BulkAnalysisResult[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'details' | 'opportunities' | 'comparison'>('overview');

  const addUrl = () => {
    setUrls([...urls, '']);
  };

  const removeUrl = (index: number) => {
    if (urls.length > 1) {
      setUrls(urls.filter((_, i) => i !== index));
    }
  };

  const updateUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const validateUrls = (urlList: string[]): string[] => {
    return urlList.filter(url => {
      try {
        new URL(url.startsWith('http') ? url : `https://${url}`);
        return true;
      } catch {
        return false;
      }
    });
  };

  const handleBulkAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validUrls = validateUrls(urls);
    if (validUrls.length === 0) {
      alert('Lütfen en az bir geçerli URL girin.');
      return;
    }

    setIsAnalyzing(true);
    
    const analysisId = `analysis_${Date.now()}`;
    const analysisName = analysisName || `Toplu Analiz ${new Date().toLocaleDateString('tr-TR')}`;
    
    const newAnalysis: BulkAnalysisResult = {
      id: analysisId,
      name: analysisName,
      urls: validUrls,
      results: validUrls.map(url => ({
        url,
        status: 'pending' as const,
        performance: {
          score: 0,
          fcp: 0,
          lcp: 0,
          cls: 0,
          si: 0,
          tti: 0,
          tbt: 0
        },
        opportunities: [],
        diagnostics: []
      })),
      createdAt: new Date().toISOString(),
      status: 'analyzing',
      summary: {
        totalSites: validUrls.length,
        completedSites: 0,
        averageScore: 0,
        totalOpportunities: 0,
        criticalIssues: 0
      }
    };

    setCurrentAnalysis(newAnalysis);
    setAnalysisHistory(prev => [newAnalysis, ...prev.slice(0, 4)]);

    // Simulate bulk analysis
    await performBulkAnalysis(newAnalysis);
  };

  const performBulkAnalysis = async (analysis: BulkAnalysisResult) => {
    const updatedAnalysis = { ...analysis };
    
    for (let i = 0; i < analysis.urls.length; i++) {
      const url = analysis.urls[i];
      
      // Update status to analyzing
      updatedAnalysis.results[i].status = 'analyzing';
      setCurrentAnalysis({ ...updatedAnalysis });
      
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock Page Speed API call
        const mockResult = await generateMockPageSpeedResult(url);
        updatedAnalysis.results[i] = {
          ...updatedAnalysis.results[i],
          status: 'completed',
          ...mockResult,
          lastAnalyzed: new Date().toISOString()
        };
        
        // Update summary
        updatedAnalysis.summary.completedSites = i + 1;
        updatedAnalysis.summary.averageScore = calculateAverageScore(updatedAnalysis.results);
        updatedAnalysis.summary.totalOpportunities = calculateTotalOpportunities(updatedAnalysis.results);
        updatedAnalysis.summary.criticalIssues = calculateCriticalIssues(updatedAnalysis.results);
        
        setCurrentAnalysis({ ...updatedAnalysis });
        
      } catch (error) {
        updatedAnalysis.results[i].status = 'error';
        updatedAnalysis.results[i].error = 'Analiz sırasında hata oluştu';
        setCurrentAnalysis({ ...updatedAnalysis });
      }
    }
    
    // Mark analysis as completed
    updatedAnalysis.status = 'completed';
    updatedAnalysis.completedAt = new Date().toISOString();
    setCurrentAnalysis({ ...updatedAnalysis });
    setIsAnalyzing(false);
  };

  const generateMockPageSpeedResult = async (url: string): Promise<Partial<SiteAnalysisResult>> => {
    // Mock performance data
    const score = Math.floor(Math.random() * 40) + 60; // 60-100 range
    const fcp = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
    const lcp = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    const cls = Math.random() * 0.3; // 0-0.3
    const si = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
    const tti = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    const tbt = Math.floor(Math.random() * 500) + 100; // 100-600ms

    const opportunities = [
      {
        title: "Görselleri optimize edin",
        description: "WebP formatına dönüştürün ve sıkıştırın",
        impact: "HIGH" as const,
        savings: "2.5 saniye"
      },
      {
        title: "JavaScript'i optimize edin",
        description: "Kullanılmayan JavaScript kodlarını kaldırın",
        impact: "MEDIUM" as const,
        savings: "1.2 saniye"
      },
      {
        title: "CSS'i optimize edin",
        description: "Kullanılmayan CSS kodlarını kaldırın",
        impact: "MEDIUM" as const,
        savings: "0.8 saniye"
      }
    ];

    const diagnostics = [
      {
        title: "Mobil uyumluluk",
        description: "Sayfa mobil cihazlarda düzgün görüntüleniyor",
        score: 95
      },
      {
        title: "HTTPS kullanımı",
        description: "Sayfa güvenli HTTPS protokolü kullanıyor",
        score: 100
      },
      {
        title: "Meta etiketleri",
        description: "Sayfa uygun meta etiketlere sahip",
        score: 85
      }
    ];

    return {
      performance: { score, fcp, lcp, cls, si, tti, tbt },
      opportunities,
      diagnostics
    };
  };

  const calculateAverageScore = (results: SiteAnalysisResult[]): number => {
    const completedResults = results.filter(r => r.status === 'completed');
    if (completedResults.length === 0) return 0;
    
    const totalScore = completedResults.reduce((sum, result) => sum + result.performance.score, 0);
    return Math.round(totalScore / completedResults.length);
  };

  const calculateTotalOpportunities = (results: SiteAnalysisResult[]): number => {
    return results.reduce((total, result) => total + result.opportunities.length, 0);
  };

  const calculateCriticalIssues = (results: SiteAnalysisResult[]): number => {
    return results.reduce((total, result) => {
      return total + result.opportunities.filter(opp => opp.impact === 'HIGH').length;
    }, 0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400 bg-green-500/20';
    if (score >= 70) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-red-400 bg-red-500/20';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400 bg-red-500/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20';
      case 'LOW': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'analyzing': return Loader2;
      case 'error': return XCircle;
      default: return Clock;
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
                🚀 Toplu Site Analizi
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Toplu Site
              </span>
              <br />
              <span className="text-white">Analizi</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Birden fazla web sitesini aynı anda analiz edin. Performans, hız ve optimizasyon 
              fırsatlarını toplu olarak değerlendirin.
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
            <form onSubmit={handleBulkAnalysis} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Analiz Adı (Opsiyonel)
                </label>
                <input
                  type="text"
                  value={analysisName}
                  onChange={(e) => setAnalysisName(e.target.value)}
                  placeholder="örnek: Müşteri Siteleri Analizi"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-4">
                  <Globe className="w-4 h-4 inline mr-2" />
                  Analiz Edilecek Siteler
                </label>
                
                <div className="space-y-3">
                  {urls.map((url, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => updateUrl(index, e.target.value)}
                        placeholder="https://example.com"
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      />
                      {urls.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeUrl(index)}
                          className="px-4 py-3 bg-red-600/20 text-red-400 rounded-xl hover:bg-red-600/30 transition-colors border border-red-500/30"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={addUrl}
                  className="mt-3 flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Plus className="w-4 h-4" />
                  Site Ekle
                </button>
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
                    Toplu Analiz Yapılıyor...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Toplu Analizi Başlat
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Current Analysis Results */}
      {currentAnalysis && (
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
                  {currentAnalysis.name}
                </h2>
                <div className="flex items-center justify-center gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Başlangıç: {new Date(currentAnalysis.createdAt).toLocaleString('tr-TR')}</span>
                  </div>
                  {currentAnalysis.completedAt && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Tamamlandı: {new Date(currentAnalysis.completedAt).toLocaleString('tr-TR')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentAnalysis.summary.totalSites}</h3>
                  <p className="text-gray-400 text-sm">Toplam Site</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentAnalysis.summary.completedSites}</h3>
                  <p className="text-gray-400 text-sm">Tamamlanan</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentAnalysis.summary.averageScore}</h3>
                  <p className="text-gray-400 text-sm">Ortalama Skor</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentAnalysis.summary.criticalIssues}</h3>
                  <p className="text-gray-400 text-sm">Kritik Sorun</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
                {[
                  { id: 'overview', label: 'Genel Bakış', icon: Eye },
                  { id: 'details', label: 'Detaylı Sonuçlar', icon: BarChart3 },
                  { id: 'opportunities', label: 'Optimizasyon Fırsatları', icon: Target },
                  { id: 'comparison', label: 'Karşılaştırma', icon: TrendingUp }
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
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Site Durumu Özeti</h3>
                    
                    <div className="grid gap-4">
                      {currentAnalysis.results.map((result, index) => {
                        const StatusIcon = getStatusIcon(result.status);
                        return (
                          <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  result.status === 'completed' ? 'bg-green-500/20' :
                                  result.status === 'analyzing' ? 'bg-blue-500/20' :
                                  result.status === 'error' ? 'bg-red-500/20' : 'bg-gray-500/20'
                                }`}>
                                  {result.status === 'analyzing' ? (
                                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                                  ) : (
                                    <StatusIcon className={`w-5 h-5 ${
                                      result.status === 'completed' ? 'text-green-400' :
                                      result.status === 'error' ? 'text-red-400' : 'text-gray-400'
                                    }`} />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white">{result.url}</h4>
                                  <p className="text-sm text-gray-400">
                                    {result.status === 'completed' ? 'Analiz tamamlandı' :
                                     result.status === 'analyzing' ? 'Analiz ediliyor...' :
                                     result.status === 'error' ? 'Hata oluştu' : 'Bekliyor'}
                                  </p>
                                </div>
                              </div>
                              
                              {result.status === 'completed' && (
                                <div className="text-right">
                                  <div className={`text-2xl font-bold px-3 py-1 rounded-full ${getScoreColor(result.performance.score)}`}>
                                    {result.performance.score}
                                  </div>
                                  <p className="text-sm text-gray-400">Performans Skoru</p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Detaylı Performans Sonuçları</h3>
                    
                    {currentAnalysis.results.filter(r => r.status === 'completed').map((result, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-xl font-semibold text-white mb-4">{result.url}</h4>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="font-medium text-white mb-2">First Contentful Paint</h5>
                            <p className="text-2xl font-bold text-blue-400">{result.performance.fcp}ms</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="font-medium text-white mb-2">Largest Contentful Paint</h5>
                            <p className="text-2xl font-bold text-green-400">{result.performance.lcp}ms</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="font-medium text-white mb-2">Cumulative Layout Shift</h5>
                            <p className="text-2xl font-bold text-yellow-400">{result.performance.cls.toFixed(3)}</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <h5 className="font-medium text-white mb-2">Speed Index</h5>
                            <p className="text-2xl font-bold text-purple-400">{result.performance.si}ms</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'opportunities' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Optimizasyon Fırsatları</h3>
                    
                    {currentAnalysis.results.filter(r => r.status === 'completed').map((result, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-xl font-semibold text-white mb-4">{result.url}</h4>
                        
                        <div className="space-y-4">
                          {result.opportunities.map((opportunity, oppIndex) => (
                            <div key={oppIndex} className="bg-white/5 rounded-lg p-4 border border-white/5">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="font-medium text-white mb-2">{opportunity.title}</h5>
                                  <p className="text-gray-300 text-sm mb-2">{opportunity.description}</p>
                                  <p className="text-green-400 text-sm font-medium">
                                    Tasarruf: {opportunity.savings}
                                  </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(opportunity.impact)}`}>
                                  {opportunity.impact}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'comparison' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Site Karşılaştırması</h3>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left py-3 px-4 text-white font-medium">Site</th>
                              <th className="text-center py-3 px-4 text-white font-medium">Skor</th>
                              <th className="text-center py-3 px-4 text-white font-medium">FCP</th>
                              <th className="text-center py-3 px-4 text-white font-medium">LCP</th>
                              <th className="text-center py-3 px-4 text-white font-medium">CLS</th>
                              <th className="text-center py-3 px-4 text-white font-medium">Fırsatlar</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentAnalysis.results.filter(r => r.status === 'completed').map((result, index) => (
                              <tr key={index} className="border-b border-white/5">
                                <td className="py-3 px-4 text-white">{result.url}</td>
                                <td className="py-3 px-4 text-center">
                                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(result.performance.score)}`}>
                                    {result.performance.score}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-center text-blue-400">{result.performance.fcp}ms</td>
                                <td className="py-3 px-4 text-center text-green-400">{result.performance.lcp}ms</td>
                                <td className="py-3 px-4 text-center text-yellow-400">{result.performance.cls.toFixed(3)}</td>
                                <td className="py-3 px-4 text-center text-purple-400">{result.opportunities.length}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                  Optimizasyon Hizmeti Al
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
                Analiz Geçmişi
              </h3>
              <div className="space-y-4">
                {analysisHistory.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors"
                    onClick={() => setCurrentAnalysis(item)}
                  >
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">
                        {item.summary.totalSites} site • {new Date(item.createdAt).toLocaleString('tr-TR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">
                        {item.summary.averageScore}
                      </div>
                      <p className="text-sm text-gray-400">Ortalama Skor</p>
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
              Toplu Site Analizi Özellikleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Birden fazla web sitesini aynı anda analiz edin ve performanslarını karşılaştırın
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Toplu Analiz",
                description: "Birden fazla siteyi aynı anda analiz edin ve sonuçları karşılaştırın"
              },
              {
                icon: BarChart3,
                title: "Detaylı Metrikler",
                description: "Core Web Vitals, hız skorları ve performans göstergeleri"
              },
              {
                icon: Target,
                title: "Optimizasyon Fırsatları",
                description: "Her site için özel optimizasyon önerileri ve tasarruf hesaplamaları"
              },
              {
                icon: TrendingUp,
                title: "Karşılaştırma",
                description: "Siteler arası performans karşılaştırması ve sıralama"
              },
              {
                icon: Download,
                title: "Raporlama",
                description: "Detaylı analiz raporları ve PDF export özelliği"
              },
              {
                icon: Activity,
                title: "Gerçek Zamanlı",
                description: "Analiz sürecini gerçek zamanlı olarak takip edin"
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
              Toplu Site Optimizasyonu
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Birden fazla web sitenizin performansını aynı anda analiz edin ve optimizasyon fırsatlarını keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                Toplu Optimizasyon Al
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
