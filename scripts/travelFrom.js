export const submitTravelForm = (event) => {
  event.preventDefault();
  const userInput = document.getElementById("user-input").value;

  if (userInput === "") {
    alert("Please enter a valid location");
    return;
  }

  travelFrom = userInput;
  // document.querySelectorAll(".landing-page")[1].classList.add("hidden");
  // document.querySelectorAll(".landing-page")[2].classList.remove("hidden");
  goToNextSection();
};
