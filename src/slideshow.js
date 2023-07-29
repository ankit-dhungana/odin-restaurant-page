function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[n].style.display = "block";
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Find the current slide
  slides.forEach((slide, index) => {
    if (slide.style.display === "block") {
      currentSlide = index;
    }
  });

  // Show the next slide
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideshow() {
  showSlide(0);

  setInterval(nextSlide, 5000);
}

export default startSlideshow;
