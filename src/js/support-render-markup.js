import { supportItems } from "./support-fonds-array";

const supportListEl = document.querySelector('.support__list');


export const renderSupportList = items => {
  const listItems = items
    .map((item, index) => {
      const { title, url, img1x, img2x } = item;
      const number = (index + 1).toString().padStart(2, '0');
      return `
           <li class="support__item">
              <p class="support__text">${number}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="company icon"
                class="support__link"
                href="${url}"
              >
                <img
                  src="/src/images/support-images/save@1x.png"
                  alt="${title}"
                  class="support__logo"
                  srcset="
                  ${img1x} 1x,
                  ${img2x} 2x
                  "
                />
              </a>
              `;
    })
    .join('');
  supportListEl.innerHTML = `${listItems}`;
};

renderSupportList(supportItems);
