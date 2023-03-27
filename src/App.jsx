import React from 'react';
// import Shop from './shop/App';
import './App.scss';
// import Test from './Test';
import Reducer from './reducer/App';

const App = () => {
  return (
    <div>
      <div className="hello">Hello React</div>
      <div className="content">
        {/* <Shop /> */}
        {/* <Test /> */}
        <Reducer />
      </div>
    </div>
  );
};

export default App;
