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

// responsive menu hamburger 

const hamburgerMenu = document.querySelector(".menu-responsive");
const mainNav = document.querySelector(".main-nav");
console.log(mainNav)
hamburgerMenu.addEventListener("click", () => {
  clickMenu.classList.toggle("show-menu");
  mainNav.classList.toggle("show-main-nav");
})