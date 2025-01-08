import { test } from './scripts/landingPage.js';
import { testAlert } from './scripts/test.js';
import { submitTravelDate } from './scripts/travelDate.js';
document
  .querySelector('#formDate')
  .addEventListener('submit', submitTravelDate);

test();

function init() {
  let travelDateForm = document.querySelector('#travelDateForm');
  if (travelDateForm) {
    travelDateForm.addEventListener('submit', submitTravelDate);
  }
  // let formTo = document.querySelector("#formTo");
  // formTo.addEventListener("submit", testAlert);
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
