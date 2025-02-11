let score = 0;
let timeLeft = 30;
let gameInterval;
let heartInterval;
let gameStarted = false;

const startButton = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const modal = document.getElementById('game-modal');
const finalScore = document.getElementById('final-score');

// Start or reset the game
function startGame() {
    score = 0;
    timeLeft = 30;
    gameStarted = true;
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    startButton.disabled = true;
    startButton.textContent = "Game in Progress...";
    gameInterval = setInterval(updateTime, 1000);
    heartInterval = setInterval(createHeart, 1000);
}

// Update the timer every second
function updateTime() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

// End the game and show the pop-up
function endGame() {
    clearInterval(gameInterval);
    clearInterval(heartInterval);
    gameStarted = false;
    startButton.disabled = false;
    startButton.textContent = 'Play Again';

    // Show custom pop-up with final score
    finalScore.textContent = score;
    modal.style.display = "flex";
}

// Create floating heart
function createHeart() {
    if (!gameStarted) return;

    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(heart);

    // Add click event to heart
    heart.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove(); // Remove heart after click
    });

    // Remove heart after a while
    setTimeout(() => heart.remove(), 2000);
}

// Close the pop-up
function closeModal() {
    modal.style.display = "none";
}

// Start or restart the game when the button is clicked
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
    }
});
function showSurprise() {
    // This function should be called when the game ends
    const modal = document.getElementById('game-over-modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('game-over-modal');
    modal.style.display = 'none';
}

// Call showSurprise() only when the game is over
function endGame(score) {
    alert(`No matter how much you scored, you are always a winner, cutie! Your score is: ${score}`);
    
    // Instead of an alert, show the modal
    showSurprise();
}
function showSurprise(finalScore) {
    const modal = document.getElementById('game-over-modal');
    document.getElementById('final-score').innerText = finalScore; // Update score dynamically
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('game-over-modal');
    modal.style.display = 'none';
}

// Call this function when the game ends
function endGame(score) {
    showSurprise(score);
}

if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame(playerScore);
}
