//Actions constants

export const GET_LOBBY = 'GET_LOBBY';
export const ADD_NEW_LOBBY = 'ADD_NEW_LOBBY';
export const REMOVE_ONE_LOBBY = 'REMOVE_ONE_LOBBY';

//Actions Creators

export const getLobby = lobby => {
  return {type: GET_LOBBY, lobby};
};

export const addNewLobby = lobby => {
  return {type: ADD_NEW_LOBBY, lobby};
};

export const removeOneLobby = id => {
  return {type: REMOVE_ONE_LOBBY, id};
};
//Thunks

// export const joinLobbyThunk = name => {
//   return dispatch => {
//     dispatch(joinLobby(name));
//   };
// };
