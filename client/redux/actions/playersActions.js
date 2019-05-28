//ACTIONS

const GET_PLAYERS = 'GET_PLAYERS';
const ADD_PLAYER = 'ADD_PLAYER';
const UPDATE_PLAYER = 'UPDATE_PLAYER';

//Action Creators
export const getPlayers = (players) => {
  return {
    type: GET_PLAYERS,
    players,
  };
};

export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    player,
  };
};

export const updatePlayer = player => {
  return {
    type: UPDATE_PLAYER,
    player,
  };
};
