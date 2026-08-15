let playersInTheGame = {
  player1: [
    "X",
    document.querySelector("#player-1"),
    document.querySelector("#player-card-name-1"),
  ],
  player2: [
    "O",
    document.querySelector("#player-2"),
    document.querySelector("#player-card-name-2"),
  ],
};
let currentPlayer = playersInTheGame["player1"][0];
let blackOverlay = document.getElementById("backdrop");
let userInputBox = document.getElementById("player-naming");
let playingZone = document.querySelectorAll(".tile");
let startGame = document.querySelector("#submit-btn");
let displayWinner = document.getElementById("winner-board");
let restartGame = document.getElementById("Re-Start");
let cells =
  document.body.children.main.children[3].children["playing-zone"].children;
let winner = document.getElementById("winner-name");
let winningPatttern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const sound=new Audio("sound.mp3")
function gameStarts(event) {
  let playersData = {
    player1Name: document.querySelector("#player-card-name-1"),
    player2Name: document.querySelector("#player-card-name-2"),
  };
  let userInput = {
    name_of_player1: document.querySelector("#player1-name").value,
    name_of_player2: document.querySelector("#player2-name").value,
  };

  blackOverlay.style.display = "none";
  userInputBox.style.display = "none";
  playersData["player1Name"].innerHTML = userInput["name_of_player1"];
  playersData["player2Name"].innerHTML = userInput["name_of_player2"];
  playersInTheGame["player1"][1].style.backgroundColor = "purple";
}

function cursor(event) {
  console.dir(event);
  let pastplayer = currentPlayer;
  playersInTheGame["player1"][1].style.backgroundColor = "rgb(224, 207, 240)";
  playersInTheGame["player2"][1].style.backgroundColor = "rgb(224, 207, 240)";
  if (event.target.innerHTML !== "") {
    return;
  }
  event.target.innerHTML = currentPlayer;

  if (currentPlayer == playersInTheGame["player1"][0]) {
    playersInTheGame["player2"][1].style.backgroundColor = "purple";

    currentPlayer = playersInTheGame["player2"][0];
  } else {
    playersInTheGame["player1"][1].style.backgroundColor = "purple";

    currentPlayer = playersInTheGame["player1"][0];
  }
  for (let pattern of winningPatttern) {
    let [a, b, c] = pattern;
    if (
      cells[a].innerHTML !== "" &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[b].innerHTML === cells[c].innerHTML
    ) {
      console.log("Winner winner chicken dinnnnnner");
      sound.play();
      blackOverlay.style.display = "block";
      displayWinner.style.display = "block";
      // winner.innerHTML=pastplayer+" Wins"
      for (let x in playersInTheGame) {
        console.log(playersInTheGame[x]);
        if (playersInTheGame[x][0] === pastplayer) {
          winner.innerHTML = playersInTheGame[x][2].innerHTML + " Wins🥳 ";
        }
      }

      return;
    }
    isMatchDraw();
  }
}

function askUserForName() {
  blackOverlay.style.display = "block";
  userInputBox.style.display = "block";
}

function restart() {
  window.location.reload();
}

function isMatchDraw() {
  let draw = true;

  for (let block of playingZone) {
    if (block.innerHTML === "") {
      draw = false;
      break;
    }
  }
  if (draw) {
    sound.play()
    blackOverlay.style.display = "block";
    displayWinner.style.display = "block";
    winner.innerHTML = "Draw 😶";
    console.log("match draw");
  }
}

startGame.addEventListener("click", gameStarts);

for (let i = 0; i < playingZone.length; i++) {
  playingZone[i].addEventListener("click", cursor);
}

restartGame.addEventListener("click", restart);
askUserForName();
