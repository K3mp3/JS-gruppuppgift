export class TravelPlanner {
    constructor() {
        this.travelPlans = [];
        this.currentStep = 0;
        this.sections = document.querySelectorAll('.landing-page');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Form submission handler
        document.querySelectorAll('form').forEach((form, index) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e, index);
            });
        });

        // Initialize edit/delete handlers
        this.updateTravelList();
    }

    handleFormSubmit(event, stepIndex) {
        const form = event.target;
        
        switch(stepIndex) {
            case 0: // Destination
                this.setTravelDetail('travelTo', form.querySelector('input').value);
                break;
            case 1: // Origin
                this.setTravelDetail('travelFrom', form.querySelector('input').value);
                break;
            case 2: // Date
                this.setTravelDetail('travelDate', form.querySelector('input[type="date"]').value);
                break;
            case 3: // Transport
                this.setTravelDetail('travelTransport', form.querySelector('#transport').value);
                this.addNewTravelPlan();
                break;
        }

        if (stepIndex < 3) {
            this.nextStep();
        }
    }

    setTravelDetail(key, value) {
        if (!value) {
            throw new Error('Vänligen fyll i alla fält');
        }
        this.currentPlan = {
            ...this.currentPlan,
            [key]: value
        };
    }

    nextStep() {
        if (this.currentStep < this.sections.length - 1) {
            this.sections[this.currentStep].style.display = 'none';
            this.currentStep++;
            this.sections[this.currentStep].style.display = 'block';
        }
    }

    addNewTravelPlan() {
        if (this.validateTravelPlan(this.currentPlan)) {
            this.travelPlans.push({
                ...this.currentPlan,
                id: Date.now(),
                bucketList: []
            });
            this.updateTravelList();
            this.resetForm();
        }
    }

    validateTravelPlan(plan) {
        const requiredFields = ['travelTo', 'travelFrom', 'travelDate', 'travelTransport'];
        return requiredFields.every(field => plan && plan[field]);
    }

    updateTravelList() {
        const travelListElement = document.querySelector('#travelList');
        if (!travelListElement) return;

        travelListElement.innerHTML = '';
        
        this.travelPlans.forEach((plan, index) => {
            const listItem = this.createTravelListItem(plan, index);
            travelListElement.appendChild(listItem);
        });
    }

    createTravelListItem(plan, index) {
        const listItem = document.createElement('li');
        listItem.className = 'travel-plan-item';
        
        const transportDisplay = TRANSPORT_TYPES[plan.travelTransport] || plan.travelTransport;
        
        listItem.innerHTML = `
            <div class="travel-info">
                <h3>${plan.travelFrom} → ${plan.travelTo}</h3>
                <p>Datum: ${this.formatDate(plan.travelDate)}</p>
                <p>Transport: ${transportDisplay}</p>
            </div>
            <div class="travel-actions">
                <button class="edit-btn">Redigera</button>
                <button class="delete-btn">Ta bort</button>
            </div>
        `;

        // Add event listeners
        listItem.querySelector('.edit-btn').addEventListener('click', () => this.editTravelPlan(index));
        listItem.querySelector('.delete-btn').addEventListener('click', () => this.deleteTravelPlan(index));

        return listItem;
    }

    editTravelPlan(index) {
        const plan = this.travelPlans[index];
        
        const editForm = this.createEditForm(plan);
        
        // Replace the list item with the edit form
        const listItem = document.querySelector(`#travelList li:nth-child(${index + 1})`);
        listItem.innerHTML = '';
        listItem.appendChild(editForm);
    }

    createEditForm(plan) {
        const form = document.createElement('form');
        form.className = 'edit-travel-form';
        
        form.innerHTML = `
            <input type="text" value="${plan.travelTo}" placeholder="Destination" required>
            <input type="text" value="${plan.travelFrom}" placeholder="Startplats" required>
            <input type="date" value="${plan.travelDate}" required>
            <select>
                ${Object.entries(TRANSPORT_TYPES).map(([value, label]) => 
                    `<option value="${value}" ${plan.travelTransport === value ? 'selected' : ''}>${label}</option>`
                ).join('')}
            </select>
            <button type="submit">Spara</button>
            <button type="button" class="cancel-btn">Avbryt</button>
        `;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const [to, from, date, transport] = e.target.querySelectorAll('input, select');
            
            plan.travelTo = to.value;
            plan.travelFrom = from.value;
            plan.travelDate = date.value;
            plan.travelTransport = transport.value;
            
            this.updateTravelList();
        });

        form.querySelector('.cancel-btn').addEventListener('click', () => this.updateTravelList());

        return form;
    }

    deleteTravelPlan(index) {
        if (confirm('Är du säker på att du vill ta bort denna resa?')) {
            this.travelPlans.splice(index, 1);
            this.updateTravelList();
        }
    }

    resetForm() {
        this.currentPlan = {};
        this.currentStep = 0;
        document.querySelectorAll('form').forEach(form => form.reset());
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('sv-SE');
    }
}

// Initialize the travel planner
document.addEventListener('DOMContentLoaded', () => {
    window.travelPlanner = new TravelPlanner();
});