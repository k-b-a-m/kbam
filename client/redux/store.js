import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import playersReducer from './reducers/playersReducer';
import gameStateReducer from './reducers/gameStateReducer';

import lobbyReducer from './reducers/lobbyReducer';

const rootReducer = combineReducers({
  players: playersReducer,
  lobby: lobbyReducer,
  gameState: gameStateReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
