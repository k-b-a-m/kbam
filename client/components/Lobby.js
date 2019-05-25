import React from 'react';

//fake seed
const players = [
  {id: 1, name: 'joe'},
  {id: 2, name: 'john'},
  {id: 3, name: 'wes'},
  {id: 4, name: 'vil'},
];
const currentPlayer = {id: 1, name: 'joe'};

//import style
import '../styles/Lobby.css';
const Lobby = () => {
  return (
    <div>
      <ol>
        {players.map(player => (
          <li
            key={player.id}
            className={`${
              player.name === currentPlayer.name ? 'current-player' : ''
            }`}
          >
            {player.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Lobby;
