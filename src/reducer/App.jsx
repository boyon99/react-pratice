import React, { createContext } from 'react';
import UserList from './UserList';

export const UserContext = createContext(null);

const App = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default App;
