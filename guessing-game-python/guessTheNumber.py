import threading
import random

print("===== 🎲 Mini Number Guessing Game 🎮 =====")

def guess_the_number():
    score = 0

    while True:
        random_number = random.randint(1, 20)
        attempts = 5

        print("\n🎯 New Round Started!")

        while attempts > 0:
            user_guess = input("🎰 Choose a Random Number (1-20): ")

            try:
                guess = int(user_guess)
            except ValueError:
                print("🚫 Invalid input, please enter a NUMBER")
                continue  # 🔥 IMPORTANT

            if guess == random_number:
                score += 1
                print(f"🎉 HAZZAH! You guessed {guess}. Correct number: {random_number}")
                print(f"🏆 Score: {score}")
                break
            elif guess > random_number:
                attempts -= 1
                print(f"📈 Too high! Attempts left: {attempts}")
            else:
                attempts -= 1
                print(f"📉 Too low! Attempts left: {attempts}")

        if attempts == 0:
            print(f"💀 Out of attempts! The number was {random_number}")

        play_again = input("🧩 Wanna give it another try? (yes/no): ").lower()
        if play_again != "yes":
            print("==== 🎮 Thank You For Playing 👾 ====")
            break

timer = threading.Timer(2, guess_the_number)
timer.start()
