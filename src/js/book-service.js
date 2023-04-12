import axios from 'axios';

let instance;

export default class BookService {
  static BASE_URL = 'https://books-backend.p.goit.global/books';

  constructor() {
    if (instance) return instance;
    instance = this;
  }

  async #fetchBooks(res, params) {
    try {
      const p = Object.entries(params || '')
        ?.map(([name, value]) => `${name}=${value}`)
        .join('&');

      const url = encodeURI(
        `${BooksService.BASE_URL}/${res}${p ? `/?${p}` : ''}`
      );

      const resp = await axios.get(url);

      return resp.data;

      // error
    } catch (axiosError) {
      const error = new Error(axiosError.message);

      error.name = axiosError.name;
      error.code = axiosError.code;
      error.response = {
        status: axiosError.response?.status,
        statusText: axiosError.response?.statusText,
      };

      throw error;
    }
  }

  async getCategoryList() {
    return await this.#fetchBooks(`category-list`);
  }

  async getTopBooks() {
    return await this.#fetchBooks(`top-books`);
  }

  async getBooksByCategory(category) {
    return await this.#fetchBooks(`category`, { category });
  }

  async getBooksById(bookId) {
    return await this.#fetchBooks(bookId);
  }
}
