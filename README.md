# react

## create-react-app

간단한 React 개발 환경 구성을 위해 페이스북에서 개발한 라이브러리

1. 설치한다.

```console
npm install -g create-react-app
```

> 오류) 전역설치 `-g`을 했기 때문에 생긴 오류로 앞에 `sudo` 명령어를 입력한다.

2. 리액트 프로젝트를 구성한다.

```console
create-react-app [폴더명]
cd [생성한 폴더]
npm start
```

<br/>

## REACT 기초 문법 JSX

- React에서는 `class`가 아닌 `className`이라는 속성을 사용하여 클래스명을 지정해야 한다.
- React Component에서 반환하는 HTML 코드에서의 최상위 Element는 단 한 개여야 한다. 해서 React에서는 빈 태그를 제공한다.

```jsx
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container1">abc</div>
      <div className="container2">abc</div>
    </>
  );
}

export default App;
```

- 변수를 데이터 바인딩 할 때는 중괄호{}를 사용한다.

```jsx
function App() {
  let post = "insert";
  return (
    <div className="App">
      <div className={post}>{post}</div>
    </div>
  );
}
```

- style을 사용할 때는 {}안에 {}자료형으로 작성해야 한다. 대쉬기호`-` 대신 카멜케이스를 사용한다.

```js
<div style={{ color: "blue", fontSize: "30px" }}> Style </div>
```

- 함수, 주석, JS문법 등 JSX의 return()문 안에서 사용할 때는 {}를 사용한다.

```jsx
return (
  {/* 주석 */}
  <div>
    <button onClick={() => {{}}></button>
    {modal == true ? true : false}
  </div>
);
```
