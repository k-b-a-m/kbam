import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../socket';

//import style
import '../styles/Lobby.css';
const Lobby = props => {
  const handleClick = () => {
    socket.emit('toggleReady', socket.id);
  };

  const {lobby} = props;
  if (!lobby.length) return <div />;
  const currentPlayer = lobby.find(player => player.id === socket.id);
  console.log(currentPlayer)
  return (
    <div>
      <div>
        <ol>
          {lobby.map(player => (
            <li
              key={player.id}
              className={`${name === currentPlayer.name ? 'current-player' : ''} ${player.isReady? 'ready':''}`}
            >
              {player.name}
            </li>
          ))}
        </ol>
      </div>
      {currentPlayer.isReady ? (
        <button onClick={handleClick}>Cancel</button>
      ) : (
        <button onClick={handleClick}>Ready</button>
      )}
    </div>
  );
};

const mapStateToProps = ({lobby}) => {
  return {lobby: lobby};
};

export default connect(mapStateToProps)(Lobby);
