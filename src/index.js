import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { animeReducer } from './reducers/animeReducer';
import thunk from 'redux-thunk';

//create store that React app listens to
//a store is a bunch of data
//the store takes in reducer and the data 
//you update the store with actions
//actions are made through reducer functions, which is used by createStore(reducer, { initial state })
//thunk is middleware or a plugiin that extends dispatch() to do more things
const store = createStore(animeReducer, applyMiddleware(thunk, logger));


//wrap with Provider to let components see the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
