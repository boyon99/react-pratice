import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './17/modules'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// store 생성하기
const store = createStore(rootReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
reportWebVitals();
