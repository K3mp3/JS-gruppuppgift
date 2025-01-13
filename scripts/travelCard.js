let todoInputElement = document.querySelector(".travel-card-todo-input");

// Object to store the travel plans
export let initTravelCard = () => {
  // onsubmit="return submitTodo(event)"
  document
    .querySelector(".travel-card-todo-input-container")
    .addEventListener("submit", (event) => {
      submitTodo(event);
    });

  document
    .querySelector(".travel-card-button")
    .addEventListener("click", () => {
      saveTravelPlan();
    });

  travelPlan.travelTo = travelTo;
  travelPlan.travelFrom = travelFrom;
  travelPlan.travelDate = travelDate;
  travelPlan.travelTransport = travelTransport;

  document.querySelector(
    ".travel-card-title"
  ).textContent = `${travelPlan.travelFrom} till ${travelPlan.travelTo}`;

  document.querySelector(".travel-card-date").textContent =
    travelPlan.travelDate;

  document.querySelector(".travel-card-transport-icon").textContent =
    getTransportIcon(travelPlan.travelTransport);

  let travelTransportTranslate = {
    car: "Bil",
    train: "Tåg",
    bus: "Buss",
    plane: "Flyg",
  };

  document.querySelector(".travel-card-transport").textContent =
    travelTransportTranslate[travelPlan.travelTransport];

  todoInputElement.focus();
};

//  Used to submit a todo item to the bucket list
let submitTodo = (event) => {
  event.preventDefault();

  let todo = todoInputElement.value;

  if (todo === "") {
    alert("Du måste skriva något i din att göra-lista");
    return;
  }

  let todoParentElement = document.createElement("div");
  todoParentElement.classList.add("todo-item-container");

  let checkMarkElement = document.createElement("input");

  todoParentElement.style.cursor = "pointer";
  todoParentElement.addEventListener("click", () => {
    todoParentElement.classList.toggle("checked");
    checkMarkElement.checked = !checkMarkElement.checked;
    checkTodo(todo);
  });

  checkMarkElement.type = "checkbox";
  checkMarkElement.classList.add("todo-checkbox");
  todoParentElement.appendChild(checkMarkElement);
  checkMarkElement.addEventListener("change", (event) => {
    if (event.target.checked) {
      event.target.parentElement.classList.add("checked");
    } else {
      event.target.parentElement.classList.remove("checked");
    }
  });
  let todoElement = document.createElement("div");
  todoElement.classList.add("todo-item");
  todoElement.textContent = todo;

  travelPlan.bucketList.push({ todo, checked: false });

  travelPlan.id = travelPlans.length;

  todoParentElement.appendChild(todoElement);

  document
    .querySelector(".travel-card-todo-list")
    .appendChild(todoParentElement);

  todoInputElement.value = "";
};

//  Used to check the todo item in the bucket list
let checkTodo = (todo) => {
  let todoIndex = travelPlan.bucketList.findIndex((item) => item.todo === todo);
  travelPlan.bucketList[todoIndex].checked =
    !travelPlan.bucketList[todoIndex].checked;
};

//  Used to store the travel plans and then reset the travel plan object
let saveTravelPlan = () => {
  travelPlan.id = globalID;
  globalID++;
  travelPlans.push(travelPlan);
  console.log(travelPlans);
  travelPlan = {
    travelTo: "",
    travelFrom: "",
    travelDate: "",
    travelTransport: "",
    bucketList: [],
  };
  document.querySelector(".travel-card-todo-list").innerHTML = "";
  document.querySelector(".travel-card-todo-input").value = "";

  // Send to next page

  document.querySelectorAll(".landing-page")[4].classList.add("hidden");
  document.querySelectorAll(".landing-page")[5].classList.remove("hidden");

  displayTravelPlans();
};

export let createRandomTravelPlan = () => {
  travelPlan.travelTo = `Stockholm {${Math.floor(Math.random() * 100)}}`;
  travelPlan.travelFrom = "Gothenburg";
  travelPlan.travelDate = "2022-12-24";
  travelPlan.travelTransport = "Train";
  travelPlan.bucketList = ["Gamla Stan", "Vasa Museum", "Skansen"];

  travelPlan.id = globalID;
  globalID++;
  travelPlans.push(travelPlan);
  console.log(travelPlans);
  travelPlan = {
    travelTo: "",
    travelFrom: "",
    travelDate: "",
    travelTransport: "",
    bucketList: [],
  };
};
