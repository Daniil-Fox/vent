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

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(min-width: 1024px)", ".main-slider", {
    modules: [Mousewheel, FreeMode],
    slidesPerView: 1,
    speed: 800,
    direction: "vertical",
    mousewheelControl: mouse,
    mousewheel: {
      noMousewheelClass: "nowheel",
      releaseOnEdges: true,
    },
  });
  resizableSwiper("(min-width: 1025px)", ".popular-slider--rec", {
    modules: [Navigation],
    slidesPerView: 5,
    speed: 600,
    navigation: {
      prevEl: ".popular__control-btn--prev",
      nextEl: ".popular__control-btn--next",
    },
  });
  resizableSwiper("(min-width: 1025px)", ".popular-slider--pop", {
    modules: [Navigation],
    slidesPerView: 5,
    speed: 600,
    navigation: {
      prevEl: ".popular__control-btn--prev",
      nextEl: ".popular__control-btn--next",
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
