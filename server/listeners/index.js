//redux store
const store = require("../redux/store");
const { joinLobby } = require("../redux/actions/lobbyActions");
const gameState = require("../gameState");
const Player = require("../classes/Player");
const World = require("../classes/World");
const Projectile = require("../classes/Projectile");
const gameEngine = require("../gameEngine");

module.exports = io => {
  // const wrapper = io => {
  io.on("connection", socket => {
    console.log(`${socket.id} has connected!!`);

    //world is created once  after game starts
    socket.on("createWorld", () => {
      gameState.world = new World(1000, 1000);
    });

    //Player shoots
    socket.on("createProjectile", projectileInfo => {
      projectiles[socket.id].push(new projectile(...projectileInfo));
    });

    //Listen for new players
    socket.on("createPlayer", name => {
      gameState.players[socket.id] = new Player(name, Math.random()*1000, Math.random()*1000, 100, 2);
    });

    // Listen for new moves
    socket.on("move", move => {
      let x = gameState.players[socket.id]["x"];
      let y = gameState.players[socket.id]["y"];
      if (move.up) y -= 1;
      if (move.down) y += 1;
      if (move.left) x -= 1;
      if (move.right) x += 1;

      gameState.players[socket.id]["x"] = x;
      gameState.players[socket.id]["y"] = y;
    });

    //Deletes player from player object
    socket.on("disconnect", () => {
      delete gameState.players[socket.id];
    });

    //add new player to lobby
    socket.on("joinLobby", name => {
      store.dispatch(joinLobby(name));
      const { names } = store.getState();
      socket.emit("newLobby", names);
    });

    //gameEngine transforms gameState and emits whole new state to client
    setInterval(() =>
      socket.emit("gameState", gameEngine(gameState), 1000 / 30)
    );
  });
  // };
  // wrapper(io);
};
