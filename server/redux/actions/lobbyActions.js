//Actions constants

export const JOIN_LOBBY = 'JOIN_LOBBY';

//Actions Creators

export const joinLobby = name => {
  return {type: JOIN_LOBBY, name};
};

//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };
