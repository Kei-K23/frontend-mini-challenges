import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const u=document.querySelector(".game-score b"),f=document.querySelector(".game-highestScore b"),p=document.querySelector(".modal-game-score b"),w=document.querySelector(".modal-game-highestScore b"),T=document.querySelector(".main-game"),q=document.querySelectorAll(".arrow"),b=document.querySelector(".btn"),g=document.querySelector(".modal-container");let m=!1,c=0,h=90,S,l=0,d=0,i=9,s=7,t=[],r=0,n=0,a=JSON.parse(localStorage.getItem("score"))||0;f.innerText=a;u.innerText=0;function x(){g.classList.add("show-modal"),p.innerText=c,w.innerText=a,clearInterval(S)}function y(){l=Math.floor(Math.random()*35+1),d=Math.floor(Math.random()*35+1)}function k(o){o.key==="ArrowUp"&&n!=1?(r=0,n=-1):o.key==="ArrowDown"&&n!==-1?(r=0,n=1):o.key==="ArrowLeft"&&r!==1?(r=-1,n=0):o.key==="ArrowRight"&&r!==-1&&(r=1,n=0)}q.forEach(o=>{o.addEventListener("click",e=>{k(e.target.dataset)})});function L(){m&&x();let o=`<div class="food" style="grid-area: ${l} / ${d} ;"></div>`;i===d&&s===l&&(y(),c+=1,t.push([d,l]),a=c>a?c:a,u.innerText=c,f.innerText=a,localStorage.setItem("score",a)),i+=r,s+=n;for(let e=t.length-1;e>0;e--)t[e]=t[e-1];if(t[0]=[i,s],i<1||i>=36||s<1||s>=36)return m=!0;for(let e=0;e<t.length;e++)if(o+=`<div class="snake" style="grid-area: ${t[e][1]} / ${t[e][0]} ;"></div>`,e!==0&&t[0][0]===t[e][0]&&t[0][1]===t[e][1])return m=!0;T.innerHTML=o}function A(){m=!1,c=0,h=90,l=0,d=0,i=9,s=7,t=[],r=0,n=0,u.innerText=c}function v(){y(),S=setInterval(L,h),document.addEventListener("keyup",k)}v();b.addEventListener("click",()=>{g.classList.remove("show-modal"),A(),v()});
