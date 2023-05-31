"use strict";

//--------------------------------------------------------Header---------------------------------------------------------------------

//--------------------select city, movie-----------
const citySelect = document.getElementById("select-city");
const cinemaSelect = document.getElementById("select-cinema");

citySelect.addEventListener("change", () => {

  var selectedCity = citySelect.value;

  if (selectedCity === "Panama") {
    cinemaSelect.innerHTML = `
      <option value="Alta Plaza">Altaplaza</option>
      <option value="Anclas Mall Plaza">Anclas Mall Plaza</option>
      <option value="Andes Mall">Andes Mall</option>
      <option value="El Dorado">El Dorado</option>
      <option value="Town Center">Town Center</option>
      <option value="Westland Mall">Panama, Panama</option>`;
  } else if (selectedCity === "David") {
    cinemaSelect.innerHTML = `<option value="Federal Mall">Federal Mall</option>`;
  } else if (selectedCity === "Santiago") {
    cinemaSelect.innerHTML = `<option value="Santiago">Santiago Mall</option>`
  }
});

//--------------------------------"menu" button---------------------------------

const menuButton = document.querySelector(".menu-button ");
const menuArrow = document.querySelector(".bxs-chevron-down");
const clickMenu = document.querySelector(".menu-div");

// Event when click menu button show the window
menuButton.addEventListener("click", () => {
  menuArrow.classList.toggle("bxs-chevron-up");
  clickMenu.classList.toggle("show");
});

// Event to control when the windows have to be closed
window.addEventListener('click', e => {
  if (clickMenu.classList.contains('show') && e.target != clickMenu && e.target != menuButton) {
    clickMenu.classList.toggle("show");
  }
});

// ------------------------------------------------------ Body ------------------------------------------------------

// ---------------------------Main Slider --------------------------------

var carouselContainer = document.querySelector('.carousel-container');
var carouselImages = document.querySelectorAll('.carousel-container img');
var prevButton = document.querySelector('.carousel-control.prev');
var nextButton = document.querySelector('.carousel-control.next');
var dots = document.querySelectorAll('.carousel-dots .dot');
var currentIndex = 0;
var timer;

// Función para cambiar a la siguiente imagen
function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Función para cambiar a la imagen anterior
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  updateCarousel();
}

// Función para actualizar el carrusel con la imagen actual
function updateCarousel() {
  var translateValue = -currentIndex * carouselContainer.offsetWidth;
  carouselContainer.style.transform = 'translateX(' + translateValue + 'px)';
  updateDots();
}

// Función para actualizar los puntos de navegación
function updateDots() {
  dots.forEach(function(dot, index) {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Función para iniciar el temporizador
function startTimer() {
  timer = setInterval(nextSlide, 4000);
}

// Función para detener el temporizador
function stopTimer() {
  clearInterval(timer);
}

// Agrega eventos a los botones de navegación
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

// Agrega eventos a los puntos de navegación
dots.forEach(function(dot, index) {
  dot.addEventListener('click', function(e) {
    e.preventDefault();
    currentIndex = index;
    updateCarousel();
    stopTimer();
    startTimer();
  });
});

// Inicia el carrusel
updateCarousel();
startTimer();








