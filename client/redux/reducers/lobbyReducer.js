import {GET_LOBBY} from '../actions/lobbyActions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_LOBBY:
      return {...state, names: [...state.names, action.name]};
    default:
      return state;
  }
};
