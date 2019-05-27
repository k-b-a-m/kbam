import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import socket from '../socket';

//components
import Home from './Home';
import Lobby from './Lobby';
import Game from './Game';

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
