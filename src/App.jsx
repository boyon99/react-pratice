import React from 'react';
import Chapter from './17/App';
import './App.scss';

const App = () => {
  return (
    <div>
      <div className="start">React</div>
      <div className="content">
        <Chapter />
      </div>
    </div>
  );
};

export default App;
