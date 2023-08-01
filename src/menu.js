const createMenuCard = ({ name, description, price, imgSrc }) => {
  const card = document.createElement("div");
  card.classList.add("menu-card");
  card.style.backgroundImage = `url(${imgSrc})`;
  const cardName = document.createElement("h3");
  cardName.textContent = name;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("price");
  cardPrice.textContent = `$${price}.99`;

  card.appendChild(cardName);
  card.appendChild(cardDescription);
  card.appendChild(cardPrice);
  return card;
};

const createMenu = () => {
  console.log("createMenu");
  const menu = document.createElement("div");
  menu.classList.add("menu-items");

  const menuItems = [
    {
      name: "Pizza",
      description: "A delicious pizza with tomato sauce, mozarella and basil.",
      price: "15",
      imgSrc: "../src/imgs/pizza.jpg",
    },
    {
      name: "Burger",
      description: "Beef burger with cheddar cheese, bacon and onion rings.",
      price: "10",
      imgSrc: "../src/imgs/burger.jpg",
    },
    {
      name: "Fries",
      description: "Crispy golden fries with salt.",
      price: "5",
      imgSrc: "../src/imgs/fries.jpg",
    },
    {
      name: "Sushi",
      description: "Fresh salmon sushi with avocado and edamame.",
      price: "12",
      imgSrc: "../src/imgs/sushi.jpg",
    },
  ];

  menuItems.forEach((item) => {
    menu.appendChild(createMenuCard(item));
  });

  return menu;
};

export default createMenu;
