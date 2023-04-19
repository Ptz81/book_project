import UserAccount from './user-account';
import { getRef } from '../utils';

const acc = new UserAccount();

const signUpBtn = getRef('.header-btn');
const userBtnCaption = getRef('.header-btn__caption');
const headerMenu = getRef('.menu__list');

const currentUser = getLocalStorageValue('current-user');
if (currentUser) handleLogin(currentUser);

signUpBtn.addEventListener('click', () => {
  acc.currentUser ? showProfileMenu() : acc.showForm();
});

function showProfileMenu() {
  acc.logout();
}

// Events

acc.onLogin(handleLogin);
acc.onLogout(handleLogout);

function handleLogin(currentUser) {
  signUpBtn.classList.remove('unregistered');
  userBtnCaption.textContent = currentUser.name;
  headerMenu.classList.remove('menu__list--hidden');
  setCurrentUser(currentUser);
}

function handleLogout() {
  signUpBtn.classList.add('unregistered');
  userBtnCaption.textContent = 'Sign Up';
  headerMenu.classList.add('menu__list--hidden');
  localStorage.removeItem('current-user');
  localStorage.removeItem('category-name');
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
  const homePath = '/book_project/'; // '/'
  if (document.location.pathname !== path) {
    document.location.href = './';
  }
}

function setCurrentUser(user) {
  const { name, id, email, shoppingList } = user;
  localStorage.setItem('current-user', JSON.stringify({ name, id, email }));
  localStorage.setItem('shopping-list-db-test', shoppingList);
  // localStorage.setItem('book-add', shoppingList);
}
