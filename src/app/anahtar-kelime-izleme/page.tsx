'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Target, 
  TrendingUp, 
  TrendingDown,
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
  Bell,
  Calendar,
  Activity,
  Zap,
  Award,
  Lightbulb,
  Settings,
  Play,
  Pause,
  Square,
  Mail,
  Smartphone,
  Globe,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

interface KeywordTracking {
  id: string;
  keyword: string;
  targetUrl: string;
  location: string;
  device: 'desktop' | 'mobile';
  currentPosition: number;
  previousPosition: number;
  bestPosition: number;
  worstPosition: number;
  positionHistory: Array<{
    date: string;
    position: number;
  }>;
  searchVolume: number;
  competition: 'LOW' | 'MEDIUM' | 'HIGH';
  cpc: number;
  lastChecked: string;
  status: 'active' | 'paused' | 'error';
  notifications: boolean;
  alertThreshold: number;
}

interface TrackingProject {
  id: string;
  name: string;
  website: string;
  keywords: KeywordTracking[];
  createdAt: string;
  lastUpdated: string;
  status: 'active' | 'paused';
  totalKeywords: number;
  averagePosition: number;
  positionChanges: number;
}

export default function KeywordTrackingPage() {
  const [projects, setProjects] = useState<TrackingProject[]>([]);
  const [activeProject, setActiveProject] = useState<TrackingProject | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [newKeyword, setNewKeyword] = useState({
    keyword: '',
    targetUrl: '',
    location: 'tr',
    device: 'desktop' as 'desktop' | 'mobile',
    alertThreshold: 5
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'keywords' | 'history' | 'alerts' | 'settings'>('overview');

  // Mock data initialization
  useEffect(() => {
    const mockProjects: TrackingProject[] = [
      {
        id: 'project_1',
        name: 'Ana Site Takibi',
        website: 'seoting.com',
        createdAt: '2024-01-15',
        lastUpdated: new Date().toISOString(),
        status: 'active',
        totalKeywords: 5,
        averagePosition: 12.4,
        positionChanges: 3,
        keywords: [
          {
            id: 'kw_1',
            keyword: 'dijital pazarlama İstanbul',
            targetUrl: 'seoting.com',
            location: 'tr',
            device: 'desktop',
            currentPosition: 8,
            previousPosition: 12,
            bestPosition: 5,
            worstPosition: 18,
            positionHistory: [
              { date: '2024-01-15', position: 18 },
              { date: '2024-01-22', position: 15 },
              { date: '2024-01-29', position: 12 },
              { date: '2024-02-05', position: 8 }
            ],
            searchVolume: 1200,
            competition: 'HIGH',
            cpc: 2.5,
            lastChecked: new Date().toISOString(),
            status: 'active',
            notifications: true,
            alertThreshold: 5
          },
          {
            id: 'kw_2',
            keyword: 'SEO hizmetleri',
            targetUrl: 'seoting.com/hizmetlerimiz',
            location: 'tr',
            device: 'desktop',
            currentPosition: 15,
            previousPosition: 15,
            bestPosition: 12,
            worstPosition: 22,
            positionHistory: [
              { date: '2024-01-15', position: 22 },
              { date: '2024-01-22', position: 18 },
              { date: '2024-01-29', position: 15 },
              { date: '2024-02-05', position: 15 }
            ],
            searchVolume: 800,
            competition: 'MEDIUM',
            cpc: 1.8,
            lastChecked: new Date().toISOString(),
            status: 'active',
            notifications: true,
            alertThreshold: 10
          }
        ]
      }
    ];
    setProjects(mockProjects);
    setActiveProject(mockProjects[0]);
  }, []);

  const addKeyword = async () => {
    if (!newKeyword.keyword.trim() || !newKeyword.targetUrl.trim()) {
      alert('Lütfen anahtar kelime ve hedef URL girin.');
      return;
    }

    if (!activeProject) return;

    const keywordId = `kw_${Date.now()}`;
    const newKeywordData: KeywordTracking = {
      id: keywordId,
      keyword: newKeyword.keyword.trim(),
      targetUrl: newKeyword.targetUrl.trim(),
      location: newKeyword.location,
      device: newKeyword.device,
      currentPosition: 0,
      previousPosition: 0,
      bestPosition: 0,
      worstPosition: 0,
      positionHistory: [],
      searchVolume: Math.floor(Math.random() * 2000) + 100,
      competition: ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)] as 'LOW' | 'MEDIUM' | 'HIGH',
      cpc: Math.random() * 5 + 0.5,
      lastChecked: new Date().toISOString(),
      status: 'active',
      notifications: true,
      alertThreshold: newKeyword.alertThreshold
    };

    // Simulate API call to get initial position
    setIsTracking(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock position data
      newKeywordData.currentPosition = Math.floor(Math.random() * 50) + 1;
      newKeywordData.bestPosition = newKeywordData.currentPosition;
      newKeywordData.worstPosition = newKeywordData.currentPosition;
      newKeywordData.positionHistory = [{
        date: new Date().toISOString(),
        position: newKeywordData.currentPosition
      }];

      const updatedProject = {
        ...activeProject,
        keywords: [...activeProject.keywords, newKeywordData],
        totalKeywords: activeProject.keywords.length + 1,
        lastUpdated: new Date().toISOString()
      };

      setActiveProject(updatedProject);
      setProjects(prev => prev.map(p => p.id === activeProject.id ? updatedProject : p));
      
      // Reset form
      setNewKeyword({
        keyword: '',
        targetUrl: '',
        location: 'tr',
        device: 'desktop',
        alertThreshold: 5
      });

    } catch (error) {
      console.error('Anahtar kelime ekleme hatası:', error);
      alert('Anahtar kelime eklenirken hata oluştu.');
    }
    
    setIsTracking(false);
  };

  const removeKeyword = (keywordId: string) => {
    if (!activeProject) return;

    const updatedProject = {
      ...activeProject,
      keywords: activeProject.keywords.filter(kw => kw.id !== keywordId),
      totalKeywords: activeProject.keywords.length - 1,
      lastUpdated: new Date().toISOString()
    };

    setActiveProject(updatedProject);
    setProjects(prev => prev.map(p => p.id === activeProject.id ? updatedProject : p));
  };

  const toggleKeywordStatus = (keywordId: string) => {
    if (!activeProject) return;

    const updatedProject = {
      ...activeProject,
      keywords: activeProject.keywords.map(kw => 
        kw.id === keywordId 
          ? { ...kw, status: kw.status === 'active' ? 'paused' : 'active' }
          : kw
      ),
      lastUpdated: new Date().toISOString()
    };

    setActiveProject(updatedProject);
    setProjects(prev => prev.map(p => p.id === activeProject.id ? updatedProject : p));
  };

  const getPositionChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return previous - current; // Positive means improvement
  };

  const getPositionChangeColor = (change: number) => {
    if (change > 0) return 'text-green-400';
    if (change < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getPositionChangeIcon = (change: number) => {
    if (change > 0) return TrendingUp;
    if (change < 0) return TrendingDown;
    return Activity;
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'LOW': return 'text-green-400 bg-green-500/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20';
      case 'HIGH': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'paused': return 'text-yellow-400 bg-yellow-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-sm font-medium text-purple-300 backdrop-blur-sm">
                📈 Anahtar Kelime İzleme
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Anahtar Kelime
              </span>
              <br />
              <span className="text-white">İzleme</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Anahtar kelimelerinizin Google sıralamalarını otomatik takip edin. 
              Sıralama değişimlerini anında bildirim alın ve SEO stratejinizi optimize edin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-7xl mx-auto"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {activeProject?.name || 'Proje Seçin'}
                </h2>
                <p className="text-gray-300">
                  {activeProject?.website} • {activeProject?.totalKeywords} anahtar kelime
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    {activeProject?.averagePosition.toFixed(1) || '0.0'}
                  </div>
                  <p className="text-sm text-gray-400">Ortalama Sıralama</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">
                    {activeProject?.positionChanges || 0}
                  </div>
                  <p className="text-sm text-gray-400">Pozisyon Değişimi</p>
                </div>
              </div>
            </div>

            {/* Add Keyword Form */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Yeni Anahtar Kelime Ekle</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">
                    <Search className="w-4 h-4 inline mr-2" />
                    Anahtar Kelime
                  </label>
                  <input
                    type="text"
                    value={newKeyword.keyword}
                    onChange={(e) => setNewKeyword(prev => ({ ...prev, keyword: e.target.value }))}
                    placeholder="örnek: dijital pazarlama"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-white mb-2">
                    <Target className="w-4 h-4 inline mr-2" />
                    Hedef URL
                  </label>
                  <input
                    type="text"
                    value={newKeyword.targetUrl}
                    onChange={(e) => setNewKeyword(prev => ({ ...prev, targetUrl: e.target.value }))}
                    placeholder="seoting.com/hizmetlerimiz"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-white mb-2">
                      <Globe className="w-4 h-4 inline mr-2" />
                      Konum
                    </label>
                    <select
                      value={newKeyword.location}
                      onChange={(e) => setNewKeyword(prev => ({ ...prev, location: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    >
                      <option value="tr">Türkiye</option>
                      <option value="us">Amerika</option>
                      <option value="uk">İngiltere</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="desktop"
                      name="device"
                      value="desktop"
                      checked={newKeyword.device === 'desktop'}
                      onChange={(e) => setNewKeyword(prev => ({ ...prev, device: e.target.value as 'desktop' | 'mobile' }))}
                      className="text-purple-600"
                    />
                    <label htmlFor="desktop" className="text-white">Masaüstü</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="mobile"
                      name="device"
                      value="mobile"
                      checked={newKeyword.device === 'mobile'}
                      onChange={(e) => setNewKeyword(prev => ({ ...prev, device: e.target.value as 'desktop' | 'mobile' }))}
                      className="text-purple-600"
                    />
                    <label htmlFor="mobile" className="text-white">Mobil</label>
                  </div>
                </div>

                <motion.button
                  onClick={addKeyword}
                  disabled={isTracking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTracking ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Ekleniyor...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Anahtar Kelime Ekle
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
              {[
                { id: 'overview', label: 'Genel Bakış', icon: Eye },
                { id: 'keywords', label: 'Anahtar Kelimeler', icon: Search },
                { id: 'history', label: 'Geçmiş', icon: Calendar },
                { id: 'alerts', label: 'Bildirimler', icon: Bell },
                { id: 'settings', label: 'Ayarlar', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
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
                  <h3 className="text-2xl font-bold text-white mb-6">Proje Özeti</h3>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">{activeProject?.totalKeywords || 0}</h4>
                      <p className="text-gray-400 text-sm">Toplam Anahtar Kelime</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">{activeProject?.positionChanges || 0}</h4>
                      <p className="text-gray-400 text-sm">Pozisyon İyileşmesi</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">{activeProject?.averagePosition.toFixed(1) || '0.0'}</h4>
                      <p className="text-gray-400 text-sm">Ortalama Sıralama</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Bell className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-1">
                        {activeProject?.keywords.filter(kw => kw.notifications).length || 0}
                      </h4>
                      <p className="text-gray-400 text-sm">Aktif Bildirim</p>
                    </div>
                  </div>

                  {/* Recent Changes */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4">Son Değişiklikler</h4>
                    <div className="space-y-3">
                      {activeProject?.keywords.slice(0, 5).map((keyword) => {
                        const change = getPositionChange(keyword.currentPosition, keyword.previousPosition);
                        const ChangeIcon = getPositionChangeIcon(change);
                        return (
                          <div key={keyword.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <div>
                              <p className="font-medium text-white">{keyword.keyword}</p>
                              <p className="text-sm text-gray-400">{keyword.targetUrl}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="text-white font-semibold">#{keyword.currentPosition}</p>
                                <p className="text-sm text-gray-400">Sıralama</p>
                              </div>
                              {change !== 0 && (
                                <div className={`flex items-center gap-1 ${getPositionChangeColor(change)}`}>
                                  <ChangeIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium">{Math.abs(change)}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'keywords' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Anahtar Kelime Listesi</h3>
                  
                  <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-white/5">
                          <tr>
                            <th className="text-left py-4 px-6 text-white font-medium">Anahtar Kelime</th>
                            <th className="text-center py-4 px-6 text-white font-medium">Sıralama</th>
                            <th className="text-center py-4 px-6 text-white font-medium">Değişim</th>
                            <th className="text-center py-4 px-6 text-white font-medium">En İyi</th>
                            <th className="text-center py-4 px-6 text-white font-medium">Rekabet</th>
                            <th className="text-center py-4 px-6 text-white font-medium">Durum</th>
                            <th className="text-center py-4 px-6 text-white font-medium">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeProject?.keywords.map((keyword) => {
                            const change = getPositionChange(keyword.currentPosition, keyword.previousPosition);
                            const ChangeIcon = getPositionChangeIcon(change);
                            return (
                              <tr key={keyword.id} className="border-t border-white/5">
                                <td className="py-4 px-6">
                                  <div>
                                    <p className="font-medium text-white">{keyword.keyword}</p>
                                    <p className="text-sm text-gray-400">{keyword.targetUrl}</p>
                                  </div>
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <span className="text-2xl font-bold text-white">#{keyword.currentPosition}</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                  {change !== 0 && (
                                    <div className={`flex items-center justify-center gap-1 ${getPositionChangeColor(change)}`}>
                                      <ChangeIcon className="w-4 h-4" />
                                      <span className="font-medium">{Math.abs(change)}</span>
                                    </div>
                                  )}
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <span className="text-green-400 font-semibold">#{keyword.bestPosition}</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCompetitionColor(keyword.competition)}`}>
                                    {keyword.competition}
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(keyword.status)}`}>
                                    {keyword.status === 'active' ? 'Aktif' : 'Duraklatıldı'}
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                  <div className="flex items-center justify-center gap-2">
                                    <button
                                      onClick={() => toggleKeywordStatus(keyword.id)}
                                      className={`p-2 rounded-lg transition-colors ${
                                        keyword.status === 'active' 
                                          ? 'bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30'
                                          : 'bg-green-600/20 text-green-400 hover:bg-green-600/30'
                                      }`}
                                    >
                                      {keyword.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                    </button>
                                    <button
                                      onClick={() => removeKeyword(keyword.id)}
                                      className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 transition-colors"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Sıralama Geçmişi</h3>
                  
                  {activeProject?.keywords.map((keyword) => (
                    <div key={keyword.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">{keyword.keyword}</h4>
                      
                      <div className="space-y-3">
                        {keyword.positionHistory.map((entry, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">#{entry.position}</span>
                              </div>
                              <div>
                                <p className="text-white font-medium">Sıralama: #{entry.position}</p>
                                <p className="text-sm text-gray-400">
                                  {new Date(entry.date).toLocaleDateString('tr-TR')}
                                </p>
                              </div>
                            </div>
                            
                            {index > 0 && (
                              <div className="text-right">
                                {(() => {
                                  const prevPosition = keyword.positionHistory[index - 1].position;
                                  const change = prevPosition - entry.position;
                                  const ChangeIcon = getPositionChangeIcon(change);
                                  return (
                                    <div className={`flex items-center gap-1 ${getPositionChangeColor(change)}`}>
                                      <ChangeIcon className="w-4 h-4" />
                                      <span className="text-sm font-medium">{Math.abs(change)}</span>
                                    </div>
                                  );
                                })()}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'alerts' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Bildirim Ayarları</h3>
                  
                  <div className="grid gap-6">
                    {activeProject?.keywords.map((keyword) => (
                      <div key={keyword.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-white">{keyword.keyword}</h4>
                            <p className="text-gray-400">{keyword.targetUrl}</p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={keyword.notifications}
                                onChange={() => {
                                  const updatedProject = {
                                    ...activeProject,
                                    keywords: activeProject.keywords.map(kw => 
                                      kw.id === keyword.id 
                                        ? { ...kw, notifications: !kw.notifications }
                                        : kw
                                    )
                                  };
                                  setActiveProject(updatedProject);
                                }}
                                className="text-purple-600"
                              />
                              <label className="text-white">Bildirimler</label>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <label className="text-white text-sm">Eşik:</label>
                              <select
                                value={keyword.alertThreshold}
                                onChange={(e) => {
                                  const updatedProject = {
                                    ...activeProject,
                                    keywords: activeProject.keywords.map(kw => 
                                      kw.id === keyword.id 
                                        ? { ...kw, alertThreshold: parseInt(e.target.value) }
                                        : kw
                                    )
                                  };
                                  setActiveProject(updatedProject);
                                }}
                                className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-sm"
                              >
                                <option value={1}>1</option>
                                <option value={3}>3</option>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Proje Ayarları</h3>
                  
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4">Genel Ayarlar</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Otomatik Güncelleme</p>
                          <p className="text-gray-400 text-sm">Anahtar kelimeleri otomatik olarak güncelle</p>
                        </div>
                        <input type="checkbox" defaultChecked className="text-purple-600" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Email Bildirimleri</p>
                          <p className="text-gray-400 text-sm">Önemli değişiklikler için email bildirimi gönder</p>
                        </div>
                        <input type="checkbox" defaultChecked className="text-purple-600" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">SMS Bildirimleri</p>
                          <p className="text-gray-400 text-sm">Kritik değişiklikler için SMS gönder</p>
                        </div>
                        <input type="checkbox" className="text-purple-600" />
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
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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
                Güncelle
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Anahtar Kelime İzleme Özellikleri
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Anahtar kelimelerinizin sıralamalarını otomatik takip edin ve SEO stratejinizi optimize edin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Otomatik Takip",
                description: "Anahtar kelimelerinizi günlük olarak otomatik takip edin"
              },
              {
                icon: Bell,
                title: "Akıllı Bildirimler",
                description: "Önemli sıralama değişikliklerinde anında bildirim alın"
              },
              {
                icon: TrendingUp,
                title: "Trend Analizi",
                description: "Sıralama geçmişinizi analiz edin ve trendleri görün"
              },
              {
                icon: Target,
                title: "Hedef Belirleme",
                description: "Sıralama hedefleri belirleyin ve ilerlemeyi takip edin"
              },
              {
                icon: BarChart3,
                title: "Detaylı Raporlar",
                description: "Kapsamlı analiz raporları ve performans metrikleri"
              },
              {
                icon: Settings,
                title: "Özelleştirilebilir",
                description: "Bildirim ayarları ve takip sıklığını özelleştirin"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
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
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Anahtar Kelime Takibini Başlatın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Anahtar kelimelerinizin sıralamalarını otomatik takip edin ve SEO stratejinizi veri odaklı olarak optimize edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/iletisim"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 gap-2"
              >
                <Target className="w-5 h-5" />
                İzleme Hizmeti Al
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
