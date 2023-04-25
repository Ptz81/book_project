import axios from 'axios';
import Loader from '../loader/loader';
import BookCache from './book-cache';

const loader = new Loader();
const cache = new BookCache();

const LOADER_DELAY = 0;
const BASE_URL = 'https://books-backend.p.goit.global/books';

//
// BookService
//

export default class BookService {
  #instance;
  static #BASE_URL = BASE_URL;

  constructor() {
    if (this.#instance) return this.#instance;
    this.#instance = this;
  }

  async #fetchBooks(res, params) {
    try {
      const p = Object.entries(params || '')
        ?.map(([name, value]) => `${name}=${value}`)
        .join('&');

      const url = encodeURI(
        `${BookService.#BASE_URL}/${res}${p ? `/?${p}` : ''}`
      );

      // показываем лоадер
      loader.show({ delay: LOADER_DELAY });
      const { data } = await axios.get(url);

      return data;

      // error
    } catch (err) {
      throw new FetchError(err);
      //
    } finally {
      loader.hide();
    }
  }

  async getCategoryList({ useCache = true } = {}) {
    let cached = useCache && cache?.get('category-list');
    const res = cached || (await this.#fetchBooks('category-list'));
    cache?.set('category-list', res);

    return res;
  }

  async getTopBooks({ useCache = true } = {}) {
    let cached = useCache && cache?.get('top-books');
    const res = cached || (await this.#fetchBooks('top-books'));
    cache?.set('top-books', res);

    return res;
  }

  async getBooksByCategory(category, { useCache = true } = {}) {
    let cached = useCache && cache?.get(`category/${category}`);
    const res = cached || (await this.#fetchBooks('category', { category }));
    cache?.set(`category/${category}`, res);

    return res;
  }

  async getBooksById(bookId, { useCache = true } = {}) {
    let cached = useCache && cache?.getBook(bookId);
    return cached || (await this.#fetchBooks(bookId));
  }
}

//
// Helpers
//

class FetchError extends Error {
  constructor(err) {
    super(err.message);

    this.name = 'FetchError';
    this.code = err.code;
    this.response = {
      status: err.response?.status,
      statusText: err.response?.statusText,
    };
  }
}
