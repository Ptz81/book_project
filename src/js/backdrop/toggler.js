import './scroll-off.scss';

let instance;
const root = document.documentElement;
const body = document.body;

export default class ScrollToggler {
  constructor() {
    if (instance) return instance;
    instance = this;
  }

  disable() {
    // запоминаем позицию скрола
    root.style.setProperty('--scroll-top', window.pageYOffset);
    body.classList.add('scroll-off');
  }

  enable() {
    body.classList.remove('scroll-off');
    const top = root.style.getPropertyValue('--scroll-top');

    // предотвращаем автоскролинг
    root.style.scrollBehavior = 'auto';
    scrollTo({ top });
    root.style.removeProperty('scroll-behavior');
  }
}
