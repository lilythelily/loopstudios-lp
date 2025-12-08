"use strict";

const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerLogo = document.querySelector(".logo-close");
const hamburgerList = document.querySelector(".hamburger-ul");
const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector("header");
const headerList = document.querySelectorAll(".header-ul li");
const footerList = document.querySelectorAll(".footer-ul li");
const socials = document.querySelectorAll(".social-icon");

// === hamburger menu control ===

function toggleMenu() {
  hamburgerMenu.classList.toggle("hide");
  hamburgerLogo.classList.toggle("hide");
  hamburgerLogo.classList.toggle("flex");
  hamburgerList.classList.toggle("hide");
  hamburgerList.classList.toggle("flex");
  header.classList.toggle("hide");
}

hamburgerBtn.addEventListener("click", () => {
  toggleMenu();
});

closeBtn.addEventListener("click", () => {
  toggleMenu();
});

// === header nav hover ===

headerList.forEach((list) => {
  list.addEventListener("mouseenter", () => {
    list.lastElementChild.classList.toggle("opacity");
  });
});

headerList.forEach((list) => {
  list.addEventListener("mouseleave", () => {
    list.lastElementChild.classList.toggle("opacity");
  });
});

// === footer nav hover ===

footerList.forEach((list) => {
  list.addEventListener("mouseenter", () => {
    list.lastElementChild.classList.toggle("hide");
  });
});

footerList.forEach((list) => {
  list.addEventListener("mouseleave", () => {
    list.lastElementChild.classList.toggle("hide");
  });
});

// === social icons hover ===

socials.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.lastElementChild.classList.toggle("hide");
  });
});

socials.forEach((icon) => {
  icon.addEventListener("mouseleave", () => {
    icon.lastElementChild.classList.toggle("hide");
  });
});


// === scroll to top ===

const footerLogo = document.querySelector(".footer-logo");

footerLogo.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    })
})