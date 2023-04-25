// todo: сразу после авторизации, при удалении книги из ШЛ через карточку -
// повторное нажатие на кнопку(add) не срабатывает

// Активная страница не подсвечивается

const logoLink = document.querySelector('.logo__link');

// reloading
if (localStorage.getItem('need-reloading') === 'true') {
  localStorage.setItem('need-reloading', false);
  localStorage.removeItem('category-name');
  location.reload();
}

// при клике пепезагружаем страницу, подтягивая данные с сервера, а не с кеша
logoLink?.addEventListener('click', e => {
  e.preventDefault();
  localStorage.setItem('need-reloading', true);
  location.assign('./');
});
