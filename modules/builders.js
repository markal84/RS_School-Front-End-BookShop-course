import { createEl, createLi } from "./creators.js";

const APP = document.querySelector("#app");
const WPAPPER = createEl("div", { class: "content-wrapper" });
const CONTAINER = createEl("div", { class: "container" });

//Header
export const createHeader = () => {
  const fragment = new DocumentFragment();
  const header = createEl("header", { class: "header" });

  header.append(WPAPPER);
  WPAPPER.append(CONTAINER);

  const nav = createEl("nav");
  CONTAINER.append(nav);

  const navLogo = createEl("div", { class: "nav-logo" });
  const navMenu = createEl("ul", { class: "nav-menu" });
  const navCart = createEl("div", { class: "nav-cart" });

  const menu = ["Home", "About Us", "Contact", "Delivery"];
  const menuLinks = createLi(menu);
  navMenu.append(menuLinks);

  nav.append(navLogo, navMenu, navCart);

  fragment.append(header);
  APP.append(fragment);
};
