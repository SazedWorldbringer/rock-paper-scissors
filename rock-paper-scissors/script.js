const playBtn = document.querySelector(".intro button"); //button that brings you to the initial state of the game
const introScreen = document.querySelector(".intro"); //the intro screen where the final winner is declared
const round = document.querySelector(".round"); // the inital state of the game
const introTitle = document.querySelector(".intro-title"); // the title on the intro screen and the text area where the winner is declared
const winner = document.querySelector(".winner"); // where the winner of each single match is declared
const rockButton = document.querySelector(".rock"); // Player choice Rock Button
const paperButton = document.querySelector(".paper"); // Player choice Paper Button
const scissorsButton = document.querySelector(".scissors"); // Player choice Scissors Button
const buttons = document.querySelectorAll(".options button"); // object containing all the buttons
const computerScoreDisplay = document.getElementById("computer-score"); // for displaying the computer's score
const playerScoreDisplay = document.getElementById("player-score"); // for dispalying the player's score
const playerHand = document.querySelector(".player-hand"); // Player hand image
const computerHand = document.querySelector(".computer-hand"); // Computer hand image
const hands = document.querySelector(".hands img"); // both, player and computer, hands

let computerChoice;
let playerChoice;
const computerOptions = ["rock", "paper", "scissors"]; // array for the computer to choose from

let computerScore = 0; // computer's initial score
let playerScore = 0; // player's initial score

// hide the intro screen and begin the game
playBtn.addEventListener("click", () => {
  console.log("clicked");
  introScreen.classList.remove("fadeIn");
  round.classList.add("fadeIn");
});

// Making both computer and player choice and running a match
buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    playerChoice = btn.textContent;

    //computer choice
    computerNumber = Math.floor(Math.random() * 3);
    computerChoice = computerOptions[computerNumber];

    setTimeout(() => {
      // running the game
      game(computerChoice, playerChoice);

      // update images based on choice
      computerHand.src = `./img/${computerChoice}.png`;
      playerHand.src = `./img/${playerChoice}.png`;

      //remove animation
      playerHand.style.animation = "";
      computerHand.style.animation = "";
    }, 2000);

    // add animation to hands
    playerHand.style.animation = "animatePlayerHands 2s ease";
    computerHand.style.animation = "animateComputerHands 2s ease";

    playerHand.src = `./img/rock.png`;
    computerHand.src = `./img/rock.png`;
  })
);

function game(c, p) {
  let youWin = `You won! ${p} beats ${c}`;
  let youLose = `Computer won! ${c} beats ${p}`; // didn't want to type out the same thing 6 times

  // if the player chose what the computer chose
  if (p === c) {
    winner.textContent = `It's a tie!`;
  } else if (p == "rock") {
    // Check if the player chose rock
    if (c == "paper") {
      winner.textContent = youLose;
      computerScore++;
    } else {
      winner.textContent = youWin;
      playerScore++;
    }
  } else if (p == "paper") {
    // Check if the player chose paper
    if (c == "scissors") {
      winner.textContent = youLose;
      computerScore++;
    } else {
      winner.textContent = youWin;
      playerScore++;
    }
  } else if (p == "scissors") {
    // Check if the player chose scissors
    if (c == "rock") {
      winner.textContent = youLose;
      computerScore++;
    } else {
      winner.textContent = youWin;
      playerScore++;
    }
  }

  if (computerScore == 5 || playerScore == 5) {
    introScreen.classList.add("fadeIn");
    round.classList.remove("fadeIn");
    playerScore = 0;
    computerScore = 0;
    playerHand.src = `./img/rock.png`;
    computerHand.src = `./img/rock.png`;
  }

  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
}

if (playerScore == 5) {
  introTitle.textContent =
    "You won! You have saved Humanity! You will be remembered in history as a Hero";
} else if (computerScore == 5) {
  introTitle.textContent =
    "The Computer won! Now there's no stopping the robots! We'll see the world taken over right in front of our eyes, and wouldn't be able to do a thing!";
}
