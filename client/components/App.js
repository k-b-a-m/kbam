import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import socket from '../socket';

//components
import Home from './Home';
import Lobby from './Lobby';
import Game from './Game';
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const world = new World();
// const engine = new Engine();
// engine.newGame(world);

//io is already declared from socket.io/socket.io.js in index.html
<<<<<<< HEAD
// const socket = io(window.location.origin);

socket.on("connect", function() {
  console.log("I have made a connection to the server!");
});
=======
>>>>>>> f284414597c0f27616587b25f31c5308ff55b644

//import style
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
      </div>
    );
  }
}

export default App;
