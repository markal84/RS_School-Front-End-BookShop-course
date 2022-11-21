// temporary put inside creators > createBookList

import { createEl } from "./creators.js";
import {
  showCart,
  closeCart,
  closeCartOverlay,
  showCartOverlay,
  onDragStart,
  onDragOver,
  onDrop,
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

  //total row
  const cartBlockTotal = createEl("div", { class: "products-total" });

  const productTotal = `
    <h3 class="cart-total">Total</h1>
    <span class="total-price">0 PLN</span>
    <div class="button-purchase"><a class="cart-checkout" href="./pages/order.html?total=" target="_blank">Proceed To Checkout</a></div>
  `;

  cartBlockTotal.innerHTML = productTotal;

  //append cart block content
  cartBlockContent.append(
    cartBlockContentNoItem,
    cartBlockContentItems,
    cartBlockTotal
  );

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
    const productRow = createEl("div", {
      class: "product-row",
      style: "transform: translateX(0)",
    });

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

    console.log("added to cart");
  };

  const enableLink = () => {
    const products = document.querySelector(".product-rows");
    const product = document.querySelector(".product-row");
    const checkout = document.querySelector(".cart-checkout");
    //checkout.setAttribute("disabled");
    //console.log(products.contains(product));
    if (!products.contains(product)) {
      checkout.classList.add("disabled");
    } else {
      checkout.classList.remove("disabled");
    }
  };

  //update total price

  const updateCartPrice = () => {
    let total = 0;
    const productRow = document.querySelectorAll(".product-row");
    for (let i = 0; i < productRow.length; i++) {
      const cartRow = productRow[i];
      //console.log("numbers of items in cart is " + productRow.length);
      const productPrice = cartRow.querySelectorAll(".cart-price")[0];
      //console.log(productPrice);
      //console.log(productPrice.innerHTML);
      //console.log(parseFloat(productPrice.innerHTML).toFixed(2));
      let price = parseFloat(productPrice.innerHTML);
      //console.log("price is " + typeof price);
      //Number(price);
      //console.log("price is now a " + typeof price);
      //console.log("price of item is " + price);
      total += price;
      //console.log(typeof total);
      //console.log("total sum is " + total);
    }
    //console.log("total sum is " + total);
    document.querySelector(".total-price").innerHTML = total + ".00 PLN";
  };

  //remove item from cart
  // think how to simplify this function
  const removeItem = (e) => {
    const buttonClicked = e.target;
    buttonClicked.parentElement.style.transform = "translateX(600px)";
    buttonClicked.parentElement.remove();
    const productsRow = document.querySelector(".product-rows");
    const displayNumbers = document.querySelector("#cart-quantity-total");
    const displayNumbersCart = document.querySelector(
      "#cart-block-title-items"
    );
    //console.log(buttonClicked.parentElement);
    const cartQuantity = productsRow.children.length;
    displayNumbers.textContent = cartQuantity;
    displayNumbersCart.textContent = `(${cartQuantity})`;
    if (cartQuantity === 0) {
      document.querySelector(".no-items-text").innerText =
        "No items in cart yet";
    }
    updateCartPrice();
    enableLink();
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
    updateCartPrice();
  };

  for (let i = 0; i < addToCart.length; i++) {
    const button = addToCart[i];
    //console.log(addToCart);
    button.addEventListener("click", addToCartClicked);
  }

  //add drag and drop function
  const productImgs = document.querySelectorAll(".product-img");
  productImgs.forEach((img) => {
    img.addEventListener("dragstart", onDragStart);
  });

  cartIcon.addEventListener("dragover", onDragOver);
  cartIcon.addEventListener("drop", onDrop);
};
