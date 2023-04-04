import React from 'react';
import './App.scss';
// import Shop from './shop/App';
// import Test from './Test';
// import Chapter from './17/App';
import Counter from './toolkits/App';

const App = () => {
  return (
    <div>
      <div className="content">
        {/* <Shop /> */}
        {/* <Test /> */}
        {/* <Chapter /> */}
        <Counter />
      </div>
      <div className="hello">Hello React</div>
    </div>
  );
};

export default App;
