import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const toursSwiper = new Swiper ('.tours__catalog-wrapper', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.tours__next-slide',
    prevEl: '.tours__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

toursSwiper.init();
