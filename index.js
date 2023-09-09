let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;

// uses random() to return the computers choice
function getComputerChoice() {
    let choice = "";
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        choice = "rock";
    } else if (randomChoice === 1) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

// to determine a winner each round and update the UI.
function playRound(playerSelection, computerSelection) {
    const WinLoseText = document.querySelector('#win-lose-text');
    const textResult = document.querySelector('#text-result');
    const pImage = document.getElementById("player-image");
    const cImage = document.getElementById("computer-image");

    if (playerSelection === 'scissor' || computerSelection === 'scissor' || playerSelection === 'paper' || computerSelection === 'paper') {
        pImage.style.width = '420px';
        pImage.style.height = '420px';
        cImage.style.width = '420px';
        cImage.style.height = '420px';
    }
    pImage.src = `./images/${playerSelection}.png`;
    cImage.src = `./images/${computerSelection}.png`;

    textResult.textContent = '';
    WinLoseText.textContent = '';
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        if (playerSelection === computerSelection) {
            WinLoseText.appendChild(document.createTextNode("Draw"));
            WinLoseText.style.color = 'yellow';
            textResult.appendChild(document.createTextNode(`${computerSelection} ties ${playerSelection}`));

        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")) {
            computerScore++;
            WinLoseText.appendChild(document.createTextNode('Loser!'));
            WinLoseText.style.color = 'red';
            textResult.appendChild(document.createTextNode(`${computerSelection} beats ${playerSelection}`));
        } else {
            playerScore++;
            WinLoseText.appendChild(document.createTextNode('Winner!'));
            WinLoseText.style.color = 'green';
            textResult.appendChild(document.createTextNode(`${playerSelection} beats ${computerSelection}`));
        }
    } else {
        console.log("Invalid choice")
    }
}

// Runs the game selections and determines the overall winner
function game() {
    let userPrompt = "";
    const playerChoice = document.querySelectorAll('button');
    const middleText = document.querySelector('#middleText');

    const restartContainer = document.querySelector('#restartButton');
    const restartButton = document.createElement('button');

    const pScore = document.querySelector(".playerScore");
    const cScore = document.querySelector(".computerScore")
    const finalWinner = document.createElement('div');

    restartButton.textContent = "Restart";
    restartButton.addEventListener('click', () => { window.location.reload(true) });

    finalWinner.classList.add('finalScore');
    finalWinner.textContent = "Select to Start"
    playerChoice.forEach((button) => {
        button.addEventListener('click', () => {
            userPrompt = button.id;
            if (computerScore < winnerScore && playerScore < winnerScore)
                playRound(userPrompt, getComputerChoice());

            pScore.textContent = `Player: ${playerScore}`;
            cScore.textContent = `Computer: ${computerScore}`;

            if (computerScore === winnerScore) {
                finalWinner.textContent = 'Loser! Computer has brutally beaten you.';
                document.querySelectorAll('button').forEach(element => element.disabled = true);
                restartContainer.appendChild(restartButton);
            } else if (playerScore === winnerScore) {
                finalWinner.textContent = `Congrats I guess... You beat the Computer.`;
                document.querySelectorAll('button').forEach(element => element.disabled = true);
                restartContainer.appendChild(restartButton);
            } else {
                finalWinner.textContent = `First to ${winnerScore} wins.`;
            }
        });
    });

    middleText.appendChild(finalWinner);
}

game();




