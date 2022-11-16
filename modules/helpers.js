import { createEl } from "./creators.js";

export const addClassOnScroll = () => {
  let scrollPos = window.scrollY;
  const nav = document.querySelector("nav");
  //console.log(nav);
  const navHeight = nav.offsetHeight;
  //const windowHeight = window.innerHeight / 4;
  const cart = document.querySelector(".nav-cart");
  //console.log(cart);

  const addClass = () => cart.classList.add("fixed");
  const removeClass = () => cart.classList.remove("fixed");

  window.addEventListener("scroll", () => {
    scrollPos = window.scrollY;
    //console.log(window.innerHeight / 5);
    if (scrollPos >= navHeight) {
      addClass();
    } else {
      removeClass();
    }

    //console.log(scrollPos);
  });
};

/// cart helpers

export const showCart = (e) => {
  e.target.style.transform = "translateX(0)";
  console.log("open by cart button");
};

export const showCartOverlay = () => {
  const cartModalOverlayEl = document.querySelector(".cart-modal-overlay");
  const cartModalEl = document.querySelector(".cart-modal");
  if (cartModalOverlayEl.style.visibility === "hidden") {
    cartModalEl.style.transform = "translateX(0)";
    cartModalOverlayEl.style.visibility = "visible";
    cartModalOverlayEl.style.opacity = "1";
  }
};

export const closeCartOverlay = (e) => {
  const cartModalOverlayEl = document.querySelector(".cart-modal-overlay");
  const cartModalEl = document.querySelector(".cart-modal");
  if (e.target.classList.contains("cart-modal-overlay")) {
    console.log("closed on overlay click");
    cartModalOverlayEl.style.visibility = "hidden";
    cartModalOverlayEl.style.opacity = "0";
    cartModalEl.style.transform = "translateX(102%)";
  }
};

export const closeCart = () => {
  const cartModalOverlayEl = document.querySelector(".cart-modal-overlay");
  const cartModalEl = document.querySelector(".cart-modal");
  cartModalEl.style.transform = "translateX(102%)";
  cartModalOverlayEl.style.visibility = "hidden";
  cartModalOverlayEl.style.opacity = "0";
  console.log("closed by close button click");
};

//drag and drop function (refactor later - now need to copy almost all from the add to cart procedure)
//drag start
export const onDragStart = (e) => {
  //console.log(document.querySelectorAll(".product-img"));
  const parent = e.target.closest("li");
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.setData(
    "price",
    parent.querySelector(".book-price").innerText
  );
  e.dataTransfer.setData("img", parent.querySelector(".product-img").src);
  e.dataTransfer.setData(
    "author",
    parent.querySelector(".book-author").innerText
  );
  e.dataTransfer.setData(
    "title",
    parent.querySelector(".book-title").innerText
  );

  //console.log(parent.querySelector(".book-price").innerText);
  console.log("start dragging " + e.target.id);
};

export const onDragOver = (e) => {
  e.preventDefault();
};

export const onDrop = (e) => {
  const id = e.dataTransfer.getData("text");
  const price = e.dataTransfer.getData("price");
  const img = e.dataTransfer.getData("img");
  const author = e.dataTransfer.getData("author");
  const title = e.dataTransfer.getData("title");
  /*console.log(
    "price: " +
      price +
      " img src: " +
      img +
      " author: " +
      author +
      " title: " +
      title
  );*/
  const draggableElement = document.getElementById(id);
  const clone = draggableElement.cloneNode(true);
  const fragment = new DocumentFragment();
  clone.appendChild(fragment);

  //copy pase from cart
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
    console.log("removed from cart");
  };

  const dropzone = document.querySelector(".product-rows");
  //console.log(dropzone);
  const productRow = createEl("div", {
    class: "product-row",
    style: "transform: translateX(0)",
  });
  const productRowItems = `
    <img class="cart-image" src="${img}" alt="cart product image">
    <div class="cart-info">
      <p class="cart-author">${author}</p>
      <p class="cart-title">${title}</p>
      <p class="cart-price">${price}</p>
    </div> 
    <div class="button-remove-product">Remove</button>
  `;
  productRow.innerHTML = productRowItems;
  dropzone.append(productRow);
  updateCartPrice();
  const removeItemButton = document.querySelectorAll(".button-remove-product");
  for (let i = 0; i < removeItemButton.length; i++) {
    const button = removeItemButton[i];
    button.addEventListener("click", removeItem);
  }

  //update number of items
  const displayNumbers = document.querySelector("#cart-quantity-total");
  const displayNumbersCart = document.querySelector("#cart-block-title-items");
  const cartQuantity = dropzone.children.length;
  displayNumbers.textContent = cartQuantity;
  displayNumbersCart.textContent = `(${cartQuantity})`;

  //remove there is no items in cart text
  document.querySelector(".no-items-text").innerText = "Selected items";

  e.dataTransfer.clearData();
  console.log("add by drag & drop");
  //dropzone.appendChild(clone);
};
