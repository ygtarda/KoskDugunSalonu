import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/email';
import { saveSubmission, getAllSubmissions, updateSubmissionEmailStatus } from '@/lib/submissions';
import { checkRateLimit, evaluateSpamSignals, sanitizeString } from '@/lib/spam-protection';

interface BookingSubmissionPayload {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  selectedDate?: string | null;
  formattedDate?: string;
  timeSlot: 'aksam' | 'gunduz';
  guestCount: number;
  notes?: string;
}

// Lüks, net ve kurumsal HTML e-posta şablonu oluşturucu
function generateBookingEmailHtml(data: BookingSubmissionPayload, isPreview = false): string {
  const isAksam = data.timeSlot === 'aksam';
  const timeSlotTitle = isAksam ? 'Akşam Seansı' : 'Gündüz Seansı';
  const timeSlotHours = isAksam ? '19:00 – 23:00' : '12:00 – 16:00';
  const timeSlotIcon = isAksam ? '🌙' : '☀️';

  const cleanPhone = (data.phone || '').replace(/\D/g, '');
  const waPhone = cleanPhone.startsWith('0') ? '9' + cleanPhone : cleanPhone.startsWith('90') ? cleanPhone : '90' + cleanPhone;
  const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    `Merhaba Sayın ${data.fullName}, Köşk Düğün Salonu'na web sitemiz üzerinden ilettiğiniz ${data.eventType} randevu ve teklif talebinizle ilgili ulaşıyoruz.`
  )}`;

  const submissionDate = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Beyaz zeminli kurumsal Köşk Düğün Salonu logosu (kosk_logo.jpg)
  const logoSrc = isPreview ? '/kosk_logo.jpg' : 'cid:kosk_logo';

  return `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeni Rezervasyon ve Keşif Talebi</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F4F1EC;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #2C2826;
      -webkit-font-smoothing: antialiased;
      line-height: 1.6;
    }
    table { border-collapse: collapse; }
    img { border: 0; outline: none; text-decoration: none; }
    a { color: #B8956E; text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .container { width: 100% !important; }
      .content-padding { padding: 24px 18px !important; }
      .col-responsive { display: block !important; width: 100% !important; margin-bottom: 12px !important; }
      .btn-responsive { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; margin-bottom: 8px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F4F1EC;">
  <!-- Preheader -->
  <div style="display:none;font-size:1px;color:#F4F1EC;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    🔔 Yeni Talep: ${data.fullName} — ${data.eventType} (${data.formattedDate || 'Tarih Belirtilmedi'} · ${timeSlotTitle} ${timeSlotHours})
  </div>

  <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F4F1EC" style="background-color:#F4F1EC;padding:30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table class="container" width="600" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:8px;overflow:hidden;box-shadow:0 6px 24px rgba(44,40,38,0.08);border:1px solid #E8E4DF;">
          
          <!-- Gold Top Accent Line -->
          <tr>
            <td height="5" style="background:linear-gradient(90deg, #D4B59E 0%, #B8956E 50%, #9F7E58 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header / Brand Section -->
          <tr>
            <td align="center" style="background-color:#2C2826;padding:32px 24px 28px 24px;">
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center">
                    <img src="${logoSrc}" alt="Köşk Düğün Salonu" width="66" height="66" style="display:block;margin:0 auto 14px auto;width:66px;height:66px;border-radius:10px;background-color:#FFFFFF;border:1px solid rgba(212,181,158,0.5);box-shadow:0 4px 12px rgba(0,0,0,0.25);" />
                    <div style="font-family:'Georgia', serif;font-size:22px;letter-spacing:0.18em;color:#FAF8F5;text-transform:uppercase;font-weight:600;margin-bottom:4px;">
                      KÖŞK DÜĞÜN SALONU
                    </div>
                    <div style="font-size:11px;letter-spacing:0.18em;color:#D4B59E;text-transform:uppercase;font-weight:500;">
                      POLATLI · ANKARA · YÖNETİM BİLDİRİMİ
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Notification Alert Ribbon -->
          <tr>
            <td style="background-color:#FAF8F5;border-bottom:1px solid #E8E4DF;padding:16px 28px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left">
                    <span style="display:inline-block;background-color:#B8956E;color:#FFFFFF;font-size:10.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:4px 10px;border-radius:3px;">
                      YENİ RANDEVU & TEKLİF TALEBİ
                    </span>
                  </td>
                  <td align="right" style="font-size:11.5px;color:#7A7471;">
                    ${submissionDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td class="content-padding" style="padding:32px 32px 24px 32px;">
              
              <!-- Greeting / Summary Callout -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="font-size:15px;color:#524C48;line-height:1.65;">
                    Web sitenizdeki <strong>Keşif Randevusu & Teklif Formu</strong> üzerinden yeni bir misafir talebi alındı. Detaylar aşağıda net ve doğrulanmış bölümlere ayrılmıştır:
                  </td>
                </tr>
              </table>

              <!-- SECTION 1: Misafir İletişim Bilgileri -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #E8E4DF;border-radius:6px;overflow:hidden;">
                <tr>
                  <td style="background-color:#FAF8F5;padding:12px 18px;border-bottom:1px solid #E8E4DF;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7A7471;">
                      1. MİSAFİR İLETİŞİM BİLGİLERİ
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="38%" style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;">Ad Soyad:</td>
                        <td width="62%" style="padding:8px 0;font-size:15.5px;font-weight:700;color:#2C2826;vertical-align:top;">${data.fullName}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;border-top:1px solid #F4F1EC;">Telefon Numarası:</td>
                        <td style="padding:8px 0;font-size:15px;font-weight:600;color:#2C2826;vertical-align:top;border-top:1px solid #F4F1EC;">
                          <a href="tel:${cleanPhone}" style="color:#2C2826;text-decoration:none;font-weight:700;">
                            📞 ${data.phone}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;border-top:1px solid #F4F1EC;">E-posta Adresi:</td>
                        <td style="padding:8px 0;font-size:14px;color:#524C48;vertical-align:top;border-top:1px solid #F4F1EC;">
                          ${data.email ? `<a href="mailto:${data.email}" style="color:#B8956E;">✉️ ${data.email}</a>` : '<span style="color:#AAA49F;font-style:italic;">Belirtilmedi</span>'}
                        </td>
                      </tr>
                      <!-- Hızlı İletişim Butonları (Ortalanmış ve Üst Satırdan Net Boşluklu) -->
                      <tr>
                        <td colspan="2" align="center" style="padding-top:22px;padding-bottom:6px;border-top:1px dashed #E8E4DF;text-align:center;">
                          <table border="0" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;">
                            <tr>
                              <td align="center" style="padding:0 6px;">
                                <a href="tel:${cleanPhone}" class="btn-responsive" style="display:inline-block;background-color:#2C2826;color:#FFFFFF;padding:10px 20px;border-radius:5px;font-size:13px;font-weight:600;text-decoration:none;">
                                  📞 Misafiri Ara
                                </a>
                              </td>
                              <td align="center" style="padding:0 6px;">
                                <a href="${whatsappUrl}" target="_blank" class="btn-responsive" style="display:inline-block;background-color:#1E9E4B;color:#FFFFFF;padding:10px 20px;border-radius:5px;font-size:13px;font-weight:600;text-decoration:none;">
                                  💬 WhatsApp'tan Yaz
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- SECTION 2: Balo & Organizasyon Bilgileri -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #E8E4DF;border-radius:6px;overflow:hidden;">
                <tr>
                  <td style="background-color:#FAF8F5;padding:12px 18px;border-bottom:1px solid #E8E4DF;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7A7471;">
                      2. ORGANİZASYON & SEANS DETAYLARI
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px;">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="38%" style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;">Organizasyon Türü:</td>
                        <td width="62%" style="padding:8px 0;vertical-align:top;">
                          <span style="display:inline-block;background-color:rgba(212,181,158,0.22);color:#2C2826;border:1px solid #B8956E;padding:3px 10px;border-radius:3px;font-size:13.5px;font-weight:700;">
                            ${data.eventType}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;border-top:1px solid #F4F1EC;">Talep Edilen Tarih:</td>
                        <td style="padding:8px 0;font-size:15px;font-weight:700;color:#2C2826;vertical-align:top;border-top:1px solid #F4F1EC;">
                          📅 ${data.formattedDate || 'Belirtilmedi'}
                        </td>
                      </tr>
                      <!-- SEANS & ZAMAN DİLİMİ (Sade, Net ve Uyumlu Satır) -->
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;border-top:1px solid #F4F1EC;">Zaman Dilimi (Seans):</td>
                        <td style="padding:8px 0;font-size:15px;font-weight:700;color:#2C2826;vertical-align:top;border-top:1px solid #F4F1EC;">
                          ${timeSlotIcon} ${timeSlotTitle} <span style="font-size:13.5px;font-weight:600;color:#7A7471;">(${timeSlotHours})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#7A7471;vertical-align:top;border-top:1px solid #F4F1EC;">Davetli Sayısı:</td>
                        <td style="padding:8px 0;font-size:15px;font-weight:700;color:#2C2826;vertical-align:top;border-top:1px solid #F4F1EC;">
                          👥 ${data.guestCount} Kişi
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              <!-- SECTION 3: Misafir Notu & Özel İstekler -->
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:20px;border:1px solid #E8E4DF;border-radius:6px;overflow:hidden;">
                <tr>
                  <td style="background-color:#FAF8F5;padding:12px 18px;border-bottom:1px solid #E8E4DF;">
                    <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7A7471;">
                      3. ÖZEL İSTEKLER & MİSAFİR NOTU
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px;">
                    ${
                      data.notes && data.notes.trim()
                        ? `<div style="background-color:#FAF8F5;border-left:3px solid #D4B59E;padding:12px 16px;font-size:14px;color:#2C2826;line-height:1.6;font-style:italic;border-radius:0 4px 4px 0;">
                            "${data.notes.trim()}"
                          </div>`
                        : `<span style="font-size:13.5px;color:#AAA49F;font-style:italic;">Misafir tarafından ek not girilmedi.</span>`
                    }
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer / Salon Info -->
          <tr>
            <td style="background-color:#FAF8F5;border-top:1px solid #E8E4DF;padding:24px 32px;text-align:center;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="font-size:12px;color:#7A7471;line-height:1.6;">
                    <strong>Köşk Düğün Salonu Polatlı</strong><br>
                    Cumhuriyet Mah. Ankara Cad. No: 42, Polatlı / Ankara · Tel: 0 (312) 623 00 00<br>
                    <span style="font-size:11px;color:#AAA49F;margin-top:6px;display:inline-block;">
                      Bu e-posta koskdugunsalonu.com web sitesi randevu sistemi tarafından otomatik olarak oluşturulmuştur.
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// Client IP helper
function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}

// GET: Önizleme veya kayıtlı başvuruları listeleme
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Veritabanı / Başvuru kayıtlarını listeleme (Doğrulama ve yönetim)
  if (searchParams.get('action') === 'submissions') {
    const list = await getAllSubmissions();
    return NextResponse.json({
      total: list.length,
      submissions: list,
    });
  }

  const sampleData: BookingSubmissionPayload = {
    fullName: searchParams.get('ad') || 'Selin & Emre Yılmaz',
    phone: searchParams.get('tel') || '0532 623 00 00',
    email: searchParams.get('email') || 'selin.yilmaz@example.com',
    eventType: searchParams.get('tur') || 'Düğün Daveti',
    formattedDate: searchParams.get('tarih') || '18 Temmuz 2026, Cumartesi',
    timeSlot: (searchParams.get('seans') as 'aksam' | 'gunduz') || 'aksam',
    guestCount: Number(searchParams.get('kisi')) || 800,
    notes:
      searchParams.get('not') ||
      'Yemekli menü seçenekleri (kavurma / tavuk) ve orkestra sahne yerleşimi hakkında görüşmek istiyoruz.',
  };

  const html = generateBookingEmailHtml(sampleData, true);
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

// POST: Form gönderimi, spam denetimi, kalıcı kayıt ve e-posta gönderimi
export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const userAgent = request.headers.get('user-agent') || 'Bilinmiyor';

    // 1. IP Tabanlı İstek Hız Sınırı (Rate Limiting: 10 dk içinde en fazla 6 istek)
    const rateLimit = checkRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Çok fazla form gönderimi yapıldı. Lütfen biraz bekleyip tekrar deneyin veya doğrudan 0 (312) 623 00 00 numaramızdan bize ulaşın.',
          code: 'RATE_LIMITED',
        },
        { status: 429 }
      );
    }

    const rawBody = await request.json();

    // 2. Girdi Temizleme (Sanitization - XSS & Script Injection Önleme)
    const sanitizedFullName = sanitizeString(rawBody.fullName);
    const sanitizedPhone = sanitizeString(rawBody.phone);
    const sanitizedEmail = sanitizeString(rawBody.email);
    const sanitizedEventType = sanitizeString(rawBody.eventType);
    const sanitizedNotes = sanitizeString(rawBody.notes);
    const timeSlot: 'aksam' | 'gunduz' = rawBody.timeSlot === 'gunduz' ? 'gunduz' : 'aksam';
    const guestCount = Math.max(100, Math.min(1000, Number(rawBody.guestCount) || 600));
    const formattedDate = sanitizeString(rawBody.formattedDate) || 'Tarih seçilmedi';
    const selectedDate = rawBody.selectedDate || null;

    // 3. Akıllı Bot & Spam Analizi (Honeypot + Zaman Kilidi + Script Koruması)
    const spamCheck = evaluateSpamSignals({
      _hp_website: rawBody._hp_website,
      _form_loaded_at: rawBody._form_loaded_at,
      fullName: rawBody.fullName,
      phone: rawBody.phone,
      notes: rawBody.notes,
    });

    if (spamCheck.isSpam) {
      console.warn(`🛡️ [Spam Bot Engellendi] IP: ${clientIp}, Neden: ${spamCheck.reason}`);
      // Bot kaydını sisteme güvenle 'spam_blocked' olarak kaydet
      await saveSubmission({
        fullName: sanitizedFullName || 'Bot Submission',
        phone: sanitizedPhone || 'N/A',
        email: sanitizedEmail || null,
        eventType: sanitizedEventType || 'Spam',
        selectedDate,
        formattedDate,
        timeSlot,
        guestCount,
        notes: sanitizedNotes,
        ip: clientIp,
        userAgent,
        emailStatus: 'spam_blocked',
        emailProvider: 'none',
        isSpam: true,
        spamReason: spamCheck.reason,
      });

      // Botun filtrelemeyi fark edip algoritma değiştirmemesi için 200 dön (Sessiz Savunma)
      return NextResponse.json({
        success: true,
        message: 'Talebiniz başarıyla alındı.',
        isBotFiltered: true,
      });
    }

    // 4. Zorunlu Alan Doğrulaması
    if (!sanitizedFullName || !sanitizedPhone || !sanitizedEventType) {
      return NextResponse.json(
        { error: 'Zorunlu alanlar eksik (Ad Soyad, Telefon veya Organizasyon Türü).' },
        { status: 400 }
      );
    }

    const payloadData: BookingSubmissionPayload = {
      fullName: sanitizedFullName,
      phone: sanitizedPhone,
      email: sanitizedEmail,
      eventType: sanitizedEventType,
      selectedDate,
      formattedDate,
      timeSlot,
      guestCount,
      notes: sanitizedNotes,
    };

    // 5. Veritabanına / JSON Depolamaya Kaydet (Lead Asla Kaybolmaz)
    const savedRecord = await saveSubmission({
      fullName: sanitizedFullName,
      phone: sanitizedPhone,
      email: sanitizedEmail || null,
      eventType: sanitizedEventType,
      selectedDate,
      formattedDate,
      timeSlot,
      guestCount,
      notes: sanitizedNotes,
      ip: clientIp,
      userAgent,
      emailStatus: 'simulated',
      emailProvider: 'none',
      isSpam: false,
      spamReason: null,
    });

    // 6. E-posta Gönderimi (Resend / SendGrid / SMTP / Mailpit)
    const isAksam = timeSlot === 'aksam';
    const seansMetin = isAksam ? 'Akşam (19:00-23:00)' : 'Gündüz (12:00-16:00)';
    const subject = `🔔 Yeni Talep: ${sanitizedFullName} — ${sanitizedEventType} (${formattedDate} · ${seansMetin})`;
    const emailHtml = generateBookingEmailHtml(payloadData, false);

    const emailResult = await sendNotificationEmail({
      to: process.env.CONTACT_RECEIVER_EMAIL || 'iletisim@koskdugunsalonu.com',
      replyTo: sanitizedEmail || undefined,
      subject,
      html: emailHtml,
    });

    // 7. Gönderim Sonucuna Göre Başvuru Kayıt Durumunu Güncelle
    const finalEmailStatus = emailResult.success
      ? (emailResult.provider === 'none' ? 'simulated' : 'sent')
      : 'failed';

    await updateSubmissionEmailStatus(savedRecord.id, {
      emailStatus: finalEmailStatus,
      emailProvider: emailResult.provider,
      emailError: emailResult.error || null,
    });

    return NextResponse.json({
      success: true,
      id: savedRecord.id,
      sent: emailResult.success && emailResult.provider !== 'none',
      provider: emailResult.provider,
      message: 'Talebiniz kaydedildi ve yönetime e-posta ile iletildi.',
    });
  } catch (error: any) {
    console.error('İletişim formu işleme hatası:', error);
    return NextResponse.json(
      { error: 'Talep iletilirken sunucu tarafında bir hata oluştu.' },
      { status: 500 }
    );
  }
}

