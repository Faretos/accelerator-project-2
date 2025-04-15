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
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 120,
    },
  },
});

const prevSlide = document.querySelector('.reviews__prev-slide');
const nextSlide = document.querySelector('.reviews__next-slide');

function isUpdateNavigation () {
  if (reviewsSwiper.isBeginning) {
    prevSlide.classList.add('disabled');
  } else {
    prevSlide.classList.remove('disabled');
  }

  if (reviewsSwiper.isEnd) {
    nextSlide.classList.add('disabled');
  } else {
    nextSlide.classList.remove('disabled');
  }
}

reviewsSwiper.on('init', isUpdateNavigation);
reviewsSwiper.on('slideChange', isUpdateNavigation);

reviewsSwiper.init();
isUpdateNavigation();
