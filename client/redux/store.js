const { createStore, applyMiddleware, combineReducers } = require('redux');
const playersReducer = require('./reducers/playersReducer.js');
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  players: playersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

module.exports = store;
