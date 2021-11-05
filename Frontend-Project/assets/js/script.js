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
let part2 = document.getElementById("part-2");
let part3 = document.getElementById("part-3");
let customPart2Img = document.querySelector(".custom-part2-img");
let customPart3Img = document.querySelector(".custom-part3-img");
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > part2.getBoundingClientRect().top - 100) {
    customPart2Img.classList.add("show");
  }
  if (window.pageYOffset > part3.getBoundingClientRect().top + 500) {
    customPart3Img.classList.add("show");
  }
});
