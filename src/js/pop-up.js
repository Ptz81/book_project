import BookService from './book-service';
const bookTopAPI = new BookService();
import { showError } from './notify.js';

const modalPopEl = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal');
const popEl = document.querySelector('.pop-info'); 
const backdropEl = document.querySelector('.backdrop is-hidden');
let arrayBookIs = [];

export function handleShowPop(event) {
  const infoPopEl = document.querySelector('.pop-info');
  const popId = event.target.id;  
  console.log(event.target);

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
              src="${dataId.book_image}"
              alt="${dataId.author}"
              loading="lazy"
            />
            
         <p class="pop_name">${dataId.list_name}</p>
         <p class="pop_author">${dataId.author}</p>
         <p class="pop_description">${dataId.description}</p>
         <ul class="pop_shop list"></ul>
            
          `
      );
      const popListEl = document.querySelector('.pop_shop');
      dataId.buy_links.map(el => {
        if (el.name === 'Amazon') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li>
                  <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_shop__icon"
                      src="${dataId.book_image}"
                      alt="Amazon"
                      width="40"
                      height="40"
                    />
                  </a>
                </li>           
                  `
          );
        }
        if (el.name === 'Apple Books') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li>
                  <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_shop__icon"
                      src="${dataId.book_image}"
                      alt="Apple Books"
                      width="40"
                      height="40"
                    />
                  </a>
                </li>`
          );
        }
        if (el.name === 'Bookshop') {
          popListEl.insertAdjacentHTML(
            'beforeend',
            `<li>
                  <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                      class="pop_shop__icon"
                      src="${dataId.book_image}"
                      alt="Bookshop"
                      width="40"
                      height="40"
                    />
                  </a>
                  </li>
                  `
          );
        }
      });
      toggleModal();
      //3
      if (!dataId.add) {
        dataId.add = 'is';
      }
      const popBtn = document.querySelector('.pop__btn');
      if (dataId.add === 'isAdded') {
        popBtn.innerHTML = 'remove from the shopping list';
      }
      if (dataId.add === 'is') {
        popBtn.innerHTML = 'Add to shopping list';
      }
      //записую карточку
    //   alert(`зайшов${arrayBookIs}`);
      arrayBookIs = JSON.parse(localStorage.getItem('book-list')) || [];
    //   alert(`подивилася ЛОК${arrayBookIs}`);
      if (!arrayBookIs.includes(dataId)) {
        arrayBookIs.push(dataId);
        localStorage.setItem('book-list', JSON.stringify(arrayBookIs));
      }

      console.log(dataId.add);
      console.log(dataId._id);
      console.log(arrayBookIs);
    //   alert(`вийшов${arrayBookIs}`);

    //   const handleDoBtn = () => {
    //     alert('hello');
    //     if (dataId.add === 'is') {
    //       alert('hello2');
    //       popBtn.innerHTML = 'remove from the shopping list';
    //       //додавання
    //       dataId.add = 'isAdded';
    //       alert(dataId.add);
    //       console.log(dataId.add);
    //     }
    //   };
    //   popBtn.addEventListener('click', handleDoBtn);
      //3
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
};
const closeIfNoModal = (e) => {
    console.log(e.target);
    console.log(e.target.parentNode);
    
    if ((e.target) !== modalEl && (e.target.parentNode) !== popEl && (e.target.parentNode) !== backdropEl) {
        closeModal();
    }   
};
document.addEventListener('click', closeIfNoModal);

