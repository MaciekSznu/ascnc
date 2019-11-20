'use strict';

const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('mobile-hidden');
});