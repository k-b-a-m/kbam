import React from 'react';




//fake seed
const players= ['joe','john','wes','vil']

const Lobby = () => {
  return <div>
    <ul>
      {players.map(player=><li>{player}</li>)}
    </ul>
  </div>;
};

export default Lobby;
