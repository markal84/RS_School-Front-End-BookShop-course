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
