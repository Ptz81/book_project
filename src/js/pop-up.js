import BookService from './book-service';
const bookTopAPI = new BookService();
import { showError } from './notify.js';

const amazonPic = new URL('../images/shop-icons/amazon.jpg', import.meta.url);
const applebooksPic = new URL(
  '../images/shop-icons/applebooks.jpg',
  import.meta.url
);
const bookstore_shopPic = new URL(
  '../images/shop-icons/bookstore.jpg',
  import.meta.url
);

// import applebooksPic from '../images/shop-icons/applebooks.jpg';
// import applebooksPic from '../images/shop-icons/bookstore.jpg';

const modalPopEl = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal');
const popEl = document.querySelector('.pop-info');
const backdropEl = document.querySelector('.backdrop is-hidden');
const popBtn = document.querySelector('.pop__btn');
const popTextEl = document.querySelector('.pop-text');
const backdropBtn = document.querySelector('.backdrop');
const blocBtnEl = document.querySelector('.btn_wrapper');

let arrayBookIs = [];
let arrayBookShopIs = [];

export function handleShowPop(event) {
  const infoPopEl = document.querySelector('.pop-info');
  const popId = event.target.id;
  const bookID = new BookService();
  bookID
    .getBooksById(popId)
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
          'There is no description <br/><br/>Слава Україні!<br/>Смерть ворогам!'
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
                    class="pop_shop__link link"
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
                    class="pop_shop__link link"
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
        popBtn.innerHTML = 'remove from the shopping list';
        popTextEl.innerHTML =
          'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      }
      if (bookLocalIs.add === 'is') {
        popBtn.innerHTML = 'Add to shopping list';
        popTextEl.innerHTML = '';
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
  modalPopEl.classList.toggle('is-hidden');
}
function closeModal() {
  modalPopEl.classList.add('is-hidden');
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

// КНОПКА
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
    popBtn.innerHTML = 'remove from the shopping list';
    popTextEl.innerHTML =
      'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

    if (!arrayBookAdd.includes(bookLocalSt) && bookLocalSt.add === 'is') {
      bookLocalSt.add = 'isAdded';
      arrayBookAdd.push(bookLocalSt);
      localStorage.setItem('book-add', JSON.stringify(arrayBookAdd));
    }

    return;
  }
  if (arrayBookAdd.includes(bookLocalSt)) {
    popBtn.innerHTML = 'Add to shopping list';
    popTextEl.innerHTML = '';
    const index = arrayBookAdd.indexOf(bookLocalSt);
    if (index !== -1) {
      arrayBookAdd.splice(index, 1);
    }
    bookLocalSt.add = 'is';
    localStorage.setItem('book-add', JSON.stringify(arrayBookAdd));

    bookLocalSt.add = 'is';

    return;
  }
};
popBtn.addEventListener('click', handleDoBtn);
