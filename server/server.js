const app = require("./app");
const socketio = require("socket.io");
const PORT = process.env.PORT || 1337;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//Enable Websockets on server
const io = socketio(server);

const gameListener = require("./listeners/index.js");

gameListener(io);
