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
            System.out.println(randomNumber);


           //CLOSING THE MAIN LOOP
            System.out.print("Would You like to play Another Round 🎮(yes/no): ");
            playAgain = input.nextLine();
        }

        System.out.println("==== 👾 Thank you for Trying My Mini Game 🎰 =====");
        input.close();
    }
}
