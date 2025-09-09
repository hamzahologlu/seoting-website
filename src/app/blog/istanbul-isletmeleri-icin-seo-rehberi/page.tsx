'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Eye, ThumbsUp, Share2, Tag, ArrowLeft, MessageCircle, Link as LinkIcon, Facebook, Twitter, Linkedin, MapPin, Search, Target, TrendingUp, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';

const blogPost = {
  id: 8,
  title: "İstanbul İşletmeleri İçin Kapsamlı SEO Rehberi: 39 İlçede 1. Sıraya Çıkma Stratejisi",
  excerpt: "İstanbul'daki işletmenizi Google'da 1. sıraya çıkarmak için gereken tüm SEO tekniklerini öğrenin. Başakşehir'den Beşiktaş'a, Kadıköy'den Şişli'ye tüm İstanbul ilçeleri için özel stratejiler.",
  category: "İstanbul SEO",
  readTime: "15 dakika",
  publishDate: "22 Aralık 2024",
  author: "SEOTING SEO Uzmanları",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  views: 2156,
  likes: 189,
  tags: ["İstanbul SEO", "yerel SEO", "Google My Business", "anahtar kelime", "İstanbul işletmeleri", "SEO rehberi"],
  content: `
    <div class="prose prose-lg prose-invert max-w-none">
      <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-green-300 mb-3">🎯 İstanbul SEO Başarı Garantisi</h3>
        <p class="text-gray-300">Bu rehber, İstanbul'daki işletmenizi Google'da 1. sıraya çıkarmak için gereken tüm teknikleri içeriyor. SEOTING'in 500+ İstanbul müşterisi için uyguladığı kanıtlanmış stratejiler.</p>
      </div>
      
      <p class="lead text-xl text-gray-300 mb-8">İstanbul, 15 milyon nüfusu ve dinamik ekonomisi ile Türkiye'nin en rekabetçi pazarlarından biri. İşletmenizi bu büyük pazarda öne çıkarmak için doğru SEO stratejileri şart.</p>
      
      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏙️ İstanbul SEO'nun Önemi</h2>
      <p class="text-gray-300 mb-6">İstanbul'da günlük 45 milyon Google araması yapılıyor. Bu aramaların %70'i yerel işletmelerle ilgili. Doğru SEO stratejisi ile bu büyük pastadan payınızı alabilirsiniz.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-8 border border-white/10">
        <h3 class="text-lg font-semibold text-white mb-4">📊 İstanbul SEO İstatistikleri</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-gray-300">Günlük Google Araması</span>
              <span class="text-green-400 font-semibold">45M</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-300">Yerel Arama Oranı</span>
              <span class="text-blue-400 font-semibold">%70</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-300">Mobil Arama Oranı</span>
              <span class="text-purple-400 font-semibold">%85</span>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-gray-300">Ortalama Tıklama Oranı</span>
              <span class="text-yellow-400 font-semibold">%3.2</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-300">1. Sıra Tıklama Oranı</span>
              <span class="text-red-400 font-semibold">%28.5</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-300">Yerel SEO ROI</span>
              <span class="text-green-400 font-semibold">%300</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🎯 İstanbul İlçelerine Özel SEO Stratejileri</h2>
      
      <h3 class="text-2xl font-bold text-blue-400 mt-8 mb-4">Beşiktaş & Şişli - Lüks Markalar</h3>
      <p class="text-gray-300 mb-6">Bu bölgelerdeki işletmeler için premium anahtar kelimeler ve kurumsal SEO stratejileri önemli.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
        <h4 class="text-lg font-semibold text-blue-400 mb-3">Beşiktaş & Şişli SEO Stratejisi</h4>
        <ul class="space-y-2 text-gray-300">
          <li>• "Beşiktaş [hizmet]" anahtar kelimeleri</li>
          <li>• Kurumsal içerik üretimi</li>
          <li>• LinkedIn ve profesyonel platformlar</li>
          <li>• Yüksek kaliteli backlinkler</li>
          <li>• Premium Google My Business profili</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-green-400 mt-8 mb-4">Kadıköy & Üsküdar - Genç Nüfus</h3>
      <p class="text-gray-300 mb-6">Genç ve dinamik nüfus için sosyal medya entegrasyonu ve yaratıcı içerik stratejileri.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
        <h4 class="text-lg font-semibold text-green-400 mb-3">Kadıköy & Üsküdar SEO Stratejisi</h4>
        <ul class="space-y-2 text-gray-300">
          <li>• "Kadıköy [hizmet]" + "genç" anahtar kelimeleri</li>
          <li>• Instagram ve TikTok entegrasyonu</li>
          <li>• Yaratıcı video içerikler</li>
          <li>• Influencer işbirlikleri</li>
          <li>• Sosyal medya sinyalleri</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-purple-400 mt-8 mb-4">Başakşehir & Bahçelievler - Aile Odaklı</h3>
      <p class="text-gray-300 mb-6">Aile odaklı işletmeler için güven odaklı SEO ve yerel topluluk stratejileri.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
        <h4 class="text-lg font-semibold text-purple-400 mb-3">Başakşehir & Bahçelievler SEO Stratejisi</h4>
        <ul class="space-y-2 text-gray-300">
          <li>• "Başakşehir [hizmet]" + "aile" anahtar kelimeleri</li>
          <li>• Facebook ve WhatsApp Business</li>
          <li>• Müşteri yorumları ve güven sinyalleri</li>
          <li>• Yerel etkinlik pazarlaması</li>
          <li>• Aile içerikli blog yazıları</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔍 Anahtar Kelime Araştırması</h2>
      
      <h3 class="text-2xl font-bold text-yellow-400 mt-8 mb-4">İstanbul'a Özel Anahtar Kelime Stratejisi</h3>
      <p class="text-gray-300 mb-6">İstanbul'da başarılı olmak için doğru anahtar kelimeleri seçmek kritik. Her ilçenin kendine özgü arama alışkanlıkları var.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-yellow-400 mb-3">Ana Anahtar Kelimeler</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• "İstanbul [hizmet]"</li>
            <li>• "[İlçe] [hizmet]"</li>
            <li>• "İstanbul'da [hizmet]"</li>
            <li>• "[Hizmet] İstanbul"</li>
            <li>• "İstanbul [hizmet] firması"</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-yellow-400 mb-3">Uzun Kuyruk Kelimeler</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• "İstanbul'da en iyi [hizmet]"</li>
            <li>• "[İlçe] [hizmet] önerisi"</li>
            <li>• "İstanbul [hizmet] fiyatları"</li>
            <li>• "[Hizmet] İstanbul yorumları"</li>
            <li>• "İstanbul [hizmet] uzmanı"</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏢 Google My Business Optimizasyonu</h2>
      
      <div class="bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-blue-300 mb-3">💡 SEOTING'in GMB Başarı Formülü</h3>
        <p class="text-gray-300">İstanbul'daki müşterilerimiz için Google My Business optimizasyonu ile ortalama %250 daha fazla yerel müşteri kazandık.</p>
      </div>

      <h3 class="text-2xl font-bold text-green-400 mt-8 mb-4">GMB Profil Optimizasyonu Adımları</h3>
      
      <div class="space-y-4 my-8">
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Profil Bilgilerini Tamamlayın</h4>
            <p class="text-gray-300 text-sm">İşletme adı, adres, telefon, website, çalışma saatleri, kategoriler ve açıklama alanlarını eksiksiz doldurun.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Yüksek Kaliteli Fotoğraflar</h4>
            <p class="text-gray-300 text-sm">İşletme dışı, iç mekan, ürün/hizmet ve ekip fotoğrafları ekleyin. Her fotoğraf için açıklayıcı alt metinler yazın.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Müşteri Yorumlarını Yönetin</h4>
            <p class="text-gray-300 text-sm">Tüm yorumlara hızlı ve profesyonel yanıtlar verin. Olumsuz yorumları fırsata çevirin.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Düzenli İçerik Paylaşımı</h4>
            <p class="text-gray-300 text-sm">GMB'de düzenli olarak güncellemeler, etkinlikler ve özel teklifler paylaşın.</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">📱 Teknik SEO İyileştirmeleri</h2>
      
      <h3 class="text-2xl font-bold text-cyan-400 mt-8 mb-4">Site Hızı Optimizasyonu</h3>
      <p class="text-gray-300 mb-6">İstanbul'da mobil internet kullanımı %85. Site hızınız 3 saniyenin altında olmalı.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
        <h4 class="text-lg font-semibold text-cyan-400 mb-3">Hız Optimizasyonu Checklist</h4>
        <ul class="space-y-2 text-gray-300">
          <li>• Görsel optimizasyonu (WebP formatı)</li>
          <li>• CDN kullanımı</li>
          <li>• Gzip sıkıştırma</li>
          <li>• Minify CSS/JS dosyaları</li>
          <li>• Lazy loading</li>
          <li>• Cache optimizasyonu</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-pink-400 mt-8 mb-4">Mobil Uyumluluk</h3>
      <p class="text-gray-300 mb-6">İstanbul'da mobil arama oranı %85. Responsive tasarım artık zorunluluk.</p>
      
      <div class="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
        <h4 class="text-lg font-semibold text-pink-400 mb-3">Mobil SEO Checklist</h4>
        <ul class="space-y-2 text-gray-300">
          <li>• Responsive tasarım</li>
          <li>• Touch-friendly butonlar</li>
          <li>• Hızlı yükleme süresi</li>
          <li>• Kolay navigasyon</li>
          <li>• Mobil öncelikli indeksleme</li>
          <li>• AMP sayfaları (gerekirse)</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">📝 İçerik Stratejisi</h2>
      
      <h3 class="text-2xl font-bold text-indigo-400 mt-8 mb-4">İstanbul Odaklı İçerik Üretimi</h3>
      <p class="text-gray-300 mb-6">İstanbul'daki potansiyel müşterilerinize hitap eden, yerel odaklı içerikler üretin.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-indigo-400 mb-3">Blog Yazı Konuları</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• "İstanbul'da [Hizmet] Rehberi"</li>
            <li>• "[İlçe]'de En İyi [Hizmet]"</li>
            <li>• "İstanbul [Hizmet] Fiyatları 2024"</li>
            <li>• "[Hizmet] İstanbul Yorumları"</li>
            <li>• "İstanbul'da [Hizmet] Nasıl Seçilir"</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-indigo-400 mb-3">İçerik Optimizasyonu</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• Anahtar kelime yoğunluğu %1-2</li>
            <li>• H1, H2, H3 etiketleri</li>
            <li>• Meta açıklamalar</li>
            <li>• Alt metinler</li>
            <li>• İç bağlantılar</li>
            <li>• Yerel referanslar</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🔗 Link Building Stratejisi</h2>
      
      <h3 class="text-2xl font-bold text-teal-400 mt-8 mb-4">İstanbul Odaklı Backlink Stratejisi</h3>
      <p class="text-gray-300 mb-6">İstanbul'daki yerel işletmeler, bloglar ve platformlardan kaliteli backlinkler alın.</p>
      
      <div class="space-y-4 my-8">
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Yerel Dizinler</h4>
            <p class="text-gray-300 text-sm">İstanbul işletme rehberleri, yerel ticaret odaları ve sektörel dizinlere kayıt olun.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Konuk Yazarlık</h4>
            <p class="text-gray-300 text-sm">İstanbul odaklı bloglarda konuk yazılar yazarak backlinkler kazanın.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
          <div>
            <h4 class="font-semibold text-white mb-2">İş Ortaklıkları</h4>
            <p class="text-gray-300 text-sm">İstanbul'daki diğer işletmelerle karşılıklı link değişimi yapın.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Sosyal Medya</h4>
            <p class="text-gray-300 text-sm">Sosyal medya profillerinizde website linkinizi paylaşın.</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">📊 SEO Analiz ve Takip</h2>
      
      <h3 class="text-2xl font-bold text-amber-400 mt-8 mb-4">Önemli Metrikler</h3>
      <p class="text-gray-300 mb-6">İstanbul SEO başarınızı ölçmek için takip etmeniz gereken ana metrikler.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-amber-400 mb-3">Anahtar Kelime Performansı</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• Anahtar kelime sıralamaları</li>
            <li>• Organik trafik artışı</li>
            <li>• Tıklama oranları (CTR)</li>
            <li>• Dönüşüm oranları</li>
            <li>• Yerel arama görünürlüğü</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-amber-400 mb-3">Teknik Metrikler</h4>
          <ul class="space-y-2 text-gray-300 text-sm">
            <li>• Site hızı skorları</li>
            <li>• Mobil uyumluluk</li>
            <li>• Core Web Vitals</li>
            <li>• Sayfa indeksleme durumu</li>
            <li>• Hata sayıları</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">⚠️ Yaygın SEO Hataları</h2>
      
      <div class="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-red-300 mb-3">🚫 İstanbul SEO'da Yapılmaması Gerekenler</h3>
        <ul class="space-y-2 text-gray-300">
          <li>• Anahtar kelime spam'i</li>
          <li>• Düşük kaliteli backlinkler</li>
          <li>• Duplicate content</li>
          <li>• Yavaş site hızı</li>
          <li>• Mobil uyumsuzluk</li>
          <li>• Eksik GMB profili</li>
          <li>• Yorum spam'i</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🏆 İstanbul SEO Başarı Hikayeleri</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-green-400 mb-3">Beşiktaş Restoran</h4>
          <p class="text-gray-300 text-sm mb-3">6 ayda %400 müşteri artışı</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• GMB optimizasyonu</li>
            <li>• Yerel anahtar kelime stratejisi</li>
            <li>• Müşteri yorumu yönetimi</li>
            <li>• Yerel içerik üretimi</li>
          </ul>
        </div>
        
        <div class="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 class="text-lg font-semibold text-blue-400 mb-3">Kadıköy Kuaför</h4>
          <p class="text-gray-300 text-sm mb-3">3 ayda 1. sıraya çıkış</p>
          <ul class="text-sm text-gray-400 space-y-1">
            <li>• Teknik SEO iyileştirmeleri</li>
            <li>• Mobil optimizasyon</li>
            <li>• Yerel link building</li>
            <li>• Sosyal medya entegrasyonu</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mt-12 mb-6">🚀 İstanbul SEO Eylem Planı</h2>
      
      <div class="space-y-4 my-8">
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
          <div>
            <h4 class="font-semibold text-white mb-2">İlk Ay: Teknik Altyapı</h4>
            <p class="text-gray-300 text-sm">Site hızı, mobil uyumluluk, GMB optimizasyonu ve anahtar kelime araştırması.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
          <div>
            <h4 class="font-semibold text-white mb-2">İkinci Ay: İçerik Üretimi</h4>
            <p class="text-gray-300 text-sm">İstanbul odaklı blog yazıları, sayfa optimizasyonları ve iç bağlantı stratejisi.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Üçüncü Ay: Link Building</h4>
            <p class="text-gray-300 text-sm">Yerel dizinler, konuk yazarlık ve iş ortaklıkları ile backlink kazanımı.</p>
          </div>
        </div>
        
        <div class="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
          <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
          <div>
            <h4 class="font-semibold text-white mb-2">Dördüncü Ay: Optimizasyon</h4>
            <p class="text-gray-300 text-sm">Performans analizi, A/B testleri ve sürekli iyileştirme.</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 my-8">
        <h3 class="text-xl font-semibold text-green-300 mb-3">💼 SEOTING ile İstanbul'da SEO Başarısı</h3>
        <p class="text-gray-300 mb-4">Başakşehir merkezli SEOTING ekibi olarak, İstanbul'daki 500+ müşterimiz için kanıtlanmış SEO stratejileri uyguluyoruz.</p>
        <ul class="text-gray-300 space-y-2">
          <li>• Ortalama %300 ROI artışı</li>
          <li>• 6 ay içinde 1. sıra garantisi</li>
          <li>• 39 ilçede yerel SEO uzmanlığı</li>
          <li>• 24/7 teknik destek</li>
        </ul>
      </div>

      <p class="text-gray-300 mb-8">İstanbul'da SEO başarısı için doğru strateji ve uzman ekiple çalışmak şart. SEOTING olarak, İstanbul'un her bölgesinden müşterilerimize özel SEO çözümleri sunuyoruz.</p>
    </div>
  `
};

export default function IstanbulBusinessSEOGuidePage() {
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(blogPost.views);

  useEffect(() => {
    setViews(prevViews => prevViews + 1);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://seoting.com/blog/${blogPost.title.toLowerCase().replace(/\s+/g, '-')}`;
  const shareTitle = blogPost.title;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link kopyalandı!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.a
              href="/blog"
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </motion.a>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                  >
                    <Tag className="w-3 h-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6 leading-tight">
                <span className="gradient-text">{blogPost.title}</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {blogPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{views.toLocaleString()} görüntülenme</span>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden mb-8">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      liked 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{liked ? blogPost.likes + 1 : blogPost.likes}</span>
                  </motion.button>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>Yorum Yap</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Paylaş:</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnTwitter}
                    className="p-2 bg-white/10 hover:bg-blue-500/20 rounded-full transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4 text-blue-400" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnFacebook}
                    className="p-2 bg-white/10 hover:bg-blue-600/20 rounded-full transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4 text-blue-500" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-white/10 hover:bg-blue-700/20 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyToClipboard}
                    className="p-2 bg-white/10 hover:bg-gray-500/20 rounded-full transition-colors duration-300"
                  >
                    <LinkIcon className="w-4 h-4 text-gray-400" />
                  </motion.button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">İstanbul'da SEO Uzmanı Arıyorsunuz?</h3>
                <p className="text-gray-300 mb-6">
                  Başakşehir merkezli SEOTING ekibi olarak, İstanbul'daki 500+ müşterimiz için kanıtlanmış SEO stratejileri uyguluyoruz. 
                  Ortalama %300 ROI artışı ile 6 ay içinde 1. sıra garantisi veriyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/iletisim"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Ücretsiz SEO Analizi
                  </motion.a>
                  <motion.a
                    href="tel:+905442519082"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold text-white transition-all duration-300 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hemen Ara: +90 544 251 90 82
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
