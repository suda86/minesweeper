import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import './index.css';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware());

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
