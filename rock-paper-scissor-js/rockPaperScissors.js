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
        //GETTING THE USER'S CHOICE
        let playerChoice = prompt("Enter you choice (rock/paper/scissors) or 'exit' to stop the game: ").toLowerCase()
        if (playerChoice === "exit"){
            print("==== ‼️ THANK YOU FOR PLAYING, GOODBYE =====")
            break
        }

        if(playerChoice === "rock" || playerChoice === "paper" || playTheGame === "scissors"){
            //THIS CONTINUES IF THE USER INPUTS THE RIGHT THING\
            //1. GETTING THR COMPUTER'S CHOICE
            let computerChoice = Math.random(choices)
        }



        //CLOSING THE WHILE LOOP
        playAgain = prompt("Wanna go again(yes/no): ").toLowerCase()
    }

    //CLOSING MESSAGE
    console.log("===== ✨ THANK YOU, GOODBYE ✨ =====")
}

playTheGame()