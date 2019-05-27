import {GET_LOBBY, ADD_NEW_LOBBY} from '../actions/lobbyActions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LOBBY:
      return [...action.lobby];
    case ADD_NEW_LOBBY:
      return [...state, action.lobby];
    default:
      return state;
  }
};
