let backdrop;
let instance;

export default class Loader {
  constructor() {
    if (instance) return instance;
    instance = this;

    backdrop = document.querySelector('[data-backdrop]');

    // добавляем разметку
    const spinner = backdrop.querySelector('.lds-spinner');
    spinner.insertAdjacentHTML('afterbegin', '<div></div>'.repeat(12));
  }

  show() {
    backdrop.classList.remove('js-backdrop--hidden');
  }

  hide() {
    backdrop.classList.add('js-backdrop--hidden');
  }
}
