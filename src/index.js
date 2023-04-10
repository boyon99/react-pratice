import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// redux
// import { Provider } from 'react-redux';

// 리덕스 미들웨어
// import { composeWithDevTools } from 'redux-devtools-extension';
/** 
import { applyMiddleware, legacy_createStore, compose } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import rootReducer from './17/modules'
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(logger)))
*/
// import store from './shop/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);