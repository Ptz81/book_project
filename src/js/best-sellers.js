import BookService from './book-service';

const bs = new BookService();
const bestListEl = document.querySelector('.bestsellers__list');
const categoriesContainer = document.querySelector('[data-name=category]');

let currentRenderWidth = window.innerWidth;
console.log(currentRenderWidth);

categoriesContainer.addEventListener('click', onSeeMoreBtnClick);

function onSeeMoreBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

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

      if (categories.length > 0) {
        categories.forEach(category => {

          const titleH1 = document.createElement('h1');
          const cardList = document.createElement('ul');
          const listItem = document.createElement('li');
          const titleH2 = document.createElement('h2');
          const cardsBox = document.createElement('div');
          const btn = document.createElement('button');

          titleH1.classList.add('bestsellers__category');
          cardList.classList.add("bestsellers__list");
          listItem.classList.add('bestsellers__item');
          titleH2.classList.add('bestsellers__category-type');
          cardsBox.classList.add('bestsellers__card-box');
          btn.classList.add('btn');
          btn.classList.add('bestsellers__btn');

          titleH1.innerText = "Best Sellers Books"
          titleH2.innerText = category.list_name;
          btn.innerText = 'see more';

          cardsBox.setAttribute('id', `${category.list_name}`);         
          btn.setAttribute('data-name', `${category.list_name}`);

          // categoriesContainer.prepend(titleH1, cardList);
          listItem.prepend(titleH2);
          titleH2.after(cardsBox);
          listItem.appendChild(btn);
          bestListEl.appendChild(listItem);

          let data = category.books;
          
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
  const cardList = document.createElement('ul');

  titleH1.classList.add('bestsellers__category');
  cardList.classList.add("bestsellers__list");

  titleH1.innerText = `${colection[0].list_name}`

  categoriesContainer.prepend(titleH1, cardList);

  cardList.innerHTML = createCards(colection);

}

export function createCards(colection) {
  return colection.map(({ book_image, title, author, _id }) => {
      return `
        <li class="book__item">
            <a href="#" class="book__link">
              <img src="${book_image}" id="${_id}" alt="image" class="book__img" />
              <h3 class="book__name">${title}</h3>
              <p class="book__author">${author}</p>
            </a>
          </li>`;
    })
    .join('');
}


// Ola
import { handleShowPop } from './pop-up.js';
function handleShowPop(event) {}
bestListEl.addEventListener('click', handleShowPop);
// Ola
