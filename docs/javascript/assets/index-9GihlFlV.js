import"./header-DV6QWvkS.js";import"./navbar-fVm69lwt.js";const o={USD:1,EUR:.85,GBP:.74,INR:74.63};document.getElementById("addCurrencyButton").addEventListener("click",function(){const e=document.getElementById("customCurrency").value.toUpperCase();if(e&&!o[e]){const t=parseFloat(prompt(`Enter exchange rate for 1 USD to ${e}`));isNaN(t)?alert("Invalid exchange rate. Please enter a valid number."):(o[e]=t,u())}else o[e]?alert(`Currency ${e} already exists.`):alert("Invalid currency code. Please enter a valid code (e.g., CAD).")});function u(){const e=document.getElementById("fromCurrency"),t=document.getElementById("toCurrency");e.innerHTML="",t.innerHTML="";for(const r in o){const n=document.createElement("option");n.value=r,n.innerText=r,e.appendChild(n);const c=n.cloneNode(!0);t.appendChild(c)}t.innerHTML+='<option value="custom">Custom</option>'}document.getElementById("convertButton").addEventListener("click",a);function a(){const e=parseFloat(document.getElementById("amount").value),t=document.getElementById("fromCurrency").value,r=document.getElementById("toCurrency").value,n=document.getElementById("result");if(isNaN(e)){alert("Please enter a valid amount.");return}const c=e/o[t]*o[r];n.value=c.toFixed(2)}u();
