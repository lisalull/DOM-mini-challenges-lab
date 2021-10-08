"use strict";

//#1
const limeCola = document.querySelector(".lime-cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");
const allVendingButtons = document.querySelectorAll(".button");
const costContainer = document.querySelector(".cost-container");
let totalCost = 0;

// limeCola.addEventListener("click", () => {
// totalCost += 2;
// costContainer.textContent = `Total Cost: $${totalCost}.00`;
// });

// peanuts.addEventListener("click", () => {
//   totalCost += 3;
//   costContainer.textContent = `Total Cost: $${totalCost}.00`;
// });

// chocolate.addEventListener("click", () => {
//   totalCost += 4;
//   costContainer.textContent = `Total Cost: $${totalCost}.00`;
// });

// gummies.addEventListener("click", () => {
//   totalCost += 6;
//   costContainer.textContent = `Total Cost: $${totalCost}.00`;
// });

//using the data attribute + querySelectorAll + forEach
allVendingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const amount = button.getAttribute("data-amount");
    totalCost += parseInt(amount);
    costContainer.textContent = `Total Cost: $${totalCost}.00`;
  });
});

//#2
const moneyForm = document.querySelector(".money-form");
const moneyContainer = document.querySelector(".money-container");
const penny = document.querySelector(".penny");
const nickel = document.querySelector(".nickel");
const dime = document.querySelector(".dime");
const quarter = document.querySelector(".quarter");

moneyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let count = document.querySelector("#number").value;
  let type = document.querySelector("#coin-type").value;
  for (let i = 0; i < count; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add(type);
    moneyContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.style.display = "none";
    });
  }
});

//#3
const lightBulb = document.querySelector(".light-bulb");
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("yellow");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("yellow");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
});
