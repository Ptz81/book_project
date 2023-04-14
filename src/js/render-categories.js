export function renderCategoriesList(categories, selectedCategory) {
  const markup = [
    `<li class='categories__item ${
      selectedCategory === 'all' || !selectedCategory ? 'is-active' : ''
    }' data-category='all' title="All Categories"><span class="categories__text">All Categories</span></li>`,
  ];

  categories
    .sort((a, b) => {
      if (a.list_name < b.list_name) {
        return -1;
      }
      if (a.list_name > b.list_name) {
        return 1;
      }
      return 0;
    })
    .forEach(category => {
      markup.push(
        `<li class='categories__item ${
          selectedCategory === category.list_name ? 'is-active' : ''
        }' data-category='${category.list_name}' title='${category.list_name}'>
        <span class="categories__text">
        ${category.list_name}
        </span>
        </li>`
      );
    });

  return markup.join('');
}
