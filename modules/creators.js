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

export const fetchData = () => {
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
      const container = document.querySelector(".books-catalog");
      const book = createEl("li", {
        class: `book book${data.indexOf(el) + 1}`,
      });
      book.innerHTML = `Author: ${el.author}`;
      container.append(book);
    });
  };
};
