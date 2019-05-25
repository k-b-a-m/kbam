import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux'

//components
import Home from './Home';
import Lobby from './Lobby';
import Game from './Game';

//import style
import '../styles/App.css';
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
        <Route exact path="/" component={Home} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/game" component={Game} />
      </div>
    );
  }
}

export default App;
