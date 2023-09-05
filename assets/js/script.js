// Labeling of the start of the game and getting the element
let gameStartButton = document.getElementById("play");
gameStartButton.addEventListener('click', playGameModal);
const gameBoxModal = document.getElementById("game-box");
const startModal = document.getElementById("start");

// Check if the night mode is set in sessionStorage
let nightMode = localStorage.getItem("nightMode") === "True";
// Function to set night mode state and update background image
function setNightMode (state) {
  if (state) {
    document.body.classList.remove("day-mode");
    document.body.classList.add("night-mode");
    localStorage.setItem("nightMode", "True");
  } else {
    document.body.classList.add("day-mode");
    document.body.classList.remove("night-mode");
    localStorage.setItem("nightMode", "False");
  }
  let themeToggler = document.getElementById('day-night-toggler');
  themeToggler.checked = state;
}

// Function to toggle night mode
function toggleNightMode() {
  nightMode = !nightMode;
  setNightMode(nightMode);
}

// Apply the initial night mode state
setNightMode(nightMode);

// Add event listener to the theme toggler
let themeToggler = document.getElementById('day-night-toggler');
themeToggler.addEventListener("change", toggleNightMode);

// Handle page reload
window.addEventListener("load", () => {
  setNightMode(nightMode);
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

let retryButton = document.getElementById("retry")
retryButton.addEventListener('click', mainMenu)

function mainMenu() {
  console.log("in main menu");
  location.reload();
}

const resultMatch = document.querySelector('#match-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const allButtons = document.querySelectorAll('.game-buttons');

let result;
let player;
let computer;
let roundsPlayed = 0;
let matchAmount = 4;
let matchToggle = document.getElementById("match-amount-toggle")
matchToggle.addEventListener('change', amountOfGames)

function amountOfGames(matchAmount){
  if (matchToggle.checked)  {
    matchAmount = 6
    console.log(matchAmount)
    localStorage.setItem("gameAmount", "6");
  } else {
    matchAmount = 4
    localStorage.setItem("gameAmount", "4");
    console.log(matchAmount)
  }
}

allButtons.forEach(button => button.addEventListener('click', function () {
  if (localStorage.getItem("gameAmount") == 4 ) {
    matchAmount = 4;
  } else {
    matchAmount = 6;
  }
  if (roundsPlayed < matchAmount) {
    player = button.getAttribute('data-value');
    computerChoice();
    playerScore.textContent = `Player: ${player}`;
    computerScore.textContent = `Computer: ${computer}`;
    resultMatch.textContent = checkWin(player, computer);
    roundsPlayed++;
    if (roundsPlayed === matchAmount) {
      // Display game over message or perform any necessary actions
      console.log("Game Over!");
      window.alert(`End of your ${matchAmount - 1} match game`);
      endGameResults();
    }
  }
}));

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

function lose() {
  aiScore++
  aiScoreBoard.innerHTML = aiScore;
}

const endGameBoxModal = document.getElementById("game-end")
function endGameResults() {
  gameBoxModal.classList.toggle("hidden");
  endGameBoxModal.classList.toggle("hidden");
  let finalComputerScore = document.getElementById("final-computer-score");
  let finalPlayerScore = document.getElementById("final-player-score");
  finalPlayerScore.textContent = `${userScore}`;
  finalComputerScore.textContent = `${aiScore}`;
  let finalMessageWin = 'Congrats you won! Smashed It!!'
  let finalMessageLoss = 'BoooHooo You lost :('
  let finalMessageContainer = document.getElementById('final-game-messsage');
  if (aiScore > userScore) {
    finalMessageContainer.innerText = finalMessageLoss
  } else {
    finalMessageContainer.innerText = finalMessageWin
  }
}



