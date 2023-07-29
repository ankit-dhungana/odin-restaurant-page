const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home-page");

  home.appendChild(
    slideShowContainer(
      "../src/imgs/cafe.jpg",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    )
  );

  home.appendChild(
    slideShowContainer(
      "../src/imgs/dessert.jpg",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    )
  );

  home.appendChild(
    slideShowContainer(
      "../src/imgs/glasses.jpg",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    )
  );

  home.appendChild(
    slideShowContainer(
      "../src/imgs/pancake.jpg",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    )
  );

  home.appendChild(
    slideShowContainer(
      "../src/imgs/sandwich.jpg",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
       do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    )
  );

  const infoWrapper = document.createElement("div");
  infoWrapper.classList.add("info-wrapper");
  infoWrapper.appendChild(
    createInfoBox(
      "About us",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.`
    )
  );

  infoWrapper.appendChild(
    createInfoBox(
      "Our Services",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.`
    )
  );

  home.appendChild(infoWrapper);
  return home;
};

const slideShowContainer = (imgSource, text) => {
  const slideShow = document.createElement("div");
  slideShow.classList.add("slideshow-container");

  const slideShowImage = document.createElement("img");
  slideShowImage.classList.add("slide", "fade");
  slideShowImage.src = imgSource;

  const slideShowText = document.createElement("div");
  slideShowText.classList.add("slide-text");
  slideShowText.textContent = text;

  slideShow.appendChild(slideShowImage);
  slideShow.appendChild(slideShowText);

  return slideShow;
};

function createInfoBox(title, text) {
  const infoBox = document.createElement("div");
  infoBox.classList.add("info-box");

  const infotitle = document.createElement("h2");
  infotitle.textContent = title;

  const infoText = document.createElement("p");
  infoText.textContent = text;

  infoBox.appendChild(infotitle);
  infoBox.appendChild(infoText);

  return infoBox;
}

export default createHome;
