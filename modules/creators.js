export const createEl = (type, attributes) => {
  const el = document.createElement(type);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  return el;
};

export const createLi = (arr) => {
  let fragment = new DocumentFragment();
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `<a href="#">${el}</a>`;
    fragment.appendChild(li);
  });
  return fragment;
};
