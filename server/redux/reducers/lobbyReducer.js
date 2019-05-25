const {JOIN_LOBBY} = require('../actions/lobbyActions');

const lobbyReducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_LOBBY:
      return [...state, action.name];
    default:
      return state;
  }
};

module.exports = lobbyReducer;
