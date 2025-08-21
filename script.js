document.addEventListener("DOMContentLoaded", function () {
  // Animasi teks dan konten
  const mainHeading = document.getElementById("main-heading");
  const typewriter = document.getElementById("typewriter");
  const mainContent = document.getElementById("main-content");

  const descriptionText = `Mahasiswa Keamanan Sistem Informasi yang tertarik pada Cyber Security & Web Development.`;


  function typeWriterEffect(text, element, delay = 25) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, delay);
      }
    }
    type();
  }

  setTimeout(() => {
    if (mainHeading) mainHeading.classList.add("move-up");
    setTimeout(() => {
      if (mainContent) mainContent.classList.add("show");
      if (typewriter) typeWriterEffect(descriptionText, typewriter, 25);
    }, 800);
  }, 1000);

  // STARSCAPE EFFECT
  const canvas = document.getElementById("starscape-canvas");
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const stars = [];

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005,
    });
  }

  function animateStars() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.delta = -star.delta;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animateStars);
  }

  animateStars();

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
});

