import BookService from "./book-service";

const bs = new BookService();

const cPandEB_Fictions = bs.getBooksByCategory("Combined Print and E-Book Fiction");
const cPandEB_NonFictions = bs.getBooksByCategory("Combined Print and E-Book Nonfiction");
const hardcover_Fiction = bs.getBooksByCategory("Hardcover Fiction");
const hardcover_NonFiction = bs.getBooksByCategory("Hardcover Nonfiction");
const paperbackTrade_Fiction = bs.getBooksByCategory("Trade Fiction Paperback");
const paperbackTrade_NonFiction = bs.getBooksByCategory("Paperback Nonfiction");
const adviceHowTo = bs.getBooksByCategory("Advice How-To and Miscellaneous");
const childrens = bs.getBooksByCategory("Childrens Middle Grade Hardcover");
const pictureBooks = bs.getBooksByCategory("Picture Books");
const seriesBooks = bs.getBooksByCategory("Series Books");
const youngAdultHardcover = bs.getBooksByCategory("Young Adult Hardcover");

const categoriesFeatch = [
  cPandEB_Fictions, cPandEB_NonFictions, hardcover_Fiction, hardcover_NonFiction, paperbackTrade_Fiction, paperbackTrade_NonFiction,
  adviceHowTo, childrens, pictureBooks, seriesBooks, youngAdultHardcover
];

const bestEl = document.querySelector('.best');

createAllCategoriesCard();

function createCards(colection) {
  return colection.slice(0,5)
    .map(
      ({
        list_name,
        book_image,
        title,
        author,
      }) => {
        return `
        <div class="book-card">
         <p class="info-item">
     ${list_name}
    </p>
  <img class="gallery__image" src="${book_image}" alt="book image" loading="lazy" />
    <p class="info-item">
      ${title}
    </p>
    <p class="info-item">
     ${author}
    </p>
  </div>`;
      }
    )
    .join('');
};

function createAllCategoriesCard() {
  for (let categoryFeatch of categoriesFeatch) {

    getDataFromPromise(categoryFeatch);
  }
}


function getDataFromPromise(promise) {
  promise.then(data => {
  if (data !== []) {
    bestEl.insertAdjacentHTML("beforeend", createCards(data));
  } else if (data === []) {
    const messageNotFind = 'Sorry, no books found in this category :(';
    bestEl.innerHTML = `<p> ${messageNotFind} </p>`;
  }
    
  }).catch(console.warn)
};
// console.log(cPandEB_NonFictions.then(console.log));

