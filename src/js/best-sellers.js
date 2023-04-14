import BookService from "./book-service";

const bs = new BookService();

const categoryList = bs.getCategoryList();

const bestListEl = document.querySelector('.bestsellers__list');
const categoriesContainer = document.querySelector('.container')

categoriesContainer.addEventListener('click', onSeeMoreBtnClick)

getCategoryItem(categoryList);

function onSeeMoreBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  };

  const selectedBtn = event.target.dataset.name;
  

  const categoryItem = document.getElementById(`${selectedBtn}`)
  console.log(categoryItem);

  let promise = bs.getBooksByCategory(`${selectedBtn}`);
        promise.then(data => {
          if (data !== []) {
            console.log(data);
            categoryItem.innerHTML = createAllCards(data);
    } else if (data === []) {
      const messageNotFind = 'Sorry, no books found in this category :(';
      bestListEl.innerHTML = `<p> ${messageNotFind} </p>`;
    }
    
  }).catch(console.warn);
}

function getCategoryItem(promise) {
  promise.then(categories => {
    if (categories !== []) {
      categories.forEach(category => {

        const listItem = document.createElement("li");
        const title = document.createElement("h2");
        const cardsBox = document.createElement("div");

        listItem.classList.add("bestsellers__item");
        
        title.classList.add("bestsellers__category-type");
        title.innerText = category.list_name;
        
        cardsBox.classList.add("bestsellers__card-box");
        cardsBox.setAttribute('id', `${category.list_name}`)
        const btn = document.createElement("button");
        btn.innerText = 'see more';
        btn.classList.add("btn");
        btn.classList.add("bestsellers__btn");
        btn.setAttribute('data-name', `${category.list_name}`)
        listItem.prepend(title);
        title.after(cardsBox);

        let promise = bs.getBooksByCategory(category.list_name);
        promise.then(data => {
    if (data !== []) {
      cardsBox.insertAdjacentHTML('afterbegin', createCards(data));
    } else if (data === []) {
      const messageNotFind = 'Sorry, no books found in this category :(';
      bestListEl.innerHTML = `<p> ${messageNotFind} </p>`;
    }
    
  }).catch(console.warn);
        listItem.appendChild(btn);
        bestListEl.appendChild(listItem);
      });
    } else if (data === []) {
      const messageNotFind = 'Sorry, no books found in this category :(';
      bestListEl.innerHTML = `<p> ${messageNotFind} </p>`;
    } 
  }).catch(console.warn);
}

function createCards(colection) {
  return colection.slice(0,5)
    .map(
      ({
        book_image,
        title,
        author,
        _id
      }) => {
        return `
        <li class="book__item">
            <a href="#" class="book__link">
              <img src="${book_image}" id="${_id}" alt="image" class="book__img" />
              <h3 class="book__name">${title}</h3>
              <p class="book__author">${author}</p>
            </a>
          </li>`;
      }
    )
    .join('');
};

function createAllCards(colection) {
  return colection
    .map(
      ({
        book_image,
        title,
        author,
        _id
      }) => {
        return `
        <li class="book__item">
            <a href="#" class="book__link">
              <img src="${book_image}" id="${_id}" alt="image" class="book__img" />
              <h3 class="book__name">${title}</h3>
              <p class="book__author">${author}</p>
            </a>
          </li>`;
      }
    )
    .join('');
}

