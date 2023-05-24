"use strict";

//-----------------------------Header-----------------------------------------

//-----------------------------select city, movie----------------------------
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

//----------------------------"menu" button----------------------------------

const menuButton = document.querySelector(".menu-button ");
const menuArrow = document.querySelector(".bxs-chevron-down");

menuButton.addEventListener("click", () =>{
    menuArrow.classList.toggle("bxs-chevron-up");
}); 





