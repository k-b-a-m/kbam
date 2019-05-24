import Player from "./classes/Player";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//io is already declared from socket.io/socket.io.js in index.html
const socket = io(window.location.origin);

socket.on("connect", function() {
  console.log("I have made a connection to the server!");
});

//Make new player at random position
const player = new Player(Math.random() * 500, Math.random() * 500);

//move
let move = {
  up: false,
  down: false,
  right: false,
  left: false
};

//Key down event listener to continue moving
document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 38: //Up Arrow
    case 87: //W
      move.up = true;
      break;
    case 40: //Down Arrow
    case 83: // S
      move.down = true;
      break;
    case 39: //Right Arrow
    case 68: // D
      move.right = true;
      break;
    case 37: //Left Arrow
    case 65: // A
      move.left = true;
      break;
  }
});

//Key up event listener to stop moving
document.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 38: //Up Arrow
    case 87: //W
      move.up = false;
      break;
    case 40: //Down Arrow
    case 83: // S
      move.down = false;
      break;
    case 39: //Right Arrow
    case 68: // D
      move.right = false;
      break;
    case 37: //Left Arrow
    case 65: // A
      move.left = false;
      break;
  }
});

//Send new player to socket
socket.emit("player", player);

//Emit move to server
setInterval(() => socket.emit("move", move), 1000/60)

//Listen for updates on other players
socket.on("player", player => {
  draw(player);
});

//Draw positions of all players
socket.on("allPlayers", allPlayers => {
  console.log(allPlayers);

  //Clear canvas before drawing
  ctx.clearRect(0, 0, 1000, 1000)
  for (let p in allPlayers){
    draw(allPlayers[p])
  } 
});

//This function need to be rewritten in a game function
const draw = player => {
  console.log(player);
  ctx.fillStyle = "#000000";
  ctx.fillRect(player.x, player.y, 30, 30);
};
