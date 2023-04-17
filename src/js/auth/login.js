import AuthForm from './auth-form';
import FirebaseAuth from './firebase/auth';
import FirebaseDB from './firebase/db';
import Loader from '../loader/loader';
import { showError, showSuccess } from '../notify';
import { isFunc } from '../utils';

const DEF_USERNAME = 'Anonymous';
const SIGNUP_SUCCESS = 'Glad to welcome you';
const SIGNIN_SUCCESS = 'Welcome back';
const SIGNOUT_SUCCESS = 'See you soon';

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

    this.showForm = authForm.show.bind(authForm);
    this.hideForm = authForm.hide.bind(authForm);
    this.logout = auth.signOut.bind(auth);

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
   * @param {callback} handler - handler()
   */
  onLogout(handler) {
    handleLogout = isFunc(handler) ? handler : null;
  }

  setShoppingList(list) {
    const { id } = currentUser || '';
    if (id) db.write(`users/${id}/shoppingList`, list);
  }
}

function greet({ isNewcomer, name }) {
  showSuccess(`${isNewcomer ? SIGNUP_SUCCESS : SIGNIN_SUCCESS}, ${name}`);
}

/**
 * Вызывается при signOut пользователя из приложения
 */
function handleSignedOut() {
  // чтобы не срабатывало при инициализации firebase auth
  if (!currentUser) return;

  showSuccess(`${SIGNOUT_SUCCESS}, ${currentUser.name}`);
  handleLogout && handleLogout(currentUser);
  currentUser = null;
}

/**
 *
 * Вызывается при клике кнопки на форме
 * @param {object} formData - данные полей формы {name: value,...}
 */
async function handleFormSubmit(formData) {
  try {
    // появится над формой
    loader.show({ zindex: authForm.zindex + 1 });

    await (authForm.mode === 'signup'
      ? handleSignedUp(formData, greet)
      : handleSignedIn(formData, greet));

    // корректнее было бы деоегировать auth.onSignedIn,
    // но в момент ее вызова еще не доступен currentUser
    handleLogin && handleLogin(currentUser);
    authForm.hide();
    authForm.reset();

    // error
  } catch (err) {
    showError(err, { zindex: authForm.zindex });
  } finally {
    loader.hide();
  }
}

/**
 *
 * Регистрирует пользователя, записывая его данные в БД
 * @param {object} formData - данные пользователя из формы {email, name,...}
 */
async function handleSignedUp(formData, callback) {
  const { name, email } = formData;

  const cred = await auth.signUp(formData);
  const id = cred.user.uid;
  const userPath = `users/${id}`;

  // пишем данные нового пользователя в БД
  await db.write(userPath, { name, email, shoppingList: null });

  // обновляем данные о пользователе
  currentUser = { name, email, id, isNewcomer: true };
  isFunc(callback) && callback(currentUser);
}

/**
 *
 * Инициирует вход пользователя, подтягивая его данные из БД
 * @param {object} formData - данные пользователя из формы
 */
async function handleSignedIn(formData, callback) {
  const { name = DEF_USERNAME, email } = formData;

  const cred = await auth.signIn(formData);
  const id = cred.user.uid;
  const userPath = `users/${id}`;

  // запрашиваем данные пользователя из БД
  const storedData = await db.read(userPath);

  // если их там вдруг не оказалось - пишем с дефолтным именем
  if (!storedData) {
    await db.write(userPath, { name, email, shoppingList: null });
  }

  // обновляем данные о пользователе
  currentUser = { name, email, id, ...storedData };
  isFunc(callback) && callback(currentUser);
}
