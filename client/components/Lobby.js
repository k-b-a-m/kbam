import React, {Component} from 'react';
import {connect} from 'react-redux';
import socket from '../socket';

const currentPlayer = 'joe';

//import style
import '../styles/Lobby.css';
const Lobby = props => {

  const handleReady= ()=>{

  }
  const {lobby} = props;
  console.log(lobby);
  if (!lobby.length) return <div />;
  return (
    <div>
      <div>
        <ol>
          {lobby.map(player => (
            <li
              key={player.id}
              className={`${name === currentPlayer ? 'current-player' : ''}`}
            >
              {player.name}
            </li>
          ))}
        </ol>
      </div>
      <button>Ready</button>
      <button>Cancel</button>
    </div>
  );
};

const mapStateToProps = ({lobby}) => {
  return {lobby: lobby};
};

export default connect(mapStateToProps)(Lobby);
