
// Prompts user for input. Should add something if they don't enter rock, paper or scissors
// let playerChoice = prompt("Please enter rock, paper, or scissors - Good luck ");
// let playerSelection = playerChoice.toLowerCase();


// Create player selection buttons & reset button
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const btnReset = document.createElement('button');

btnReset.textContent = 'Reset Game';

btnReset.addEventListener('click', () => {
    winCountPlayer = 0;
    winCountComputer = 0;
    gameOver.textContent = '';
    div.textContent = 'Game reset';
    score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
    div.append(score);

});

btnRock.addEventListener('click', () => {
    playGame('rock');
});
btnPaper.addEventListener('click', () => {
    playGame('paper');
});
btnScissors.addEventListener('click', () => {
    playGame('scissors');
});

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);
document.body.appendChild(btnReset);

const div = document.createElement('div');

// Randomly selects rock, paper, or scissors 
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


const score = document.createElement('div');

let winCountPlayer = 0;
let winCountComputer = 0;

const gameOver = document.createElement('div');

function checkWinner() {
    if (winCountPlayer === 5){
        gameOver.textContent = 'Human player defeats the computer!'
        div.appendChild(gameOver);
    } else if (winCountComputer === 5){
        gameOver.textContent = 'Computer player defeats the human!'
        div.appendChild(gameOver);
    }
}

// Plays one game and displays win/lose/tie and player/computer choices

function playGame(rps) {
    let computerChoice = getComputerChoice();
    let playerChoice = rps; 

    while (winCountPlayer < 5 && winCountComputer < 5){
        if (playerChoice === computerChoice) {
            div.textContent = "It's a tie!";
            document.body.appendChild(div);
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return "It's a tie!";
        }   
        else if (playerChoice === 'rock' && computerChoice === 'paper' ){
            div.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
            document.body.appendChild(div);
            winCountComputer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'lose';
        }
        else if (playerChoice === 'rock' && computerChoice === 'scissors' ){
            div.textContent = "You win! " + playerChoice + " beats " + computerChoice;
            document.body.appendChild(div);
            winCountPlayer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'win';
        }
        else if (playerChoice === 'paper' && computerChoice === 'rock' ){
            div.textContent = "You win! " + playerChoice + " beats " + computerChoice;
            document.body.appendChild(div);
            winCountPlayer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'win';
        }
        else if (playerChoice === 'paper' && computerChoice === 'scissors' ){
            div.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
            document.body.appendChild(div);
            winCountComputer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'lose';
        }
        else if (playerChoice === 'scissors' && computerChoice === 'paper' ){
            div.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
            document.body.appendChild(div);
            winCountComputer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'lose';
        }
        else if (playerChoice === 'scissors' && computerChoice === 'rock' ){
            div.textContent = "You win! " + playerChoice + " beats " + computerChoice;
            document.body.appendChild(div);
            winCountPlayer ++;
            score.textContent = '     Score: ' + winCountPlayer + ' to ' + winCountComputer;
            div.append(score);
            checkWinner();
            return 'win';
        }
    }  
}




// calls the playGame function 5 times. stores results of each game in 'result', dispalys winner of 5 each rounds, and score.
// function game() {
//     let count = 0;
//     let winCount = 0;

//         while (count < 5) {
//             const result = playGame();

//             if (result === 'win') {
//             winCount++;
//             }

//         count++;
//         }

//         if (winCount > 2) {
//         console.log("Congratulations, you beat the computer! \nYour score: " + winCount + "/5");
//         }

//         if (winCount < 3) {
//         console.log("You really thought you could beat the computer? You lose! \nYour score: " + winCount + "/5");
//      }

// }




