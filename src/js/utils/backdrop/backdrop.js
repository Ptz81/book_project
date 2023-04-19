import './_backdrop.scss';
import ScrollToggler from './toggler';
import { getZindex, isInt } from '../../utils';

const scroll = new ScrollToggler();

// <div data-backdrop [data-hidden]>
//   {child}
// </div>

export default class Backdrop {
  #backdrop;

  constructor({ child, hideOnClick } = {}) {
    this.#backdrop = child?.closest('[data-backdrop]');

    if (hideOnClick) {
      // закрываем при клике на сам бекдроп
      this.#backdrop.addEventListener(
        'mousedown',
        e => e.target === e.currentTarget && this.hide()
      );
    }
  }

  get ref() {
    return this.#backdrop;
  }

  get zindex() {
    return getZindex(this.#backdrop);
  }

  set zindex(v) {
    if (isInt(v)) this.#backdrop.style.zIndex = `${v}`;
  }

  show() {
    scroll.disable();
    this.#backdrop.removeAttribute('data-hidden');
  }

  hide() {
    scroll.enable();
    this.#backdrop.setAttribute('data-hidden', '');
  }
}
