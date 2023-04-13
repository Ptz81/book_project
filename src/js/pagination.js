import Pagination from 'tui-pagination';
import BookService from './book-service';

const bookService = new BookService();

const pagination = new Pagination('tui-pagination-container', {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
});

pagination.on('afterMove', async (e) => {
  const page = e.page;
  const books = await bookService.getBooksByCategory(category, page);
  renderBooks(books);
});

async function renderBooks(category, page = 1) {
  const books = await bookService.getBooksByCategory(category, page);
  const totalBooksCount = books?.totalItems;
  // renderBooks
  // ...
  pagination.reset({
    totalItems: totalBooksCount,
  });
}

// function renderBooks(category, page = 1) {
//   bookService.getBooksByCategory(category, page)
//     .then(books => {
//       const totalBooksCount = books?.totalItems;
//       const bookListEl = document.getElementById('book-list');
//       bookListEl.innerHTML = '';
//       books.items.forEach(book => {
//         const bookEl = document.createElement('div');
//         bookEl.classList.add('book');
//         bookEl.innerHTML = `
//           <img src="${book.coverImage}" alt="${book.title}" />
//           <h2>${book.title}</h2>
//           <p>by ${book.author}</p>
//           <p>${book.description}</p>
//           <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
//         `;
//         bookListEl.appendChild(bookEl);
//       });
//       pagination.reset({
//         totalItems: totalBooksCount,
//       });
//     })
//     .catch(error => console.error(error));
// }
