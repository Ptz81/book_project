const shoppingList = document.querySelector('.shopping-cart__list');


const pathToAmazon = new URL('../images/shop-icons/amazon.jpg', import.meta.url);
const pathAppleBooks = new URL('../images/shop-icons/applebooks.jpg', import.meta.url);
const pathBookStore = new URL('../images/shop-icons/bookstore.jpg', import.meta.url);




function renderShoppingListMarkUp(books) {
books.map(
    ({
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    }) => {
      shoppingList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="shopping-cart__item">
            <img src="${book_image}" alt="${title}" class="shopping-cart__book-img">
            <h3 class="shopping-cart__book-title">${title}</h3>
            <p class="shopping-cart__book-category">${list_name}</p>
            <button class="shopping-cart__btn-delete">
                <svg class="delete-icon" width="100%" height="100%">
                  <use href=""></use>
                </svg>
            </button>
            <p class="shopping-cart__book-description">${description}</p>
            <p class="shopping-cart__book-author">${author}</p>
            <a 
                href=""
                class="shopping-cart__book-shop"
                target="_blank"
                referrerpolicy="no-referrer"
            >
            <img src="${pathToAmazon}" alt="amazon" class="store-icon">
            </a>
            <a 
                href=""
                class="shopping-cart__book-shop"
                target="_blank"
                referrerpolicy="no-referrer"
            >
            <img src="${pathAppleBooks}" alt="AppleBooks" class="store-icon">
            </a>
            <a 
                href=""
                class="shopping-cart__book-shop"
                target="_blank"
                referrerpolicy="no-referrer"
            >
            <img src="${pathBookStore}" alt="BookStore" class="store-icon">
            </a>
            
            
        </li>
        `
      );
    }
  );
}

const book = [{
  "_id": "642fd89ac8cf5ee957f12361",
  "list_name": "Middle Grade Paperback Monthly",
  "date": "2023-04-07T08:46:57.000Z",
  "age_group": "",
  "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
  "article_chapter_link": "",
  "author": "Barbara O'Connor",
  "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
  "book_image_width": 330,
  "book_image_height": 485,
  "book_review_link": "",
  "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
  "contributor": "by Barbara O'Connor",
  "contributor_note": "",
  "created_date": "2023-04-05 23:10:17",
  "description": "",
  "first_chapter_link": "",
  "price": "0.00",
  "primary_isbn10": "1250144051",
  "primary_isbn13": "9781250144058",
  "publisher": "Square Fish",
  "rank": 1,
  "rank_last_week": 0,
  "sunday_review_link": "",
  "title": "WISH",
  "updated_date": "2023-04-05 23:10:17",
  "weeks_on_list": 0,
  "buy_links": [
    {
      "name": "Amazon",
      "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
    },
    {
      "name": "Apple Books",
      "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
    },
    {
      "name": "Barnes and Noble",
      "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
    },
    {
      "name": "Books-A-Million",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
    },
    {
      "name": "Bookshop",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
    },
    {
      "name": "IndieBound",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
    }
  ],
  "__v": 0
}];

renderShoppingListMarkUp(book);
