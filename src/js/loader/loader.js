// todo: если для модалки показать лоадер - скролит на самый топ

import './_loader.scss';
import Backdrop from '../utils/backdrop/backdrop';
import { isInt } from '../utils/utils';

let backdrop;
let instance;
let timerId;

export default class Loader {
  constructor() {
    if (instance) return instance;

    const spinner = makeSpinnerPetals('.lds-spinner');
    backdrop = new Backdrop({ child: spinner, hideOnClick: false });

    instance = this;
  }

  show({ zindex, delay } = {}) {
    this.zindex = zindex;

    if (isInt(delay) && delay > 0) {
      timerId = setTimeout(() => backdrop.show(), delay);
    } else {
      backdrop.show();
    }
  }

  hide() {
    timerId = clearTimeout(timerId);
    backdrop.hide();
  }

  get zindex() {
    return backdrop.zindex;
  }

  set zindex(v) {
    backdrop.zindex = v;
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
