// script.js
const header = document.querySelector(".header");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const scrollDirection = scrollPosition - lastScrollY;
  if (scrollDirection < 0) {
    header.classList.add("stuck");
    header.classList.remove("stuck-hide");
  } else {
    header.classList.remove("stuck");
    header.classList.add("stuck-hide");
  }
  lastScrollY = scrollPosition;
});
