import { openPopup } from "./helpers.js";

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

// fetch books from file

export const createBookList = () => {
  fetch("../data/books.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
      book.innerHTML = `
      <p class="book-author">${el.author}</p>
      <p class="book-image"><img src=${el.imageLink} alt="book"></img></p>
      <p class="book-title">${el.title}</p>
      <p class="book-price">${el.price} PLN<p>
      <div class="button button__show-more relative">Show more
        <span id="textPopup" class="book-descr">${el.description}</span>
      </div>
      `;

      container.append(book);
    });

    // add openPopup event to show more button
    let showMoreButton = document.querySelectorAll(".button__show-more");
    showMoreButton.forEach((el) => {
      el.addEventListener("click", openPopup);
    });
  };
};
