//redux store
const store = require('../redux/store');
const {joinLobby} = require('../redux/actions/lobbyActions');

module.exports = io => {
  let players = {};
  let shots = {};

  const wrapper = io => {
    io.on('connection', socket => {
      console.log(`${socket.id} has connected!!`);

      //Send already existing players
      socket.emit('allPlayers', players);

      //Listen for new players
      socket.on('player', player => {
        players[socket.id] = player;
        //Emit new player to all connected clients except new player
        socket.broadcast.emit('player', player);
      });

      //Listen for new shots
      socket.on('shot', shot => {
        shots[socket.id] = shot;
        //Emit new shots to all connected clients except shooter
        socket.emit('shot', shot);
      });

      //Listen for new moves
      socket.on('move', move => {
        console.log(move);
        let x = players[socket.id]['x'];
        let y = players[socket.id]['y'];
        if (move.up) y -= 1;
        if (move.down) y += 1;
        if (move.left) x -= 1;
        if (move.right) x += 1;

        players[socket.id]['x'] = x;
        players[socket.id]['y'] = y;
        socket.emit('allPlayers', players);
      });

      //Deletes player from player object
      socket.on('disconnect', () => {
        delete players[socket.id];
        socket.emit('allPlayers', players);
      });

      //add new player to lobby
      socket.on('joinLobby', name => {
        store.dispatch(joinLobby(name));
      });
    });
  };
  wrapper(io);
};
