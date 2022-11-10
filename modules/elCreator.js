export const elCreator = (type, attributes) => {
  const el = document.createElement(type);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  return el;
};
