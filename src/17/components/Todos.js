// 해야 할 일을 추가하고 체크하고 삭제할 수 있는 할 일 목록 컴포넌트

import React from 'react';

const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = () => {
  const onSubmit = e => {
    e.preventDefault();
    // onInsert(input);
    // onChangeInput(''); // 등록 후 인풋 초기화
  };
  // const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
        // value={input} onChange={onChange} 
        />
        <button type="submit">등록</button>
      </form>
      <div>
        {/* {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))} */}
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};


export default Todos;