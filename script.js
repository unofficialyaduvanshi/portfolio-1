document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
  });
});

// js

const hamburger = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu");

// Open menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full"); // slide in immediately
});

// Close menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full"); // slide out
});

// Close when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
});
