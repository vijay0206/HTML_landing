"use strict";

const togglerDiv = document.querySelector("#toggler-div");
const hamBurger = document.querySelector("#toggler-div i.fa-bars");
const hamBurgerCross = document.querySelector("#toggler-div i.fa-times");
const overlayDiv = document.querySelector("#menu-overlay");

const showOverlayMenu = function (e) {
  if (e.target === hamBurger || e.target === hamBurgerCross) {
    console.log("clicked");
    overlayDiv.classList.toggle("hidden");
    hamBurger.classList.toggle("hidden");
    hamBurgerCross.classList.toggle("hidden");
  }
};

togglerDiv.addEventListener("click", showOverlayMenu);
