/*
///// Imports
*/

import {
  createHeader,
  createDivider,
  createHero,
  createBooksCatalog,
  createFooter,
} from "./modules/builders.js";

import { addClassOnScroll } from "./modules/helpers.js";

//import { cart } from "./modules/cart.js";

/*
///// Main Page
*/
/*
//// Header & nav & cart
*/
createHeader();
/*
//// Divider
*/
createDivider();
/*
//// Content
*/
/*
///Hero
*/
createHero();
/*
/// Book Catalog
*/
createBooksCatalog();

/*
/// Footer
*/
createFooter();

addClassOnScroll();

//window.addEventListener("load", cart());
