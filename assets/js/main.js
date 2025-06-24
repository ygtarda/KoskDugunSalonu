document.addEventListener('DOMContentLoaded', function () {
  
    // Yeni ve doğru ID'lere sahip HTML elementlerini seçiyoruz
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const closeButton = document.getElementById('close-button');
    const overlay = document.getElementById('page-overlay');
  
    // Menüyü açan fonksiyon
    function openMobileMenu() {
      if (mobileMenuPanel) mobileMenuPanel.classList.add('is-active');
      if (overlay) overlay.classList.add('is-active');
    }
  
    // Menüyü kapatan fonksiyon
    function closeMobileMenu() {
      if (mobileMenuPanel) mobileMenuPanel.classList.remove('is-active');
      if (overlay) overlay.classList.remove('is-active');
    }
  
    // Elementlerin var olup olmadığını kontrol ederek tıklama dinleyicileri ekliyoruz
    // Bu, "null" hatasını engeller
    if (hamburgerButton) {
      hamburgerButton.addEventListener('click', openMobileMenu);
    }
  
    if (closeButton) {
      closeButton.addEventListener('click', closeMobileMenu);
    }
  
    if (overlay) {
      overlay.addEventListener('click', closeMobileMenu);
    }
  
  });
  
  // --- Scroll Reveal Animasyonu ---
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1 // Elementin %10'u göründüğünde animasyon başlasın
});

revealElements.forEach(element => {
    observer.observe(element);
});



// --- Scroll'da Header'ı Değiştirme ---
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50 piksel aşağı kaydırılınca
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});





