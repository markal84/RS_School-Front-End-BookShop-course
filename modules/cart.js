// temporary put inside creators > createBookList

import { createEl } from "./creators.js";

export const cart = () => {
  // cart icon
  const cartIcon = document.querySelector("#cart-icon-el");

  // cart modal overlay
  const cartModalOverlay = createEl("div", {
    class: "cart-modal-overlay",
    style: "visibility: hidden; opacity: 0",
  });

  document.body.append(cartModalOverlay);

  //cart modal
  const cartModal = createEl("div", {
    class: "cart-modal",
    style: "transform:translateX(102%)",
  });
  cartModalOverlay.append(cartModal);

  //cart top block
  const cartBlockTop = createEl("div", { class: "cart-block" });

  cartBlockTop.innerHTML = `<div class="cart-block-title">Shopping Cart <span id="cart-block-title-items">(0)</span></div>
                            <div class="cart-block-close"></div>`;

  cartModal.append(cartBlockTop);

  //cart close button
  const cartCloseButton = createEl("i", {
    class: "fa-solid fa-xmark",
    id: "cart-close-btn",
  });

  //append cart close button to cart-block-close

  const cartBlockTopClose = document.querySelector(".cart-block-close");

  cartBlockTopClose.append(cartCloseButton);

  cartIcon.addEventListener("click", () => {
    cartModal.style.transform = "translateX(0)";
    console.log("open by cart button");
  });

  // show overlay on cart icon click
  cartIcon.addEventListener("click", () => {
    if (cartModalOverlay.style.visibility === "hidden") {
      cartModal.style.transform = "translateX(0)";
      cartModalOverlay.style.visibility = "visible";
      cartModalOverlay.style.opacity = "1";
      //console.log("open cart");
    } /*else {
      cartModalOverlay.style.visibility = "hidden";
      cartModalOverlay.style.opacity = "0";
      //console.log("close cart");
    }*/
    /*cartModalOverlay.style.visibility === "hidden"
      ? ((cartModalOverlay.style.visibility = "visible"),
        (cartModalOverlay.style.opacity = "1"))
      : ((cartModalOverlay.style.visibility = "hidden"),
        (cartModalOverlay.style.opacity = "0")); */
  });

  //close modal overlay on overlay click
  cartModalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-modal-overlay")) {
      console.log("closed on overlay click");
      cartModalOverlay.style.visibility = "hidden";
      cartModalOverlay.style.opacity = "0";
      cartModal.style.transform = "translateX(102%)";
    }
  });

  //hide cart modal on close btn click
  cartCloseButton.addEventListener("click", () => {
    /*cartModal.style.transform = "translateX(102%)";
    console.log("closed by close button click");*/
    cartModal.style.transform = "translateX(102%)";
    cartModalOverlay.style.visibility = "hidden";
    cartModalOverlay.style.opacity = "0";
    console.log("closed by close button click");
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
