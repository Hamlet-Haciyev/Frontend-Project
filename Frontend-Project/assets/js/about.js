$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
let upRise = document.querySelector(".up-rise");
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
let pricingBodyContentIntern = document.querySelectorAll(
  ".pricing-body-content-inter"
);
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
