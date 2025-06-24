<?php
$page_title = "İletişim";
$message_status = ""; // Bu değişken, form gönderiminin durumunu tutar (başarılı/hatalı)

// Sayfaya form gönderilerek mi gelindiğini kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Formdan gelen verileri al ve güvenlik için temizle
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $guest_count = strip_tags(trim($_POST["guest_count"]));
    $event_date = strip_tags(trim($_POST["event_date"]));
    $message = strip_tags(trim($_POST["message"]));

    // 2. Zorunlu alanlar dolu mu ve e-posta adresi geçerli mi diye kontrol et
    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        
        // =======================================================================
        // === BURASI SİZE E-POSTA GÖNDERECEK OLAN ÖNEMLİ KISIM ===
        // =======================================================================

        // Kime Gidecek? (Buraya formların gelmesini istediğin e-posta adresini yazdım)
        $to = "ardayig123@gmail.com"; 
        
        // E-postanın Konusu
        $subject = "Köşk Düğün Salonu - Yeni Teklif Talebi (" . $name . ")";
        
        // E-postanın İçeriği (Formdaki tüm bilgileri içerir)
        $body = "Bir müşteri web siteniz üzerinden teklif formu doldurdu:\n\n";
        $body .= "Adı Soyadı: " . $name . "\n";
        $body .= "E-posta Adresi: " . $email . "\n";
        $body .= "Telefon Numarası: " . $phone . "\n";
        $body .= "Tahmini Davetli Sayısı: " . $guest_count . "\n";
        $body .= "Planlanan Tarih: " . $event_date . "\n\n";
        $body .= "Mesajı:\n" . $message;
        
        // E-posta Başlık Bilgileri (Gönderen adresi ve yanıtlanacak adres)
        $headers = "From: noreply@koskdugunsalonu.com" . "\r\n"; // Sunucunuzun alan adıyla eşleşen bir adres
        $headers .= "Reply-To: " . $email; // "Yanıtla" dediğinizde müşteriye gider

        // PHP'nin mail() fonksiyonu ile e-postayı GÖNDER!
        // Bu komut, canlı sunucuya (hosting) yüklediğinizde çalışacaktır.
        mail($to, $subject, $body, $headers); 

        // İşlem başarılı olduğu için, ekranda başarı mesajı gösterilecek.
        $message_status = "success"; 

    } else {
        // Gerekli alanlar doldurulmamışsa, ekranda hata mesajı gösterilecek.
        $message_status = "error";
    }
}
// Buradan sonrası, yani HTML kısmı, zaten doğruydu.
include 'includes/header.php';
?>


<!-- ============ SAYFA BAŞLIĞI BÖLÜMÜ ============ -->
<section class="page-header" style="background-image: url('assets/images/contact-bg.jpg');">
    <div class="container">
        <h1>Bize Ulaşın</h1>
        <p>Hayallerinizdeki günü planlamak için ilk adımı atın.</p>
    </div>
</section>

<!-- ============ İLETİŞİM BÖLÜMÜ ============ -->
<section class="content-section">
    <div class="container">
        <div class="contact-layout">
            
            <!-- Sol Taraf: İletişim Formu -->
            <div class="contact-form-wrapper">
                <h2>Teklif Alın</h2>
                <p>Aşağıdaki formu doldurun, en kısa sürede size geri dönelim.</p>

                <?php if ($message_status == "success"): ?>
                    <div class="form-message success">Mesajınız başarıyla gönderildi. Teşekkür ederiz!</div>
                <?php elseif ($message_status == "error"): ?>
                    <div class="form-message error">Form gönderilirken bir hata oluştu. Lütfen gerekli alanları doldurduğunuzdan emin olun.</div>
                <?php endif; ?>

                <form id="contact-form" action="iletisim.php" method="POST">
                    <div class="form-group">
                        <label for="name">Adınız Soyadınız*</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group-grid">
                        <div class="form-group">
                            <label for="email">E-posta Adresiniz*</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Telefon Numaranız</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                    </div>
                    <div class="form-group-grid">
                         <div class="form-group">
                            <label for="guest_count">Tahmini Davetli Sayısı</label>
                            <input type="number" id="guest_count" name="guest_count" min="50">
                        </div>
                        <div class="form-group">
                            <label for="event_date">Planlanan Tarih</label>
                            <input type="date" id="event_date" name="event_date">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="message">Mesajınız*</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Gönder</button>
                    </div>
                </form>
            </div>

            <!-- Sağ Taraf: Bilgiler ve Harita -->
            <div class="contact-info-wrapper">
                <h3>İletişim Bilgilerimiz</h3>
                <div class="contact-info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <strong>Adres:</strong><br>
                        Gülveren, Kutluhan Sk. 2/2, 06960 Polatlı/Ankara
                    </div>
                </div>
                <div class="contact-info-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <strong>Telefon:</strong><br>
                        <a href="tel:+905382969079">0538 296 90 79</a>
                    </div>
                </div>
                 <div class="contact-info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <strong>E-posta:</strong><br>
                        <a href="mailto:ardayig123@gmail.com">ardayig123@gmail.com</a>
                    </div>
                </div>
                
                <h3>Haritadaki Yerimiz</h3>
                <div class="map-wrapper">
                    <!-- Google Haritalar'dan alınan GÖMME (EMBED) KODU -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12301.644102109547!2d32.111253087158204!3d39.572886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d25b6d43c8ab41%3A0xc894c19fb45eed2c!2zUG9sYXRsxLEgS8O2xZ9rIGTDvMSfw7xuIHNhbG9udQ!5e0!3m2!1str!2str!4v1749251235452!5m2!1str!2str" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>