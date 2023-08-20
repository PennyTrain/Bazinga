let gameStartButton = document.getElementById("play");

gameStartButton.addEventListener('click', playGameModal);
function playGameModal() {
  console.log("IN play game")
  startModal = document.getElementById("start");
  startModal.classList.toggle("hidden")
  let gameBoxModal = document.getElementById("game-box")
  gameBoxModal.classList.toggle("hidden")
}

const resultMatch = document.querySelector('#match-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const allButtons = document.querySelectorAll('.game-buttons');

let result;
let player;
let computer;

allButtons.forEach(button => button.addEventListener('click', function() {
  player = button.textContent;
  computerChoice();
  playerScore.textContent = `Player: ${player}`;
  computerScore.textContent = `Computer: ${computer}`;
  resultMatch.textContent = checkWin();
}))

function computerChoice() {
  const randNum = Math.floor(Math.random() * 5) + 1;
  switch (randNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
    case 4:
      computer = "lizard";
      break;
    case 5:
      computer = "spock";
      break;

  }
}

function checkWin(){
  if(player == computer){
  return "Draw!";
  } else if (computer == "rock"){
    return (player = "paper") ? "You Win!" : "You Lose!"
  }
  else if (computer == "paper"){
    return (player = "scissors") ? "You Win!" : "You Lose!"
  }
  else if (computer == "scissors"){
    return (player = "rock") ? "You Win!" : "You Lose!"
  }
}

