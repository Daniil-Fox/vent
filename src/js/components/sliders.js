import { Swiper } from "swiper";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { FreeMode } from "swiper/modules";
Swiper.use([Navigation]);
new Swiper(".new__slider", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  spaceBetween: 20,
  watchSlidesProgress: true,
  slidesPerGroup: 1,
  navigation: {
    prevEl: ".new__btn--prev",
    nextEl: ".new__btn--next",
  },
  pagination: {
    el: ".new__pagination .swiper-pagination",
    type: "progressbar",
  },
});
let mouse = true;

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };
  const header = document.querySelector(".header");
  const headerLogo = header.querySelector(".header__logo");
  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        if (instance.activeIndex == 1) {
          header.style.transform = "translateY(-100%)";
          header.classList.remove("logo-down");
          header.classList.remove("active");
          setTimeout(() => {
            headerLogo.style.display = "none";
            header.classList.add("high-width");
          }, 500);
        } else if (instance.activeIndex == 2) {
          setTimeout(() => {
            header.style.transform = "translateY(-100%)";
          }, 500);
          setTimeout(() => {
            headerLogo.style.display = null;
            header.style.transform = "translateY(-50%)";
            header.classList.remove("high-width");
            header.classList.add("logo-down");
          }, 1000);
        } else {
          header.classList.remove("active");
          setTimeout(() => {
            header.style.transform = "translateY(-100%)";
            headerLogo.style.display = null;
          }, 500);
          setTimeout(() => {
            header.style.transform = null;
            header.classList.remove("high-width");
            header.classList.remove("logo-down");
          }, 1000);
        }
      });
    }
  };

  resizableSwiper(
    "(min-width: 1024px)",
    ".main-slider",
    {
      modules: [Mousewheel, FreeMode],
      slidesPerView: 1,
      speed: 800,
      direction: "vertical",
      mousewheelControl: mouse,
      mousewheel: {
        noMousewheelClass: "nowheel",
        releaseOnEdges: true,
      },
    },
    someFunc
  );
  resizableSwiper("(min-width: 1025px)", ".popular__slider--rec", {
    modules: [Navigation],
    slidesPerView: 5,
    speed: 600,
    navigation: {
      prevEl: ".rec-prev",
      nextEl: ".rec-next",
    },
  });
  resizableSwiper("(min-width: 1025px)", ".popular__slider--pop", {
    modules: [Navigation],
    slidesPerView: 5,
    speed: 600,
    navigation: {
      prevEl: ".pop-prev",
      nextEl: ".pop-next",
    },
  });
  const slides = document.querySelectorAll(
    ".main-slider>.swiper-wrapper>.swiper-slide"
  );
  const lastSlide = slides[2];

  lastSlide.addEventListener("scroll", (e) => {
    if (lastSlide.scrollTop > 0) {
      lastSlide.classList.add("nowheel");
    } else if (lastSlide.scrollTop === 0) {
      lastSlide.classList.remove("nowheel");
    }
  });
});

// new Swiper(".popular__slider", {
//   modules: [Navigation],
//   slidesPerView: 5,
//   speed: 600,
//   navigation: {
//     prevEl: ".popular__control-btn--prev",
//     nextEl: ".popular__control-btn--next",
//   },
// });
// new Swiper(".cat__slider", {
//   modules: [Navigation],
//   slidesPerView: "auto",
//   speed: 600,
//   navigation: {
//     prevEl: ".cat__control-btn--prev",
//     nextEl: ".cat__control-btn--next",
//   },
// });
