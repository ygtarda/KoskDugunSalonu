<?php 
    $page_title = "Galeri"; 
    include 'includes/header.php'; 
?>

<!-- ============ SAYFA BAŞLIĞI BÖLÜMÜ ============ -->
<section class="page-header" style="background-image: url('assets/images/gallery-bg.jpg');">
    <div class="container">
        <h1><?php echo $page_title; ?></h1>
        <p>Mutluluğa tanıklık eden her köşemizi keşfedin.</p>
    </div>
</section>

<!-- ============ GALERİ BÖLÜMÜ ============ -->
<section class="content-section">
    <div class="container">
        <div class="gallery-grid-full">
            
            <!-- Resim 1 -->
            <a href="assets/images/gallery/full/1.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Salon Genel Görünüm">
                <img src="assets/images/gallery/thumb/1.jpg" alt="Salon Genel Görünüm">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>

            <!-- Resim 2 -->
            <a href="assets/images/gallery/full/2.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Gelin-Damat Masası">
                <img src="assets/images/gallery/thumb/2.jpg" alt="Gelin-Damat Masası">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>

            <!-- Resim 3 -->
            <a href="assets/images/gallery/full/3.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Masa Düzeni ve Süslemeler">
                <img src="assets/images/gallery/thumb/3.jpg" alt="Masa Düzeni ve Süslemeler">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>
            
            <!-- Resim 4 -->
            <a href="assets/images/gallery/full/4.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Dans Pisti ve Işıklandırma">
                <img src="assets/images/gallery/thumb/4.jpg" alt="Dans Pisti ve Işıklandırma">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>
            
            <!-- Resim 5 -->
            <a href="assets/images/gallery/full/5.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Giriş ve Karşılama Alanı">
                <img src="assets/images/gallery/thumb/5.jpg" alt="Giriş ve Karşılama Alanı">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>
            
            <!-- Resim 6 -->
            <a href="assets/images/gallery/full/6.jpg" class="gallery-item-full" data-lightbox="wedding-gallery" data-title="Dış Mekan Görünümü (varsa)">
                <img src="assets/images/gallery/thumb/6.jpg" alt="Dış Mekan Görünümü">
                <div class="overlay-gallery"><i class="fas fa-search-plus"></i></div>
            </a>

            <!-- İstediğiniz kadar resmi bu şekilde ekleyebilirsiniz -->

        </div>
    </div>
</section>

<?php 
    include 'includes/footer.php'; 
?>