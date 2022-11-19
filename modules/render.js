import {
  createHeader,
  createDivider,
  createHero,
  createBooksCatalog,
  createFooter,
} from "./builders.js";

export const renderPage = () => {
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
};
