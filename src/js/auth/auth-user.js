import Loader from '../loader/loader';
import UserAccount from './login';

const loader = new Loader();
const acc = new UserAccount();

const loginBtn = document.querySelector('.header-btn');
const shopBtn = document.querySelector('.nav .shop-link');
const LOGIN_BTN_CAPTION = 'Sign In';

const hideShopBtn = (hide = true) =>
  (shopBtn.style.display = hide ? 'none' : 'block');

hideShopBtn();
loginBtn.textContent = LOGIN_BTN_CAPTION;

loginBtn.addEventListener('click', target => {
  acc.currentUser ? acc.logout() : acc.showForm();
});

acc.onLogin(currentUser => {
  hideShopBtn(false);
  loginBtn.textContent = currentUser.name;
  //console.log(currentUser);
});

acc.onLogout(() => {
  hideShopBtn();
  loginBtn.textContent = LOGIN_BTN_CAPTION;
});
