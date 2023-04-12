import '../sass/components/_loader.scss';

let backdrop;
let instance;

export default class Loader {
  constructor() {
    if (instance) return instance;
    instance = this;

    backdrop = document.querySelector('[data-backdrop]');
    makeSpinner(backdrop);
  }

  show() {
    backdrop.classList.remove('js-backdrop--hidden');
  }

  hide() {
    backdrop.classList.add('js-backdrop--hidden');
  }
}

function makeSpinner(backdrop) {
  const INITIAL_DELAY = -1.1;

  const spinner = backdrop.querySelector('.lds-spinner');
  spinner.insertAdjacentHTML('afterbegin', '<div></div>'.repeat(12));

  Array.from(spinner.children).forEach(({ style }, idx) => {
    style.cssText = `
      transform: rotate(${idx * 30}deg);
      animation-delay: ${INITIAL_DELAY + idx / 10}s
    `;
  });
}
