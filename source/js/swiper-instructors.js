import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const instructorsSwiper = new Swiper ('.training__instructors-wrapper', {
  modules: [Navigation],

  direction: 'horizontal',
  initialSlide: 2,
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.training__next-slide',
    prevEl: '.training__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1440,
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

const prevSlide = document.querySelector('.training__prev-slide');
const nextSlide = document.querySelector('.training__next-slide');

function isUpdateNavigation () {
  if (instructorsSwiper.isBeginning) {
    prevSlide.classList.add('disabled');
  } else {
    prevSlide.classList.remove('disabled');
  }

  if (instructorsSwiper.isEnd) {
    nextSlide.classList.add('disabled');
  } else {
    nextSlide.classList.remove('disabled');
  }
}

instructorsSwiper.on('init', isUpdateNavigation);
instructorsSwiper.on('slideChange', isUpdateNavigation);

instructorsSwiper.init();
isUpdateNavigation();
