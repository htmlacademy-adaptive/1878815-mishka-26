let navList = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navList.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('navigation--closed')) {
    navList.classList.remove('navigation--closed');
    navList.classList.add('navigation--opened');
  } else {
    navList.classList.add('navigation--closed');
    navList.classList.remove('navigation--opened');
  }
});
