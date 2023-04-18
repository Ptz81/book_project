import BookService from './book-service';

const bs = new BookService();
const categoriesContainer = document.querySelector('[data-name=category]');


let currentRenderWidth = 1280;

categoriesContainer.addEventListener('click', onSeeMoreBtnClick);
window.addEventListener('resize', event => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1279 && currentRenderWidth < 1280) ||
    (window.innerWidth < 1280 && currentRenderWidth > 1279) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
});

function onSeeMoreBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = event.target
  console.log(btn);
  btn.disabled = true;
  btn.classList.add('bestsellers__btn--disabled')
  const selectedBtn = event.target.dataset.name;
  const categoryItem = document.getElementById(`${selectedBtn}`);
  let promise = bs.getBooksByCategory(`${selectedBtn}`);

  promise
    .then(data => {
      if (data.length > 0) {
        categoryItem.innerHTML = createCards(data);
      } else if (data.length === 0) {
        const messageNotFind = 'Sorry, no books found in this category :(';
        bestListEl.innerHTML = `<p> ${messageNotFind} </p>`;
      }
    })
    .catch(console.warn);
  
  
}

export function getCategoryItem(categories) {
  categoriesContainer.innerHTML = '';

  const titleH1 = document.createElement('h1');
  const titleSpan = document.createElement('span');
  const cardList = document.createElement('ul');

  titleH1.classList.add('bestsellers__category');
  titleSpan.classList.add('bestsellers__text-part');
  cardList.classList.add("bestsellers__list");

  titleH1.innerText = "Best Sellers ";
  titleSpan.innerText = 'Books';

  titleH1.append(titleSpan);

  categoriesContainer.prepend(titleH1, cardList);
      if (categories.length > 0) {
        categories.forEach(category => {

          const listItem = document.createElement('li');
          const titleH2 = document.createElement('h2');
          const cardsBox = document.createElement('ul');
          const btn = document.createElement('button');      
          
          listItem.classList.add('bestsellers__item');
          titleH2.classList.add('bestsellers__category-type');
          cardsBox.classList.add('book__list');
          btn.classList.add('btn');
          btn.classList.add('bestsellers__btn');
          
          titleH2.innerText = category.list_name;
          btn.innerText = 'see more';

          cardsBox.setAttribute('id', `${category.list_name}`);         
          btn.setAttribute('data-name', `${category.list_name}`);
          
          listItem.prepend(titleH2);
          titleH2.after(cardsBox);
          listItem.appendChild(btn);
          cardList.appendChild(listItem);

          let data = category.books;
          currentRenderWidth = window.innerWidth;
                if (currentRenderWidth < 768) {
                  cardsBox.insertAdjacentHTML(
                    'afterbegin',
                    createCards(data.slice(0, 1))
                  );
                } else if (currentRenderWidth < 1280) {
                  cardsBox.insertAdjacentHTML(
                    'afterbegin',
                    createCards(data.slice(0, 3))
                  );
                } else {
                  cardsBox.insertAdjacentHTML(
                    'afterbegin',
                    createCards(data.slice(0, 5))
                  );
                }
          
        });
      } else if (data.length === 0) {
        const messageNotFind = 'Sorry, no books found in this category :(';
        bestListEl.innerHTML = `<p> ${messageNotFind} </p>`;
      }
}

export function createCardsByCategory(colection) {

  categoriesContainer.innerHTML = '';

  const titleH1 = document.createElement('h1');
  // const titleSpan = document.createElement('span');
  const cardList = document.createElement('ul');

  titleH1.classList.add('bestsellers__category');
  // titleSpan.classList.add('bestsellers__text-part');
  cardList.classList.add("bestsellers__list");
  cardList.classList.add("single-list");


  titleH1.innerText = `${colection[0].list_name}`

  // titleH1.append(titleSpan);
  categoriesContainer.prepend(titleH1, cardList);

  cardList.innerHTML = markupCardsbyCaterory(colection);

}

export function createCards(colection) {
  return colection.map(({ book_image, title, author, _id }) => {
      return `
        <li class="book__item">
            <a href="#" class="book__link">
              <div class ="book__box">
              <img src="${book_image}" id="${_id}" alt="image" class="book__img" />
              <div class="book__overlay">
              <p class="book__text-overlay">see more</p>
              </div>
              </div>
              <h3 class="book__name">${title}</h3>
              <p class="book__author">${author}</p>
            </a>
          </li>`;
    })
    .join('');
}

export function markupCardsbyCaterory(colection) {
  return colection.map(({ book_image, title, author, _id }) => {
      return `
        <li class="book__item single-category">
            <a href="#" class="book__link">
              <div class ="book__box">
              <img src="${book_image}" id="${_id}" alt="image" class="book__img" />
              <div class="book__overlay">
              <p class="book__text-overlay">see more</p>
              </div>
              </div>
              <h3 class="book__name">${title}</h3>
              <p class="book__author">${author}</p>
            </a>
          </li>`;
    })
    .join('');
}


// Ola
import { handleShowPop } from './pop-up.js';
categoriesContainer.addEventListener('click', handleShowPop);
// Ola


