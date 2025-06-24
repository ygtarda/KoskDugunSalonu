<?php 
    include 'includes/header.php'; 
?>

<main>
  <!-- =========== KAHRAMAN BÖLÜMÜ BAŞLANGIÇ =========== -->
<section class="hero-section">
    <div class="hero-content">
        <h1 class="hero-title">Hayallerinizi Gerçeğe Dönüştürün</h1>
        <p class="hero-subtitle">Köşk Düğün Salonu'nda unutulmaz bir başlangıç yapın.</p>
        <a href="galeri.php" class="btn btn-primary">Galeriyi Keşfedin</a>
        <a href="iletisim.php#teklif-formu" class="btn btn-secondary">Teklif Alın</a>
    </div>
</section>
<!-- =========== KAHRAMAN BÖLÜMÜ BİTİŞ =========== -->

    <!-- =========== KISA TANITIM BÖLÜMÜ BAŞLANGIÇ =========== -->
    <section class="intro-section reveal">
        <div class="container">
            <h2>Neden Biz?</h2>
            <p class="section-subtitle">Yılların tecrübesi, profesyonel ekibimiz ve eşsiz atmosferimizle en özel gününüzü taçlandırıyoruz.</p>
            <!-- Buraya daha sonra ikonlu özellikler ekleyeceğiz -->
        </div>
    </section>
    <!-- =========== KISA TANITIM BÖLÜMÜ BİTİŞ =========== -->

<!-- =========== ÖZELLİKLER BÖLÜMÜ BAŞLANGIÇ =========== -->

<section class="features-section reveal">
    <div class="container">
        <div class="feature-item">
            <div class="feature-icon">
                <!-- İkonlar için Font Awesome kullanacağız - Şimdilik geçici metin -->
                <i class="fas fa-users"></i> <!-- Bunu çalışır hale getireceğiz -->
            </div>
            <h3>Geniş Kapasite</h3>
            <p>800 1.000 kişiye kadar yemekli/yemeksiz hizmet verebilme kapasitesi.</p>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-utensils"></i>
            </div>
            <h3>Lezzetli İkramlar Yemekler</h3>
            <p>Sizler ve misafirleriniz için hazırlanmış lezzetli ikramlar ve yemekler.</p>
        </div>
        <div class="feature-item">
            <div class="feature-icon">
                <i class="fas fa-parking"></i>
            </div>
            <h3>Ücretsiz Otopark</h3>
            <p>Misafirleriniz için geniş otopark alanı.</p>
        </div>
      
    </div>
</section>
<!-- =========== ÖZELLİKLER BÖLÜMÜ BİTİŞ =========== -->


<!-- =========== ÖNE ÇIKAN KARE BÖLÜMÜ =========== -->
<section class="featured-single-section">
    <div class="container">
        <div class="featured-content">
            <!-- 'reveal' class'ını resmin ve metnin olduğu div'lere taşıdık -->
            <div class="featured-image reveal">
                <img src="assets/images/gallery/featured-main.jpg" alt="Düğün Salonu atmosferi">
            </div>
            <div class="featured-text reveal">
                <h2 class="section-title-dark">Büyüleyici Atmosfer</h2>
                <p>Her köşesi zevkle tasarlanmış, romantizm ve zarafetin buluştuğu salonumuzda, masalsı anlar sizi bekliyor. Daha fazlasını görmek ve bu atmosferi hissetmek için galerimize göz atın.</p>
                <a href="galeri.php" class="btn btn-primary">Galeriyi Keşfet</a>
            </div>
        </div>
    </div>
</section>
<!-- =========== ÖNE ÇIKAN KARE BÖLÜMÜ BİTİŞ=========== -->

<!-- ============================================= -->
<!--       MÜŞTERİ YORUMLARI (YENİ TASARIM)        -->
<!-- ============================================= -->
<section class="testimonials-section-new reveal animate-up">
    <div class="container">
        <div class="section-header">
            <h2>Mutlu Çiftlerimizden</h2>
            <p>Bizimle yaşadıkları deneyimi kendi ağızlarından dinleyin.</p>
        </div>
        
        <div class="testimonials-grid">
            <!-- Yorum Kartı 1 -->
            <div class="testimonial-card-new">
                <div class="testimonial-content">
                    <p>"Her şey hayalimizdeki gibiydi! Yemekler, müzik, organizasyon... Köşk Düğün Salonu ekibine ne kadar teşekkür etsek az. Profesyonellikleri ve güler yüzleri sayesinde hiç stres yaşamadık."</p>
                </div>
                <div class="testimonial-author-new">
                    <span class="author-name">- Ayşe & Murat</span>
                </div>
            </div>

            <!-- Yorum Kartı 2 -->
            <div class="testimonial-card-new">
                <div class="testimonial-content">
                    <p>"Organizasyon başından sonuna kadar kusursuzdu. Misafirlerimiz de biz de salona hayran kaldık. Bize sadece anın tadını çıkarmak kaldı. Gözünüz kapalı güvenebilirsiniz."</p>
                </div>
                <div class="testimonial-author-new">
                    <span class="author-name">- Zeynep & Can</span>
                </div>
            </div>

            <!-- Yorum Kartı 3 (İsteğe bağlı, 2 tane daha şık durabilir) -->
            <div class="testimonial-card-new">
                <div class="testimonial-content">
                    <p>"Bu özel günümüzü daha da özel kıldığınız için minnettarız. Her detayın incelikle düşünüldüğü, muhteşem bir geceydi. Tüm ekibe teşekkürler!"</p>
                </div>
                <div class="testimonial-author-new">
                    <span class="author-name">- Elif & Emre</span>
                </div>
            </div>
        </div>
    </div>
</section>


</main>

<?php 
    include 'includes/footer.php'; 
?>