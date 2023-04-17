import './scroll-off.scss';

const root = document.documentElement;
const body = document.body;

let instance;
let counter = 0;

export default class ScrollToggler {
  constructor() {
    if (instance) return instance;
    instance = this;
  }

  disable() {
    // запоминаем позицию скрола
    root.style.setProperty('--scroll-top', window.pageYOffset);
    body.classList.add('scroll-off');

    counter++;
  }

  enable() {
    // не включаем скролл, если он отключался неединожды
    if (--counter < 0) counter = 0;
    if (counter) return;

    body.classList.remove('scroll-off');
    const top = root.style.getPropertyValue('--scroll-top');

    // предотвращаем автоскролинг
    root.style.scrollBehavior = 'auto';
    scrollTo({ top });
    root.style.removeProperty('scroll-behavior');
  }
}
