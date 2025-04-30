const body = document.body;
const burgerMenuButton = document.querySelector('.header__burger-menu-button');
const navList = document.querySelector('.header__navigation');
const navLinks = document.querySelectorAll('.header__navigation-link');
const headerWrapper = document.querySelector('.header__wrapper');
const telephone = document.querySelector('.header__telephone');

function burgerMenuToggle() {
  if (window.innerWidth >= 1440) {
    return;
  }

  const isOpened = burgerMenuButton.classList.toggle('header__burger-menu-button--openned');
  navList.classList.toggle('header__navigation--openned');
  headerWrapper.classList.toggle('header__wrapper--nav-openned');
  telephone.classList.toggle('header__telephone--openned');

  if (isOpened) {
    body.classList.add('page-body--no-scroll');
  } else {
    body.classList.remove('page-body--no-scroll');
  }
}

function closeBurgerMenu() {
  burgerMenuButton.classList.remove('header__burger-menu-button--openned');
  navList.classList.remove('header__navigation--openned');
  headerWrapper.classList.remove('header__wrapper--nav-openned');
  telephone.classList.remove('header__telephone--openned');
  body.classList.remove('page-body--no-scroll');
}

function updateBurgerMenu() {
  if (window.innerWidth < 1440) {
    burgerMenuButton.addEventListener('click', burgerMenuToggle);
    navLinks.forEach((link) => {
      link.addEventListener('click', closeBurgerMenu);
    });
  } else {
    burgerMenuButton.removeEventListener('click', burgerMenuToggle);
    navLinks.forEach((link) => {
      link.removeEventListener('click', closeBurgerMenu);
    });
    closeBurgerMenu();
  }
}

updateBurgerMenu();
window.addEventListener('resize', updateBurgerMenu);
