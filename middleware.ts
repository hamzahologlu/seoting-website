import { NextRequest, NextResponse } from 'next/server';

// Japonya IP aralıkları (ana aralıklar)
const JAPAN_IP_RANGES = [
  // Japonya'nın ana IP aralıkları
  '1.0.0.0/8',
  '14.0.0.0/8',
  '27.0.0.0/8',
  '36.0.0.0/8',
  '39.0.0.0/8',
  '42.0.0.0/8',
  '49.0.0.0/8',
  '58.0.0.0/8',
  '59.0.0.0/8',
  '60.0.0.0/8',
  '61.0.0.0/8',
  '101.0.0.0/8',
  '103.0.0.0/8',
  '106.0.0.0/8',
  '110.0.0.0/8',
  '111.0.0.0/8',
  '112.0.0.0/8',
  '113.0.0.0/8',
  '114.0.0.0/8',
  '115.0.0.0/8',
  '116.0.0.0/8',
  '117.0.0.0/8',
  '118.0.0.0/8',
  '119.0.0.0/8',
  '120.0.0.0/8',
  '121.0.0.0/8',
  '122.0.0.0/8',
  '123.0.0.0/8',
  '124.0.0.0/8',
  '125.0.0.0/8',
  '126.0.0.0/8',
  '133.0.0.0/8',
  '153.0.0.0/8',
  '157.0.0.0/8',
  '160.0.0.0/8',
  '161.0.0.0/8',
  '162.0.0.0/8',
  '163.0.0.0/8',
  '164.0.0.0/8',
  '165.0.0.0/8',
  '166.0.0.0/8',
  '167.0.0.0/8',
  '168.0.0.0/8',
  '169.0.0.0/8',
  '175.0.0.0/8',
  '180.0.0.0/8',
  '182.0.0.0/8',
  '183.0.0.0/8',
  '202.0.0.0/8',
  '203.0.0.0/8',
  '210.0.0.0/8',
  '211.0.0.0/8',
  '218.0.0.0/8',
  '219.0.0.0/8',
  '220.0.0.0/8',
  '221.0.0.0/8',
  '222.0.0.0/8',
  '223.0.0.0/8',
];

// IP adresinin belirli bir aralıkta olup olmadığını kontrol et
function isIPInRange(ip: string, range: string): boolean {
  const [rangeIP, prefixLength] = range.split('/');
  const ipNum = ipToNumber(ip);
  const rangeNum = ipToNumber(rangeIP);
  const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0;
  
  return (ipNum & mask) === (rangeNum & mask);
}

// IP adresini sayıya çevir
function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

// IP adresinin Japonya'dan gelip gelmediğini kontrol et
function isFromJapan(ip: string): boolean {
  return JAPAN_IP_RANGES.some(range => isIPInRange(ip, range));
}

export function middleware(request: NextRequest) {
  const ip = request.ip || 
             request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             '127.0.0.1';

  // Japonya'dan gelen istekleri engelle
  if (isFromJapan(ip)) {
    console.log(`🚫 Japonya'dan gelen istek engellendi: ${ip} - ${request.url}`);
    
    return new NextResponse(
      JSON.stringify({
        error: 'Access Denied',
        message: 'Bu bölgeden erişim engellenmiştir.',
        code: 403
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Blocked-Country': 'JP',
          'X-Blocked-IP': ip,
        },
      }
    );
  }

  // Güvenlik başlıkları ekle
  const response = NextResponse.next();
  
  // Rate limiting için basit bir header
  response.headers.set('X-Rate-Limit', '1000');
  response.headers.set('X-Rate-Limit-Remaining', '999');
  
  // Güvenlik logları
  if (process.env.NODE_ENV === 'production') {
    console.log(`✅ İzin verilen istek: ${ip} - ${request.url}`);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
