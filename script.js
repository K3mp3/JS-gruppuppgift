import { test } from "./scripts/landingPage.js";
import { testAlert } from "./scripts/test.js";
import { submitTravelTo } from "./scripts/travelTo.js";
import {
  initTravelCard,
  createRandomTravelPlan,
} from "./scripts/travelCard.js";
test();

function init() {
  // let formTo = document.querySelector("#formTo");
  // formTo.addEventListener("submit", testAlert);

  let formTo = document.querySelector("#formTo");
  formTo.addEventListener("submit", submitTravelTo);

  initTravelCard();

  // for (let i = 0; i < 20; i++) {
  //   createRandomTravelPlan();
  // }

  displayTravelPlans(); // Display the travel plans
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
