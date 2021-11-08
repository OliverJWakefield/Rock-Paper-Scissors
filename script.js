function playerSelection() {
  const playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
  return playerSelection;
}


function computerSelection() {
let computerSelection = Math.random();
if (computerSelection < 0.34) {
  computerSelection = "rock";
} else if (computerSelection <= 0.67) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
return computerSelection;
}


function playRound(playerSelection, computerSelection){
// ROCK SELECTION
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "You win! Rock beats Scissors!";
    } else if (computerSelection == "paper") {
      return "You lose! Paper beats Rock!";
    } else if (computerSelection == "rock") {
      return "It's a Draw!";
    } else {
      return "Something went wrong!";
    }
  }
// PAPER SELECTION
  if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You win! Paper beats Rock!";
    } else if (computerSelection =="scissors") {
      return "You lose! Scissors beats Paper!";
    } else if (computerSelection == "paper") {
      return "It's a Draw!";
    } else {
      return "Something went wrong!";
    }
  }
// SCISSORS SELECTION
  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You lose! Rock beats Scissors!";
    } else if (computerSelection == "paper") {
      return "You Win! Scissors beats Paper!";
    } else if (computerSelection == "scissors") {
      return "It's a Draw!";
    } else {
      return "Something went wrong!";
    }
  } else {
    return "That's not a valid choice!";
  }

}

console.log(playRound(playerSelection(), computerSelection()));