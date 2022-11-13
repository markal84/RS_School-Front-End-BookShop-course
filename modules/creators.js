//import { openPopup } from "./helpers.js";

//create tags

export const createEl = (type, attributes) => {
  const el = document.createElement(type);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  return el;
};

//create simple list

export const createLi = (arr) => {
  let fragment = new DocumentFragment();
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#">${el}</a>`;
    fragment.appendChild(li);
  });
  return fragment;
};

// fetch books from file and display then on the page

export const createBookList = () => {
  fetch("../data/books.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });

  const appendData = (data) => {
    data.forEach((el) => {
      //const fragment = new DocumentFragment()
      const container = document.querySelector(".books-catalog");
      const book = createEl("li", {
        class: `book book${data.indexOf(el) + 1}`,
      });
      book.innerHTML = `<p class="book-author">${el.author}</p>
      <div class="book-image relative"><img src=${
        el.imageLink
      } alt="book"></img>
      <i class="button button__add-to-cart absolute fa-solid fa-cart-plus"></i>
      </div>
      <p class="book-title">${el.title}</p>
      <p class="book-price">${el.price}.<span>00</span> PLN<p>
      <div class="button button__show-more relative"><span>Show more</span>
        <p id="textPopup${data.indexOf(el) + 1}" class="book-descr">${
        el.description
      }</p>
      </div>`;

      container.append(book);
    });

    // add openPopup event to 'show more' button
    const showMoreButton = document.querySelectorAll(".button__show-more");
    showMoreButton.forEach((el) => {
      el.addEventListener("click", () => {
        //console.log(el.tagName);
        const showDescr = el.querySelector(".book-descr");
        showDescr.classList.toggle("show");
        // work later on change text in button where class is present

        /*if (showDescr.classList.contains("show")) {
          el.querySelector(".button__show-more").innerText = "show less";
        }*/
      });
    });
  };
};
