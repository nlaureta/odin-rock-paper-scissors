
let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;
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


    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissor') {
        if (playerSelection === computerSelection) { //Draw
            //return "Draw!";
            console.log("Draw");
            //return;
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "rock")) {
            computerScore++;
            console.log("Loser!");
            //return `Loser! ${playerSelection} beats ${computerSelection}`;
        } else {
            playerScore++;
            console.log("Winner!")
            //return `Winner! Computer chose ${computerSelection}`;
        }
    } else {
        console.log("Invalid choice")
    }

    //console.log("Player: " + playerScore + "Computer: " + computerScore);
    // console.log(winnerScore);
    // console.log(computerScore);
}

function game() {
    let userPrompt = "";
    console.log(playerScore);
    console.log(computerScore);

    while (playerScore <= winnerScore || computerScore <= winnerScore) {
        //for (let i = 0; i < 20; i++) {
        userPrompt = prompt("Enter a choice");
        playRound(userPrompt, getComputerChoice());
        if (computerScore === winnerScore) {
            return `Loser! Computer has beaten you. Final score: Player: ${playerScore} Computer: ${computerScore}`
        } else if (playerScore === winnerScore) {
            return `Winner! You beat the Computer. Final score: Player: ${playerScore} Computer: ${computerScore}`
        } else {

            console.log(`Current score: Player: ${playerScore} Computer: ${computerScore}`);
        }
    }
}
// while(playerScore === winnerScore || computerScore === winnerScore){
//      game();
// }
console.log(game());



//console.log(playRound("paper", getComputerChoice()));
