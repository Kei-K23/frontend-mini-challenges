import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";function i(e,n){const t=document.createElement(e);for(let l in n)t.setAttribute(l,n[l]);return t}function m(e,n,t=0){const l=document.createDocumentFragment();for(let r=t;r<e+t;r++)l.appendChild(n(r));return l}const o=5,f=2.3,c=document.getElementById("starContainer"),d=document.getElementById("range"),p=document.getElementById("starRating");let a=null;c.appendChild(m(o,e=>{const n=i("span",{class:"star","data-index":e}),t=i("span",{class:"star-partial","data-index":e});return t.textContent="★",n.textContent="☆",n.appendChild(t),n},1));const s=c.querySelectorAll(".star");function y(e){const n=Math.floor(e);for(let t=0;t<n;t++)s[t].classList.add("star-filled");for(let t=n;t<o;t++)s[t].classList.remove("star-filled");a&&(a.classList.remove("partially-filled"),a.style.width="0%"),n!==e&&(a=s[n].querySelector(".star-partial"),a.classList.add("partially-filled"),a.style.width=`${(e-n)*100}%`)}function u(e){y(e),p.textContent=e}d.addEventListener("input",e=>u(+e.target.value));d.setAttribute("max",o);u(f);
