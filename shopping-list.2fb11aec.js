!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},t.parcelRequired7c6=a),a.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},o=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=n),n}})),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.2fb11aec.js","86n1j":"books.15c3c113.png","cw5Fg":"amazon.b8fa90cb.png","gnGsD":"applebooks.5a9f17e3.png","iC3bb":"bookstore.91914384.png","ee16w":"sprite.f2ac10f2.svg","9sd4E":"save@1x.2b9a8a0d.png","xlbpT":"save@2x.2de73a58.png","1xVAs":"hope@1x.5ca94cce.png","1Notj":"hope@2x.8354c253.png","aucQv":"united@1x.60e1666b.png","gstpp":"united@2x.ac361f61.png","9cJBh":"corps@1x.e6d8a5d4.png","2q6rF":"corps@2x.4fd031d8.png","714wt":"medecins@1x.fffaf419.png","4AbZh":"medecins@2x.ce6a2b30.png","9r5N6":"razom@1x.259d571c.png","8Apam":"razom@2x.50f87f9f.png","cSJQC":"action@1x.817b7ac8.png","ff6AF":"action@2x.dc6f7fe7.png","5LY1l":"world@1x.04cbf5a1.png","6kYGE":"world@2x.ee7e98fc.png","krxbE":"prytula@1x.30d1b01d.png","4zLql":"prytula@2x.1761376f.png"}'));var i=document.querySelector("#darkmode-toggle"),c=document.querySelector("body"),s=localStorage.getItem("theme");s&&(i.checked="dark"===s,"dark"===s&&(c.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"))),i.addEventListener("change",(function(e){e.target.checked?(c.classList.add("dark-mode"),document.documentElement.classList.add("theme-dark"),localStorage.setItem("theme","dark")):(c.classList.remove("dark-mode"),document.documentElement.classList.remove("theme-dark"),localStorage.setItem("theme","light"))}));var l,d=document.querySelector(".shopping-cart__list"),u=document.querySelector(".shopping-cart");l=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("86n1j");var p,g=new URL(l),m=JSON.parse(localStorage.getItem("book-add"))||[];p=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("cw5Fg");var v,f=new URL(p);v=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("gnGsD");var _,h=new URL(v);_=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("iC3bb");var b,H=new URL(_);b=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("ee16w");var S=new URL(b);function E(e){e.length>0?e.map((function(e){for(var n=e._id,t=e.book_image,r=e.title,o=e.list_name,a=e.description,i=e.author,c=e.buy_links,s=null,l=null,u=null,p=0;p<c.length;p++)"Amazon"===c[p].name?s=c[p].url:"Apple Books"===c[p].name?l=c[p].url:"Bookshop"===c[p].name&&(u=c[p].url);d.insertAdjacentHTML("beforeend",'\n        <li class="shopping-cart__item">\n            <img src="'.concat(t,'" alt="').concat(r,'" id="').concat(n,'" class="shopping-cart__book-img">\n            <div class="shopping-cart__main-info">\n            <h3 class="shopping-cart__book-title">').concat(r,'</h3>\n            <p class="shopping-cart__book-category">').concat(o,'</p>\n            </div>\n            <button class="shopping-cart__btn-delete">\n                <svg class="delete-icon" width="100%" height="100%">\n                  <use href="').concat(S,'#icon-dump"></use>\n                </svg>\n            </button>\n              <p class="shopping-cart__book-description">').concat(a,'</p>\n              <p class="shopping-cart__book-author">').concat(i,'</p>\n            <div class="shopping-cart__links">\n              <a \n                  href="').concat(s,'"\n                  class="shopping-cart__book-shop amazon-link"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="').concat(f,'" alt="amazon" class="store-icon">\n              </a>\n              <a \n                  href="').concat(l,'"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n              <img src="').concat(h,'" alt="AppleBooks" class="store-icon">\n              </a>\n              <a \n                  href="').concat(u,'"\n                  class="shopping-cart__book-shop"\n                  target="_blank"\n                  referrerpolicy="no-referrer"\n              >\n            \n            <img src="').concat(H,'" alt="BookStore" class="store-icon">\n            </a>\n            </div>\n            \n            \n        </li>\n        '))})):u.insertAdjacentHTML("beforeend",'\n        <div class="shopping-cart__warning"><p class="shopping-cart__warning-text">This page is empty, add some books and proceed to order.</p>\n<img src = "'.concat(g,'" class="shopping-cart__warning-img"></div>\n        '))}E(m),d.addEventListener("click",(function(e){var n;e.preventDefault();var t=null;if("BUTTON"!==(null===(n=e.target.closest("button"))||void 0===n?void 0:n.nodeName))return;var r=e.target.closest("button").parentNode.firstElementChild.id;console.log(r),m.map((function(e){e._id===r&&(t=e)}));var o=m.indexOf(t);console.log(o),-1!==o&&(m.splice(o,1),d.innerHTML="");localStorage.setItem("book-add",JSON.stringify(m)),E(m)}));var x=window.location.pathname;document.querySelectorAll(".nav-link").forEach((function(e){e.getAttribute("href")===x?e.classList.add("current"):e.classList.remove("current")}));var k=document.querySelector('.nav-link[href="./index.html"]');"/"===x&&k&&k.classList.add("current"),window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".nav-link");e.forEach((function(n){n.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("current")})),n.classList.add("current")}))}))}));var w=document.querySelector(".scroll__up");document.addEventListener("scroll",(function(){window.scrollY>100?w.style.visibility="visible":w.style.visibility="hidden"})),w.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var F;F=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("9sd4E");var L;L=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("xlbpT");var R;R=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("1xVAs");var y;y=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("1Notj");var A;A=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("aucQv");var O;O=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("gstpp");var T;T=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("9cJBh");var N;N=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("2q6rF");var j;j=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("714wt");var C;C=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("4AbZh");var U;U=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("9r5N6");var B;B=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("8Apam");var J;J=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("cSJQC");var K;K=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("ff6AF");var q;q=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5LY1l");var z;z=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("6kYGE");var M;M=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("krxbE");var D;D=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("4zLql");var I=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img1x:n(F),img2x:n(L)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img1x:n(R),img2x:n(y)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img1x:n(A),img2x:n(O)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img1x:n(T),img2x:n(N)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img1x:n(j),img2x:n(C)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img1x:n(U),img2x:n(B)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img1x:n(J),img2x:n(K)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img1x:n(q),img2x:n(z)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img1x:n(M),img2x:n(D)}],Y=document.querySelector(".support__list"),G=function(e){var n=e.map((function(e,n){var t=e.title,r=e.url,o=e.img1x,a=e.img2x,i=(n+1).toString().padStart(2,"0");return'\n           <li class="support__item">\n              <p class="support__text">'.concat(i,'</p>\n              <a\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="company icon"\n                class="support__link"\n                href="').concat(r,'"\n              >\n                <img\n                  src="/src/images/support-images/save@1x.png"\n                  alt="').concat(t,'"\n                  class="support__logo"\n                  srcset="\n                  ').concat(o," 1x,\n                  ").concat(a,' 2x\n                  "\n                />\n              </a>\n              ')})).join("");Y.innerHTML="".concat(n)};G(I);var P=document.querySelectorAll(".support__item"),Q=document.querySelector(".support__btn"),Z=0,V=!1;Q.addEventListener("click",(function(){V?(Z-=3)<0&&(Z=0,V=!1,Q.querySelector(".support__icon").style.transform=""):(Z+=3)>=P.length&&(Z=P.length-1,V=!0,Q.querySelector(".support__icon").style.transform="rotate(180deg)"),P.forEach((function(e){e.style.transform="translateY(-".concat(100*Z,"%)")}))}))}();
//# sourceMappingURL=shopping-list.2fb11aec.js.map