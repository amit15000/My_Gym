let currentSlide = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");

  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);

const indicators = document.querySelectorAll(".indicator");
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
  });
});

// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);
