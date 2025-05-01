import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const slides = document.querySelectorAll('.gallery__slide');

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

    slides.forEach((slide) => {
      if (!slide.hasAttribute('tabindex')) {
        slide.setAttribute('tabindex', '0');
      }
    });
  }
}

function destroySwiper() {
  if (gallerySwiper) {
    slides.forEach((slide) => {
      slide.removeAttribute('tabindex');
    });

    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

function handleResize() {
  if (window.innerWidth > 1440) {
    if (gallerySwiper) {
      destroySwiper();
    }
  } else {
    if (!gallerySwiper) {
      initSwiper();
    }
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
