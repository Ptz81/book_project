const btnToTopPage = document.querySelector('.scroll__up');

const btnVisibility = () => {
  if (window.scrollY > 100) {
    btnToTopPage.style.visibility = 'visible';
  } else {
    btnToTopPage.style.visibility = 'hidden';
  }
};

document.addEventListener('scroll', () => {
  btnVisibility();
});

btnToTopPage.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
