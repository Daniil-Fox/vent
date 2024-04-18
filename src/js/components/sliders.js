import {Swiper} from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'

Swiper.use([Navigation])
new Swiper('.new__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 20,
  watchSlidesProgress: true,
  slidesPerGroup: 1,
  navigation: {
    prevEl: '.new__btn--prev',
    nextEl: '.new__btn--next',
  },
  pagination: {
    el: '.new__pagination .swiper-pagination',
    type: 'progressbar'
  }
})
