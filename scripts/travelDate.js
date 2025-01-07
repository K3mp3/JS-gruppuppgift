import { setTravelDate } from './globalVariables.js'; // Importera setTravelDate från globalVariables.js

export const handleTravelDateSubmit = (event) => {
  event.preventDefault();
  console.log('Formuläret har skickats, förhindrar reload...');

  // Hämta värdet från inputfältet
  let travelDateInput = document.querySelector('#travelDateInput'); // Matcha ID från HTML
  let selectedDate = travelDateInput.value;
  console.log('Användarens valda datum:', selectedDate);

  // Uppdatera den globala variabeln och travelPlan
  function updateTravelDate() {
    // Referera direkt till globala travelDate och travelPlan
    travelDate = selectedDate; // Uppdatera den globala variabeln
    travelPlan.travelDate = selectedDate; // Uppdatera objektet i travelPlan
  }

  // Validera att ett datum är valt
  if (!selectedDate) {
    alert('Vänligen välj ett datum.');
    console.log('Datum inte valt, avbryter...');
    return; // Avbryt funktionen om inget datum är valt
  }

  setTravelDate(selectedDate);

  // Bekräfta sparandet
  console.log('Resedatum sparat:', selectedDate);
};

// Lägg till eventlyssnare för formuläret
document
  .querySelector('#travelDateForm')
  .addEventListener('submit', handleTravelDateSubmit);
