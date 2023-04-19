import AuthForm from './auth-form';
import FirebaseAuth from './firebase/auth';
import FirebaseDB from './firebase/db';
import ShoppingList from './shopping-db';
import Loader from '../loader/loader';
import { isFunc } from '../utils';
import { showError, showSuccess } from '../notify';

const DEF_USERNAME = 'Anonymous';
const SIGNUP_SUCCESS = 'Glad to welcome you';
const SIGNIN_SUCCESS = 'Welcome back';
const SIGNOUT_SUCCESS = 'See you soon';
const INVALID_PASSWORD = 'Password should be at least 6 characters';

let instance;
let currentUser;
let handleLogin;
let handleLogout;

const authForm = new AuthForm();
const auth = new FirebaseAuth();
const db = new FirebaseDB(auth);
const loader = new Loader();

export default class UserAccount {
  constructor() {
    if (instance) return instance;

    authForm.onSubmit(handleFormSubmit);
    auth.onSignedOut(handleSignedOut);
    auth.onSignedIn(handleSignedIn);

    this.showForm = authForm.show.bind(authForm);
    this.hideForm = authForm.hide.bind(authForm);
    this.logout = auth.signOut.bind(auth);
    this.shoppingList = new ShoppingList(auth);

    instance = this;
  }

  get currentUser() {
    return currentUser;
  }
  /**
   * @param {callback} handler - handler(currentUser)
   */
  onLogin(handler) {
    handleLogin = isFunc(handler) ? handler : null;
  }
  /**
   * @param {callback} handler - handler({ email, id, name })
   */
  onLogout(handler) {
    handleLogout = isFunc(handler) ? handler : null;
  }
}

//
// Helpers
//

function greet({ isNewcomer, name }) {
  showSuccess(`${isNewcomer ? SIGNUP_SUCCESS : SIGNIN_SUCCESS}, ${name}`);
}

function handleSignedOut() {
  // чтобы не срабатывало при инициализации firebase app
  if (currentUser) showSuccess(`${SIGNOUT_SUCCESS}, ${currentUser.name}`);

  // кидаем из currentUser статичную инфу для статистики
  // снимок shoppingList-а вероятно уже не актуален
  const { email, id, name } = currentUser || '';
  handleLogout && handleLogout();
  currentUser = null;
}

/**
 *
 * @param {*} user - данные авторизованного юзера
 */
async function handleSignedIn(user) {
  const { mode, data } = authForm;

  // данные пришли при сабмите
  if (data) {
    mode === 'signin'
      ? await _handleSignedIn(user.uid, data)
      : await _handleSignedUp(user.uid, data);

    greet(currentUser);

    // данные пришли в реузльтате инициализации
  } else {
    await _handleSignedIn(user.uid, user);
  }

  // пользовательский обработчик
  handleLogin && handleLogin(currentUser);
}

/**
 *
 * @param {*} id
 * @param {*} data
 */
async function _handleSignedUp(id, data) {
  const { name, email } = data;
  // пишем данные нового пользователя в БД
  await db.write(`users/${id}`, { name, email, shoppingList: {} });
  currentUser = { name, email, id, isNewcomer: true };
}

/**
 *
 * @param {*} id
 * @param {*} data
 */
async function _handleSignedIn(id, data) {
  const { name = DEF_USERNAME, email } = data;

  // запрашиваем данные пользователя из БД
  // если их там не оказалось - пишем его в БД с дефолтным именем
  const storedData = await db.read(`users/${id}`);
  if (!storedData) {
    await db.write(`users/${id}`, { name, email, shoppingList: {} });
  }

  // сериализованный массив списка книг
  const shoppingList = ShoppingList.formatList(storedData?.shoppingList);
  currentUser = { name, email, id, ...storedData, shoppingList };
}

/**
 *
 * Вызывается при клике кнопки на форме
 * @param {object} formData - данные полей формы {name: value,...}
 */
async function handleFormSubmit(formData) {
  authForm.data = formData;

  try {
    // появится над формой
    loader.show({ zindex: authForm.zindex + 1 });

    authForm.mode === 'signup'
      ? await auth.signUp(formData)
      : await auth.signIn(formData);

    authForm.data = null;
    authForm.hide();
    authForm.reset();

    // error
  } catch (err) {
    if (err.code === 'auth/weak-password') err.message = INVALID_PASSWORD;
    showError(err, { zindex: authForm.zindex });
    //
  } finally {
    loader.hide();
  }
}
