
export function displayBookInfo(dataId) {
  const modalContent = document.querySelector('.pop-info');


  const cardTemplate = `
    <img class="photo" src="${dataId.book_image}" alt="${dataId.author}" loading="lazy" />
    <div class="pop_info">
    <p class="pop_name">${dataId.list_name ? dataId.list_name : 'Назва книги відсутня'}</p>
    <p class="pop_author">${dataId.author ? dataId.author : 'Автор невідомий'}</p>
    <p class="pop_description">${dataId.description ? dataId.description : 'Опис відсутній'}</p>

  <ul class="pop_shop list">
    ${dataId.links && dataId.links.length > 0 ?
      dataId.links.map(link => `
        <li>
          <a class="pop_shop__link link" href="${link.url}" target="_blank" rel="noopener noreferrer">
            <img class="pop_shop__icon" src="${link.image}" alt="${link.name}" width="40" height="40"/>
          </a>
        </li>
      `).join('')
      :
      '<li>Дані про магазини відсутні</li>'
    }
  </ul>

      <button class="pop__btn pop__btn--remove" data-id="${dataId.book_id}">Remove from the shopping list</button>
    </div>
  `;


  modalContent.innerHTML = cardTemplate;

  // Отримуємо кнопку видалення та додаємо обробник подій
  const removeButton = modalContent.querySelector('.pop__btn--remove');
  removeButton.addEventListener('click', () => {
    const bookId = removeButton.dataset.id;
    removeFromCart(bookId);
    displayShoppingList();
  });
}



