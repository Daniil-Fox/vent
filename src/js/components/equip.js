const eqItems = document.querySelectorAll(".equip");
const eqImages = document.querySelectorAll(".equipment__image");

eqItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    clearActive();
    const dataset = item.dataset.tab;

    const current = [...eqImages].find((item) => item.dataset.tab == dataset);
    current.classList.add("active");
    item.classList.add("active");
  });
  item.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    clearActive();
    eqImages[0].classList.add("active");
  });
});

function clearActive() {
  eqItems.forEach((el) => el.classList.remove("active"));
  eqImages.forEach((el) => el.classList.remove("active"));
}
