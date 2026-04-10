//DEFINING THE VARIABLES
let passengerCount = document.querySelector("#count");
let percentageCount = document.querySelector(".percentage");
let progressBar = document.querySelector("#progress-bar");
let offBoardingBtn = document.querySelector("#offboard");
let onBoardBtn = document.querySelector("#board");
let resetBtn = document.querySelector("#reset-btn");
let availableSeats = document.querySelector("#available");
let occupiedSeats = document.querySelector("#occupancy")
let passengers = 0;
let capacity = 50;


//1. Making the progress bar work first
onBoardBtn.addEventListener("click", () => {
    if(passengers < capacity){
        passengers += 1;
        let percentage = (passengers / capacity) * 100;
        progressBar.style.width = percentage + "%"
        percentageCount.textContent = Math.round(percentage)
        passengerCount.textContent = passengers
        occupiedSeats.textContent = Math.round(percentage)
        availableSeats.textContent = capacity - passengers
    }

    //MAKING THE OFFBOARDING BUTTON WORK
        if(passengers > 0){
            offBoardingBtn.classList.add("active")
        }

})

//2. Making the offboarding button work
offBoardingBtn.addEventListener("click", () => {
    if(passengers > 0){
        passengers -= 1;

        let percentage = (passengers / capacity) * 100;

        progressBar.style.width = percentage + "%";

        passengerCount.textContent = passengers;
        percentageCount.textContent = Math.round(percentage);
        occupiedSeats.textContent = Math.round(percentage);
        availableSeats.textContent = capacity - passengers;

        // 👇 THIS is where you check
        if(passengers === 0){
            offBoardingBtn.classList.remove("active");
        }
    }
});

//3. making the reset btn work
resetBtn.addEventListener("click", () => {
    passengers = 0
    let percentage = (passengers / capacity) * 100;
    progressBar.style.width = passengers + "%"
    passengerCount.textContent = passengers
    occupiedSeats.textContent = Math.round(percentage)
    availableSeats.textContent = capacity - passengers
})