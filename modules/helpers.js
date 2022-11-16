// open popup on click

/*export const openPopup = (e.target) => {
  //e.preventDefault();
  const popup = el.querySelector(".book-descr");
  popup.classList.toggle("show");
};*/

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

//drag and drop function
//drag start
export const onDragStart = (e) => {
  //console.log(document.querySelectorAll(".product-img"));
  e.dataTransfer.setData("text/plain", e.target.id);
  console.log("start dragging " + e.target.id);
};

export const onDragOver = (e) => {
  e.preventDefault();
};
