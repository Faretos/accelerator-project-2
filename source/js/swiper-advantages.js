import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const advantagesList = document.querySelector('.advantages__list');
const advantagesListWrapper = document.querySelector('.advantages__list-wrapper');
const advantagesCards = document.querySelectorAll('.advantages__card');
let advantagesSwiper = null;

function addSwiper () {
  if (window.innerWidth >= 1440) {
    advantagesList.classList.add('swiper-wrapper');
    advantagesListWrapper.classList.add('swiper');
    advantagesCards.forEach((card) => {
      card.classList.add('swiper-slide');
      card.setAttribute('tabindex', '0');
    });

    if (!advantagesSwiper) {
      advantagesSwiper = new Swiper ('.advantages__list-wrapper', {
        modules: [Navigation],

        direction: 'horizontal',
        autoHeight: true,
        loop: true,
        initialSlide: 2,
        slidesPerView: 3,
        centeredSlides: true,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.advantages__next-slide',
          prevEl: '.advantages__prev-slide',
        },
        allowTouchMove: window.innerWidth < 1440,
      });
    }
  } else {
    if (advantagesSwiper) {
      if (advantagesSwiper) {
        advantagesSwiper.destroy(true, true);
        advantagesSwiper = null;
      }
      advantagesList.classList.remove('swiper-wrapper');
      advantagesListWrapper.classList.remove('swiper');
      advantagesCards.forEach((card) => {
        card.classList.remove('swiper-slide');
        card.removeAttribute('tabindex');
      });
    }
  }
}

window.addEventListener('load', addSwiper);
window.addEventListener('resize', () => {
  addSwiper();
});
