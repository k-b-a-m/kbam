import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Lobby from './Lobby'
import WaitingArea from './WaitingArea';
import Game from './Game';
import Player from "../classes/Player";
import Engine from '../classes/Engine';
import World from '../classes/World';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const world = new World();
const engine = new Engine();
engine.newGame(world);

//io is already declared from socket.io/socket.io.js in index.html
const socket = io(window.location.origin);

socket.on("connect", function() {
  console.log("I have made a connection to the server!");
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerName: 'Enter Your Name',
    };
  }


  render() {
    return (
      <div>
        <Route path='/lobby' component={Lobby}/>
        <Route path='/waitingarea' component={WaitingArea}/>
        <Route path='/game' component={Game}/>
      </div>
    );
  }
}

export default App;
