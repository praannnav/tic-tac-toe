let playersInTheGame = {
  player1: ["X", document.querySelector("#player-1")],
  player2: ["O", document.querySelector("#player-2")],
};
let currentPlayer = playersInTheGame["player1"][0];

let blackOverlay = document.getElementById("backdrop");
let userInputBox = document.getElementById("player-naming");

let playingZone = document.querySelectorAll(".tile");

let startGame = document.querySelector("#submit-btn");

console.dir(startGame);
console.dir(playingZone);

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

startGame.addEventListener("click", gameStarts);

function cursor(event) {
  console.dir(event);
  // currentPlayer;
  event.target.innerHTML = currentPlayer;
  playersInTheGame["player1"][1].style.backgroundColor = "rgb(224, 207, 240)";
  playersInTheGame["player2"][1].style.backgroundColor = "rgb(224, 207, 240)";

  if (currentPlayer == playersInTheGame["player1"][0]) {
    playersInTheGame["player2"][1].style.backgroundColor = "purple";

    currentPlayer = playersInTheGame["player2"][0];
  } else {
    playersInTheGame["player1"][1].style.backgroundColor = "purple";

    currentPlayer = playersInTheGame["player1"][0];
  }
}
for (let i = 0; i < 10; i++) {
  playingZone[i].addEventListener("click", cursor);
}

function askUserForName() {
  blackOverlay.style.display = "block";
  userInputBox.style.display = "block";
}
if (window.location.reload()) {
  askUserForName;
}
