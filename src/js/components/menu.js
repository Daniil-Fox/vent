const menu = document.querySelector(".menu");
const siteContainer = document.querySelector(".site-container");

const menuBtn = document.querySelector(".burger");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isActive = menu.classList.toggle("active");
  siteContainer.classList.toggle("menu-active");

  document.body.style.overflow = isActive ? "hidden" : null;
});
