import header from "./header";
import home from "./home";
import startSlideshow from "./slideShow";
import createMenu from "./menu";
import createContact from "./contact";

// render the header
const content = document.getElementById("content").appendChild(header());

const pageHolder = document.createElement("div");
pageHolder.classList.add("page-holder");

// render the home page by default
pageHolder.appendChild(home());

const addEventListeners = () => {
  const navElems = document.querySelectorAll(".nav-elem");

  navElems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.textContent;
      pageHolder.innerHTML = "";
      switch (page) {
        case "Home":
          pageHolder.appendChild(home());
          break;
        case "Menu":
          pageHolder.appendChild(createMenu());
          break;
        case "Contact":
          pageHolder.appendChild(createContact());
          break;
        default:
          break;
      }
    });
  });
};
addEventListeners();
// start the slideshow
content.appendChild(pageHolder);
startSlideshow();
