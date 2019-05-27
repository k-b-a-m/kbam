import React from 'react';
import {connect} from 'react-redux';

//fake seed
const othersName = ['joe', 'john', 'vil', 'wes'];
const currentPlayer = 'joe';

//import style
import '../styles/Lobby.css';
const Lobby = props => {
  const {names}= props;
  console.log(names);
  return (
    <div>
      <div>
        <ol>
          {names.map((name, index) => (
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
      <button onClick={() => props.history.push('/')}>Cancel</button>
    </div>
  );
};

const mapStateToProps = ({names}) => {
  return {names};
};

export default connect(mapStateToProps)(Lobby);
