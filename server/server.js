const app = require("./app");
const socketio = require("socket.io");
const PORT = process.env.PORT || 1337;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//Enable Websockets on server
const io = socketio(server);







//BELOW IS WEBSOCKETS DEMO.  FEEL FREE TO DELELE


//Stuff under here should be reorganized into listeners folder

// let positionList = [];
// //Websocket connections

// //First time connection initialize player here
// io.sockets.on("connection", socket => {
//     console.log(`First time ${socket.id} has connected!!`);

//     //Emit positions of already existing players back to new socket
//     //Should eventually load state of entire game
//     socket.emit('allPositions', positionList)
// });


// io.on("connection", socket => {
//   console.log(`${socket.id} has connected!!`);

//   //Listen for new position from single client
//   socket.on("position", pos => {
//     console.log(pos);
//     positionList.push(pos);
//     //Emit new position to all connected clients except one who sent
//     socket.broadcast.emit("position", pos);
//   });
// }).on("disconnect", socket => {
//   console.log(`${socket.id} has disconnected!!`);
// });
