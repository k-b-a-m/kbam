import React,{Component} from 'react';
import {Route} from 'react-router-dom';


class App extends Component{
  constructor(){
    super();
    this.state={
      playerName:'Enter Your Name'
    }
  }

  render(){
    <div>
      <form>
        <input type='text'></input>
        <button type='submit'>Enter</button>
      </form>
    </div>
  }
}

export default App;
