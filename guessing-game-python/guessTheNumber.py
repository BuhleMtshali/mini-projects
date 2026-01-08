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
        user_guess = int(input("🎰 Choose a Random Number (1-20): "))




