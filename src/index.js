import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './17/modules'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import store from './shop/store.js'
import { QueryClient, QueryClientProvider } from 'react-query';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'

// const store = createStore(rootReducer, composeWithDevTools())
const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
reportWebVitals();
