import { pathToAmazon, pathAppleBooks, pathBookShop, pathToDump } from './paths';

const shoppingList = document.querySelector('.shopping-cart__list');

export function renderShoppingListMarkUp(books) {
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
            <img src="${book_image || '/src/images/sprite.svg#icon-ukraine'}" alt="${title || 'There is no book title'}" id="${_id}" class="shopping-cart__book-img">
            <div class="shopping-cart__main-info">
            <h3 class="shopping-cart__book-title">${title || 'There is no book title'}</h3>
            <p class="shopping-cart__book-category">${list_name || 'There is no book title'}</p>
            </div>
            <button class="shopping-cart__btn-delete">
                <svg class="delete-icon" width="100%" height="100%">
                  <use href="${pathToDump}#icon-dump"></use>
                </svg>
            </button>
              <p class="shopping-cart__book-description">${description ||
          'There is no description <br/><br/>Слава Україні!<br/>Смерть ворогам!'}</p>
              <p class="shopping-cart__book-author">${author || 'The author is unknown'}</p>
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