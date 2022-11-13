// temporary put inside creators > createBookList

export const cart = () => {
  // cart icon
  const cartIcon = document.querySelector("#cart-icon-el");
  // total number of items shown on span cart
  let numberItems = 0;
  //select place when total will be displayed
  const displayNumbers = document.querySelector("#cart-quantity-total");

  //console.log(displayNumbers);

  const addToCart = document.querySelectorAll(".book");
  //console.log(addToCart);

  addToCart.forEach((el) => {
    el.addEventListener("click", () => {
      console.log("click");
      numberItems++;
      if (numberItems > 0) {
        console.log("add visible");
        displayNumbers.classList.add("visible");
      } else {
        console.log("remove visible");
        displayNumbers.classList.remove("visible");
      }
      console.log("number of items is " + numberItems);
      displayNumbers.textContent = `${numberItems}`;
    });
    return numberItems;
  });

  /*addToCart.addEventListener("click", () => {
    return numberItems++;
  });*/
};
