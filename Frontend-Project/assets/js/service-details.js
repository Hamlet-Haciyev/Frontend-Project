let upRise = document.querySelector(".up-rise");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 100) {
    document.querySelector(".navbar-area").classList.add("sticky");
  } else {
    document.querySelector(".navbar-area").classList.remove("sticky");
  }
  if (window.pageYOffset > 600) {
    upRise.classList.add("active");
  } else {
    upRise.classList.remove("active");
  }
});
upRise.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

let hamburgerBtn = document.querySelector(".hamburger-btn");
let mainMenuNavbarList = document.querySelector(".main-menu-navbar-list");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainMenuNavbarList.classList.toggle("active");
});
