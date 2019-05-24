const {
  ADD_PLAYER,
  UPDATE_PLAYER,
  addPlayer,
  updatePlayer,
} = './actions/playerActions';

//THUNK CREATORS

export const addPlayerThunk = player => {
  return dispatch => {
    dispatch(addPlayer(player));
  };
};

// **TODO: Players need ID's in order for updatePlayerThunk to work. See reducer
export const updatePlayerThunk = player => {
  return dispatch => {
    dispatch(updatePlayer(player));
  };
};

//REDUCER

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, ...action.player];
    case UPDATE_PLAYER: {
      const updatedPlayers = [...state].filter(
        player => player.id !== action.player.id
      );
      return [updatedPlayers, action.player];
    }
    default:
      return state;
  }
};

module.exports = playersReducer;
