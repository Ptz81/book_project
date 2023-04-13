const btnToTopPage = document.querySelector('.scroll__up');

function scrollToTopPage() {
  window.onscroll = function () {
    scrollFunction();
  };
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTopPage.style.display = 'flex';
  } else {
    btnToTopPage.style.display = 'none';
  }
}

scrollToTopPage();
