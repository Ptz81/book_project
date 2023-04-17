import { pathToBook } from './paths';

import { renderShoppingListMarkUp } from './render-markup';

// import { createEmptyCart} from './create-markup';

const shoppingCart = document.querySelector('.shopping-cart');

export function isAddedBooks(array) {
  if (array.length > 0) {
    renderShoppingListMarkUp(array);
  } else {
    createEmptyCart();
  }
}

export function createEmptyCart() {
  shoppingCart.insertAdjacentHTML(
    'beforeend',
    `
        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>
<img src = "${pathToBook}" class="shopping-cart__warning-img"></div>
        `
  );
}