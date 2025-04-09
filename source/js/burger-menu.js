const burgerMenuButton = document.querySelector('.header__burger-menu-button');
const navList = document.querySelector('.header__navigation');
const headerWrapper = document.querySelector('.header__wrapper');
const telephone = document.querySelector('.header__telephone');

function burgerMenuToggle () {
  if (window.innerWidth >= 1440) {
    return;
  }

  burgerMenuButton.classList.toggle('header__burger-menu-button--openned');
  navList.classList.toggle('header__navigation--openned');
  headerWrapper.classList.toggle('header__wrapper--nav-openned');
  telephone.classList.toggle('header__telephone--openned');
}

function updateBurgerMenu() {
  if (window.innerWidth < 1440) {
    burgerMenuButton.addEventListener('click', burgerMenuToggle);
  } else {
    burgerMenuButton.removeEventListener('click', burgerMenuToggle);
    navList.classList.remove('header__navigation--openned');
    headerWrapper.classList.remove('header__wrapper--nav-openned');
    telephone.classList.remove('header__telephone--openned');
  }
}

updateBurgerMenu();
window.addEventListener('resize', updateBurgerMenu);
