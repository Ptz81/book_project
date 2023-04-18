import Loader from '../loader/loader';
import UserAccount from './user-account';

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

acc.onLogin(async currentUser => {
  hideShopBtn(false);
  loginBtn.textContent = currentUser.name;

  console.log(currentUser);
  // console.log(await acc.shoppingList.getAll());
  //console.log(await acc.shoppingList.get(122233));
  //console.log(await acc.shoppingList.get(4));
  // console.log(await acc.shoppingList.getFormattedAll());

  // пишем в базу
  // await acc.shoppingList.add({ ss: 'ssss', _id: 122233 });
  // await acc.shoppingList.add({ ss: 'ssss', _id: 122234 });
  // await acc.shoppingList.add({ ss: 'ssss', _id: 122235 });
  // acc.shoppingList.remove(12223);
});

acc.onLogout(async currentUser => {
  hideShopBtn();
  loginBtn.textContent = LOGIN_BTN_CAPTION;

  await acc.shoppingList.add({ ss: 'ssss', _id: 122235 });

  console.log(currentUser);
});
