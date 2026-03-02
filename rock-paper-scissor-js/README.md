# 🎮 Rock Paper Scissors CLI Game

## A simple command-line Rock, Paper, Scissors game built with Node.js.

- The player competes against the computer, with score tracking and replay functionality.

- This project is part of my mini-project practice to rebuild coding momentum and strengthen core JavaScript fundamentals.

## 🧠 Project Overview

- This is a terminal-based interactive game where:

    - The user selects rock, paper, or scissors

    - The computer randomly selects its choice

    - The winner is determined using classic game rules

    - Scores are tracked across rounds

    - The player can replay or exit anytime

- It focuses on practicing:

    - Loops and conditionals

    - User input handling

    - Random number generation

    - Game state management


## 🚀 Features

🎯 Player vs Computer gameplay

🔁 Replay loop (play multiple rounds)

🧮 Score tracking system

❌ Input validation with friendly error messages

🚪 Exit option to end the game anytime

## 🛠️ Technologies Used

- JavaScript (Node.js)

- prompt-sync for user input

- CLI (Command Line Interface)

## 📦 Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/rock-paper-scissors-cli.git

cd rock-paper-scissors-cli

```

2. Install dependencies

```
npm install prompt-sync

```

3. Run the game

```
node index.js

```

## 🎲 How to Play

1. Run the program in your terminal

2. Enter one of the following choices:

    - rock

    - paper

    - scissors

3. The computer will randomly choose its move

4. The winner of the round is displayed

5. Choose whether to play again or exit the game

- Example:

```
Enter your choice (rock/paper/scissors) or 'exit' to stop the game: rock
You chose rock, computer chose scissors.
You win! Your Score is 1
Score: Player 1 - Computer 0

```

## 🧩 Game Logic

- Rock beats Scissors

- Scissors beats Paper

- Paper beats Rock

- Same choices result in a tie

- Invalid inputs trigger a retry prompt

## 📚 Learning Outcomes

- Through this project, I practiced:

- Writing clean game loops using while

- Handling user input safely

- Using arrays and Math.random() for dynamic choices

- Implementing conditional game logic

- Tracking and updating state across rounds

## 🔮 Future Improvements

- Add difficulty levels

- Add emoji-based UI feedback

- Convert to a browser-based version (HTML/CSS/JS)

- Add best-of-3 or best-of-5 match mode