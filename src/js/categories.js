import BookService from './utils/book-service';
import { renderCategoriesList } from './render-categories';

// SerhiiS
import { getCategoryItem } from './best-sellers';
import { createCardsByCategory } from './best-sellers';
// SerhiiS

const categoriesList = document.querySelector('.categories__container');
const CATEGORY_KEY = 'category-name';
const ALL_CATEGORIES = 'all';

const bookService = new BookService();

const onLoad = async () => {
  const categories = await bookService.getCategoryList();
  let selectedCategory = localStorage.getItem(CATEGORY_KEY);
  categoriesList.innerHTML = renderCategoriesList(categories, selectedCategory);

  [...categoriesList.children].map(child => {
    child.addEventListener('click', () => onClick(child));
  });

  let books;

  if (selectedCategory === ALL_CATEGORIES || !selectedCategory) {
    books = await bookService.getTopBooks();
    // SerhiiS
    getCategoryItem(books);
    //
  } else {
    books = await bookService.getBooksByCategory(selectedCategory);
    // SerhiiS
    createCardsByCategory(books);
  }
};
document.addEventListener('DOMContentLoaded', onLoad);

const onClick = async child => {
  const category = child?.dataset.category;
  let selectedCategory = localStorage.getItem(CATEGORY_KEY);
  if (category === selectedCategory) return;

  [...categoriesList.children].map(elem => elem.classList.remove('is-active'));
  child.classList.add('is-active');
  localStorage.setItem(CATEGORY_KEY, `${category}`);

  let books;
  if (category === ALL_CATEGORIES) {
    books = await bookService.getTopBooks();
    // SerhiiS
    getCategoryItem(books);
    //
  } else {
    books = await bookService.getBooksByCategory(category);
    // SerhiiS
    createCardsByCategory(books);
  }
};
