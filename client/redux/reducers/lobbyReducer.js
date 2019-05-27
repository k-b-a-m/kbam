import {
  GET_LOBBY,
  ADD_NEW_LOBBY,
  REMOVE_ONE_LOBBY,
  TOGGLE_READY,
  NEW_PLAYER_READY,
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
    case TOGGLE_READY:
      const newState = [...state];
      const readyIndex = newState.findIndex(player => player.id === action.id);
      newState[readyIndex].isReady = !newState[readyIndex].isReady;
      return [...newState];
    default:
      return state;
  }
};
