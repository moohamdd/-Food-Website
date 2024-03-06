// JavaScript code for slider

// Get slider container
const slider = document.querySelector('.slider');

// Get slider items
const slides = slider.querySelectorAll('.slide');

let currentSlide = 0;
const slideInterval = 5000; // Change slide every 5 seconds

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, slideInterval);
