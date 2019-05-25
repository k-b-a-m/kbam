import {GET_LOBBY} from '../actions/lobbyActions';

export default (state = [], action) => {
  switch (action.type) {
    case GET_LOBBY:
      return [...state, action.names];
    default:
      return state;
  }
};
