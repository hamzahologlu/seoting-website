import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.budget || !formData.message) {
      return NextResponse.json(
        { error: 'Zorunlu alanlar eksik' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password',
      },
    });

    // Email template for the business
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; display: inline-block; width: 120px; }
          .value { color: #333; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 15px; }
          .footer { text-align: center; color: #888; margin-top: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Yeni Proje Talebi - SEOTING</h1>
            <p>Web sitenizden yeni bir proje talebi aldınız</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">👤 Ad Soyad:</span>
              <span class="value">${formData.name}</span>
            </div>
            
            <div class="field">
              <span class="label">📧 E-posta:</span>
              <span class="value">${formData.email}</span>
            </div>
            
            ${formData.phone ? `
            <div class="field">
              <span class="label">📞 Telefon:</span>
              <span class="value">${formData.phone}</span>
            </div>
            ` : ''}
            
            ${formData.company ? `
            <div class="field">
              <span class="label">🏢 Şirket:</span>
              <span class="value">${formData.company}</span>
            </div>
            ` : ''}
            
            <div class="field">
              <span class="label">🎯 Hizmet:</span>
              <span class="value">${formData.service}</span>
            </div>
            
            <div class="field">
              <span class="label">💰 Bütçe:</span>
              <span class="value">${formData.budget}</span>
            </div>
            
            <div class="message-box">
              <h3>💬 Proje Detayları:</h3>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="footer">
              <p>Bu email SEOTING web sitesi iletişim formundan gönderilmiştir.</p>
              <p>Tarih: ${new Date().toLocaleString('tr-TR')}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email template for auto-reply to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .highlight { background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; }
          .contact-info { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
          .footer { text-align: center; color: #888; margin-top: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">SEOTING</div>
            <h1>✨ Teşekkürler ${formData.name}!</h1>
          </div>
          
          <div class="content">
            <h2>🎉 Proje talebiniz başarıyla alındı</h2>
            
            <p>Merhaba <strong>${formData.name}</strong>,</p>
            
            <p>SEOTING olarak <span class="highlight">${formData.service}</span> hizmeti için gönderdiğiniz proje talebinizi aldık. Uzman ekibimiz talebinizi inceleyerek en kısa sürede size dönüş yapacak.</p>
            
            <div class="contact-info">
              <h3>📞 Hızlı İletişim</h3>
              <p><strong>Telefon:</strong> +90 (544) 251 90 82</p>
              <p><strong>E-posta:</strong> info@seoting.com</p>
              <p><strong>Yanıt Süresi:</strong> 24 saat içinde</p>
            </div>
            
            <p>Acil durumlar için doğrudan telefon numaramızdan bize ulaşabilirsiniz.</p>
            
            <p>Dijital dünyada birlikte büyümeye hazır mısınız? 🚀</p>
            
            <p>Saygılarımızla,<br>
            <strong>SEOTING Ekibi</strong><br>
            <em>Türkiye'nin Önde Gelen Dijital Ajansı</em></p>
            
            <div class="footer">
              <p>Bu otomatik bir yanıttır. Lütfen bu emaile yanıt vermeyin.</p>
              <p>© 2024 SEOTING - Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to business
    await transporter.sendMail({
      from: `"SEOTING Web Sitesi" <${process.env.SMTP_USER || 'noreply@seoting.com'}>`,
      to: 'hamzahologlu@gmail.com',
      subject: `🚀 Yeni Proje Talebi: ${formData.service} - ${formData.name}`,
      html: businessEmailHtml,
      replyTo: formData.email
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"SEOTING" <${process.env.SMTP_USER || 'info@seoting.com'}>`,
      to: formData.email,
      subject: '✨ Proje Talebiniz Alındı - SEOTING',
      html: customerEmailHtml
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi. Size 24 saat içinde dönüş yapacağız.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        error: 'E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan telefon ile iletişime geçin.' 
      },
      { status: 500 }
    );
  }
}
