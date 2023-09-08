
let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;
console.log(computerScore);
console.log("test"
)
function getComputerChoice() {
    let choice = "";
    let randomChoice = Math.floor(Math.random() * 3); // o to 2
    if (randomChoice === 0) {
        choice = "rock";
    } else if (randomChoice === 1) {
        choice = "paper";
    } else {
        choice = "scissor";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const container = document.querySelector('#text-result');
    const playerC = document.querySelector('.player-choice');
    const computerC = document.querySelector('.computer-choice');
    const pImage = document.getElementById("player-image");
    const cImage = document.getElementById("computer-image");
    
    if(playerSelection === 'scissor' || computerSelection === 'scissor' || playerSelection ==='paper' || computerSelection ==='paper') {
        pImage.style.width = '420px';
        pImage.style.height = '420px';
        cImage.style.width = '420px';
        cImage.style.height = '420px';
    }
    pImage.src = `./images/${playerSelection}.png`;
    cImage.src = `./images/${computerSelection}.png`;
    
   
    //playerC.append(pImage);

    // const results = document.createElement('p');
    // results.classList.add('results');
    container.textContent = '';
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        if (playerSelection === computerSelection) { //Draw
            //return "Draw!";
            console.log("Draw");
            container.appendChild(document.createTextNode("Draw"));
            //return;
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")) {
            computerScore++;
            //console.log("Loser!");
            console.log(`Loser! ${computerSelection} beats ${playerSelection}`);
            container.appendChild(document.createTextNode(`Loser! ${computerSelection} beats ${playerSelection}`));
            //console.log(`Current score: Player: ${playerScore} Computer: ${computerScore}`);
        } else {
            playerScore++;
            console.log(`Winner! ${playerSelection} beats ${computerSelection}`)
            container.appendChild(document.createTextNode(`Winner! ${playerSelection} beats ${computerSelection}`));
           // console.log(`Current score: Player: ${playerScore} Computer: ${computerScore}`);
            //return `Winner! Computer chose ${computerSelection}`;
        }
    } else {
        console.log("Invalid choice")
    }
    //container.appendChild(results);
    //console.log("Player: " + playerScore + "Computer: " + computerScore);
    // console.log(winnerScore);
    // console.log(computerScore);
}

function game() {
    let userPrompt = "";
    const playerChoice = document.querySelectorAll('button');
    const container = document.querySelector('#score');

    const pScore = document.createElement('div');
    const cScore = document.createElement('div');
    pScore.classList.add('pScore');
    cScore.classList.add('cScore');
    pScore.textContent = "Select to start"
    playerChoice.forEach((button) => {
        button.addEventListener('click', () => {
            userPrompt = button.id;
            console.log(userPrompt);
            if (computerScore < winnerScore && playerScore < winnerScore)
                playRound(userPrompt, getComputerChoice());
            pScore.textContent = `Player: ${playerScore}` + " " + `Compuer: ${computerScore}`;
            //cScore.textContent = ;
            console.log(playerScore);
            console.log(computerScore);
            if (computerScore === winnerScore) {
                cScore.textContent = `Loser! Computer has brutally beaten you. Final score: Player: ${playerScore} Computer: ${computerScore}`;
                document.querySelectorAll('button').forEach(element => element.disabled = true);
            } else if (playerScore === winnerScore) {
                cScore.textContent = `Congrats I guess... You beat the Computer. Final score: Player: ${playerScore} Computer: ${computerScore}`;
                document.querySelectorAll('button').forEach(element => element.disabled = true);
            } else {

                console.log(`Current score: Player: ${playerScore} Computer: ${computerScore}`);
            }
        });
    });

    // while (playerScore <= winnerScore || computerScore <= winnerScore) {

    //     //for (let i = 0; i < 20; i++) {
    //     userPrompt = prompt("Enter a choice");


    //}
    container.appendChild(pScore);
    container.appendChild(cScore);
}
// while(playerScore === winnerScore || computerScore === winnerScore){
//      game();
// }
game();



//console.log(playRound("paper", getComputerChoice()));
