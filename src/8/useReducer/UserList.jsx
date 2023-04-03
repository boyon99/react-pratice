import React, { useReducer, useState } from 'react';
import { userReducer } from './userReducer';
import { userData } from './userData';

function UserList() {
  const [userInput, setUserInput] = useState({
    id: '',
    name: '',
    email: '',
  });
  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const [state, dispatch] = useReducer(userReducer, userData);

  return (
    <div>
      {state.map((user, i) => {
        return (
          <p key={i}>{user.id + ' - ' + user.name + ' - ' + user.email}</p>
        );
      })}
      <input name="id" onChange={userInputHandler}></input>
      <input name="name" onChange={userInputHandler}></input>
      <input name="email" onChange={userInputHandler}></input>
      <button onClick={() => dispatch({ type: 'ADD', data: userInput })}>
        값을 입력하면 해당 값이 추가됩니다.
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE', data: userInput })}>
        id값을 입력하면 해당 값이 삭제됩니다.
      </button>
      <button onClick={() => dispatch({ type: 'UPDATE', data: userInput })}>
        id값을 입력하면 해당 값이 업데이트됩니다.
      </button>
    </div>
  );
}

export default UserList;
