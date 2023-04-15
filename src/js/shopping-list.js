const shoppingList = document.querySelector('.shopping-cart__list');

let arrayBookAdd = JSON.parse(localStorage.getItem('book-add')) || [];

const pathToAmazon = new URL(
  '../images/shop-icons/amazon.png',
  import.meta.url
);

const pathAppleBooks = new URL(
  '../images/shop-icons/applebooks.png',
  import.meta.url
);
const pathBookShop = new URL(
  '../images/shop-icons/bookstore.png',
  import.meta.url
);

const pathToDump = new URL('../images/sprite.svg', import.meta.url);

function renderShoppingListMarkUp(books) {
  books.map(
    ({ _id, book_image, title, list_name, description, author, buy_links }) => {
      // console.log(Object.values(buy_links));
      let linkToAmazon = null;
      let linkToAppleBooks = null;
      let linkToBookShop = null;
      for (let i = 0; i < buy_links.length; i++) {
        if (buy_links[i].name === 'Amazon') {
          linkToAmazon = buy_links[i].url;
        } else if (buy_links[i].name === 'Apple Books') {
          linkToAppleBooks = buy_links[i].url;
        } else if (buy_links[i].name === 'Bookshop') {
          linkToBookShop = buy_links[i].url;
        }
      }

      shoppingList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="shopping-cart__item">
            <img src="${book_image}" alt="${title}" id="${_id}" class="shopping-cart__book-img">
            <div class="shopping-cart__main-info">
            <h3 class="shopping-cart__book-title">${title}</h3>
            <p class="shopping-cart__book-category">${list_name}</p>
            </div>
            <button class="shopping-cart__btn-delete">
                <svg class="delete-icon" width="100%" height="100%">
                  <use href="${pathToDump}#icon-dump"></use>
                </svg>
            </button>
              <p class="shopping-cart__book-description">${description}</p>
              <p class="shopping-cart__book-author">${author}</p>
            <div class="shopping-cart__links">
              <a 
                  href="${linkToAmazon}"
                  class="shopping-cart__book-shop amazon-link"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
              <img src="${pathToAmazon}" alt="amazon" class="store-icon">
              </a>
              <a 
                  href="${linkToAppleBooks}"
                  class="shopping-cart__book-shop"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
              <img src="${pathAppleBooks}" alt="AppleBooks" class="store-icon">
              </a>
              <a 
                  href="${linkToBookShop}"
                  class="shopping-cart__book-shop"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
            
            <img src="${pathBookShop}" alt="BookStore" class="store-icon">
            </a>
            </div>
            
            
        </li>
        `
      );
    }
  );
}
isAddedBooks(arrayBookAdd);
// createEmptyCart();

function isAddedBooks(array) {
  if (array.length > 0) {
    renderShoppingListMarkUp(array);
  } else {
    createEmptyCart();
  }
}

function createEmptyCart() {
  const shoppingCart = document.querySelector('.shopping-cart');
  const pathToBook = new URL('../images/shop-icons/books.png', import.meta.url);
  shoppingCart.insertAdjacentHTML(
    'beforeend',
    `
        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>
<img src = "${pathToBook}" class="shopping-cart__warning-img"></div>
        `
  );
}
// try {
//   const deleteBtn = document.querySelector('.shopping-cart__btn-delete');
//   console.log(deleteBtn);
// } catch {}
function clearMarkup() {
  shoppingList.innerHTML = '';
}
// function handleDeleteSelectedItem() {
//   console.log('text');

//   clearMarkup();
//   book.splice(1, 1);
//   renderShoppingListMarkUp(book);
//   console.log(book);
// }
