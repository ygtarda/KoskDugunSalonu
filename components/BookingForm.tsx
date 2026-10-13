'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Users,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  Sun,
  Moon,
  X,
} from 'lucide-react';
import styles from './BookingForm.module.css';

// Event Type Options
const EVENT_TYPES = [
  'Düğün Daveti',
  'Kına Gecesi',
  'Nişan & Söz Töreni',
  'Sünnet Düğünü',
  'Mezuniyet Kutlaması',
  'Kurumsal Davet & Gala',
];

// Hizmetler sayfasından gelen parametrelerle eşleşme haritası
const PACKAGE_PARAM_MAP: Record<string, { eventType: string; defaultGuests: number }> = {
  dugun: { eventType: 'Düğün Daveti', defaultGuests: 800 },
  kina: { eventType: 'Kına Gecesi', defaultGuests: 600 },
  nisan: { eventType: 'Nişan & Söz Töreni', defaultGuests: 400 },
  sunnet: { eventType: 'Sünnet Düğünü', defaultGuests: 600 },
  kurumsal: { eventType: 'Kurumsal Davet & Gala', defaultGuests: 500 },
  mezuniyet: { eventType: 'Mezuniyet Kutlaması', defaultGuests: 500 },
};


// Turkish Month and Day Names
const TURKISH_MONTHS = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

const TURKISH_WEEKDAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

// Turkish Phone Formatter: 05XX XXX XX XX
function formatTurkishPhone(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('90') && digits.length > 10) {
    digits = digits.slice(2);
  }
  if (digits.length > 0 && !digits.startsWith('0')) {
    digits = '0' + digits;
  }
  digits = digits.slice(0, 11);

  if (!digits) return '';
  let result = digits.slice(0, 4);
  if (digits.length > 4) {
    result += ' ' + digits.slice(4, 7);
  }
  if (digits.length > 7) {
    result += ' ' + digits.slice(7, 9);
  }
  if (digits.length > 9) {
    result += ' ' + digits.slice(9, 11);
  }
  return result;
}

// Date Formatter: "18 Temmuz 2026, Cumartesi"
function formatDisplayDate(date: Date | null): string {
  if (!date) return '';
  const day = date.getDate();
  const month = TURKISH_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const dayName = dayNames[date.getDay()];
  return `${day} ${month} ${year}, ${dayName}`;
}

export default function BookingForm() {
  const searchParams = useSearchParams();
  const paketParam = searchParams.get('paket');

  // Current Step: 1, 2, or 3
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [selectedPackageBadge, setSelectedPackageBadge] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState<'aksam' | 'gunduz'>('aksam');
  const [guestCount, setGuestCount] = useState<number>(600);
  const [displayGuestCount, setDisplayGuestCount] = useState<number>(600);
  const [isSliderAnimated, setIsSliderAnimated] = useState<boolean>(true);
  const [notes, setNotes] = useState('');
  // Anti-bot Spam Koruması (Honeypot & Zaman Kilidi)
  const [hpWebsite, setHpWebsite] = useState('');
  const formLoadedAtRef = useRef<number>(Date.now());
  const animFrameRef = useRef<number | null>(null);

  // Butona basıldığında veya + / - tıklandığında çubuğun pat pat değil, akışkan animasyonla sürüklenmesi
  const animateToGuestCount = (targetVal: number) => {
    const clampedTarget = Math.max(100, Math.min(1000, targetVal));
    setGuestCount(clampedTarget);
    setIsSliderAnimated(true);

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startVal = displayGuestCount;
    const diff = clampedTarget - startVal;
    if (diff === 0) return;

    const duration = 440; // ms
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // İpeksi cubic ease-out formülü
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startVal + diff * ease);

      if (progress >= 1) {
        setDisplayGuestCount(clampedTarget);
      } else {
        setDisplayGuestCount(Math.round(currentVal / 5) * 5);
        animFrameRef.current = requestAnimationFrame(step);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  // Elle sürükleme yapıldığında gecikmesiz anlık takip
  const handleRangeInput = (val: number) => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setIsSliderAnimated(false);
    setGuestCount(val);
    setDisplayGuestCount(val);
  };

  // URL'deki ?paket= parametresini otomatik seç ve ardından URL'den temizle (yenilemede kalıcı olmasın)
  useEffect(() => {
    if (paketParam) {
      const cleanParam = paketParam.toLowerCase().trim();
      let matchedPackage: string | null = null;
      if (PACKAGE_PARAM_MAP[cleanParam]) {
        matchedPackage = PACKAGE_PARAM_MAP[cleanParam].eventType;
        const targetGuests = PACKAGE_PARAM_MAP[cleanParam].defaultGuests;
        setEventType(matchedPackage);
        setGuestCount(targetGuests);
        setDisplayGuestCount(targetGuests);
        setSelectedPackageBadge(matchedPackage);
      } else {
        const found = EVENT_TYPES.find((t) =>
          t.toLowerCase().includes(cleanParam)
        );
        if (found) {
          matchedPackage = found;
          setEventType(found);
          setSelectedPackageBadge(found);
        }
      }

      // Sayfa yenilendiğinde parametrenin sabit kalmaması için adresten ?paket= sorgusunu temizle
      if (typeof window !== 'undefined' && window.history?.replaceState) {
        const cleanUrl = window.location.pathname + (window.location.hash || '');
        window.history.replaceState(null, '', cleanUrl);
      }
    }

    // Hash veya paket parametresiyle gelindiğinde forma kusursuz odaklanma & smooth scroll
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#concierge-booking-form' || paketParam) {
        const timer = setTimeout(() => {
          const formEl = document.getElementById('concierge-booking-form');
          if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [paketParam]);


  // Interactive UI States
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => {
    const today = new Date();
    today.setDate(1);
    return today;
  });

  // Validation States
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Refs
  const selectRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsSelectOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsSelectOpen(false);
        setIsCalendarOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Validation Functions
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'fullName':
        if (!value || value.trim().length < 3) {
          return 'Lütfen adınızı ve soyadınızı belirtin.';
        }
        if (!value.trim().includes(' ')) {
          return 'Lütfen adınızla birlikte soyadınızı da yazın.';
        }
        return '';
      case 'phone': {
        const digits = (value || '').replace(/\D/g, '');
        if (!digits) {
          return 'Telefon numarası randevu planlaması için zorunludur.';
        }
        if (digits.length < 11 || !digits.startsWith('05')) {
          return 'Geçerli bir cep telefonu girin (Örn: 0532 000 00 00).';
        }
        return '';
      }
      case 'email':
        if (value && value.trim().length > 0) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return 'Lütfen geçerli bir e-posta adresi yazın veya boş bırakın.';
          }
        }
        return '';
      case 'eventDate':
        if (!value) {
          return 'Lütfen organizasyonunuz için tahmini bir tarih seçin.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string, value: any) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTurkishPhone(e.target.value);
    setPhone(formatted);
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField('phone', formatted) }));
    }
  };

  // Step 1 Validation & Proceed
  const handleProceedToStep2 = () => {
    const errName = validateField('fullName', fullName);
    const errPhone = validateField('phone', phone);
    const errEmail = validateField('email', email);

    setTouched((prev) => ({ ...prev, fullName: true, phone: true, email: true }));
    setErrors((prev) => ({ ...prev, fullName: errName, phone: errPhone, email: errEmail }));

    if (!errName && !errPhone && !errEmail) {
      setCurrentStep(2);
    }
  };

  // Step 2 Validation & Proceed
  const handleProceedToStep3 = () => {
    const errDate = validateField('eventDate', selectedDate);
    setTouched((prev) => ({ ...prev, eventDate: true }));
    setErrors((prev) => ({ ...prev, eventDate: errDate }));

    if (!errDate) {
      setCurrentStep(3);
    }
  };

  // Calendar Day Computation
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    if (prev >= thisMonth) {
      setCalendarMonth(prev);
    }
  };

  const handleNextMonth = () => {
    setCalendarMonth(new Date(year, month + 1, 1));
  };

  const isPrevMonthDisabled = () => {
    const prev = new Date(year, month - 1, 1);
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return prev < thisMonth;
  };

  const handleSelectDate = (dayNum: number) => {
    const picked = new Date(year, month, dayNum);
    setSelectedDate(picked);
    setIsCalendarOpen(false);
    setTouched((prev) => ({ ...prev, eventDate: true }));
    setErrors((prev) => ({ ...prev, eventDate: '' }));
  };

  // Final Submit Handler: API rotasına istek atar ve e-posta tetikler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          eventType,
          selectedDate: selectedDate ? selectedDate.toISOString() : null,
          formattedDate: selectedDate ? formatDisplayDate(selectedDate) : 'Tarih seçilmedi',
          timeSlot,
          guestCount,
          notes,
          _hp_website: hpWebsite,
          _form_loaded_at: formLoadedAtRef.current,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setSelectedPackageBadge(null);
      } else {
        const errorData = await res.json().catch(() => null);
        const errorMsg =
          errorData?.message ||
          errorData?.error ||
          'Talebiniz iletilemedi. Lütfen doğrudan 0 (312) 623 00 00 numaramızdan bizi arayınız veya WhatsApp üzerinden iletiniz.';
        setSubmitError(errorMsg);
      }
    } catch (err) {
      console.error('Randevu formu iletilirken hata:', err);
      setSubmitError(
        'Bağlantı hatası nedeniyle talebiniz iletilemedi. Lütfen doğrudan 0 (312) 623 00 00 numaramızdan bizi arayınız.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset Form
  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setEventType(EVENT_TYPES[0]);
    setSelectedPackageBadge(null);
    setSelectedDate(null);
    setTimeSlot('aksam');
    setGuestCount(600);
    setDisplayGuestCount(600);
    setIsSliderAnimated(true);
    setNotes('');
    setHpWebsite('');
    formLoadedAtRef.current = Date.now();
    setTouched({});
    setErrors({});
    setCurrentStep(1);
    setIsSuccess(false);
    setSubmitError(null);

    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, '', cleanUrl);
    }
  };

  // Formatlı Seans ve Tarih Metinleri
  const timeSlotLabel =
    timeSlot === 'aksam' ? 'Akşam Seansı (19:00 – 23:00)' : 'Gündüz Seansı (12:00 – 16:00)';
  const formattedDateStr = selectedDate ? formatDisplayDate(selectedDate) : 'Tarih seçilmedi';

  // WhatsApp Message Text
  const whatsappText = encodeURIComponent(
    `Merhaba Köşk Düğün Salonu Yetkilisi,\n\nBen ${fullName}.\n` +
    `Organizasyon Türü: ${eventType}\n` +
    `Tahmini Tarih: ${formattedDateStr}\n` +
    `Zaman Dilimi: ${timeSlotLabel}\n` +
    `Davetli Sayısı: ${guestCount} Kişi\n` +
    `Özel İstek / Notlar: ${notes || 'Belirtilmedi'}\n\n` +
    `Web siteniz üzerinden keşif randevusu ve salon teklifi almak istiyorum.`
  );

  // SUCCESS STATE (On-Page Receipt Card)
  if (isSuccess) {
    return (
      <div className={styles.successCard} id="booking-receipt-card">
        <div className={styles.successIconWrapper}>
          <CheckCircle2 size={32} strokeWidth={2.2} />
        </div>

        <div className={styles.formEyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Talep Kaydı Alındı</span>
        </div>
        <h2 className={styles.successTitle}>Keşif & Teklif Talebiniz İletildi</h2>
        <p className={styles.successSubtitle}>
          Sayın <strong>{fullName}</strong>, organizasyon danışmanımız müsaitlik takvimini inceleyip{' '}
          <strong>{phone}</strong> numaranızdan sizinle iletişime geçecektir.
        </p>

        {/* Receipt Box */}
        <div className={styles.receiptBox}>
          <div className={styles.receiptTitle}>Kayıt Özeti</div>
          <div className={styles.receiptGrid}>
            <div>
              <span className={styles.receiptLabel}>Organizasyon Türü</span>
              <span className={styles.receiptValue}>{eventType}</span>
            </div>
            <div>
              <span className={styles.receiptLabel}>Tarih & Seans</span>
              <span className={styles.receiptValue}>
                {formattedDateStr} · {timeSlot === 'aksam' ? 'Akşam (19:00 - 23:00)' : 'Gündüz (12:00 - 16:00)'}
              </span>
            </div>
            <div>
              <span className={styles.receiptLabel}>Davetli Sayısı</span>
              <span className={styles.receiptValue}>{guestCount} Kişi</span>
            </div>
            <div>
              <span className={styles.receiptLabel}>İletişim Numarası</span>
              <span className={styles.receiptValue}>{phone}</span>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/903126230000?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappForwardBtn}
          id="whatsapp-receipt-action-btn"
        >
          <MessageSquare size={17} />
          <span>Bilgilerimi WhatsApp ile İlet</span>
        </a>

        <button
          type="button"
          onClick={handleReset}
          className={styles.resetBtn}
          id="booking-form-reset-btn"
        >
          <RotateCcw size={14} style={{ display: 'inline', marginRight: '6px' }} />
          Yeni Bir Randevu Talebi Oluştur
        </button>
      </div>
    );
  }

  // ACTIVE MULTI-STEP FORM
  return (
    <div className={styles.formContainer} id="concierge-booking-form">
      {/* Header */}
      <header className={styles.formHeader}>
        <div className={styles.formEyebrow}>
          <span className={styles.eyebrowDot} />
          <span>Kişiye Özel Davet Planlaması</span>
        </div>
        <h2 className={styles.formTitle}>Keşif Randevusu & Teklif Formu</h2>
        <p className={styles.formSubtitle}>
          3 adımda salon takvimini sorgulayın ve davetinize özel şeffaf bütçe teklifi alın.
        </p>
        {selectedPackageBadge && (
          <div className={styles.selectedPackageAlert}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--color-champagne, #B8956E)' }} />
              <span>
                Seçilen Paket: <strong>{selectedPackageBadge}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedPackageBadge(null)}
              className={styles.dismissBadgeBtn}
              aria-label="Paket bildirimini kapat"
              title="Kapat"
            >
              <X size={13} />
            </button>
          </div>
        )}
      </header>

      {/* Spam Bot Tuzağı (Honeypot) - İnsanlar görmez, botlar doldurur */}
      <div className={styles.hpField} aria-hidden="true">
        <label htmlFor="field-hp-website">Lütfen bu alanı boş bırakın</label>
        <input
          type="text"
          id="field-hp-website"
          name="_hp_website"
          value={hpWebsite}
          onChange={(e) => setHpWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* 3-Step Progress Bar */}
      <div className={styles.progressBarWrapper}>
        <div className={styles.stepsList}>
          {/* Step 1 */}
          <div className={styles.stepItem}>
            <div
              className={`${styles.stepBadge} ${currentStep === 1
                  ? styles.stepBadgeActive
                  : currentStep > 1
                    ? styles.stepBadgeCompleted
                    : ''
                }`}
            >
              {currentStep > 1 ? <Check size={16} strokeWidth={2.5} /> : '1'}
            </div>
            <div className={styles.stepTextWrapper}>
              <span className={styles.stepNumberLabel}>1. Adım</span>
              <span className={`${styles.stepTitle} ${currentStep === 1 ? styles.stepTitleActive : ''}`}>
                İletişim
              </span>
            </div>
          </div>

          {/* Connector 1-2 */}
          <div className={styles.stepConnector}>
            <div
              className={styles.stepConnectorFill}
              style={{ width: currentStep > 1 ? '100%' : '0%' }}
            />
          </div>

          {/* Step 2 */}
          <div className={styles.stepItem}>
            <div
              className={`${styles.stepBadge} ${currentStep === 2
                  ? styles.stepBadgeActive
                  : currentStep > 2
                    ? styles.stepBadgeCompleted
                    : ''
                }`}
            >
              {currentStep > 2 ? <Check size={16} strokeWidth={2.5} /> : '2'}
            </div>
            <div className={styles.stepTextWrapper}>
              <span className={styles.stepNumberLabel}>2. Adım</span>
              <span className={`${styles.stepTitle} ${currentStep === 2 ? styles.stepTitleActive : ''}`}>
                Davet Detayları
              </span>
            </div>
          </div>

          {/* Connector 2-3 */}
          <div className={styles.stepConnector}>
            <div
              className={styles.stepConnectorFill}
              style={{ width: currentStep === 3 ? '100%' : '0%' }}
            />
          </div>

          {/* Step 3 */}
          <div className={styles.stepItem}>
            <div
              className={`${styles.stepBadge} ${currentStep === 3 ? styles.stepBadgeActive : ''
                }`}
            >
              3
            </div>
            <div className={styles.stepTextWrapper}>
              <span className={styles.stepNumberLabel}>3. Adım</span>
              <span className={`${styles.stepTitle} ${currentStep === 3 ? styles.stepTitleActive : ''}`}>
                Notlar & Onay
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 1: İletişim Bilgileri */}
      {currentStep === 1 && (
        <div className={styles.stepContent} key="step-1">
          <div className={styles.stepBody}>
            <div className={styles.fieldGridDouble}>
              {/* Ad Soyad */}
              <div className={styles.fieldGroup}>
                <label htmlFor="field-fullName" className={styles.fieldLabel}>
                  <span>
                    Adınız ve Soyadınız <span className={styles.reqStar}>*</span>
                  </span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="field-fullName"
                    name="fullName"
                    className={`${styles.textInput} ${touched.fullName && errors.fullName
                        ? styles.inputError
                        : touched.fullName && !errors.fullName && fullName
                          ? styles.inputValid
                          : ''
                      }`}
                    placeholder="Örn: Selin Yılmaz"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (touched.fullName) {
                        setErrors((prev) => ({
                          ...prev,
                          fullName: validateField('fullName', e.target.value),
                        }));
                      }
                    }}
                    onBlur={() => handleBlur('fullName', fullName)}
                    autoComplete="name"
                  />
                  {touched.fullName && !errors.fullName && fullName && (
                    <span className={styles.inputIconRight} style={{ color: '#2E7D4F' }}>
                      <Check size={18} />
                    </span>
                  )}
                </div>
                {touched.fullName && errors.fullName && (
                  <div className={styles.errorMessage} role="alert">
                    <AlertCircle size={13} />
                    <span>{errors.fullName}</span>
                  </div>
                )}
              </div>

              {/* Telefon */}
              <div className={styles.fieldGroup}>
                <label htmlFor="field-phone" className={styles.fieldLabel}>
                  <span>
                    Telefon Numaranız <span className={styles.reqStar}>*</span>
                  </span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="tel"
                    id="field-phone"
                    name="phone"
                    className={`${styles.textInput} ${touched.phone && errors.phone
                        ? styles.inputError
                        : touched.phone && !errors.phone && phone
                          ? styles.inputValid
                          : ''
                      }`}
                    placeholder="0532 000 00 00"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur('phone', phone)}
                    autoComplete="tel"
                  />
                  {touched.phone && !errors.phone && phone && (
                    <span className={styles.inputIconRight} style={{ color: '#2E7D4F' }}>
                      <Check size={18} />
                    </span>
                  )}
                </div>
                {touched.phone && errors.phone && (
                  <div className={styles.errorMessage} role="alert">
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* E-posta (Opsiyonel) */}
            <div className={styles.fieldGroup}>
              <label htmlFor="field-email" className={styles.fieldLabel}>
                <span>E-posta Adresiniz (Opsiyonel)</span>
                <span style={{ fontSize: '0.74rem', color: 'var(--color-cashmere)', fontWeight: 400 }}>
                  Yazılı teklif dosyası için
                </span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="field-email"
                  name="email"
                  className={`${styles.textInput} ${touched.email && errors.email
                      ? styles.inputError
                      : touched.email && !errors.email && email
                        ? styles.inputValid
                        : ''
                    }`}
                  placeholder="ornek@eposta.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) {
                      setErrors((prev) => ({
                        ...prev,
                        email: validateField('email', e.target.value),
                      }));
                    }
                  }}
                  onBlur={() => handleBlur('email', email)}
                  autoComplete="email"
                />
                {touched.email && !errors.email && email && (
                  <span className={styles.inputIconRight} style={{ color: '#2E7D4F' }}>
                    <Check size={18} />
                  </span>
                )}
              </div>
              {touched.email && errors.email && (
                <div className={styles.errorMessage} role="alert">
                  <AlertCircle size={13} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Step 1 Actions */}
          <div className={styles.stepActions}>
            <button
              type="button"
              className={styles.btnNext}
              onClick={handleProceedToStep2}
              id="step-1-next-btn"
            >
              <span>Davet Detaylarına İlerle</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Davet Detayları */}
      {currentStep === 2 && (
        <div className={styles.stepContent} key="step-2">
          <div className={styles.stepBody}>
            <div className={styles.fieldGridDouble}>
              {/* Organizasyon Türü (Custom Dropdown) */}
              <div className={styles.fieldGroup} ref={selectRef}>
                <label htmlFor="field-eventType" className={styles.fieldLabel}>
                  <span>
                    Organizasyon Türü <span className={styles.reqStar}>*</span>
                  </span>
                </label>
                <div className={styles.customSelectWrapper}>
                  <button
                    type="button"
                    id="field-eventType"
                    className={`${styles.selectTrigger} ${isSelectOpen ? styles.selectTriggerOpen : ''
                      }`}
                    onClick={() => {
                      setIsSelectOpen(!isSelectOpen);
                      setIsCalendarOpen(false);
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={isSelectOpen}
                  >
                    <span>{eventType}</span>
                    <ChevronDown size={18} className={styles.selectChevron} />
                  </button>

                  {isSelectOpen && (
                    <div className={styles.dropdownMenu} role="listbox">
                      {EVENT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          role="option"
                          aria-selected={eventType === type}
                          className={`${styles.dropdownOption} ${eventType === type ? styles.dropdownOptionSelected : ''
                            }`}
                          onClick={() => {
                            setEventType(type);
                            setSelectedPackageBadge(null);
                            setIsSelectOpen(false);
                          }}
                        >
                          <span>{type}</span>
                          {eventType === type && (
                            <Check size={15} style={{ color: 'var(--color-champagne)' }} />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tahmini Tarih (Bespoke Date Picker) */}
              <div className={styles.fieldGroup} ref={calendarRef}>
                <label htmlFor="field-eventDate" className={styles.fieldLabel}>
                  <span>
                    Tahmini Tarih <span className={styles.reqStar}>*</span>
                  </span>
                </label>
                <div className={styles.datePickerWrapper}>
                  <button
                    type="button"
                    id="field-eventDate"
                    className={`${styles.dateTrigger} ${isCalendarOpen ? styles.dateTriggerOpen : ''
                      } ${touched.eventDate && errors.eventDate ? styles.inputError : ''}`}
                    onClick={() => {
                      setIsCalendarOpen(!isCalendarOpen);
                      setIsSelectOpen(false);
                    }}
                    aria-haspopup="dialog"
                    aria-expanded={isCalendarOpen}
                  >
                    <span style={{ color: selectedDate ? 'var(--color-anthracite)' : '#AAA49F' }}>
                      {selectedDate ? formatDisplayDate(selectedDate) : 'Tarih seçmek için tıklayın'}
                    </span>
                    <CalendarIcon size={18} className={styles.dateIcon} />
                  </button>

                  {touched.eventDate && errors.eventDate && (
                    <div className={styles.errorMessage} role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.eventDate}</span>
                    </div>
                  )}

                  {/* Calendar Popover */}
                  {isCalendarOpen && (
                    <div className={styles.calendarPopover} role="dialog" aria-modal="false">
                      <div className={styles.calendarHeader}>
                        <button
                          type="button"
                          className={styles.calendarNavBtn}
                          onClick={handlePrevMonth}
                          disabled={isPrevMonthDisabled()}
                          aria-label="Önceki ay"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <span className={styles.calendarMonthTitle}>
                          {TURKISH_MONTHS[month]} {year}
                        </span>
                        <button
                          type="button"
                          className={styles.calendarNavBtn}
                          onClick={handleNextMonth}
                          aria-label="Sonraki ay"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>

                      <div className={styles.calendarWeekdays}>
                        {TURKISH_WEEKDAYS.map((wd) => (
                          <span key={wd} className={styles.weekdayLabel}>
                            {wd}
                          </span>
                        ))}
                      </div>

                      <div className={styles.calendarGrid}>
                        {Array.from({ length: startOffset }).map((_, i) => (
                          <div
                            key={`empty-${i}`}
                            className={styles.calendarDay}
                            style={{ pointerEvents: 'none' }}
                          />
                        ))}

                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const dayNum = i + 1;
                          const dateObj = new Date(year, month, dayNum);
                          const isPast = dateObj < today;
                          const isToday =
                            dateObj.getDate() === today.getDate() &&
                            dateObj.getMonth() === today.getMonth() &&
                            dateObj.getFullYear() === today.getFullYear();
                          const isSelected =
                            selectedDate !== null &&
                            dateObj.getDate() === selectedDate.getDate() &&
                            dateObj.getMonth() === selectedDate.getMonth() &&
                            dateObj.getFullYear() === selectedDate.getFullYear();

                          const dayOfWeek = dateObj.getDay();
                          const isWeekend = dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6;

                          return (
                            <button
                              key={`day-${dayNum}`}
                              type="button"
                              disabled={isPast}
                              className={`${styles.calendarDay} ${isPast ? styles.dayDisabled : ''
                                } ${isToday ? styles.dayToday : ''} ${isSelected ? styles.daySelected : ''
                                } ${isWeekend ? styles.dayWeekend : ''}`}
                              onClick={() => handleSelectDate(dayNum)}
                            >
                              <span>{dayNum}</span>
                              {isWeekend && !isPast && (
                                <span className={styles.dayWeekendIndicator} />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className={styles.calendarFooter}>
                        <span>Noktalı günler: Hafta sonu</span>
                        <span>Geçmiş tarihler kapalı</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Davet Seansı Seçici (Kompakt ve Sade) */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                <span>
                  Davet Seansı <span className={styles.reqStar}>*</span>
                </span>
              </label>

              <div className={styles.segmentedControl}>
                <button
                  type="button"
                  id="time-slot-gunduz"
                  className={`${styles.segmentBtn} ${
                    timeSlot === 'gunduz' ? styles.segmentBtnActive : ''
                  }`}
                  onClick={() => setTimeSlot('gunduz')}
                >
                  <Sun size={16} className={styles.segmentIconSun} />
                  <span>Gündüz (12:00 – 16:00)</span>
                </button>

                <button
                  type="button"
                  id="time-slot-aksam"
                  className={`${styles.segmentBtn} ${
                    timeSlot === 'aksam' ? styles.segmentBtnActive : ''
                  }`}
                  onClick={() => setTimeSlot('aksam')}
                >
                  <Moon size={16} className={styles.segmentIconMoon} />
                  <span>Akşam (19:00 – 23:00)</span>
                </button>
              </div>
            </div>

            {/* Davetli Sayısı Seçici (Kompakt, Sade & Lüks) */}
            <div className={styles.fieldGroup}>
              <div className={styles.sliderCompactCard}>
                <div className={styles.guestCountHeader}>
                  <label className={styles.fieldLabelNoMargin} htmlFor="field-guestCount">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Users size={16} style={{ color: 'var(--color-champagne)' }} />
                      <span>Tahmini Davetli Sayısı</span>
                    </span>
                  </label>

                  {/* Kompakt Hızlı Stepper & Değer Göstergesi */}
                  <div className={styles.guestStepper}>
                    <button
                      type="button"
                      className={styles.stepperBtn}
                      onClick={() => animateToGuestCount(guestCount - 25)}
                      aria-label="25 kişi azalt"
                      title="25 kişi azalt"
                    >
                      −
                    </button>
                    <div className={styles.stepperValue}>
                      <strong>{displayGuestCount}</strong>
                      <span>Kişi</span>
                    </div>
                    <button
                      type="button"
                      className={styles.stepperBtn}
                      onClick={() => animateToGuestCount(guestCount + 25)}
                      aria-label="25 kişi artır"
                      title="25 kişi artır"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Range Slider Track & Animasyonlu Çubuk / Başlık */}
                <div
                  className={`${styles.sliderTrackWrapper} ${
                    isSliderAnimated ? styles.sliderAnimated : ''
                  }`}
                >
                  <div className={styles.sliderTrackBg}>
                    <div
                      className={styles.rangeFillBar}
                      style={{
                        width: `${((guestCount - 100) / 900) * 100}%`,
                      }}
                    />
                    <div
                      className={styles.sliderCustomThumb}
                      style={{
                        left: `${((guestCount - 100) / 900) * 100}%`,
                      }}
                    />
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={1000}
                    step={25}
                    value={guestCount}
                    onPointerDown={() => setIsSliderAnimated(false)}
                    onTouchStart={() => setIsSliderAnimated(false)}
                    onMouseDown={() => setIsSliderAnimated(false)}
                    onChange={(e) => handleRangeInput(Number(e.target.value))}
                    className={styles.rangeInputInvisible}
                    id="field-guestCount"
                    aria-label="Tahmini davetli sayısı seçici"
                  />
                </div>

                {/* Tek Satır Kompakt Hızlı Seçim Butonları (Akışkan Geçişli) */}
                <div className={styles.guestPresetRow}>
                  {[
                    { count: 300, label: '300 Kişi' },
                    { count: 500, label: '500 Kişi' },
                    { count: 800, label: '800 Kişi' },
                    { count: 1000, label: '1.000 Kişi' },
                  ].map((preset) => (
                    <button
                      key={preset.count}
                      type="button"
                      className={`${styles.guestPresetBtn} ${
                        guestCount === preset.count ? styles.guestPresetBtnActive : ''
                      }`}
                      onClick={() => animateToGuestCount(preset.count)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 Actions */}
          <div className={styles.stepActions}>
            <button
              type="button"
              className={styles.btnBack}
              onClick={() => setCurrentStep(1)}
              id="step-2-back-btn"
            >
              <ChevronLeft size={16} />
              <span>Geri Dön</span>
            </button>
            <button
              type="button"
              className={styles.btnNext}
              onClick={handleProceedToStep3}
              id="step-2-next-btn"
            >
              <span>Notlar & Onaya İlerle</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Notlar & Onay */}
      {currentStep === 3 && (
        <form onSubmit={handleSubmit} className={styles.stepContent} key="step-3">
          <div className={styles.stepBody}>
            {/* Özel İstekler Textarea */}
            <div className={styles.fieldGroup}>
              <label htmlFor="field-notes" className={styles.fieldLabel}>
                <span>Özel İstekleriniz ve Notlarınız (Opsiyonel)</span>
              </label>
              <div className={styles.textareaWrapper}>
                <textarea
                  id="field-notes"
                  name="notes"
                  className={styles.autoTextarea}
                  placeholder="Yemek menüsü tercihi, müzik/orkestra beklentisi veya sormak istediğiniz diğer detaylar..."
                  value={notes}
                  maxLength={500}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <span className={styles.textareaCounter}>{notes.length} / 500</span>
              </div>
            </div>

            {/* Özet Önizleme Kartı */}
            <div className={styles.stepPreviewCard}>
              <div className={styles.previewTitle}>Talep Özeti</div>
              <div className={styles.previewGrid}>
                <div className={styles.previewItem}>
                  <span className={styles.previewLabel}>İsim & Telefon</span>
                  <span className={styles.previewValue}>
                    {fullName} ({phone})
                  </span>
                </div>
                <div className={styles.previewItem}>
                  <span className={styles.previewLabel}>Organizasyon & Kapasite</span>
                  <span className={styles.previewValue}>
                    {eventType} · {guestCount} Kişi
                  </span>
                </div>
                <div className={styles.previewItem} style={{ gridColumn: 'span 2' }}>
                  <span className={styles.previewLabel}>Seçilen Tarih & Seans</span>
                  <span className={styles.previewValue}>
                    {formattedDateStr} · {timeSlot === 'aksam' ? '🌙 Akşam Seansı (19:00 – 23:00)' : '☀️ Gündüz Seansı (12:00 – 16:00)'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hata Durumu Bildirimi */}
          {submitError && (
            <div className={styles.submitErrorAlert} role="alert" id="booking-submit-error">
              <AlertCircle size={20} className={styles.submitErrorIcon} />
              <div className={styles.submitErrorText}>
                <strong>Talep Gönderilemedi:</strong> {submitError}
              </div>
            </div>
          )}

          {/* Step 3 Actions */}
          <div className={styles.stepActions}>
            <button
              type="button"
              className={styles.btnBack}
              onClick={() => setCurrentStep(2)}
              id="step-3-back-btn"
            >
              <ChevronLeft size={16} />
              <span>Geri Dön</span>
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
              id="concierge-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <span className={styles.btnSpinner} />
                  <span>Talebiniz Kaydediliyor...</span>
                </>
              ) : (
                <>
                  <span>Keşif Randevusu & Teklif Talebini İletin</span>
                  <Check size={18} />
                </>
              )}
            </button>
          </div>

          <p
            style={{
              fontSize: '0.74rem',
              color: 'var(--color-cashmere)',
              textAlign: 'center',
              marginTop: '0.85rem',
              lineHeight: 1.45,
            }}
          >
            <ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
            Bilgileriniz yalnızca Köşk Düğün Salonu tarafından randevu planlaması amacıyla kullanılır.
          </p>
        </form>
      )}
    </div>
  );
}
