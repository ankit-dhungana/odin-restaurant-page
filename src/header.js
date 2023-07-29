const createNavElem = (text, href) => {
  const elem = document.createElement("a");
  elem.textContent = text;
  elem.href = href;
  return elem;
};

const createNav = () => {
  const navHolder = document.createElement("div");
  navHolder.classList.add("nav-wrapper");
  const nav = document.createElement("nav");
  nav.appendChild(createNavElem("Home", "#"));
  nav.appendChild(createNavElem("Menu", "#"));
  nav.appendChild(createNavElem("Contact", "#"));
  navHolder.appendChild(nav);
  return navHolder;
};

const createHeader = () => {
  const header = document.createElement("header");
  header.appendChild(document.createElement("h1")).textContent =
    "Someone's Dinner";
  header.appendChild(createNav());
  return header;
};
export default createHeader;
