// Let travelDate be a global variable to store the selected travel date
export let travelDate = '';

export function submitTravelDate(event) {
  event.preventDefault(); // Prevents the form from reloading the page

  // Fetch the user's input from the date field
  const dateInputElement = document.querySelector(
    "#formDate input[type='date']"
  );
  const selectedDate = dateInputElement.value;

  if (!selectedDate) {
    alert('Vänligen välj ett datum för att fortsätta');
    return;
  }

  // Convert the selected date to [year, month, day] format
  const dateObj = new Date(selectedDate);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are zero-based
  const day = dateObj.getDate(); // Get the day of the month
  travelDate = [year, month, day];

  console.log('Resedatum (år, månad, dag):', travelDate); // Verify the stored value

  // Hide the current section
  const currentSection = document.querySelector('.landing-page:nth-child(3)');
  currentSection.classList.add('hidden');

  // Show the next section
  const nextSection = document.querySelector('.landing-page:nth-child(4)');
  if (nextSection) {
    nextSection.classList.remove('hidden');
  }

  // Update text or content in the next section if needed
  const dateDisplay = document.getElementById('date-display');
  if (dateDisplay) {
    dateDisplay.textContent = `Ditt valda resedatum är: ${year}-${month}-${day}`;
  }
}
