import { test } from "./scripts/landingPage.js";
import { submitTravelTo } from "./scripts/travelTo.js";
import { submitTravelForm } from "./scripts/travelFrom.js";
import { submitTravelDate } from "./scripts/travelDate.js";
import { updateTravelTransport } from "./scripts/travelTransport.js";

test();

function init() {
  // let formTo = document.querySelector("#formTo");
  // formTo.addEventListener("submit", testAlert);

  let formTo = document.querySelector("#formTo");
  formTo.querySelector("input").focus();
  formTo.addEventListener("submit", submitTravelTo);

  let formFrom = document.querySelector("#formFrom");

  formFrom.addEventListener("submit", submitTravelForm);

  document
    .getElementById("formDate")
    .addEventListener("submit", submitTravelDate); // Lägg till lyssnaren här

  document
    .querySelector(".travel-transport-form")
    .addEventListener("submit", updateTravelTransport);
}

init();
