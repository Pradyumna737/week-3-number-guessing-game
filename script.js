let secretNumber;
let attempts = 0;
let maxNumber = 100;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const difficulty = document.getElementById("difficulty");
const rangeText = document.getElementById("rangeText");

function startGame() {
    maxNumber = Number(difficulty.value);

    secretNumber = Math.floor(Math.random() * maxNumber) + 1;

    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = attempts;

    rangeText.textContent =
        `Guess a number between 1 and ${maxNumber}`;

    message.textContent = "Good luck! 🎮";

    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
}

function checkGuess() {
    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > maxNumber) {
        message.textContent =
            `Please enter a number between 1 and ${maxNumber}.`;
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent =
            `🎉 Correct! You guessed it in ${attempts} attempt(s)!`;

        gameOver = true;
        guessInput.disabled = true;
        guessBtn.disabled = true;

    } else if (guess < secretNumber) {
        message.textContent = "📈 Too low! Try a higher number.";

    } else {
        message.textContent = "📉 Too high! Try a lower number.";
    }
}

guessBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

restartBtn.addEventListener("click", startGame);

difficulty.addEventListener("change", startGame);

startGame();