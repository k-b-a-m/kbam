import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Lobby from './Lobby'
import WaitingArea from './WaitingArea';
import Game from './Game';

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
