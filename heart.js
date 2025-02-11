let score = 0;
let timeLeft = 10;
let gameInterval, heartInterval;
let gameStarted = false;

const startButton = document.getElementById("start-game");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const gameContainer = document.getElementById("game-container");

startButton.addEventListener("click", startGame);

function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    startButton.disabled = true;
    startButton.textContent = "Playing...";

    gameInterval = setInterval(updateTime, 1000);
    heartInterval = setInterval(spawnHeart, 800);
}

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(heartInterval);
        gameStarted = false;
        startButton.disabled = false;
        startButton.textContent = 'Play Again';
        showGameOverPopup();
    }
}

function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * (gameContainer.clientWidth - 30) + "px";
    heart.style.top = Math.random() * (gameContainer.clientHeight - 30) + "px";
    heart.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove();
    });
    gameContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}

function showGameOverPopup() {
    document.getElementById("final-score").textContent = score;
    document.getElementById("game-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("game-modal").style.display = "none";
}
