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
            break
        }

        if(playerChoice === "rock" || playerChoice === "paper" || playTheGame === "scissors"){
            //THIS CONTINUES IF THE USER INPUTS THE RIGHT THING\
            //1. GETTING THR COMPUTER'S CHOICE
            let computerChoice = choices[Math.floor(Math.random() * choices.length)]
            console.log(`\nYou chose ${playerChoice}, computer chose ${computerChoice}.`)

            //DETERMINING THE WINNER
            if(playerChoice === computerChoice){
                console.log("Its a tie‼️")
            } else if(playerChoice === "rock" && computerChoice === "scissors"){
                playerWins += 1
                console.log(`You win! Your Score is ${playerWins}`)
            } else if(playerChoice === "paper" && computerChoice === "rock"){
                playerWins += 1
                console.log(`You win! Your Score is ${playerWins}`)
            } else if(playerChoice === "scissors" && computerChoice === "paper"){
                playerWins += 1
                console.log(`You win! Your Score is ${playerWins}`)
            } else{
                computerWins += 1
                console.log(`Computer wins! Computer score is: ${computerWins}`)
            }

            //PRINTING THE SCORE
            console.log(`Score: Player ${playerWins} - Computer ${computerWins}`)
        } else{
            console.log("==== 🚫 Invalid input, please try again ====")
        }



        //CLOSING THE WHILE LOOP
        playAgain = prompt("Wanna go again(yes/no): ").toLowerCase()
    }

    //CLOSING MESSAGE
    console.log("===== ✨ THANK YOU, GOODBYE ✨ =====")
}

playTheGame()