const eqItems = document.querySelectorAll(".equip");
const eqImages = document.querySelectorAll(".equipment__image");

eqItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    clearActive();
    const dataset = item.dataset.tab;

    const current = [...eqImages].find((item) => item.dataset.tab == dataset);
    current.classList.add("active");
    item.classList.add("active");
  });
});

function clearActive() {
  eqItems.forEach((el) => el.classList.remove("active"));
  eqImages.forEach((el) => el.classList.remove("active"));
}
