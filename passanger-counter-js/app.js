//DEFINING THE VARIABLES
let passengerCount = document.querySelector("#count");
let percentageCount = document.querySelector(".percentage");
let progressBar = document.querySelector("#progress-bar");
let offBoardingBtn = document.querySelector(".offboard");
let onBoardBtn = document.querySelector(".board");
let resetBtn = document.querySelector("#reset-btn");
let availableSeats = document.querySelector("#available");
let occupiedSeats = document.querySelector("#occupancy")
let progress = 0;

//1. Making the progress bar work first
onBoardBtn.addEventListener("click", () => {
    if(progress < 100){
        progress += 1;
        if(progress > 100) progress = 100
        print.style.width = progress
    }
})