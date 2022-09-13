let modal = document.querySelector('.modal');
let cart = document.querySelector('.product-card__cart');
let carts = document.querySelectorAll('.product-card__cart');
let button = document.querySelector('.highlight-product-info__button');
let buttons = document.querySelectorAll('.highlight-product-info__button');
let form = document.querySelector('.modal-form');
let background = document.querySelector('.modal__background');

for (cart of carts) {
  cart.onclick = function() {
    modal.classList.add('modal--opened');
  };
}

for (button of buttons) {
  button.onclick = function() {
    modal.classList.add('modal--opened');
  };
}

background.onclick = function() {
  modal.classList.remove('modal--opened');
};
