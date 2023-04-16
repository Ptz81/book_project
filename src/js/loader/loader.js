// todo: показывать не сразу а с debounce

import './_loader.scss';
import Backdrop from '../backdrop/backdrop';

let backdrop;
let instance;

export default class Loader {
  constructor() {
    if (instance) return instance;

    const spinner = makeSpinnerPetals('.lds-spinner');
    backdrop = new Backdrop({ child: spinner });

    this.show = backdrop.show.bind(backdrop);
    this.hide = backdrop.hide.bind(backdrop);

    instance = this;
  }
}

/**
 *
 * @param {string} classSelector - селектор класса спиннера
 * @returns элемент спиннер или null
 */
function makeSpinnerPetals(classSelector) {
  const INITIAL_DELAY = -1.1;

  const spinner = document.querySelector(classSelector);
  if (!spinner) return null;

  // рендерим лепестки
  spinner.insertAdjacentHTML('afterbegin', '<div></div>'.repeat(12));

  // ставим стили для них
  Array.from(spinner.children).forEach(({ style }, idx) => {
    style.cssText = `
      transform: rotate(${idx * 30}deg);
      animation-delay: ${INITIAL_DELAY + idx / 10}s
    `;
  });

  return spinner;
}
