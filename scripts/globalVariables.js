// Objective: Global variables that will be used in the project
/*

The global variables are the variables that are declared outside of any function and can be accessed from any function in the script.
These variables will be used to store the information that the user provides in the application.


TODO: 1. Create functions that will update the global variables with the information provided by the user.
TODO: 2. Create an object that will store all the information about the travel plan of the user.
TODO: 3. Create an array that will store all the travel plans of the user.
*/

let travelTo = ""; // this is the variable that will store the location to which the user is traveling (string)
let travelFrom = ""; // this is the variable that will store the location from which the user is traveling (string)
let travelDate = ""; // this is the variable that will store the date of travel (string)
let travelTransport = ""; // this is the variable that will store the mode of transport (string)
let bucketList = []; // this is the variable that will store the list of places the user wants to visit (array) (string)

// This is the object that will store all the information about the travel plan of the user
let travelPlan = {
  travelTo: "",
  travelFrom: "",
  travelDate: "",
  travelTransport: "",
  bucketList: [],
  id: 0,
};

let travelPlans = []; // this is the variable that will store all the travel plans of the user (array) (object)
