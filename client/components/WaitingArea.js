import React from 'react';




//fake seed
const players= ['joe','john','wes','vil']

const WaitingArea = () => {
  return <div>
    <ul>
      {players.map(player=><li>{player}</li>)}
    </ul>
  </div>;
};

export default WaitingArea;
