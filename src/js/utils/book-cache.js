import {
  hasPageBeenReloaded,
  getLocalStorageValue,
  getProp,
  setProp,
} from './utils';

const LS_CACHE_KEY = 'book-service-cache';

// todo: можно сохранять top-books и тп объектом, а отдавать массивом(?)
const CACHE_INITIAL = {
  ['category-list']: null,
  ['top-books']: null,
  ['category']: {},
  ['viewed-books']: {},
};

export default class BookCache {
  #cache;
  #instance;

  constructor() {
    if (this.#instance) return this.#instance;

    this.restore();

    // сохраняем кеш при переходе на другую страницу
    addEventListener('beforeunload', e => {
      this.#cache
        ? localStorage.setItem(LS_CACHE_KEY, JSON.stringify(this.#cache))
        : localStorage.removeItem(LS_CACHE_KEY);
    });

    this.#instance = this;
  }

  restore() {
    if (this.#cache) return;

    // если страница НЕ перезагружена,
    // а был, например, переход с шоппинглиста -
    // восстанавливаем кеш из localStorage
    if (!hasPageBeenReloaded()) {
      this.#cache = getLocalStorageValue(LS_CACHE_KEY);
    }

    this.#cache = this.#cache || CACHE_INITIAL;
    localStorage.removeItem(LS_CACHE_KEY);
  }

  set(path, value) {
    setProp(this.#cache, path, value);
  }

  get(path) {
    return getProp(this.#cache, path);
  }

  // todo: может лучше строить общий кеш книг по id
  getBook(bookId) {
    let found;
    const finder = book => book._id === bookId;
    const viewed = this.#cache['viewed-books'];
    const top = this.#cache['top-books'];
    const category = Object.values(this.#cache['category']);

    // ищем в просмотренных
    found = viewed[bookId];
    // ищем в top-books
    if (!found) top?.some(({ books }) => (found = books.find(finder)));
    // ищем в category
    if (!found) category?.some(books => (found = books.find(finder)));
    // добавляем в просмотренные
    if (found) viewed[found._id] = found;

    return found;
  }
}
