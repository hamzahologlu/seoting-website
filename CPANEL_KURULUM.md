# 🚀 SEOTING Website - cPanel Kurulum (5 Dakika)

## 📁 **ADIM 1: ZIP UPLOAD**

1. **cPanel'e giriş yapın**
2. **File Manager** açın
3. **public_html** klasörüne gidin
4. Mevcut dosyaları silin (index.html vs.)
5. **Upload** → `seoting-website.zip` yükleyin
6. Zip dosyasına **sağ tık** → **Extract**

---

## ⚙️ **ADIM 2: NODE.JS APP**

1. **cPanel ana sayfa** → **Node.js Apps**
2. **Create Application:**
   - **Node.js Version:** 18.x veya 20.x
   - **Application Mode:** Production  
   - **Application Root:** public_html
   - **Application URL:** domain adınız

3. **Terminal** açın ve komutları çalıştırın:
```bash
cd public_html
npm install
npm run build
npm start
```

---

## 📧 **ADIM 3: EMAIL KURULUMU (Opsiyonel)**

Formu kendi email adresinize yönlendirmek için:

1. **https://formspree.io** hesap açın
2. **Yeni form** oluşturun: `hamzahologlu@gmail.com`
3. **Form ID** kopyalayın
4. **File Manager** → `src/app/iletisim/page.tsx` dosyasını açın
5. **163. satırda** `xdkoqpyg` yerine kendi Form ID'nizi yazın
6. **Terminal'de:** `npm run build && npm start`

---

## ✅ **SONUÇ**

Site şu adreste çalışacak: **https://yourdomain.com**

- ✅ Tüm sayfalar çalışıyor
- ✅ Megamenu çalışıyor  
- ✅ Google Rank Checker çalışıyor
- ✅ İletişim formu çalışıyor
- ✅ Mobil uyumlu

---

## 🔧 **Sorun Yaşarsanız:**

1. **Node.js Apps** → **Restart** 
2. **SSL/TLS** → **Let's Encrypt** aktif edin
3. **24 saat** bekleyin (DNS propagation)

**🎉 Başarılar!**
