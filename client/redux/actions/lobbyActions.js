//Actions constants

export const GET_LOBBY = 'GET_LOBBY';

//Actions Creators

export const getLobby = names => {
  return {type: GET_LOBBY, names};
};

//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };
