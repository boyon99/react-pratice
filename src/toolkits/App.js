import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from './store';
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;