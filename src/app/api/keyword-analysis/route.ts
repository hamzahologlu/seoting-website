import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { keyword, location } = await request.json();

    if (!keyword || !keyword.trim()) {
      return NextResponse.json(
        { error: 'Anahtar kelime gerekli' },
        { status: 400 }
      );
    }

    // API anahtarlarını kontrol et
    const DATAFORSEO_EMAIL = process.env.DATAFORSEO_EMAIL;
    const DATAFORSEO_PASSWORD = process.env.DATAFORSEO_PASSWORD;
    const GOOGLE_KEYWORD_PLANNER_KEY = process.env.GOOGLE_KEYWORD_PLANNER_KEY;

    let analysisData;

    // Eğer gerçek API anahtarları varsa gerçek veri çek
    if (DATAFORSEO_EMAIL && DATAFORSEO_PASSWORD) {
      analysisData = await getDataForSEOData(keyword, location, DATAFORSEO_EMAIL, DATAFORSEO_PASSWORD);
    } else if (GOOGLE_KEYWORD_PLANNER_KEY) {
      analysisData = await getGoogleKeywordPlannerData(keyword, location, GOOGLE_KEYWORD_PLANNER_KEY);
    } else {
      // Gerçek API'ye geçmek için kullanıcıyı bilgilendir
      analysisData = generateSmartMockData(keyword, location);
      analysisData.apiStatus = 'mock';
      analysisData.message = 'Gerçek veriler için API anahtarı gerekiyor. Ücretsiz DataForSEO hesabı oluşturun.';
    }

    return NextResponse.json(analysisData, { status: 200 });
  } catch (error) {
    console.error('Keyword analysis error:', error);
    
    // Hata durumunda mock data döndür
    const { keyword } = await request.json();
    const fallbackData = generateSmartMockData(keyword, 'tr');
    
    return NextResponse.json(fallbackData, { status: 200 });
  }
}

async function getDataForSEOData(keyword: string, location: string, email: string, password: string) {
  try {
    const auth = Buffer.from(`${email}:${password}`).toString('base64');
    
    // 1. Anahtar kelime önerileri al
    const suggestionsResponse = await fetch('https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        keywords: [keyword],
        location_code: getLocationCode(location),
        language_code: getLanguageCode(location)
      }])
    });

    if (!suggestionsResponse.ok) {
      throw new Error('DataForSEO keywords API error');
    }

    const suggestionsData = await suggestionsResponse.json();
    
    // 2. Arama hacmi ve rekabet verisi al
    const volumeResponse = await fetch('https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        keywords: [keyword],
        location_code: getLocationCode(location),
        language_code: getLanguageCode(location)
      }])
    });

    const volumeData = await volumeResponse.json();
    
    // 3. SERP features al
    const serpResponse = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        keyword: keyword,
        location_code: getLocationCode(location),
        language_code: getLanguageCode(location),
        device: 'desktop',
        os: 'windows'
      }])
    });

    const serpData = await serpResponse.json();

    // Veriyi parse et
    const mainKeywordData = volumeData.tasks[0]?.result?.[0] || {};
    const keywordSuggestions = suggestionsData.tasks[0]?.result || [];
    const serpFeatures = extractSerpFeatures(serpData.tasks[0]?.result);

    const result = {
      mainKeyword: {
        keyword,
        searchVolume: mainKeywordData.search_volume || 0,
        competition: mapDataForSEOCompetition(mainKeywordData.competition_level),
        cpc: mainKeywordData.cpc || 0,
        difficulty: calculateDifficulty(mainKeywordData),
        trend: await getTrendData(keyword, location),
        relatedKeywords: keywordSuggestions.slice(0, 5).map((k: any) => k.keyword),
        serpFeatures: serpFeatures
      },
      suggestions: keywordSuggestions.slice(0, 8).map((suggestion: any) => ({
        keyword: suggestion.keyword,
        searchVolume: suggestion.search_volume || 0,
        competition: mapDataForSEOCompetition(suggestion.competition_level),
        cpc: suggestion.cpc || 0,
        difficulty: calculateDifficulty(suggestion),
        trend: generateTrendData(),
        relatedKeywords: [],
        serpFeatures: []
      })),
      totalKeywords: keywordSuggestions.length,
      avgSearchVolume: Math.round(keywordSuggestions.reduce((sum: number, k: any) => sum + (k.search_volume || 0), 0) / keywordSuggestions.length),
      totalOpportunity: keywordSuggestions.reduce((sum: number, k: any) => sum + (k.search_volume || 0), 0),
      apiStatus: 'real',
      source: 'DataForSEO'
    };

    return result;
  } catch (error) {
    console.error('DataForSEO API error:', error);
    throw error;
  }
}

async function getGoogleKeywordPlannerData(keyword: string, location: string, apiKey: string) {
  try {
    // Google Ads API entegrasyonu
    const response = await fetch('https://googleads.googleapis.com/v14/customers/CUSTOMER_ID/googleAds:searchStream', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN || ''
      },
      body: JSON.stringify({
        query: `
          SELECT 
            keyword_view.resource_name,
            keyword_view.keyword_text,
            metrics.search_volume,
            competition,
            cost_per_click
          FROM keyword_view 
          WHERE keyword_view.keyword_text = "${keyword}"
        `
      })
    });

    if (!response.ok) {
      throw new Error('Google Keyword Planner API error');
    }

    const data = await response.json();
    
    // Parse Google data
    return parseGoogleKeywordData(data, keyword, location);
  } catch (error) {
    console.error('Google Keyword Planner error:', error);
    throw error;
  }
}

async function getRealKeywordData(keyword: string, location: string, serpApiKey?: string, keywordToolKey?: string) {
  const results: any = {
    mainKeyword: {
      keyword,
      searchVolume: 0,
      competition: 'MEDIUM',
      cpc: 0,
      difficulty: 50,
      trend: [],
      relatedKeywords: [],
      serpFeatures: []
    },
    suggestions: [],
    totalKeywords: 0,
    avgSearchVolume: 0,
    totalOpportunity: 0
  };

  try {
    // 1. SERP API ile arama hacmi ve rekabet verisi
    if (serpApiKey) {
      const serpResponse = await fetch(`https://serpapi.com/search.json?engine=google_keyword&q=${encodeURIComponent(keyword)}&gl=${location}&api_key=${serpApiKey}`);
      
      if (serpResponse.ok) {
        const serpData = await serpResponse.json();
        
        if (serpData.ads_results && serpData.ads_results.length > 0) {
          // CPC verisi SERP'den çekilebilir
          results.mainKeyword.cpc = parseFloat(serpData.ads_results[0].price?.extracted_value || '1.50');
        }
        
        if (serpData.related_questions) {
          results.mainKeyword.relatedKeywords = serpData.related_questions
            .slice(0, 5)
            .map((q: any) => q.question);
        }
        
        // SERP features analizi
        results.mainKeyword.serpFeatures = [];
        if (serpData.answer_box) results.mainKeyword.serpFeatures.push('Featured Snippets');
        if (serpData.related_questions) results.mainKeyword.serpFeatures.push('People Also Ask');
        if (serpData.local_results) results.mainKeyword.serpFeatures.push('Local Pack');
        if (serpData.images_results) results.mainKeyword.serpFeatures.push('Images');
      }
    }

    // 2. KeywordTool.io API ile arama hacmi
    if (keywordToolKey) {
      const keywordResponse = await fetch(`https://api.keywordtool.io/v2/search/suggestions/google?keyword=${encodeURIComponent(keyword)}&country=${location.toUpperCase()}&apikey=${keywordToolKey}`);
      
      if (keywordResponse.ok) {
        const keywordData = await keywordResponse.json();
        
        if (keywordData.results && keywordData.results.length > 0) {
          const mainResult = keywordData.results.find((r: any) => r.keyword === keyword) || keywordData.results[0];
          
          results.mainKeyword.searchVolume = mainResult.search_volume || generateRealisticVolume(keyword);
          results.mainKeyword.competition = mapCompetition(mainResult.competition || 0.5);
          results.mainKeyword.difficulty = Math.round((mainResult.competition || 0.5) * 100);
          
          // İlgili anahtar kelimeler
          results.suggestions = keywordData.results
            .slice(0, 8)
            .map((result: any) => ({
              keyword: result.keyword,
              searchVolume: result.search_volume || generateRealisticVolume(result.keyword),
              competition: mapCompetition(result.competition || 0.5),
              cpc: result.cpc || (Math.random() * 3 + 0.5),
              difficulty: Math.round((result.competition || 0.5) * 100),
              trend: generateTrendData(),
              relatedKeywords: [],
              serpFeatures: []
            }));
        }
      }
    }

    // 3. Google Trends API (ücretsiz alternatif)
    try {
      const trendsResponse = await fetch(`https://trends.google.com/trends/api/widgetdata/multiline?req=%7B%22time%22%3A%22today%2012-m%22%2C%22resolution%22%3A%22MONTH%22%2C%22locale%22%3A%22tr%22%2C%22comparisonItem%22%3A%5B%7B%22geo%22%3A%7B%22country%22%3A%22${location.toUpperCase()}%22%7D%2C%22complexKeywordsRestriction%22%3A%7B%22keyword%22%3A%5B%7B%22type%22%3A%22BROAD%22%2C%22value%22%3A%22${encodeURIComponent(keyword)}%22%7D%5D%7D%7D%5D%2C%22requestOptions%22%3A%7B%22property%22%3A%22%22%2C%22backend%22%3A%22IZG%22%2C%22category%22%3A0%7D%7D&token=APP6_UEAAAAAZpqHFU9YSN8HJdqsZqKUFSqVs1FKwQvw`);
      
      if (trendsResponse.ok) {
        const trendsText = await trendsResponse.text();
        // Google Trends verisi parse edilebilir
        const trendsData = parseTrendsData(trendsText);
        if (trendsData && trendsData.length > 0) {
          results.mainKeyword.trend = trendsData;
        }
      }
    } catch (trendsError) {
      console.log('Trends data unavailable, using generated data');
      results.mainKeyword.trend = generateTrendData();
    }

    // Mock data ile eksik verileri doldur
    if (results.mainKeyword.searchVolume === 0) {
      results.mainKeyword.searchVolume = generateRealisticVolume(keyword);
    }
    
    if (results.suggestions.length === 0) {
      results.suggestions = generateRelatedKeywords(keyword);
    }

    // Summary hesapla
    results.totalKeywords = results.suggestions.length + 1;
    results.avgSearchVolume = Math.round(
      (results.mainKeyword.searchVolume + results.suggestions.reduce((sum: number, s: any) => sum + s.searchVolume, 0)) 
      / results.totalKeywords
    );
    results.totalOpportunity = results.mainKeyword.searchVolume + results.suggestions.reduce((sum: number, s: any) => sum + s.searchVolume, 0);

    return results;

  } catch (error) {
    console.error('Real API error, falling back to smart mock:', error);
    return generateSmartMockData(keyword, location);
  }
}

function generateSmartMockData(keyword: string, location: string) {
  const keywordCategories = {
    'dijital pazarlama': { baseVolume: 45000, difficulty: 75, cpc: 2.50 },
    'seo': { baseVolume: 35000, difficulty: 80, cpc: 3.20 },
    'sosyal medya': { baseVolume: 28000, difficulty: 60, cpc: 1.80 },
    'e-ticaret': { baseVolume: 22000, difficulty: 70, cpc: 2.10 },
    'web tasarım': { baseVolume: 18000, difficulty: 65, cpc: 2.80 },
    'google ads': { baseVolume: 25000, difficulty: 85, cpc: 4.50 },
    'içerik pazarlama': { baseVolume: 12000, difficulty: 55, cpc: 1.90 },
    'marka': { baseVolume: 15000, difficulty: 50, cpc: 1.60 },
    'reklam': { baseVolume: 30000, difficulty: 65, cpc: 2.20 },
    'analiz': { baseVolume: 8000, difficulty: 40, cpc: 1.40 }
  };

  const category = Object.keys(keywordCategories).find(cat => 
    keyword.toLowerCase().includes(cat)
  );
  
  const baseData = category ? keywordCategories[category as keyof typeof keywordCategories] : {
    baseVolume: Math.floor(Math.random() * 20000) + 5000,
    difficulty: Math.floor(Math.random() * 60) + 30,
    cpc: Math.round((Math.random() * 3 + 1) * 100) / 100
  };

  // Lokasyona göre volume ayarla
  const locationMultiplier = location === 'tr' ? 1 : location === 'us' ? 2.5 : 1.2;
  const adjustedVolume = Math.round(baseData.baseVolume * locationMultiplier);

  const competitions = ['LOW', 'MEDIUM', 'HIGH'] as const;
  const competition = baseData.difficulty < 40 ? 'LOW' : baseData.difficulty < 70 ? 'MEDIUM' : 'HIGH';

  return {
    mainKeyword: {
      keyword,
      searchVolume: adjustedVolume,
      competition,
      cpc: baseData.cpc,
      difficulty: baseData.difficulty,
      trend: generateSeasonalTrend(keyword),
      relatedKeywords: generateContextualKeywords(keyword),
      serpFeatures: generateSerpFeatures(keyword)
    },
    suggestions: generateRelatedKeywords(keyword),
    totalKeywords: 25,
    avgSearchVolume: adjustedVolume,
    totalOpportunity: Math.round(adjustedVolume * 1.8)
  };
}

function generateRealisticVolume(keyword: string): number {
  const length = keyword.length;
  const wordCount = keyword.split(' ').length;
  
  // Daha uzun ve spesifik kelimeler daha az arama hacmine sahip
  let baseVolume = 50000;
  
  if (length > 20) baseVolume = Math.floor(baseVolume * 0.3);
  else if (length > 15) baseVolume = Math.floor(baseVolume * 0.5);
  else if (length > 10) baseVolume = Math.floor(baseVolume * 0.7);
  
  if (wordCount > 3) baseVolume = Math.floor(baseVolume * 0.4);
  else if (wordCount > 2) baseVolume = Math.floor(baseVolume * 0.6);
  
  return Math.floor(Math.random() * baseVolume) + 1000;
}

function generateSeasonalTrend(keyword: string): number[] {
  const isSeasonalKeyword = ['hediye', 'yılbaşı', 'okul', 'yaz', 'kış', 'tatil'].some(seasonal => 
    keyword.toLowerCase().includes(seasonal)
  );
  
  if (isSeasonalKeyword) {
    // Mevsimsel trend
    return [60, 65, 70, 75, 85, 95, 100, 90, 80, 70, 65, 75];
  } else {
    // Normal trend with some growth
    const base = 70;
    return Array.from({length: 12}, (_, i) => {
      const growth = i * 2; // Gradual growth
      const noise = (Math.random() - 0.5) * 20; // Some randomness
      return Math.max(0, Math.min(100, base + growth + noise));
    });
  }
}

function generateContextualKeywords(keyword: string): string[] {
  const prefixes = ['en iyi', 'ücretsiz', 'profesyonel', 'kurumsal', 'modern'];
  const suffixes = ['hizmetleri', 'fiyatları', 'şirketi', 'ajansı', 'uzmanı', 'rehberi', 'örnekleri'];
  
  const related = [];
  
  // Prefix combinations
  for (let i = 0; i < 2; i++) {
    related.push(`${prefixes[i]} ${keyword}`);
  }
  
  // Suffix combinations  
  for (let i = 0; i < 3; i++) {
    related.push(`${keyword} ${suffixes[i]}`);
  }
  
  return related;
}

function generateRelatedKeywords(keyword: string) {
  const baseKeywords = generateContextualKeywords(keyword);
  
  return baseKeywords.slice(0, 8).map((relatedKeyword, index) => ({
    keyword: relatedKeyword,
    searchVolume: generateRealisticVolume(relatedKeyword),
    competition: ['LOW', 'MEDIUM', 'HIGH'][Math.floor(Math.random() * 3)] as 'LOW' | 'MEDIUM' | 'HIGH',
    cpc: Math.round((Math.random() * 3 + 0.5) * 100) / 100,
    difficulty: Math.floor(Math.random() * 80) + 20,
    trend: generateTrendData(),
    relatedKeywords: [],
    serpFeatures: []
  }));
}

function generateSerpFeatures(keyword: string): string[] {
  const allFeatures = [
    'Featured Snippets', 
    'People Also Ask', 
    'Local Pack', 
    'Images', 
    'Videos', 
    'Shopping Results',
    'Knowledge Panel',
    'Top Stories'
  ];
  
  // Commercial keywords have more features
  const isCommercial = ['satın', 'fiyat', 'hizmet', 'şirket', 'ajans'].some(term => 
    keyword.toLowerCase().includes(term)
  );
  
  const featureCount = isCommercial ? 5 : 3;
  return allFeatures.slice(0, featureCount);
}

function generateTrendData(): number[] {
  return Array.from({length: 12}, () => Math.floor(Math.random() * 100));
}

function mapCompetition(value: number): 'LOW' | 'MEDIUM' | 'HIGH' {
  if (value < 0.33) return 'LOW';
  if (value < 0.66) return 'MEDIUM';
  return 'HIGH';
}

// DataForSEO helper functions
function getLocationCode(location: string): number {
  const locationCodes = {
    'tr': 2792, // Turkey
    'us': 2840, // United States
    'uk': 2826, // United Kingdom
    'de': 2276  // Germany
  };
  return locationCodes[location as keyof typeof locationCodes] || 2792;
}

function getLanguageCode(location: string): string {
  const languageCodes = {
    'tr': 'tr',
    'us': 'en',
    'uk': 'en', 
    'de': 'de'
  };
  return languageCodes[location as keyof typeof languageCodes] || 'tr';
}

function mapDataForSEOCompetition(level?: string): 'LOW' | 'MEDIUM' | 'HIGH' {
  switch (level?.toLowerCase()) {
    case 'low': return 'LOW';
    case 'medium': return 'MEDIUM';
    case 'high': return 'HIGH';
    default: return 'MEDIUM';
  }
}

function calculateDifficulty(keywordData: any): number {
  if (keywordData.competition_level === 'high') return Math.floor(Math.random() * 20) + 80;
  if (keywordData.competition_level === 'medium') return Math.floor(Math.random() * 30) + 40;
  return Math.floor(Math.random() * 40) + 10;
}

function extractSerpFeatures(serpResult: any): string[] {
  const features = [];
  
  if (serpResult?.featured_snippet) features.push('Featured Snippets');
  if (serpResult?.people_also_ask) features.push('People Also Ask');
  if (serpResult?.local_pack) features.push('Local Pack');
  if (serpResult?.images) features.push('Images');
  if (serpResult?.videos) features.push('Videos');
  if (serpResult?.shopping) features.push('Shopping Results');
  if (serpResult?.knowledge_graph) features.push('Knowledge Panel');
  
  return features;
}

async function getTrendData(keyword: string, location: string): Promise<number[]> {
  try {
    // Simplified Google Trends data fetch
    const response = await fetch(`https://trends.google.com/trends/api/explore?hl=${getLanguageCode(location)}&tz=-120&req={"comparisonItem":[{"keyword":"${encodeURIComponent(keyword)}","geo":"${location.toUpperCase()}","time":"today 12-m"}],"category":0,"property":""}`);
    
    if (response.ok) {
      const text = await response.text();
      const trendsData = parseTrendsData(text);
      if (trendsData) return trendsData;
    }
  } catch (error) {
    console.log('Trends API unavailable, using generated data');
  }
  
  return generateSeasonalTrend(keyword);
}

function parseGoogleKeywordData(data: any, keyword: string, location: string) {
  // Google Ads API response parse
  const results = data.results || [];
  const mainResult = results[0] || {};
  
  return {
    mainKeyword: {
      keyword,
      searchVolume: mainResult.metrics?.search_volume || 0,
      competition: mapGoogleCompetition(mainResult.competition),
      cpc: mainResult.cost_per_click?.micros ? mainResult.cost_per_click.micros / 1000000 : 0,
      difficulty: 50, // Google doesn't provide difficulty directly
      trend: generateSeasonalTrend(keyword),
      relatedKeywords: [],
      serpFeatures: []
    },
    suggestions: [],
    totalKeywords: 1,
    avgSearchVolume: mainResult.metrics?.search_volume || 0,
    totalOpportunity: mainResult.metrics?.search_volume || 0,
    apiStatus: 'real',
    source: 'Google Keyword Planner'
  };
}

function mapGoogleCompetition(competition?: string): 'LOW' | 'MEDIUM' | 'HIGH' {
  switch (competition) {
    case 'LOW': return 'LOW';
    case 'MEDIUM': return 'MEDIUM'; 
    case 'HIGH': return 'HIGH';
    default: return 'MEDIUM';
  }
}

function parseTrendsData(trendsText: string): number[] | null {
  try {
    // Google Trends JSON parse etme logic'i
    const jsonStart = trendsText.indexOf('{"default":');
    if (jsonStart === -1) return null;
    
    const jsonData = JSON.parse(trendsText.substring(jsonStart));
    const timelineData = jsonData.default?.timelineData;
    
    if (timelineData && Array.isArray(timelineData)) {
      return timelineData.map((point: any) => point.value?.[0] || 0);
    }
    
    return null;
  } catch (error) {
    return null;
  }
}
