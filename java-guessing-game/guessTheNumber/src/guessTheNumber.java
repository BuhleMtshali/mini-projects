import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class guessTheNumber {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String playAgain = "yes";
        int score = 0;

        //STARTING THE MAIN WHILE LOOP
        while (playAgain.equalsIgnoreCase("yes")) {
            //CREATING A RANDOM NUMBER
            int randomNumber = ThreadLocalRandom.current().nextInt(1, 21);
            int attempts = 5;

            //CREATING AN INNER LOOP
            while (attempts > 0) {
                System.out.print("🎲 Choose your Random Number(1-20): ");
                String guess = input.nextLine();
                int guessNumber = 0;

                //ENSURING AN INTEGER IS INPUTED
                try{
                    guessNumber = Integer.parseInt(guess);
                } catch (NumberFormatException e){
                    System.out.println("‼️ Invalid Input, Please Try Again!!");
                }

                if(guessNumber == randomNumber){
                    score++;
                    System.out.println("🧩 HAAZZZAAAH, You win! Current Score: " + score);
                    break;
                } else if(guessNumber > randomNumber){
                    attempts--;
                    System.out.println("🙂‍↔️Oops Too High mei old chap!!! You have " + attempts + " left");
                } else if(guessNumber < randomNumber){
                    attempts--;
                    System.out.println("👾 Oops Too low mei old chap!!! You have " + attempts + " left");
                }


                //CLOSING THE INNER LOOP
                if(attempts == 0){
                    System.out.println("🎰 Oops seems like you're out of Attempts friend The Correct number was: " + randomNumber + ", Try replaying the Game 🐝!");
                }
            }


           //CLOSING THE MAIN LOOP
            System.out.print("Would You like to play Another Round 🎮(yes/no): ");
            input.nextLine();
            playAgain = input.nextLine();
        }

        System.out.println("==== 👾 Thank you for Trying My Mini Game 🎰 =====");
        input.close();
    }
}
