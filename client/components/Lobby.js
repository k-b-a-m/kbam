import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../socket';
import {Redirect} from 'react-router-dom';

//import style
import '../styles/Lobby.css';
const Lobby = props => {
  const {lobby, history} = props;

  const handleClick = () => {
    socket.emit('toggleReady', socket.id);
  };

  const handleLeave = () => {
    socket.emit('leaveLobby', socket.id);
    history.push('/');
  };

  if (!lobby.length) return <div />;

  const currentPlayer = lobby.find(player => player.id === socket.id);
  // if (lobby.length && !currentPlayer) return <Redirect to="/" />;
  const allReady = lobby.filter(player => player.isReady === true);

  //if all players are ready, redirect to game page to start
  if (allReady.length === lobby.length) {
    return <Redirect to="/game" />;
  }

  return (
    <div>
      <div>
        <ol>
          {lobby.map(player => (
            <li
              key={player.id}
              className={`${
                player.name === currentPlayer.name ? 'current-player' : ''
              } ${player.isReady ? 'ready' : ''}`}
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
      <button onClick={handleLeave}>Leave</button>
    </div>
  );
};

const mapStateToProps = ({lobby}) => {
  return {lobby: lobby};
};

export default connect(mapStateToProps)(Lobby);
