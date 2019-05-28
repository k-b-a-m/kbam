import { getPlayers } from "../actions/playersActions";
import axios from 'axios';

const {
  ADD_PLAYER,
  UPDATE_PLAYER,
  GET_PLAYERS,
  addPlayer,
  updatePlayer,
} = './actions/playerActions';

//THUNK CREATORS

export const addPlayerThunk = player => {
  return dispatch => {
    dispatch(addPlayer(player));
  };
};

// **TODO: Players need ID's in order for updatePlayerThunk to work. See reducer
export const updatePlayerThunk = player => {
  return dispatch => {
    dispatch(updatePlayer(player));
  };
};

export const fetchPlayers = () => {
  return dispatch => {
    return axios.get('/api/players')
      .then(res => dispatch(getPlayers(res.data)))
  }
}

//REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, ...action.player];
    case UPDATE_PLAYER: {
      const updatedPlayers = [...state].filter(
        player => player.id !== action.player.id
      );
      return [updatedPlayers, action.player];
    }
    case GET_PLAYERS:
      return {...state, players: action.players}
    default:
      return state;
  }
};
