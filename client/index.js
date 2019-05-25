import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {initializeSocket} from './socket';

//components
import App from './components/App';

initializeSocket();

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  root
);
