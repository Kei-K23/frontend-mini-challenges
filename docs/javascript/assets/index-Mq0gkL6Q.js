import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const E=(e,t,{type:s="div",...a})=>{const o=document.createDocumentFragment();let r=0;for(let c=0;c<e;c++)for(let i=0;i<t;i++){const x=C(s,{...a,dataset:{x:c,y:i,idx:r}});o.appendChild(x),r++}return o},C=(e="div",t)=>{const s=document.createElement(e);return Object.entries(t).forEach(([a,o])=>{if(typeof o=="object"){Object.entries(o).forEach(([r,c])=>{s[a][r]=c});return}s[a]=o}),s},y=4,g=4,v=Array.from(new Array(y*g),(e,t)=>t),b=2e3,w=["🍇","🍉","🚗","🍌","🏠","🥭","🍎","🐯","🍒","🍓","🐵","🥝","🍿","🏀","🎱","🐻","🍜","🍢","🎓","🍤","🦀","🍦","🍩","🎂","🍫","🍭","🍼","🪔","🍺","🐱","🐶"];let n=[],f=0,m=[],h=!1,p;const d=document.querySelector(".game-front"),l=document.querySelector(".game-back"),L=document.querySelector("output"),T=document.querySelector(".restart"),j=(e,t,s)=>{const a=Array.from(new Array(e*t/2),()=>s[Math.floor(Math.random()*s.length)]),o=a.concat(a),r=[],c=o.length;for(let i=0;i<c;i++)r.push(...o.splice(Math.floor(Math.random()*o.length),1));return r},k=(e,t)=>{e.forEach(s=>{d.children[s].classList.add(t),l.children[s].classList.add(t)})},u=(e,t)=>{e.forEach(s=>{d.children[s].classList.remove(t),l.children[s].classList.remove(t)})},S=async(e=!1)=>{h||(m=[],n=[],f=0,h=!0,L.textContent=f,e||(d.classList.add("reset"),l.classList.add("reset"),u(v,"active"),u(v,"match"),await new Promise(t=>setTimeout(t,b/2))),m=j(y,g,w),l.childNodes.forEach((t,s)=>{t.textContent=m[s]}),d.classList.remove("reset"),l.classList.remove("reset"),h=!1)};d.appendChild(E(y,g,{type:"button",className:"tile"}));l.appendChild(E(y,g,{type:"button",className:"tile back-tile"}));d.addEventListener("click",e=>{const t=e.target.dataset.idx;t==null||h||e.target.classList.contains("match")||(f++,n.length===2&&(p&&clearTimeout(p),u(n,"active"),n=[]),n.push(t),n.length===2&&(m[n[0]]===m[n[1]]&&(u(n,"active"),k(n,"match")),p=setTimeout(()=>{u(n,"active"),n=[]},b)),e.target.classList.add("active"),l.children[t].classList.add("active"),L.textContent=f)});T.addEventListener("click",()=>S());S(!0);
