'use strict';

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

const mediaTabletPortraitWidth = 768;
const mediaTabletLandscapeWidth = 1024;


const teamSlider =
  (width < mediaTabletPortraitWidth) ?
      new Siema({
        selector: '.team-wrapper',
        loop: true,
      }) :
  (width >= mediaTabletPortraitWidth && width <= mediaTabletLandscapeWidth) ?
      new Siema({
        selector: '.team-wrapper',
        loop: true,
        perPage: 2,
      }) :
      new Siema({
        selector: '.team-wrapper',
        loop: true,
        perPage: 4,
      });

// const portfolioSlider = new Siema({
//   selector: '.portfolio-items-wrapper',
//   loop: true,
// });

const portfolioSlider =
  (width < mediaTabletPortraitWidth) ?
      new Siema({
        selector: '.portfolio-items-wrapper',
        loop: true,
      }) :
  (width >= mediaTabletPortraitWidth && width <= mediaTabletLandscapeWidth) ?
      new Siema({
        selector: '.portfolio-items-wrapper',
        loop: true,
        perPage: 2,
      }) :
      new Siema({
        selector: '.portfolio-items-wrapper',
        loop: true,
        perPage: 2,
      });
