const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//io is already declared from socket.io/socket.io.js in index.html
const socket = io(window.location.origin);



//WEBSOCKET DEMO BELOW FEEL FREE TO DELETE

// socket.on("connect", function() {
//   console.log("I have made a connection to the server!");
// });

// //Generate random position for player to start
// const pos = [Math.random() * 500, Math.random() * 500];

// //Draw player
// ctx.fillStyle = "#FF0000"
// ctx.fillRect(...pos, 30, 30);


// //Send player position to socket
// socket.emit("position", pos);

// //Listen for updates on player positions
// socket.on("position", pos => {
//   console.log(pos);
//   draw(pos);
// })

// //Draw already existing players
// socket.on('allPositions', positionList => {
//   positionList.forEach(position => {
//     draw(position);
//   })
// })

// //This function need to be rewritten in a game function
// const draw = pos => {
//   ctx.fillStyle = "#000000"
//   ctx.fillRect(...pos, 30, 30);
// };
