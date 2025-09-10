const searchBar = document.querySelector(".search-bar-container");
const magnifier = document.querySelector(".magnifier");
const input = document.querySelector(".input");

magnifier.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    if (searchBar.classList.contains("active")) {
        input.focus(); // وقتی باز شد، فوکوس روی input بره
    }
});
