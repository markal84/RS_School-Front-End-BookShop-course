const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// delivery date no earlier than nex day

const dateInput = document.querySelector("#delivery");

let today = new Date();
const tomorrow = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];
console.log(tomorrow);

dateInput.setAttribute("min", tomorrow);

//select max 2 checkboxes

for (el of checkboxes) {
  el.addEventListener("click", (e) => {
    checkboxes.forEach((x) => {
      if (e.target != x) {
        x.checked = false;
      }
    });
  });
}
