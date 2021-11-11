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
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
let pricingBodyContentIntern = document.querySelectorAll(
  ".pricing-body-content-inter"
);
let ourAmazing = document.getElementById("our-amazing");
let ourAmazingcol4 = document.querySelectorAll(".col-4");
let customPart4Item = document.querySelectorAll(".custom-part4-item");
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
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
let li = document.querySelectorAll(".know-about-strax-list ul li");
let accordionShow = () => {
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
      e.preventDefault();
      if (li[i].classList.contains("show")) {
        li[i].classList.remove("show");
        li[i].firstElementChild.lastElementChild.classList.remove("fa-minus");
        li[i].firstElementChild.lastElementChild.classList.add("fa-plus");
      } else {
        for (let a = 0; a < li.length; a++) {
          li[a].classList.remove("show");
          li[a].firstElementChild.lastElementChild.classList.remove("fa-minus");
          li[a].firstElementChild.lastElementChild.classList.add("fa-plus");
        }
        li[i].classList.add("show");
        li[i].firstElementChild.lastElementChild.classList.remove("fa-plus");
        li[i].firstElementChild.lastElementChild.classList.add("fa-minus");
      }

      console.log(li[i].lastElementChild);
    });
  }
};
accordionShow();

yearly.addEventListener("click", (e) => {
  e.preventDefault();

  monthly.style.color = "#8d8fb4";
  monthly.style.backgroundColor = "#fff";
  yearly.style.color = "#fff";
  yearly.style.backgroundColor = "#080a3c";

  for (let i = 0; i < pricingBodyContentIntern.length; i++) {
    pricingBodyContentIntern[i].classList.add("active");
  }
  // pricingBodyContentIntern.classList.add("active");
});
monthly.addEventListener("click", (e) => {
  e.preventDefault();

  yearly.style.color = "#8d8fb4";
  yearly.style.backgroundColor = "#fff";
  monthly.style.color = "#fff";
  monthly.style.backgroundColor = "#080a3c";

  for (let i = 0; i < pricingBodyContentIntern.length; i++) {
    pricingBodyContentIntern[i].classList.remove("active");
  }
  // pricingBodyContentIntern.classList.remove("active");
});
let ms = 0.5;
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > ourAmazing.getBoundingClientRect().top + 1200) {
    for (let i = 0; i < customPart4Item.length; i++) {
      customPart4Item[i].style.bottom = "0";
      // ourAmazingcol4[i].children[0].style.trasitionDelay = `${ms}s`;

      ms += 0.5;
    }
  }
});

let upRise = document.querySelector(".up-rise");
let optionalBtn = document.querySelector(".others-options .optional-btn");
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 150) {
    document.querySelector(".navbar-area").classList.add("sticky");
    optionalBtn.children[0].style.color = "#080a3c";
    optionalBtn.style.border = "1px solid #080a3c";
    optionalBtn.style.color = "#080a3c";
  } else {
    document.querySelector(".navbar-area").classList.remove("sticky");
    optionalBtn.children[0].style.color = "#fff";
    optionalBtn.style.border = "1px solid #fff";
    optionalBtn.style.color = "#fff";
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
