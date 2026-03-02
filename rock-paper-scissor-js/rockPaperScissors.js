const prompt = require("prompt-sync")();

function playTheGame(){
    console.log("==== 🎲 WELCOME TO MY MINI GAME 📡 ====")

    //VARIABLES
    let playerWins = 0
    let computerWins = 0
    let choices = ["rock", "paper", "scissors"]

    //START THE WHILE LOOP
    let playAgain = "yes"
    while(playAgain.toLowerCase() === "yes"){
        console.log("loop is rtunning")



        //CLOSING THE WHILE LOOP
        playAgain = prompt("Wanna go again(yes/no): ").toLowerCase()
    }

    //CLOSING MESSAGE
    console.log("===== ✨ THANK YOU, GOODBYE ✨ =====")
}

playTheGame()