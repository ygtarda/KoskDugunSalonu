export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  category: 'Düğün' | 'Kına' | 'Nişan' | 'Sünnet' | 'Kurumsal';
  initials: string;
  avatarBg: string;
}

export const GOOGLE_BUSINESS_URL = 'https://share.google/Ut9Fd72yIZ5c9Tg4P';

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ayşenur & Emre Kılıç',
    date: '3 hafta önce',
    rating: 5,
    category: 'Düğün',
    initials: 'AK',
    avatarBg: '#8A5D3B',
    text: '1.000 kişilik düğünümüzde en ufak bir sıkışıklık veya görüş engeli yaşanmadı. Kolonsuz ferah mimari sayesinde her misafirimiz sahneyi rahatlıkla izledi. Havalandırma ve iklimlendirme salon doluyken bile harika çalıştı. Tüm ekibe teşekkür ederiz.',
  },
  {
    id: 'rev-2',
    author: 'Mehmet Ali Bozkurt',
    date: '1 ay önce',
    rating: 5,
    category: 'Sünnet',
    initials: 'MB',
    avatarBg: '#3B6B8A',
    text: 'Oğlumuzun sünnet düğününü Köşk Düğün Salonu’nda yaptık. Geniş otopark alanı sayesinde uzaktan gelen misafirlerimiz hiç park sorunu yaşamadı. Personel son derece saygılı ve organizeydi, servis aksamadı.',
  },
  {
    id: 'rev-3',
    author: 'Büşra & Caner Tekin',
    date: '2 ay önce',
    rating: 5,
    category: 'Kına',
    initials: 'BT',
    avatarBg: '#8A3B65',
    text: 'Kına gecem ve düğünüm burada gerçekleşti. Gelin hazırlık odası çok konforlu ve genişti. Sahne ışık gösterileri ve ilk dansımızdaki sis bulutu hayal ettiğimizden çok daha etkileyiciydi. Polatlı’da gönül rahatlığıyla tercih edilecek bir mekan.',
  },
  {
    id: 'rev-4',
    author: 'Fatma & Serhat Demir',
    date: '3 ay önce',
    rating: 5,
    category: 'Düğün',
    initials: 'FD',
    avatarBg: '#4A7A4D',
    text: 'Yemekli düğün organizasyonumuzda menü sıcaktı ve tam planlanan saatte masalara dağıtıldı. Masa dekorasyonları, şamdanlar ve akustik ses sistemi harikaydı. Hiçbir uğultu oluşmadı. Çok memnun kaldık.',
  },
  {
    id: 'rev-5',
    author: 'Kemal Güven',
    date: '4 ay önce',
    rating: 5,
    category: 'Nişan',
    initials: 'KG',
    avatarBg: '#7A6B3B',
    text: 'Yüksek tavan ferahlığı ve kolonsuz salon düzeni gerçekten fark yaratıyor. 450 kişilik nişan törenimizde herkes salonun atmosferine hayran kaldı. Polatlı’da tereddütsüz tercih edilecek tek adres.',
  },
  {
    id: 'rev-6',
    author: 'Zeynep & Oğuzhan Yıldız',
    date: '5 ay önce',
    rating: 5,
    category: 'Düğün',
    initials: 'ZY',
    avatarBg: '#5A4A7A',
    text: 'Gündüz seansında nikah ve düğün davetimizi yaptık. Doğal gün ışığı tonları ve profesyonel fotoğraf köşesi harikaydı. İlk görüşmeden organizasyonun son dakikasına kadar her detayla bizzat ilgilendiler.',
  },
  {
    id: 'rev-7',
    author: 'Seda & Burak Şahin',
    date: '6 ay önce',
    rating: 5,
    category: 'Kına',
    initials: 'SŞ',
    avatarBg: '#8A4A62',
    text: 'Kına tahtı ve nedime dans şovları için salonun ortasında açılan geniş alan mükemmeldi. Davetlilerimiz pist çevresinde hiç sıkışmadan tüm eğlenceyi izledi. Işıklandırma ve ses sistemi çok kaliteli.',
  },
  {
    id: 'rev-8',
    author: 'İbrahim Halil Çelik',
    date: '7 ay önce',
    rating: 5,
    category: 'Sünnet',
    initials: 'İÇ',
    avatarBg: '#2A5D7A',
    text: 'Polatlı’da bu büyüklükte ve bu kalitede başka bir mekan yok. Elektrik kesintisine karşı otomatik jeneratörlerinin hazır beklemesi bize büyük güven verdi. Her şey konuştuğumuz gibi uygulandı.',
  },
  {
    id: 'rev-9',
    author: 'Gizem & Tolga Aydın',
    date: '8 ay önce',
    rating: 5,
    category: 'Nişan',
    initials: 'GA',
    avatarBg: '#7A5A3B',
    text: 'Söz ve nişan merasimimiz için Köşk Salonu’nu seçtik. Fotoğraf çekim köşesi, çiçek süslemeleri ve şık masalar konuklarımız tarafından çok beğenildi. Güler yüzlü personele ve organizasyon sorumlusuna teşekkür ederiz.',
  },
  {
    id: 'rev-10',
    author: 'Canan & Mert Yalçın',
    date: '9 ay önce',
    rating: 5,
    category: 'Düğün',
    initials: 'CY',
    avatarBg: '#3F6B55',
    text: '850 kişilik kalabalık bir düğünümüz oldu. En çok endişelendiğimiz konu havalandırma ve servisti ancak klima santralleri gece boyunca salonu serin ve taze tuttu. Garsonlar masalar arasında çok seri ve nazikti.',
  },
  {
    id: 'rev-11',
    author: 'Hatice & Selim Öztürk',
    date: '10 ay önce',
    rating: 5,
    category: 'Kına',
    initials: 'HÖ',
    avatarBg: '#703B52',
    text: 'Kına seremonisi ve DJ müzik performansında ses dengesi son derece başarılıydı; kulakları tırmalamayan, masada sohbete izin veren çok dengeli bir akustik vardı. Emeği geçen herkese sonsuz teşekkürler.',
  },
  {
    id: 'rev-12',
    author: 'Murat Kaya (Polatlı Esnaf Odası)',
    date: '1 yıl önce',
    rating: 5,
    category: 'Kurumsal',
    initials: 'MK',
    avatarBg: '#2C4A6F',
    text: 'Geniş katılımlı yıllık kurumsal genel kurulumuz ve ziyafetimiz için Köşk Düğün Salonu’nu tercih ettik. Dev projeksiyon sistemi, ses akustiği ve protokol düzeni profesyonelce yönetildi. Tebrik ederiz.',
  },
];
