import React, {Component} from 'react';
import socket from '../socket';

//import style
import '../styles/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
  }

  handleChange = evt => {
    this.setState({playerName: evt.target.value});
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const {playerName} = this.state;
    socket.emit('joinLobby', playerName);
    this.props.history.push('/lobby')
  };

  render() {
    const {playerName} = this.state;
    return (
      <div className="home-container">
        <div>
          <h1>KBAM</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="flex-column-container">
              <input
                className="name-input"
                type="text"
                placeholder="Enter Your Name"
                value={playerName}
                onChange={this.handleChange}
                autoFocus
              />

              <button type="submit">Enter</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
