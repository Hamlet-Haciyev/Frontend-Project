let upRise = document.querySelector(".up-rise");
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");
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
