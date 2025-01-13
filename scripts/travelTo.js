//Ritas kod:
// let travelToGlobal = ""; // global variabel för att spara användarens resmål
export function submitTravelTo(event) {
  event.preventDefault(); // förhindrar att formuläret laddar om sidan

  // hämta användarens input från text fältet
  const inputElement = document.querySelector("#formTo input[type='text']");
  const userInput = inputElement.value;

  if (userInput === "") {
    alert("Skriv in en resmål för att fortsätta");
    return;
  }

  // spara input i den globala variabeln
  travelTo = userInput;

  console.log("Resmål:", travelTo); // kontrollera att värdet lagras

  goToNextSection(); // anropa funktionen goToNextSection

  // // dölj den aktuella sektionen
  // const currentSection = document.querySelector(".landing-page");
  // currentSection.classList.add("hidden");

  // // visa nästa sektion
  // //   const nextSection = document.querySelector(".next-section");
  // //   if (nextSection) {
  // //     nextSection.style.display = "block";
  // //   }
  // document.querySelectorAll(".landing-page")[1].classList.remove("hidden");

  // uppdatera texten i nästa sektion
  //   const destinationDisplay = document.getElementById("destination-display");
  //   if (destinationDisplay) {
  //     destinationDisplay.textContent = travelToGlobal;
  //   }
}
