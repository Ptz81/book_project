import './_backdrop.scss';
import ScrollToggler from './toggler';

const scroll = new ScrollToggler();

// <div data-backdrop [hidden]>
//   {child}
// </div>

export default class Backdrop {
  #backdrop;

  constructor({ child, hideOnClick } = {}) {
    this.#backdrop = child?.closest('[data-backdrop]');

    if (hideOnClick) {
      // закрываем при клике на сам бекдроп
      this.#backdrop.addEventListener(
        'click',
        e => e.target === e.currentTarget && this.hide()
      );
    }
  }

  show() {
    scroll.disable();
    this.#backdrop.removeAttribute('hidden');
  }

  hide() {
    scroll.enable();
    this.#backdrop.setAttribute('hidden', '');
  }
}
