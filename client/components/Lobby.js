import React, {Component}from 'react';

//import style
import '../styles/Lobby.css';

class Lobby extends Component{
  constructor(){
    super();
    this.state={
      playerName:''
    }
  }

  render(){
    return(<div className='app-container'>
    <form>
      <input type="text" />
      <button type="submit">Enter</button>
    </form>
  </div>)
  }
}

export default Lobby
