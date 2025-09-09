'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  BarChart3, 
  Mail, 
  Settings,
  CheckCircle,
  Loader2,
  Eye,
  Share2,
  Calendar,
  User,
  Globe,
  Target,
  TrendingUp,
  AlertCircle,
  Info
} from 'lucide-react';

interface ReportData {
  id: string;
  title: string;
  type: 'seo-analysis' | 'keyword-tracking' | 'serp-analysis' | 'bulk-analysis';
  generatedAt: string;
  data: any;
  status: 'generating' | 'completed' | 'error';
  downloadUrl?: string;
}

interface ReportGeneratorProps {
  data: any;
  reportType: string;
  onReportGenerated?: (report: ReportData) => void;
}

export default function ReportGenerator({ data, reportType, onReportGenerated }: ReportGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<ReportData | null>(null);
  const [reportOptions, setReportOptions] = useState({
    format: 'pdf' as 'pdf' | 'json' | 'csv',
    includeCharts: true,
    includeRecommendations: true,
    includeHistory: false,
    includeCompetitors: false,
    emailReport: false,
    emailAddress: ''
  });

  const generateReport = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportType,
          data,
          ...reportOptions
        })
      });

      const result = await response.json();
      
      if (result.success) {
        const newReport: ReportData = {
          id: result.reportId,
          title: `${reportType} Raporu`,
          type: reportType as any,
          generatedAt: new Date().toISOString(),
          data: data,
          status: 'completed',
          downloadUrl: result.downloadUrl
        };
        
        setGeneratedReport(newReport);
        onReportGenerated?.(newReport);
      } else {
        throw new Error(result.error || 'Rapor oluşturulamadı');
      }
    } catch (error) {
      console.error('Rapor oluşturma hatası:', error);
      alert('Rapor oluşturulurken hata oluştu. Lütfen tekrar deneyin.');
    }
    
    setIsGenerating(false);
  };

  const downloadReport = async () => {
    if (!generatedReport?.downloadUrl) return;
    
    try {
      const response = await fetch(generatedReport.downloadUrl);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `seo-raporu-${generatedReport.id}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Rapor indirme hatası:', error);
      alert('Rapor indirilemedi. Lütfen tekrar deneyin.');
    }
  };

  const getReportTypeInfo = (type: string) => {
    switch (type) {
      case 'seo-analysis':
        return {
          title: 'SEO Analiz Raporu',
          description: 'Kapsamlı SEO performans analizi ve öneriler',
          icon: BarChart3,
          color: 'from-blue-500 to-purple-500'
        };
      case 'keyword-tracking':
        return {
          title: 'Anahtar Kelime Takip Raporu',
          description: 'Anahtar kelime sıralama değişimleri ve trend analizi',
          icon: TrendingUp,
          color: 'from-green-500 to-emerald-500'
        };
      case 'serp-analysis':
        return {
          title: 'SERP Analiz Raporu',
          description: 'Arama sonuçları özellik analizi ve fırsat değerlendirmesi',
          icon: Target,
          color: 'from-orange-500 to-red-500'
        };
      case 'bulk-analysis':
        return {
          title: 'Toplu Site Analiz Raporu',
          description: 'Çoklu site performans karşılaştırması ve optimizasyon önerileri',
          icon: Globe,
          color: 'from-purple-500 to-pink-500'
        };
      default:
        return {
          title: 'SEO Raporu',
          description: 'Genel SEO analiz raporu',
          icon: FileText,
          color: 'from-gray-500 to-gray-600'
        };
    }
  };

  const reportInfo = getReportTypeInfo(reportType);
  const ReportIcon = reportInfo.icon;

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
      <div className="text-center mb-8">
        <div className={`w-16 h-16 bg-gradient-to-r ${reportInfo.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <ReportIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{reportInfo.title}</h3>
        <p className="text-gray-300">{reportInfo.description}</p>
      </div>

      {/* Report Options */}
      <div className="space-y-6 mb-8">
        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Rapor Seçenekleri
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Format Selection */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">Format</label>
            <div className="space-y-2">
              {[
                { value: 'pdf', label: 'PDF', icon: FileText },
                { value: 'json', label: 'JSON', icon: FileText },
                { value: 'csv', label: 'CSV', icon: FileText }
              ].map((format) => (
                <label key={format.value} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value={format.value}
                    checked={reportOptions.format === format.value}
                    onChange={(e) => setReportOptions(prev => ({ ...prev, format: e.target.value as any }))}
                    className="text-purple-600"
                  />
                  <format.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-white">{format.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Content Options */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">İçerik Seçenekleri</label>
            <div className="space-y-3">
              {[
                { key: 'includeCharts', label: 'Grafikler ve Charts', icon: BarChart3 },
                { key: 'includeRecommendations', label: 'Öneriler', icon: Lightbulb },
                { key: 'includeHistory', label: 'Geçmiş Veriler', icon: Calendar },
                { key: 'includeCompetitors', label: 'Rakip Analizi', icon: Target }
              ].map((option) => (
                <label key={option.key} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-white/5 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={reportOptions[option.key as keyof typeof reportOptions] as boolean}
                    onChange={(e) => setReportOptions(prev => ({ ...prev, [option.key]: e.target.checked }))}
                    className="text-purple-600"
                  />
                  <option.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-white text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Email Options */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <label className="flex items-center gap-3 mb-3 cursor-pointer">
            <input
              type="checkbox"
              checked={reportOptions.emailReport}
              onChange={(e) => setReportOptions(prev => ({ ...prev, emailReport: e.target.checked }))}
              className="text-purple-600"
            />
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-white font-medium">Email ile gönder</span>
          </label>
          
          {reportOptions.emailReport && (
            <input
              type="email"
              value={reportOptions.emailAddress}
              onChange={(e) => setReportOptions(prev => ({ ...prev, emailAddress: e.target.value }))}
              placeholder="email@example.com"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
            />
          )}
        </div>
      </div>

      {/* Generate Button */}
      <motion.button
        onClick={generateReport}
        disabled={isGenerating}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Rapor Oluşturuluyor...
          </>
        ) : (
          <>
            <FileText className="w-5 h-5" />
            Rapor Oluştur
          </>
        )}
      </motion.button>

      {/* Generated Report */}
      {generatedReport && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h4 className="text-lg font-semibold text-white">Rapor Hazır!</h4>
                <p className="text-sm text-gray-400">
                  {new Date(generatedReport.generatedAt).toLocaleString('tr-TR')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                {reportOptions.format.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.button
              onClick={downloadReport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              İndir
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Eye className="w-4 h-4" />
              Önizle
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Share2 className="w-4 h-4" />
              Paylaş
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Report Features */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[
          {
            icon: BarChart3,
            title: 'Görsel Grafikler',
            description: 'Detaylı performans grafikleri'
          },
          {
            icon: Target,
            title: 'Hedefli Öneriler',
            description: 'Kişiselleştirilmiş SEO önerileri'
          },
          {
            icon: Calendar,
            title: 'Zaman Serisi',
            description: 'Geçmiş veriler ve trend analizi'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <feature.icon className="w-6 h-6 text-purple-400 mb-2" />
            <h5 className="font-medium text-white mb-1">{feature.title}</h5>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
