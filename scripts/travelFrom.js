const travelFrom = (event) => {

    event.preventDefault();
    const userInput = document.getElementById("user-input").value;
    travelFrom = userInput;
    document.querySelectorAll('.landing-page')[1].classList.add("hidden");
    document.querySelectorAll('.landing-page')[2].classList.remove("hidden");

}