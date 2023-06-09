"use strict";

// ---------------------------Main Slider --------------------------------

var carouselContainer = document.querySelector('.carousel-container');
var carouselImages = document.querySelectorAll('.carousel-container img');
var prevButton = document.querySelector('.carousel-control.prev');
var nextButton = document.querySelector('.carousel-control.next');
var dots = document.querySelectorAll('.carousel-dots .dot');
var currentIndex = 0;
var timer;

// function to change to next image
function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Function to change previous image
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  updateCarousel();
}

// Function to update to actual image
function updateCarousel() {
  var translateValue = -currentIndex * carouselContainer.offsetWidth;
  carouselContainer.style.transform = 'translateX(' + translateValue + 'px)';
  updateDots();
}

// Function to update nav dots
function updateDots() {
  dots.forEach(function(dot, index) {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Function to start the timer
function startTimer() {
  timer = setInterval(nextSlide, 4000);
}

// Function to stop timer
function stopTimer() {
  clearInterval(timer);
}

// Events for nav buttons
prevButton.addEventListener('click', function(e) {
  e.preventDefault();
  prevSlide();
  stopTimer();
  startTimer();
});

nextButton.addEventListener('click', function(e) {
  e.preventDefault();
  nextSlide();
  stopTimer();
  startTimer();
});

// Events for nav dots
dots.forEach(function(dot, index) {
  dot.addEventListener('click', function(e) {
    e.preventDefault();
    currentIndex = index;
    updateCarousel();
    stopTimer();
    startTimer();
  });
});

// Start carrousel
updateCarousel();
startTimer();
