//DEFINING THE VARIABLES
let passengerCount = document.querySelector("#count");
let percentageCount = document.querySelector(".percentage");
let progressBar = document.querySelector("#progress-bar");
let offBoardingBtn = document.querySelector("#offboard");
let onBoardBtn = document.querySelector("#board");
let resetBtn = document.querySelector("#reset-btn");
let availableSeats = document.querySelector("#available");
let occupiedSeats = document.querySelector("#occupancy")
let progress = 0;

//1. Making the progress bar work first
onBoardBtn.addEventListener("click", () => {
    if(progress < 100){
        progress += 1;
        percentageCount.textContent = progress;
        if(progress > 100) progress = 100
        progressBar.style.width = progress + "%"
    }

    //MAKING THE OFFBOARDING BUTTON WORK
        if(progress > 0){
            offBoardingBtn.classList.add("active")
        }
})

//2. Making the offboarding button work
offBoardingBtn.addEventListener("click", () => {
    if(progress > 0){
        progress -= 1;
        percentageCount.textContent = progress;
        if(progress <= 0) progress = 0
        progressBar.style.width = progress + "%"
    }
})