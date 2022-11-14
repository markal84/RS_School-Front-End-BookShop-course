// temporary put inside creators > createBookList

import { createEl } from "./creators.js";

export const cart = () => {
  // cart icon
  const cartIcon = document.querySelector("#cart-icon-el");

  // cart modal overlay
  const cartModalOverlay = createEl("div", {
    class: "cart-modal-overlay",
    style: "opacity:0",
  });
  cartIcon.append(cartModalOverlay);

  // show overlay on cart icon click
  cartIcon.addEventListener("click", () => {
    cartModalOverlay.style.opacity === "0"
      ? (cartModalOverlay.style.opacity = "1")
      : (cartModalOverlay.style.opacity = "0");
  });

  // total number of items shown on span cart
  let numberItems = 0;
  //select place when total will be displayed
  const displayNumbers = document.querySelector("#cart-quantity-total");

  //console.log(displayNumbers);

  const addToCart = document.querySelectorAll(".button__add-to-cart");
  //console.log(addToCart);

  addToCart.forEach((el) => {
    el.addEventListener("click", () => {
      numberItems++;
      if (numberItems > 0) {
        displayNumbers.classList.add("visible");
      } else {
        displayNumbers.classList.remove("visible");
      }
      console.log("number of items in cart is " + numberItems);
      displayNumbers.textContent = `${numberItems}`;
    });
    return numberItems;
  });
};
