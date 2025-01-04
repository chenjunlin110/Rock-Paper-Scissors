
let humanScore = 0;
let computerScore = 0;


console.log("Hello, World!")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getComputerChoice() {
    let randomNumber = getRandomInt(3);

    if (randomNumber === 0) {
        return "paper";
    }
    else if (randomNumber === 1) {
        return "rock";
    }
    else {
        return "scissors";
    }
}



function getHumanChoice() {
    user_input = prompt("please input your choice!");
    user_input = user_input.toLowerCase();

    while (user_input !== "paper" && user_input !== "rock" && user_input !== "scissors") {
        user_input = prompt("input incorrect, please put valid choice!!!!");
    }
    return user_input;
}






function playRound(computerChoice, humanChoice) {
    if (computerChoice === "paper" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "paper") {
        humanScore += 1;
        console.log("Human Win! " + humanChoice + " over " + computerChoice);
    }
    else if (computerChoice === humanChoice) {
        console.log("the same!");
    }
    else {
        computerScore += 1;
        console.log("Computer Win! " + computerChoice + " over " + humanChoice);
    }
}




function playGame() {


    for (let i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
    }

    if (humanScore > computerScore) {
        console.log("Human Win! " + humanScore + " over " + computerScore);
    }
    else if (humanScore < computerScore) {
        console.log("Computer Win! " + computerScore + " over " + humanScore);
    }
}

playGame()