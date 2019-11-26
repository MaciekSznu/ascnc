'use strict';

const teamSlider = new Siema({
  selector: '.team-wrapper',
  loop: true,
});

const portfolioSlider = new Siema({
  selector: '.portfolio-items-wrapper',
  loop: true,

  // loop: true,
  // onInit: () => {
  //   const slider = document.querySelector('.portfolio-items-wrapper');
  //   const sliderGeneratedContainer = slider.children;
  //   const generatedSlide = sliderGeneratedContainer.child;
  //   //get slider width
  //   //set change position of generatedcontainer by 50%

  // }
});

// import { tns } from '../node_modules/tiny-slider/src/tiny-slider.js';

// const protfolioSlider = tns({
//   container: '.portfolio-items-wrapper',
//   items: 1,
// });