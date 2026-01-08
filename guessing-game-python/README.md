## 🎲 Mini Number Guessing Game (Python) 🐍🎮

### Welcome, brave soul 👾

- This is a Python terminal-based number guessing game where luck, logic, and limited attempts collide. The computer thinks of a number… you try not to embarrass yourself guessing it 😌

## 🧠 How the Game Works

- The game randomly selects a number between 1 and 20

- You get 5 attempts to guess the correct number

- After each guess, the game tells you if your guess was:

    - 📈 Too high

    - 📉 Too low

- Run out of attempts? 💀 Game over… but you can try again

- Guess correctly? 🎉 HAZZAH! You win!

- There’s also a 2-second delay before the game starts, because ✨dramatic effect✨

## 🛠️ Tech Stack

- Python 3

- random → for generating the mystery number 🎰

- threading.Timer → to delay game start ⏳

- No frameworks.

- No nonsense.

- Just raw Python vibes 🐍🔥

## ▶️ How to Run the Game

1. Make sure Python is installed:

```
python --version

```

2. Clone the repo or copy the file:

```
git clone https://github.com/BuhleMtshali/mini-projects.git

```

3. Run the game:

```
python guessing_game.py

```

4. Sit back, guess wisely, and don’t panic 😤


## 🎮 Game Flow (Algorithm)

1. Display welcome message

2. Wait 2 seconds ⏳

3. Generate a random number (1–20)

4. Give player 5 attempts

5. Loop until:

    - Player guesses correctly ✅

    - OR attempts reach 0 ❌

6. Ask if the player wants to play again

7. Exit gracefully like a well-mannered program 🧑‍💻

## 🚀 Features

✅ Input validation (no funny business 🚫)

🔁 Replay option

🎯 Limited attempts system

🧵 Delayed start using threading

😎 Friendly and fun terminal messages

## 🌱 Possible Improvements (Future You Problems)

- Add a score counter

- Add difficulty levels (easy / medium / chaos 😈)

- Convert to a GUI version

- Rebuild in JavaScript and Java for cross-language mastery 👑

## 🧑‍💻 Author

Built with curiosity, caffeine, and chaotic joy by Buhle ✨

Part of the Mini Projects repo — where concepts get practiced, broken, and rebuilt better 💪