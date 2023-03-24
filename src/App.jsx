import React from 'react';
import Shop from './shop/App';
import './App.scss';

const App = () => {
  return (
    <div>
      <div className="hello">Hello React</div>
      <div className="content">
        <Shop />
      </div>
    </div>
  );
};

export default App;
