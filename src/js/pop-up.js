import BookService from './book-service';
import { showError } from './notify.js';
import UserAccount from './auth/user-account';
import ScrollToggler from './utils/backdrop/toggler';
import { disableElement, fitModalByHeight } from './utils/crutches';

// add/remove book to database
const userAcc = new UserAccount();
const scroll = new ScrollToggler();
const bookSrv = new BookService();

const amazonPic = new URL('../images/shop-icons/amazon.png', import.meta.url);

const applebooksPic = new URL(
  '../images/shop-icons/applebooks.png',
  import.meta.url
);

const bookstore_shopPic = new URL(
  '../images/shop-icons/bookstore.png',
  import.meta.url
);

const modalPopEl = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal');
const popEl = document.querySelector('.pop-info');
const backdropEl = document.querySelector('.backdrop is-hidden');
const popBtn = document.querySelector('.pop__btn');
const popTextEl = document.querySelector('.pop-text');
const backdropBtn = document.querySelector('.backdrop');
const blocBtnEl = document.querySelector('.btn_wrapper');

const REMOVE_FROM_SHOPPINGLIST = 'remove from the shopping list';
const ADD_TO_SHOPPINGLIST = 'Add to shopping list';
const NOTE_BOOK_ADDED =
  'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

let arrayBookIs = [];
let arrayBookShopIs = [];
let arrayBookAdd = [];

export function handleShowPop(event, booksCollection) {
  const getBookId = async id => await booksCollection[id];

  if (event.target.nodeName !== 'IMG') return;

  const infoPopEl = document.querySelector('.pop-info');
  const popId = event.target.id;

  scroll.disable();

  getBookId(popId)
    .then(dataId => {
      const popBook = dataId;
      infoPopEl.innerHTML = '';
      infoPopEl.insertAdjacentHTML(
        'beforeend',
        `<img
        class="photo"
        src="${dataId.book_image || '/src/images/sprite.svg#icon-ukraine'}"
        alt="${dataId.list_name || 'There is no book title'}"
        loading="lazy"
        id="${dataId._id}"
      />

      <div class='pop_wrapper'>
      <h2 class="pop_name">
        ${dataId.list_name || 'There is no book title'}
      </h2>
      <p class="pop_author">${dataId.author || 'The author is unknown'}</p>
      <p class="pop_description">
        ${
          dataId.description ||
          'There is no description <br/><br/>Слава Україні!'
        }
      </p>
      <ul class="pop_shop list"></ul>
      </div>
          `
      );

      const popListEl = document.querySelector('.pop_shop');
      dataId.buy_links.map(el => {
        if (el.name === 'Amazon') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li class="pop_shop-item">
                  <a
                    class="pop_shop__link link amazon-link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_list-img"
                      src="${amazonPic}"
                      alt="amazon_shop_icon"
                    />
                  </a>
                </li>
                  `
          );
        }
        if (el.name === 'Apple Books') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li class="pop_shop-item">
                  <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_list-img"
                      src="${applebooksPic}"
                      alt="applebooks_shop_icon"
                    />
                  </a>
                </li>`
          );
        }
        if (el.name === 'Bookshop') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li class="pop_shop-item">
                  <a
                    class="pop_shop__link link bookshop-link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_list-img"
                      src="${bookstore_shopPic}"
                      alt="bookstore_shop_icon"
                    />
                  </a>
                  </li>
                  `
          );
        }
      });
      toggleModal();

      const bookIsID = dataId._id;
      let bookLocalIs;

      arrayBookIs = JSON.parse(localStorage.getItem('book-list')) || [];
      arrayBookShopIs = JSON.parse(localStorage.getItem('book-add')) || [];

      arrayBookShopIs.map(el => {
        if (el._id === bookIsID) {
          bookLocalIs = el;
        }
      });
      if (!bookLocalIs) {
        arrayBookIs.map(el => {
          if (el._id === bookIsID) {
            bookLocalIs = el;
          }
        });
      }

      if (!bookLocalIs) {
        bookLocalIs = dataId;
        bookLocalIs.add = 'is';

        arrayBookIs.push(bookLocalIs);
        localStorage.setItem('book-list', JSON.stringify(arrayBookIs));
      }
      bookLocalIs = bookLocalIs;

      const popBtn = document.querySelector('.pop__btn');
      if (bookLocalIs.add === 'isAdded') {
        popBtn.innerHTML = REMOVE_FROM_SHOPPINGLIST;
        popTextEl.innerHTML = NOTE_BOOK_ADDED;
        blocBtnEl.style.marginBottom = '6px';
      }

      if (bookLocalIs.add === 'is') {
        popBtn.innerHTML = ADD_TO_SHOPPINGLIST;
        popTextEl.innerHTML = '';
        blocBtnEl.style.marginBottom = '6px';
      }

      return;
    })

    .catch(error => {
      console.log(error);
      showError(error.message);
    });
}
closeModalBtn.addEventListener('click', closeModal);

const handleUseKey = event => {
  if (event.key == 'Escape') {
    closeModal();
  }
};
document.addEventListener('keydown', handleUseKey);

function toggleModal() {
  disableElement(!userAcc.currentUser);
  fitModalByHeight(modalEl);
  modalPopEl.classList.toggle('is-hidden');
}

function closeModal() {
  modalPopEl.classList.add('is-hidden');
  scroll.enable();
}

const closeIfNoModal = e => {
  if (
    e.target !== modalEl &&
    e.target.parentNode !== popEl &&
    e.target.parentNode !== backdropEl &&
    e.target.parentNode !== modalEl &&
    e.target.parentNode !== blocBtnEl &&
    e.target.parentNode.parentNode !== popEl
  ) {
    closeModal();
  }
};
backdropBtn.addEventListener('click', closeIfNoModal);

const handleDoBtn = e => {
  const sourceID = e.target.parentNode.previousElementSibling.firstChild.id;
  let bookLocalSt;

  arrayBookAdd = JSON.parse(localStorage.getItem('book-add')) || [];

  arrayBookAdd.map(el => {
    if (el._id === sourceID) {
      bookLocalSt = el;
    }
  });
  if (!bookLocalSt) {
    arrayBookIs.map(el => {
      if (el._id === sourceID) {
        bookLocalSt = el;
        bookLocalSt.add = 'is';
      }
    });
  }
  if (bookLocalSt.add === 'is') {
    popBtn.innerHTML = REMOVE_FROM_SHOPPINGLIST;
    popTextEl.innerHTML = NOTE_BOOK_ADDED;
    blocBtnEl.style.marginBottom = '6px';

    if (!arrayBookAdd.includes(bookLocalSt) && bookLocalSt.add === 'is') {
      bookLocalSt.add = 'isAdded';
      arrayBookAdd.push(bookLocalSt);
      localStorage.setItem('book-add', JSON.stringify(arrayBookAdd));

      // add book to db
      userAcc.shoppingList.add(bookLocalSt);
    }

    return;
  }
  if (arrayBookAdd.includes(bookLocalSt)) {
    popBtn.innerHTML = ADD_TO_SHOPPINGLIST;
    popTextEl.innerHTML = '';
    const index = arrayBookAdd.indexOf(bookLocalSt);
    if (index !== -1) {
      arrayBookAdd.splice(index, 1);
    }
    bookLocalSt.add = 'is';
    localStorage.setItem('book-add', JSON.stringify(arrayBookAdd));

    // remove book from db
    userAcc.shoppingList.remove(sourceID);

    return;
  }
};
popBtn.addEventListener('click', handleDoBtn);
