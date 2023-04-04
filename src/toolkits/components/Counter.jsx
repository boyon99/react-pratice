import React from 'react';
import { increment, useCounter } from '../store/slices/counterSlice';

export default function Counter() {
  const { count, dispatch } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}
