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
const avatar = getRef('.header-btn__avatar');
const userPic = avatar.firstElementChild;

const currentUser = getLocalStorageValue('current-user');
if (currentUser) handleLogin(currentUser);

signUpBtn.addEventListener('click', () => {
  acc.currentUser ? acc.logout() : acc.showForm();
});

//
// Events
//

acc.onLogin(handleLogin);
acc.onLogout(handleLogout);

function handleLogin(currentUser) {
  signUpBtn.classList.remove('unregistered');
  signUpBtn.dataset.auth = 'true';
  userBtnCaption.textContent = currentUser.name;
  headerMenu.classList.remove('menu__list--hidden');

  disableElement(bookCardBtn, false);
  applyCurrentUserSettings(currentUser);
}

function handleLogout() {
  signUpBtn.classList.add('unregistered');
  signUpBtn.dataset.auth = '';
  userBtnCaption.textContent = 'Sign In';
  headerMenu.classList.add('menu__list--hidden');
  disableElement(bookCardBtn, true);

  const theme = localStorage.getItem('theme');
  localStorage.clear();
  localStorage.setItem('theme', theme);

  goHome();
}

//
// Helpers
//

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
  // avatar
  userPic.textContent = user.name[0].toUpperCase();
  localStorage.setItem('current-user', JSON.stringify({ name, email }));
  if (shoppingList) localStorage.setItem('book-add', shoppingList);
}
