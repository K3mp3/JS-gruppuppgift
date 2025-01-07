export function manageTravelPlans() {
    function addNewTravelPlan() {
        travelPlan = {
            travelTo,
            travelFrom,
            travelDate,
            travelTransport,
            bucketList
        };

        travelPlans.push({ ...travelPlan });
        updateTravelList();
    }

    function updateTravelList() {
        const travelListElement = document.querySelector('.landing-page ul#travelList');
        travelListElement.innerHTML = ''; // Rensa tidigare lista

        travelPlans.forEach((plan, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${plan.travelFrom} till ${plan.travelTo} den ${plan.travelDate} med ${plan.travelTransport}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Redigera';
            editButton.addEventListener('click', () => editTravelPlan(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Ta bort';
            deleteButton.addEventListener('click', () => deleteTravelPlan(index));

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            travelListElement.appendChild(listItem);
        });
    }

    function deleteTravelPlan(index) {
        travelPlans.splice(index, 1); 
        updateTravelList();
    }

    function editTravelPlan(index) {
        let plan = travelPlans[index];

        const newTo = prompt("Ändra destination:", plan.travelTo);
        const newFrom = prompt("Ändra startplats:", plan.travelFrom);
        const newDate = prompt("Ändra datum:", plan.travelDate);
        const newTransport = prompt("Ändra transportmedel:", plan.travelTransport);

        if (newTo && newFrom && newDate && newTransport) {
            travelPlans[index] = {
                ...plan,
                travelTo: newTo,
                travelFrom: newFrom,
                travelDate: newDate,
                travelTransport: newTransport
            };

            updateTravelList();
        }
    }

    document.querySelector('#formTo').addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindra sidladdning

        travelTo = document.querySelector('input[placeholder="Stockholm"]').value;
        travelFrom = document.querySelector('input[placeholder="Malmö"]').value;
        travelDate = document.querySelector('input[type="date"]').value;
        travelTransport = document.querySelector('#transport').value;

        if (travelTo && travelFrom && travelDate && travelTransport) {
            addNewTravelPlan(); // Lägg till ny resplan
        } else {
            alert('Vänligen fyll i alla fält'); // Visa varning
        }
    });
}