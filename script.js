import { test } from "./scripts/landingPage.js";
import { testAlert } from "./scripts/test.js";
import { submitTravelPlans } from "./scripts/travelPlans.js";

test();

function init() {
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
