const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const inputs = document.querySelectorAll(".blur");

// validate on blur

const validateField = (e) => {
  //const namePatternRegex = new RegExp("^[a-zA-Z]*$");
  const target = e.target;
  const namePattern = target.getAttribute("pattern");
  //let message = target.parentElement.querySelector(".no-valid").innerHTML;
  const namePatternRegex = new RegExp(namePattern);
  //console.log(namePattern);
  console.log("testing again pattern: " + namePatternRegex);
  const nameInput = target.value;
  const result = namePatternRegex.test(nameInput);
  if (result && nameInput != "") {
    console.log("validation success");
    target.classList.remove("error");
    target.parentElement.querySelector(".no-valid").innerHTML = "";
  } else {
    console.log("validation failed");
    target.classList.add("error");
    target.parentElement.querySelector(
      ".no-valid"
    ).innerHTML = ` Please correct`;
  }
};

for (el of inputs) {
  el.addEventListener("blur", validateField);
}

// delivery date no earlier than nex day

const dateInput = document.querySelector("#delivery");

let today = new Date();
const tomorrow = new Date(today.setDate(today.getDate() + 1))
  .toISOString()
  .split("T")[0];
//console.log(tomorrow);

dateInput.setAttribute("min", tomorrow);

// select max 2 checkboxes

for (el of checkboxes) {
  el.addEventListener("click", (e) => {
    checkboxes.forEach((x) => {
      if (e.target != x) {
        x.checked = false;
      }
    });
  });
}
