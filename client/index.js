import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

//components
import App from './components/App';

const root = document.querySelector('#root');
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  root
);
