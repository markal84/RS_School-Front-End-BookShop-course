const form = document.querySelector("form");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const inputs = document.querySelectorAll(".blur");
const date = document.querySelector("#delivery");
const submitBtn = document.querySelector(".cart-checkout");
const confirm = document.querySelector("#form-data");

// enable submit on complete form and validation
submitBtn.disabled = true; //disable by default

const checkForm = () => {
  //console.log("input value is now " + inputs[0].getAttribute("valid"));
  /*if (inputs[0].getAttribute("valid") == "true") {
    submitBtn.disabled = false;
    console.log("all done! can order");
  } else {
    submitBtn.disabled = true;
    console.log("still checking");
  }*/
  for (el of inputs) {
    if (el.getAttribute("valid") === "true") {
      submitBtn.disabled = false;
      console.log("input validated");
    } else {
      submitBtn.disabled = true;
      console.log("input not validated");
    }
  }
};

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
    //console.log("validation success");
    target.classList.remove("error");
    target.parentElement.querySelector(".no-valid").innerHTML = "";
    target.setAttribute("valid", true);
  } else {
    //console.log("validation failed");
    target.classList.add("error");
    target.parentElement.querySelector(
      ".no-valid"
    ).innerHTML = ` Please correct`;
    target.setAttribute("valid", false);
  }
  checkForm();
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

//display data from form

const showData = (e) => {
  e.preventDefault();
  confirm.innerHTML = document.querySelector("#name").value;
};

submitBtn.addEventListener("click", showData);
