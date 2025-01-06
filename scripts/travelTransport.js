const transportForm = document.querySelector('form[action="#"]');
const transportSelect = document.querySelector('#transport');

// Function to update global variable and travelPlan object
function updateTravelTransport() {
    travelTransport = transportSelect.value; // Update global variable
    travelPlan.travelTransport = travelTransport; // Update travelPlan object
}

transportForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
  
    // Update transport information
    updateTravelTransport();
  
    // Hide current section
    const currentSection = transportForm.closest('.landing-page');
    if (currentSection) {
      currentSection.style.display = 'none';
    } else {
      console.error('Current section not found.');
    }
  
    // Display the next section (assuming it’s the summary container)
    const nextSection = document.querySelector('.summary-container');
    if (nextSection) {
      nextSection.style.display = 'block';
    } else {
      console.error('Next section not found.');
    }
  
    console.log('Updated travelPlan:', travelPlan); // For testing
  });