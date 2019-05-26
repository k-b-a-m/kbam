//ACTIONS

export const GET_GAMESTATE = 'GET_GAMESTATE';
// const UPDATE_GAMESTATE = 'UPDATE_GAMESTATE';

//Action Creators
export const getGameState = () => {
  return {
    type: GET_GAMESTATE,
    players,
  };
};


//NOT NEEDED
// export const updateGameState = (gameState) => {
//   return {
//     type: UPDATE_GAMESTATE,
//     gameState,
//   };
// };