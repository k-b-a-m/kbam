import React from 'react';
import {connect} from 'react-redux';

//fake seed
const othersName = ['joe', 'john', 'vil', 'wes'];
const currentPlayer = 'joe';

//import style
import '../styles/Lobby.css';
const Lobby = props => {
  const {lobby}=props;
  console.log(lobby);
  return (
    <div>
      <div>
        <ol>
          {othersName.map((name, index) => (
            <li
              key={index}
              className={`${name === currentPlayer ? 'current-player' : ''}`}
            >
              {name}
            </li>
          ))}
        </ol>
      </div>
      <button>Ready</button>
      <button>Cancel</button>
    </div>
  );
};

const mapStateToProps = ({names}) => {
  return {names: names};
};

export default connect(mapStateToProps)(Lobby);
