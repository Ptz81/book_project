import BookService from './book-service';
const bookTopAPI = new BookService();
import { showError } from './notify.js';

const amazonPic = new URL('../images/shop-icons/amazon.jpg', import.meta.url);
const applebooksPic = new URL('../images/shop-icons/applebooks.jpg', import.meta.url);
const bookstore_shopPic = new URL('../images/shop-icons/bookstore.jpg', import.meta.url);

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
const blocBtnEl = document.querySelector('.pop-bloc-btn');

let arrayBookIs = [];

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
      
      <h2 class="pop_name">
        ${dataId.list_name || 'There is no book title'}        
      </h2>
      <p class="pop_author">${dataId.author || 'The author is unknown'}</p>
      <p class="pop_description">
        ${dataId.description || 'There is no description <br/>Слава Україні! <br/>Смерть ворогам!'}
      </p>
      <ul class="pop_shop list"></ul>      
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
      if (!dataId.add) {
        dataId.add = 'is';
      }
      const popBtn = document.querySelector('.pop__btn');
      if (dataId.add === 'isAdded') {
        popBtn.innerHTML = 'remove from the shopping list';
        popTextEl.innerHTML = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
      }
      if (dataId.add === 'is') {
        popBtn.innerHTML = 'Add to shopping list';
        popTextEl.innerHTML = '';
      }

      arrayBookIs = JSON.parse(localStorage.getItem('book-list')) || [];

      if (!arrayBookIs.includes(dataId)) {
        arrayBookIs.push(dataId);
        localStorage.setItem('book-list', JSON.stringify(arrayBookIs));
      }
    })
      // console.log('1');
      // console.log(dataId);

      // let arrayBookShop = JSON.parse(localStorage.getItem('book-add')) || []; 
      // arrayBookIs = JSON.parse(localStorage.getItem('book-list')) || [];
      // // is
      // if (!dataId.add) {
      //   dataId.add = 'is';
      // };
      // console.log('2');
      // console.log(dataId);
      
      // if (!arrayBookIs.includes(dataId)) {
      //   arrayBookIs.push(dataId);
      //   localStorage.setItem('book-list', JSON.stringify(arrayBookIs));
        
      //   console.log('3');
      // console.log(dataId);
      // }
        
     
      // if (arrayBookShop.includes(dataId) && dataId.add === 'is') {        
      //   dataId.add = 'isAdded';
      //   console.log('4');
      // console.log(dataId);
      // }; 
      
      // console.log('5');
      // console.log(dataId);    

      // console.log(dataId.add);
      
      // if (dataId.add === 'isAdded' ) {
      //   popBtn.innerHTML = 'remove from the shopping list';
      //   popTextEl.innerHTML = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
        
      // }
      // if (dataId.add === 'is') {
      //   popBtn.innerHTML = 'Add to shopping list';
      //   popTextEl.innerHTML = '';
        
      // };
   
    
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
    e.target.parentNode !==blocBtnEl    
  ) {
    closeModal();
  }
};
backdropBtn.addEventListener('click', closeIfNoModal);

// КНОПКА

const handleDoBtn = e => {
  console.log(e.target.previousElementSibling.firstChild.id);
  const sourceID = e.target.previousElementSibling.firstChild.id;
  let bookLocalSt;

  let arrayBookAdd = JSON.parse(localStorage.getItem('book-add')) || [];

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
    popTextEl.innerHTML = 'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

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

