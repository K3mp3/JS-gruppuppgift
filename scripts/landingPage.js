export const test = () => {
	console.log('hej');
};

function init() {
	menuOverlay = document.querySelector('.menu-overlay');

	gsap.to(menuOverlay, { x: width, opacity: 0 });

	/* Create eventlisteners */
	window.addEventListener('resize', updateScreenSize);
	window.addEventListener('scroll', changeNavColor);
	window.addEventListener('resize', removeClass);

	/* Calling functions */
	createEventListeners();
	removeClass();
	checkScreenSize();
	navAnimation();
}

//Ritas kod:
let travelToGlobal = ''; // global variabel för att spara användarens resmål
function travelTo(event) {
	event.preventDefault(); // förhindrar att formuläret laddar om sidan

	// hämta användarens input från text fältet
	const inputElement = document.querySelector("#fromTo input[type='text']");
	const userInput = inputElement.value;

	// spara input i den globala variabeln
	travelToGlobal = userInput;

	console.log('Resmål:', travelToGlobal); // kontrollera att värdet lagras

	// dölj den aktuella sektionen
	const currentSection = document.querySelector('.landing-page');
	currentSection.style.display = 'none';

	// visa nästa sektion
	const nextSection = document.querySelector('.next-section');
	if (nextSection) {
		nextSection.style.display = 'block';
	}

	// uppdatera texten i nästa sektion
	const destinationDisplay = document.getElementById('destination-display');
	if (destinationDisplay) {
		destinationDisplay.textContent = travelToGlobal;
	}
}
