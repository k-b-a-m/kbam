import {GET_GAMESTATE} from '../actions/gameStateActions';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_GAMESTATE:
      return {state:action.state};
    default:
      return state;
  }
};
