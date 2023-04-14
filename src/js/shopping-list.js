const shoppingList = document.querySelector('.shopping-cart__list');
const book = [
  {
    _id: '642fd89ac8cf5ee957f12361',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description:
      'Non exercitation non irure et sit eu reprehenderit amet occaecat. Mollit nulla quis tempor elit sint labore veniam duis nulla pariatur dolore fugiat. Veniam excepteur tempor exercitation aliquip Lorem qui id occaecat.',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  // {
  //   _id: '642fd89ac8cf5ee957f12361',
  //   list_name: 'Middle Grade Paperback Monthly',
  //   date: '2023-04-07T08:46:57.000Z',
  //   age_group: '',
  //   amazon_product_url:
  //     'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
  //   article_chapter_link: '',
  //   author: "Barbara O'Connor",
  //   book_image:
  //     'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
  //   book_image_width: 330,
  //   book_image_height: 485,
  //   book_review_link: '',
  //   book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
  //   contributor: "by Barbara O'Connor",
  //   contributor_note: '',
  //   created_date: '2023-04-05 23:10:17',
  //   description: '',
  //   first_chapter_link: '',
  //   price: '0.00',
  //   primary_isbn10: '1250144051',
  //   primary_isbn13: '9781250144058',
  //   publisher: 'Square Fish',
  //   rank: 1,
  //   rank_last_week: 0,
  //   sunday_review_link: '',
  //   title: 'WISH',
  //   updated_date: '2023-04-05 23:10:17',
  //   weeks_on_list: 0,
  //   buy_links: [
  //     {
  //       name: 'Amazon',
  //       url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
  //     },
  //     {
  //       name: 'Apple Books',
  //       url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
  //     },
  //     {
  //       name: 'Barnes and Noble',
  //       url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
  //     },
  //     {
  //       name: 'Books-A-Million',
  //       url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
  //     },
  //     {
  //       name: 'Bookshop',
  //       url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
  //     },
  //     {
  //       name: 'IndieBound',
  //       url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
  //     },
  //   ],
  //   __v: 0,
  // },
];

const pathToAmazon = new URL(
  '../images/shop-icons/amazon.png',
  import.meta.url
);
const pathAppleBooks = new URL(
  '../images/shop-icons/applebooks.png',
  import.meta.url
);
const pathBookShop = new URL(
  '../images/shop-icons/bookstore.png',
  import.meta.url
);
localStorage.setItem('savedBooks', JSON.stringify(book));
const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));
// localStorage.removeItem('savedBooks');
const pathToDump = new URL('../images/sprite.svg', import.meta.url);

function renderShoppingListMarkUp(books) {
  books.map(
    ({ book_image, title, list_name, description, author, buy_links }) => {
      // console.log(Object.values(buy_links));
      let linkToAmazon = null;
      let linkToAppleBooks = null;
      let linkToBookShop = null;
      for (let i = 0; i < buy_links.length; i++) {
        if (buy_links[i].name === 'Amazon') {
          linkToAmazon = buy_links[i].url;
        } else if (buy_links[i].name === 'Apple Books') {
          linkToAppleBooks = buy_links[i].url;
        } else if (buy_links[i].name === 'Bookshop') {
          linkToBookShop = buy_links[i].url;
        }
      }
      // const linkToAmazon = buy_links[0].url;
      // console.log(linkToAmazon);

      shoppingList.insertAdjacentHTML(
        'beforeend',
        `
        <li class="shopping-cart__item">
            <img src="${book_image}" alt="${title}" class="shopping-cart__book-img">
            <div class="shopping-cart__main-info">
            <h3 class="shopping-cart__book-title">${title}</h3>
            <p class="shopping-cart__book-category">${list_name}</p>
            </div>
            <button class="shopping-cart__btn-delete">
                <svg class="delete-icon" width="100%" height="100%">
                  <use href="${pathToDump}#icon-dump"></use>
                </svg>
            </button>
              <p class="shopping-cart__book-description">${description}</p>
              <p class="shopping-cart__book-author">${author}</p>
            <div class="shopping-cart__links">
              <a 
                  href="${linkToAmazon}"
                  class="shopping-cart__book-shop amazon-link"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
              <img src="${pathToAmazon}" alt="amazon" class="store-icon">
              </a>
              <a 
                  href="${linkToAppleBooks}"
                  class="shopping-cart__book-shop"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
              <img src="${pathAppleBooks}" alt="AppleBooks" class="store-icon">
              </a>
              <a 
                  href="${linkToBookShop}"
                  class="shopping-cart__book-shop"
                  target="_blank"
                  referrerpolicy="no-referrer"
              >
            
            <img src="${pathBookShop}" alt="BookStore" class="store-icon">
            </a>
            </div>
            
            
        </li>
        `
      );
      // if (linkToAmazon === null) {
      //   document
      //     .querySelector('.amazon-link')
      //     .classList.add('.visually-hidden');
      // }
    }
  );
}

renderShoppingListMarkUp(savedBooks);

try {
  const deleteBtn = document.querySelector('.shopping-cart__btn-delete');
  console.log(deleteBtn);

  deleteBtn.addEventListener('click', handleDeleteSelectedItem);
} catch {
  const shoppingCart = document.querySelector('.shopping-cart');
  const pathToBook = new URL('../images/shop-icons/books.png', import.meta.url);
  shoppingCart.insertAdjacentHTML(
    'beforeend',
    `
        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>
<img src = "${pathToBook}" class="shopping-cart__warning-img"></div>
        `
  );
}
function clearMarkup() {
  shoppingList.innerHTML = '';
}
function handleDeleteSelectedItem() {
  console.log('text');

  clearMarkup();
  book.splice(1, 1);
  renderShoppingListMarkUp(book);
  console.log(book);
}
