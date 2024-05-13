const eqItems = document.querySelectorAll(".panel__item");
const eqImages = document.querySelectorAll(".equipment__image");
const fPagination = document.querySelector(".panel__fpagination span");
eqItems[0].classList.add("active");
eqImages[0].classList.add("active");

eqItems.forEach((item, activeIndex) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    clearActive();
    const dataset = item.dataset.tabBtn;

    const current = [...eqImages].find((item) => item.dataset.tab == dataset);
    current.classList.add("active");
    item.classList.add("active");
    fPagination.textContent =
      "0" + Math.max((activeIndex + 1) % (eqItems.length + 1), 1);
  });
});

function clearActive() {
  eqItems.forEach((el) => el.classList.remove("active"));
  eqImages.forEach((el) => el.classList.remove("active"));
}

const btnPrev = document.querySelector(".panel__btn--prev");
const btnNext = document.querySelector(".panel__btn--next");

btnPrev.addEventListener("click", (e) => {
  let activeIndex = 0;
  for (let i = 0; i < eqItems.length; i++) {
    if (eqItems[i].classList.contains("active")) {
      activeIndex = i;
      break;
    }
  }
  fPagination.textContent = "0" + (activeIndex + 1);
  clearActive();
  activeIndex -= 1;
  if (activeIndex < 0) {
    activeIndex = eqItems.length - 1;
  }
  fPagination.textContent =
    "0" + Math.max((activeIndex + 1) % (eqItems.length + 1), 1);
  eqItems[activeIndex].classList.add("active");
  eqImages[activeIndex].classList.add("active");
});

btnNext.addEventListener("click", (e) => {
  let activeIndex = 0;
  for (let i = 0; i < eqItems.length; i++) {
    if (eqItems[i].classList.contains("active")) {
      activeIndex = i;
      break;
    }
  }
  clearActive();
  activeIndex += 1;
  eqItems[activeIndex % eqItems.length].classList.add("active");
  eqImages[activeIndex % eqItems.length].classList.add("active");

  fPagination.textContent =
    "0" + Math.max((activeIndex + 1) % (eqItems.length + 1), 1);
});
