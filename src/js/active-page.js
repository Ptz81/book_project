

// const currentPath = window.location.pathname;
// const menuLinks = document.querySelectorAll('.nav-link');

// menuLinks.forEach(link => {
//   if (link.getAttribute('href') === currentPath) {
//     link.classList.add('current');
//   } else {
//     link.classList.remove('current');
//   }
// });

// // Перевірка, чи поточний шлях є домашньою сторінкою
// const homeLink = document.querySelector('.nav-link[href="./index.html"]');
// if (currentPath === '/' && homeLink) {
//   homeLink.classList.add('current');
// }

// window.addEventListener('DOMContentLoaded', () => {
//   const menuLinks = document.querySelectorAll('.nav-link');
//   menuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       menuLinks.forEach(link => {
//         link.classList.remove('current');
//       });
//       link.classList.add('current');
//     });
//   });
// });



const currentPath = window.location.pathname;
const menuLinks = document.querySelectorAll('.nav-link');

// Отримання першого елемента меню
const firstMenuLink = document.querySelector('.nav-link');

// Встановлення класу current на першому елементі меню
if (currentPath === '/' && firstMenuLink) {
  firstMenuLink.classList.add('current');
}

menuLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('current');
  } else {
    link.classList.remove('current');
  }
});

// Перевірка, чи поточний шлях є домашньою сторінкою
const homeLink = document.querySelector('.nav-link[href="./index.html"]');
if (currentPath === '/' && homeLink) {
  homeLink.classList.add('current');
}

window.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(link => {
        link.classList.remove('current');
      });
      link.classList.add('current');
    });
  });
});