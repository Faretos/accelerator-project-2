import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const instructorsSwiper = new Swiper ('.training__instructors-wrapper', {
  modules: [Navigation],

  direction: 'horizontal',
  initialSlide: 2,
  loop: false,
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.training__next-slide',
    prevEl: '.training__prev-slide',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 0,
    },
  },
});

instructorsSwiper.init();
