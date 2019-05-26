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
  
