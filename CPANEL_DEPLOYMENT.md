# 🚀 cPanel Deployment Rehberi - SEOTING Website

## 📋 **Ön Hazırlık**

### ✅ **Gereksinimler:**
- Node.js 18+ (cPanel'de Node.js support)
- cPanel File Manager erişimi
- SSL sertifikası (Let's Encrypt)
- Domain/subdomain yapılandırması

---

## 🔧 **1. Projeyi Hazırlama**

### **Local'de Build Alma:**
```bash
npm run build
```

### **Production Test (Opsiyonel):**
```bash
npm start
```

---

## 📤 **2. cPanel'e Upload**

### **A. File Manager ile:**
1. cPanel → File Manager
2. `public_html` klasörüne git
3. Proje dosyalarını zip'le ve upload et
4. Extract işlemi yap

### **B. FTP ile:**
1. FTP client kullan (FileZilla vs.)
2. Tüm proje dosyalarını `public_html`'e upload et

---

## ⚙️ **3. cPanel Node.js Kurulumu**

### **Node.js App Oluşturma:**
1. cPanel → **Node.js Apps**
2. **Create Application** tıkla
3. Ayarlar:
   - **Node.js Version:** 18.x veya 20.x
   - **Application Mode:** Production
   - **Application Root:** `public_html`
   - **Application URL:** domain adınız
   - **Startup File:** `server.js` (otomatik oluşacak)

### **Dependencies Yükleme:**
```bash
# cPanel Terminal'de:
cd public_html
npm install
npm run build
```

---

## 📧 **4. Email Sistemi Kurulumu**

### **A. Formspree Kurulumu (Önerilen):**

1. **Formspree hesabı aç:** https://formspree.io
2. **Yeni form oluştur:**
   - Email: `hamzahologlu@gmail.com`
   - Form name: "SEOTING Contact Form"
3. **Form ID'yi kopyala** (örn: `mbjvgqpd`)
4. **Kod güncellemesi:**

```bash
# Local'de bu dosyayı düzenle:
src/app/iletisim/page.tsx
```

**161-163. satırları güncelle:**
```javascript
const endpoint = isProduction 
  ? 'https://formspree.io/f/BURAYA_FORM_ID_YAZ' // Formspree ID'nizi yazın
  : '/api/send-email'; // Local API endpoint
```

### **B. cPanel Email Kurulumu (Alternatif):**
- cPanel → Email Accounts
- `hamzahologlu@yourdomain.com` hesabı oluştur
- SMTP ayarlarını `.env.production` dosyasına ekle

---

## 🌐 **5. Domain Yapılandırması**

### **SSL Kurulumu:**
1. cPanel → **SSL/TLS**
2. **Let's Encrypt** aktif et
3. **Force HTTPS** açık yap

### **DNS Ayarları:**
- A Record: domain → server IP
- CNAME: www → domain

---

## 🚀 **6. Deployment Adımları**

### **Build ve Deploy:**
```bash
# Local'de:
npm run build

# cPanel Terminal'de:
cd public_html
npm start
```

### **Port Ayarları:**
cPanel Node.js Apps'te port otomatik atanır (genellikle 3000).

---

## ✅ **7. Test ve Doğrulama**

### **Test Listesi:**
- [ ] Ana sayfa yükleniyor ✅
- [ ] Tüm sayfalar çalışıyor ✅
- [ ] Navigasyon menüsü çalışıyor ✅
- [ ] Google Rank Checker çalışıyor ✅
- [ ] İletişim formu gönderimi çalışıyor 📧
- [ ] Responsive tasarım çalışıyor 📱
- [ ] SSL aktif (https://) 🔒

---

## 🚨 **Olası Sorunlar ve Çözümler**

### **1. "Module not found" Hatası:**
```bash
cd public_html
npm install --production
```

### **2. Port Sorunu:**
- cPanel Node.js Apps'te restart yap
- Port değiştir (3001, 3002)

### **3. Email Gönderilmiyor:**
- Formspree ID'yi kontrol et
- Network sekmesinde hataları gözlemle

### **4. Images Yüklenmiyor:**
- next.config.js'te `unoptimized: true` ayarını kontrol et
- Image path'lerini kontrol et

### **5. Sayfa Bulunamıyor (404):**
- .htaccess dosyası oluştur:
```apache
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## 📊 **Performance Optimizasyonu**

### **Production Tweaks:**
```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    unoptimized: true,
  },
};
```

---

## 📞 **Destek**

### **Sorun Yaşarsanız:**
1. **cPanel Error Logs:** → Error Logs
2. **Browser Console:** F12 → Console
3. **Network Tab:** Hangi istekler başarısız

### **Hızlı Çözümler:**
- **Cache temizle:** Ctrl + F5
- **Node.js App restart:** cPanel'den restart
- **Dependencies yenile:** `npm install`

---

## 🎯 **Son Notlar**

✅ **Bu proje cPanel'de çalışacak**  
✅ **Email sistemi Formspree ile çalışacak**  
✅ **Tüm sayfalar static olarak çalışacak**  
✅ **Google API'ler çalışacak**  

⚠️ **Dikkat:**
- İlk deployment'ta 5-10 dakika bekleyin
- DNS propagation 24 saat sürebilir
- SSL sertifikası aktif olana kadar bekleyin

---

## 🚀 **Hızlı Deployment Checklist**

1. [ ] `npm run build` lokal'de başarılı
2. [ ] Formspree form ID güncellendi
3. [ ] Dosyalar cPanel'e upload edildi
4. [ ] Node.js App oluşturuldu
5. [ ] Dependencies yüklendi (`npm install`)
6. [ ] App başlatıldı (`npm start`)
7. [ ] SSL aktif edildi
8. [ ] Test edildi

**🎉 Bu adımları tamamladıktan sonra siteniz canlıya alınmış olacak!**
