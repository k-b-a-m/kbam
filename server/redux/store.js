const { createStore, applyMiddleware, combineReducers } = require("redux");
const playersReducer = require("./reducers/playersReducer.js");

const rootReducer = combineReducers({
  players: playersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


module.exports = store
