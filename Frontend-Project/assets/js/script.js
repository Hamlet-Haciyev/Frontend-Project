$(".custom-owl-carous").owlCarousel({
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
      items: 1,
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
let supportBtn = document.querySelector(".support-btn");
let supportInput = document.querySelector("#support-input");
let supportForm = document.querySelector(".support-form");
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
supportBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (supportInput.innerHTML == "") {
    supportForm.classList.add("translate");
  }
});
let card1 = document.querySelector("#info  #card-1");
let card2 = document.querySelector("#info  #card-2");
let card3 = document.querySelector("#info  #card-3");
let card4 = document.querySelector("#info  #card-4");
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 150) {
    card1.classList.add("show");
    card2.classList.add("show");
    card3.classList.add("show");
    card4.classList.add("show");
  }
});
let meetOurExperts = document.querySelector("#meet-our-experts");
let meetCard1 = document.querySelector("#meet-our-experts  #meet-card-1");
let meetCard2 = document.querySelector("#meet-our-experts  #meet-card-2");
let meetCard3 = document.querySelector("#meet-our-experts  #meet-card-3");
let meetCard4 = document.querySelector("#meet-our-experts  #meet-card-4");
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 6000) {
    meetCard1.classList.add("show");
    meetCard2.classList.add("show");
    meetCard3.classList.add("show");
    meetCard4.classList.add("show");
  }
});

let videoBoxContact = document.querySelector(".video-box-contact");
let videoCard1 = document.querySelector(".video-box-contact  #video-card-1");
let videoCard2 = document.querySelector(".video-box-contact  #video-card-2");
let videoCard3 = document.querySelector(".video-box-contact  #video-card-3");
let videoCard4 = document.querySelector(".video-box-contact  #video-card-4");
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 4000) {
    videoCard1.classList.add("show");
    videoCard2.classList.add("show");
    videoCard3.classList.add("show");
    videoCard4.classList.add("show");
  }
});
let haveAnyQuestion = document.querySelector(".have-any-question");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 4500) {
    haveAnyQuestion.classList.add("active");
  }
});

let ourAmazingSection = document.querySelector("#our-amazing");
let ourAmazing1 = document.querySelector("#our-amazing #amazing-card-1");
let ourAmazing2 = document.querySelector("#our-amazing #amazing-card-2");
let ourAmazing3 = document.querySelector("#our-amazing #amazing-card-3");
let ourAmazing4 = document.querySelector("#our-amazing #amazing-card-4");
let ourAmazing5 = document.querySelector("#our-amazing #amazing-card-5");
let ourAmazing6 = document.querySelector("#our-amazing #amazing-card-6");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 2000) {
    ourAmazing1.classList.add("active");
    ourAmazing2.classList.add("active");
    ourAmazing3.classList.add("active");
    ourAmazing4.classList.add("active");
    ourAmazing5.classList.add("active");
    ourAmazing6.classList.add("active");
  }
});

let hamburgerBtn = document.querySelector(".hamburger-btn");
let mainMenuNavbarList = document.querySelector(".main-menu-navbar-list");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mainMenuNavbarList.classList.toggle("active");
});
