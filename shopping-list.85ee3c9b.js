function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r),r.register("kyEFX",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},r=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.85ee3c9b.js","bN38V":"books.15c3c113.png","h1sXd":"amazon.b8fa90cb.png","17FkC":"applebooks.5a9f17e3.png","9cn7l":"bookstore.91914384.png","lp5u4":"sprite.de39ae05.svg"}'));const s=document.querySelector("#darkmode-toggle"),a=document.querySelector("body"),l=localStorage.getItem("theme");l&&(s.checked="dark"===l,"dark"===l&&(a.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"))),s.addEventListener("change",(e=>{e.target.checked?(a.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"),localStorage.setItem("theme","dark")):(a.classList.remove("dark-mode"),document.documentElement.classList.remove("theme-dark"),localStorage.setItem("theme","light"))}));const i=document.querySelector(".shopping-cart__list"),c=document.querySelector(".shopping-cart");var d;d=new URL(r("kyEFX").resolve("bN38V"),import.meta.url).toString();const p=new URL(d);let u=JSON.parse(localStorage.getItem("book-add"))||[];var g;g=new URL(r("kyEFX").resolve("h1sXd"),import.meta.url).toString();const m=new URL(g);var h;h=new URL(r("kyEFX").resolve("17FkC"),import.meta.url).toString();const f=new URL(h);var _;_=new URL(r("kyEFX").resolve("9cn7l"),import.meta.url).toString();const k=new URL(_);var b;b=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();const v=new URL(b);function y(e){e.length>0?e.map((({_id:e,book_image:n,title:t,list_name:o,description:r,author:s,buy_links:a})=>{let l=null,c=null,d=null;for(let e=0;e<a.length;e++)"Amazon"===a[e].name?l=a[e].url:"Apple Books"===a[e].name?c=a[e].url:"Bookshop"===a[e].name&&(d=a[e].url);i.insertAdjacentHTML("beforeend",`\n        <li class="shopping-cart__item">\n            <img src="${n}" alt="${t}" id="${e}" class="shopping-cart__book-img">\n            <div class="shopping-cart__main-info">\n            <h3 class="shopping-cart__book-title">${t}</h3>\n            <p class="shopping-cart__book-category">${o}</p>\n            </div>\n            <button class="shopping-cart__btn-delete">\n                <svg class="delete-icon" width="100%" height="100%">\n                  <use href="${v}#icon-dump"></use>\n                </svg>\n            </button>\n              <p class="shopping-cart__book-description">${r}</p>\n              <p class="shopping-cart__book-author">${s}</p>\n            <div class="shopping-cart__links">\n              <a \n                  href="${l}"\n                  class="shopping-cart__book-shop amazon-link"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="${m}" alt="amazon" class="store-icon">\n              </a>\n              <a \n                  href="${c}"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="${f}" alt="AppleBooks" class="store-icon">\n              </a>\n              <a \n                  href="${d}"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n            \n            <img src="${k}" alt="BookStore" class="store-icon">\n            </a>\n            </div>\n            \n            \n        </li>\n        `)})):c.insertAdjacentHTML("beforeend",`\n        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>\n<img src = "${p}" class="shopping-cart__warning-img"></div>\n        `)}y(u),i.addEventListener("click",(function(e){e.preventDefault();let n=null;if("BUTTON"!==e.target.closest("button")?.nodeName)return;const t=e.target.closest("button").parentNode.firstElementChild.id;console.log(t),u.map((e=>{e._id===t&&(n=e)}));const o=u.indexOf(n);console.log(o),-1!==o&&(u.splice(o,1),i.innerHTML="");localStorage.setItem("book-add",JSON.stringify(u)),y(u)}));const L=window.location.pathname;document.querySelectorAll(".nav-link").forEach((e=>{e.getAttribute("href")===L?e.classList.add("current"):e.classList.remove("current")}));const w=document.querySelector('.nav-link[href="./index.html"]');"/"===L&&w&&w.classList.add("current"),window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".nav-link");e.forEach((n=>{n.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("current")})),n.classList.add("current")}))}))}));const E=document.querySelector(".scroll__up");document.addEventListener("scroll",(()=>{window.scrollY>100?E.style.visibility="visible":E.style.visibility="hidden"})),E.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=shopping-list.85ee3c9b.js.map