const {createStore, applyMiddleware, combineReducers} = require('redux');
const playersReducer = require('./reducers/playersReducer.js');
const lobbyReducer = require('./reducers/lobbyReducer');

const rootReducer = combineReducers({
  players: playersReducer,
  names: lobbyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

module.exports = store;
