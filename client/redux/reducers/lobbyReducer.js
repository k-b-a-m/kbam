import {
  GET_LOBBY,
  ADD_NEW_LOBBY,
  REMOVE_ONE_LOBBY,
} from '../actions/lobbyActions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LOBBY:
      return [...action.lobby];
    case ADD_NEW_LOBBY:
      return [...state, action.lobby];
    case REMOVE_ONE_LOBBY: {
      const newLobby = state.filter(player => player.id !== action.id);
      return [...newLobby];
    }
    default:
      return state;
  }
};
