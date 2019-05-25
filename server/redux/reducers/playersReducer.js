const {ADD_PLAYER}= require('../actions/playersActions')

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, ...action.player];
    default:
      return state;
  }
};

module.exports = playersReducer;
