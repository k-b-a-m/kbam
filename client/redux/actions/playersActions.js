//ACTIONS

const ADD_PLAYER = 'ADD_PLAYER';
const UPDATE_PLAYER = 'UPDATE_PLAYER';

//Action Creators
const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    player,
  };
};

const updatePlayer = player => {
  return {
    type: UPDATE_PLAYER,
    player,
  };
};

module.exports = { ADD_PLAYER, UPDATE_PLAYER, addPlayer, updatePlayer };
