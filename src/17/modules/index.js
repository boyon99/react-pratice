// root reducer
// store는 한 개만 생성할 수 있다. 그러므로 리듀서를 하나로 합치는 작업이 필요하다. 이 작업은 combineReducers라는 유틸함수로 쉽게 처리할 수 있다.
// index.js 설정 시 호출 시 폴더명만 입력하면 된다.
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;