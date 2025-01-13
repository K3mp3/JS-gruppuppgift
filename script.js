import { test } from "./scripts/landingPage.js";
import { testAlert } from "./scripts/test.js";
import { submitTravelForm } from "./scripts/travelFrom.js";
import { submitTravelTo } from "./scripts/travelTo.js";
import { submitTravelDate } from "./scripts/travelDate.js";

test();

function init() {
  // let formTo = document.querySelector("#formTo");
  // formTo.addEventListener("submit", testAlert);

  let formFrom = document.querySelector("#formFrom");

  formFrom.addEventListener("submit", submitTravelForm);
  let formTo = document.querySelector("#formTo");
  formTo.addEventListener("submit", submitTravelTo);

  document
    .getElementById("formDate")
    .addEventListener("submit", submitTravelDate); // Lägg till lyssnaren här
}

init();
// function init() {
//     menuOverlay = document.querySelector(".menu-overlay");

//     gsap.to(menuOverlay, {x: width, opacity: 0});

//     /* Create eventlisteners */
//     window.addEventListener("resize", updateScreenSize);
//     window.addEventListener("scroll", changeNavColor);
//     window.addEventListener("resize", removeClass);

//     /* Calling functions */
//     createEventListeners();
//     removeClass();
//     checkScreenSize();
//     navAnimation();
// }
