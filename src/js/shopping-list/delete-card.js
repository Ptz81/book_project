const shoppingList = document.querySelector('.shopping-cart__list');

import { isAddedBooks } from './create-markup';
import UserAccount from '../auth/user-account';

const userAcc = new UserAccount();

function clearMarkup() {
  shoppingList.innerHTML = '';
}

let arrayBookAdd = JSON.parse(localStorage.getItem('book-add')) || [];

export function handleCloseCard(event) {
  event.preventDefault();
  let bookLocalSt = null;
  if (event.target.closest('button')?.nodeName !== 'BUTTON') {
    return;
  }
  const elToDelete =
    event.target.closest('button').parentNode.firstElementChild.id;
  console.log(elToDelete);
  arrayBookAdd.map(el => {
    if (el._id === elToDelete) {
      bookLocalSt = el;
    }
  });
  const index = arrayBookAdd.indexOf(bookLocalSt);
  console.log(index);

  if (index !== -1) {
    arrayBookAdd.splice(index, 1);
    clearMarkup();
    userAcc.shoppingList.remove(bookLocalSt);
  }
  localStorage.setItem('book-add', JSON.stringify(arrayBookAdd));
  isAddedBooks(arrayBookAdd);
}
