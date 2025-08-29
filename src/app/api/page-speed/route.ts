import { NextResponse } from 'next/server';

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
  apiStatus?: string;
}

// Mock data generator for demo mode
function generateMockPageSpeedData(url: string, strategy: 'mobile' | 'desktop'): PageSpeedResult {
  // Base scores - mobile typically lower than desktop
  const baseScore = strategy === 'mobile' ? 
    Math.floor(Math.random() * 30) + 50 : // 50-80 for mobile
    Math.floor(Math.random() * 25) + 70;  // 70-95 for desktop

  const isFastSite = url.includes('google.com') || url.includes('youtube.com') || url.includes('facebook.com');
  const performanceScore = isFastSite ? Math.min(95, baseScore + 20) : baseScore;

  // Generate realistic Core Web Vitals based on performance score
  const multiplier = strategy === 'mobile' ? 1.5 : 1.0;
  const fcp = performanceScore > 80 ? 
    (Math.random() * 1000 + 800) * multiplier : 
    (Math.random() * 2000 + 1500) * multiplier;
  
  const lcp = fcp + (Math.random() * 1500 + 500) * multiplier;
  const fid = performanceScore > 80 ? 
    Math.random() * 50 + 10 : 
    Math.random() * 200 + 100;
  
  const cls = performanceScore > 80 ? 
    Math.random() * 0.05 : 
    Math.random() * 0.15 + 0.1;

  const speedIndex = (lcp + fcp) / 2 + Math.random() * 500;

  // Generate suggestions based on performance
  const allSuggestions = [
    "Görsel formatlarını optimize edin (WebP, AVIF kullanın)",
    "JavaScript ve CSS dosyalarını sıkıştırın",
    "Gereksiz üçüncü taraf scriptlerini kaldırın",
    "Görselleri lazy loading ile yükleyin",
    "Browser cache süresini artırın",
    "CDN (Content Delivery Network) kullanın",
    "Kritik CSS'i inline olarak ekleyin",
    "Büyük görselleri optimize edin ve boyutlandırın",
    "Font yüklemelerini optimize edin",
    "Server response time'ı iyileştirin"
  ];

  const suggestionCount = performanceScore > 80 ? 3 : performanceScore > 60 ? 5 : 7;
  const suggestions = allSuggestions
    .sort(() => Math.random() - 0.5)
    .slice(0, suggestionCount);

  // Generate opportunities
  const opportunities = [
    {
      title: "Görselleri optimize edin",
      description: "JPEG ve PNG dosyalarını sıkıştırarak dosya boyutunu azaltın",
      impact: performanceScore < 60 ? 'high' as const : 'medium' as const,
      savings: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 9)}s`
    },
    {
      title: "Kullanılmayan JavaScript'i kaldırın",
      description: "Sayfa yüklemesini yavaşlatan gereksiz JS kodlarını temizleyin",
      impact: performanceScore < 70 ? 'high' as const : 'low' as const,
      savings: `${Math.floor(Math.random() * 2) + 1}.${Math.floor(Math.random() * 9)}s`
    },
    {
      title: "Text sıkıştırmasını etkinleştirin",
      description: "Gzip veya Brotli sıkıştırma ile dosya boyutlarını azaltın",
      impact: 'medium' as const,
      savings: `${Math.floor(Math.random() * 1) + 0}.${Math.floor(Math.random() * 9)}s`
    }
  ];

  return {
    url,
    strategy,
    performanceScore,
    firstContentfulPaint: Math.round(fcp),
    largestContentfulPaint: Math.round(lcp),
    firstInputDelay: Math.round(fid),
    cumulativeLayoutShift: Math.round(cls * 1000) / 1000,
    speedIndex: Math.round(speedIndex),
    suggestions,
    opportunities: opportunities.slice(0, Math.floor(Math.random() * 3) + 1),
    apiStatus: 'mock'
  };
}

// Real Google PageSpeed Insights API call
async function getGooglePageSpeedData(url: string, strategy: 'mobile' | 'desktop', apiKey: string): Promise<PageSpeedResult> {
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=${strategy}&category=performance`;
  
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || 'PageSpeed API error');
  }

  const lighthouseResult = data.lighthouseResult;
  const categories = lighthouseResult.categories;
  const audits = lighthouseResult.audits;

  // Extract performance score
  const performanceScore = Math.round((categories.performance?.score || 0) * 100);

  // Extract Core Web Vitals
  const metrics = audits;
  const fcp = metrics['first-contentful-paint']?.numericValue || 0;
  const lcp = metrics['largest-contentful-paint']?.numericValue || 0;
  const fid = metrics['max-potential-fid']?.numericValue || 0; // Using max-potential-fid as proxy
  const cls = metrics['cumulative-layout-shift']?.numericValue || 0;
  const speedIndex = metrics['speed-index']?.numericValue || 0;

  // Extract opportunities
  const opportunities = [];
  const opportunityAudits = [
    'render-blocking-resources',
    'unused-css-rules',
    'unused-javascript',
    'modern-image-formats',
    'offscreen-images',
    'efficient-animated-content',
    'unminified-css',
    'unminified-javascript'
  ];

  for (const auditId of opportunityAudits) {
    const audit = audits[auditId];
    if (audit && audit.details && audit.details.overallSavingsMs > 100) {
      opportunities.push({
        title: audit.title,
        description: audit.description,
        impact: audit.details.overallSavingsMs > 1000 ? 'high' as const : 
                audit.details.overallSavingsMs > 500 ? 'medium' as const : 'low' as const,
        savings: `${(audit.details.overallSavingsMs / 1000).toFixed(1)}s`
      });
    }
  }

  // Extract suggestions from diagnostics
  const suggestions = [];
  const diagnosticAudits = [
    'uses-long-cache-ttl',
    'uses-optimized-images',
    'uses-text-compression',
    'uses-responsive-images',
    'critical-request-chains'
  ];

  for (const auditId of diagnosticAudits) {
    const audit = audits[auditId];
    if (audit && audit.score !== null && audit.score < 1) {
      suggestions.push(audit.title);
    }
  }

  // Get loading experience data if available
  let loadingExperience;
  if (data.loadingExperience) {
    loadingExperience = {
      overall: data.loadingExperience.overall_category,
      metrics: {
        fcp: {
          percentile: data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS?.percentile || 0,
          category: data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS?.category || 'UNKNOWN'
        },
        lcp: {
          percentile: data.loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS?.percentile || 0,
          category: data.loadingExperience.metrics.LARGEST_CONTENTFUL_PAINT_MS?.category || 'UNKNOWN'
        },
        fid: {
          percentile: data.loadingExperience.metrics.FIRST_INPUT_DELAY_MS?.percentile || 0,
          category: data.loadingExperience.metrics.FIRST_INPUT_DELAY_MS?.category || 'UNKNOWN'
        },
        cls: {
          percentile: data.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile || 0,
          category: data.loadingExperience.metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category || 'UNKNOWN'
        }
      }
    };
  }

  return {
    url,
    strategy,
    performanceScore,
    firstContentfulPaint: Math.round(fcp),
    largestContentfulPaint: Math.round(lcp),
    firstInputDelay: Math.round(fid),
    cumulativeLayoutShift: Math.round(cls * 1000) / 1000,
    speedIndex: Math.round(speedIndex),
    suggestions: suggestions.slice(0, 8), // Limit to 8 suggestions
    opportunities: opportunities.slice(0, 5), // Limit to 5 opportunities
    loadingExperience,
    apiStatus: 'real'
  };
}

export async function POST(request: Request) {
  try {
    const { url, strategy } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL gerekli' },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      const testUrl = url.startsWith('http') ? url : `https://${url}`;
      new URL(testUrl);
    } catch {
      return NextResponse.json(
        { error: 'Geçerli bir URL girin' },
        { status: 400 }
      );
    }

    const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
    const testStrategy = strategy || 'mobile';

    // Check for Google PageSpeed Insights API key
    const GOOGLE_PAGESPEED_API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY || process.env.GOOGLE_CUSTOM_SEARCH_API_KEY;

    let result: PageSpeedResult;

    if (GOOGLE_PAGESPEED_API_KEY) {
      try {
        console.log(`Testing ${cleanUrl} with ${testStrategy} strategy using Google PageSpeed API`);
        result = await getGooglePageSpeedData(cleanUrl, testStrategy, GOOGLE_PAGESPEED_API_KEY);
        console.log(`API call successful. Performance score: ${result.performanceScore}`);
      } catch (error) {
        console.error('Google PageSpeed API error:', error);
        // Fallback to mock data if API fails
        result = generateMockPageSpeedData(cleanUrl, testStrategy);
        result.apiStatus = 'error';
      }
    } else {
      console.log('No Google PageSpeed API key found, using mock data');
      result = generateMockPageSpeedData(cleanUrl, testStrategy);
    }

    return NextResponse.json(result, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });

  } catch (error) {
    console.error('Page speed analysis error:', error);
    
    // Return mock data as fallback
    const { url, strategy } = await request.json();
    const cleanUrl = url?.startsWith('http') ? url : `https://${url || 'example.com'}`;
    const fallbackResult = generateMockPageSpeedData(cleanUrl, strategy || 'mobile');
    fallbackResult.apiStatus = 'error';
    
    return NextResponse.json(fallbackResult, { status: 200 });
  }
}
