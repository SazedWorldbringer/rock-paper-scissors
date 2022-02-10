const playGame = document.getElementById("play");
const btn = document.querySelectorAll(".btn");

let computerChoice;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

// Playing against the computer
function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  console.log(`Computer Selected: ${(computerSelection = btn[x].textContent)}`);
}

function playRound() {
  if (playerSelection === computerSelection) {
    //    console.log(`Draw`);
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    //    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    //    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    //    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore++;
    //    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore++;
    //    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerScore++;
    //    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  }
} // btn.forEach((button) => button.addEventListener("click", () => { playerSelection = button.textContent; console.log(playerSelection); computerPlay(); playRound(); })
// );

function game() {
  for (let i = 0; i < 5; i++) {
    let r = Math.floor(Math.random() * 3);
    playerSelection = btn[r].textContent;
    console.log(`You selected: ${playerSelection}`);
    computerPlay();
    playRound();
  }
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log(`YOU WON THE GAME`);
  } else if (playerScore == computerScore) {
    console.log(`DRAW`);
  } else {
    console.log(`COMPUTER WON THE GAME`);
  }
}
play.addEventListener("click", game);
