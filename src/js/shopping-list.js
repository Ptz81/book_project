import { handleCloseCard } from './shopping-list/delete-card';

import { isAddedBooks } from './shopping-list/create-markup';

const shoppingList = document.querySelector('.shopping-cart__list');

let arrayBookAdd = JSON.parse(localStorage.getItem('book-add')) || [];

isAddedBooks(arrayBookAdd);

shoppingList.addEventListener('click', handleCloseCard);