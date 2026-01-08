#IMPORTING THREADING & RANDOM
import threading
import random

#WELCOME MESSAGE
print("===== 🎲 Mini Number Guessing Game 🎮 ====")

#MAIN FUNCTION

def guess_the_number():
    random_number = random.randint(1, 20)