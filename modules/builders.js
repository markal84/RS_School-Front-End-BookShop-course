import { createEl, createLi, createBookList } from "./creators.js";
import { cart } from "./cart.js";

const APP = document.querySelector("#app");
const WPAPPER = createEl("div", { class: "content-wrapper" });
const CONTAINER = createEl("div", { class: "container" });

////////// Header
export const createHeader = () => {
  const fragment = new DocumentFragment();
  const header = createEl("header", { class: "header" });

  header.append(WPAPPER);
  WPAPPER.append(CONTAINER);

  ///nav
  const nav = createEl("nav");
  CONTAINER.append(nav);

  const navLogo = createEl("div", { class: "nav-logo" });
  const navMenu = createEl("ul", { class: "nav-menu" });
  const navCart = createEl("div", { id: "cart", class: " flex nav-cart" });

  //nav logo
  const logoImage = createEl("img", {
    src: "./assets/img/logo.png",
    alt: "logo image",
  });

  navLogo.append(logoImage);

  //nav menu
  const menu = ["Home", "About Us", "Contact", "Delivery"];
  const menuLinks = createLi(menu);
  navMenu.append(menuLinks);

  //nav cart
  const navCartIcon = createEl("i", {
    class: "cart-icon relative fa-solid fa-cart-shopping",
    id: "cart-icon-el",
  });
  navCart.append(navCartIcon);

  const navCartQuantity = createEl("span", {
    class: "cart-quantity absolute",
    id: "cart-quantity-total",
  });
  //navCartQuantity.textContent = "0";
  navCartIcon.append(navCartQuantity);

  // append all nav elements to nav menu
  nav.append(navLogo, navMenu, navCart);

  fragment.append(header);
  //console.log(fragment);
  APP.append(fragment);
};

export const createDivider = () => {
  const fragment = new DocumentFragment();
  const divider = createEl("section", { class: "divider" });

  const dividerWrapper = createEl("div", { class: "content-wrapper" });
  const dividerContainer = createEl("div", { class: "container" });

  divider.append(dividerWrapper);
  dividerWrapper.append(dividerContainer);

  fragment.append(divider);
  APP.append(fragment);
};

export const createHero = () => {
  const fragment = new DocumentFragment();
  const hero = createEl("section", { class: "hero" });

  const heroWrapper = createEl("div", { class: "content-wrapper" });
  const heroContainer = createEl("div", { class: "relative container" });

  const heroCaption = createEl("div", { class: "absolute hero-caption" });
  heroCaption.innerHTML = `<div class="hero-caption_title">Branded Choice</div>
     <div class="hero-caption__dscr">Best Sell Books Collection</div>
     <div class="hero-caption__button">Shop Now</div>`;

  hero.append(heroWrapper);
  heroWrapper.append(heroContainer);
  heroContainer.append(heroCaption);

  fragment.append(hero);
  APP.append(fragment);
};

export const createBooksCatalog = () => {
  const fragment = new DocumentFragment();
  const booksList = createEl("section", { class: "books" });

  const booksWrapper = createEl("div", { class: "content-wrapper" });
  const booksContainer = createEl("div", { class: "relative container" });
  const booksListCatalog = createEl("ul", { class: "books-catalog flex" });

  booksList.append(booksWrapper);
  booksWrapper.append(booksContainer);
  booksContainer.append(booksListCatalog);

  createBookList();

  fragment.append(booksList);
  APP.append(fragment);
};

export const createFooter = () => {
  const fragment = new DocumentFragment();
  const footer = createEl("footer", { class: "footer" });

  const footerWrapper = createEl("div", { class: "content-wrapper" });
  const footerContainer = createEl("div", { class: "relative container" });

  footer.append(footerWrapper);
  footerWrapper.append(footerContainer);

  fragment.append(footer);
  APP.append(fragment);
};
