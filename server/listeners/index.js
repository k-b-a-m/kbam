const gameState = require('../gameState');
// const Player = require("../classes/Player");
// const World = require("../classes/World");
// const Projectile = require("../classes/Projectile");
const gameEngine = require('../gameEngine');

module.exports = io => {
  // const wrapper = io => {
  io.on('connection', socket => {
    console.log(`${socket.id} has connected!!`);

    //world is created once  after game starts
    // socket.on("createWorld", () => {
    //   gameState.world = new World(1000, 1000);
    // });

    //Player shoots
    // socket.on("createProjectile", projectileInfo => {
    //   projectiles[socket.id].push(new projectile(...projectileInfo));
    // });

    // Listen for new players
    socket.on('newPlayer', player => {
      gameState.players[socket.id] = player;
    });

    // Listen for new moves
    socket.on('move', move => {
      // let x = gameState.players[socket.id]["x"];
      // let y = gameState.players[socket.id]["y"];
      // if (move.up) y -= 1;
      // if (move.down) y += 1;
      // if (move.left) x -= 1;
      // if (move.right) x += 1;
      // gameState.players[socket.id]["x"] = x;
      // gameState.players[socket.id]["y"] = y;
    });

    //Deletes player from player object
    socket.on('disconnect', () => {
      delete gameState.players[socket.id];
      //remove player from lobby
      gameState.lobby = gameState.lobby.filter(
        player => player.id !== socket.id
      );
      socket.broadcast.emit('removeOneLobby',socket.id);
      console.log(`${socket.id} disconnected`);
    });

    //add new player to lobby
    socket.on('joinLobby', name => {
      gameState.lobby.push({id: socket.id, name: name, isReady: false});
      console.log(gameState.lobby);
      socket.emit('newLobby', gameState.lobby);
      socket.broadcast.emit('addNewLobby', gameState.lobby[gameState.lobby.length-1]);
    });

    //gameEngine transforms gameState and emits whole new state to client
    setInterval(() =>
      socket.emit('gameState', gameEngine(gameState), 1000 / 30)
    );
  });
  // };
  // wrapper(io);
};
