function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.ca75c83e.js","bN38V":"books.15c3c113.png","h1sXd":"amazon.b8fa90cb.png","17FkC":"applebooks.5a9f17e3.png","9cn7l":"bookstore.91914384.png","lp5u4":"sprite.f2ac10f2.svg","9ifmU":"save@1x.2b9a8a0d.png","2qiup":"save@2x.2de73a58.png","6FUFI":"hope@1x.5ca94cce.png","agUus":"hope@2x.8354c253.png","gjUJK":"united@1x.60e1666b.png","lMUfh":"united@2x.ac361f61.png","hnRCe":"corps@1x.e6d8a5d4.png","3ZVO6":"corps@2x.4fd031d8.png","kqpQH":"medecins@1x.fffaf419.png","8vgeR":"medecins@2x.ce6a2b30.png","lUCYF":"razom@1x.259d571c.png","cO0U3":"razom@2x.50f87f9f.png","bLV4s":"action@1x.817b7ac8.png","18IiA":"action@2x.dc6f7fe7.png","bK7jd":"world@1x.04cbf5a1.png","4P1x7":"world@2x.ee7e98fc.png","kdvJK":"prytula@1x.30d1b01d.png","c6Y4I":"prytula@2x.1761376f.png"}'));const i=document.querySelector("#darkmode-toggle"),s=document.querySelector("body"),l=localStorage.getItem("theme");l&&(i.checked="dark"===l,"dark"===l&&(s.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"))),i.addEventListener("change",(e=>{e.target.checked?(s.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"),localStorage.setItem("theme","dark")):(s.classList.remove("dark-mode"),document.documentElement.classList.remove("theme-dark"),localStorage.setItem("theme","light"))}));const c=document.querySelector(".shopping-cart__list"),p=document.querySelector(".shopping-cart");var d;d=new URL(a("kyEFX").resolve("bN38V"),import.meta.url).toString();const u=new URL(d);let g=JSON.parse(localStorage.getItem("book-add"))||[];var m;m=new URL(a("kyEFX").resolve("h1sXd"),import.meta.url).toString();const _=new URL(m);var v;v=new URL(a("kyEFX").resolve("17FkC"),import.meta.url).toString();const h=new URL(v);var f;f=new URL(a("kyEFX").resolve("9cn7l"),import.meta.url).toString();const k=new URL(f);var S;S=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();const w=new URL(S);function b(e){e.length>0?e.map((({_id:e,book_image:t,title:r,list_name:n,description:o,author:a,buy_links:i})=>{let s=null,l=null,p=null;for(let e=0;e<i.length;e++)"Amazon"===i[e].name?s=i[e].url:"Apple Books"===i[e].name?l=i[e].url:"Bookshop"===i[e].name&&(p=i[e].url);c.insertAdjacentHTML("beforeend",`\n        <li class="shopping-cart__item">\n            <img src="${t}" alt="${r}" id="${e}" class="shopping-cart__book-img">\n            <div class="shopping-cart__main-info">\n            <h3 class="shopping-cart__book-title">${r}</h3>\n            <p class="shopping-cart__book-category">${n}</p>\n            </div>\n            <button class="shopping-cart__btn-delete">\n                <svg class="delete-icon" width="100%" height="100%">\n                  <use href="${w}#icon-dump"></use>\n                </svg>\n            </button>\n              <p class="shopping-cart__book-description">${o}</p>\n              <p class="shopping-cart__book-author">${a}</p>\n            <div class="shopping-cart__links">\n              <a \n                  href="${s}"\n                  class="shopping-cart__book-shop amazon-link"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="${_}" alt="amazon" class="store-icon">\n              </a>\n              <a \n                  href="${l}"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="${h}" alt="AppleBooks" class="store-icon">\n              </a>\n              <a \n                  href="${p}"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n            \n            <img src="${k}" alt="BookStore" class="store-icon">\n            </a>\n            </div>\n            \n            \n        </li>\n        `)})):p.insertAdjacentHTML("beforeend",`\n        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>\n<img src = "${u}" class="shopping-cart__warning-img"></div>\n        `)}b(g),c.addEventListener("click",(function(e){e.preventDefault();let t=null;if("BUTTON"!==e.target.closest("button")?.nodeName)return;const r=e.target.closest("button").parentNode.firstElementChild.id;console.log(r),g.map((e=>{e._id===r&&(t=e)}));const n=g.indexOf(t);console.log(n),-1!==n&&(g.splice(n,1),c.innerHTML="");localStorage.setItem("book-add",JSON.stringify(g)),b(g)}));const E=window.location.pathname;document.querySelectorAll(".nav-link").forEach((e=>{e.getAttribute("href")===E?e.classList.add("current"):e.classList.remove("current")}));const y=document.querySelector('.nav-link[href="./index.html"]');"/"===E&&y&&y.classList.add("current"),window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".nav-link");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("current")})),t.classList.add("current")}))}))}));const F=document.querySelector(".scroll__up");document.addEventListener("scroll",(()=>{window.scrollY>100?F.style.visibility="visible":F.style.visibility="hidden"})),F.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var R;R=new URL(a("kyEFX").resolve("9ifmU"),import.meta.url).toString();var x;x=new URL(a("kyEFX").resolve("2qiup"),import.meta.url).toString();var H;H=new URL(a("kyEFX").resolve("6FUFI"),import.meta.url).toString();var L;L=new URL(a("kyEFX").resolve("agUus"),import.meta.url).toString();var U;U=new URL(a("kyEFX").resolve("gjUJK"),import.meta.url).toString();var A;A=new URL(a("kyEFX").resolve("lMUfh"),import.meta.url).toString();var X;X=new URL(a("kyEFX").resolve("hnRCe"),import.meta.url).toString();var $;$=new URL(a("kyEFX").resolve("3ZVO6"),import.meta.url).toString();var q;q=new URL(a("kyEFX").resolve("kqpQH"),import.meta.url).toString();var O;O=new URL(a("kyEFX").resolve("8vgeR"),import.meta.url).toString();var C;C=new URL(a("kyEFX").resolve("lUCYF"),import.meta.url).toString();var I;I=new URL(a("kyEFX").resolve("cO0U3"),import.meta.url).toString();var j;j=new URL(a("kyEFX").resolve("bLV4s"),import.meta.url).toString();var M;M=new URL(a("kyEFX").resolve("18IiA"),import.meta.url).toString();var T;T=new URL(a("kyEFX").resolve("bK7jd"),import.meta.url).toString();var N;N=new URL(a("kyEFX").resolve("4P1x7"),import.meta.url).toString();var z;z=new URL(a("kyEFX").resolve("kdvJK"),import.meta.url).toString();var J;J=new URL(a("kyEFX").resolve("c6Y4I"),import.meta.url).toString();const K=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img1x:t(R),img2x:t(x)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img1x:t(H),img2x:t(L)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img1x:t(U),img2x:t(A)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img1x:t(X),img2x:t($)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img1x:t(q),img2x:t(O)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img1x:t(C),img2x:t(I)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img1x:t(j),img2x:t(M)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img1x:t(T),img2x:t(N)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img1x:t(z),img2x:t(J)}],P=document.querySelector(".support__list"),V=e=>{const t=e.map(((e,t)=>{const{title:r,url:n,img1x:o,img2x:a}=e;return`\n           <li class="support__item">\n              <p class="support__text">${(t+1).toString().padStart(2,"0")}</p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="company icon"\n                class="support__link"\n                href="${n}"\n              >\n                <img\n                  src="/src/images/support-images/save@1x.png"\n                  alt="${r}"\n                  class="support__logo"\n                  srcset="\n                  ${o} 1x,\n                  ${a} 2x\n                  "\n                />\n              </a>\n              `})).join("");P.innerHTML=`${t}`};V(K);const Y=document.querySelectorAll(".support__item"),B=document.querySelector(".support__btn");let D=0,Z=!1;B.addEventListener("click",(function(){Z?(D-=3,D<0&&(D=0,Z=!1,B.querySelector(".support__icon").style.transform="")):(D+=3,D>=Y.length&&(D=Y.length-1,Z=!0,B.querySelector(".support__icon").style.transform="rotate(180deg)")),Y.forEach((function(e){e.style.transform=`translateY(-${100*D}%)`}))}));
//# sourceMappingURL=shopping-list.ca75c83e.js.map