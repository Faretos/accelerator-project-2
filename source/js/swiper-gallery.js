import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

let gallerySwiper = null;

function initSwiper() {
  if (window.innerWidth < 1440 && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery__slider', {
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
      allowTouchMove: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
    });
  }
}

function destroySwiper() {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

function handleResize() {
  if (window.innerWidth < 1440) {
    destroySwiper();
  } else {
    initSwiper();
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', handleResize);
