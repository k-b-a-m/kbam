//Actions constants

export const GET_LOBBY = 'GET_LOBBY';

//Actions Creators

export const getLobby = lobby => {
  return {type: GET_LOBBY, lobby};
};

//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };
