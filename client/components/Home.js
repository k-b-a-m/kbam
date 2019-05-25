import React, {Component} from 'react';

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
    console.log(this.state.playerName);
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
            <div>
              <input
                className="name-input"
                type="text"
                placeholder="Enter Your Name"
                value={playerName}
                onChange={this.handleChange}
                autoFocus
              />
            </div>
          </form>
          <button type="submit">Enter</button>
        </div>
      </div>
    );
  }
}

export default Home;
