var u=Object.defineProperty;var f=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>(f(a,typeof e!="symbol"?e+"":e,t),t);import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const p="/frontend-mini-challenges/javascript/assets/1-OkPi44L4.jpg",I="/frontend-mini-challenges/javascript/assets/2-LbNREVae.jpg",v="/frontend-mini-challenges/javascript/assets/3-SrIwCN-U.jpg",y="/frontend-mini-challenges/javascript/assets/4-IwShTW20.jpg",E="/frontend-mini-challenges/javascript/assets/5-XTj0vlQy.jpg",H=document.getElementById("carousel"),L=document.getElementById("leftHandle"),P=document.getElementById("rightHandle"),h=document.getElementById("infinite"),d=document.getElementById("autoplay"),c=document.getElementById("autoplayInterval");class b{constructor(e,{images:t,leftHandle:s,rightHandle:i,isInfinite:l=!0,autoPlay:r=!1,autoPlayInterval:g=5e3,selected:m=0}){n(this,"swipeLeft",()=>{this.selected===0&&!this.isInfinite||(this.selected-=1,this.selected<0&&(this.selected+=this.images.length),this.setSelection())});n(this,"swipeRight",()=>{this.selected===this.images.length-1&&!this.isInfinite||(this.selected+=1,this.selected%=this.images.length,this.setSelection())});n(this,"dotSelect",e=>{e.target.classList.contains("dot")&&(this.selected=+e.target.dataset.index,this.setSelection())});this.carousel=e,this.images=t,this.leftHandle=s,this.rightHandle=i,this.selected=m,this.isInfinite=l,this.autoPlay=r,this.autoPlayInterval=g,this.placeImages(),this.dotHolder=this.createProgress(),this.addListeners(),this.setSelection(),this.startAutoPlay()}setInfinite(e){this.isInfinite=e,this.setHandles()}setAutoPlay(e,t){this.autoPlay=e,this.autoPlayInterval=t,this.startAutoPlay()}startAutoPlay(){this.autoPlay?(clearInterval(this.intervalId),this.intervalId=setInterval(this.swipeRight,this.autoPlayInterval)):clearInterval(this.intervalId)}addListeners(){this.leftHandle.addEventListener("click",this.swipeLeft),this.rightHandle.addEventListener("click",this.swipeRight),this.dotHolder.addEventListener("click",this.dotSelect)}setSelection(){var s;const e=this.carousel.querySelector(".img-holder"),t=this.dotHolder.querySelector(`[data-index='${this.selected}']`);e.style.transform=`translateX(${256*-this.selected}px)`,(s=this.dotHolder.querySelector(".selected"))==null||s.classList.remove("selected"),t.classList.add("selected"),this.setHandles()}setHandles(){this.isInfinite?this.disableHandles({isLeftDisabled:!1,isRightDisabled:!1}):this.disableHandles({isLeftDisabled:this.selected===0,isRightDisabled:this.selected===this.images.length-1})}disableHandles({isLeftDisabled:e,isRightDisabled:t}){this.leftHandle.disabled=e,this.rightHandle.disabled=t}placeImages(){const e=document.createElement("div");e.classList.add("img-frame");const t=document.createElement("div");t.classList.add("img-holder"),this.images.forEach(s=>{const i=document.createElement("img");i.src=s,t.appendChild(i)}),e.appendChild(t),this.carousel.appendChild(e)}createProgress(){const e=document.createElement("ul");return e.classList.add("dot-holder"),this.images.forEach((t,s)=>{const i=document.createElement("li");i.role="presentation";const l=document.createElement("button");l.role="tab",l.dataset.index=s,l.classList.add("dot"),i.appendChild(l),e.appendChild(i)}),this.carousel.appendChild(e),e}}const o=new b(H,{images:[p,I,v,y,E],selected:0,leftHandle:L,rightHandle:P,isInfinite:!1});h.addEventListener("change",()=>{o.setInfinite(h.checked)});d.addEventListener("change",()=>{c.disabled=!d.checked,o.setAutoPlay(d.checked,c.value)});c.addEventListener("change",()=>{o.setAutoPlay(d.checked,c.value)});
