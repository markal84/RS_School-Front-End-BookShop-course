/*
Imports
*/
import { elCreator } from "./modules/elCreator.js";

/*
Main
*/

const app = document.getElementById("app");

const div = document.createElement("div");

div.textContent = "div text";

app.appendChild(div);

const header = elCreator("div", { class: "my-class" });
app.appendChild(header);

const nav = elCreator("nav", { class: "nav-class" });
header.appendChild(nav);

const ul = elCreator("ul", { class: "ul-class" });
ul.innerHTML = `<li> link1 </li> <li> link 2 </li>`;

nav.appendChild(ul);
