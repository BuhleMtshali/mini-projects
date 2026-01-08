const prompt = require("prompt-sync")();

console.log("====== 🎲 Welcome To Mini Number Guessing Game 🧩 =======");

//STARTING THE LOOP FOR THE MAIN GAME
let playAgain = "yes";

while(playAgain.toLowerCase() === "yes"){
    console.log("loop running")


    //ASKING IF THEY WANNA PLAY AGAIN
    playAgain = prompt("Want to Try Again 🎲?(yes/no): ");
}

console.log("===== ⛳️ Thank You Trying My Game 🎮 =====");