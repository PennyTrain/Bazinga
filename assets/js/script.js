// Labeling of the start of the game and getting the element
let gameStartButton = document.getElementById("play");
gameStartButton.addEventListener('click', playGameModal);
const gameBoxModal = document.getElementById("game-box");
const startModal = document.getElementById("start");
// Day and night switch
let day = document.getElementById('day-night');
day.addEventListener('click',function() {
    document.body.classList.toggle('day');
});

let allBackButtons = document.querySelectorAll('.back-button');
allBackButtons.forEach(backButton => {
  backButton.addEventListener('click', mainMenu)
})
console.log(allBackButtons)

// Rules modal and event listeners
const rulesModal = document.getElementById("rules");
const rulesButton = document.getElementById("rulesButton");
console.log(rulesButton)
rulesButton.addEventListener('click', showRules);

// Settings modal and event listeners
const settingBoxModal = document.getElementById("settings-box")
const settingsButton = document.getElementById("settingsButton")
console.log(settingsButton)
settingsButton.addEventListener('click', showSettings)



function showSettings() {
console.log("showing settings!:D")
startModal.classList.toggle("hidden")
settingBoxModal.classList.toggle("hidden")
}

// Starts the game modal
function playGameModal() {
  console.log("IN play game")
  startModal.classList.toggle("hidden")
  gameBoxModal.classList.toggle("hidden")
}

function showRules() {
  console.log("showing rules!:D");
  startModal.classList.toggle("hidden");
  rulesModal.classList.toggle("hidden");
}

function mainMenu() {
  console.log("in main menu");
  window.location.reload();
}

const resultMatch = document.querySelector('#match-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const allButtons = document.querySelectorAll('.game-buttons');

let result;
let player;
let computer;

allButtons.forEach(button => button.addEventListener('click', function() {
  console.log(button.getAttribute('data-value'))
  player = button.getAttribute('data-value')
  console.log(player)
  computerChoice();
  playerScore.textContent  = `Player: ${player}`;
  computerScore.textContent = `Computer: ${computer}`;
  resultMatch.textContent = checkWin(player, computer);
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

function checkWin(player, computer) {
  console.log(player)
  console.log(computer)
  if (player === computer) {
    return "Draw!";
  } else if (computer === "rock") {
    if (player === "paper" || player === "spock") {
      win()
      return "You Win!";
    } else {
      lose()
      return "You Lose!";
    }
  } else if (computer === "paper") {
    if (player === "scissors" || player === "lizard") {
      win()
      return "You Win!";
    } else {
      lose()
      return "You Lose!";
    }
  } else if (computer === "scissors") {
    if (player === "rock" || player === "spock") {
      win()
      return "You Win!";
    } else {
      lose()
      return "You Lose!";
    }
  } else if (computer === "lizard") {
    if (player === "rock" || player === "scissors") {
      win()
      return "You Win!";
    } else {
      lose()
      return "You Lose!";
    }
  } else if (computer === "spock") {
    if (player === "paper" || player === "lizard") {
      win()
      return "You Win!";
    } else {
      lose()
      return "You Lose!";
    }
  }
}

let aiScoreBoard = document.getElementById("ai-score");
let aiScore = 0;
let userScoreBoard = document.getElementById("user-score");
let userScore = 0;

function win() {
  userScore++
  userScoreBoard.innerHTML = userScore;
}


function lose(){
  aiScore++ 
  aiScoreBoard.innerHTML = aiScore;
}

