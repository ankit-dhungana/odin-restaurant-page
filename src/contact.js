const contactPage = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact US";

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");

  contactCard.appendChild(document.createElement("p")).textContent =
    "Address: 1234 Main St, Anytown, USA";
  contactCard.appendChild(document.createElement("p")).textContent =
    "Phone: 555-555-5555";
  contactCard.appendChild(document.createElement("p")).textContent =
    "Email: emailus@email.com";

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactCard);
  contact.appendChild(contactInfo);

  return contact;
};

export default contactPage;
