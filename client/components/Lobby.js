import React from 'react';

//fake seed
const othersName = ['joe', 'john', 'vil', 'wes'];
const currentPlayer = 'joe';

//import style
import '../styles/Lobby.css';
const Lobby = () => {
  return (
    <div>
      <div>
      <ol>
        {othersName.map((name, index) => (
          <li
            key={index}
            className={`${name === currentPlayer ? 'current-player' : ''}`}
          >
            {name}
          </li>
        ))}
      </ol>
      </div>
      <button>Ready</button>
      <button>Cancel</button>
    </div>
  );
};

export default Lobby;
