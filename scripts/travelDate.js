// Array of month names (0 = January, 1 = February, ..., 11 = December)
const monthNames = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

export function submitTravelDate(event) {
  event.preventDefault(); // Prevents the form from reloading the page

  // Fetch the user's input from the date field
  const dateInputElement = document.querySelector(
    "#formDate input[type='date']"
  );
  const selectedDate = dateInputElement.value;

  if (!selectedDate) {
    alert("Vänligen välj ett datum för att fortsätta");
    return;
  }

  // Convert the selected date to [year, month, day] format
  const dateObj = new Date(selectedDate);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth(); // Get the month index (0-11)
  const day = dateObj.getDate(); // Get the day of the month

  // Store the full date as [year, month, day]
  travelDate = `${day} ${monthNames[month]} ${year}`;

  console.log("Resedatum (år, månad, dag):", travelDate); // Verify the stored value

  // Hide the current section
  const currentSection = document.querySelector(".landing-page:nth-child(3)");
  currentSection.classList.add("hidden");

  // Show the next section
  const nextSection = document.querySelector(".landing-page:nth-child(4)");
  if (nextSection) {
    nextSection.classList.remove("hidden");
  }

  // // Update text or content in the next section if needed
  // const dateDisplay = document.getElementById('date-display');
  // if (dateDisplay) {
  //   // Use the monthNames array to display the month's name instead of its number
  //   dateDisplay.textContent = `${day} ${monthNames[month]} ${year}`;
  // }
}
