import './_auth-form.scss';

const authForm = document.querySelector('.auth-form');
const formType = document.querySelector('.auth-form__type');
const submitBtn = document.querySelector('.auth-form__submit');
const nameField = document.querySelector('.auth-form__field[data-name]');
const passInput = document.querySelector('.auth-form__field[data-pass] input');
const signInRadio = document.querySelector('.auth-form__radio[data-signin]');
const showPass = document.querySelector('.auth-form__show-pass input');
const closeBtn = document.querySelector('.auth-form__close');

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
