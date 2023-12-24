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
  input = prompt("Please key in your choice: ");
  playerSelection = input[0].toUpperCase() + input.slice(1).toLowerCase();

  if (playerSelection == computerSelection) {
    console.log(
      `You selected ${playerSelection}, Computer selected ${computerSelection}, it's a Tie! Try again!`
    );
  } else if (computerChoice == "Paper" && playerSelection == "Rock") {
    console.log(`Computer chose ${computerSelection}, you Lose!`);
    compScore++;
  } else if (computerChoice == "Scissors" && playerSelection == "Rock") {
    console.log(`Computer chose ${computerSelection}, you Win!`);
    yourScore++;
  } else if (computerChoice == "Rock" && playerSelection == "Paper") {
    console.log(`Computer chose ${computerSelection}, you Win!`);
    yourScore++;
  } else if (computerChoice == "Scissors" && playerSelection == "Paper") {
    console.log(`Computer chose ${computerSelection}, you Lose!`);
    compScore++;
  } else if (computerChoice == "Paper" && playerSelection == "Scissors") {
    console.log(`Computer chose ${computerSelection} so you Win!`);
    yourScore++;
  } else if (computerChoice == "Rock" && playerSelection == "Scissors") {
    console.log(`Computer chose ${computerSelection}, you Lose!`);
    compScore++;
  }
  return yourScore, compScore;
}

function game1() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (yourScore == compScore) {
    console.log("It's a draw.");
  } else if (yourScore > compScore) {
    console.log(`You won ${yourScore} out of 5 games, you win the game!`);
  } else {
    console.log(`You only won ${yourScore} times out of 5 games, you lose`);
  }
  return compScore, yourScore;
}

game1();
