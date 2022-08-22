import { fullStackProjects, frontEndProjects } from "./data/project.js";
import { techStackList } from "./data/tech.js";

const today = new Date();
const currentYear = today.getFullYear();

const footerTCopyrights = document.querySelector(".copyrights")

const copyrights = `Copyrights @ Yusuf Alp ${currentYear}`;
footerTCopyrights.textContent = copyrights;


const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".nav-links-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)
