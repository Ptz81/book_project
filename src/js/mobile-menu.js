document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const headerBtn = document.querySelector('.header-btn');

  menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    menuToggle.classList.toggle('js-open');
    menu.classList.toggle('js-open');
    document.body.classList.toggle('lock');
    headerBtn.classList.toggle('show');

  });
});


