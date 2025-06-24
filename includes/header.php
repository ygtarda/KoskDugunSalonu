<?php
$page_title = isset($page_title) ? $page_title : "Köşk Düğün Salonu";
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($page_title); ?> - Unutulmaz Anlar</title>
    <!-- Yeni Dinamik Hali -->
    <?php $meta_desc = isset($page_description) ? $page_description : "Hayallerinizdeki düğün, nişan ve özel organizasyonlar için Köşk Düğün Salonu'nun eşsiz atmosferini ve profesyonel hizmetlerini keşfedin."; ?>
    <meta name="description" content="<?php echo htmlspecialchars($meta_desc); ?>">

    <link rel="icon" type="image/png" href="favicon.png">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<header class="main-header">
<div class="container">
    <a href="index.php" class="logo">Köşk Düğün Salonu</a>
    
    <!-- YENİ BÖLÜM BURADA BAŞLIYOR -->
    <div class="header-right-panel">
        <!-- Normal Navigasyon Menüsü -->
        <nav class="main-nav" aria-label="Ana Navigasyon">
            <ul>
                <li><a href="index.php">Ana Sayfa</a></li>
                <li><a href="hakkimizda.php">Hakkımızda</a></li>
                <li><a href="galeri.php">Galeri</a></li>
                <li><a href="hizmetler.php">Hizmetlerimiz</a></li>
                <li><a href="iletisim.php">İletişim</a></li>
            </ul>
        </nav>

        <a href="tel:+905382969079" class="header-phone-button">
            <i class="fas fa-phone-alt"></i>
            <span>0538 296 90 79</span>
        </a>

    </div>
    
    <!-- Hamburger Menü İkonu (HTML yapısı aynı kalıyor) -->
    <button id="hamburger-button" class="hamburger-icon" aria-label="Menüyü Aç">
        <i class="fas fa-bars"></i>
    </button>
</div>
</header>

<!-- JAVASCRIPT BU ID'LERİ ARIYOR -->
<div id="mobile-menu-panel" class="mobile-menu">
    <button id="close-button" class="close-icon">×</button>
    <nav>
        <ul>
            <li><a href="index.php">Ana Sayfa</a></li>
            <li><a href="hakkimizda.php">Hakkımızda</a></li>
            <li><a href="galeri.php">Galeri</a></li>
            <li><a href="hizmetler.php">Hizmetlerimiz</a></li>
            <li><a href="iletisim.php">İletişim</a></li>
        </ul>
    </nav>
</div>
<div id="page-overlay" class="overlay"></div>