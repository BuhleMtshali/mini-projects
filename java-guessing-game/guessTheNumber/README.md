## 🎲 Mini Number Guessing Game - Java Edition 🧩👾

Welcome to my **Mini Number Guessing Game** in Java!

- This project is all about testing your luck, logic, and reflexes 🎯. You’ll try to guess a number between 1 and 20. Each round gives you 5 attempts, and your score stacks up as you win! 🏆

- Think you can beat the game? Let’s dive in!

## 🚀 How It Works

1. The game generates a random number between 1–20 🎰.

2. You get 5 chances to guess it correctly 🕹️.

3. After each guess:

    - If your guess is too high, the game tells you 📈

    - If it’s too low, the game tells you 📉

    - If you get it right — score goes up 🏅

4. You can play multiple rounds — just type yes when asked 🎮

5. The game ends when you type no ✨


## 💻 Features

- 🎲 Random number generation using ThreadLocalRandom

- 🧩 Input validation to ensure you always enter numbers

- 🔁 Looping logic for attempts and replay rounds

- 🏆 Score tracking across rounds

- 🎨 Fun console messages and emojis to spice things up

## 🎮 Sample Gameplay

```
🎲 Choose your Random Number(1-20): 15

🙂‍↔️Oops Too High mei old chap!!! You have 4 left

🎲 Choose your Random Number(1-20): 10

👾 Oops Too low mei old chap!!! You have 3 left

🎲 Choose your Random Number(1-20): 12

🧩 HAAZZZAAAH, You win! Current Score: 1

Would You like to play Another Round 🎮(yes/no): yes
...

```

## 🛠️ Tech & Tools

- ☕ Java 17+

- 📜 Scanner for input

- 🎰 ThreadLocalRandom for generating numbers

- 🏗️ Nested loops and try/catch for error handling

## 💡 Notes & Tips

- You can extend this game by:

- Adding difficulty levels (like 1–50 or 1–100)

- Adding a high score leaderboard

- Making it GUI-based with Swing or JavaFX

## 📚 Learning Takeaways

By building this game, you:

✅ Learned random number generation in Java

✅ Practiced loops, conditionals, and nested logic

✅ Implemented input validation with try/catch

✅ Got your first taste of game logic & scoring

✅ Made a fun, interactive CLI project to flex your Java skills