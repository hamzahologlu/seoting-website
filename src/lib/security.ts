// Güvenlik yardımcı fonksiyonları

export interface SecurityLog {
  timestamp: string;
  ip: string;
  userAgent: string;
  url: string;
  action: 'BLOCKED' | 'ALLOWED';
  reason?: string;
  country?: string;
}

// Güvenlik loglarını kaydet
export function logSecurityEvent(log: SecurityLog) {
  if (process.env.NODE_ENV === 'production') {
    console.log(`🔒 SECURITY: ${JSON.stringify(log)}`);
    
    // Gerçek uygulamada bu logları bir veritabanına veya log servisine kaydedebilirsiniz
    // Örnek: await saveToDatabase(log);
  }
}

// Şüpheli aktivite tespit et
export function detectSuspiciousActivity(
  ip: string,
  userAgent: string,
  url: string
): boolean {
  const suspiciousPatterns = [
    // SQL injection denemeleri
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /update\s+set/i,
    
    // XSS denemeleri
    /<script/i,
    /javascript:/i,
    /onload=/i,
    /onerror=/i,
    
    // Path traversal
    /\.\.\//,
    /\.\.\\/,
    
    // Command injection
    /;ls/i,
    /;cat/i,
    /;rm/i,
    /;wget/i,
    /;curl/i,
  ];

  const fullUrl = url.toLowerCase();
  const fullUserAgent = userAgent.toLowerCase();

  return suspiciousPatterns.some(pattern => 
    pattern.test(fullUrl) || pattern.test(fullUserAgent)
  );
}

// IP adresinin geçerli olup olmadığını kontrol et
export function isValidIP(ip: string): boolean {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

// User Agent'ın bot olup olmadığını kontrol et
export function isBot(userAgent: string): boolean {
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /php/i,
    /go-http/i,
    /okhttp/i,
    /apache/i,
    /nginx/i,
  ];

  return botPatterns.some(pattern => pattern.test(userAgent));
}

// Rate limiting için basit bir kontrol
const requestCounts = new Map<string, { count: number; lastReset: number }>();

export function checkRateLimit(ip: string, limit: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now();
  const key = ip;
  
  const current = requestCounts.get(key);
  
  if (!current || now - current.lastReset > windowMs) {
    requestCounts.set(key, { count: 1, lastReset: now });
    return true;
  }
  
  if (current.count >= limit) {
    return false;
  }
  
  current.count++;
  return true;
}

// Güvenlik raporu oluştur
export function generateSecurityReport(): string {
  const now = new Date().toISOString();
  return `
🔒 SEOTING Güvenlik Raporu
📅 Tarih: ${now}
🌍 Engellenen Bölge: Japonya (JP)
🛡️ Aktif Korumalar:
  - IP engelleme (Japonya)
  - XSS koruması
  - CSRF koruması
  - Content Security Policy
  - Rate limiting
  - Bot tespiti
  - Şüpheli aktivite tespiti

✅ Güvenlik durumu: AKTIF
  `;
}
