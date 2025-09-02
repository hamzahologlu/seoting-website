# SEOTING - Dijital Pazarlama Ajansı Website

Bu proje, İstanbul merkezli SEOTING Dijital Pazarlama Ajansı için tasarlanmış modern ve görsel olarak etkileyici bir websitesidir.

## Özellikler

- ✨ **Modern Tasarım**: Gradient renkleri, cam efektleri ve neon ışıltıları ile görsel şölen
- 🎭 **Smooth Animasyonlar**: Framer Motion ile akıcı geçişler ve etkileşimler
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Yüksek Performans**: Next.js 14 ile optimize edilmiş
- 🎨 **Interaktif Elementler**: Particle efektleri ve hover animasyonları
- 🌟 **SEO Optimize**: Meta tagları ve yapısal SEO
- 🛠️ **Profesyonel Araçlar**: Google API entegrasyonları ile gerçek veri analizi

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Environment variables dosyasını oluşturun:
```bash
cp .env.example .env.local
```

3. `.env.local` dosyasını doldurun:
```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code_here

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@domain.com
SMTP_PASS=your_email_password
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── google-search/   # Google Search API
│   │   ├── keyword-analysis/ # Keyword Analysis API
│   │   ├── page-speed/      # Page Speed API
│   │   └── send-email/      # Email API
│   ├── [service-pages]/  # Service pages
│   ├── [tool-pages]/     # SEO tool pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Ana sayfa
└── components/
    ├── Hero.tsx          # Hero section
    ├── Navigation.tsx    # Navigation with megamenu
    ├── Footer.tsx        # Footer
    ├── GoogleAnalytics.tsx # Google Analytics component
    └── ParticleBackground.tsx # Particle effects
```

## Google Analytics & Search Console Kurulumu

### Google Analytics

1. [Google Analytics](https://analytics.google.com/) hesabınızda yeni bir property oluşturun
2. Measurement ID'yi (G-XXXXXXXXXX formatında) kopyalayın
3. `.env.local` dosyasında `NEXT_PUBLIC_GA_MEASUREMENT_ID` değişkenini güncelleyin

### Google Search Console

1. [Google Search Console](https://search.google.com/search-console/) hesabınızda site ekleyin
2. HTML tag yöntemi ile doğrulama yapın
3. Meta tag'daki content değerini kopyalayın
4. `.env.local` dosyasında `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` değişkenini güncelleyin

### Otomatik Entegrasyon

Bu kurulum tamamlandıktan sonra:
- ✅ Google Analytics otomatik olarak tüm sayfa görüntülemelerini takip edecek
- ✅ Search Console meta tag'i tüm sayfalara otomatik olarak eklenecek
- ✅ Environment variables ile güvenli yapılandırma
- ✅ Production ve development ortamları için ayrı konfigurasyon

## Özelleştirme

### Renk Paleti
Tailwind config dosyasında özel renk paleti tanımlanmıştır:
- **Primary**: Mavi tonları (#3b82f6)
- **Accent**: Mor/Pembe tonları (#d946ef)
- **Gradients**: Çoklu renk geçişleri

### Animasyonlar
Framer Motion ile özelleştirilmiş animasyonlar:
- Fade in/out efektleri
- Slide animasyonları
- Scale transformları
- Hover efektleri

## Deployment

Vercel, Netlify veya herhangi bir Next.js uyumlu platformda deploy edilebilir:

```bash
npm run build
```

## Lisans

Bu proje SEOTING için özel olarak geliştirilmiştir.

---

**SEOTING** - İstanbul'da ❤️ ile yapıldı

