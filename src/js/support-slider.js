const sliderWrapper = document.querySelector('.slider');
const imgSlides = document.querySelectorAll('.support__item');
const sliderBtn = document.querySelector('.support__btn');

let counter = 0;
let moveDown = false;

const verticalSlider = function () {
  imgSlides.forEach(function (slide) {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};

sliderBtn.addEventListener('click', function () {
  if (moveDown) {
    counter -= 2;
    if (counter < 0) {
      counter = 0;
      moveDown = false;
      sliderBtn.querySelector('.support__icon').style.transform = '';
    }
  } else {
    counter += 2;
    if (counter >= imgSlides.length) {
      counter = imgSlides.length - 1;
      moveDown = true;
      sliderBtn.querySelector('.support__icon').style.transform = 'rotate(180deg)';
    }
  }
  verticalSlider();
});