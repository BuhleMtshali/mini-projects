const prompt = require("prompt-sync")();

console.log("====== 🎲 Welcome To Mini Number Guessing Game 🧩 =======");

//SETTIMEOUT FUNCTION
setTimeout(() => {
    guessTheNumber()
}, 2000);

// MAIN FUNCTION
function guessTheNumber(){

    //STARTING THE LOOP FOR THE MAIN GAME
    let playAgain = "yes";

    while(playAgain.toLowerCase() === "yes"){
        let randomNumber = Math.round(Math.random() * 20) + 1;
        let attempts = 5 //THIS COUNTS THE ATTEMPTS THE USER HAS

        //CREATING THE INNER LOOP
        while(attempts > 0){
            let guessNumber = parseInt(prompt("🎮 Choose A random number (1-20): "))

            //CHECKING IF NUMBER MATCHES
            if(isNaN(guessNumber)){
                console.log("🚫 Invalid Number old Chap ‼️");
            } else if(guessNumber === randomNumber){
                console.log(`HAZZAH!! 🐝 You guessed ${guessNumber} and the correct number was actually ${randomNumber}`);
                break;
            } else if(guessNumber > randomNumber){
                attempts--;
                console.log(`Ouch ‼️ ${guessNumber} is too High, try Again, you have ${attempts} attempts left`);
            } else if(guessNumber < randomNumber){
                attempts--;
                console.log(`Ouch ‼️ ${guessNumber} is too low, try Again, you have ${attempts} attempts left`);
            }

            //THIS IS FOR IF THE ATTEMPTS 0
            if(attempts === 0){
                console.log(`🎲 Oooh Ooh you have ${attempts} attempts left, Try replaying the game 🎰`);
            }
        }


        //ASKING IF THEY WANNA PLAY AGAIN
        playAgain = prompt("Want to Try Again 🎲?(yes/no): ");
    }

    console.log("===== ⛳️ Thank You Trying My Game 🎮 =====");

}


