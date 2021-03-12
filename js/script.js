"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const closePopup = document.querySelector('.popup__close');
  const backdropClose = document.querySelector('.backdrop');
  const buttonOpenPopup = document.querySelector('.open-popup');
  buttonOpenPopup.addEventListener("click", function () {
    backdropClose.classList.remove("is-hidden");
    document.querySelector(".popup").classList.remove("is-hidden");
    document.body.classList.add("body__hidden");
  });
  closePopup.addEventListener("click", function () {
    backdropClose.classList.add("is-hidden");
    document.querySelector(".popup").classList.add("is-hidden");
    document.body.classList.remove("body__hidden");
  });
  backdropClose.addEventListener("click", function () {
    backdropClose.classList.add("is-hidden");
    document.querySelector(".popup").classList.add("is-hidden");
    document.body.classList.remove("body__hidden");
  });
});