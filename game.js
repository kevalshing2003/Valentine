let score = 0;
let timeLeft = 30;
let gameInterval;
let heartInterval;
let gameStarted = false;

const startButton = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const finalScoreDisplay = document.getElementById('final-score');
const modal = document.getElementById('game-over-modal');

// Start Game
function startGame() {
    score = 0;
    timeLeft = 30;
    gameStarted = true;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    startButton.disabled = true;
    gameInterval = setInterval(updateTime, 1000);
    heartInterval = setInterval(createHeart, 1000);
}

// Update Timer
function updateTime() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

// Create Hearts
function createHeart() {
    if (!gameStarted) return;

    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(heart);

    heart.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove();
    });

    setTimeout(() => heart.remove(), 2000);
}

// End Game & Show Pop-up
function endGame() {
    clearInterval(gameInterval);
    clearInterval(heartInterval);
    gameStarted = false;
    startButton.disabled = false;
    startButton.textContent = 'Play Again';
    finalScoreDisplay.textContent = score;
    modal.style.display = 'flex';
}

// Close Pop-up
function closeModal() {
    modal.style.display = 'none';
}

// Start Game on Button Click
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        startButton.textContent = 'Game in Progress...';
    }
});
