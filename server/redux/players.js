const ADD_PLAYER = "ADD_PLAYER";


//Action Creators 
const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    player
  };
};

//player reducer
const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, ...action.player];
  default:
    return state;
  }
};


