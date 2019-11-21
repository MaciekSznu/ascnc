'use strict';

function click (target, callback) {
  target.addEventListener('click', (e) => {
  e.preventDefault();
  return callback(e)
});
}

const scrollBelowLogo = () => {
  window.scrollBy(0, -60);
};

const hideMobileMenu = () => {
  mobileMenu.classList.toggle('mobile-hidden');
};

const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerButton.addEventListener('click', (e) => {
  hideMobileMenu();
});

const mobileMenuItems = document.querySelectorAll('.menu__list-item a');
const documentSections = document.querySelectorAll('*[id^="section"]');
const documentSectionsArray = [...documentSections];

const scrollToSection = (i) => {

  documentSectionsArray[i].scrollIntoView()
  //.then(scrollBelowLogo());

};

mobileMenuItems.forEach((item, index) => {
  click(item, () => {
    scrollToSection(index);
    hideMobileMenu();
  })
});


// mobileMenuItems.forEach(addEventListener('click', (e) => {
//   mobileMenu.classList.toggle('mobile-hidden');
// }));

