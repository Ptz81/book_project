// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  

//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();

  
// $(document).ready(function() {
//   $('.menu-toggle').click(function(event) {
//     $('.menu-toggle, .menu').toggleClass('js-open');
//     $('body').toggleClass('lock');
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const headerBtn = document.querySelector('.header-btn');
  // const unregisteredBtn = document.querySelector('.unregistered');

  menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    menuToggle.classList.toggle('js-open');
    menu.classList.toggle('js-open');
    document.body.classList.toggle('lock');
    headerBtn.classList.toggle('show');
    // unregisteredBtn.classList.toggle('show');

  });
});


