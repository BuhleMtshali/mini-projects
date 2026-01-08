#IMPORTING THREADING & RANDOM
import threading
import random

#WELCOME MESSAGE
print("===== 🎲 Mini Number Guessing Game 🎮 ====")

#MAIN FUNCTION

def guess_the_number():
    score = 0

    #STARTING THE MAIN WHILE LOOP
    while True:

        #CREATING THE RANDOM NUMBER
        random_number = random.randint(1, 20)
        attempts = 5

        #GET THE USER INPUT
        user_guess = input("🎰 Choose a Random Number (1-20): ")

        #STARTING THE INNER LOOP TO RETRY IF OUT OF TRIES
        while True:

            #FIRST EVALUATE IF THE USER INPUTED A NUMBER
            try:
                guess = int(user_guess)
            except ValueError:
                print("🚫 Invalid Input, please ensure ypu input a number")

            if guess == random_number:
                print(f"HAZZAH🎰 You guessed {guess} and the correct number was {random_number} 👾 You Win🎊")
                break
            elif guess > random_number:
                attempts -= 1
                print(f"Ooops 🐝 Too {guess} is too High, You have {attempts} attempts left ‼️")
            elif guess < random_number:
                attempts -= 1
                print(f"Ooops 🐝 Too {guess} is too Low, You have {attempts} attempts left ‼️")
            


        #CLOSING THE MAIN LOOP
        playAgain = input("🧩 Wanna give it another try?(yes/no): ").lower()
        if playAgain != "yes":
            print("==== 🎮 Thank You Trying My Mini Game 👾 ====")
            break


#TIMEOUT FUNCTION
timer = threading.Timer(2, guess_the_number)
timer.start()