import './_auth-form.scss';
import utils from '../utils';

const { getRef } = utils;

const authForm = getRef('.auth-form');
const formType = getRef('.auth-form__type');
const submitBtn = getRef('.auth-form__submit');
const nameField = getRef('.auth-form__field[data-name]');
const passInput = getRef('.auth-form__field[data-pass] input');
const signInRadio = getRef('.auth-form__radio[data-signin]');
const showPass = getRef('.auth-form__show-pass input');
const closeBtn = getRef('.auth-form__close');

formType.addEventListener('change', ({ target }) => {
  if (target.nodeName !== 'INPUT') return;

  // скрываем/показываем поле name
  nameField.style.display = signInRadio.checked ? 'none' : 'block';

  // если не убрать required на скрытом поле - будет ошибка
  const action = signInRadio.checked ? 'removeAttribute' : 'setAttribute';
  nameField.firstElementChild[action]('required', '');

  // меянем заголовок кнопки
  submitBtn.textContent = signInRadio.checked ? 'sign in' : 'sign up';
});

showPass.addEventListener('change', ({ currentTarget }) => {
  passInput.type = currentTarget.checked ? 'text' : 'password';
});

authForm.addEventListener('submit', e => {
  e.preventDefault();
});

// document.body.addEventListener('click', () =>
//   document.documentElement.classList.toggle('theme-dark')
// );
