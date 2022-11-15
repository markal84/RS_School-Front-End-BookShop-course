// temporary put inside creators > createBookList

import { createEl } from "./creators.js";
import {
  showCart,
  closeCart,
  closeCartOverlay,
  showCartOverlay,
} from "./helpers.js";

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
    style: "transform: translateX(102%)",
  });
  cartModalOverlay.append(cartModal);

  //cart top block
  const cartBlockTop = createEl("div", { class: "cart-block" });

  cartBlockTop.innerHTML = `
    <div class="cart-block-title">Shopping Cart <span id="cart-block-title-items">(0)</span></div>
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

  //cart content block
  const cartBlockContent = createEl("div", {
    class: "cart-block-content relative",
  });
  cartModal.append(cartBlockContent);

  //cart content block no items
  const cartBlockContentNoItem = createEl("div", { class: "no-items" });
  cartBlockContentNoItem.innerHTML = `<p class="no-items-text">No items in cart yet</p>`;

  //cart contect block added products list
  const cartBlockContentItems = createEl("div", { class: "product-rows" });

  //cart content block added product
  //const cartBlockContentItem = createEl("div", { class: "product-row" });
  //cartBlockContentItems.append(cartBlockContentItem);

  //append cart block content
  cartBlockContent.append(cartBlockContentNoItem, cartBlockContentItems);

  //show cart on cart icon click
  cartIcon.addEventListener("click", showCart);

  // show overlay on cart icon click
  cartIcon.addEventListener("click", showCartOverlay);

  //close modal overlay on overlay click
  cartModalOverlay.addEventListener("click", closeCartOverlay);

  //hide cart modal on close btn click
  cartCloseButton.addEventListener("click", closeCart);

  /// Add item to cart

  const addToCart = document.querySelectorAll(".button__add-to-cart");
  //console.log(addToCart);

  const addItemToCart = (price, imageSrc, author, title) => {
    const productsRow = document.querySelector(".product-rows");
    //const productRow = document.querySelector(".product-row");
    const productRow = createEl("div", { class: "product-row" });
    //console.log(productsRow);

    const productRowItems = `
      <img class="cart-image" src="${imageSrc}" alt="cart product image">
      <div class="cart-info">
        <p class="cart-author">${author}</p>
        <p class="cart-title">${title}</p>
        <p class="cart-price">${price}</p>
      </div> 
      <div class="button-remove-product">Remove</button>
    `;

    productRow.innerHTML = productRowItems;
    productsRow.append(productRow);
    const removeItemButton = document.querySelectorAll(
      ".button-remove-product"
    );
    for (let i = 0; i < removeItemButton.length; i++) {
      const button = removeItemButton[i];
      button.addEventListener("click", removeItem);
    }

    console.log("added to cart");

    //update number of items
    const displayNumbers = document.querySelector("#cart-quantity-total");
    const displayNumbersCart = document.querySelector(
      "#cart-block-title-items"
    );
    const cartQuantity = productsRow.children.length;
    displayNumbers.textContent = cartQuantity;
    displayNumbersCart.textContent = `(${cartQuantity})`;

    //remove there is no items in cart text
    document.querySelector(".no-items-text").innerText = "Selected items";
  };

  //remove item from cart
  // think how to simplify this function
  const removeItem = (e) => {
    const buttonClicked = e.target;
    buttonClicked.parentElement.remove();
    const productsRow = document.querySelector(".product-rows");
    const displayNumbers = document.querySelector("#cart-quantity-total");
    const displayNumbersCart = document.querySelector(
      "#cart-block-title-items"
    );
    const cartQuantity = productsRow.children.length;
    displayNumbers.textContent = cartQuantity;
    displayNumbersCart.textContent = `(${cartQuantity})`;
    if (cartQuantity === 0) {
      document.querySelector(".no-items-text").innerText =
        "No items in cart yet";
    }
    console.log("removed from cart");
  };

  const addToCartClicked = (e) => {
    const button = e.target;
    const parent = button.closest("li");
    const cartItem = parent;
    //console.log(cartItem);
    let price = cartItem.querySelectorAll(".book-price")[0].innerText;
    //return price
    //console.log("item price " + price);

    let imageSrc = cartItem.querySelectorAll(".product-img")[0].src;
    //console.log(imageScr);

    //return author
    let author = cartItem.querySelectorAll(".book-author")[0].innerText;

    //return title
    let title = cartItem.querySelectorAll(".book-title")[0].innerText;
    addItemToCart(price, imageSrc, author, title);
    //updateCartPrice();
  };

  for (let i = 0; i < addToCart.length; i++) {
    const button = addToCart[i];
    //console.log(addToCart);
    button.addEventListener("click", addToCartClicked);
  }
};
