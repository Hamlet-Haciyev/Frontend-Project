$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

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
