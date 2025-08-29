# SEOTING - Dijital Pazarlama Ajansı Website

Bu proje, İstanbul merkezli SEOTING Dijital Pazarlama Ajansı için tasarlanmış modern ve görsel olarak etkileyici bir websitesidir.

## Özellikler

- ✨ **Modern Tasarım**: Gradient renkleri, cam efektleri ve neon ışıltıları ile görsel şölen
- 🎭 **Smooth Animasyonlar**: Framer Motion ile akıcı geçişler ve etkileşimler
- 📱 **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Yüksek Performans**: Next.js 14 ile optimize edilmiş
- 🎨 **Interaktif Elementler**: Particle efektleri ve hover animasyonları
- 🌟 **SEO Optimize**: Meta tagları ve yapısal SEO

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

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Ana sayfa
└── components/
    ├── Hero.tsx         # Hero section
    ├── Services.tsx     # Hizmetler bölümü
    ├── About.tsx        # Hakkımızda bölümü
    ├── Portfolio.tsx    # Portföy bölümü
    ├── Contact.tsx      # İletişim bölümü
    ├── Navigation.tsx   # Navigasyon
    ├── Footer.tsx       # Footer
    └── ParticleBackground.tsx # Particle efektleri
```

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

