<?php 
    // Bu sayfanın başlığını (title) belirliyoruz.
    $page_title = "Hakkımızda"; 
    
    // Header'ı çağırıyoruz.
    include 'includes/header.php'; 
?>

<!-- ============ SAYFA BAŞLIĞI BÖLÜMÜ (GENEL) ============ -->
<section class="page-header" style="background-image: url('assets/images/hakkimizda-bg.jpg');">
    <div class="container">
        <h1><?php echo $page_title; ?></h1>
        <p>Hikayemiz ve bizi biz yapan değerler...</p>
    </div>
</section>

<!-- ============ HAKKIMIZDA İÇERİĞİ ============ -->
<section class="content-section">
    <div class="container">
        <div class="about-us-content">
            <div class="about-text">
                <h2>Bir Hayalle Başlayan Yolculuk</h2>
                <p>Köşk Düğün Salonu, hayallerinizdeki "Evet" anına en şık şekilde ev sahipliği yapmak için tasarlandı. Zarafeti modern bir hizmet anlayışıyla birleştirerek, kutlamalarınızı eşsiz kılıyoruz.</p>
                <p>Bizim görevimiz, size sadece o büyülü anın tadını çıkarmayı bırakmak. Profesyonel ekibimiz tüm detaylarla ilgilenirken, siz en mutlu gününüzün kahramanı olursunuz. Unutulmaz bir başlangıç için buradayız.</p>
                <h3>Vizyonumuz & Misyonumuz</h3>
                <p><strong>Vizyonumuz:</strong> Bölgedeki en çok tercih edilen, kalitesi ve misafir memnuniyetiyle örnek gösterilen lider bir marka olmak.</p>
                <p><strong>Misyonumuz:</strong> Her çiftin hayalini, beklentilerinin ötesinde bir hizmet kalitesiyle gerçeğe dönüştürmek ve unutulmaz anılar biriktirmelerine yardımcı olmaktır.</p>
            </div>
            <div class="about-image">
                <img src="assets/images/hakkimizda-profil.jpg" alt="Kurucu veya Salon Detayı">
            </div>
        </div>
    </div>
</section>


<?php 
    // Footer'ı çağırıyoruz.
    include 'includes/footer.php'; 
?>