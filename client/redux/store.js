const {createStore, applyMiddleware, combineReducers} = require('redux');
const playersReducer = require('./reducers/playersReducer.js');
import thunkMiddleware from 'redux-thunk';
import lobbyReducer from './reducers/lobbyReducer.js';

const rootReducer = combineReducers({
  players: playersReducer,
  names: lobbyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

module.exports = store;
