import java.util.Scanner;

public class guessTheNumber {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String playAgain = "yes";

        //STARTING THE MAIN WHILE LOOP
        while (playAgain.equalsIgnoreCase("yes")) {
            System.out.print("loop ...");


           //CLOSING THE MAIN LOOP
            System.out.print("Would You like to play Another Round 🎮(yes/no): ");
            playAgain = input.nextLine();
        }


        input.close();
    }
}
