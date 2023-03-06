// 경로 : src/App.js

import { React, useState } from "react";
import "./App.css";

/**
 * Component 문법
 * 긴 HTML을 하나의 컴포넌트로 치환한다. return()안에 원하는 HTML 문법을 담는다.
 */
function Modal(props) {
  return (
    <div className="modal">
      {/**
       * props
       * 이를 통해 호출하는 곳에서 파라미터로 변수를 넘겨줄 수 있다.
       */}
      <h4>{props.글제목[props.i]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// arrow function을 사용할 수 있다.
let modal = () => {
  return <></>;
};

function Practice() {
  /**
   * [변수, 변경함수] = useState(변수)
   * 자료를 잠시 저장한다.
   * 변수와 달리 state에 데이터를 저장하는 이유는 변경사항이 생겼을 때 html에 자동으로 재렌더링을 해주기 때문이다. 따라서 자주 변경되는 데이터를 저장할 때 유용하다.
   * 변수를 변경하기 위해서는 변경함수를 작성해야 한다. 변경함수(변수)로, 새롭게 ()안에 변수로 값이 변경된다. state 변경 함수는 비동기적으로 처리된다.
   */
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState([0, 0, 0]);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="Practice">
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        {" "}
        정렬하기{" "}
      </button>

      {/** map으로 생성한 html안에는 key={i}와 같이 구별가능한 속성을 추가해야 한다. */}
      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                {" "}
                &#9733;
              </span>{" "}
              {따봉[i]}
            </h4>
            <button
              onClick={() => {
                let copyDelete = [...글제목];
                copyDelete.splice(i, 1);
                따봉.splice(i, 1);
                modal.splice(i, 1);

                글제목변경(copyDelete);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                let copy = [...modal];
                copy[i] = copy[i] === 1 ? 0 : 1;
                setModal(copy);
              }}
            >
              {" "}
              상세정보{" "}
            </button>
            {modal[i] === 1 ? <Modal 글제목={글제목} i={i}></Modal> : null}
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copyTitle = [...글제목];
          copyTitle[글제목.length] = 입력값;
          따봉[따봉.length] = 0;
          modal[modal.length] = 0;
          글제목변경(copyTitle);
        }}
      >
        글발행
      </button>
    </div>
  );
}

export default Practice;
