import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const gallerySwiper = new Swiper ('.gallery__slider', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: 2,
  spaceBetween: 5,

  navigation: {
    nextEl: '.gallery__next-slide',
    prevEl: '.gallery__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
});
