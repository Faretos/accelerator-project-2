import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const reviewsSwiper = new Swiper ('.reviews__reviews-swiper', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: '.reviews__next-slide',
    prevEl: '.reviews__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
});

reviewsSwiper.init();

