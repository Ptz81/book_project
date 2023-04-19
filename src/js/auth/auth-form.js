import './_auth-form.scss';
import { isFunc, getRef } from '../utils';
import Backdrop from '../utils/backdrop/backdrop';

const authForm = getRef('.auth-form');
const formMode = getRef('.auth-form__mode');
const submitBtn = getRef('.auth-form__submit');
const nameField = getRef('.auth-form__field[data-name]');
const passInput = getRef('.auth-form__field[data-pass] input');
const showPass = getRef('.auth-form__show-pass input');
const closeBtn = getRef('.auth-form__close');

const DEF_MODE = 'signin';

export default class AuthForm {
  #instance;
  #handleInputChange;
  #handleSubmit;
  #backdrop;

  constructor(mode) {
    if (this.#instance) return this.#instance;

    setFormBaseBehavior(this);
    const formRef = getRef('.auth-form');
    const initialMode = setFormMode(mode) || setFormMode(DEF_MODE);

    this.#backdrop = new Backdrop({ child: authForm, hideOnClick: true });
    this.hide = this.#backdrop.hide.bind(this.#backdrop);
    this.reset = authForm.reset.bind(authForm);

    this.show = function (mode) {
      setFormMode(mode || initialMode);
      fitFormByHeight();
      passInput.type = 'password';
      this.#backdrop.show();
    };

    this.#instance = this;
  }

  get zindex() {
    return this.#backdrop.zindex;
  }

  get mode() {
    return authForm.formMode.value;
  }

  /**
   * @param {callback} handler - handler(formData, targetForm)\
   * @param formData - данные полей формы
   */
  onSubmit(handler) {
    this.#handleSubmit = isFunc(handler) ? handler : null;

    authForm.addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      this.#handleSubmit && this.#handleSubmit(getData(form), form);
    });
  }
}

/**
 *
 * @param {string} mode - 'signin' | 'signout'
 * @returns строку или null, если режим не валиден
 */
function setFormMode(mode) {
  authForm.reset();
  const ref = getRef(`input[value="${mode}"]`);
  ref?.click();
  return ref && mode;
}

function fitFormByHeight() {
  const viewportHeight = document.documentElement.clientHeight;
  const { height } = authForm.getBoundingClientRect();

  authForm.style.cssText =
    height >= viewportHeight
      ? 'top: 10%; transform: translateX(-50%) scale(1);'
      : null;
}

/**
 *
 * @param {*} authFormInstance
 */
function setFormBaseBehavior(authFormInstance) {
  // кнопка закрытия
  closeBtn.addEventListener('click', () => authFormInstance.hide());

  // переключение режима
  formMode.addEventListener('change', handleModeChange);

  // показать/скрыть пароль
  showPass.addEventListener('change', ({ currentTarget }) => {
    passInput.type = currentTarget.checked ? 'text' : 'password';
  });

  // если высота вьюпорта меньше высоты формы - всписываем форму
  window.addEventListener('resize', fitFormByHeight);

  /**
   *
   * @param {*} target - formMode radio
   * @returns
   */
  function handleModeChange({ target }) {
    if (target.nodeName !== 'INPUT') return;
    const isSignInMode = target.value === 'signin';

    // скрываем/показываем поле name
    nameField.style.display = isSignInMode ? 'none' : 'block';

    // отключаем input, чтобы игнорился в getData()
    nameField.firstElementChild.disabled = isSignInMode;

    // если не убрать required на скрытом поле - будет ошибка
    const action = isSignInMode ? 'removeAttribute' : 'setAttribute';
    nameField.firstElementChild[action]('required', '');

    // меянем заголовок кнопки
    submitBtn.textContent = isSignInMode ? 'sign in' : 'sign up';
  }
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
