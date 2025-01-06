let humanScore = 0;
let computerScore = 0;

// DOM elements
const resultsDiv = document.createElement('div');
const scoreDiv = document.createElement('div');
const winnerDiv = document.createElement('div');

// Add divs to the body
document.body.appendChild(resultsDiv);
document.body.appendChild(scoreDiv);
document.body.appendChild(winnerDiv);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return "paper";
    } else if (randomNumber === 1) {
        return "rock";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let resultMessage;
    if (
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "rock") ||
        (computerChoice === "rock" && humanChoice === "paper")
    ) {
        humanScore += 1;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (computerChoice === humanChoice) {
        resultMessage = "It's a tie!";
    } else {
        computerScore += 1;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateUI(resultMessage);

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        resetGame();
    }
}

function updateUI(resultMessage) {
    // Update results
    resultsDiv.textContent = resultMessage;

    // Update score
    scoreDiv.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
}

function announceWinner() {
    if (humanScore > computerScore) {
        winnerDiv.textContent = "Congratulations! You won the game!";
    } else {
        winnerDiv.textContent = "Game over! The computer won this time.";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
        resultsDiv.textContent = "";
        scoreDiv.textContent = "";
        winnerDiv.textContent = "";
    }, 2000); // Clear UI after 2 seconds
}

// Attach event listeners to buttons
document.querySelector('#p_btn').addEventListener('click', () => playRound("paper"));
document.querySelector('#s_btn').addEventListener('click', () => playRound("scissors"));
document.querySelector('#r_btn').addEventListener('click', () => playRound("rock"));