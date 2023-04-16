// todo: валидация полей формы
// required мождно отключить и js валидацию only делать
// С выводом сообщений об ошибк/ворн

import './_auth-form.scss';
import utils from '../utils';
import Backdrop from '../backdrop/backdrop';

const { getRef, isFunc, getZindex } = utils;

const authForm = getRef('.auth-form');
const formMode = getRef('.auth-form__mode');
const submitBtn = getRef('.auth-form__submit');
const nameField = getRef('.auth-form__field[data-name]');
const passInput = getRef('.auth-form__field[data-pass] input');
const showPass = getRef('.auth-form__show-pass input');
const closeBtn = getRef('.auth-form__close');

const DEF_MODE = 'signin';

let instance;
let handleInputChange;
let handleSubmit;

export default class AuthForm {
  constructor(initialMode) {
    if (instance) return instance;

    const backdrop = new Backdrop({ child: authForm, hideOnClick: true });
    this.show = backdrop.show.bind(backdrop);
    this.hide = backdrop.hide.bind(backdrop);
    this.reset = authForm.reset.bind(authForm);

    setFormBaseBehavior();

    (
      authForm.querySelector(`input[value="${initialMode}"]`) ||
      authForm.querySelector(`input[value="${DEF_MODE}"]`)
    ).click();

    instance = this;
  }

  get zindex() {
    return getZindex(authForm);
  }

  get mode() {
    return authForm.formMode.value;
  }

  // onChange(handler) {
  //   handleInputChange = isFunc(handler) ? handler : null;

  //   authForm.addEventListener('change', ({ target }) => {
  //     target.nodeName === 'INPUT' &&
  //       handleInputChange &&
  //       handleInputChange(target);
  //   });
  // }

  onSubmit(handler) {
    handleSubmit = isFunc(handler) ? handler : null;

    authForm.addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      handleSubmit && handleSubmit(getData(form), form);
    });
  }
}

function setFormBaseBehavior() {
  // кнопка закрытия
  closeBtn.addEventListener('click', () => instance.hide());

  // переключение режима
  formMode.addEventListener('change', handleModeChange);

  // показать/скрыть пароль
  showPass.addEventListener('change', ({ currentTarget }) => {
    passInput.type = currentTarget.checked ? 'text' : 'password';
  });
}

/**
 *
 * @param {*} target - formMode radio
 * @returns
 */
function handleModeChange({ target }) {
  if (target.nodeName !== 'INPUT') return;
  const isSignInMode = target.value === 'signin';

  // скрываем/показываем поле name, отключаем input, чтобы игнорился в getData()
  nameField.style.display = isSignInMode ? 'none' : 'block';
  nameField.firstElementChild.disabled = isSignInMode;

  // если не убрать required на скрытом поле - будет ошибка
  const action = isSignInMode ? 'removeAttribute' : 'setAttribute';
  nameField.firstElementChild[action]('required', '');

  // меянем заголовок кнопки
  submitBtn.textContent = isSignInMode ? 'sign in' : 'sign up';
}

/**
 *
 * @param {*} form - целевая форма
 * @returns данные полей формы {name: value,...}
 */
function getData(form) {
  const entries = Array.from(new FormData(form));
  return entries.reduce((res, [name, value]) => {
    res[name] = value;
    return res;
  }, {});
}
