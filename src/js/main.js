import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

if (window.matchMedia("(max-width: 1024px)").matches) {
  const sliders = document.querySelectorAll(".popular__container");
  sliders.forEach((slider) => {
    const popularItemsLength = slider.querySelectorAll(".popular-item").length;
    const btnMore = slider.querySelector(".popular__more");

    let items = 3;
    const arr = Array.from(slider.querySelector(".popular__items").children);
    const visItems = arr.slice(0, items);
    visItems.forEach((item) => item.classList.add("is-visible"));

    btnMore.addEventListener("click", (e) => {
      items += 3;

      const visItems = arr.slice(0, items);
      visItems.forEach((item) => item.classList.add("is-visible"));

      if (visItems.length == popularItemsLength) {
        btnMore.style.display = "none";
      }
    });
  });
}

const menuBtn = document.querySelector(".equipment__menu");
const header = document.querySelector(".header");
const menuText = menuBtn.querySelector("span");
menuBtn.addEventListener("click", (e) => {
  let isActive = header.classList.toggle("active");

  header.style.transform = isActive ? "translateY(0)" : "translateY(-100%)";

  if (isActive) {
    menuText.style.transform = "translateX(15rem)";
    setTimeout(() => {
      menuText.textContent = "Закрыть";
      menuText.style.transform = null;
    }, 300);
  } else {
    menuText.style.transform = "translateX(15rem)";

    setTimeout(() => {
      menuText.textContent = "Меню";
      menuText.style.transform = null;
    }, 300);
    setTimeout(() => {});
  }
});
