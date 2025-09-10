// const hamburger = document.getElementById("hamburger");
// const menu = document.getElementById("menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   menu.classList.toggle("active");
// });
const searchBar = document.querySelector(".search-bar-container");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});
