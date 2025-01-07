// Importera eventuella moduler (om det behövs i din miljö)
// Här används export/import-mönstret för att separera kod
export function manageTravelPlans() {
    // ======= Global Array för att lagra resplaner =======
    const myTravelPlans = [];

    // ======= Funktion för att lägga till en ny resplan =======
    function addNewTravelPlan(to, from, date, transport, bucketListItems) {
        // Skapa ett nytt objekt för resan
        let newTravelPlan = {
            travelTo: to,
            travelFrom: from,
            travelDate: date,
            travelTransport: transport,
            bucketList: bucketListItems
        };

        // Lägg till resan i arrayen
        myTravelPlans.push(newTravelPlan);

        // Uppdatera listan i användargränssnittet
        updateTravelList();
    }

    // ======= Funktion för att uppdatera listan i DOM =======
    function updateTravelList() {
        const travelListElement = document.querySelector('.landing-page ul');
        travelListElement.innerHTML = ''; // Rensa tidigare lista

        // Loopa igenom alla resplaner och skapa listobjekt
        myTravelPlans.forEach((plan, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${plan.travelFrom} till ${plan.travelTo} den ${plan.travelDate} med ${plan.travelTransport}`;

            // Skapa en knapp för att redigera resplan
            const editButton = document.createElement('button');
            editButton.textContent = 'Redigera';
            editButton.addEventListener('click', () => editTravelPlan(index));

            // Skapa en knapp för att ta bort resplan
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Ta bort';
            deleteButton.addEventListener('click', () => deleteTravelPlan(index));

            // Lägg till knapparna till listobjektet
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            // Lägg till listobjektet i DOM
            travelListElement.appendChild(listItem);
        });
    }

    // ======= Funktion för att ta bort en resplan =======
    function deleteTravelPlan(index) {
        myTravelPlans.splice(index, 1); // Ta bort resan från arrayen
        updateTravelList(); // Uppdatera DOM
    }

    // ======= Funktion för att redigera en resplan =======
    function editTravelPlan(index) {
        let plan = myTravelPlans[index];
        
        // Be användaren om ny information
        const newTo = prompt("Ändra destination:", plan.travelTo);
        const newFrom = prompt("Ändra startplats:", plan.travelFrom);
        const newDate = prompt("Ändra datum:", plan.travelDate);
        const newTransport = prompt("Ändra transportmedel:", plan.travelTransport);

        // Uppdatera endast om all ny information finns
        if (newTo && newFrom && newDate && newTransport) {
            plan.travelTo = newTo;
            plan.travelFrom = newFrom;
            plan.travelDate = newDate;
            plan.travelTransport = newTransport;

            // Uppdatera DOM
            updateTravelList();
        }
    }

    // ======= Hantera formulärets inskickning =======
    document.querySelector('#formTo').addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindra sidladdning

        // Hämta värden från formuläret
        const to = document.querySelector('input[placeholder="Stockholm"]').value;
        const from = document.querySelector('input[placeholder="Malmö"]').value;
        const date = document.querySelector('input[type="date"]').value;
        const transport = document.querySelector('#transport').value;

        // Validera att inga fält är tomma
        if (to && from && date && transport) {
            addNewTravelPlan(to, from, date, transport, []); // Lägg till ny resplan
        } else {
            alert('Vänligen fyll i alla fält'); // Visa varning
        }
    });
}