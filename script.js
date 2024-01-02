function getComputerChoice() {
  choiceNum = Math.floor(Math.random() * 3);
  const computerChoices = ["Rock", "Paper", "Scissors"];
  computerChoice = computerChoices[choiceNum];
  return computerChoice;
}

let yourScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  input = playerSelection;
  playerSelection = input[0].toUpperCase() + input.slice(1).toLowerCase();

  if (playerSelection == computerSelection) {
    result.innerHTML = ` DRAW! You selected ${playerSelection}, Computer selected ${computerSelection}, Try again!`;
  } else if (computerChoice == "Paper" && playerSelection == "Rock") {
    result.innerHTML = `  Computer chose ${computerSelection}, you Lose!`;
    compScore++;
  } else if (computerChoice == "Scissors" && playerSelection == "Rock") {
    result.innerHTML = `  Computer chose ${computerSelection}, you Win!`;
    yourScore++;
  } else if (computerChoice == "Rock" && playerSelection == "Paper") {
    result.innerHTML = `  Computer chose ${computerSelection}, you Win!`;
    yourScore++;
  } else if (computerChoice == "Scissors" && playerSelection == "Paper") {
    result.innerHTML = `  Computer chose ${computerSelection}, you Lose!`;
    compScore++;
  } else if (computerChoice == "Paper" && playerSelection == "Scissors") {
    result.innerHTML = `  Computer chose ${computerSelection} so you Win!`;
    yourScore++;
  } else if (computerChoice == "Rock" && playerSelection == "Scissors") {
    result.innerHTML = `  Computer chose ${computerSelection}, you Lose!`;
    compScore++;
  }
  return yourScore, compScore;
}
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", function () {
  playRound("rock");
  score.innerHTML = `Score: ${yourScore}`;
  updateScore();
  checkScore(yourScore, compScore);
});
paperBtn.addEventListener("click", function () {
  playRound("paper");
  score.innerHTML = `Score: ${yourScore}`;
  updateScore();
  checkScore(yourScore, compScore);
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
  score.innerHTML = `Score: ${yourScore}`;
  updateScore();
  checkScore(yourScore, compScore);
});

const result = document.createElement("div");
result.style.cssText =
  "position: absolute; width: 250px; height: 100px; z-index:100; background: lightgrey; margin: 0px";
document.body.appendChild(result);

const score = document.querySelector("#score");
function updateScore() {
  score.innerHTML = `Your Score: ${yourScore}<br> <br> Computer Score: ${compScore}`;
}
updateScore();
function checkScore(yourScore, compScore) {
  if (yourScore == 5) {
    alert("You Win");
    resetGame();
  } else if (compScore == 5) {
    alert("You lose");
    resetGame();
  }
  return yourScore, compScore;
}

function resetGame() {
  yourScore = 0;
  compScore = 0;
  result.innerHTML = "";
  updateScore();
}
