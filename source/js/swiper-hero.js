import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const heroSwiper = new Swiper ('.hero__wrapper', {
  modules: [Pagination],

  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className } hero__pagination-bullet"></span>`;
    }
  },
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

const bullets = document.querySelectorAll('.hero__pagination-bullet');
if (bullets.length > 0) {
  bullets[0].classList.add('hero__pagination-bullet--active');
}

heroSwiper.on('slideChange', () => {
  const activeIndex = heroSwiper.realIndex;

  bullets.forEach((bullet, index) => {
    if (index === activeIndex) {
      bullet.classList.add('hero__pagination-bullet--active');
    } else {
      bullet.classList.remove('hero__pagination-bullet--active');
    }
  });
});
