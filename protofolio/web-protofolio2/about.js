document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".nav-arrow.right");
  const prevBtn = document.querySelector(".nav-arrow.left");
  let currentSlide = 0;
  let slideInterval = null;

  // Tampilkan slide pertama
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  // Slide ke kanan
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Slide ke kiri
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slide
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 7500);
  }

  // Hentikan auto slide
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event Listeners tombol panah
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // Mulai auto slide saat page load
  showSlide(currentSlide);
  startAutoSlide();

  // === Optional: animasi transisi menu ke About Me ===
  const aboutTitle = document.querySelector(".about-me-title");
  aboutTitle.style.opacity = 0;
  setTimeout(() => {
    aboutTitle.style.transition = "opacity 1s ease";
    aboutTitle.style.opacity = 1;
  }, 300);
});
