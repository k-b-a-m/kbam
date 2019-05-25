//Actions constants

export const GET_LOBBY = 'GET_LOBBY';

//Actions Creators

export const getLobby = name => {
  return {type: GET_LOBBY, name};
};

//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };
