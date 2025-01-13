import { initTravelCard } from "./travelCard.js";

const transportSelect = document.querySelector("#transport");

// Function to update global variable and travelPlan object
export function updateTravelTransport(event) {
  event.preventDefault(); // Prevent the form from submitting
  travelTransport = transportSelect.value; // Update global variable
  travelPlan.travelTransport = travelTransport; // Update travelPlan object
  // // Hide current section
  // document.querySelectorAll(".landing-page")[3].classList.add("hidden");

  // document.querySelectorAll(".landing-page")[4].classList.remove("hidden");

  goToNextSection();

  initTravelCard();
  console.log("Updated travelPlan:", travelPlan); // For testing
}
