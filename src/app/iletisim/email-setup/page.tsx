'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { 
  Key, 
  Mail, 
  Settings, 
  CheckCircle,
  ExternalLink,
  Copy,
  ArrowLeft,
  Shield,
  AlertTriangle,
  Lock,
  Smartphone
} from 'lucide-react';
import { useState } from 'react';

export default function EmailSetupPage() {
  const [copied, setCopied] = useState<string>('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.a
              href="/iletisim"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              İletişim Sayfasına Dön
            </motion.a>

            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 mb-6">
                <Mail size={16} className="mr-2" />
                Email Kurulum Rehberi
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black font-display mb-6 leading-tight">
                <span className="gradient-text">Gmail App</span>
                <br />
                <span className="text-white">Password Kurulumu</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                İletişim formundan gelen emailler için Gmail App Password nasıl oluşturulur
              </p>
            </div>

            {/* Setup Steps */}
            <div className="space-y-8">
              
              {/* Step 1: Enable 2FA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-white">2 Adımlı Doğrulamayı Etkinleştirin</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Gmail App Password kullanmak için önce Google hesabınızda 2 adımlı doğrulama aktif olmalı.
                  </p>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Smartphone size={16} className="mr-2" />
                      Adımlar:
                    </h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                      <li>Google hesabınıza giriş yapın</li>
                      <li>Güvenlik sekmesine gidin</li>
                      <li>"2 Adımlı Doğrulama" seçeneğini bulun</li>
                      <li>Telefon numaranızı ekleyin ve doğrulayın</li>
                      <li>2FA'yı etkinleştirin</li>
                    </ol>
                  </div>

                  <motion.a
                    href="https://myaccount.google.com/security"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Google Güvenlik Ayarları
                  </motion.a>
                </div>
              </motion.div>

              {/* Step 2: Create App Password */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-white">App Password Oluşturun</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    2FA aktif olduktan sonra uygulama şifresi oluşturabilirsiniz.
                  </p>
                  
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Key size={16} className="mr-2" />
                      App Password Oluşturma:
                    </h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                      <li>Google Hesap Ayarları → Güvenlik</li>
                      <li>"2 Adımlı Doğrulama" bölümüne gidin</li>
                      <li>En altta "Uygulama şifreleri" seçeneğini bulun</li>
                      <li>"Uygulama seçin" → "Diğer"</li>
                      <li>Uygulama adı: "SEOTING Website" yazın</li>
                      <li>16 haneli şifreyi kopyalayın</li>
                    </ol>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-start">
                      <AlertTriangle size={16} className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-1">Önemli Not</h4>
                        <p className="text-yellow-300 text-sm">
                          App Password sadece bir kez gösterilir. Mutlaka kopyalayıp güvenli bir yerde saklayın.
                          Bu şifre 16 haneli olacak ve boşluksuz görünecek.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href="https://myaccount.google.com/apppasswords"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <Key size={16} className="mr-2" />
                    App Password Oluştur
                  </motion.a>
                </div>
              </motion.div>

              {/* Step 3: Update Environment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-white">Environment Variables Güncelleyin</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Oluşturduğunuz App Password'ü .env.local dosyasına ekleyin.
                  </p>
                  
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold flex items-center">
                        <Settings size={16} className="mr-2" />
                        .env.local dosyasını güncelleyin:
                      </h4>
                      <motion.button
                        onClick={() => copyToClipboard(`SMTP_USER=hamzahologlu@gmail.com
SMTP_PASSWORD=your_16_digit_app_password_here`, 'env')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm transition-colors"
                      >
                        {copied === 'env' ? <CheckCircle size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
                        {copied === 'env' ? 'Kopyalandı!' : 'Kopyala'}
                      </motion.button>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
{`SMTP_USER=hamzahologlu@gmail.com
SMTP_PASSWORD=your_16_digit_app_password_here`}
                    </pre>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-start">
                      <Shield size={16} className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-red-400 font-semibold mb-1">Güvenlik Uyarısı</h4>
                        <p className="text-red-300 text-sm">
                          <strong>SMTP_PASSWORD</strong> kısmına Gmail şifrenizi DEĞİL, oluşturduğunuz 
                          16 haneli App Password'ü yazın. Normal Gmail şifreniz çalışmayacaktır.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Test */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-white">Test ve Doğrulama</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Kurulumunuzu test edin ve email gönderiminin çalıştığından emin olun.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">✅ Başarılı Kurulum</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Form gönderimi başarılı olur</li>
                        <li>• hamzahologlu@gmail.com'a email gelir</li>
                        <li>• Müşteriye otomatik yanıt gider</li>
                        <li>• Console'da hata görmezsiniz</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <h4 className="text-white font-semibold mb-2">⚠️ Hata Durumları</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• "Invalid login" hatası</li>
                        <li>• "Application-specific password required"</li>
                        <li>• Email gönderilmiyor</li>
                        <li>• 2FA kurulmamış olabilir</li>
                      </ul>
                    </div>
                  </div>

                  <motion.a
                    href="/iletisim"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white font-semibold transition-colors"
                  >
                    <Mail size={16} className="mr-2" />
                    Şimdi Test Et
                  </motion.a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
