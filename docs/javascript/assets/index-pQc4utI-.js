import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const r=document.getElementById("css-code"),t=document.querySelectorAll("input[type='range']");t.forEach(function(e){e.addEventListener("input",s)});const o=document.querySelectorAll("input[type='number']");o.forEach(function(e){e.addEventListener("change",s)});function s(){const e=t[0].value,n=t[1].value,c=t[2].value,u=t[3].value,i=o[0].value,l=o[1].value,d=`${e}% ${100-e}% ${100-c}% ${c}% / ${u}% ${n}% ${100-n}% ${100-u}%`;document.getElementById("blob").style.cssText=`border-radius: ${d}; height: ${i}px; width: ${l}px`,r.value=`border-radius: ${d};`}document.getElementById("copy").addEventListener("click",function(){r.select(),document.execCommand("copy"),alert("Code copied!")});
