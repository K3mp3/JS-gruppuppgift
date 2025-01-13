//  Function used for adding a new travel plan to the list of travel plans used as debug data
function addTravelPlan() {
  //   const newPlan = {
  //     travelTo: travelTo,
  //     travelFrom: travelFrom,
  //     travelDate: travelDate,
  //     travelTransport: travelTransport,
  //     bucketList: [...bucketList],
  //   };

  const newPlan = {
    travelTo: `Paris ${Math.floor(Math.random() * 100)}`,
    travelFrom: "Stockholm",
    travelDate: "2022-12-24",
    travelTransport: `Plane`,
    bucketList: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  };

  travelPlans.push(newPlan);

  // Calls a function that resets form fields or variables
  // to their default values after adding the plan
  resetVariables();
  //   displayTravelPlans();
}

// function to let the user start over with a new travel plan.
function resetVariables() {
  travelTo = "";
  travelFrom = "";
  travelDate = "";
  travelTransport = "";
  bucketList = [];
  travelPlan = {
    travelTo: "",
    travelFrom: "",
    travelDate: "",
    travelTransport: "",
    bucketList: [],
  };
}

function deleteTravelPlan(planId) {
  if (confirm("Är du säker att du vill radera den här resan?")) {
    travelPlans = travelPlans.filter((plan) => plan.id !== planId);
    displayTravelPlans();
  }
}

function toggleDetails(planId) {
  const detailsSection = document.querySelector(`#details-${planId}`);
  if (detailsSection) {
    detailsSection.style.display =
      detailsSection.style.display === "none" ? "block" : "none";
  }
}

function displayTravelPlans() {
  const travelList = document.getElementById("travelList");
  if (!travelList) return;

  travelList.innerHTML = "";

  travelPlans.forEach((plan) => {
    const listItem = document.createElement("div");
    listItem.className = "travel-plan";

    listItem.innerHTML = `
            <div class="travel-summary" onclick="toggleDetails(${plan.id})">
                <span>${plan.travelFrom} ➜ ${plan.travelTo}</span>
                <span>${getTransportIcon(plan.travelTransport)}</span>
                <span>${plan.bucketList.length} Aktiviteter planerade</span>
            </div>
            <div id="details-${
              plan.id
            }" class="travel-details" style="display: none">
                <p>Datum: ${plan.travelDate}</p>
                <h4>Planerade aktiviteter:</h4>
                <ul>
                    ${plan.bucketList
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                </ul>
                <button onclick="deleteTravelPlan(${plan.id})">Radera</button>
            </div>
        `;

    travelList.appendChild(listItem);
  });
}

function getTransportIcon(transport) {
  const icons = {
    plane: "✈️",
    train: "🚂",
    car: "🚗",
    bus: "🚌",
    boat: "⛴️",
  };
  return icons[transport.toLowerCase()] || "🚗";
}

// document.addEventListener("DOMContentLoaded", () => {
//   displayTravelPlans();
// });
