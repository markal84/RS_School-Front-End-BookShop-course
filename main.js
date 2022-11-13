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

/*
///// Main Page
*/
/*
//// Header & nav
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
