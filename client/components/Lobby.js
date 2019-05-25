import React, {Component} from 'react';

//import style
import '../styles/Lobby.css';

class Lobby extends Component {
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
    console.log(this.state.playerName)
  };

  render() {
    const {playerName} = this.state;
    return (
      <div className="lobby-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="name-input"
              type="text"
              placeholder="Enter Your Name"
              value={playerName}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

export default Lobby;
