import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import playersReducer from './reducers/playersReducer';

import lobbyReducer from './reducers/lobbyReducer';

const rootReducer = combineReducers({
  players: playersReducer,
  names: lobbyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
