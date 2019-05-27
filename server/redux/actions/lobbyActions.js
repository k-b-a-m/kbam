//Actions constants

const JOIN_LOBBY = 'JOIN_LOBBY';

//Actions Creators

const joinLobby = name => {
  return {type: JOIN_LOBBY, name};
};

//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };

module.exports={
  JOIN_LOBBY,
  joinLobby
}
