(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("a");return n.textContent=e,n.href=t,n},t=(e,t)=>{const n=document.createElement("div");n.classList.add("slideshow-container");const i=document.createElement("img");i.classList.add("slide","fade"),i.src=e;const d=document.createElement("div");return d.classList.add("slide-text"),d.textContent=t,n.appendChild(i),n.appendChild(d),n};function n(e,t){const n=document.createElement("div");n.classList.add("info-box");const i=document.createElement("h2");i.textContent=e;const d=document.createElement("p");return d.textContent=t,n.appendChild(i),n.appendChild(d),n}function i(e){const t=document.querySelectorAll(".slide");t.forEach((e=>e.style.display="none")),t[e].style.display="block"}function d(){const e=document.querySelectorAll(".slide");let t=0;e.forEach(((e,n)=>{"block"===e.style.display&&(t=n)})),t=(t+1)%e.length,i(t)}document.getElementById("content").appendChild((()=>{const t=document.createElement("header");return t.appendChild(document.createElement("h1")).textContent="Someone's Dinner",t.appendChild((()=>{const t=document.createElement("div");t.classList.add("nav-wrapper");const n=document.createElement("nav");return n.appendChild(e("Home","#")),n.appendChild(e("Menu","#")),n.appendChild(e("Contact","#")),t.appendChild(n),t})()),t})()),document.getElementById("content").appendChild((()=>{const e=document.createElement("div");e.classList.add("home-page"),e.appendChild(t("../src/imgs/cafe.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.appendChild(t("../src/imgs/dessert.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n       do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.appendChild(t("../src/imgs/glasses.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n       do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.appendChild(t("../src/imgs/pancake.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n       do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),e.appendChild(t("../src/imgs/sandwich.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n       do eiusmod tempor incididunt ut labore et dolore magna aliqua."));const i=document.createElement("div");return i.classList.add("info-wrapper"),i.appendChild(n("About us","Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n      sed do eiusmod tempor incididunt ut labore et dolore magna \n      aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n      ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit\n      esse cillum dolore eu fugiat nulla pariatur.")),i.appendChild(n("Our Services","Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n      sed do eiusmod tempor incididunt ut labore et dolore magna \n      aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n      ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit\n      esse cillum dolore eu fugiat nulla pariatur.")),e.appendChild(i),e})()),i(0),setInterval(d,5e3)})();