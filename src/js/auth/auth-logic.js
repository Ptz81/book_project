import UserAccount from './user-account';
import { getRef } from '../utils';
import { disableElement } from '../utils/crutches';

const acc = new UserAccount();

const signUpBtn = getRef('.header-btn');
const userBtnCaption = getRef('.header-btn__caption');
const headerMenu = getRef('.menu__list');
const bookCardBtn = getRef('.pop__btn');
const bookLink = getRef('.book__link');
const profileMenu = getRef('.profile-menu');

const currentUser = getLocalStorageValue('current-user');
if (currentUser) handleLogin(currentUser);

signUpBtn.addEventListener('click', () => {
  acc.currentUser ? acc.logout() : acc.showForm();
});

// signUpBtn.addEventListener('mouseenter', () => {
//   userBtnCaption.textContent = 'Logout';
// });

// signUpBtn.addEventListener('mouseleave', () => {
//   userBtnCaption.textContent = acc.currentUser.name;
// });

// function showProfileMenu() {
//   const markup = `
//     <span>${acc.currentUser.email}</span>
//     <a href='./'>Home</a>
//     <a href='./shopping-list.html'>Shopping list</a>
//     <a href='#'>Logout</a>`;

//   profileMenu.innerHTML = markup;
// }

//
// Events
//

acc.onLogin(handleLogin);
acc.onLogout(handleLogout);

function handleLogin(currentUser) {
  signUpBtn.classList.remove('unregistered');
  userBtnCaption.textContent = currentUser.name;
  headerMenu.classList.remove('menu__list--hidden');
  disableElement(bookCardBtn, false);
  applyCurrentUserSettings(currentUser);
}

function handleLogout() {
  signUpBtn.classList.add('unregistered');
  userBtnCaption.textContent = 'Sign In';
  headerMenu.classList.add('menu__list--hidden');
  disableElement(bookCardBtn, true);
  localStorage.clear();
  goHome();
}

function getLocalStorageValue(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function goHome() {
  const homePath =
    document.location.hostname === 'localhost' ? '/' : '/book_project/';
  if (document.location.pathname !== homePath) {
    document.location.href = './';
  }
}

function applyCurrentUserSettings(user) {
  const { name, id, email, shoppingList } = user;
  localStorage.setItem('current-user', JSON.stringify({ name, email }));
  if (shoppingList) localStorage.setItem('book-add', shoppingList);
}

function removeFromStorage(values) {
  Array.from(values || '').forEach(key => localStorage.removeItem(key));
}
