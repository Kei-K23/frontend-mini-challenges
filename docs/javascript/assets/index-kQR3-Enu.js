import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const c=document.getElementById("increment"),a=document.getElementById("decrement"),e=document.getElementById("changeBy"),d=document.getElementById("reset"),t=document.querySelector(".value");c.addEventListener("click",()=>{t.textContent=+t.textContent+e.valueAsNumber});a.addEventListener("click",()=>{t.textContent=parseInt(t.textContent)-parseInt(e.value)});e.addEventListener("change",()=>{const n=e.valueAsNumber;(Number.isNaN(n)||n<0)&&(e.value=1)});d.addEventListener("click",()=>{t.textContent=0});
