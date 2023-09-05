
// Prompts user for input. Should add something if they don't enter rock, paper or scissors
let playerChoice = prompt("Please enter rock, paper, or scissors - Good luck ");
let playerSelection = playerChoice.toLowerCase();

// Randomly selects rock, paper, or scissors 
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Plays one game and prints win/lose/tie. If not tie, prints player and computer choice

function playGame() {
    let computerChoice = getComputerChoice();
    let playerChoice = playerSelection; 

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    }   
    else if (playerChoice === 'rock' && computerChoice === 'paper' ){
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors' ){
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock' ){
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors' ){
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper' ){
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock' ){
        console.log("You win! " + playerChoice + " beats " + computerChoice);
    }
}