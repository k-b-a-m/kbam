import React, {Component} from 'react';
import {Route} from 'react-router-dom';


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
      <div className='app-container'>
        <form>
          <input type="text" />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default App;
